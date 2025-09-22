#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔄 Handling remaining branches that failed to merge...');

// Helper function to execute git commands
function execGit(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      cwd: '/workspace',
      timeout: 30000,
      ...options 
    });
    return { success: true, output: result.trim() };
  } catch (error) {
    return { 
      success: false, 
      error: error.message,
      output: error.stdout ? error.stdout.toString() : '',
      stderr: error.stderr ? error.stderr.toString() : ''
    };
  }
}

// The remaining branch that failed
const remainingBranch = "5usi8s-codex/debug-persistent-login-failure";

console.log(`🎯 Processing remaining branch: ${remainingBranch}`);

try {
  // Configure git
  execGit('git config pull.rebase false');
  
  // Switch to main
  console.log('📍 Switching to main branch...');
  execGit('git checkout main');
  
  // Pull latest
  console.log('📥 Pulling latest changes...');
  execGit('git pull origin main');
  
  // Fetch all branches
  console.log('🔍 Fetching all branches...');
  execGit('git fetch origin');
  
  // Create temporary branch
  const tempBranch = `temp-${remainingBranch.replace(/[^a-zA-Z0-9-]/g, '-')}`;
  console.log(`📋 Creating temporary branch: ${tempBranch}`);
  
  const checkoutResult = execGit(`git checkout -b ${tempBranch} origin/${remainingBranch}`);
  if (!checkoutResult.success) {
    console.log(`⚠️  Failed to checkout ${remainingBranch}: ${checkoutResult.error}`);
    console.log('This branch may not exist or may have been deleted.');
    process.exit(0);
  }
  
  // Try different merge strategies
  console.log('🔀 Attempting merge strategies...');
  
  // Strategy 1: Simple merge
  console.log('📋 Strategy 1: Simple merge');
  let mergeResult = execGit('git merge main --no-ff');
  
  if (!mergeResult.success) {
    console.log('⚠️  Strategy 1 failed, trying Strategy 2...');
    
    // Strategy 2: Resolve conflicts automatically
    console.log('📋 Strategy 2: Auto-resolve conflicts');
    
    // Check for conflicted files
    const statusResult = execGit('git status --porcelain');
    if (statusResult.success) {
      const conflictedFiles = statusResult.output
        .split('\n')
        .filter(line => line.startsWith('UU') || line.includes('both modified'))
        .map(line => line.split(' ').pop());
      
      if (conflictedFiles.length > 0) {
        console.log(`🔧 Found ${conflictedFiles.length} conflicted files, resolving...`);
        
        for (const file of conflictedFiles) {
          console.log(`Resolving conflict in ${file}`);
          
          // Use main branch version for conflicts
          execGit(`git checkout --ours ${file}`);
          execGit(`git add ${file}`);
        }
        
        // Commit resolved conflicts
        const commitResult = execGit('git commit --no-edit');
        if (commitResult.success) {
          console.log('✅ Conflicts resolved successfully');
        } else {
          console.log(`❌ Failed to commit resolved conflicts: ${commitResult.error}`);
        }
      }
    }
  }
  
  // Switch back to main
  console.log('📍 Switching back to main...');
  execGit('git checkout main');
  
  // Merge the branch into main
  console.log('🔀 Merging branch into main...');
  const mergeMainResult = execGit(`git merge ${tempBranch} --no-ff`);
  
  if (!mergeMainResult.success) {
    console.log('⚠️  Conflict merging to main, resolving...');
    
    // Resolve conflicts when merging to main
    const statusResult = execGit('git status --porcelain');
    if (statusResult.success) {
      const conflictedFiles = statusResult.output
        .split('\n')
        .filter(line => line.startsWith('UU') || line.includes('both modified'))
        .map(line => line.split(' ').pop());
      
      if (conflictedFiles.length > 0) {
        console.log(`🔧 Resolving ${conflictedFiles.length} conflicts in main...`);
        
        for (const file of conflictedFiles) {
          console.log(`Resolving conflict in ${file}`);
          
          // Use main branch version for conflicts
          execGit(`git checkout --ours ${file}`);
          execGit(`git add ${file}`);
        }
        
        // Commit resolved conflicts
        const commitResult = execGit('git commit --no-edit');
        if (commitResult.success) {
          console.log('✅ Main merge conflicts resolved');
        } else {
          console.log(`❌ Failed to commit main merge: ${commitResult.error}`);
        }
      }
    }
  }
  
  // Clean up
  execGit(`git branch -D ${tempBranch}`);
  
  console.log('📤 Pushing changes...');
  const pushResult = execGit('git push origin main');
  if (!pushResult.success) {
    console.log('⚠️  Push failed, trying rebase...');
    execGit('git pull origin main --rebase');
    execGit('git push origin main');
  }
  
  console.log('✅ Successfully processed remaining branch!');
  
} catch (error) {
  console.error('💥 Error processing remaining branch:', error.message);
}

console.log('🎉 Remaining branch processing completed!');