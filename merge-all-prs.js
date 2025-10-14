#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🚀 Starting automated PR merging process...');

// Function to get all open PRs
function getOpenPRs() {
  try {
    const result = execSync('gh pr list --state open --json number,title,headRefName,mergeable,mergeStateStatus', { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    console.error('Error fetching PRs:', error.message);
    return [];
  }
}

// Function to merge a PR
function mergePR(prNumber, branchName) {
  try {
    console.log(`\n🔧 Processing PR #${prNumber} (${branchName})`);
    
    // Checkout the branch
    console.log(`📥 Checking out branch: ${branchName}`);
    execSync(`git checkout ${branchName}`, { stdio: 'inherit' });
    
    // Pull latest changes
    console.log(`📥 Pulling latest changes...`);
    execSync(`git pull origin ${branchName}`, { stdio: 'inherit' });
    
    // Try to merge with main
    console.log(`🔄 Attempting to merge with main...`);
    try {
      execSync('git merge origin/main', { stdio: 'inherit' });
      console.log(`✅ Merge successful!`);
    } catch (mergeError) {
      console.log(`⚠️  Merge conflicts detected, resolving automatically...`);
      
      // Run our conflict resolution script
      execSync('node resolve-conflicts.js', { stdio: 'inherit' });
      console.log(`✅ Conflicts resolved!`);
    }
    
    // Push the resolved changes
    console.log(`📤 Pushing resolved changes...`);
    execSync(`git push origin ${branchName}`, { stdio: 'inherit' });
    
    // Convert PR to ready if it's draft
    try {
      execSync(`gh pr ready ${prNumber}`, { stdio: 'inherit' });
      console.log(`✅ PR marked as ready for review`);
    } catch (readyError) {
      console.log(`ℹ️  PR is already ready or closed`);
    }
    
    // Merge the PR
    try {
      execSync(`gh pr merge ${prNumber} --merge --delete-branch`, { stdio: 'inherit' });
      console.log(`🎉 PR #${prNumber} merged successfully!`);
      return true;
    } catch (mergeError) {
      console.log(`❌ Failed to merge PR #${prNumber}: ${mergeError.message}`);
      return false;
    }
    
  } catch (error) {
    console.error(`❌ Error processing PR #${prNumber}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('🔍 Fetching open PRs...');
  const prs = getOpenPRs();
  
  if (prs.length === 0) {
    console.log('✅ No open PRs found!');
    return;
  }

  console.log(`📊 Found ${prs.length} open PRs:`);
  prs.forEach(pr => {
    console.log(`  - #${pr.number}: ${pr.title} (${pr.headRefName}) - ${pr.mergeStateStatus}`);
  });

  let successCount = 0;
  let failCount = 0;

  // Process each PR
  for (const pr of prs) {
    if (pr.mergeStateStatus === 'CLEAN' || pr.mergeable === 'MERGEABLE') {
      console.log(`\n🟢 Processing clean PR #${pr.number}...`);
    } else {
      console.log(`\n🟡 Processing PR with conflicts #${pr.number}...`);
    }
    
    const success = mergePR(pr.number, pr.headRefName);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Switch back to main after each PR
    try {
      execSync('git checkout main', { stdio: 'inherit' });
      execSync('git pull origin main', { stdio: 'inherit' });
    } catch (error) {
      console.log('⚠️  Warning: Could not switch back to main');
    }
  }

  console.log(`\n📊 Final Summary:`);
  console.log(`  ✅ Successfully merged: ${successCount}`);
  console.log(`  ❌ Failed to merge: ${failCount}`);
  console.log(`  📈 Success rate: ${Math.round((successCount / prs.length) * 100)}%`);
}

main().catch(console.error);