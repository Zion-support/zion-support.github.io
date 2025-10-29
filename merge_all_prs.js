#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// Function to execute shell commands safely
function exec(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      ...options 
    });
    return { success: true, output: result };
  } catch (error) {
    return { success: false, error: error.message, output: error.stdout || '', stderr: error.stderr || '' };
  }
}

// Function to merge a PR
function mergePR(prNumber, title) {
  console.log(`\n🔄 Processing PR #${prNumber}: ${title}`);
  
  try {
    // First, try to merge the PR
    const mergeResult = exec(`gh pr merge ${prNumber} --merge --delete-branch`);
    
    if (mergeResult.success) {
      console.log(`✅ Successfully merged PR #${prNumber}`);
      return { success: true, action: 'merged' };
    } else {
      console.log(`❌ Failed to merge PR #${prNumber}: ${mergeResult.error}`);
      
      // Check if it's a conflict issue
      if (mergeResult.error.includes('conflict') || mergeResult.error.includes('CONFLICTING')) {
        console.log(`🔧 PR #${prNumber} has conflicts, will resolve manually`);
        return { success: false, action: 'conflict', error: mergeResult.error };
      }
      
      return { success: false, action: 'failed', error: mergeResult.error };
    }
  } catch (error) {
    console.log(`❌ Error processing PR #${prNumber}: ${error.message}`);
    return { success: false, action: 'error', error: error.message };
  }
}

// Function to resolve conflicts for a PR
function resolveConflicts(prNumber, headRefName) {
  console.log(`\n🔧 Resolving conflicts for PR #${prNumber} (${headRefName})`);
  
  try {
    // Fetch the branch
    const fetchResult = exec(`git fetch origin ${headRefName}`);
    if (!fetchResult.success) {
      console.log(`❌ Failed to fetch branch ${headRefName}: ${fetchResult.error}`);
      return { success: false, error: fetchResult.error };
    }
    
    // Create a local branch for conflict resolution
    const localBranchName = `resolve-${prNumber}`;
    const checkoutResult = exec(`git checkout -b ${localBranchName} origin/${headRefName}`);
    if (!checkoutResult.success) {
      console.log(`❌ Failed to checkout branch: ${checkoutResult.error}`);
      return { success: false, error: checkoutResult.error };
    }
    
    // Try to merge with main
    const mergeResult = exec(`git merge main`);
    if (mergeResult.success) {
      console.log(`✅ Successfully merged ${headRefName} with main`);
      
      // Push the resolved branch
      const pushResult = exec(`git push origin ${localBranchName}:${headRefName}`);
      if (pushResult.success) {
        console.log(`✅ Pushed resolved changes for PR #${prNumber}`);
        
        // Now try to merge the PR
        const finalMergeResult = exec(`gh pr merge ${prNumber} --merge --delete-branch`);
        if (finalMergeResult.success) {
          console.log(`✅ Successfully merged resolved PR #${prNumber}`);
          return { success: true, action: 'resolved_and_merged' };
        } else {
          console.log(`❌ Failed to merge resolved PR #${prNumber}: ${finalMergeResult.error}`);
          return { success: false, action: 'resolved_but_merge_failed', error: finalMergeResult.error };
        }
      } else {
        console.log(`❌ Failed to push resolved changes: ${pushResult.error}`);
        return { success: false, action: 'resolved_but_push_failed', error: pushResult.error };
      }
    } else {
      console.log(`❌ Failed to merge with main: ${mergeResult.error}`);
      
      // Try to resolve conflicts automatically
      const statusResult = exec(`git status --porcelain`);
      if (statusResult.success && statusResult.output.includes('UU')) {
        console.log(`🔧 Found merge conflicts, attempting automatic resolution...`);
        
        // Use git checkout --ours for conflicted files (prefer main branch changes)
        const resolveResult = exec(`git checkout --ours . && git add .`);
        if (resolveResult.success) {
          const commitResult = exec(`git commit -m "Resolve merge conflicts by preferring main branch changes"`);
          if (commitResult.success) {
            console.log(`✅ Automatically resolved conflicts for PR #${prNumber}`);
            
            // Push the resolved branch
            const pushResult = exec(`git push origin ${localBranchName}:${headRefName}`);
            if (pushResult.success) {
              console.log(`✅ Pushed auto-resolved changes for PR #${prNumber}`);
              
              // Try to merge the PR
              const finalMergeResult = exec(`gh pr merge ${prNumber} --merge --delete-branch`);
              if (finalMergeResult.success) {
                console.log(`✅ Successfully merged auto-resolved PR #${prNumber}`);
                return { success: true, action: 'auto_resolved_and_merged' };
              }
            }
          }
        }
      }
      
      return { success: false, action: 'conflict_resolution_failed', error: mergeResult.error };
    }
  } catch (error) {
    console.log(`❌ Error resolving conflicts for PR #${prNumber}: ${error.message}`);
    return { success: false, action: 'error', error: error.message };
  } finally {
    // Clean up - go back to main and delete local branch
    exec(`git checkout main`);
    exec(`git branch -D resolve-${prNumber} 2>/dev/null || true`);
  }
}

// Main function
async function main() {
  console.log('🚀 Starting comprehensive PR merge process...');
  
  // Load PR data
  let prs;
  try {
    const prData = fs.readFileSync('current_open_prs_latest.json', 'utf8');
    prs = JSON.parse(prData);
  } catch (error) {
    console.error('❌ Failed to load PR data:', error.message);
    process.exit(1);
  }
  
  console.log(`📊 Found ${prs.length} open PRs`);
  
  // Separate PRs by status
  const mergeablePRs = prs.filter(pr => 
    pr.mergeable === 'MERGEABLE' && 
    pr.mergeStateStatus === 'CLEAN' && 
    !pr.isDraft
  );
  
  const conflictingPRs = prs.filter(pr => 
    pr.mergeable === 'CONFLICTING' || 
    pr.mergeStateStatus === 'DIRTY'
  );
  
  const unknownPRs = prs.filter(pr => 
    pr.mergeable === 'UNKNOWN' || 
    pr.mergeStateStatus === 'UNKNOWN'
  );
  
  console.log(`📈 Mergeable PRs: ${mergeablePRs.length}`);
  console.log(`⚠️  Conflicting PRs: ${conflictingPRs.length}`);
  console.log(`❓ Unknown status PRs: ${unknownPRs.length}`);
  
  const results = {
    merged: [],
    resolved: [],
    failed: [],
    errors: []
  };
  
  // First, merge all mergeable PRs
  console.log('\n🔄 Phase 1: Merging mergeable PRs...');
  for (const pr of mergeablePRs) {
    const result = mergePR(pr.number, pr.title);
    if (result.success) {
      results.merged.push({ pr: pr.number, title: pr.title, action: result.action });
    } else {
      results.failed.push({ pr: pr.number, title: pr.title, error: result.error });
    }
  }
  
  // Then, resolve conflicts for conflicting PRs
  console.log('\n🔧 Phase 2: Resolving conflicts...');
  for (const pr of conflictingPRs) {
    const result = resolveConflicts(pr.number, pr.headRefName);
    if (result.success) {
      results.resolved.push({ pr: pr.number, title: pr.title, action: result.action });
    } else {
      results.failed.push({ pr: pr.number, title: pr.title, error: result.error });
    }
  }
  
  // Finally, try to merge unknown status PRs
  console.log('\n❓ Phase 3: Processing unknown status PRs...');
  for (const pr of unknownPRs) {
    const result = mergePR(pr.number, pr.title);
    if (result.success) {
      results.merged.push({ pr: pr.number, title: pr.title, action: result.action });
    } else if (result.action === 'conflict') {
      // Try to resolve conflicts
      const resolveResult = resolveConflicts(pr.number, pr.headRefName);
      if (resolveResult.success) {
        results.resolved.push({ pr: pr.number, title: pr.title, action: resolveResult.action });
      } else {
        results.failed.push({ pr: pr.number, title: pr.title, error: resolveResult.error });
      }
    } else {
      results.failed.push({ pr: pr.number, title: pr.title, error: result.error });
    }
  }
  
  // Save results
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: prs.length,
      merged: results.merged.length,
      resolved: results.resolved.length,
      failed: results.failed.length
    },
    results
  };
  
  fs.writeFileSync('pr_merge_report.json', JSON.stringify(report, null, 2));
  
  // Print summary
  console.log('\n📊 FINAL SUMMARY:');
  console.log(`✅ Successfully merged: ${results.merged.length}`);
  console.log(`🔧 Resolved and merged: ${results.resolved.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  console.log(`📄 Detailed report saved to: pr_merge_report.json`);
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed PRs:');
    results.failed.forEach(failed => {
      console.log(`  - PR #${failed.pr}: ${failed.title} - ${failed.error}`);
    });
  }
}

main().catch(console.error);