#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting automated PR merge process...');

// Function to run git commands safely
function runGitCommand(command, options = {}) {
  try {
    const result = execSync(command, { 
      cwd: '/workspace', 
      encoding: 'utf8',
      timeout: 30000,
      ...options 
    });
    return result.trim();
  } catch (error) {
    console.error(`❌ Git command failed: ${command}`);
    console.error(`Error: ${error.message}`);
    return null;
  }
}

// Function to check if branch exists
function branchExists(branchName) {
  const result = runGitCommand(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`);
  return result !== null;
}

// Function to merge a branch
function mergeBranch(branchName) {
  console.log(`📋 Processing branch: ${branchName}`);
  
  if (!branchExists(branchName)) {
    console.log(`❌ Branch ${branchName} does not exist, skipping...`);
    return false;
  }
  
  // Fetch the branch
  console.log(`📥 Fetching branch ${branchName}...`);
  runGitCommand(`git fetch origin ${branchName}`);
  
  // Try to merge
  console.log(`🔄 Attempting to merge ${branchName} into main...`);
  const mergeResult = runGitCommand(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`);
  
  if (mergeResult !== null) {
    console.log(`✅ Successfully merged ${branchName}`);
    return true;
  } else {
    console.log(`⚠️  Merge conflict detected in ${branchName}`);
    
    // Check for conflicts
    const status = runGitCommand('git status --porcelain');
    if (status && status.includes('UU') || status.includes('AA') || status.includes('DD')) {
      console.log(`🔧 Resolving merge conflicts in ${branchName}...`);
      
      // Auto-resolve conflicts
      const conflictFiles = status.split('\n')
        .filter(line => line.match(/^(UU|AA|DD)/))
        .map(line => line.split(' ').pop());
      
      for (const file of conflictFiles) {
        console.log(`  - Resolving conflict in: ${file}`);
        
        if (file === 'package.json' || file === 'package-lock.json') {
          // Use the version from the branch being merged
          runGitCommand(`git checkout --theirs "${file}"`);
        } else {
          // For other files, try theirs first, then ours
          const theirsResult = runGitCommand(`git checkout --theirs "${file}"`);
          if (theirsResult === null) {
            runGitCommand(`git checkout --ours "${file}"`);
          }
        }
      }
      
      // Add resolved files
      runGitCommand('git add .');
      
      // Complete the merge
      const commitResult = runGitCommand('git commit --no-edit');
      if (commitResult !== null) {
        console.log(`✅ Successfully resolved conflicts and merged ${branchName}`);
        return true;
      } else {
        console.log(`❌ Failed to complete merge for ${branchName}`);
        runGitCommand('git merge --abort');
        return false;
      }
    } else {
      console.log(`❌ Unknown merge issue with ${branchName}`);
      runGitCommand('git merge --abort');
      return false;
    }
  }
}

// Main execution
async function main() {
  try {
    // Ensure we're on main and up to date
    console.log('🔄 Switching to main branch...');
    runGitCommand('git checkout main');
    
    console.log('📥 Pulling latest changes...');
    runGitCommand('git pull origin main');
    
    // List of PR branches to merge
    const prBranches = [
      'cursor/fix-netlify-build-and-merge-to-main-74ad',
      'cursor/fix-netlify-build-and-merge-to-main-9e6a',
      'cursor/fix-netlify-build-and-merge-to-main-34e4'
    ];
    
    let successCount = 0;
    
    // Process each PR branch
    for (const branch of prBranches) {
      if (mergeBranch(branch)) {
        successCount++;
      }
    }
    
    console.log(`🎉 Processed ${successCount}/${prBranches.length} PRs successfully!`);
    
    // Push changes to main
    console.log('📤 Pushing changes to main...');
    const pushResult = runGitCommand('git push origin main');
    if (pushResult !== null) {
      console.log('✅ Successfully pushed changes to main!');
    } else {
      console.log('❌ Failed to push changes to main');
    }
    
  } catch (error) {
    console.error('❌ Error during merge process:', error.message);
    process.exit(1);
  }
}

main();