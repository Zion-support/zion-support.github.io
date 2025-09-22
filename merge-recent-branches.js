#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Merging Recent Branches');

// Function to safely execute git commands
function safeGitCommand(command, description) {
  try {
    console.log(`📝 ${description}...`);
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    return { success: true, output: result };
  } catch (error) {
    console.log(`⚠️  ${description} failed: ${error.message}`);
    return { success: false, error: error.message };
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

// Function to resolve conflicts by accepting current branch
function resolveConflicts() {
  try {
    const conflictedFiles = execSync('git status --porcelain', { encoding: 'utf8' })
      .split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.split(' ').pop())
      .filter(file => file && file !== '');
    
    console.log(`🔧 Resolving ${conflictedFiles.length} conflicted files...`);
    
    for (const file of conflictedFiles) {
      try {
        execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
        execSync(`git add "${file}"`, { stdio: 'pipe' });
        console.log(`✅ Resolved: ${file}`);
      } catch (error) {
        console.log(`❌ Failed to resolve ${file}: ${error.message}`);
      }
    }
    
    return conflictedFiles.length;
  } catch (error) {
    console.log(`❌ Error resolving conflicts: ${error.message}`);
    return 0;
  }
}

// Function to merge a specific branch
function mergeBranch(branchName) {
  console.log(`\n🔄 Merging branch: ${branchName}`);
  
  // First, try a regular merge
  const mergeResult = safeGitCommand(`git merge origin/${branchName}`, `Merging ${branchName}`);
  
  if (mergeResult.success) {
    console.log(`✅ Successfully merged ${branchName}`);
    return true;
  }
  
  // If merge failed, check for conflicts
  if (hasMergeConflicts()) {
    console.log(`⚠️  Merge conflicts detected in ${branchName}`);
    const resolvedCount = resolveConflicts();
    
    if (resolvedCount > 0) {
      // Try to commit the merge
      const commitResult = safeGitCommand('git commit --no-edit', `Committing merge resolution for ${branchName}`);
      if (commitResult.success) {
        console.log(`✅ Resolved conflicts and merged ${branchName}`);
        return true;
      } else {
        console.log(`❌ Failed to commit merge resolution for ${branchName}`);
        // Try to abort the merge
        safeGitCommand('git merge --abort', `Aborting merge of ${branchName}`);
        return false;
      }
    } else {
      console.log(`❌ Could not resolve conflicts for ${branchName}`);
      safeGitCommand('git merge --abort', `Aborting merge of ${branchName}`);
      return false;
    }
  } else {
    console.log(`❌ Merge failed for ${branchName} (no conflicts detected)`);
    return false;
  }
}

// Main function
async function main() {
  console.log('🎯 Starting targeted branch merging...');
  
  // List of recent branches to merge (most recent first)
  const branchesToMerge = [
    'cursor/fix-netlify-build-and-merge-to-main-bf58',
    'chore/ci-and-pr-tools',
    'cursor/fix-netlify-build-and-merge-to-main-6e07',
    'fix/netlify-build',
    'integration/merge-all-prs-20250922'
  ];
  
  console.log(`📋 Planning to merge ${branchesToMerge.length} branches`);
  
  let mergedCount = 0;
  let failedCount = 0;
  
  for (const branch of branchesToMerge) {
    if (mergeBranch(branch)) {
      mergedCount++;
    } else {
      failedCount++;
    }
  }
  
  console.log('\n🎉 Branch merging completed!');
  console.log(`✅ Successfully merged: ${mergedCount} branches`);
  console.log(`❌ Failed to merge: ${failedCount} branches`);
  
  // Show final status
  console.log('\n📊 Final git status:');
  safeGitCommand('git status --short', 'Getting final status');
  
  // Check if there are any remaining conflicts
  if (hasMergeConflicts()) {
    console.log('⚠️  Some conflicts remain, please resolve manually');
  } else {
    console.log('✅ No remaining conflicts');
  }
}

// Run the main function
main().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});