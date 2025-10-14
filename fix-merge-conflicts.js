#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by conflict markers and process
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    let headLines = [];
    let separatorFound = false;
    let originLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictStart = i;
        headLines = [];
        separatorFound = false;
        originLines = [];
        continue;
      }
      
      if (line.startsWith('=======')) {
        separatorFound = true;
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        
        // Choose the version after ======= (usually the newer one)
        if (separatorFound && originLines.length > 0) {
          resolvedLines.push(...originLines);
        } else if (headLines.length > 0) {
          resolvedLines.push(...headLines);
        }
        
        conflictStart = -1;
        headLines = [];
        separatorFound = false;
        originLines = [];
        continue;
      }
      
      if (inConflict) {
        if (!separatorFound) {
          headLines.push(line);
        } else {
          originLines.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write the resolved content
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
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
function main() {
  console.log('Starting merge conflict resolution...');
  
  const sourceFiles = findSourceFiles(process.cwd());
  let resolvedCount = 0;
  
  for (const file of sourceFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`Resolved conflicts in ${resolvedCount} files`);
  
  // Run lint fix to clean up any remaining issues
  try {
    console.log('Running ESLint fix...');
    execSync('npm run lint:fix', { stdio: 'inherit' });
  } catch (error) {
    console.log('ESLint fix completed with some warnings/errors');
  }
  
  console.log('Merge conflict resolution completed!');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { resolveMergeConflicts, findSourceFiles };