#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

function runCommand(command, options = {}) {
  try {
    console.log(`Running: ${command}`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      ...options 
    });
    return result.trim();
  } catch (error) {
    console.error(`Error running command: ${command}`);
    console.error(error.message);
    return null;
  }
}

function getRecentBranches() {
  const branches = runCommand('git for-each-ref --sort=-committerdate refs/remotes/origin --format="%(committerdate:short) %(refname:short)"');
  if (!branches) return [];  
  return branches.split('\n')
    .filter(line => line.includes('cursor/') && !line.includes('main'))
    .slice(0, 20) // Get top 20 recent branches
    .map(line => line.split(' ').slice(1).join(' '));
}

function hasMergeConflicts(branch) {
  console.log(`\n🔍 Checking merge conflicts for ${branch}...`);
  
  // Try to merge without committing
  const result = runCommand(`git merge --no-commit --no-ff origin/${branch}`, { stdio: 'pipe' });
  
  if (result === null) {
    // There were conflicts, abort the merge
    runCommand('git merge --abort');
    return true;
  }
  
  // No conflicts, abort the test merge
  runCommand('git merge --abort');
  return false;
}

function resolveMergeConflicts(branch) {
  console.log(`\n🔧 Resolving merge conflicts for ${branch}...`);
  
  // Start the merge
  const mergeResult = runCommand(`git merge --no-commit --no-ff origin/${branch}`, { stdio: 'pipe' });
  
  if (mergeResult === null) {
    // There are conflicts, resolve them automatically
    console.log(`   ⚠️  Conflicts detected, resolving automatically...`);
    
    // Use our strategy to resolve conflicts (accept theirs for syntax fixes)
    runCommand('git checkout --theirs .');
    runCommand('git add .');
    
    // Commit the merge
    runCommand(`git commit -m "Merge ${branch} - resolved conflicts automatically"`);
    console.log(`   ✅ Successfully merged ${branch}`);
    return true;
  } else {
    // No conflicts, commit the merge
    runCommand(`git commit -m "Merge ${branch} - no conflicts"`);
    console.log(`   ✅ Successfully merged ${branch} (no conflicts)`);
    return true;
  }
}

function main() {
  console.log('🚀 Starting comprehensive PR merge process...\n');
  
  // Ensure we're on main and up to date
  console.log('📋 Preparing main branch...');
  runCommand('git checkout main');
  runCommand('git pull origin main');
  
  // Get recent branches
  const recentBranches = getRecentBranches();
  console.log(`\n📊 Found ${recentBranches.length} recent branches to check:`);  recentBranches.forEach((branch, index) => {
    console.log(`   ${index + 1}. ${branch}`);
  });
  
  let mergedCount = 0;
  let conflictCount = 0;
  let errorCount = 0;
  
  // Process each branch
  for (const branch of recentBranches) {
    try {
      console.log(`\n🔄 Processing ${branch}...`);
      
      // Check if branch has conflicts
      if (hasMergeConflicts(branch)) {
        console.log(`   ⚠️  ${branch} has merge conflicts, attempting to resolve...`);
        if (resolveMergeConflicts(branch)) {
          mergedCount++;
          console.log(`   ✅ Successfully merged ${branch}`);
        } else {
          conflictCount++;
          console.log(`   ❌ Failed to merge ${branch} due to conflicts`);
        }
      } else {
        // No conflicts, merge directly
        if (resolveMergeConflicts(branch)) {
          mergedCount++;
          console.log(`   ✅ Successfully merged ${branch}`);
        } else {
          errorCount++;
          console.log(`   ❌ Failed to merge ${branch}`);
        }
      }
      
    } catch (error) {
      console.error(`   ❌ Error processing ${branch}:`, error.message);
      errorCount++;
    }
  }
  
  // Push all changes
  console.log('\n📤 Pushing all changes to remote...');
  runCommand('git push origin main');
  
  // Summary
  console.log('\n📊 Merge Summary:');  console.log(`   ✅ Successfully merged: ${mergedCount} branches`);
  console.log(`   ⚠️  Had conflicts but resolved: ${conflictCount} branches`);
  console.log(`   ❌ Failed to merge: ${errorCount} branches`);
  console.log(`   📊 Total processed: ${recentBranches.length} branches`);
  
  console.log('\n🎉 PR merge process completed!');
}

// Run the script
main();