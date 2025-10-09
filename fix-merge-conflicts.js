#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
<<<<<<< HEAD
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by keeping HEAD version
=======

// Function to resolve merge conflicts in a file
>>>>>>> cursor/fix-errors-and-merge-to-main-3a03
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
<<<<<<< HEAD
    if (!content.includes('      return false; // No conflicts to fix
=======
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
>>>>>>> cursor/fix-errors-and-merge-to-main-3a03
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head' or 'incoming'
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
<<<<<<< HEAD
      if (line.trim() === '        inConflict = true;
        keepHead = true;
        continue;
      }
      
      if (line.trim() === '') {
        keepHead = false;
        continue;
      }
      
      if (line.trim().startsWith('        inConflict = false;
        keepHead = true;
=======
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.trim() === '=======') {
        conflictType = 'incoming';
        continue;
      } else if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
>>>>>>> cursor/fix-errors-and-merge-to-main-3a03
        continue;
      }
      
      if (inConflict) {
        // Only keep HEAD version (before =======)
        if (conflictType === 'head') {
          resolvedLines.push(line);
        }
        // Skip incoming version (after =======)
      } else {
<<<<<<< HEAD
        fixedLines.push(line);
      }
    }
    
    // Write the fixed content back
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
    return true; // Conflicts were fixed
  } catch (error) {
    console.error(`Error fixing conflicts in ${filePath}:`, error.message);
=======
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content back to file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
>>>>>>> cursor/fix-errors-and-merge-to-main-3a03
    return false;
  }
}

<<<<<<< HEAD
// Function to find all TypeScript/JavaScript files with merge conflicts
function findFilesWithConflicts(dir) {
=======
// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
>>>>>>> cursor/fix-errors-and-merge-to-main-3a03
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
<<<<<<< HEAD
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
=======
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
>>>>>>> cursor/fix-errors-and-merge-to-main-3a03
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const srcDir = path.join(process.cwd(), 'src');
const files = findSourceFiles(srcDir);

let resolvedCount = 0;
let totalConflicts = 0;

for (const file of files) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
<<<<<<< HEAD
}

console.log(`Resolved conflicts in ${resolvedCount} files`);

// Verify no more conflicts
try {
  const result = execSync('grep -r "  const remainingConflicts = parseInt(result.trim());
  console.log(`Remaining conflicts: ${remainingConflicts}`);
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3a03
  
  // Check if file still has conflicts
  const content = fs.readFileSync(file, 'utf8');
  const conflictCount = (content.match(/<<<<<<< HEAD/g) || []).length;
  totalConflicts += conflictCount;
}

<<<<<<< HEAD
console.log('Merge conflict resolution complete!');
=======
console.log(`\nMerge conflict resolution complete!`);
console.log(`Files processed: ${files.length}`);
console.log(`Files with resolved conflicts: ${resolvedCount}`);
console.log(`Remaining conflicts: ${totalConflicts}`);

if (totalConflicts === 0) {
  console.log('✅ All merge conflicts have been resolved!');
} else {
  console.log('⚠️  Some conflicts may still remain. Please review manually.');
}
>>>>>>> cursor/fix-errors-and-merge-to-main-3a03
