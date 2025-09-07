#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Resolving merge conflicts by accepting automation branch changes...');

try {
  // Get list of conflicted files
  const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);

  console.log(`Found ${conflictedFiles.length} conflicted files`);

  // Accept the automation branch version (which cleaned up the codebase)
  for (const file of conflictedFiles) {
    try {
      console.log(`Resolving conflict for: ${file}`);
      
      // Use git checkout to accept the automation branch version
      execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
      
      // Add the resolved file
      execSync(`git add "${file}"`, { stdio: 'pipe' });
      
    } catch (error) {
      console.log(`Warning: Could not resolve ${file}: ${error.message}`);
      
      // If file doesn't exist in automation branch, remove it
      try {
        execSync(`git rm "${file}"`, { stdio: 'pipe' });
        console.log(`Removed ${file} (not in automation branch)`);
      } catch (rmError) {
        console.log(`Could not remove ${file}: ${rmError.message}`);
      }
    }
  }

  // Handle the tsconfig.tsbuildinfo conflict
  try {
    execSync('git checkout --theirs tsconfig.tsbuildinfo', { stdio: 'pipe' });
    execSync('git add tsconfig.tsbuildinfo', { stdio: 'pipe' });
    console.log('Resolved tsconfig.tsbuildinfo conflict');
  } catch (error) {
    console.log('Could not resolve tsconfig.tsbuildinfo, will regenerate it');
  }

  // Check if there are any remaining conflicts
  const remainingConflicts = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);

  if (remainingConflicts.length === 0) {
    console.log('✅ All conflicts resolved!');
    
    // Commit the merge
    try {
      execSync('git commit -m "Merge automation branch: resolved conflicts by accepting cleaned codebase"', { stdio: 'inherit' });
      console.log('✅ Merge committed successfully!');
    } catch (commitError) {
      console.log('Error committing merge:', commitError.message);
    }
  } else {
    console.log(`⚠️  ${remainingConflicts.length} conflicts still remain:`, remainingConflicts);
  }

} catch (error) {
  console.error('Error resolving merge conflicts:', error.message);
  process.exit(1);
}