#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by conflict markers and take the second part (after =======)
    const parts = content.split('=======');
    
    if (parts.length >= 2) {
      // Take the second part and remove the >>>>>>> branch-name line
      let fixedContent = parts[1];
      
      // Remove the >>>>>>> branch-name line if it exists
      const lines = fixedContent.split('\n');
      const filteredLines = lines.filter(line => !line.trim().startsWith('>>>>>>>'));
      
      fixedContent = filteredLines.join('\n');
      
      // Write the fixed content back to the file
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const srcDir = path.join(__dirname, 'src');
const files = findSourceFiles(srcDir);

let fixedCount = 0;
let totalConflicts = 0;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('<<<<<<< HEAD')) {
    totalConflicts++;
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
}

console.log(`\nMerge conflict resolution complete!`);
console.log(`Files with conflicts: ${totalConflicts}`);
console.log(`Files fixed: ${fixedCount}`);

// Also check for any remaining conflicts
console.log('\nChecking for remaining conflicts...');
const remainingConflicts = execSync('grep -r "<<<<<<< HEAD" src/ || true', { encoding: 'utf8' });
if (remainingConflicts.trim()) {
  console.log('Warning: Some conflicts may still exist:');
  console.log(remainingConflicts);
} else {
  console.log('No remaining conflicts found!');
}