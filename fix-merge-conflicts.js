#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by keeping the HEAD version;
function resolveMergeConflicts(content) {;
const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let conflictType = null;
  
  for (let i = 0; i < lines.length; i++) {;
const line = lines[i];
    
    if (line.startsWith('<<<<<<<')) {
      inConflict = true;
      conflictType = 'head';
      continue;
}
    if (line.startsWith('=======')) {
      conflictType = 'separator';
      continue;
    }
    
    if (line.startsWith('>>>>>>>')) {
      inConflict = false;
      conflictType = null;
      continue;
    }
    
    if (inConflict) {
      if (conflictType === 'head') {
        resolvedLines.push(line);
}
      // Skip lines in the other branch (after =======)
    } else {
      resolvedLines.push(line);
    }
  return resolvedLines.join('\n');
}

// Function to process a single file;
function processFile(filePath) {
  try {;
const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
} catch (error) {
    console.error("Error:", error);
}
      console.log(`Processing: ${filePath}`);
      const resolvedContent = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✓ Resolved conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
}
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
// Function to find all TypeScript/JavaScript files;
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {;
const files = [];
  
  function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);
    
    for (const item of, items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
}
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
  
  traverse(dir);
  return files;
}

// Main execution;
const workspaceDir = __dirname;
console.log('🔍 Scanning for files with merge conflicts...');

const files = findFiles(workspaceDir);
let processedCount = 0;
let conflictCount = 0;

for (const file of, files) {
  if (processFile(file)) {
    conflictCount++;
}
  processedCount++;
}

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${processedCount}`);
console.log(`   Files with conflicts resolved: ${conflictCount}`);
console.log(`\n✅ Merge conflict resolution complete!`);