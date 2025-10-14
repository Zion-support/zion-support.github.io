#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

// Function to resolve merge conflicts by choosing incoming changes
function resolveConflicts() {
  try {
    // Get list of conflicted files
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);

    console.log(`Found ${conflictedFiles.length} conflicted files`);

    for (const file of conflictedFiles) {
      try {
        // Use git checkout to choose incoming changes (theirs)
        execSync(`git checkout --theirs "${file}"`, { stdio: 'inherit' });
        execSync(`git add "${file}"`, { stdio: 'inherit' });
        console.log(`Resolved conflicts in: ${file}`);
      } catch (error) {
        console.error(`Error resolving ${file}:`, error.message);
      }
    }

    console.log('All conflicts resolved');
  } catch (error) {
    console.error('Error resolving conflicts:', error.message);
  }
}

resolveConflicts();