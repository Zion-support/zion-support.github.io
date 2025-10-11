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
  
  // Remove merge conflict markers and keep the HEAD version
  content = content.replace(/<<<<<<< HEAD\n?/g, '');
  content = content.replace(/=======\n?/g, '');
  content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
  
  // Clean up any remaining syntax issues
  content = content.replace(/;\s*;\s*/g, ';');
  content = content.replace(/\(\s*;\s*/g, '(');
  content = content.replace(/;\s*\)/g, ')');
  content = content.replace(/{\s*;\s*/g, '{');
  content = content.replace(/;\s*}/g, '}');
  content = content.replace(/<\s*;\s*/g, '<');
  content = content.replace(/;\s*>/g, '>');
  content = content.replace(/\/\*\s*;\s*/g, '/*');
  content = content.replace(/;\s*\*\//g, '*/');
  
  // Fix JSX syntax issues
  content = content.replace(/<\s*;\s*([^>]+)\s*;\s*>/g, '<$1>');
  content = content.replace(/<\s*;\s*([^>]+)\s*;\s*\/>/g, '<$1 />');
  
  // Remove extra semicolons at the end of lines
  content = content.replace(/;\s*$/gm, '');
  
  // Fix duplicate React imports
  content = content.replace(/import React from 'react';\s*import React, {[^}]+} from 'react';/g, (match) => {
    const secondImport = match.match(/import React, {[^}]+} from 'react';/);
    return secondImport ? secondImport[0] : match;
  });
  
  fs.writeFileSync(filePath, content);
}

// Main execution
try {
  console.log('Searching for files with merge conflicts...');
  const conflictedFiles = findFilesWithConflicts('.');
  
  console.log(`Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  if (conflictedFiles.length === 0) {
    console.log('No merge conflicts found!');
    process.exit(0);
  }
  
  console.log('\nFixing merge conflicts...');
  conflictedFiles.forEach(fixMergeConflicts);
  
  console.log('\nAll merge conflicts have been fixed!');
  
} catch (error) {
  console.error('Error fixing merge conflicts:', error.message);
  process.exit(1);
}
