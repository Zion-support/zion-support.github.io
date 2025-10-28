#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        // Found start of conflict, skip to =======
        i++;
        while (i < lines.length && lines[i].trim() !== '=======') {
          resolvedLines.push(lines[i]);
          i++;
        }
        // Skip the ======= line
        i++;
        // Skip the conflicting content until >>>>>>> 
        while (i < lines.length && !lines[i].trim().startsWith('>>>>>>>')) {
          i++;
        }
        // Skip the >>>>>>> line
        i++;
      } else {
        resolvedLines.push(line);
        i++;
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
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
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const sourceFiles = findSourceFiles(process.cwd());
let resolvedCount = 0;
let totalConflicts = 0;

for (const file of sourceFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('<<<<<<< HEAD')) {
      totalConflicts++;
      if (resolveMergeConflicts(file)) {
        resolvedCount++;
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nMerge conflict resolution complete!`);
console.log(`Files with conflicts: ${totalConflicts}`);
console.log(`Files resolved: ${resolvedCount}`);

// Run linting to check for any remaining issues
console.log('\nRunning linting to check for remaining issues...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('Linting passed!');
} catch (error) {
  console.log('Linting found issues, but merge conflicts should be resolved.');
}

// Run type checking
console.log('\nRunning type checking...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
  console.log('Type checking passed!');
} catch (error) {
  console.log('Type checking found issues, but merge conflicts should be resolved.');
}