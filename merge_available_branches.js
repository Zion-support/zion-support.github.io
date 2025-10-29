#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// List of available branches from the fetch output
const availableBranches = [
  'cursor/fix-errors-and-merge-to-main-0b27',
  'cursor/fix-errors-and-merge-to-main-1d7f',
  'cursor/fix-errors-and-merge-to-main-1eb2',
  'cursor/fix-errors-and-merge-to-main-41d1',
  'cursor/fix-errors-and-merge-to-main-4779',
  'cursor/fix-errors-and-merge-to-main-53b0',
  'cursor/fix-errors-and-merge-to-main-5ccc',
  'cursor/fix-errors-and-merge-to-main-687e',
  'cursor/fix-errors-and-merge-to-main-7735',
  'cursor/fix-errors-and-merge-to-main-908f',
  'cursor/fix-errors-and-merge-to-main-9203',
  'cursor/fix-errors-and-merge-to-main-aeb1',
  'cursor/fix-errors-and-merge-to-main-bc27',
  'cursor/fix-errors-and-merge-to-main-c272',
  'cursor/fix-errors-and-merge-to-main-c320',
  'cursor/fix-errors-and-merge-to-main-c358',
  'cursor/fix-errors-and-merge-to-main-c532',
  'cursor/fix-errors-and-merge-to-main-c6f4',
  'cursor/fix-errors-and-merge-to-main-c797',
  'cursor/fix-errors-and-merge-to-main-c7b1',
  'cursor/fix-errors-and-merge-to-main-ca37',
  'cursor/fix-errors-and-merge-to-main-cca8',
  'cursor/fix-errors-and-merge-to-main-d1ec',
  'cursor/fix-errors-and-merge-to-main-ee7a',
  'cursor/fix-errors-and-merge-to-main-f43c',
  'cursor/fix-errors-and-merge-to-main-f59f',
  'cursor/fix-errors-and-merge-to-main-f8eb'
];

const results = {
  successful: [],
  failed: [],
  skipped: []
};

function runCommand(command, description) {
  try {
    console.log(`\n🔄 ${description}...`);
    const output = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: '/workspace'
    });
    console.log(`✅ ${description} completed`);
    return { success: true, output };
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return { success: false, error: error.message, output: error.stdout || error.stderr };
  }
}

function mergeBranch(branchName) {
  console.log(`\n📋 Processing branch: ${branchName}`);
  
  // Checkout the branch
  const checkoutResult = runCommand(`git checkout ${branchName}`, `Checkout branch ${branchName}`);
  if (!checkoutResult.success) {
    results.failed.push({ branch: branchName, reason: 'Failed to checkout branch' });
    return;
  }
  
  // Pull latest changes
  const pullResult = runCommand(`git pull origin ${branchName}`, `Pull latest changes for ${branchName}`);
  if (!pullResult.success) {
    console.log(`⚠️  Could not pull changes for ${branchName}, continuing...`);
  }
  
  // Switch back to main
  const switchToMain = runCommand(`git checkout main`, `Switch to main branch`);
  if (!switchToMain.success) {
    results.failed.push({ branch: branchName, reason: 'Failed to switch to main' });
    return;
  }
  
  // Try to merge the branch
  const mergeResult = runCommand(`git merge ${branchName} --no-ff -m "Merge branch: ${branchName}"`, `Merge ${branchName} into main`);
  
  if (mergeResult.success) {
    console.log(`✅ Successfully merged ${branchName}`);
    results.successful.push({ branch: branchName });
    
    // Push the changes
    const pushResult = runCommand(`git push origin main`, `Push merged changes to main`);
    if (!pushResult.success) {
      console.log(`⚠️  Merge successful but push failed for ${branchName}`);
    }
  } else {
    // Check if it's a conflict or other issue
    if (mergeResult.output.includes('conflict') || mergeResult.output.includes('CONFLICT')) {
      console.log(`⚠️  Merge conflict detected for ${branchName}, attempting to resolve...`);
      
      // Try to resolve conflicts automatically
      const resolveResult = runCommand(`git status --porcelain`, `Check git status for conflicts`);
      if (resolveResult.success) {
        const conflictedFiles = resolveResult.output.split('\n')
          .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
          .map(line => line.split(' ').pop());
        
        console.log(`📝 Found conflicted files: ${conflictedFiles.join(', ')}`);
        
        // Try to resolve conflicts by accepting incoming changes
        for (const file of conflictedFiles) {
          if (file.trim()) {
            const resolveFile = runCommand(`git checkout --theirs "${file.trim()}"`, `Resolve conflict in ${file.trim()}`);
            if (resolveFile.success) {
              runCommand(`git add "${file.trim()}"`, `Stage resolved file ${file.trim()}`);
            }
          }
        }
        
        // Try to commit the resolved conflicts
        const commitResult = runCommand(`git commit -m "Resolve merge conflicts for ${branchName}"`, `Commit resolved conflicts`);
        if (commitResult.success) {
          console.log(`✅ Successfully resolved conflicts for ${branchName}`);
          results.successful.push({ branch: branchName });
          
          // Push the changes
          const pushResult = runCommand(`git push origin main`, `Push resolved changes to main`);
          if (!pushResult.success) {
            console.log(`⚠️  Conflict resolution successful but push failed for ${branchName}`);
          }
        } else {
          console.log(`❌ Failed to commit resolved conflicts for ${branchName}`);
          // Abort the merge
          runCommand(`git merge --abort`, `Abort failed merge for ${branchName}`);
          results.failed.push({ branch: branchName, reason: 'Failed to resolve merge conflicts' });
        }
      } else {
        results.failed.push({ branch: branchName, reason: 'Merge conflict - could not resolve' });
      }
    } else {
      console.log(`❌ Merge failed for ${branchName}: ${mergeResult.error}`);
      results.failed.push({ branch: branchName, reason: mergeResult.error });
    }
  }
}

async function main() {
  console.log('🚀 Starting comprehensive branch merge process...');
  console.log(`📊 Found ${availableBranches.length} branches to process`);
  
  // Ensure we're on main branch
  runCommand(`git checkout main`, 'Ensure on main branch');
  runCommand(`git pull origin main`, 'Pull latest main changes');
  
  // Process each branch
  for (const branchName of availableBranches) {
    try {
      mergeBranch(branchName);
    } catch (error) {
      console.log(`❌ Unexpected error processing ${branchName}: ${error.message}`);
      results.failed.push({ branch: branchName, reason: `Unexpected error: ${error.message}` });
    }
  }
  
  // Generate summary report
  console.log('\n📊 MERGE SUMMARY REPORT');
  console.log(`✅ Successful merges: ${results.successful.length}`);
  console.log(`❌ Failed merges: ${results.failed.length}`);
  console.log(`⏭️  Skipped: ${results.skipped.length}`);
  
  if (results.successful.length > 0) {
    console.log('\n✅ Successfully merged branches:');
    results.successful.forEach(({ branch }) => console.log(`  - ${branch}`));
  }
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed to merge branches:');
    results.failed.forEach(({ branch, reason }) => console.log(`  - ${branch}: ${reason}`));
  }
  
  // Save detailed results
  const reportData = {
    timestamp: new Date().toISOString(),
    summary: {
      total: availableBranches.length,
      successful: results.successful.length,
      failed: results.failed.length,
      skipped: results.skipped.length
    },
    successful: results.successful,
    failed: results.failed,
    skipped: results.skipped
  };
  
  fs.writeFileSync('/workspace/merge_available_branches_results.json', JSON.stringify(reportData, null, 2));
  console.log('\n💾 Detailed results saved to merge_available_branches_results.json');
  
  console.log('\n🎉 Branch merge process completed!');
}

main().catch(console.error);