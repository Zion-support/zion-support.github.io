#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by keeping the "ours" version (current branch)
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') && !content.includes('') && !content.includes('')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Split content by lines
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let inOurs = false;
    let inTheirs = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        inOurs = true;
        inTheirs = false;
        continue;
      }
      
      if (line.startsWith('')) {
        inOurs = false;
        inTheirs = true;
        continue;
      }
      
      if (line.startsWith('')) {
        inConflict = false;
        inOurs = false;
        inTheirs = false;
        continue;
      }
      
      if (!inConflict) {
        // Outside conflict, keep the line
        resolvedLines.push(line);
      } else if (inOurs) {
        // Inside conflict, keep "ours" version
        resolvedLines.push(line);
      }
      // Skip "theirs" version (inTheirs = true)
    }
    
    // Write the resolved content back
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<<') || content.includes('') || content.includes('')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution (keeping our version)...');

const appDir = path.join(__dirname, 'app');
const filesWithConflicts = findFilesWithConflicts(appDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

for (const filePath of filesWithConflicts) {
  if (resolveMergeConflicts(filePath)) {
    resolvedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nResolution complete:`);
console.log(`- Files resolved: ${resolvedCount}`);
console.log(`- Files with errors: ${errorCount}`);

if (resolvedCount > 0) {
  console.log('\nRunning TypeScript check...');
  try {
    execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
    console.log('TypeScript check passed!');
  } catch (error) {
    console.log('TypeScript check failed, but conflicts were resolved.');
  }
}

console.log('Merge conflict resolution complete!');