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

async function ghRequest(path, method = 'GET', body) {
  const base = 'https://api.github.com';
  const token = getToken();
  const res = await fetch(`${base}${path}`, {
    method,
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'undraft-and-merge-script',
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  });

  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : undefined; } catch { data = { raw: text }; }
  if (!res.ok) {
    const message = (data && data.message) ? data.message : `HTTP ${res.status}`;
    throw new Error(message);
  }
  return data;
}

async function getOpenPRs(owner, repo) {
  const prs = await ghRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
  return prs || [];
}

async function markReady(owner, repo, number) {
  // GitHub API to mark ready for review
  await ghRequest(`/repos/${owner}/${repo}/pulls/${number}/ready_for_review`, 'POST');
}

async function mergePR(owner, repo, number) {
  try {
    const result = await ghRequest(`/repos/${owner}/${repo}/pulls/${number}/merge`, 'PUT', {
      merge_method: 'merge',
      commit_title: `Merge PR #${number}`,
      commit_message: `Automated merge of PR #${number}`
    });
    return { success: true, result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

(async function main() {
  const { owner, repo } = getRepoFromGit();
  console.log(`📂 Repository: ${owner}/${repo}`);
  const prs = await getOpenPRs(owner, repo);
  console.log(`📋 Open PRs: ${prs.length}`);
  for (const pr of prs) {
    console.log(`\n🔄 PR #${pr.number}: ${pr.title}`);
    if (pr.draft) {
      try {
        console.log('   🟡 Draft detected. Marking ready for review…');
        await markReady(owner, repo, pr.number);
        console.log('   ✅ Marked ready');
        await new Promise(r => setTimeout(r, 1500));
      } catch (e) {
        console.log(`   ❌ Failed to mark ready: ${e.message}`);
        continue;
      }
    }
    const mergeResult = await mergePR(owner, repo, pr.number);
    if (mergeResult.success) {
      console.log(`   ✅ Merged PR #${pr.number}`);
    } else {
      console.log(`   ❌ Merge failed for PR #${pr.number}: ${mergeResult.error}`);
    }
    await new Promise(r => setTimeout(r, 800));
  }
  console.log('\n🎉 Undraft-and-merge process finished');
})().catch(err => { console.error('❌ Error:', err.message); process.exit(1); });

