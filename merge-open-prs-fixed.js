#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🔍 Starting PR merge process...');

// Read the open PRs data
let openPRs = [];
try {
  const prData = fs.readFileSync('open_prs_current.json', 'utf8');
  openPRs = JSON.parse(prData);
  console.log(`📋 Found ${openPRs.length} open PRs to process`);
} catch (error) {
  console.error('❌ Error reading PR data:', error.message);
  process.exit(1);
}

// Function to safely merge a PR branch
function mergePR(pr) {
  const branchName = pr.head.ref;
  const prNumber = pr.number;
  const prTitle = pr.title;
  
  console.log(`\n🔄 Processing PR #${prNumber}: ${prTitle}`);
  console.log(`   Branch: ${branchName}`);
  
  try {
    // Check if branch exists
    try {
      execSync(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`, { stdio: 'pipe' });
    } catch (error) {
      console.log(`❌ Branch ${branchName} not found, skipping...`);
      return false;
    }

    // Fetch the latest changes
    console.log(`📥 Fetching branch ${branchName}...`);
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    // Check for merge conflicts
    console.log(`🔍 Checking for merge conflicts...`);
    try {
      execSync(`git merge --no-commit --no-ff origin/${branchName}`, { stdio: 'pipe' });
      console.log(`✅ No conflicts detected for ${branchName}`);
      
      // Complete the merge
      execSync(`git merge --no-ff origin/${branchName} -m "Merge PR #${prNumber}: ${prTitle}"`, { stdio: 'inherit' });
      console.log(`✅ Successfully merged PR #${prNumber}`);
      return true;
      
    } catch (mergeError) {
      console.log(`⚠️  Merge conflicts detected for ${branchName}, attempting to resolve...`);
      
      // Reset the merge attempt
      execSync('git merge --abort', { stdio: 'pipe' });
      
      // Try to resolve conflicts automatically
      try {
        console.log(`🔧 Attempting automatic conflict resolution...`);
        execSync(`git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge PR #${prNumber}: ${prTitle}"`, { stdio: 'inherit' });
        console.log(`✅ Auto-resolved conflicts for PR #${prNumber}`);
        return true;
      } catch (resolveError) {
        console.log(`❌ Could not auto-resolve conflicts for PR #${prNumber}`);
        console.log(`   Error: ${resolveError.message}`);
        
        // Reset to clean state
        execSync('git reset --hard HEAD', { stdio: 'pipe' });
        return false;
      }
    }
    
  } catch (error) {
    console.log(`❌ Failed to process PR #${prNumber}: ${error.message}`);
    return false;
  }
}

// Process each PR
let successCount = 0;
let failCount = 0;
const results = [];

for (const pr of openPRs) {
  const success = mergePR(pr);
  results.push({
    prNumber: pr.number,
    title: pr.title,
    branch: pr.head.ref,
    success: success
  });
  
  if (success) {
    successCount++;
  } else {
    failCount++;
  }
}

// Create summary report
const summary = {
  totalPRs: openPRs.length,
  successfulMerges: successCount,
  failedMerges: failCount,
  results: results,
  timestamp: new Date().toISOString()
};

fs.writeFileSync('pr-merge-results.json', JSON.stringify(summary, null, 2));

console.log('\n📊 Merge Summary:');
console.log(`  Total PRs processed: ${openPRs.length}`);
console.log(`  Successful merges: ${successCount}`);
console.log(`  Failed merges: ${failCount}`);

// Push changes to main if there were successful merges
if (successCount > 0) {
  try {
    console.log('\n🚀 Pushing merged changes to main...');
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Successfully pushed merged changes to main');
  } catch (error) {
    console.log(`❌ Failed to push changes: ${error.message}`);
  }
}

console.log('\n🎉 PR merge process completed!');
console.log('📄 Detailed results saved to pr-merge-results.json');