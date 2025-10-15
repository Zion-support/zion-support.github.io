#!/usr/bin/env node

const { execSync } = require('child_process');

// Get all open PRs
const prs = execSync('gh pr list --state open --draft=false --json number,title,headRefName', { encoding: 'utf8' });
const prList = JSON.parse(prs);

console.log(`Found ${prList.length} open PRs`);

let mergedCount = 0;
let failedCount = 0;

for (const pr of prList) {
  try {
    console.log(`\nProcessing PR #${pr.number}: ${pr.title}`);
    
    // Checkout the PR
    execSync(`gh pr checkout ${pr.number}`, { stdio: 'inherit' });
    
    // Fetch latest main
    execSync('git fetch origin main', { stdio: 'inherit' });
    
    // Try to merge with main
    try {
      execSync('git merge origin/main', { stdio: 'inherit' });
    } catch (mergeError) {
      console.log(`Merge conflicts detected, resolving by accepting main branch changes...`);
      // Resolve conflicts by accepting main branch version
      execSync('git checkout --theirs .', { stdio: 'inherit' });
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "Resolve merge conflicts by accepting main branch changes"', { stdio: 'inherit' });
    }
    
    // Push the resolved changes
    execSync(`git push origin ${pr.headRefName}`, { stdio: 'inherit' });
    
    // Try to merge the PR
    try {
      execSync(`gh pr merge ${pr.number} --merge`, { stdio: 'inherit' });
      console.log(`✅ Successfully merged PR #${pr.number}`);
      mergedCount++;
    } catch (mergePrError) {
      console.log(`❌ Failed to merge PR #${pr.number}: ${mergePrError.message}`);
      failedCount++;
    }
    
    // Go back to main
    execSync('git checkout main', { stdio: 'inherit' });
    execSync('git pull origin main', { stdio: 'inherit' });
    
  } catch (error) {
    console.log(`❌ Error processing PR #${pr.number}: ${error.message}`);
    failedCount++;
    
    // Try to go back to main if we're stuck
    try {
      execSync('git checkout main', { stdio: 'inherit' });
    } catch (e) {
      console.log('Warning: Could not checkout main');
    }
  }
}

console.log(`\n📊 Summary:`);
console.log(`✅ Successfully merged: ${mergedCount} PRs`);
console.log(`❌ Failed to merge: ${failedCount} PRs`);
console.log(`📝 Total processed: ${mergedCount + failedCount} PRs`);