#!/usr/bin/env node

import { execSync } from 'child_process';

// Get all unmerged files
const unmergedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${unmergedFiles.length} unmerged files`);

// Resolve all conflicts by accepting our version
for (const file of unmergedFiles) {
  try {
    console.log(`Resolving conflict in: ${file}`);
    execSync(`git checkout --ours "${file}"`, { stdio: 'inherit' });
    execSync(`git add "${file}"`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error resolving ${file}:`, error.message);
  }
}

console.log('All conflicts resolved');