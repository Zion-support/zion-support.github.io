#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by choosing the appropriate content
function resolveMergeConflict(content) {
  // Split by merge conflict markers
  const lines = content.split('\n');
  const result = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<<')) {
      // Skip the HEAD marker line
      i++;
      const headContent = [];
      
      // Collect HEAD content until we hit =======
      while (i < lines.length && !lines[i].startsWith('=======')) {
        headContent.push(lines[i]);
        i++;
      }
      
      // Skip the ======= line
      if (i < lines.length && lines[i].startsWith('=======')) {
        i++;
      }
      
      const branchContent = [];
      
      // Collect branch content until we hit >>>>>>>
      while (i < lines.length && !lines[i].startsWith('>>>>>>>')) {
        branchContent.push(lines[i]);
        i++;
      }
      
      // Skip the >>>>>>> line
      if (i < lines.length && lines[i].startsWith('>>>>>>>')) {
        i++;
      }
      
      // Choose the longer content or the one that looks more complete
      const headText = headContent.join('\n').trim();
      const branchText = branchContent.join('\n').trim();
      
      if (headText.length > branchText.length || headText.includes('import') || headText.includes('export')) {
        result.push(...headContent);
      } else {
        result.push(...branchContent);
      }
    } else {
      result.push(line);
      i++;
    }
  }
  
  return result.join('\n');
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Processing merge conflicts in: ${filePath}`);
      const resolved = resolveMergeConflict(content);
      fs.writeFileSync(filePath, resolved);
      console.log(`✓ Resolved merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files in app directory
function findAppFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findAppFiles(appDir);

console.log(`Found ${files.length} files to process in app directory`);

let processedCount = 0;
let conflictCount = 0;

for (const file of files) {
  if (processFile(file)) {
    conflictCount++;
  }
  processedCount++;
}

console.log(`\nProcessed ${processedCount} files`);
console.log(`Resolved merge conflicts in ${conflictCount} files`);

// Also process root level files
const rootFiles = [
  'EnhancedFooter.tsx',
  'accessibility-improvements.js',
  'add-missing-routes.js'
];

for (const file of rootFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    if (processFile(filePath)) {
      conflictCount++;
    }
    processedCount++;
  }
}

console.log(`\nTotal files processed: ${processedCount}`);
console.log(`Total files with resolved conflicts: ${conflictCount}`);