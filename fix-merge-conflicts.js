#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head' or 'incoming'
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.trim() === '=======') {
        conflictType = 'incoming';
        continue;
      } else if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        // Only keep HEAD version (before =======)
        if (conflictType === 'head') {
          resolvedLines.push(line);
        }
        // Skip incoming version (after =======)
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content back to file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
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
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
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

const srcDir = path.join(process.cwd(), 'src');
const files = findSourceFiles(srcDir);

let resolvedCount = 0;
let totalConflicts = 0;

for (const file of files) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
  
  // Check if file still has conflicts
  const content = fs.readFileSync(file, 'utf8');
  const conflictCount = (content.match(/<<<<<<< HEAD/g) || []).length;
  totalConflicts += conflictCount;
}

console.log(`\nMerge conflict resolution complete!`);
console.log(`Files processed: ${files.length}`);
console.log(`Files with resolved conflicts: ${resolvedCount}`);
console.log(`Remaining conflicts: ${totalConflicts}`);

if (totalConflicts === 0) {
  console.log('✅ All merge conflicts have been resolved!');
} else {
  console.log('⚠️  Some conflicts may still remain. Please review manually.');
}