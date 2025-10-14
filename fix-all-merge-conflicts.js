#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by conflict markers and take the HEAD version (first part)
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictDepth = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictDepth++;
        continue; // Skip the conflict marker
      } else if (line.trim().startsWith('=======')) {
        continue; // Skip the separator
      } else if (line.trim().startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictDepth--;
        continue; // Skip the end marker
      } else if (inConflict && conflictDepth === 1) {
        // We're in the HEAD section, keep the line
        fixedLines.push(line);
      } else if (!inConflict) {
        // We're not in a conflict, keep the line
        fixedLines.push(line);
      }
      // Skip lines in other conflict sections
    }
    
    // Clean up any trailing empty lines and ensure proper formatting
    let fixedContent = fixedLines.join('\n');
    
    // Remove multiple consecutive empty lines
    fixedContent = fixedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Ensure file ends with single newline
    fixedContent = fixedContent.trim() + '\n';
    
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
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
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('./app');

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

for (const file of conflictedFiles) {
  try {
    if (fixMergeConflicts(file)) {
      fixedCount++;
      console.log(`✅ Fixed: ${file}`);
    }
  } catch (error) {
    errorCount++;
    console.error(`❌ Error fixing ${file}:`, error.message);
  }
}

console.log(`\n📊 Summary:`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

if (fixedCount > 0) {
  console.log('\n🎉 Merge conflicts fixed! You can now run the build.');
} else {
  console.log('\n✨ No merge conflicts found or all conflicts were already resolved.');
}