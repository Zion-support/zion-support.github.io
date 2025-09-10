#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting automated PR merge process...');

// Function to run git commands safely
function runGitCommand(command, options = {}) {
  try {
    const result = execSync(command, {
      cwd: '/workspace',
      encoding: 'utf8',
      timeout: 60000,
      stdio: ['ignore', 'pipe', 'pipe'],
      ...options,
    });
    return result.trim();
  } catch (error) {
    console.error(`❌ Git command failed: ${command}`);
    console.error(`Exit code: ${error.status}`);
    console.error(`Stdout: ${error.stdout?.toString()}`);
    console.error(`Stderr: ${error.stderr?.toString()}`);
    return null;
  }
}

// Function to check if branch exists
function branchExists(branchName) {
  const result = runGitCommand(`git ls-remote --heads origin ${branchName}`);
  return result && result.length > 0;
}

// Function to merge a branch
function mergeBranch(branchName) {
  console.log(`📋 Processing branch: ${branchName}`);

  if (!branchExists(branchName)) {
    console.log(`❌ Branch ${branchName} does not exist on origin, skipping...`);
    return false;
  }

  // Fetch the branch
  console.log(`📥 Fetching branch ${branchName}...`);
  runGitCommand(`git fetch origin ${branchName}:${branchName}`);

  // Try to merge
  console.log(`🔄 Attempting to merge ${branchName} into main...`);
  const mergeResult = runGitCommand(
    `git merge --no-ff ${branchName} -m "Merge ${branchName} into main"`
  );

  if (mergeResult !== null) {
    console.log(`✅ Successfully merged ${branchName}`);
    return true;
  } else {
    console.log(`⚠️  Merge conflict detected in ${branchName}`);

    // Check for conflicts
    const status = runGitCommand('git status --porcelain');
    if (status && (status.includes('UU') || status.includes('AA') || status.includes('DD'))) {
      console.log(`🔧 Resolving merge conflicts in ${branchName}...`);

      // Auto-resolve conflicts
      const conflictFiles = status
        .split('\n')
        .filter((line) => line.match(/^(UU|AA|DD)/))
        .map((line) => line.replace(/^(UU|AA|DD)\s+/, ''));

      for (const file of conflictFiles) {
        console.log(`  - Resolving conflict in: ${file}`);

        if (file === 'package.json' || file === 'package-lock.json' || file === 'pnpm-lock.yaml' || file === 'yarn.lock') {
          // Prefer incoming changes for dependency manifests
          runGitCommand(`git checkout --theirs "${file}"`);
        } else {
          // Prefer incoming changes first, fall back to ours
          const theirsResult = runGitCommand(`git checkout --theirs "${file}"`);
          if (theirsResult === null) {
            runGitCommand(`git checkout --ours "${file}"`);
          }
        }
      }

      // Add resolved files
      runGitCommand('git add .');

      // Complete the merge
      const commitResult = runGitCommand('git commit --no-edit');
      if (commitResult !== null) {
        console.log(`✅ Successfully resolved conflicts and merged ${branchName}`);
        return true;
      } else {
        console.log(`❌ Failed to complete merge for ${branchName}`);
        runGitCommand('git merge --abort');
        return false;
      }
    } else {
      console.log(`❌ Unknown merge issue with ${branchName}`);
      runGitCommand('git merge --abort');
      return false;
    }
  }
}

function parseOrigin() {
  const originUrl = runGitCommand('git remote get-url origin');
  if (!originUrl) {
    throw new Error('Cannot determine origin URL');
  }
  const match = originUrl.match(/x-access-token:([^@]+)@github\.com\/([^/]+)\/([^\s]+?)(?:\.git)?$/);
  if (!match) {
    throw new Error('Failed to parse token/owner/repo from origin URL');
  }
  const token = match[1];
  const owner = match[2];
  const repo = match[3];
  return { token, owner, repo };
}

async function fetchOpenPrBranches() {
  const { token, owner, repo } = parseOrigin();
  const url = `https://api.github.com/repos/${owner}/${repo}/pulls?state=open&per_page=100`;
  const headers = {
    Authorization: `token ${token}`,
    'User-Agent': 'auto-merge-script',
    Accept: 'application/vnd.github+json',
  };

  const res = await fetch(url, { headers });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API error ${res.status}: ${text}`);
  }
  const prs = await res.json();
  const branches = prs
    .map((pr) => ({ number: pr.number, title: pr.title, headRef: pr.head.ref, headRepo: pr.head.repo?.full_name }))
    // Only merge PRs whose head repo is the same origin (we only have origin access)
    .filter((pr) => pr.headRepo && pr.headRepo.toLowerCase() === `${owner}/${repo}`.toLowerCase())
    .map((pr) => pr.headRef);

  // De-duplicate
  return Array.from(new Set(branches));
}

// Main execution
async function main() {
  try {
    // Ensure we're on main and up to date
    console.log('🔄 Switching to main branch...');
    runGitCommand('git fetch origin main');
    runGitCommand('git checkout -B main origin/main');

    console.log('📥 Pulling latest changes...');
    runGitCommand('git pull --ff-only origin main');

    console.log('📜 Fetching list of open PR branches from GitHub...');
    const prBranches = await fetchOpenPrBranches();

    if (prBranches.length === 0) {
      console.log('✅ No open PRs with same-origin branches to merge.');
      return;
    }

    console.log(`Found ${prBranches.length} PR branch(es):`);
    prBranches.forEach((b) => console.log(` - ${b}`));

    let successCount = 0;

    // Process each PR branch
    for (const branch of prBranches) {
      if (mergeBranch(branch)) {
        successCount++;
      }
    }

    console.log(`🎉 Processed ${successCount}/${prBranches.length} PRs successfully!`);

    // Push changes to main
    console.log('📤 Pushing changes to main...');
    const pushResult = runGitCommand('git push origin main');
    if (pushResult !== null) {
      console.log('✅ Successfully pushed changes to main!');
    } else {
      console.log('❌ Failed to push changes to main');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error during merge process:', error.message);
    process.exit(1);
  }
}

main();