#!/usr/bin/env node

import { execSync } from 'child_process';

// Function to get list of open PRs
function getOpenPRs() {
  try {
    const result = execSync('gh pr list --state open --draft=false --json number,title,headRefName', { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    console.error('Error getting PR list:', error.message);
    return [];
  }
}

// Function to merge a single PR
function mergePR(prNumber, prTitle, branchName) {
  try {
    console.log(`\n🔄 Processing PR #${prNumber}: ${prTitle}`);
    
    // Checkout the PR branch
    console.log(`📥 Checking out branch: ${branchName}`);
    execSync(`gh pr checkout ${prNumber}`, { stdio: 'inherit' });
    
    // Merge with main
    console.log(`🔀 Merging with main...`);
    try {
      execSync('git merge main', { stdio: 'pipe' });
    } catch (mergeError) {
      console.log(`⚠️  Merge conflicts detected, resolving...`);
      
      // Resolve conflicts using our script
      execSync('node resolve-conflicts-clean.js', { stdio: 'inherit' });
      
      // Commit the resolved conflicts
      execSync('git commit -m "Resolve merge conflicts automatically"', { stdio: 'inherit' });
    }
    
    // Push the updated branch
    console.log(`📤 Pushing updated branch...`);
    execSync(`git push origin ${branchName}`, { stdio: 'inherit' });
    
    // Merge the PR
    console.log(`✅ Merging PR #${prNumber}...`);
    execSync(`gh pr merge ${prNumber} --squash --delete-branch`, { stdio: 'inherit' });
    
    console.log(`🎉 Successfully merged PR #${prNumber}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to merge PR #${prNumber}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting batch PR merge process...');
  
  const prs = getOpenPRs();
  console.log(`Found ${prs.length} open PRs to process`);
  
  if (prs.length === 0) {
    console.log('No open PRs found');
    return;
  }
  
  let successCount = 0;
  let failureCount = 0;
  
  for (const pr of prs) {
    const success = mergePR(pr.number, pr.title, pr.headRefName);
    if (success) {
      successCount++;
    } else {
      failureCount++;
    }
    
    // Switch back to main after each PR
    try {
      execSync('git checkout main', { stdio: 'pipe' });
      execSync('git pull origin main', { stdio: 'pipe' });
    } catch (error) {
      console.log('⚠️  Warning: Could not switch back to main');
    }
  }
  
  console.log(`\n📊 Batch merge completed:`);
  console.log(`✅ Successfully merged: ${successCount} PRs`);
  console.log(`❌ Failed to merge: ${failureCount} PRs`);
  console.log(`📈 Total processed: ${prs.length} PRs`);
}

main().catch(console.error);