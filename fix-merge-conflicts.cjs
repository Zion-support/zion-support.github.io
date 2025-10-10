#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove all merge conflict markers and keep HEAD version
    let lines = content.split('\n');
    let result = [];
    let inConflict = false;
    let keepLines = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        keepLines = true;
        continue;
      } else if (line.startsWith('=======')) {
        keepLines = false;
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        keepLines = false;
        continue;
      }
      
      if (!inConflict || keepLines) {
        result.push(line);
      }
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
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
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript, JavaScript, and JSX files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
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
  }
  
  walkDir(dir);
  return files;
}

// Main execution
function main() {
  const workspaceDir = process.cwd();
  console.log('Searching for files with merge conflicts...');
  
  const conflictedFiles = findFilesWithConflicts(workspaceDir);
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  
  let fixedCount = 0;
  for (const file of conflictedFiles) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
  
  if (fixedCount > 0) {
    console.log('Running linter to check for remaining issues...');
    try {
      execSync('npm run lint:fix', { stdio: 'inherit' });
    } catch (error) {
      console.log('Linter completed with some issues (this is expected)');
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixMergeConflicts, findFilesWithConflicts };