#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve conflicts by accepting "ours" (current branch) changes
function resolveConflicts() {
  try {
    console.log('📋 Getting list of conflicted files...');
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(Boolean);
    
    console.log(`📊 Found ${conflictedFiles.length} conflicted files`);
    
    let resolvedCount = 0;
    let removedCount = 0;
    
    for (const file of conflictedFiles) {
      const filePath = path.join(process.cwd(), file);
      
      if (fs.existsSync(filePath)) {
        console.log(`🔧 Resolving conflicts in ${file}...`);
        try {
          // Accept our version (current branch)
          execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
          execSync(`git add "${file}"`, { stdio: 'pipe' });
          console.log(`✅ Resolved ${file}`);
          resolvedCount++;
        } catch (error) {
          console.warn(`⚠️  Could not resolve ${file}: ${error.message}`);
        }
      } else {
        console.log(`🗑️  Removing deleted file ${file}...`);
        try {
          execSync(`git rm "${file}"`, { stdio: 'pipe' });
          console.log(`✅ Removed ${file}`);
          removedCount++;
        } catch (error) {
          console.warn(`⚠️  Could not remove ${file}: ${error.message}`);
        }
      }
    }
    
    console.log(`📊 Resolution summary: ${resolvedCount} files resolved, ${removedCount} files removed`);
    
    // Check if there are still unmerged files
    const remainingConflicts = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(Boolean);
    
    if (remainingConflicts.length > 0) {
      console.log(`⚠️  Still have ${remainingConflicts.length} unmerged files:`, remainingConflicts);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts: ${error.message}`);
    return false;
  }
}

// Function to commit the merge
function commitMerge() {
  try {
    console.log('💾 Committing merge...');
    execSync('git commit -m "Merge automation improvements and fixes - resolved all conflicts"', { stdio: 'pipe' });
    console.log('✅ Merge committed successfully!');
    return true;
  } catch (error) {
    console.error(`❌ Error committing merge: ${error.message}`);
    return false;
  }
}

// Function to push changes
function pushChanges() {
  try {
    console.log('🚀 Pushing changes to remote...');
    execSync('git push origin main', { stdio: 'pipe' });
    console.log('✅ Changes pushed successfully!');
    return true;
  } catch (error) {
    console.error(`❌ Error pushing changes: ${error.message}`);
    return false;
  }
}

// Main execution
async function main() {
  try {
    console.log('🔄 Starting merge conflict resolution process...');
    
    // Step 1: Resolve conflicts
    const conflictsResolved = resolveConflicts();
    if (!conflictsResolved) {
      console.log('❌ Failed to resolve all conflicts');
      return;
    }
    
    // Step 2: Commit merge
    const mergeCommitted = commitMerge();
    if (!mergeCommitted) {
      console.log('❌ Failed to commit merge');
      return;
    }
    
    // Step 3: Push changes
    const changesPushed = pushChanges();
    if (!changesPushed) {
      console.log('❌ Failed to push changes');
      return;
    }
    
    console.log('🎉 All merge conflicts resolved and changes pushed successfully!');
    
  } catch (error) {
    console.error(`❌ Unexpected error: ${error.message}`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { resolveConflicts, commitMerge, pushChanges };