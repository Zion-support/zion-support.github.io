#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false; // No conflicts in this file
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by merge conflict markers and keep HEAD version
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepLines = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        keepLines = true;
        continue;
      } else if (line.trim() === '=======') {
        keepLines = false;
        continue;
      } else if (line.trim() === '>>>>>>>') {
        inConflict = false;
        keepLines = false;
        continue;
      }
      
      if (!inConflict || keepLines) {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const srcDir = path.join(__dirname, 'src');
const conflictedFiles = findFilesWithConflicts(srcDir);

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);

// Verify no more conflicts
try {
  const result = execSync('grep -r "<<<<<<< HEAD" src/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | wc -l', { encoding: 'utf8' });
  const remainingConflicts = parseInt(result.trim());
  console.log(`Remaining conflicts: ${remainingConflicts}`);
  
  if (remainingConflicts === 0) {
    console.log('✅ All merge conflicts resolved successfully!');
  } else {
    console.log('⚠️  Some conflicts may still remain');
  }
} catch (error) {
  console.log('Could not verify remaining conflicts');
}

console.log('Merge conflict resolution complete!');