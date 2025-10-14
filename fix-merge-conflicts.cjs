#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findFilesWithConflicts(filePath, fileList);
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx'))) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  console.log(`Fixing merge conflicts in: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove merge conflict markers and keep the HEAD version (first part)
  const lines = content.split('\n');
  const fixedLines = [];
  let inConflict = false;
  let keepHead = true;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('<<<<<<< HEAD')) {
      inConflict = true;
      keepHead = true;
      continue;
    } else if (line.includes('=======')) {
      keepHead = false;
      continue;
    } else if (line.includes('>>>>>>>')) {
      inConflict = false;
      keepHead = true;
      continue;
    }
    
    if (!inConflict || keepHead) {
      fixedLines.push(line);
    }
  }
  
  // Clean up any remaining syntax issues
  let fixedContent = fixedLines.join('\n');
  
  // Fix common syntax issues
  fixedContent = fixedContent
    .replace(/import\s+React\s+from\s+['"]react['"];\s*<<<<<<< HEAD/g, "import React from 'react';")
    .replace(/<<<<<<< HEAD\s*/g, '')
    .replace(/=======\s*/g, '')
    .replace(/>>>>>>> [^\n]*\s*/g, '')
    .replace(/\s*<<<<<<< HEAD\s*/g, '')
    .replace(/\s*=======\s*/g, '')
    .replace(/\s*>>>>>>> [^\n]*\s*/g, '');
  
  // Remove empty lines that might have been left behind
  fixedContent = fixedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  fs.writeFileSync(filePath, fixedContent);
  console.log(`Fixed: ${filePath}`);
}

// Main execution
try {
  console.log('Finding files with merge conflicts...');
  const conflictedFiles = findFilesWithConflicts('.');
  
  console.log(`Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  console.log('\nFixing merge conflicts...');
  conflictedFiles.forEach(fixMergeConflicts);
  
  console.log('\nAll merge conflicts have been fixed!');
  
} catch (error) {
  console.error('Error fixing merge conflicts:', error.message);
  process.exit(1);
}
