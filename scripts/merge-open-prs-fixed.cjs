#!/usr/bin/env node
// Simple PR merger script
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
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'merge-open-prs-script',
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  });
  
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : undefined;
  } catch {
    data = { raw: text };
  }
  
  if (!res.ok) {
    const message = data && data.message ? data.message : `HTTP ${res.status}`;
    throw new Error(message);
  }
  
  return data;
}

async function getOpenPRs(owner, repo) {
  try {
<<<<<<< HEAD
    const prs = await ghRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
=======
<<<<<<< HEAD
    const prs = await ghRequest(`/repos/${owner}/${repo}/pulls?state=open`);
=======
    const prs = await ghRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    return prs || [];
  } catch (error) {
    console.error('Error fetching PRs:', error.message);
    return [];
  }
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
async function readyForReview(owner, repo, number) {
  try {
    await ghRequest(`/repos/${owner}/${repo}/pulls/${number}/ready_for_review`, 'POST');
    return true;
  } catch {
    return false;
  }
}

async function updateBranch(owner, repo, number) {
  try {
    await ghRequest(`/repos/${owner}/${repo}/pulls/${number}/update-branch`, 'PUT');
    return true;
  } catch {
    return false;
  }
}

<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
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

async function main() {
  try {
    console.log('🔍 Checking for open PRs...');
    
    const { owner, repo } = getRepoFromGit();
    console.log(`📂 Repository: ${owner}/${repo}`);
    
    const openPRs = await getOpenPRs(owner, repo);
    console.log(`📋 Found ${openPRs.length} open PRs`);
    
    if (openPRs.length === 0) {
      console.log('✅ No open PRs to merge');
      return;
    }
    
    for (const pr of openPRs) {
      console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
      console.log(`   Author: ${pr.user.login}`);
      console.log(`   Branch: ${pr.head.ref} -> ${pr.base.ref}`);
      
      if (pr.draft) {
<<<<<<< HEAD
        const readied = await readyForReview(owner, repo, pr.number);
        console.log(`   📝 Draft -> ready_for_review: ${readied ? 'ok' : 'not permitted'}`);
      }
      
=======
<<<<<<< HEAD
        console.log('   ⏸️  Skipping draft PR');
        continue;
      }
      
      if (pr.mergeable === false) {
        console.log('   ⚠️  PR has merge conflicts, skipping');
        continue;
=======
        const readied = await readyForReview(owner, repo, pr.number);
        console.log(`   📝 Draft -> ready_for_review: ${readied ? 'ok' : 'not permitted'}`);
      }
      
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
      // Ask GitHub to update the PR branch before merging
      const updated = await updateBranch(owner, repo, pr.number);
      if (updated) {
        console.log('   🔄 Requested update-branch');
        await new Promise(r => setTimeout(r, 2500));
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
      }
      
      const mergeResult = await mergePR(owner, repo, pr.number);
      if (mergeResult.success) {
        console.log(`   ✅ Successfully merged PR #${pr.number}`);
      } else {
        console.log(`   ❌ Failed to merge PR #${pr.number}: ${mergeResult.error}`);
      }
      
      // Small delay between merges
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('\n🎉 PR merge process completed!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { getOpenPRs, mergePR };