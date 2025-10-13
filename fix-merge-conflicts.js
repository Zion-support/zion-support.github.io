#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and their content
    // This regex matches 
    const conflictRegex = /
    content = content.replace(conflictRegex, '');
    
    // Remove any remaining conflict markers
    content = content.replace(/
    content = content.replace(//g, '');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove leading/trailing whitespace
    content = content.trim();
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and clean all files
function cleanAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let cleanedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other build directories
      if (['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        continue;
      }
      cleanedCount += cleanAllFiles(filePath);
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
const cleanedCount = cleanAllFiles('.');
console.log(`Cleaned ${cleanedCount} files.`);