#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Resolving merge conflicts...');

// Get list of conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Strategy: For modify/delete conflicts, accept the deletion (main branch)
// For content conflicts, we'll need to resolve manually

let resolvedCount = 0;
let manualCount = 0;

for (const file of conflictedFiles) {
  try {
    // Check if it's a modify/delete conflict (backup files)
    if (file.includes('.backup') || file.includes('backup-merge-conflicts/')) {
      console.log(`🗑️  Removing backup file: ${file}`);
      execSync(`git rm "${file}"`);
      resolvedCount++;
    } else {
      // For content conflicts, we'll accept the current branch version (HEAD)
      console.log(`📝 Resolving content conflict: ${file}`);
      
      // Check if file exists and has conflict markers
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('')) {
          // Accept HEAD version (current branch)
          execSync(`git checkout --ours "${file}"`);
          execSync(`git add "${file}"`);
          resolvedCount++;
        } else {
          // No conflict markers, just add the file
          execSync(`git add "${file}"`);
          resolvedCount++;
        }
      } else {
        // File doesn't exist, remove it
        execSync(`git rm "${file}"`);
        resolvedCount++;
      }
    }
  } catch (error) {
    console.log(`⚠️  Manual resolution needed for: ${file}`);
    manualCount++;
  }
}

console.log(`\n✅ Resolved ${resolvedCount} files automatically`);
console.log(`⚠️  ${manualCount} files need manual resolution`);

if (manualCount > 0) {
  console.log('\nFiles needing manual resolution:');
  const remainingConflicts = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);
  
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}

console.log('\n🎯 Merge conflict resolution complete!');