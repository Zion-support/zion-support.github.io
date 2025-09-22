#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to clean merge conflict markers from a file
function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/
    content = content.replace(/
    content = content.replace(//g, '');
    
    // Remove corrupted patterns
    content = content.replace(/ursor\/automate-test-improve-and-merge-code-646c/g, '');
    content = content.replace(/module\.exports = \{\}module\.exports = \{\}/g, 'module.exports = {}');
    content = content.replace(/export \{\}module\.exports = \{\}/g, 'export {}');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove files that are completely corrupted (mostly merge conflict markers)
    if (content.trim().length < 50 && content.includes('module.exports = {}')) {
      console.log(`Deleting corrupted file: ${filePath}`);
      fs.unlinkSync(filePath);
      return;
    }
    
    // Write cleaned content back
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned: ${filePath}`);
    
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Function to recursively find and clean files
function cleanDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to clean
      if (!['node_modules', '.git', '.next', 'out', 'dist', 'build'].includes(item)) {
        cleanDirectory(fullPath);
      }
    } else if (stat.isFile()) {
      const ext = path.extname(item);
      if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
        cleanFile(fullPath);
      }
    }
  }
}

console.log('Starting cleanup of corrupted files...');
cleanDirectory('.');
console.log('Cleanup completed!');