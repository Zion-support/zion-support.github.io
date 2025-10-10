#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to clean merge conflict markers from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let cleaned = false;
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        cleaned = true;
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'separator';
        continue;
      } else if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict || conflictType === 'head') {
        cleanedLines.push(line);
      }
    }
    
    if (cleaned) {
      fs.writeFileSync(filePath, cleanedLines.join('\n'));
      console.log(`Cleaned merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let cleanedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        continue;
      }
      cleanedCount += processDirectory(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
      if (cleanMergeConflicts(fullPath)) {
        cleanedCount++;
      }
    }
  }
  
  return cleanedCount;
}

// Main execution
console.log('Starting merge conflict cleanup...');
const cleanedCount = processDirectory('./app');
console.log(`Cleaned ${cleanedCount} files with merge conflicts.`);

// Also clean test files
const testCleanedCount = processDirectory('./__tests__');
console.log(`Cleaned ${testCleanedCount} test files with merge conflicts.`);

console.log('Merge conflict cleanup completed!');