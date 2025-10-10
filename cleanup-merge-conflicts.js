#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to clean merge conflict markers from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let cleaned = false;
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        conflictStart = i;
        continue;
      }
      
      if (line.trim() === '=======') {
        // Skip everything until we find the end marker
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictStart = -1;
        continue;
      }
      
      if (!inConflict) {
        cleanedLines.push(line);
      }
    }
    
    const newContent = cleanedLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Cleaned merge conflicts in: ${filePath}`);
      cleaned = true;
    }
    
    return cleaned;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalCleaned = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        continue;
      }
      totalCleaned += processDirectory(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
      if (cleanMergeConflicts(fullPath)) {
        totalCleaned++;
      }
    }
  }
  
  return totalCleaned;
}

console.log('Starting merge conflict cleanup...');
const totalCleaned = processDirectory('.');
console.log(`Cleaned merge conflicts in ${totalCleaned} files.`);

// Also clean up any remaining merge conflict markers in other file types
const otherFiles = [
  'jest.config.js',
  'package.json',
  'tsconfig.json',
  'vite.config.ts',
  'tailwind.config.js'
];

for (const file of otherFiles) {
  if (fs.existsSync(file)) {
    if (cleanMergeConflicts(file)) {
      console.log(`Cleaned merge conflicts in: ${file}`);
    }
  }
}

console.log('Merge conflict cleanup completed!');