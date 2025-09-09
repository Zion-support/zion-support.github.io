#!/usr/bin/env node

const { execSync } = require('child_process');

function getRepoFromGit() {
	const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
	const match = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
	if (!match) throw new Error('Unable to parse owner/repo from origin');
	return { owner: match[1], repo: match[2] };
}

function getToken() {
	if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) {
		return process.env.GITHUB_TOKEN.trim();
	}
	const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
	const tokenMatch = remoteUrl.match(/^https:\/\/x-access-token:([^@]+)@github\.com\//);
	if (!tokenMatch) throw new Error('No GitHub token found in env or origin remote');
	return tokenMatch[1];
}

async function gh(path, opts = {}) {
	const base = 'https://api.github.com';
	const token = getToken();
	const res = await fetch(`${base}${path}`, {
		method: opts.method || 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/vnd.github+json',
			'User-Agent': 'ready-and-merge-open-prs-script',
			'Content-Type': 'application/json'
		},
		body: opts.body ? JSON.stringify(opts.body) : undefined
	});
	const text = await res.text();
	let data;
	try { data = text ? JSON.parse(text) : undefined; } catch { data = { raw: text }; }
	if (!res.ok) {
		const msg = data && data.message ? data.message : res.statusText;
		const err = new Error(`${res.status} ${msg}`);
		err.status = res.status;
		err.data = data;
		throw err;
	}
	return data;
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function listOpenPRs(owner, repo) {
	return gh(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
}

async function readyForReview(owner, repo, number) {
	try {
		await gh(`/repos/${owner}/${repo}/pulls/${number}/ready_for_review`, { method: 'POST' });
		return true;
	} catch {
		return false;
	}
}

async function updateBranch(owner, repo, number) {
	try {
		await gh(`/repos/${owner}/${repo}/pulls/${number}/update-branch`, { method: 'PUT' });
		return true;
	} catch {
		return false;
	}
}

async function getPR(owner, repo, number) {
	return gh(`/repos/${owner}/${repo}/pulls/${number}`);
}

async function tryMerge(owner, repo, number, title) {
	try {
		const res = await gh(`/repos/${owner}/${repo}/pulls/${number}/merge`, {
			method: 'PUT',
			body: { merge_method: 'squash', commit_title: `Merge PR #${number}: ${title || ''}` }
		});
		if (res && res.merged) return { status: 'merged', message: res.sha };
		return { status: 'skipped', message: res && res.message ? res.message : 'not merged' };
	} catch (e) {
		return { status: 'failed', message: e.message, code: e.status };
	}
}

async function waitForMergeable(owner, repo, number, opts = {}) {
	const { timeoutMs = 20000, intervalMs = 1500 } = opts;
	const start = Date.now();
	while (Date.now() - start < timeoutMs) {
		try {
			const pr = await getPR(owner, repo, number);
			if (typeof pr.mergeable === 'boolean') return pr.mergeable;
		} catch {}
		await sleep(intervalMs);
	}
	return false;
}

async function main() {
	const { owner, repo } = getRepoFromGit();
	console.log(`📂 Repository: ${owner}/${repo}`);
	const prs = await listOpenPRs(owner, repo);
	console.log(`📋 Open PRs: ${prs.length}`);
	if (!prs.length) return;

	for (const pr of prs) {
		console.log(`\n🔄 PR #${pr.number}: ${pr.title}`);
		if (pr.draft) {
			const ok = await readyForReview(owner, repo, pr.number);
			console.log(`   Draft -> ready_for_review: ${ok ? 'ok' : 'failed'}`);
			await sleep(800);
		}

		// Ask GitHub to update branch (bring base into head)
		const updated = await updateBranch(owner, repo, pr.number);
		console.log(`   update-branch: ${updated ? 'requested' : 'not supported'}`);
		if (updated) await sleep(2500);

		// Wait for mergeable calculation if needed
		const mergeable = await waitForMergeable(owner, repo, pr.number, { timeoutMs: 25000, intervalMs: 1800 });
		console.log(`   mergeable: ${mergeable}`);

		let res = await tryMerge(owner, repo, pr.number, pr.title || '');
		if (res.status !== 'merged' && updated) {
			console.log('   Retry after update-branch...');
			await sleep(2000);
			res = await tryMerge(owner, repo, pr.number, pr.title || '');
		}
		console.log(`   -> ${res.status}: ${res.message}`);
		await sleep(500);
	}
	console.log('\n🎉 Completed.');
}

if (require.main === module) {
	main().catch(err => {
		console.error('❌ Error:', err.message);
		process.exit(1);
	});
}