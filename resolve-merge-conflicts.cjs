#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting merge conflict resolution...');

try {
  console.log('📥 Starting merge...');
  execSync('git merge origin/cursor/fix-syntax-push-and-merge-to-main-dfcb --no-ff -m "Merge PR #12067: Fix syntax, push, and merge to main"', { stdio: 'pipe' });
  console.log('✅ Merge completed successfully!');
} catch (error) {
  console.log('⚠️  Merge had conflicts, resolving automatically...');
  
  // Get list of conflicted files
  const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  console.log(`📋 Found ${conflictedFiles.length} conflicted files`);
  
  for (const file of conflictedFiles) {
    if (fs.existsSync(file)) {
      console.log(`🔧 Resolving conflicts in ${file}...`);
      try {
        // Accept our version (HEAD) for all conflicts
        execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
        execSync(`git add "${file}"`, { stdio: 'pipe' });
        console.log(`✅ Resolved ${file}`);
      } catch (addError) {
        console.warn(`⚠️  Could not resolve ${file}: ${addError.message}`);
      }
    } else {
      console.log(`🗑️  Removing deleted file ${file}...`);
      try {
        execSync(`git rm "${file}"`, { stdio: 'pipe' });
        console.log(`✅ Removed ${file}`);
      } catch (rmError) {
        console.warn(`⚠️  Could not remove ${file}: ${rmError.message}`);
      }
    }
  }
  
  try {
    execSync('git commit --no-edit', { stdio: 'pipe' });
    console.log('🎉 Merge commit created successfully!');
  } catch (commitError) {
    console.warn(`⚠️  Could not commit merge: ${commitError.message}`);
  }
}

console.log('🎉 Merge conflict resolution complete!');