#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to clean merge conflict markers from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove merge conflict markers
    const conflictRegex = /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g;
    if (conflictRegex.test(content)) {
      content = content.replace(conflictRegex, '');
      modified = true;
    }
    
    // Remove any remaining conflict markers
    const remainingMarkers = /(<<<<<<< HEAD|=======|>>>>>>> [^\n]*)/g;
    if (remainingMarkers.test(content)) {
      content = content.replace(remainingMarkers, '');
      modified = true;
    }
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Cleaned: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔍 Finding all .tsx files with merge conflicts...');
const tsxFiles = findTsxFiles('./app');
console.log(`Found ${tsxFiles.length} .tsx files`);

let cleanedCount = 0;
for (const file of tsxFiles) {
  if (cleanMergeConflicts(file)) {
    cleanedCount++;
  }
}

console.log(`\n🎉 Cleaned ${cleanedCount} files`);
console.log('✨ Merge conflict cleanup complete!');