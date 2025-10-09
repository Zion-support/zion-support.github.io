#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to clean merge conflict markers from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let cleaned = false;
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    const conflictRegex = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g;
    
    if (conflictRegex.test(content)) {
      content = content.replace(conflictRegex, (match, headContent, otherContent) => {
        cleaned = true;
        // Keep the HEAD version and clean up any extra whitespace
        return headContent.trim() + '\n';
      });
    }
    
    // Clean up any remaining conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
      cleaned = true;
    }
    
    // Fix common syntax issues
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      // Remove any remaining conflict markers
      content = content.replace(/<<<<<<<[^\n]*\n?/g, '');
      content = content.replace(/=======\n?/g, '');
      content = content.replace(/>>>>>>>[^\n]*\n?/g, '');
      cleaned = true;
    }
    
    // Clean up multiple consecutive empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove any remaining orphaned conflict markers
    content = content.replace(/^<<<<<<<.*$/gm, '');
    content = content.replace(/^=======.*$/gm, '');
    content = content.replace(/^>>>>>>>.*$/gm, '');
    
    if (cleaned) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let cleanedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      cleanedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (cleanMergeConflicts(filePath)) {
        cleanedCount++;
      }
    }
  }
  
  return cleanedCount;
}

// Main execution
console.log('Starting merge conflict cleanup...');
const cleanedCount = processDirectory('./src');
console.log(`Cleaned merge conflicts in ${cleanedCount} files.`);

// Also clean up any other common files
const otherFiles = [
  './App.tsx',
  './main.tsx',
  './package.json'
];

let otherCleanedCount = 0;
for (const file of otherFiles) {
  if (fs.existsSync(file) && cleanMergeConflicts(file)) {
    otherCleanedCount++;
  }
}

console.log(`Cleaned merge conflicts in ${otherCleanedCount} additional files.`);
console.log(`Total files cleaned: ${cleanedCount + otherCleanedCount}`);