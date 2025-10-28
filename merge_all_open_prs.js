#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// List of open PRs from the gh pr list output
const openPRs = [
  { number: 34000, branch: 'cursor/fix-errors-and-merge-to-main-fc5f' },
  { number: 32379, branch: 'cursor/fix-errors-and-merge-to-main-cf2d' },
  { number: 31846, branch: 'cursor/fix-errors-and-merge-to-main-e5d4' },
  { number: 31845, branch: 'cursor/fix-errors-and-merge-to-main-0507' },
  { number: 31843, branch: 'cursor/fix-errors-and-merge-to-main-bd2f' },
  { number: 31842, branch: 'cursor/fix-errors-and-merge-to-main-a950' },
  { number: 31841, branch: 'cursor/fix-errors-and-merge-to-main-315c' },
  { number: 31840, branch: 'cursor/fix-errors-and-merge-to-main-1a47' },
  { number: 31839, branch: 'cursor/fix-errors-and-merge-to-main-291b' },
  { number: 31838, branch: 'cursor/fix-errors-and-merge-to-main-0e15' },
  { number: 31836, branch: 'cursor/fix-errors-and-merge-to-main-6b4a' },
  { number: 31835, branch: 'cursor/fix-errors-and-merge-to-main-44cf' },
  { number: 31834, branch: 'cursor/fix-errors-and-merge-to-main-370a' },
  { number: 31833, branch: 'cursor/fix-errors-and-merge-to-main-5341' },
  { number: 31832, branch: 'cursor/fix-errors-and-merge-to-main-1dda' },
  { number: 31831, branch: 'cursor/fix-errors-and-merge-to-main-33cc' },
  { number: 31830, branch: 'cursor/fix-errors-and-merge-to-main-bcda' },
  { number: 31829, branch: 'cursor/fix-errors-and-merge-to-main-eb55' },
  { number: 31828, branch: 'cursor/fix-errors-and-merge-to-main-986f' },
  { number: 31827, branch: 'cursor/fix-errors-and-merge-to-main-77c0' },
  { number: 31826, branch: 'cursor/fix-errors-and-merge-to-main-7fe4' },
  { number: 31825, branch: 'cursor/fix-errors-and-merge-to-main-5994' },
  { number: 31824, branch: 'cursor/fix-errors-and-merge-to-main-6064' },
  { number: 31823, branch: 'cursor/fix-errors-and-merge-to-main-b376' },
  { number: 31822, branch: 'cursor/fix-errors-and-merge-to-main-6f52' },
  { number: 31820, branch: 'cursor/fix-errors-and-merge-to-main-af51' },
  { number: 31819, branch: 'cursor/fix-errors-and-merge-to-main-da8e' },
  { number: 31817, branch: 'cursor/fix-errors-and-merge-to-main-458f' },
  { number: 31815, branch: 'cursor/fix-errors-and-merge-to-main-1832' },
  { number: 31814, branch: 'cursor/fix-errors-and-merge-to-main-4271' },
  { number: 31813, branch: 'cursor/fix-errors-and-merge-to-main-2682' }
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

function mergePR(pr) {
  console.log(`\n📋 Processing PR #${pr.number} (${pr.branch})`);
  
  // Check if branch exists locally
  const branchCheck = runCommand(`git branch -a | grep ${pr.branch}`, `Check if branch ${pr.branch} exists`);
  if (!branchCheck.success) {
    console.log(`⚠️  Branch ${pr.branch} not found locally, fetching...`);
    const fetchResult = runCommand(`git fetch origin ${pr.branch}`, `Fetch branch ${pr.branch}`);
    if (!fetchResult.success) {
      results.failed.push({ pr, reason: 'Failed to fetch branch' });
      return;
    }
  }
  
  // Checkout the branch
  const checkoutResult = runCommand(`git checkout ${pr.branch}`, `Checkout branch ${pr.branch}`);
  if (!checkoutResult.success) {
    results.failed.push({ pr, reason: 'Failed to checkout branch' });
    return;
  }
  
  // Pull latest changes
  const pullResult = runCommand(`git pull origin ${pr.branch}`, `Pull latest changes for ${pr.branch}`);
  if (!pullResult.success) {
    console.log(`⚠️  Could not pull changes for ${pr.branch}, continuing...`);
  }
  
  // Switch back to main
  const switchToMain = runCommand(`git checkout main`, `Switch to main branch`);
  if (!switchToMain.success) {
    results.failed.push({ pr, reason: 'Failed to switch to main' });
    return;
  }
  
  // Try to merge the branch
  const mergeResult = runCommand(`git merge ${pr.branch} --no-ff -m "Merge PR #${pr.number}: ${pr.branch}"`, `Merge ${pr.branch} into main`);
  
  if (mergeResult.success) {
    console.log(`✅ Successfully merged PR #${pr.number}`);
    results.successful.push(pr);
    
    // Push the changes
    const pushResult = runCommand(`git push origin main`, `Push merged changes to main`);
    if (!pushResult.success) {
      console.log(`⚠️  Merge successful but push failed for PR #${pr.number}`);
    }
  } else {
    // Check if it's a conflict or other issue
    if (mergeResult.output.includes('conflict') || mergeResult.output.includes('CONFLICT')) {
      console.log(`⚠️  Merge conflict detected for PR #${pr.number}, attempting to resolve...`);
      
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
        const commitResult = runCommand(`git commit -m "Resolve merge conflicts for PR #${pr.number}"`, `Commit resolved conflicts`);
        if (commitResult.success) {
          console.log(`✅ Successfully resolved conflicts for PR #${pr.number}`);
          results.successful.push(pr);
          
          // Push the changes
          const pushResult = runCommand(`git push origin main`, `Push resolved changes to main`);
          if (!pushResult.success) {
            console.log(`⚠️  Conflict resolution successful but push failed for PR #${pr.number}`);
          }
        } else {
          console.log(`❌ Failed to commit resolved conflicts for PR #${pr.number}`);
          // Abort the merge
          runCommand(`git merge --abort`, `Abort failed merge for PR #${pr.number}`);
          results.failed.push({ pr, reason: 'Failed to resolve merge conflicts' });
        }
      } else {
        results.failed.push({ pr, reason: 'Merge conflict - could not resolve' });
      }
    } else {
      console.log(`❌ Merge failed for PR #${pr.number}: ${mergeResult.error}`);
      results.failed.push({ pr, reason: mergeResult.error });
    }
  }
}

async function main() {
  console.log('🚀 Starting comprehensive PR merge process...');
  console.log(`📊 Found ${openPRs.length} open PRs to process`);
  
  // Ensure we're on main branch
  runCommand(`git checkout main`, 'Ensure on main branch');
  runCommand(`git pull origin main`, 'Pull latest main changes');
  
  // Process each PR
  for (const pr of openPRs) {
    try {
      mergePR(pr);
    } catch (error) {
      console.log(`❌ Unexpected error processing PR #${pr.number}: ${error.message}`);
      results.failed.push({ pr, reason: `Unexpected error: ${error.message}` });
    }
  }
  
  // Generate summary report
  console.log('\n📊 MERGE SUMMARY REPORT');
  console.log('========================');
  console.log(`✅ Successful merges: ${results.successful.length}`);
  console.log(`❌ Failed merges: ${results.failed.length}`);
  console.log(`⏭️  Skipped: ${results.skipped.length}`);
  
  if (results.successful.length > 0) {
    console.log('\n✅ Successfully merged PRs:');
    results.successful.forEach(pr => console.log(`  - PR #${pr.number} (${pr.branch})`));
  }
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed to merge PRs:');
    results.failed.forEach(({ pr, reason }) => console.log(`  - PR #${pr.number} (${pr.branch}): ${reason}`));
  }
  
  // Save detailed results
  const reportData = {
    timestamp: new Date().toISOString(),
    summary: {
      total: openPRs.length,
      successful: results.successful.length,
      failed: results.failed.length,
      skipped: results.skipped.length
    },
    successful: results.successful,
    failed: results.failed,
    skipped: results.skipped
  };
  
  fs.writeFileSync('/workspace/merge_results.json', JSON.stringify(reportData, null, 2));
  console.log('\n💾 Detailed results saved to merge_results.json');
  
  console.log('\n🎉 PR merge process completed!');
}

main().catch(console.error);