#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to recursively find all files with merge conflict markers
function findFilesWithConflicts(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, dist, etc.
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (err) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Function to resolve merge conflicts by choosing the HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/    
    // Remove any remaining conflict markers
    content = content.replace(/    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
    return false;
  }
}

// Main execution
console.log('Searching for files with merge conflict markers...');
const conflictedFiles = findFilesWithConflicts('/workspace');

console.log(`Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed merge conflicts in ${fixedCount} files.`);

// Verify no more conflicts exist
console.log('\nVerifying no more conflicts exist...');
const remainingConflicts = findFilesWithConflicts('/workspace');
if (remainingConflicts.length === 0) {
  console.log('✅ All merge conflicts have been resolved!');
} else {
  console.log(`❌ ${remainingConflicts.length} files still have conflicts:`);
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}