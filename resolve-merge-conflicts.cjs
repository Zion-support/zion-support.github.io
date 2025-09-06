

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const { execSync } = require('child_process');

console.log('Resolving merge conflicts...');

// Get all conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U').toString().trim().split('\n').filter(f => f);

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Categorize conflicts
const modifyDeleteConflicts = [];
const contentConflicts = [];
const addAddConflicts = [];

conflictedFiles.forEach(file => {
  const status = execSync(`git status --porcelain "${file}"`).toString().trim();
  
  if (status.startsWith('UD') || status.startsWith('DU')) {
    modifyDeleteConflicts.push(file);
  } else if (status.startsWith('UU')) {
    contentConflicts.push(file);
  } else if (status.startsWith('AA')) {
    addAddConflicts.push(file);
  }
});

console.log(`Modify/Delete conflicts: ${modifyDeleteConflicts.length}`);
console.log(`Content conflicts: ${contentConflicts.length}`);
console.log(`Add/Add conflicts: ${addAddConflicts.length}`);

// Resolve modify/delete conflicts by accepting remote deletion
console.log('\nResolving modify/delete conflicts...');
modifyDeleteConflicts.forEach(file => {
  try {
    execSync(`git rm "${file}"`);
    console.log(`✓ Deleted: ${file}`);
  } catch (error) {
    console.error(`✗ Failed to delete ${file}: ${error.message}`);
  }

});

// Resolve add/add conflicts by choosing one version
console.log('\nResolving add/add conflicts...');
addAddConflicts.forEach(file => {
  try {
    // For add/add conflicts, prefer the current version (HEAD)
    execSync(`git checkout --ours "${file}"`);
    execSync(`git add "${file}"`);
    console.log(`✓ Resolved add/add conflict: ${file}`);
  } catch (error) {
    console.error(`✗ Failed to resolve add/add conflict in ${file}: ${error.message}`);
  }
});

// Resolve content conflicts by preferring our version for most files
console.log('\nResolving content conflicts...');
contentConflicts.forEach(file => {
  try {
    // For content conflicts, prefer our version (HEAD) for most files
    // But for specific files, we might want to prefer remote
    if (file.includes('yarn.lock') || file.includes('package-lock.json')) {
      execSync(`git checkout --theirs "${file}"`);
    } else {
      execSync(`git checkout --ours "${file}"`);
    }
    execSync(`git add "${file}"`);
    console.log(`✓ Resolved content conflict: ${file}`);
  } catch (error) {
    console.error(`✗ Failed to resolve content conflict in ${file}: ${error.message}`);
  }
});






console.log('\n🎉 Merge conflict resolution completed!');


console.log('\nMerge conflict resolution completed!');
console.log('Run "git status" to check remaining conflicts.');

