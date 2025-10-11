#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no merge conflicts
    if (!content.includes('') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Strategy: Keep the content after  (usually the newer version)
    // Remove merge conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Clean up any remaining conflict markers
    content = content.replace(/    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Fix common syntax issues that might result from merge resolution
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines
    content = content.replace(/,\s*}/g, '}'); // Remove trailing commas before closing braces
    content = content.replace(/,\s*]/g, ']'); // Remove trailing commas before closing brackets
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const filesWithConflicts = findFilesWithConflicts(process.cwd());
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);

// Run linting to check for remaining issues
console.log('Running linting to check for remaining issues...');
try {
  execSync('npm run lint:fix', { stdio: 'inherit' });
} catch (error) {
  console.log('Linting completed with some issues remaining');
}

console.log('Merge conflict resolution completed!');