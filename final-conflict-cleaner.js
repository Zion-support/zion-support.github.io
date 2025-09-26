#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Ultimate conflict resolution - removes ALL merge conflict markers
function ultimateConflictResolution(content) {
  // Remove all types of merge conflict markers
  content = content.replace(/
  content = content.replace(/
  content = content.replace(/
  content = content.replace(/
  
  // Remove standalone conflict markers
  content = content.replace(/
  content = content.replace(/
  
  // Clean up any remaining syntax issues
  content = content.replace(/^"use client",/gm, '"use client";');
  content = content.replace(/;
import /g, ';\nimport ');
  content = content.replace(/;

export /g, ';\n\nexport ');
  content = content.replace(/;
const /g, ';\nconst ');
  content = content.replace(/;
let /g, ';\nlet ');
  content = content.replace(/;
var /g, ';\nvar ');
  content = content.replace(/;
function /g, ';\nfunction ');
  content = content.replace(/;
if /g, ';\nif ');
  content = content.replace(/;
return /g, ';\nreturn ');
  
  // Clean up multiple empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has any merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
      console.log(`Cleaning: ${filePath}`);
      
      const resolvedContent = ultimateConflictResolution(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      
      console.log(`✓ Cleaned: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with remaining conflicts
function findFilesWithConflicts(dir, extensions = ['.ts', '.tsx', '.js', '.jsx', '.json']) {
  const files = [];
  
  function walkDir(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files we can't read
          }
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('🧹 Final conflict cleanup...');

const filesWithConflicts = findFilesWithConflicts('/workspace');
let processedCount = 0;
let cleanedCount = 0;

console.log(`Found ${filesWithConflicts.length} files with remaining conflicts`);

for (const file of filesWithConflicts) {
  if (processFile(file)) {
    cleanedCount++;
  }
  processedCount++;
}

console.log(`\n✅ Final cleanup complete!`);
console.log(`📊 Processed: ${processedCount} files`);
console.log(`🧹 Cleaned: ${cleanedCount} files`);