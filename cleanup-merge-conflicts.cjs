#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to clean merge conflicts in a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let cleaned = false;
    
    // Check if file has merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Cleaning merge conflicts in: ${filePath}`);
      
      // Split by merge conflict markers and take the first valid section
      const lines = content.split('\n');
      const cleanedLines = [];
      let inConflict = false;
      let conflictDepth = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.trim().startsWith('<<<<<<<')) {
          inConflict = true;
          conflictDepth++;
          continue;
        }
        
        if (line.trim().startsWith('=======')) {
          continue;
        }
        
        if (line.trim().startsWith('>>>>>>>')) {
          inConflict = false;
          conflictDepth--;
          continue;
        }
        
        // Only include lines that are not within conflicts
        if (!inConflict) {
          cleanedLines.push(line);
        }
      }
      
      const cleanedContent = cleanedLines.join('\n');
      
      // Only write if content changed
      if (cleanedContent !== content) {
        fs.writeFileSync(filePath, cleanedContent, 'utf8');
        cleaned = true;
      }
    }
    
    return cleaned;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript/JSX files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict cleanup...');

const workspaceDir = process.cwd();
const conflictFiles = findFilesWithConflicts(workspaceDir);

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

let cleanedCount = 0;
let errorCount = 0;

for (const file of conflictFiles) {
  try {
    const cleaned = cleanMergeConflicts(file);
    if (cleaned) {
      cleanedCount++;
    }
  } catch (error) {
    console.error(`Failed to clean ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nCleanup complete:`);
console.log(`- Files processed: ${conflictFiles.length}`);
console.log(`- Files cleaned: ${cleanedCount}`);
console.log(`- Errors: ${errorCount}`);

// Verify no more conflicts exist
const remainingConflicts = findFilesWithConflicts(workspaceDir);
if (remainingConflicts.length === 0) {
  console.log('\n✅ All merge conflicts have been resolved!');
} else {
  console.log(`\n⚠️  ${remainingConflicts.length} files still have merge conflicts:`);
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}