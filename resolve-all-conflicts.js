#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the newer version (after =======)
    const lines = content.split('\n');
    const newLines = [];
    let inConflict = false;
    let keepLines = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        keepLines = false;
        continue;
      }
      
      if (line.trim() === '=======') {
        keepLines = true;
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        keepLines = false;
        continue;
      }
      
      if (!inConflict || keepLines) {
        newLines.push(line);
      }
    }
    
    const newContent = newLines.join('\n');
    
    // Only write if content changed
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.json'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
console.log('Scanning for files with merge conflicts...');

const conflictedFiles = findFilesWithConflicts(workspaceDir);
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved merge conflicts in ${resolvedCount} files`);
console.log('Merge conflict resolution complete!');