#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('Resolving merge conflicts by accepting incoming changes...');

try {
  // Get list of conflicted files
  const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  
  console.log(`Found ${conflictedFiles.length} conflicted files:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  // Resolve conflicts by accepting incoming changes (theirs)
  conflictedFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`Resolving conflicts in ${file}...`);
      try {
        execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
        execSync(`git add "${file}"`, { stdio: 'pipe' });
        console.log(`✓ Resolved ${file}`);
      } catch (error) {
        console.error(`✗ Error resolving ${file}:`, error.message);
      }
    }
  });
  
  console.log('\nAll conflicts resolved. Continuing rebase...');
  
  // Continue the rebase
  execSync('git rebase --continue', { stdio: 'inherit' });
  
} catch (error) {
  console.error('Error during conflict resolution:', error.message);
  process.exit(1);
}