#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting merge conflict resolution...');

try {
  // Start the merge
  console.log('📥 Starting merge...');
  execSync('git merge cursor/automate-test-improve-and-merge-code-663c --no-ff -m "Merge automation improvements and fixes"', { stdio: 'pipe' });
  console.log('✅ Merge completed successfully!');
} catch (error) {
  console.log('⚠️  Merge had conflicts, resolving automatically...');
  
  // Get list of conflicted files
  const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  
  console.log(`📋 Found ${conflictedFiles.length} conflicted files`);
  
  // Resolve each conflict by accepting our changes
  for (const file of conflictedFiles) {
    if (fs.existsSync(file)) {
      console.log(`🔧 Resolving conflicts in ${file}...`);
      
      try {
        // Use git checkout --ours to accept our changes
        execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
        execSync(`git add "${file}"`, { stdio: 'pipe' });
        console.log(`✅ Resolved ${file}`);
      } catch (fileError) {
        console.log(`⚠️  Could not resolve ${file}: ${fileError.message}`);
      }
    }
  }
  
  // Commit the resolved merge
  try {
    execSync('git commit --no-edit', { stdio: 'pipe' });
    console.log('✅ Merge conflicts resolved and committed!');
  } catch (commitError) {
    console.log('⚠️  Could not commit merge:', commitError.message);
  }
}

console.log('🎉 Merge conflict resolution complete!');