#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting PR merge process...');

// Read the open PRs data
const prData = JSON.parse(fs.readFileSync('current-open-prs.json', 'utf8'));
const openPRs = prData.filter(pr => pr.state === 'open');

console.log(`📋 Found ${openPRs.length} open PRs:`);
openPRs.forEach(pr => {
  console.log(`  - PR #${pr.number}: ${pr.title}`);
});

// Function to merge a PR
async function mergePR(prNumber) {
  try {
    console.log(`\n🔄 Attempting to merge PR #${prNumber}...`);
    
    // Checkout the PR branch
    const branchName = `pr-${prNumber}`;
    execSync(`git fetch origin pull/${prNumber}/head:${branchName}`, { stdio: 'inherit' });
    execSync(`git checkout ${branchName}`, { stdio: 'inherit' });
    
    // Check for merge conflicts
    execSync(`git merge main --no-commit --no-ff`, { stdio: 'pipe' });
    
    // If no conflicts, merge
    execSync(`git checkout main`, { stdio: 'inherit' });
    execSync(`git merge ${branchName} --no-ff -m "Merge PR #${prNumber}: Fix errors and merge to main"`, { stdio: 'inherit' });
    
    console.log(`✅ Successfully merged PR #${prNumber}`);
    
    // Clean up
    execSync(`git branch -D ${branchName}`, { stdio: 'inherit' });
    
    return true;
  } catch (error) {
    console.log(`❌ Failed to merge PR #${prNumber}: ${error.message}`);
    
    // Clean up on failure
    try {
      execSync(`git checkout main`, { stdio: 'inherit' });
      execSync(`git branch -D pr-${prNumber}`, { stdio: 'inherit' });
    } catch (cleanupError) {
      // Ignore cleanup errors
    }
    
    return false;
  }
}

// Merge all open PRs
async function mergeAllPRs() {
  let successCount = 0;
  
  for (const pr of openPRs) {
    const success = await mergePR(pr.number);
    if (success) {
      successCount++;
    }
  }
  
  console.log(`\n📊 Merge Summary:`);
  console.log(`  ✅ Successfully merged: ${successCount}/${openPRs.length} PRs`);
  
  if (successCount > 0) {
    console.log(`\n🚀 Pushing changes to main...`);
    try {
      execSync('git push origin main', { stdio: 'inherit' });
      console.log('✅ Successfully pushed to main!');
    } catch (error) {
      console.log('❌ Failed to push to main:', error.message);
    }
  }
}

// Run the merge process
mergeAllPRs().catch(console.error);