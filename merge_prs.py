#!/usr/bin/env python3

import subprocess
import sys
import re
import json
from datetime import datetime
import os
import urllib.request
import urllib.error
import base64

def run_command(command, cwd="/workspace"):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(
            command, 
            shell=True, 
            cwd=cwd, 
            capture_output=True, 
            text=True, 
            timeout=300
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def resolve_conflicts_in_file(filepath):
    """Resolve merge conflicts in a file"""
    print(f"🔧 Resolving conflicts in {filepath}...")
    
    try:
        with open(filepath, 'r') as f:
            lines = f.readlines()

        resolved_lines = []
        in_conflict = False
        taking_section = None

        for raw_line in lines:
            line = raw_line.rstrip('\n')
            if line.startswith('<<<<<<< '):
                in_conflict = True
                taking_section = 'ours'
                continue
            if in_conflict and line.startswith('======='):
                taking_section = 'theirs'
                continue
            if in_conflict and line.startswith('>>>>>>> '):
                in_conflict = False
                taking_section = None
                continue

            if not in_conflict:
                resolved_lines.append(line)
            else:
                if taking_section == 'ours':
                    resolved_lines.append(line)

        with open(filepath, 'w') as f:
            f.write('\n'.join(resolved_lines) + ('\n' if resolved_lines and not resolved_lines[-1].endswith('\n') else ''))

        print(f"✅ Resolved conflicts in {filepath}")
        return True, "Conflicts resolved"

    except Exception as e:
        return False, f"Error resolving conflicts: {str(e)}"

def merge_branch(branch_name, pr_number):
    """Merge a specific branch into main"""
    print(f"🔄 Attempting to merge branch: {branch_name} (PR #{pr_number})...")
    
    # Determine merge target ref: prefer local branch, else remote tracking
    target_ref = None
    is_local, _, _ = run_command(f"git show-ref --verify --quiet refs/heads/{branch_name}")
    if is_local:
        print(f"📍 Using local branch {branch_name}")
        target_ref = branch_name
    else:
        # Ensure we have latest refs
        run_command("git fetch origin --prune")
        has_remote, _, _ = run_command(f"git show-ref --verify --quiet refs/remotes/origin/{branch_name}")
        if has_remote:
            target_ref = f"origin/{branch_name}"
        else:
            # Attempt to fetch explicitly
            fetched, _, fetch_err = run_command(f"git fetch origin {branch_name}:{branch_name}")
            if fetched:
                print(f"📥 Fetched remote branch to local {branch_name}")
                target_ref = branch_name
            else:
                print(f"❌ Branch {branch_name} not found locally or on remote: {fetch_err}")
                return False
    
    # Try to merge
    success, stdout, stderr = run_command(f"git merge --no-commit --no-ff {target_ref}")
    if success:
        print(f"✅ Successfully merged {branch_name}")
        run_command(f"git commit -m \"Merge PR #{pr_number} ({branch_name}) into main - {datetime.now()}\"")
        return True
    else:
        print(f"⚠️ Merge conflicts detected in {branch_name}, resolving...")
        
        # Get conflicted files
        success, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
        if not success or not stdout.strip():
            print("❌ No conflicted files found, but merge failed. Aborting...")
            run_command("git merge --abort")
            return False
        
        conflicted_files = stdout.strip().split('\n')
        print(f"📋 Conflicted files: {conflicted_files}")
        
        # Resolve conflicts in each file
        for file_path in conflicted_files:
            if file_path.strip():
                resolve_success, message = resolve_conflicts_in_file(file_path.strip())
                if not resolve_success:
                    print(f"❌ Failed to resolve conflicts in {file_path}: {message}")
                    run_command("git merge --abort")
                    return False
        
        # Add resolved files and commit
        run_command("git add .")
        run_command(f"git commit -m \"Resolve merge conflicts for PR #{pr_number} ({branch_name}) - {datetime.now()}\"")
        
        print(f"✅ Successfully resolved conflicts and merged {branch_name}")
        return True

def fetch_open_prs(repo: str, token: str, state: str = "open", per_page: int = 50):
    """Fetch open PRs from GitHub API and return list of (pr_number, head_branch) tuples.

    This uses basic bearer auth via an environment variable token to avoid adding dependencies.
    """
    api_url = f"https://api.github.com/repos/{repo}/pulls?state={state}&per_page={per_page}"
    req = urllib.request.Request(api_url)
    if token:
        req.add_header("Authorization", f"token {token}")
    req.add_header("Accept", "application/vnd.github+json")

    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = resp.read().decode("utf-8")
    except urllib.error.HTTPError as e:
        print(f"❌ HTTP error fetching PRs: {e.code} {e.reason}")
        return []
    except urllib.error.URLError as e:
        print(f"❌ URL error fetching PRs: {e.reason}")
        return []

    try:
        pr_list = json.loads(data)
    except json.JSONDecodeError:
        print("❌ Failed to parse PR list JSON")
        return []

    results = []
    for pr in pr_list:
        number = pr.get("number")
        head = pr.get("head", {})
        head_ref = head.get("ref")
        if number and head_ref:
            results.append((number, head_ref))
    return results


def main():
    print("🚀 Starting comprehensive PR merge process...")
    print(f"⏰ Started at: {datetime.now()}")
    print("=" * 50)
    
    # Ensure we're on main branch
    print("🔄 Switching to main branch...")
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"❌ Could not checkout main branch: {stderr}")
        return 1
    
    # Pull latest changes
    print("📥 Pulling latest changes from main...")
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"❌ Could not pull latest changes: {stderr}")
        return 1
    
    # Determine repo and token for API calls
    repo = os.environ.get("GITHUB_REPOSITORY", "Zion-Holdings/zion.app")
    token = os.environ.get("GITHUB_TOKEN", "")

    # Fetch open PRs dynamically
    print(f"🔎 Fetching open PRs for {repo}...")
    prs_to_merge = fetch_open_prs(repo=repo, token=token)
    # Fallback: if API not available, try to enumerate PR refs from git
    if not prs_to_merge:
        print("ℹ️ No PRs from API or token missing. Falling back to git refs for PR heads...")
        success, stdout, stderr = run_command('git ls-remote origin "pull/*/head"')
        if success and stdout.strip():
            lines = [l for l in stdout.strip().split('\n') if l.strip()]
            parsed = []
            for l in lines:
                try:
                    parts = l.split('\t')
                    if len(parts) != 2:
                        continue
                    ref = parts[1].strip()
                    # ref like: refs/pull/123/head
                    m = re.search(r"refs/pull/(\d+)/head", ref)
                    if m:
                        pr_num = int(m.group(1))
                        parsed.append((pr_num, ref))
                except Exception:
                    continue
            # Sort by PR number descending (most recent first) and cap to 30
            parsed.sort(key=lambda x: x[0], reverse=True)
            prs_to_merge = parsed[:30]
        else:
            print("ℹ️ Could not list PR refs. Exiting cleanly.")
            return 0

    print(f"📋 Found {len(prs_to_merge)} open PR(s) to process.")
    
    successful_merges = 0
    failed_merges = 0
    
    # Process each PR
    for pr_number, branch_name in prs_to_merge:
        print("")
        print("=" * 50)
        print(f"🔄 Processing PR #{pr_number} from branch/ref: {branch_name}")
        print("=" * 50)
        # If branch_name is a PR ref, fetch it to a local branch name first
        branch_to_merge = branch_name
        if branch_name.startswith("refs/pull/") or branch_name.startswith("pull/"):
            local_branch = f"pr-{pr_number}"
            # Fetch PR head to local branch
            f_ok, _, f_err = run_command(f"git fetch origin {branch_name}:{local_branch}")
            if not f_ok:
                print(f"❌ Failed to fetch PR ref {branch_name} to {local_branch}: {f_err}")
            run_command("git checkout main")
            branch_to_merge = local_branch

        if merge_branch(branch_to_merge, pr_number):
            print(f"✅ PR #{pr_number} processed successfully")
            successful_merges += 1
        else:
            print(f"❌ PR #{pr_number} processing failed")
            failed_merges += 1
        
        print("=" * 50)
        print("")
    
    # Test the build
    print("🔨 Testing build after merges...")
    success, stdout, stderr = run_command("pnpm run build:no-check")
    if success:
        print("✅ Build successful after merges")
    else:
        print("❌ Build failed after merges")
        print("🔧 Attempting to fix build issues...")
        
        # Try to fix build issues
        run_command("pnpm install")
        run_command("pnpm run lint:fix")
        
        # Try build again
        success, stdout, stderr = run_command("pnpm run build:no-check")
        if success:
            print("✅ Build fixed and successful")
            run_command(f"git add .")
            run_command(f"git commit -m \"Fix build issues after PR merges - {datetime.now()}\"")
        else:
            print(f"❌ Build still failing: {stderr}")
    
    # Push changes
    print("💾 Pushing changes to remote...")
    success, stdout, stderr = run_command("git push origin main")
    if not success:
        print(f"❌ Could not push to main: {stderr}")
        return 1
    
    # Summary
    print("")
    print("🎉 PR merge process completed!")
    print("📊 Final Summary:")
    print(f"   ✅ Successful merges: {successful_merges}")
    print(f"   ❌ Failed merges: {failed_merges}")
    print(f"⏰ Completed at: {datetime.now()}")
    
    return 0

if __name__ == "__main__":
    sys.exit(main())