#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by keeping HEAD version
function resolveConflicts(content) {
  // Remove everything from  (inclusive)
  // Keep everything after ======= until   let resolved = content.replace(//g, '');
  
  // Remove the   resolved = resolved.replace(/  
  // Clean up any remaining conflict markers
  resolved = resolved.replace(/<<<<<<< HEAD[\s\S]*?  
  return resolved;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD')) {
      console.log(`Processing: ${filePath}`);
      const resolved = resolveConflicts(content);
      fs.writeFileSync(filePath, resolved, 'utf8');
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
        // Skip certain directories
        if (['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          continue;
        }
        processedCount += processDirectory(fullPath);
      } else if (stat.isFile()) {
        // Process files with common extensions
        const ext = path.extname(item);
        if (['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.sh', '.cjs', '.mjs'].includes(ext)) {
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
const processedCount = processDirectory('/workspace');
console.log(`Processed ${processedCount} files with merge conflicts.`);
console.log('Merge conflict resolution complete!');