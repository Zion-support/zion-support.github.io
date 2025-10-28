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
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let headContent = [];
    let separatorFound = false;
    let endMarkerFound = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        headContent = [];
        separatorFound = false;
        endMarkerFound = false;
        continue;
      }
      
      if (line.trim() === '=======') {
        separatorFound = true;
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>> ')) {
        endMarkerFound = true;
        inConflict = false;
        
        // Use the content after ======= (usually the newer version)
        // If no separator found, use HEAD content
        if (separatorFound && headContent.length > 0) {
          resolvedLines.push(...headContent);
        }
        continue;
      }
      
      if (inConflict) {
        if (!separatorFound) {
          headContent.push(line);
        }
        // Skip lines between ======= and >>>>>>> 
        continue;
      }
      
      resolvedLines.push(line);
    }
    
    // Write resolved content back to file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const filesWithConflicts = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git directories
        if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
            filesWithConflicts.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return filesWithConflicts;
}

// Main execution
console.log('Starting merge conflict resolution...');

const workspaceDir = process.cwd();
const filesWithConflicts = findFilesWithConflicts(workspaceDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
for (const filePath of filesWithConflicts) {
  if (resolveMergeConflicts(filePath)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);

// Verify no more conflicts exist
const remainingConflicts = findFilesWithConflicts(workspaceDir);
if (remainingConflicts.length === 0) {
  console.log('✅ All merge conflicts have been resolved!');
} else {
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}