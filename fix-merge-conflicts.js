#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove merge conflict markers and keep the HEAD version
    const lines = content.split('\n');
    const newLines = [];
    let inConflict = false;
    let conflictStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictStart = i;
        continue;
      }
      
      if (line.startsWith('=======')) {
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictStart = -1;
        continue;
      }
      
      if (!inConflict) {
        newLines.push(line);
      } else if (inConflict && conflictStart !== -1) {
        // Keep lines from HEAD (before =======)
        newLines.push(line);
      }
    }
    
    const newContent = newLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir);
  let totalFixed = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules, .git, and other common directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        totalFixed += fixAllMergeConflicts(filePath);
      }
    } else if (stat.isFile()) {
      // Only process TypeScript, JavaScript, and JSX files
      if (/\.(ts|tsx|js|jsx)$/.test(file)) {
        if (fixMergeConflicts(filePath)) {
          totalFixed++;
        }
      }
    }
  }
  
  return totalFixed;
}

// Main execution
console.log('Starting merge conflict resolution...');
const totalFixed = fixAllMergeConflicts(process.cwd());
console.log(`Fixed merge conflicts in ${totalFixed} files.`);