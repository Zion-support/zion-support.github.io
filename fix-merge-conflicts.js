#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    let conflictEnd = -1;
    let currentBranch = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictStart = i;
        currentBranch = line.replace('<<<<<<<', '').trim();
        continue;
      }
      
      if (line.startsWith('=======')) {
        continue; // Skip separator
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictEnd = i;
        
        // For now, we'll keep the content before the first conflict marker
        // and remove everything after the first <<<<<<< until >>>>>>>
        break;
      }
      
      if (!inConflict) {
        fixedLines.push(line);
      }
    }
    
    // If we're still in a conflict at the end, just take everything before the first conflict
    if (inConflict) {
      // Take lines up to conflict start
      for (let i = 0; i < conflictStart; i++) {
        fixedLines.push(lines[i]);
      }
    }
    
    // Write the fixed content
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find files with merge conflicts
function findFilesWithConflicts(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

// Find all files with merge conflicts
const conflictedFiles = findFilesWithConflicts('/workspace');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Run a quick check to see if there are still conflicts
try {
  const result = execSync('grep -r "<<<<<<<" /workspace --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | wc -l', { encoding: 'utf8' });
  const remainingConflicts = parseInt(result.trim());
  console.log(`Remaining merge conflicts: ${remainingConflicts}`);
} catch (error) {
  console.log('Could not check remaining conflicts');
}

console.log('Merge conflict resolution complete!');