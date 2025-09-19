#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');

// Utility function to run git commands
function runGit(command, options = {}) {
  try {
    const result = execSync(command, { 
      cwd: '/workspace', 
      encoding: 'utf8',
      stdio: 'pipe',
      ...options
    });
    return result.trim();
  } catch (error) {
    console.error(`Git command failed: ${command}`);
    console.error(error.message);
    return null;
  }
}

// Function to get current branch
function getCurrentBranch() {
  return runGit('git branch --show-current');
}

// Function to get all branches
function getAllBranches() {
  const localBranches = runGit('git branch --format="%(refname:short)"');
  const remoteBranches = runGit('git branch -r --format="%(refname:short)"');
  
  return {
    local: localBranches ? localBranches.split('\n').filter(b => b.trim()) : [],
    remote: remoteBranches ? remoteBranches.split('\n').filter(b => b.trim() && !b.includes('HEAD')) : []
  };
}

// Function to merge a branch
function mergeBranch(branchName) {
  console.log(`🔄 Attempting to merge branch: ${branchName}`);
  
  try {
    // Try to merge
    runGit(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`);
    console.log(`✅ Successfully merged ${branchName}`);
    return { success: true, conflicts: false };
  } catch (error) {
    console.log(`⚠️ Merge conflict in ${branchName}, attempting resolution...`);
    
    // Check if there are conflicts
    const status = runGit('git status --porcelain');
    if (status && status.includes('UU')) {
      console.log(`🔧 Resolving conflicts in ${branchName}...`);
      
      // Try to resolve conflicts by taking the incoming changes
      try {
        runGit('git checkout --theirs .');
        runGit('git add .');
        runGit('git commit --no-edit');
        console.log(`✅ Successfully resolved conflicts for ${branchName}`);
        return { success: true, conflicts: true };
      } catch (resolveError) {
        console.log(`❌ Could not resolve conflicts for ${branchName}`);
        runGit('git merge --abort');
        return { success: false, conflicts: true };
      }
    } else {
      console.log(`❌ Merge failed for ${branchName}`);
      runGit('git merge --abort');
      return { success: false, conflicts: false };
    }
  }
}

// Main function
async function main() {
  console.log('🚀 Starting repository merge process...');
  
  // Check if we're in a git repository
  const gitDir = runGit('git rev-parse --git-dir');
  if (!gitDir) {
    console.error('❌ Not in a git repository');
    process.exit(1);
  }
  
  // Get current status
  const currentBranch = getCurrentBranch();
  console.log(`📋 Current branch: ${currentBranch}`);
  
  // Switch to main if not already there
  if (currentBranch !== 'main') {
    console.log('📋 Switching to main branch...');
    runGit('git checkout main') || runGit('git checkout -b main');
  }
  
  // Pull latest changes
  console.log('⬇️ Pulling latest changes...');
  runGit('git pull origin main') || console.log('No remote main branch');
  
  // Fetch all branches
  console.log('🔍 Fetching all remote branches...');
  runGit('git fetch --all');
  
  // Get all branches
  const branches = getAllBranches();
  console.log(`📊 Found ${branches.remote.length} remote branches`);
  
  // Filter out main and HEAD
  const branchesToMerge = branches.remote.filter(branch => 
    branch !== 'main' && 
    !branch.includes('HEAD') && 
    !branch.includes('origin/main')
  );
  
  console.log(`📝 Branches to merge: ${branchesToMerge.length}`);
  branchesToMerge.forEach(branch => console.log(`  - ${branch}`));
  
  // Initialize counters
  let merged = 0;
  let failed = 0;
  let conflicts = 0;
  
  // Process each branch
  for (const branch of branchesToMerge.slice(0, 10)) { // Limit to first 10 branches
    console.log(`\n📝 Processing: ${branch}`);
    
    const result = mergeBranch(branch);
    
    if (result.success) {
      merged++;
      if (result.conflicts) {
        conflicts++;
      }
    } else {
      failed++;
      if (result.conflicts) {
        conflicts++;
      }
    }
  }
  
  // Push changes if any were merged
  if (merged > 0) {
    console.log('\n⬆️ Pushing merged changes...');
    const pushResult = runGit('git push origin main');
    if (pushResult !== null) {
      console.log('✅ Successfully pushed changes');
    } else {
      console.log('⚠️ Could not push to remote');
    }
  }
  
  // Summary
  console.log('\n📊 Merge Summary:');
  console.log(`✅ Successfully merged: ${merged} branches`);
  console.log(`❌ Failed to merge: ${failed} branches`);
  console.log(`⚠️ Had conflicts: ${conflicts} branches`);
  
  // Show current status
  console.log('\n📋 Current git status:');
  const status = runGit('git status --short');
  if (status) {
    console.log(status);
  }
  
  console.log('\n🎉 Merge process completed!');
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main, mergeBranch, getAllBranches };