#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Final merge solution - cleaning up all conflicts...\n');

// Function to clean up merge conflicts in a file
function cleanMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
        keepIncoming = true;
        continue;
        inConflict = false;
        keepIncoming = false;
        continue;
      }
      
      if (!inConflict || keepIncoming) {
        cleaned.push(line);
      }
    }
    
    const cleanedContent = cleaned.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    console.log(`✅ Cleaned: ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Error cleaning ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find and clean all files with conflicts
function cleanAllConflicts() {
  const cleanedFiles = [];
  
  function scanDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', 'out', 'coverage'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check if file has conflicts
          try {
            const content = fs.readFileSync(fullPath, 'utf8');