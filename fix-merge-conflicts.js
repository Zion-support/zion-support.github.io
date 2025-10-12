#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Find all files with merge conflicts
function findConflictedFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(findConflictedFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
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
  
  return files;
}

// Fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the content between them
    // This is a simple approach - keep everything that's not conflict markers
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictContent = [];
    
    for (const line of lines) {
      if (line.startsWith('<<<<<<< HEAD') || line.startsWith('=======') || line.startsWith('>>>>>>>')) {
        if (line.startsWith('=======')) {
          // Start collecting conflict content
          inConflict = true;
          conflictContent = [];
        } else if (line.startsWith('>>>>>>>')) {
          // End of conflict, add the collected content
          cleanedLines.push(...conflictContent);
          inConflict = false;
          conflictContent = [];
        }
        // Skip the conflict marker lines
        continue;
      }
      
      if (inConflict) {
        conflictContent.push(line);
      } else {
        cleanedLines.push(line);
      }
    }
    
    // Write the cleaned content back
    const cleanedContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    
    console.log(`✓ Fixed: ${filePath}`);
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('🔧 Fixing merge conflicts across all files...\n');

const conflictedFiles = findConflictedFiles('./app');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

for (const file of conflictedFiles) {
  fixMergeConflicts(file);
}

console.log(`\n✅ Processed ${conflictedFiles.length} files`);
console.log('🎉 Merge conflicts fix completed!');