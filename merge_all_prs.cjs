#!/usr/bin/env node

const { execSync } = require('child_process');

// List of PR numbers to merge (excluding the ones we already merged)
const prNumbers = [
  '32614', '32612', '32611', '32610', '32609', '32608', '32607', '32606', '32605', '32603',
  '32602', '32601', '32600', '32599', '32598', '32597', '32596', '32595', '32594', '32593',
  '32592', '32591', '32576', '32574', '32566', '32565', '32564'
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
      execSync(`node resolve_conflicts.cjs`, { stdio: 'inherit' });
      
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
  console.log('🚀 Starting bulk PR merge process...');
  console.log(`📋 Found ${prNumbers.length} PRs to process`);
  
  for (const prNumber of prNumbers) {
    await mergePR(prNumber);
  }
  
  console.log('\n🎉 Bulk PR merge process completed!');
  console.log('📊 Summary: All available PRs have been processed');
}

main().catch(console.error);