#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let conflictType = null;
  let headLines = [];
  let otherLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<< HEAD')) {
      inConflict = true;
      conflictType = 'head';
      headLines = [];
      otherLines = [];
      continue;
    }
    
    if (line.startsWith('=======')) {
      conflictType = 'other';
      continue;
    }
    
    if (line.startsWith('>>>>>>>')) {
      inConflict = false;
      conflictType = null;
      
      // Choose the longer/more complete version, or prefer HEAD if similar length
      if (headLines.length >= otherLines.length) {
        resolvedLines.push(...headLines);
      } else {
        resolvedLines.push(...otherLines);
      }
      
      headLines = [];
      otherLines = [];
      continue;
    }
    
    if (inConflict) {
      if (conflictType === 'head') {
        headLines.push(line);
      } else if (conflictType === 'other') {
        otherLines.push(line);
      }
    } else {
      resolvedLines.push(line);
    }
  }
  
  return resolvedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD')) {
      console.log(`Processing merge conflicts in: ${filePath}`);
      const resolvedContent = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✓ Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all source files
function findSourceFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', 'dist', '.git', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext) && !item.includes('.original')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔧 Starting merge conflict resolution...');

const sourceFiles = findSourceFiles('.');
let processedCount = 0;
let fixedCount = 0;

for (const file of sourceFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
  processedCount++;
}

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${processedCount}`);
console.log(`   Files with conflicts fixed: ${fixedCount}`);
console.log(`\n✅ Merge conflict resolution completed!`);