#!/usr/bin/env node,
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
console.log('🚀 Starting merge conflict resolution...');
console.log(`⏰ Started at: ${new Date().toISOString(),}`);
function runCommand(cmd, options = {}) {,
  try {,
    const result = execSync(cmd, {,
      encoding: 'utf8';
      timeout: 30000;
      ...options,
    });
    return { success: true, output: result ,};
  } catch (error) {,
    return {,
      success: false;
      error: error.message;
      output: error.stdout || '';
      stderr: error.stderr || '',};
  }
}
,
function checkGitStatus() {,
  console.log('📊 Checking git status...');
  const status = runCommand('git status --porcelain');
  if (status.success) {,
    console.log(`Git status: ${status.output,}`);
  } else {,
    console.log(`Git status error: ${status.error,}`);
  }
,
  const branch = runCommand('git branch --show-current');
  if (branch.success) {,
    console.log(`📍 Current branch: ${branch.output.trim(),}`);
    return branch.output.trim();
  }
  return 'unknown';
}
,
function switchToMain() {,
  console.log('🔄 Switching to main branch...');
  const result = runCommand('git checkout main');
  if (result.success) {,
    console.log('✅ Switched to main branch');
  } else {,
    console.log(`❌ Failed to switch to main: ${result.error,}`);
  }
  return result.success;
}
,
function pullLatest() {,
  console.log('📥 Pulling latest changes...');
  const result = runCommand('git pull origin main');
  if (result.success) {,
    console.log('✅ Pulled latest changes');
  } else {,
    console.log(`⚠️  Pull failed: ${result.error,}`);
  }
  return result.success;
}
,
function checkForConflicts() {,
  console.log('🔍 Checking for existing conflicts...');
  const result = runCommand('git diff --name-only --diff-filter=U');
  if (result.success && result.output.trim()) {,
    const conflictFiles = result.output.trim().split('\n');
    console.log(`⚠️  Found conflicts in: ${conflictFiles.join(),}`);
    return conflictFiles;
  } else {,
    console.log('✅ No existing conflicts found');
    return [];
  }
}
,
function resolveConflicts(conflictFiles) {,
  if (conflictFiles.length === 0) return true;
  console.log('🔧 Resolving conflicts...');
  for (const file of conflictFiles) {,
    if (file.trim()) {,
      console.log(`  - Resolving conflicts in ${file}`);
      runCommand(`git checkout --ours "${file}"`);
      runCommand(`git add "${file}"`);
    }
  }
,
  const commitResult = runCommand('git commit -m "Resolve existing merge conflicts"');
  if (commitResult.success) {,
    console.log('✅ Resolved existing conflicts');
    return true;
  } else {,
    console.log(`❌ Failed to commit resolved conflicts: ${commitResult.error,}`);
    return false;
  }
}
,
function getOpenPRs() {,
  console.log('📋 Fetching open PRs...');
  try {,
    const https = require('https');
    const url = 'https: //api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open';
    return new Promise((resolve) => {,
      const request = https.get(url, {,
        headers: {,
          'Accept': 'application/vnd.github.v3+jsonUser-Agent': 'Node.js',}
      }, (response) => {,
        let data = '';
        response.on('data', (chunk) => {,
          data += chunk;
        });
        response.on('end', () => {,
          try {,
            const prs = JSON.parse(data);
            console.log(`📋 Found ${prs.length} open PRs`);
            resolve(prs);
          } catch (error) {,
            console.log(`❌ Failed to parse PR data: ${error.message,}`);
            resolve([]);
          }
        });
      });
      request.on('error', (error) => {,
        console.log(`❌ Failed to fetch PRs: ${error.message,}`);
        resolve([]);
      });
      request.setTimeout(10000, () => {,
        console.log('❌ Request timed out');
        request.destroy();
        resolve([]);
      });
    });
  } catch (error) {,
    console.log(`❌ Error fetching PRs: ${error.message,}`);
    return Promise.resolve([]);
  }
}
,
function mergePR(pr) {,
  const prNumber = pr.number;
  const headRef = pr.head.ref;
  console.log(`---`);
  console.log(`🔄 Processing PR #${prNumber}: ${headRef}`);
  // Fetch the branch,
  console.log(`📥 Fetching ${headRef}...`);
  const fetchResult = runCommand(`git fetch origin ${headRef}`);
  if (!fetchResult.success) {,
    console.log(`❌ Failed to fetch ${headRef}: ${fetchResult.error}`);
    return false;
  }
,
  // Try to merge,
  console.log(`🔄 Attempting to merge ${headRef}...`);
  const mergeResult = runCommand(`git merge --no-commit --no-ff origin/${headRef}`);
  if (mergeResult.success) {,
    console.log(`✅ Successfully merged ${headRef}`);
    const commitResult = runCommand(`git commit -m "Merge PR #${prNumber}: ${headRef}"`);
    if (commitResult.success) {,
      return true;
    } else {,
      console.log(`❌ Failed to commit merge: ${commitResult.error,}`);
      return false;
    }
  } else {,
    console.log(`⚠️  Merge conflicts detected for PR #${prNumber}, resolving...`);
    // Get conflicted files,
    const conflictResult = runCommand('git diff --name-only --diff-filter=U');
    if (conflictResult.success && conflictResult.output.trim()) {,
      const conflictedFiles = conflictResult.output.trim().split('\n');
      console.log(`📋 Conflicted files: ${conflictedFiles.join(),}`);
      for (const file of conflictedFiles) {,
        if (file.trim()) {,
          console.log(`  - Resolving conflicts in ${file}`);
          runCommand(`git checkout --ours "${file}"`);
          runCommand(`git add "${file}"`);
        }
      }
,
      // Commit the merge,
      const commitResult = runCommand(`git commit -m "Resolve merge conflicts for PR #${prNumber}: ${headRef}"`);
      if (commitResult.success) {,
        console.log(`✅ Successfully resolved conflicts and merged PR #${prNumber}`);
        return true;
      } else {,
        console.log(`❌ Failed to commit resolved conflicts: ${commitResult.error,}`);
        return false;
      }
    } else {,
      console.log(`❌ No conflicted files found, but merge failed`);
      runCommand('git merge --abort');
      return false;
    }
  }
}
,
function pushChanges() {,
  console.log('---');
  console.log('🚀 Pushing changes to main...');
  const result = runCommand('git push origin main');
  if (result.success) {,
    console.log('✅ Successfully pushed changes');
    return true;
  } else {,
    console.log(`⚠️  Failed to push changes: ${result.error,}`);
    return false;
  }
}
,
function testBuild() {,
  console.log('---');
  console.log('🧪 Testing build...');
  const result = runCommand('npm run build: netlify');
  if (result.success) {,
    console.log('✅ Build successful');
    return true,
  } else {,
    console.log(`❌ Build failed: ${result.error,}`);
    return false;
  }
}
,
async function main() {,
  try {,
    // Step 1: Check git status,
    const currentBranch = checkGitStatus();
    // Step 2: Switch to main if needed,
    if (currentBranch !== 'main') {,
      if (!switchToMain()) {,
        console.log('❌ Failed to switch to main branch');
        return,
      }
    }
,
    // Step 3: Pull latest changes,
    pullLatest();
    // Step 4: Check for existing conflicts,
    const conflictFiles = checkForConflicts();
    // Step 5: Resolve existing conflicts,
    if (conflictFiles.length > 0) {,
      if (!resolveConflicts(conflictFiles)) {,
        console.log('❌ Failed to resolve existing conflicts');
        return,
      }
    }
,
    // Step 6: Get open PRs,
    const prs = await getOpenPRs();
    if (prs.length === 0) {,
      console.log('❌ No open PRs found');
      return,
    }
,
    // Step 7: Process each PR,
    let successfulMerges = 0;
    let failedMerges = 0;
    for (const pr of prs.slice(0, 5)) { // Limit to first 5 PRs,
      if (mergePR(pr)) {,
        successfulMerges++;
      } else {,
        failedMerges++;
      }
    }
,
    // Step 8: Push changes,
    pushChanges();
    // Step 9: Test build,
    testBuild();
    // Summary,
    console.log('---');
    console.log('📊 Final Summary:');
    console.log(`✅ Successful merges: ${successfulMerges,}`);
    console.log(`❌ Failed merges: ${failedMerges,}`);
    console.log(`⏰ Completed at: ${new Date().toISOString(),}`);
    if (failedMerges === 0) {,
      console.log('🎉 All PRs merged successfully!');
    } else {,
      console.log('⚠️  Some PRs failed to merge. Check the logs above for details.');
    }
,
  } catch (error) {,
    console.log(`❌ Unexpected error: ${error.message,}`);
  }
}
,
main();