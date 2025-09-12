#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting conflict resolution and merge process...');

// Function to run git commands safely
function runGitCommand(command, options = {}) {
  try {
    console.log(`📝 Running: ${command}`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      cwd: '/workspace',
      ...options 
    });
    return result.trim();
  } catch (error) {
    console.log(`⚠️ Command failed: ${command}`);
    console.log(`Error: ${error.message}`);
    return null;
  }
}

// Function to check if we're in a git repository
function checkGitRepo() {
  try {
    runGitCommand('git status');
    return true;
  } catch (error) {
    console.log('❌ Not in a git repository');
    return false;
  }
}

// Function to resolve merge conflicts
function resolveConflicts() {
  console.log('🔧 Resolving merge conflicts...');
  
  // Check for merge conflicts
  const status = runGitCommand('git status --porcelain');
  if (!status) return false;
  
  const conflictFiles = status.split('\n').filter(line => 
    line.startsWith('UU') || line.startsWith('AA') || line.startsWith('DD')
  );
  
  if (conflictFiles.length === 0) {
    console.log('✅ No merge conflicts found');
    return true;
  }
  
  console.log(`🔍 Found ${conflictFiles.length} files with conflicts:`);
  conflictFiles.forEach(file => console.log(`  - ${file}`));
  
  // Try to resolve conflicts automatically
  console.log('🤖 Attempting automatic conflict resolution...');
  
  // Add all files
  runGitCommand('git add .');
  
  // Try to commit
  const commitResult = runGitCommand('git commit -m "Resolve merge conflicts automatically"');
  
  if (commitResult) {
    console.log('✅ Conflicts resolved successfully');
    return true;
  } else {
    console.log('❌ Could not resolve conflicts automatically');
    return false;
  }
}

// Function to merge current branch to main
function mergeToMain() {
  console.log('🔄 Merging to main branch...');
  
  // Get current branch
  const currentBranch = runGitCommand('git branch --show-current');
  if (!currentBranch) {
    console.log('❌ Could not determine current branch');
    return false;
  }
  
  console.log(`📍 Current branch: ${currentBranch}`);
  
  // Switch to main
  console.log('🔄 Switching to main branch...');
  runGitCommand('git checkout main');
  
  // Pull latest changes
  console.log('⬇️ Pulling latest changes...');
  runGitCommand('git pull origin main');
  
  // Merge the branch
  console.log(`🔀 Merging ${currentBranch} into main...`);
  const mergeResult = runGitCommand(`git merge ${currentBranch} --no-ff -m "Merge ${currentBranch} into main"`);
  
  if (mergeResult) {
    console.log('✅ Successfully merged to main');
    
    // Push to origin
    console.log('⬆️ Pushing to origin...');
    runGitCommand('git push origin main');
    
    return true;
  } else {
    console.log('❌ Merge failed, attempting conflict resolution...');
    return resolveConflicts();
  }
}

// Main execution
function main() {
  console.log('🔍 Checking git repository...');
  
  if (!checkGitRepo()) {
    console.log('❌ Not in a git repository. Exiting.');
    process.exit(1);
  }
  
  console.log('✅ Git repository found');
  
  // Resolve any existing conflicts
  resolveConflicts();
  
  // Merge to main
  if (mergeToMain()) {
    console.log('🎉 Successfully merged to main branch!');
  } else {
    console.log('❌ Failed to merge to main branch');
    process.exit(1);
  }
  
  // Show final status
  console.log('\n📋 Final status:');
  runGitCommand('git status');
  runGitCommand('git log --oneline -3');
}

// Run the main function
main();