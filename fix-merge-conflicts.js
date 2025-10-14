#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepHead = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        keepHead = true;
        continue;
      }
      
      if (line.trim() === '=======') {
        keepHead = false;
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        keepHead = false;
        continue;
      }
      
      if (inConflict && !keepHead) {
        // Skip lines in the other branch
        continue;
      }
      
      // Keep the line
      fixedLines.push(line);
    }
    
    // Write the fixed content back
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function findAndFixFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let fixedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, dist, and other build directories
        if (['node_modules', 'dist', 'build', '.next', 'out', '.git'].includes(item)) {
          continue;
        }
        walkDir(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          if (fixMergeConflicts(fullPath)) {
            fixedCount++;
          }
        }
      }
    }
  }
  
  walkDir(dir);
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');
const fixedCount = findAndFixFiles('/workspace');
console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also fix specific problematic files in the root
const rootFiles = [
  'App_minimal.tsx',
  'App_test.tsx', 
  'EnhancedFooter.tsx',
  'SidebarNavigation.tsx'
];

for (const file of rootFiles) {
  const filePath = path.join('/workspace', file);
  if (fs.existsSync(filePath)) {
    if (fixMergeConflicts(filePath)) {
      console.log(`Fixed root file: ${file}`);
    }
  }
}

console.log('Merge conflict resolution complete!');