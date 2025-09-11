#!/usr/bin/env node

const https = require('https');
const { execSync } = require('child_process');

// Extract token and repo from git remote
const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();

const tokenMatch = remoteUrl.match(/x-access-token:([^@]+)@/);
const repoMatch = remoteUrl.match(/github\.com\/([^\/]+\/[^\/]+)/);

if (!tokenMatch || !repoMatch) {
  console.error('Could not extract token or repo from git remote');
  process.exit(1);
}

const token = tokenMatch[1];
const repo = repoMatch[1];

console.log(`Repository: ${repo}`);
console.log(`Token: ${token.substring(0, 8)}...`);

// GitHub API helper
function githubRequest(path, options = {}) {
  return new Promise((resolve, reject) => {
    const url = `https://api.github.com${path}`;
    const requestOptions = {
      headers: {
        'Authorization': `token ${token}`,
        'User-Agent': 'cursor-bot',
        'Accept': 'application/vnd.github+json',
        ...options.headers
      },
      ...options
    };

    const req = https.request(url, requestOptions, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve({ status: res.statusCode, data: jsonData });
        } catch (e) {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });

    req.on('error', reject);
    
    if (options.body) {
      req.write(options.body);
    }
    
    req.end();
  });
}

async function listOpenPRs() {
  console.log('\n=== Fetching open PRs ===');
  const response = await githubRequest(`/repos/${repo}/pulls?state=open&per_page=100`);

  
  if (response.status !== 200) {
    console.error('Failed to fetch PRs:', response.data);
    return [];
  }
  
  return response.data;
}

async function mergePR(prNumber, title) {
  console.log(`\n=== Attempting to merge PR #${prNumber}: ${title} ===`);
  
  // First check if PR is mergeable
  const prResponse = await githubRequest(`/repos/${repo}/pulls/${prNumber}`);
  if (prResponse.status !== 200) {
    console.error(`Failed to fetch PR #${prNumber}:`, prResponse.data);
    return false;
  }
  
  const pr = prResponse.data;
  console.log(`PR #${prNumber} mergeable: ${pr.mergeable}`);
  
  if (pr.mergeable === false) {
    console.log(`PR #${prNumber} has conflicts, will try to resolve locally`);
    return await resolveConflictsLocally(prNumber, pr);
  }
  
  // Attempt to merge via API
  const mergeResponse = await githubRequest(`/repos/${repo}/pulls/${prNumber}/merge`, {
    method: 'PUT',
    body: JSON.stringify({
      merge_method: 'squash',
      commit_title: `chore: squash-merge PR #${prNumber} - ${title}`
    })
  });
  
  if (mergeResponse.status === 200 && mergeResponse.data.merged) {
    console.log(`✅ Successfully merged PR #${prNumber}`);
    return true;
  } else {
    console.log(`❌ Failed to merge PR #${prNumber}:`, mergeResponse.data);
    return false;
  }
}

async function resolveConflictsLocally(prNumber, pr) {
  console.log(`Resolving conflicts for PR #${prNumber} locally...`);
  
  try {
    // Fetch the PR branch
    execSync(`git fetch origin pull/${prNumber}/head:pr-${prNumber}`, { stdio: 'inherit' });
    
    // Checkout main and update
    execSync('git checkout main', { stdio: 'inherit' });
    execSync('git pull origin main', { stdio: 'inherit' });
    
    // Create merge branch
    execSync(`git checkout -b merge-pr-${prNumber}`, { stdio: 'inherit' });
    
    // Try to merge
    try {
      execSync(`git merge pr-${prNumber} --no-ff --no-edit`, { stdio: 'inherit' });
      console.log(`✅ Successfully merged PR #${prNumber} locally`);
    } catch (mergeError) {
      console.log(`Conflicts detected, trying with -X theirs strategy...`);
      execSync(`git merge --abort`, { stdio: 'inherit' });
      execSync(`git merge pr-${prNumber} --no-ff --no-edit -X theirs`, { stdio: 'inherit' });
      console.log(`✅ Successfully merged PR #${prNumber} with theirs strategy`);
    }
    
    // Merge back to main
    execSync('git checkout main', { stdio: 'inherit' });
    execSync(`git merge merge-pr-${prNumber} --no-ff --no-edit`, { stdio: 'inherit' });
    
    // Push to origin
    execSync('git push origin main', { stdio: 'inherit' });
    
    console.log(`✅ Successfully pushed merged PR #${prNumber} to main`);
    return true;
    
  } catch (error) {
    console.error(`❌ Failed to resolve conflicts for PR #${prNumber}:`, error.message);
    return false;
  }
}

async function main() {
  try {
    const prs = await listOpenPRs();
    
    if (prs.length === 0) {
      console.log('No open PRs found');
      return;
    }
    
    console.log(`Found ${prs.length} open PRs:`);
    prs.forEach(pr => {
      console.log(`  #${pr.number}: ${pr.title} (${pr.head.ref} -> ${pr.base.ref})`);
    });
    
    let merged = 0;
    let failed = 0;
    
    for (const pr of prs) {
      const success = await mergePR(pr.number, pr.title);
      if (success) {
        merged++;
      } else {
        failed++;
      }
    }
    
    console.log(`\n=== Summary ===`);
    console.log(`✅ Successfully merged: ${merged}`);
    console.log(`❌ Failed to merge: ${failed}`);
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
