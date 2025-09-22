#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Clean Merge Conflict Resolver');

// Function to check if we're in a git repository
function isGitRepo() {
  try {
    execSync('git rev-parse --git-dir', { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

// Function to get current branch
function getCurrentBranch() {
  try {
    return execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  } catch {
    return 'main';
  }
}

// Function to check for merge conflicts
function hasMergeConflicts() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    return status.includes('UU') || status.includes('AA') || status.includes('DD');
  } catch {
    return false;
  }
}

// Function to get conflicted files
function getConflictedFiles() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    return status.split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.split(' ').pop())
      .filter(file => file && file !== '');
  } catch {
    return [];
  }
}

// Function to resolve conflicts by accepting current branch (ours)
function resolveConflictsAcceptOurs(files) {
  console.log('📝 Resolving conflicts by accepting current branch changes...');
  
  for (const file of files) {
    try {
      if (fs.existsSync(file)) {
        execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
        execSync(`git add "${file}"`, { stdio: 'pipe' });
        console.log(`✅ Resolved: ${file}`);
      } else {
        console.log(`⚠️  File not found: ${file}`);
      }
    } catch (error) {
      console.log(`❌ Failed to resolve ${file}: ${error.message}`);
    }
  }
}

// Function to resolve conflicts by accepting incoming branch (theirs)
function resolveConflictsAcceptTheirs(files) {
  console.log('📝 Resolving conflicts by accepting incoming branch changes...');
  
  for (const file of files) {
    try {
      if (fs.existsSync(file)) {
        execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
        execSync(`git add "${file}"`, { stdio: 'pipe' });
        console.log(`✅ Resolved: ${file}`);
      } else {
        console.log(`⚠️  File not found: ${file}`);
      }
    } catch (error) {
      console.log(`❌ Failed to resolve ${file}: ${error.message}`);
    }
  }
}

// Function to remove merge conflict markers from files
function removeConflictMarkers(files) {
  console.log('🧹 Removing merge conflict markers...');
  
  for (const file of files) {
    try {
      if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;
        
        // Remove merge conflict markers
        content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
        content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content);
          execSync(`git add "${file}"`, { stdio: 'pipe' });
          console.log(`✅ Cleaned: ${file}`);
        }
      }
    } catch (error) {
      console.log(`❌ Failed to clean ${file}: ${error.message}`);
    }
  }
}

// Function to get all branches
function getAllBranches() {
  try {
    const output = execSync('git branch -a', { encoding: 'utf8' });
    return output.split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('*'))
      .map(line => line.replace('remotes/origin/', ''))
      .filter(line => line !== 'HEAD');
  } catch {
    return [];
  }
}

// Function to merge a branch
function mergeBranch(branchName, strategy = 'ours') {
  console.log(`🔄 Attempting to merge branch: ${branchName}`);
  
  try {
    // First, try a regular merge
    execSync(`git merge origin/${branchName}`, { stdio: 'pipe' });
    console.log(`✅ Successfully merged ${branchName}`);
    return true;
  } catch (error) {
    console.log(`⚠️  Merge conflict with ${branchName}, resolving...`);
    
    // Check for conflicts
    if (hasMergeConflicts()) {
      const conflictedFiles = getConflictedFiles();
      console.log(`Found ${conflictedFiles.length} conflicted files`);
      
      if (strategy === 'ours') {
        resolveConflictsAcceptOurs(conflictedFiles);
      } else if (strategy === 'theirs') {
        resolveConflictsAcceptTheirs(conflictedFiles);
      } else {
        removeConflictMarkers(conflictedFiles);
      }
      
      // Try to complete the merge
      try {
        execSync('git commit --no-edit', { stdio: 'pipe' });
        console.log(`✅ Resolved conflicts and merged ${branchName}`);
        return true;
      } catch (commitError) {
        console.log(`❌ Failed to commit merge: ${commitError.message}`);
        try {
          execSync('git merge --abort', { stdio: 'pipe' });
          console.log(`🔄 Aborted merge of ${branchName}`);
        } catch (abortError) {
          console.log(`⚠️  Could not abort merge: ${abortError.message}`);
        }
        return false;
      }
    }
    return false;
  }
}

// Main function
async function main() {
  console.log('🎯 Starting merge conflict resolution and PR merging...');
  
  if (!isGitRepo()) {
    console.log('❌ Not in a git repository');
    process.exit(1);
  }
  
  const currentBranch = getCurrentBranch();
  console.log(`📍 Current branch: ${currentBranch}`);
  
  // Check if we have any existing conflicts
  if (hasMergeConflicts()) {
    console.log('⚠️  Found existing merge conflicts, resolving...');
    const conflictedFiles = getConflictedFiles();
    console.log(`Found ${conflictedFiles.length} conflicted files`);
    removeConflictMarkers(conflictedFiles);
  }
  
  // Get all remote branches
  const allBranches = getAllBranches();
  console.log(`📋 Found ${allBranches.length} remote branches`);
  
  // Filter for cursor branches and other PR branches
  const prBranches = allBranches.filter(branch => 
    branch.startsWith('cursor/') || 
    branch.includes('pr-') ||
    branch.includes('fix-') ||
    branch.includes('feature-') ||
    branch.includes('merge-')
  ).filter(branch => branch !== currentBranch);
  
  console.log(`🎯 Found ${prBranches.length} PR-related branches to merge`);
  
  let mergedCount = 0;
  let failedCount = 0;
  
  // Try to merge each branch
  for (const branch of prBranches) {
    try {
      if (mergeBranch(branch, 'ours')) {
        mergedCount++;
      } else {
        failedCount++;
      }
    } catch (error) {
      console.log(`❌ Error merging ${branch}: ${error.message}`);
      failedCount++;
    }
  }
  
  console.log('\n🎉 Merge operation completed!');
  console.log(`✅ Successfully merged: ${mergedCount} branches`);
  console.log(`❌ Failed to merge: ${failedCount} branches`);
  
  // Final status check
  if (hasMergeConflicts()) {
    console.log('⚠️  Some conflicts remain, please resolve manually');
    const remainingConflicts = getConflictedFiles();
    remainingConflicts.forEach(file => console.log(`  - ${file}`));
  } else {
    console.log('✅ No remaining conflicts');
  }
  
  // Show current status
  console.log('\n📊 Current git status:');
  try {
    execSync('git status --short', { stdio: 'inherit' });
  } catch (error) {
    console.log('Could not get git status');
  }
}

// Run the main function
main().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});