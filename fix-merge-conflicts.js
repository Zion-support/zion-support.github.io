#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
=======
import { execSync } from 'child_process';

// Function to resolve merge conflicts by choosing the HEAD version
function resolveMergeConflicts(filePath) {
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
<<<<<<< HEAD
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
=======
    if (!content.includes('<<<<<<< HEAD')) {
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
<<<<<<< HEAD
    // Split by merge conflict markers
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let headContent = [];
    let separatorFound = false;
=======
    // Split by merge conflict markers and take the HEAD version
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
<<<<<<< HEAD
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        headContent = [];
        separatorFound = false;
        continue;
      }
      
      if (line.startsWith('=======')) {
        separatorFound = true;
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        // Use HEAD content (before =======)
        result.push(...headContent);
        continue;
      }
      
      if (inConflict) {
        if (!separatorFound) {
          headContent.push(line);
        }
        // Skip lines after ======= until >>>>>>>
      } else {
        result.push(line);
      }
    }
    
    // Write the fixed content
    fs.writeFileSync(filePath, result.join('\n'), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
=======
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'HEAD';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'OTHER';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict || conflictType === 'HEAD') {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
<<<<<<< HEAD
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
=======
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
<<<<<<< HEAD
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
=======
        if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
        }
      }
    }
  }
  
<<<<<<< HEAD
  scanDirectory(dir);
=======
  walkDir(dir);
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
  return files;
}

// Main execution
<<<<<<< HEAD
const workspaceDir = process.cwd();
const files = findFilesWithConflicts(workspaceDir);

console.log(`Found ${files.length} files to check for merge conflicts...`);

let fixedCount = 0;
for (const file of files) {
  if (fixMergeConflicts(file)) {
=======
console.log('Starting merge conflict resolution...');

const filesWithConflicts = findFilesWithConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveMergeConflicts(file)) {
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
    fixedCount++;
  }
}

<<<<<<< HEAD
console.log(`Fixed merge conflicts in ${fixedCount} files.`);
=======
console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Run git add to stage the resolved files
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('Staged resolved files');
} catch (error) {
  console.error('Error staging files:', error.message);
}

console.log('Merge conflict resolution completed!');
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
