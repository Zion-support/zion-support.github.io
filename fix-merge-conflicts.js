#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        // Skip the HEAD marker
        i++;
        
        // Collect HEAD content until we hit =======
        const headContent = [];
        while (i < lines.length && !lines[i].startsWith('=======')) {
          headContent.push(lines[i]);
          i++;
        }
        
        // Skip the ======= marker
        if (i < lines.length && lines[i].startsWith('=======')) {
          i++;
        }
        
        // Skip the other branch content until we hit >>>>>>>
        while (i < lines.length && !lines[i].startsWith('>>>>>>>')) {
          i++;
        }
        
        // Skip the >>>>>> marker
        if (i < lines.length && lines[i].startsWith('>>>>>>>')) {
          i++;
        }
        
        // Use HEAD content (usually the more recent/complete version)
        resolvedLines.push(...headContent);
      } else {
        resolvedLines.push(line);
        i++;
      }
    }
    
    // Write the resolved content back
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.argv[2] || '/workspace';
console.log(`Scanning for merge conflicts in: ${workspaceDir}`);

const files = findFilesWithConflicts(workspaceDir);
let fixedCount = 0;
let totalConflicts = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('<<<<<<< HEAD')) {
      totalConflicts++;
      if (resolveMergeConflicts(file)) {
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`Error checking ${file}:`, error.message);
  }
}

console.log(`\nSummary:`);
console.log(`Files with conflicts: ${totalConflicts}`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Files failed: ${totalConflicts - fixedCount}`);