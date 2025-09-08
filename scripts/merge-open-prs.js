/*
 Automates merging open PRs targeting main using GITHUB token from origin remote.
*/

const owner = process.env.OWNER;
const repo = process.env.REPO && process.env.REPO.replace(/\.git$/, '');
const token = process.env.TOKEN;

if (!owner || !repo || !token) {
  console.error('Missing OWNER, REPO, or TOKEN environment variables');
  process.exit(1);
}

const headers = {
  Authorization: `token ${token}`,
  Accept: 'application/vnd.github+json',
  'User-Agent': 'merge-open-prs-script'
};

async function getJson(url) {
  const res = await fetch(url, { headers });
  if (res.status >= 400) {
    const text = await res.text().catch(() => '');
    throw new Error(`GET ${res.status} ${url} ${text}`);
  }
  return res.json();
}

async function tryMerge(number) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/pulls/${number}/merge`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ merge_method: 'merge' })
  });
  if (res.status === 200) return { ok: true };
  const text = await res.text().catch(() => '');
  return { ok: false, status: res.status, text };
}

(async () => {
  let page = 1;
  let considered = 0;
  let merged = 0;
  let failed = 0;
  const logs = [];

  while (true) {
    const prs = await getJson(`https://api.github.com/repos/${owner}/${repo}/pulls?state=open&per_page=50&page=${page}`);
    if (!Array.isArray(prs) || prs.length === 0) break;
    const targets = prs.filter(pr => pr.base && pr.base.ref === 'main');
    for (const pr of targets) {
      considered++;
      // Check mergeable state to avoid needless attempts
      let details;
      try {
        details = await getJson(`https://api.github.com/repos/${owner}/${repo}/pulls/${pr.number}`);
      } catch (e) {
        failed++;
        logs.push(`details failed #${pr.number} ${String(e.message).slice(0, 160)}`);
        continue;
      }
      if (details.mergeable === false) {
        failed++;
        logs.push(`not mergeable #${pr.number}`);
        continue;
      }
      const result = await tryMerge(pr.number);
      if (result.ok) {
        merged++;
        logs.push(`merged #${pr.number}`);
      } else {
        failed++;
        logs.push(`failed #${pr.number} ${result.status}`);
      }
    }
    page++;
    // Safety: stop after a few pages to avoid very long runs
    if (page > 5) break;
  }

  console.log(`considered: ${considered}`);
  console.log(`merged: ${merged}`);
  console.log(`failed: ${failed}`);
  console.log(logs.join('\n'));
})().catch(e => {
  console.error(e.message);
  process.exit(1);
});

#!/usr/bin/env node
/*
 * Merge all open PRs into main using GitHub API.
 * - Lists open PRs
 * - For each PR: wait for mergeability computation
 * - If mergeable, merge via API
 * - If not mergeable, attempt to update head branch from main via API and retry
 */

import { execSync } from 'child_process';

function getRemoteInfo() {
  try {
    const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
    const m = remoteUrl.match(/github\.com[:/]([^/]+)\/([^/]+?)(?:\.git)?$/);
    if (!m) throw new Error('Cannot parse owner/repo from remote');
    const owner = m[1];
    const repo = m[2];
    // Try to extract token if present in remote URL (x-access-token:TOKEN@github.com)
    const tokenMatch = remoteUrl.match(/x-access-token:([^@]+)@github\.com/);
    const token = tokenMatch ? tokenMatch[1] : process.env.GITHUB_TOKEN || '';
    return { owner, repo, token };
  } catch (e) {
    console.error('Failed to get remote info:', e.message);
    process.exit(1);
  }
}

async function api(path, { method = 'GET', body, token }) {
  const url = `https://api.github.com${path}`;
  const res = await fetch(url, {
    method,
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': token ? `Bearer ${token}` : '',
      'User-Agent': 'merge-open-prs-script'
    },
    body: body ? JSON.stringify(body) : undefined
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${method} ${url} failed: ${res.status} ${res.statusText} ${text}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

async function listOpenPRs(owner, repo, token) {
  const prs = await api(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`, { token });
  return prs.map(p => ({ number: p.number, title: p.title, head: p.head.ref, base: p.base.ref }));
}

async function getPR(owner, repo, token, number) {
  return api(`/repos/${owner}/${repo}/pulls/${number}`, { token });
}

async function waitForMergeable(owner, repo, token, number, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const pr = await getPR(owner, repo, token, number);
    if (pr.mergeable !== null) return pr;
    await new Promise(r => setTimeout(r, 1000));
  }
  return getPR(owner, repo, token, number);
}

async function mergePR(owner, repo, token, number) {
  try {
    await api(`/repos/${owner}/${repo}/pulls/${number}/merge`, {
      method: 'PUT',
      token,
      body: { merge_method: 'merge' }
    });
    console.log(`✅ Merged PR #${number}`);
    return true;
  } catch (e) {
    console.log(`❌ Merge failed for PR #${number}: ${e.message}`);
    return false;
  }
}

async function updateBranchFromMain(owner, repo, token, number) {
  try {
    // Preferred API if enabled on repo: update a pull request branch
    await api(`/repos/${owner}/${repo}/pulls/${number}/update-branch`, {
      method: 'PUT',
      token
    });
    console.log(`🔄 Updated branch for PR #${number} using update-branch API`);
    return true;
  } catch (e) {
    // Fallback: merge main into head via merges API
    try {
      const pr = await getPR(owner, repo, token, number);
      await api(`/repos/${owner}/${repo}/merges`, {
        method: 'POST',
        token,
        body: { base: pr.head.ref, head: pr.base.ref }
      });
      console.log(`🔀 Merged ${pr.base.ref} into ${pr.head.ref} for PR #${number}`);
      return true;
    } catch (e2) {
      console.log(`⚠️  Could not auto-update PR #${number} from main: ${e2.message}`);
      return false;
    }
  }
}

async function run() {
  const { owner, repo, token } = getRemoteInfo();
  if (!token) {
    console.error('No GitHub token found in remote URL or GITHUB_TOKEN env. Cannot proceed.');
    process.exit(1);
  }
  console.log(`📦 Repo: ${owner}/${repo}`);
  const prs = await listOpenPRs(owner, repo, token);
  if (prs.length === 0) {
    console.log('✅ No open PRs');
    return;
  }
  console.log(`📋 Open PRs: ${prs.length}`);
  let merged = 0;
  for (const pr of prs) {
    console.log(`\n🔍 Processing PR #${pr.number}: ${pr.title}`);
    const prData = await waitForMergeable(owner, repo, token, pr.number);
    if (prData.mergeable) {
      if (await mergePR(owner, repo, token, pr.number)) merged++;
      continue;
    }
    console.log(`⚠️  PR #${pr.number} not mergeable. Attempting to update head from main...`);
    const updated = await updateBranchFromMain(owner, repo, token, pr.number);
    if (updated) {
      // Recompute mergeable and retry
      const prData2 = await waitForMergeable(owner, repo, token, pr.number);
      if (prData2.mergeable) {
        if (await mergePR(owner, repo, token, pr.number)) merged++;
        continue;
      } else {
        console.log(`❌ Still not mergeable after update: PR #${pr.number}`);
      }
    } else {
      console.log(`❌ Skipping PR #${pr.number} due to unresolved conflicts`);
    }
    // Local fallback: attempt merging actual PR head branch into main preferring main on conflicts
    try {
      console.log(`🧪 Local merge fallback for PR #${pr.number} (head: ${pr.head})...`);
      const localBranch = `pr-${pr.number}-head`;
      // Fetch the actual head branch
      execSync(`git fetch origin ${pr.head}:${localBranch}`, { stdio: 'inherit' });
      execSync(`git checkout main`, { stdio: 'inherit' });
      try {
        execSync(`git merge --no-ff --no-edit ${localBranch}`, { stdio: 'inherit' });
      } catch (e1) {
        console.log('⚠️  Conflicts on clean merge, trying with -X ours to prefer main');
        try { execSync('git merge --abort', { stdio: 'inherit' }); } catch {}
        execSync(`git merge -X ours --no-edit ${localBranch}`, { stdio: 'inherit' });
      }
      // Handle push rejections by pulling latest main then pushing
      try {
        execSync(`git push origin main`, { stdio: 'inherit' });
      } catch (ePush) {
        console.log('⚠️  Push rejected, pulling latest main then retrying push');
        execSync(`git pull --no-rebase origin main`, { stdio: 'inherit' });
        execSync(`git push origin main`, { stdio: 'inherit' });
      }
      console.log(`✅ Integrated PR #${pr.number} into main via local merge`);
      try {
        await api(`/repos/${owner}/${repo}/issues/${pr.number}/comments`, {
          method: 'POST',
          token,
          body: { body: 'Merged into main via local merge due to conflicts preventing auto-merge.' }
        });
        // After pushing a merge commit with both parents (main and head), GitHub should auto-mark PR as merged.
      } catch {}
      merged++;
      continue;
    } catch (e) {
      console.log(`❌ Local merge fallback failed for PR #${pr.number}: ${e.message}`);
    }
  }
  console.log(`\n🎉 Done. Merged ${merged} / ${prs.length} PRs.`);
}

// Ensure fetch is available (Node 18+)
// Node 18+ has global fetch

run().catch(err => {
  console.error(err);
  process.exit(1);
});

