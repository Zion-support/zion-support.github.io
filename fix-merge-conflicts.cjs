#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======.*?>>>>>>> [^\n]+\n?/gs, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files with merge conflicts
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
const appDir = path.join(__dirname, 'app');
const filesWithConflicts = findFilesWithConflicts(appDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also check other directories
const otherDirs = ['src', 'components', 'pages'];
for (const dir of otherDirs) {
  if (fs.existsSync(dir)) {
    const otherFiles = findFilesWithConflicts(dir);
    console.log(`Found ${otherFiles.length} files with conflicts in ${dir}`);
    
    for (const file of otherFiles) {
      if (resolveMergeConflicts(file)) {
        fixedCount++;
      }
    }
  }
}

console.log(`Total files fixed: ${fixedCount}`);