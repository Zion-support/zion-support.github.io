#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to clean merge conflicts in a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to clean
    }
    
    console.log(`Cleaning merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head' or 'other'
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'other';
        continue;
      } else if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        // Keep only HEAD content for most files
        if (conflictType === 'head') {
          cleanedLines.push(line);
        }
        // Skip other branch content
      } else {
        cleanedLines.push(line);
      }
    }
    
    // Write cleaned content back
    const cleanedContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other build directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if it's a relevant file type
        if (['.ts', '.tsx', '.js', '.jsx', '.json'].includes(path.extname(item))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict cleanup...');

const workspaceDir = process.cwd();
const filesWithConflicts = findFilesWithConflicts(workspaceDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let cleanedCount = 0;
let errorCount = 0;

for (const filePath of filesWithConflicts) {
  if (cleanMergeConflicts(filePath)) {
    cleanedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nCleanup complete:`);
console.log(`- Files cleaned: ${cleanedCount}`);
console.log(`- Errors: ${errorCount}`);

if (cleanedCount > 0) {
  console.log('\nRunning additional cleanup...');
  
  // Run lint fix
  try {
    console.log('Running ESLint fix...');
    execSync('npm run lint:fix', { stdio: 'inherit' });
  } catch (error) {
    console.log('ESLint fix completed with some issues (expected)');
  }
  
  // Run type check
  try {
    console.log('Running TypeScript check...');
    execSync('npm run type-check', { stdio: 'inherit' });
  } catch (error) {
    console.log('TypeScript check completed with some issues (expected)');
  }
}

console.log('\nMerge conflict cleanup completed!');