#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove merge conflict markers and keep the content after     const mergeConflictRegex = /\n(.*?)\n\n(.*?)\n    const matches = content.match(mergeConflictRegex);
    
    if (matches) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      modified = true;
      
      // Replace merge conflicts with the content after       content = content.replace(mergeConflictRegex, (match, headContent, mainContent) => {
        // Clean up the main content (remove extra whitespace)
        return mainContent.trim() + '\n';
      });
    }
    
    // Fix any remaining syntax issues
    // Remove any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Fix common syntax issues
    content = content.replace(/\s+\)\s*;\s*$/gm, ');');
    content = content.replace(/\s+}\s*;\s*$/gm, '};');
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting merge conflict fix...');

const files = findFiles(process.cwd());
let fixedCount = 0;

for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed merge conflicts in ${fixedCount} files.`);

// Run linting to check for remaining issues
console.log('\nRunning linting check...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('Linting passed!');
} catch (error) {
  console.log('Linting found issues, but merge conflicts should be fixed.');
}

console.log('Merge conflict fix completed!');