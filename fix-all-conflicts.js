#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the content after =======
    content = content.replace(/\s*([\s\S]*?)
    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?
    
    // Fix common syntax errors
    content = content.replace(/;\s*\)\s*;/g, ';');
    content = content.replace(/<string><\/string>/g, '<string>');
    content = content.replace(/boolean\}\s*;\s*\)\s*;/g, 'boolean;');
    content = content.replace(/boolean\}\s*;\s*\)\s*\)/g, 'boolean;');
    
    // Clean up extra semicolons and brackets
    content = content.replace(/;\s*;\s*/g, ';');
    content = content.replace(/\}\s*;\s*\)\s*;/g, '};');
    content = content.replace(/\}\s*;\s*\)\s*\)/g, '};');
    
    // Fix JSX syntax errors
    content = content.replace(/<title><\/titl>/g, '<title>');
    content = content.replace(/<Helmet><\/Helmet>/g, '<Helmet>');
    
    // Clean up multiple newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all modified files
function getModifiedFiles() {
  try {
    const output = execSync('git status --porcelain', { encoding: 'utf8' });
    return output
      .split('\n')
      .filter(line => line.startsWith(' M'))
      .map(line => line.substring(3))
      .filter(file => file.match(/\.(tsx|ts|js|jsx)$/));
  } catch (error) {
    console.error('Error getting modified files:', error.message);
    return [];
  }
}

console.log('Starting comprehensive conflict resolution...');

const modifiedFiles = getModifiedFiles();
console.log(`Found ${modifiedFiles.length} modified files`);

let fixedCount = 0;
modifiedFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed conflicts in ${fixedCount} files`);

// Check for remaining conflicts
try {
  const conflictCheck = execSync('grep -r "^<<<<<<<\\|^=======\\|^>>>>>>>" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | wc -l', { encoding: 'utf8' });
  const remainingConflicts = parseInt(conflictCheck.trim());
  console.log(`Remaining conflicts: ${remainingConflicts}`);
} catch (error) {
  console.log('No remaining conflicts found');
}