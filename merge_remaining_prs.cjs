#!/usr/bin/env node

const { execSync } = require('child_process');

// List of remaining PR numbers to merge
const prNumbers = [
  '32664', '32663', '32662', '32661', '32660', '32659', '32658', '32657', '32656', '32655',
  '32654', '32652', '32563', '32562', '32561', '32560', '32559', '32558', '32556', '32555',
  '32554', '32553', '32544', '32543', '32534', '32533', '32532', '32531', '32530'
];

async function mergePR(prNumber) {
  try {
    console.log(`\n🔄 Processing PR #${prNumber}...`);
    
    // Get PR details
    const prInfo = execSync(`gh pr view ${prNumber} --json title,headRefName`, { encoding: 'utf8' });
    const pr = JSON.parse(prInfo);
    
    console.log(`   Title: ${pr.title}`);
    console.log(`   Branch: ${pr.headRefName}`);
    
    // Fetch the branch
    execSync(`git fetch origin ${pr.headRefName}`, { stdio: 'inherit' });
    
    // Create local branch
    const localBranchName = `pr-${prNumber}-${pr.headRefName}`;
    try {
      execSync(`git checkout -b ${localBranchName} origin/${pr.headRefName}`, { stdio: 'inherit' });
    } catch (error) {
      // Branch might already exist, try to checkout
      execSync(`git checkout ${localBranchName}`, { stdio: 'inherit' });
    }
    
    // Try to merge with main
    try {
      execSync(`git merge main`, { stdio: 'inherit' });
      console.log(`   ✅ No conflicts in PR #${prNumber}`);
    } catch (error) {
      console.log(`   ⚠️  Conflicts detected in PR #${prNumber}, resolving...`);
      
      // Resolve conflicts using our script
      execSync(`node fix_all_conflicts.cjs`, { stdio: 'inherit' });
      
      // Add and commit resolved conflicts
      execSync(`git add .`, { stdio: 'inherit' });
      execSync(`git commit -m "Resolve merge conflicts for PR #${prNumber}"`, { stdio: 'inherit' });
      
      console.log(`   ✅ Conflicts resolved for PR #${prNumber}`);
    }
    
    // Merge into main
    execSync(`git checkout main`, { stdio: 'inherit' });
    execSync(`git merge ${localBranchName}`, { stdio: 'inherit' });
    
    console.log(`   ✅ Successfully merged PR #${prNumber} into main`);
    
    // Clean up local branch
    execSync(`git branch -d ${localBranchName}`, { stdio: 'inherit' });
    
  } catch (error) {
    console.error(`   ❌ Error processing PR #${prNumber}:`, error.message);
    
    // Try to clean up and continue
    try {
      execSync(`git checkout main`, { stdio: 'inherit' });
    } catch (cleanupError) {
      console.error(`   ⚠️  Could not checkout main:`, cleanupError.message);
    }
  }
}

async function main() {
  console.log('🚀 Starting bulk PR merge process for remaining PRs...');
  console.log(`📋 Found ${prNumbers.length} PRs to process`);
  
  for (const prNumber of prNumbers) {
    await mergePR(prNumber);
  }
  
  console.log('\n🎉 Bulk PR merge process completed!');
  console.log('📊 Summary: All remaining PRs have been processed');
}

main().catch(console.error);