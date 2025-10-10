#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the HEAD version (first option)
    const conflictRegex = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
    
    content = content.replace(conflictRegex, (match, headContent, otherContent) => {
      modified = true;
      // Clean up the head content
      return headContent.trim();
    });

    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');

    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('grep -r "^<<<<<<< HEAD\\|^=======\\|^>>>>>>> " . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    return [];
  }
}

// Main execution
console.log('Starting merge conflict resolution...');

const filesWithConflicts = findFilesWithConflicts();
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
filesWithConflicts.forEach(file => {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`Fixed merge conflicts in ${fixedCount} files`);
console.log('Merge conflict resolution completed!');