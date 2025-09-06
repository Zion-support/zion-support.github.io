#!/usr/bin/env python3
import json
import os
import re
import subprocess
import sys
import time
import urllib.request
import urllib.error
from typing import Dict, Any, List

REPO = 'Zion-Holdings/zion.app'
API_BASE = f'https://api.github.com/repos/{REPO}'


def run(cmd: List[str], cwd: str = None, check: bool = True) -> str:
	result = subprocess.run(cmd, cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
	if check and result.returncode != 0:
		raise RuntimeError(f"Command failed ({result.returncode}): {' '.join(cmd)}\nOutput:\n{result.stdout}")
	return result.stdout


def get_token_from_origin() -> str:
	origin = run(['git', 'remote', 'get-url', 'origin']).strip()
	m = re.search(r'https://x-access-token:([^@]+)@github.com/', origin)
	if not m:
		raise RuntimeError('Failed to extract GitHub token from origin remote URL')
	return m.group(1)


def gh_request(method: str, path: str, token: str, payload: Dict[str, Any] = None) -> Any:
	headers = {
		'Authorization': f'Bearer {token}',
		'Accept': 'application/vnd.github+json',
		'User-Agent': 'cursor-agent'
	}
	url = API_BASE + path
	data = None
	if payload is not None:
		data = json.dumps(payload).encode()
		headers['Content-Type'] = 'application/json'
	req = urllib.request.Request(url, data=data, headers=headers, method=method)
	with urllib.request.urlopen(req) as resp:
		return json.load(resp)


def list_open_prs(token: str) -> List[Dict[str, Any]]:
	prs = gh_request('GET', '/pulls?state=open&per_page=100', token)
	return prs


def ensure_clean_worktree():
	status = run(['git', 'status', '--porcelain'], check=False)
	if status.strip():
		raise RuntimeError('Working tree is not clean. Please commit or stash changes before running the script.')


def sanitize_branch(name: str) -> str:
	return re.sub(r'[^a-zA-Z0-9_.\-\/]+', '-', name)


def update_branch_with_main(head_ref: str) -> Dict[str, Any]:
	# Fetch and create local branch tracking the PR head
	run(['git', 'fetch', 'origin', f'+refs/heads/*:refs/remotes/origin/*'])
	local_branch = f'pr-update-{sanitize_branch(head_ref)}'
	# Reset local branch to remote head
	run(['git', 'checkout', '-B', local_branch, f'origin/{head_ref}'])
	# Merge origin/main into the PR branch
	merge_ok = True
	merge_output = ''
	try:
		merge_output = run(['git', 'merge', '--no-edit', 'origin/main'])
	except Exception as e:
		# Try automatic resolution preferring PR changes
		try:
			merge_output += "\n--- retry with -X ours ---\n"
			merge_output += run(['git', 'merge', '-X', 'ours', '--no-edit', 'origin/main'])
		except Exception as e2:
			merge_ok = False
			merge_output += f"\nMerge failed after retry: {e2}"
	if not merge_ok:
		# Abort merge to keep working tree clean for next PR
		try:
			run(['git', 'merge', '--abort'], check=False)
		except Exception:
			pass
		return {'updated': False, 'output': merge_output}
	# Push updated branch back to origin
	push_output = run(['git', 'push', 'origin', f'{local_branch}:{head_ref}'])
	return {'updated': True, 'output': merge_output + "\n" + push_output}


def wait_for_mergeable(pr_number: int, token: str, attempts: int = 8, delay_sec: float = 1.0) -> Dict[str, Any]:
	for _ in range(attempts):
		pr = gh_request('GET', f'/pulls/{pr_number}', token)
		if pr.get('mergeable') is not None:
			return pr
		time.sleep(delay_sec)
	return gh_request('GET', f'/pulls/{pr_number}', token)


def try_merge_pr(pr_number: int, title: str, token: str) -> Dict[str, Any]:
	pr = wait_for_mergeable(pr_number, token)
	if not pr.get('mergeable', False):
		return {'merged': False, 'reason': 'not_mergeable', 'mergeable_state': pr.get('mergeable_state')}
	sha = pr.get('head', {}).get('sha')
	try:
		res = gh_request('PUT', f'/pulls/{pr_number}/merge', token, {
			'commit_title': f'Merge PR #{pr_number}: {title}',
			'merge_method': 'squash',
			'sha': sha
		})
		return {'merged': bool(res.get('merged')), 'merge_sha': res.get('sha'), 'raw': res}
	except urllib.error.HTTPError as e:
		try:
			detail = e.read().decode()
		except Exception:
			detail = str(e)
		return {'merged': False, 'reason': 'http_error', 'detail': detail}


def main() -> int:
	try:
		token = get_token_from_origin()
		ensure_clean_worktree()
		# Always fetch
		run(['git', 'fetch', '--all', '--prune'])
		open_prs = list_open_prs(token)
		main_prs = [p for p in open_prs if p.get('base', {}).get('ref') == 'main']
		results: List[Dict[str, Any]] = []
		for p in main_prs:
			number = p['number']
			title = p['title']
			head_ref = p['head']['ref']
			head_repo = p['head'].get('repo', {})
			fork = bool(head_repo.get('fork')) or (head_repo.get('full_name') != REPO)
			entry: Dict[str, Any] = {'number': number, 'title': title, 'head': head_ref}
			if not fork:
				update = update_branch_with_main(head_ref)
				entry['update'] = update
			else:
				entry['update'] = {'updated': False, 'output': 'Skipped update (forked head, cannot push)'}
			merge_res = try_merge_pr(number, title, token)
			entry['merge'] = merge_res
			results.append(entry)
		print(json.dumps({'count': len(main_prs), 'results': results}, indent=2))
		# Save to file for auditing
		os.makedirs('scripts', exist_ok=True)
		with open('scripts/batch_merge_results.json', 'w') as f:
			json.dump({'count': len(main_prs), 'results': results}, f, indent=2)
		return 0
	except Exception as e:
		print(f"ERROR: {e}", file=sys.stderr)
		return 1


if __name__ == '__main__':
	sys.exit(main())