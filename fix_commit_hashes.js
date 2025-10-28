#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const commitHash = '334a97c43c32bf9e815481016c5bf31caa46a580';

function findFiles(dir, extensions = ['.tsx', '.ts', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove the commit hash line
    content = content.replace(new RegExp(`^${commitHash}$`, 'gm'), '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Find all relevant files
const files = findFiles('./app');
let fixedCount = 0;

console.log('Fixing commit hashes in files...');

for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);