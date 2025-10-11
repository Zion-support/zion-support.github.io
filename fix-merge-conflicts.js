#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictBuffer = [];
    let hasValidContent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictBuffer = [];
        hasValidContent = false;
        continue;
      }
      
      if (line.startsWith('=======')) {
        // Check if we have valid content in the first part
        if (conflictBuffer.some(l => l.trim() && !l.startsWith('//') && !l.startsWith('/*'))) {
          hasValidContent = true;
        }
        conflictBuffer = [];
        continue;
      }
      
      if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        // If we had valid content, keep it, otherwise keep the second part
        if (!hasValidContent && conflictBuffer.length > 0) {
          resolvedLines.push(...conflictBuffer);
        }
        conflictBuffer = [];
        hasValidContent = false;
        continue;
      }
      
      if (inConflict) {
        conflictBuffer.push(line);
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent);
    return true;
    
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for merge conflicts
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
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
console.log('🔍 Scanning for merge conflicts...');
const conflictedFiles = findFilesWithConflicts(process.cwd());
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`✅ Resolved conflicts in ${resolvedCount} files`);

// Run git add to stage the resolved files
if (resolvedCount > 0) {
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('📝 Staged resolved files');
  } catch (error) {
    console.error('Error staging files:', error.message);
  }
}

console.log('🎉 Merge conflict resolution complete!');