#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by conflict markers and take the newer version (after =======)
    const parts = content.split(/<<<<<<<.*?\n=======\n(.*?)\n>>>>>>>.*?\n/gs);
    
    let fixedContent = '';
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        // This is content before or between conflicts
        fixedContent += parts[i];
      } else {
        // This is the newer version (after =======)
        fixedContent += parts[i];
      }
    }
    
    // Clean up any remaining conflict markers
    fixedContent = fixedContent.replace(/<<<<<<<.*?\n/g, '');
    fixedContent = fixedContent.replace(/=======.*?\n/g, '');
    fixedContent = fixedContent.replace(/>>>>>>>.*?\n/g, '');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = './app';
const componentsDir = './components';
const utilsDir = './utils';

let totalFixed = 0;

// Fix files in app directory
if (fs.existsSync(appDir)) {
  const appFiles = findTsxFiles(appDir);
  for (const file of appFiles) {
    if (fixMergeConflicts(file)) {
      totalFixed++;
    }
  }
}

// Fix files in components directory
if (fs.existsSync(componentsDir)) {
  const componentFiles = findTsxFiles(componentsDir);
  for (const file of componentFiles) {
    if (fixMergeConflicts(file)) {
      totalFixed++;
    }
  }
}

// Fix files in utils directory
if (fs.existsSync(utilsDir)) {
  const utilFiles = findTsxFiles(utilsDir);
  for (const file of utilFiles) {
    if (fixMergeConflicts(file)) {
      totalFixed++;
    }
  }
}

// Fix root level TSX files
const rootFiles = fs.readdirSync('.').filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
for (const file of rootFiles) {
  if (fixMergeConflicts(file)) {
    totalFixed++;
  }
}

console.log(`\nFixed merge conflicts in ${totalFixed} files.`);