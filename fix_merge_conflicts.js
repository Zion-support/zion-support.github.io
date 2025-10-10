#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the HEAD version
      content = content.replace(/\n?/g, '');
      content = content.replace(/\n?/g, '');
      content = content.replace(/      
      // Clean up any remaining artifacts
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
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

const files = findFiles('.');
let fixedCount = 0;

for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed merge conflicts in ${fixedCount} files.`);

// Run TypeScript check to see remaining errors
console.log('\nRunning TypeScript check...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
} catch (error) {
  console.log('TypeScript check completed with errors (expected).');
}