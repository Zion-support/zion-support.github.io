#!/usr/bin/env node
/**
 * Comprehensive Merge Script - Merges all unmerged branches into main
 * Handles merge conflicts systematically and provides detailed reporting
 */

import { execSync } from 'child_process';
import fs from 'fs';

// Function to safely execute git commands
function safeGitCommand(command, description) {
  try {
    console.log(`→ ${description}: ${command}`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      timeout: 30000 // 30 second timeout
    });
    return { success: true, result };
  } catch (error) {
    console.log(`⚠️  ${description} failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Function to check if branch exists
function branchExists(branchName) {
  try {
    execSync(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`, {
      stdio: 'pipe'
    });
    return true;
  } catch {
    return false;
  }
}

// Function to resolve merge conflicts
function resolveConflicts() {
  console.log('🔧 Resolving merge conflicts...');
  
  // Get list of conflicted files
  const conflictedResult = safeGitCommand('git diff --name-only --diff-filter=U', 'Get conflicted files');
  if (!conflictedResult.success) {
    console.log('❌ Could not get conflicted files');
    return false;
  }
  
  const conflictedFiles = conflictedResult.result
    .split('\n')
    .filter(f => f.trim())
    .map(f => f.trim());
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No conflicted files found');
    return true;
  }
  
  console.log(`📁 Found ${conflictedFiles.length} conflicted files`);
  
  // Strategy 1: Try to resolve by accepting theirs (incoming changes)
  console.log('🔄 Attempting to resolve conflicts by accepting incoming changes...');
  const resolveResult = safeGitCommand('git checkout --theirs .', 'Accept incoming changes');
  
  if (resolveResult.success) {
    const addResult = safeGitCommand('git add .', 'Add resolved files');
    if (addResult.success) {
      console.log('✅ Conflicts resolved successfully');
      return true;
    }
  }
  
  // Strategy 2: Try to resolve by accepting ours (current changes)
  console.log('🔄 Attempting to resolve conflicts by accepting current changes...');
  const resolveOursResult = safeGitCommand('git checkout --ours .', 'Accept current changes');
  
  if (resolveOursResult.success) {
    const addOursResult = safeGitCommand('git add .', 'Add resolved files');
    if (addOursResult.success) {
      console.log('✅ Conflicts resolved successfully');
      return true;
    }
  }
  
  console.log('❌ Failed to resolve conflicts automatically');
  return false;
}

// Function to merge a single branch
function mergeBranch(branchName, index, total) {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`🔄 [${index}/${total}] Processing branch: ${branchName}`);
  console.log(`${'='.repeat(80)}`);
  
  // Check if branch exists
  if (!branchExists(branchName)) {
    console.log(`❌ Branch ${branchName} does not exist`);
    return { success: false, reason: 'branch_not_found' };
  }
  
  // Fetch the branch
  console.log(`📥 Fetching branch ${branchName}...`);
  const fetchResult = safeGitCommand(`git fetch origin ${branchName}`, `Fetch ${branchName}`);
  if (!fetchResult.success) {
    console.log(`❌ Failed to fetch branch ${branchName}`);
    return { success: false, reason: 'fetch_failed' };
  }
  
  // Try to merge
  console.log(`🔀 Attempting to merge ${branchName} into main...`);
  const mergeResult = safeGitCommand(
    `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
    `Merge ${branchName}`
  );
  
  if (mergeResult.success) {
    console.log(`✅ Successfully merged ${branchName}`);
    return { success: true, method: 'direct' };
  }
  
  // Check for conflicts
  const statusResult = safeGitCommand('git status --porcelain', 'Check git status');
  if (statusResult.success && statusResult.result.includes('UU')) {
    console.log(`⚠️  Merge conflicts detected for ${branchName}`);
    
    // Try to resolve conflicts
    if (resolveConflicts()) {
      // Complete the merge
      const commitResult = safeGitCommand(
        `git commit --no-edit -m "Merge ${branchName} into main (conflicts resolved)"`,
        `Complete merge for ${branchName}`
      );
      
      if (commitResult.success) {
        console.log(`✅ Merged ${branchName} with conflict resolution`);
        return { success: true, method: 'conflict_resolved' };
      } else {
        console.log(`❌ Failed to complete merge for ${branchName}`);
        safeGitCommand('git merge --abort', `Abort merge for ${branchName}`);
        return { success: false, reason: 'commit_failed' };
      }
    } else {
      console.log(`❌ Failed to resolve conflicts for ${branchName}`);
      safeGitCommand('git merge --abort', `Abort merge for ${branchName}`);
      return { success: false, reason: 'conflict_resolution_failed' };
    }
  } else {
    console.log(`❌ Failed to merge ${branchName} (unknown error)`);
    safeGitCommand('git merge --abort', `Abort merge for ${branchName}`);
    return { success: false, reason: 'merge_failed' };
  }
}

// Main execution function
async function main() {
  console.log(`🚀 Starting Comprehensive Merge Process at ${new Date().toISOString()}`);
  console.log(`${'='.repeat(80)}\n`);
  
  // Ensure we're on main branch
  console.log('📍 Ensuring we\'re on main branch...');
  const checkoutResult = safeGitCommand('git checkout main', 'Switch to main branch');
  if (!checkoutResult.success) {
    console.log('❌ Failed to checkout main branch');
    process.exit(1);
  }
  
  // Pull latest changes
  console.log('📥 Pulling latest changes from main...');
  const pullResult = safeGitCommand('git pull origin main', 'Pull latest changes');
  if (!pullResult.success) {
    console.log('⚠️  Warning: Failed to pull latest changes, continuing anyway...');
  }
  
  // Get all unmerged branches
  console.log('📋 Getting unmerged branches...');
  const branchesResult = safeGitCommand('git branch -r --no-merged origin/main', 'Get unmerged branches');
  if (!branchesResult.success) {
    console.log('❌ Failed to get unmerged branches');
    process.exit(1);
  }
  
  const allBranches = branchesResult.result
    .split('\n')
    .filter(branch => branch.trim())
    .map(branch => branch.trim().replace('origin/', ''))
    .filter(branch => branch !== 'HEAD')
    .filter(branch => !branch.includes('backup'))
    .filter(branch => !branch.includes('disabled'));
  
  console.log(`Found ${allBranches.length} unmerged branches\n`);
  
  // Track results
  const results = {
    successful: [],
    failed: [],
    summary: {
      total: allBranches.length,
      successful: 0,
      failed: 0,
      methods: {
        direct: 0,
        conflict_resolved: 0,
        failed: 0
      }
    }
  };
  
  // Process branches in batches to avoid overwhelming the system
  const batchSize = 5;
  const batches = [];
  for (let i = 0; i < allBranches.length; i += batchSize) {
    batches.push(allBranches.slice(i, i + batchSize));
  }
  
  console.log(`📦 Processing ${batches.length} batches of up to ${batchSize} branches each\n`);
  
  // Process each batch
  for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
    const batch = batches[batchIndex];
    console.log(`\n🔄 Processing batch ${batchIndex + 1}/${batches.length} (${batch.length} branches)...`);
    
    for (const branch of batch) {
      const result = mergeBranch(branch, results.successful.length + results.failed.length + 1, allBranches.length);
      
      if (result.success) {
        results.successful.push({ branch, ...result });
        results.summary.successful++;
        results.summary.methods[result.method]++;
      } else {
        results.failed.push({ branch, ...result });
        results.summary.failed++;
        results.summary.methods.failed++;
      }
    }
    
    // Small delay between batches
    if (batchIndex < batches.length - 1) {
      console.log('⏳ Waiting 2 seconds before next batch...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  // Final summary
  console.log(`\n${'='.repeat(80)}`);
  console.log('📊 MERGE SUMMARY');
  console.log(`${'='.repeat(80)}`);
  console.log(`Total branches: ${results.summary.total}`);
  console.log(`✅ Successfully merged: ${results.summary.successful}`);
  console.log(`❌ Failed to merge: ${results.summary.failed}`);
  console.log(`Success rate: ${Math.round((results.summary.successful / results.summary.total) * 100)}%`);
  
  if (results.successful.length > 0) {
    console.log(`\n✅ Successfully merged branches:`);
    results.successful.forEach((result, index) => {
      console.log(`  ${index + 1}. ${result.branch} (${result.method})`);
    });
  }
  
  if (results.failed.length > 0) {
    console.log(`\n❌ Failed branches:`);
    results.failed.forEach((result, index) => {
      console.log(`  ${index + 1}. ${result.branch} (${result.reason})`);
    });
  }
  
  // Run system checks
  console.log(`\n🔍 Running system checks...`);
  const typeCheck = safeGitCommand('npm run type-check', 'TypeScript type checking');
  const buildCheck = safeGitCommand('npm run build', 'Production build');
  const testCheck = safeGitCommand('npm test', 'Run tests');
  
  // Push changes if any were merged
  if (results.summary.successful > 0) {
    console.log(`\n📤 Pushing merged changes to origin/main...`);
    const pushResult = safeGitCommand('git push origin main', 'Push changes to main');
    if (pushResult.success) {
      console.log('✅ Successfully pushed all changes to main!');
    } else {
      console.log('❌ Failed to push changes. You may need to push manually.');
      console.log('Run: git push origin main');
    }
  }
  
  // Generate comprehensive report
  const finalReport = {
    timestamp: new Date().toISOString(),
    summary: results.summary,
    systemChecks: {
      typeCheck: typeCheck.success,
      buildCheck: buildCheck.success,
      testCheck: testCheck.success,
      allPassed: typeCheck.success && buildCheck.success && testCheck.success
    },
    successful: results.successful,
    failed: results.failed,
    status: results.summary.successful > 0 ? 'success' : 'no-changes'
  };
  
  // Save detailed report
  fs.writeFileSync('comprehensive-merge-report.json', JSON.stringify(finalReport, null, 2));
  console.log(`\n📝 Detailed report saved to: comprehensive-merge-report.json`);
  
  console.log(`\n🏁 Merge process completed at ${new Date().toISOString()}`);
  
  return results.summary.failed === 0 ? 0 : 1;
}

// Run the main function
main().catch(error => {
  console.error(`\n💥 Fatal error: ${error}`);
  process.exit(1);
});