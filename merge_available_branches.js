#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// List of available branches from the fetch output

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

function mergeBranch(branchName) {
    
  // Checkout the branch
  const checkoutResult = runCommand(`git checkout ${branchName}`, `Checkout branch ${branchName}`);
  if (!checkoutResult.success) {
    results.failed.push({ branch: branchName, reason: 'Failed to checkout branch' });
    return;
  }
  
  // Pull latest changes
  const pullResult = runCommand(`git pull origin ${branchName}`, `Pull latest changes for ${branchName}`);
  if (!pullResult.success) {
    // Empty block
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
        results.successful.push({ branch: branchName });
    
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
        const commitResult = runCommand(`git commit -m "Resolve merge conflicts for ${branchName}"`, `Commit resolved conflicts`);
        if (commitResult.success) {
                    results.successful.push({ branch: branchName });
          
          // Push the changes
          const pushResult = runCommand(`git push origin main`, `Push resolved changes to main`);
          if (!pushResult.success) {
    // Empty block
  }
        } else {
                    // Abort the merge
          runCommand(`git merge --abort`, `Abort failed merge for ${branchName}`);
          results.failed.push({ branch: branchName, reason: 'Failed to resolve merge conflicts' });
        }
      } else {
        results.failed.push({ branch: branchName, reason: 'Merge conflict - could not resolve' });
      }
    } else {
            results.failed.push({ branch: branchName, reason: mergeResult.error });
    }
  }
}

async function main() {
      
  // Ensure we're on main branch
  runCommand(`git checkout main`, 'Ensure on main branch');
  runCommand(`git pull origin main`, 'Pull latest main changes');
  
  // Process each branch
  for (const branchName of availableBranches) {
    try {
      mergeBranch(branchName);
    } catch (error) {
            results.failed.push({ branch: branchName, reason: `Unexpected error: ${error.message}` });
    }
  }
  
  // Generate summary report
          
  if (results.successful.length > 0) {
        results.successful.forEach(({ branch }) => );
  }
  
  if (results.failed.length > 0) {
        results.failed.forEach(({ branch, reason }) => );
  }
  
  // Save detailed results
    
  fs.writeFileSync('/workspace/merge_available_branches_results.json', JSON.stringify(reportData, null, 2));
    
  }

main().catch(console.error);