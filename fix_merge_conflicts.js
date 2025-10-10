#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no merge conflicts
    if (!content.includes(')
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)
    
    // Clean up any remaining conflict markers
    content = content.replace(/[\s\S]*?
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllMergeConflicts(filePath);
    } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(file)) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');
const fixedCount = fixAllMergeConflicts('.');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);

// Also fix any remaining conflicts in other file types
const otherFiles = [
  'jest.config.js',
  'next.config.js',
  'tailwind.config.js',
  'tsconfig.json'
];

for (const file of otherFiles) {
  if (fs.existsSync(file)) {
    if (fixMergeConflicts(file)) {
      console.log(`Fixed merge conflicts in ${file}`);
    }
  }
}

console.log('Merge conflict resolution complete!');