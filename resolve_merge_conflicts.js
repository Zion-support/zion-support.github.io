#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get the list of conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${conflictedFiles.length} conflicted files`);

// For each conflicted file, resolve by keeping our version (HEAD)
for (const file of conflictedFiles) {
  try {
    console.log(`Resolving conflicts in: ${file}`);
    
    // Use git checkout to keep our version (HEAD)
    execSync(`git checkout --ours "${file}"`, { stdio: 'inherit' });
    
    // Add the resolved file
    execSync(`git add "${file}"`, { stdio: 'inherit' });
    
    console.log(`✅ Resolved: ${file}`);
  } catch (error) {
    console.error(`❌ Error resolving ${file}:`, error.message);
  }
}

console.log('\nAll conflicts resolved. Ready to commit the merge.');