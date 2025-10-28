#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// List of open PRs from the gh pr list output

const results = {
  successful: [],
  failed: [],
  skipped: []
};

function runCommand(command, description) {
  try {
        const output = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: '/workspace'
    });
        return { success: true, output };
  } catch (error) {
        return { success: false, error: error.message, output: error.stdout || error.stderr };
  }
}

function mergePR(pr) {
  `);
  
  // Check if branch exists locally
  const branchCheck = runCommand(`git branch -a | grep ${pr.branch}`, `Check if branch ${pr.branch} exists`);
  if (!branchCheck.success) {
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
    // Empty block
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
        results.successful.push(pr);
    
    // Push the changes
    const pushResult = runCommand(`git push origin main`, `Push merged changes to main`);
    if (!pushResult.success) {
    // Empty block
  }
  } else {
    // Check if it's a conflict or other issue
    if (mergeResult.output.includes('conflict') || mergeResult.output.includes('CONFLICT')) {
            
      // Try to resolve conflicts automatically
      const resolveResult = runCommand(`git status --porcelain`, `Check git status for conflicts`);
      if (resolveResult.success) {
        const conflictedFiles = resolveResult.output.split('\n')
          .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
          .map(line => line.split(' ').pop());
        
        }`);
        
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
                    results.successful.push(pr);
          
          // Push the changes
          const pushResult = runCommand(`git push origin main`, `Push resolved changes to main`);
          if (!pushResult.success) {
    // Empty block
  }
        } else {
                    // Abort the merge
          runCommand(`git merge --abort`, `Abort failed merge for PR #${pr.number}`);
          results.failed.push({ pr, reason: 'Failed to resolve merge conflicts' });
        }
      } else {
        results.failed.push({ pr, reason: 'Merge conflict - could not resolve' });
      }
    } else {
            results.failed.push({ pr, reason: mergeResult.error });
    }
  }
}

async function main() {
      
  // Ensure we're on main branch
  runCommand(`git checkout main`, 'Ensure on main branch');
  runCommand(`git pull origin main`, 'Pull latest main changes');
  
  // Process each PR
  for (const pr of openPRs) {
    try {
      mergePR(pr);
    } catch (error) {
            results.failed.push({ pr, reason: `Unexpected error: ${error.message}` });
    }
  }
  
  // Generate summary report
          
  if (results.successful.length > 0) {
        results.successful.forEach(pr => `));
  }
  
  if (results.failed.length > 0) {
        results.failed.forEach(({ pr, reason }) => : ${reason}`));
  }
  
  // Save detailed results
    
  fs.writeFileSync('/workspace/merge_results.json', JSON.stringify(reportData, null, 2));
    
  }

main().catch(console.error);