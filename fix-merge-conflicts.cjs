#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by keeping the newer version (after =======)
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and keep the newer version
  let resolved = content
    .replace(/<<<<<<< HEAD[\s\S]*?=======\n?/g, '')
    .replace(/>>>>>>> [a-f0-9]+[\s\S]*?/g, '')
    .replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
  
  // Clean up any remaining conflict markers
  resolved = resolved
    .replace(/<<<<<<< HEAD[\s\S]*?/g, '')
    .replace(/=======[\s\S]*?/g, '')
    .replace(/>>>>>>> [a-f0-9]+[\s\S]*?/g, '');
  
  return resolved;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD')) {
      console.log(`Processing: ${filePath}`);
      const resolved = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolved, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const sourceDir = process.cwd();
const filesWithConflicts = findFilesWithConflicts(sourceDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts:`);
filesWithConflicts.forEach(file => console.log(`  - ${file}`));

console.log('\nResolving conflicts...\n');

filesWithConflicts.forEach(processFile);

console.log('\n✓ All merge conflicts resolved!');