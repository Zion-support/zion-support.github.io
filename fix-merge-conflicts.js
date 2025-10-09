#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
<<<<<<< HEAD

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head' or 'incoming'
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
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
        continue;
      }
      
      if (inConflict) {
        // Only keep HEAD version (before =======)
        if (conflictType === 'head') {
          resolvedLines.push(line);
        }
        // Skip incoming version (after =======)
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content back to file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
=======
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the HEAD version (first part)
    const conflictRegex = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
    const originalContent = content;
    content = content.replace(conflictRegex, (match, headContent, otherContent) => {
      modified = true;
      // Clean up the head content
      return headContent.trim();
    });

    // Fix common syntax issues
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      // If there are still conflict markers, remove everything between them
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    }

    // Fix duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = [];
    
    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        if (!seenImports.has(line.trim())) {
          seenImports.add(line.trim());
          cleanedLines.push(line);
        }
      } else {
        cleanedLines.push(line);
      }
    }
    
    content = cleanedLines.join('\n');

    // Fix common syntax errors
    content = content
      // Fix missing commas in object literals
      .replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n  $2:')
      // Fix missing semicolons
      .replace(/(\w+)\s*\n\s*(import|export|const|let|var|function|class)/g, '$1;\n$2')
      // Fix invalid characters
      .replace(/[^\x00-\x7F]/g, '')
      // Fix duplicate 'use client' directives
      .replace(/'use client';\s*'use client';/g, "'use client';")
      // Fix duplicate React imports
      .replace(/import React[^;]+;\s*import React[^;]+;/g, (match) => {
        const lines = match.split('\n');
        return lines[0] + ';';
      })
      // Remove empty lines with just spaces
      .replace(/^\s*\n/gm, '\n')
      // Fix missing closing braces
      .replace(/\{\s*$/, '{\n  // TODO: Add content\n}');

    if (modified || content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
    return false;
  }
}

<<<<<<< HEAD
// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
=======
// Function to find all TypeScript/React files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
<<<<<<< HEAD
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
        }
=======
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

<<<<<<< HEAD
const srcDir = path.join(process.cwd(), 'src');
const files = findSourceFiles(srcDir);

let resolvedCount = 0;
let totalConflicts = 0;

for (const file of files) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
  
  // Check if file still has conflicts
  const content = fs.readFileSync(file, 'utf8');
  const conflictCount = (content.match(/<<<<<<< HEAD/g) || []).length;
  totalConflicts += conflictCount;
}

console.log(`\nMerge conflict resolution complete!`);
console.log(`Files processed: ${files.length}`);
console.log(`Files with resolved conflicts: ${resolvedCount}`);
console.log(`Remaining conflicts: ${totalConflicts}`);

if (totalConflicts === 0) {
  console.log('✅ All merge conflicts have been resolved!');
} else {
  console.log('⚠️  Some conflicts may still remain. Please review manually.');
=======
const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nMerge conflict resolution complete:`);
console.log(`- Files processed: ${files.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);

// Run linting to check for remaining issues
console.log('\nRunning linting to check for remaining issues...');
try {
  execSync('pnpm run lint', { stdio: 'inherit' });
  console.log('Linting passed!');
} catch (error) {
  console.log('Linting found remaining issues. Please review manually.');
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
}