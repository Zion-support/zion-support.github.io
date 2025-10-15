#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Find all files with merge conflict markers
function findMergeConflictFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('/g, ');
    content = content.replace(/ursor\/[^\n]+/g, ');
    content = content.replace(//g, ');
    content = content.replace(/
    content = content.replace(//g, ');
    content = content.replace(/
    
    // Clean up extra semicolons and quotes that might be left over
    content = content.replace(/;+;+/g, ';');
    content = content.replace(/"+/g, '"');
    content = content.replace(/'+/g, "'");
    
    // Remove empty lines that might have been created
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
const workspaceDir = process.cwd();
console.log('Searching for files with merge conflicts...');

const conflictFiles = findMergeConflictFiles(workspaceDir);
console.log(`Found ${conflictFiles.length} files with merge conflicts:`);

conflictFiles.forEach(file => {
  console.log(`- ${file}`);
});

console.log('\nCleaning merge conflicts...');
let cleanedCount = 0;

conflictFiles.forEach(file => {
  if (cleanMergeConflicts(file)) {
    cleanedCount++;
  }
});

console.log(`\nCleaned ${cleanedCount} out of ${conflictFiles.length} files.`);

// Run type check to see remaining errors
console.log('\nRunning type check...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
} catch (error) {
  console.log('Type check completed with errors (expected).');
}