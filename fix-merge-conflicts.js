#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts by choosing the appropriate version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by conflict markers and process
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'origin';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (inConflict) {
        // Choose the version based on context
        if (conflictType === 'head') {
          // For most cases, prefer the HEAD version (current branch)
          resolvedLines.push(line);
        }
        // Skip origin version lines when in conflict
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write the resolved content back
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
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
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const filesWithConflicts = findFilesWithConflicts('./app');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);

// Also check root level files
const rootFiles = ['app/layout.tsx', 'app/not-found.tsx', 'app/offline/page.tsx', 'app/sitemap-page.tsx'];
for (const file of rootFiles) {
  if (fs.existsSync(file)) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
}

console.log(`Total files resolved: ${resolvedCount}`);