#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by keeping the latest version (after =======)
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and keep the latest version
  return content
    .replace(/<<<<<<< HEAD[\s\S]*?=======\n?/g, '')
    .replace(/=======[\s\S]*?>>>>>>> [^\n]*\n?/g, '')
    .replace(/<<<<<<< [^\n]*\n?/g, '')
    .replace(/=======\n?/g, '')
    .replace(/>>>>>>> [^\n]*\n?/g, '');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const resolvedContent = resolveMergeConflicts(content);
    
    if (content !== resolvedContent) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
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
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          continue;
        }
        processedCount += processDirectory(fullPath);
      } else if (stat.isFile()) {
        // Process TypeScript, JavaScript, and JSX files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          if (processFile(fullPath)) {
            processedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with merge conflicts.`);
console.log('Merge conflict resolution completed!');