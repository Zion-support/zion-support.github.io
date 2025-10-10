#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null;
    let headContent = [];
    let separatorFound = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.trim() === '=======') {
        if (inConflict && conflictType === 'head') {
          separatorFound = true;
          continue;
        }
      } else if (line.trim().startsWith('>>>>>>>')) {
        if (inConflict) {
          // Use HEAD content (before =======)
          if (separatorFound) {
            resolvedLines.push(...headContent);
          }
          inConflict = false;
          conflictType = null;
          separatorFound = false;
          headContent = [];
          continue;
        }
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headContent.push(line);
        }
        // Skip content after ======= (the other branch)
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content back to file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
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
  
  searchDirectory(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const workspaceDir = process.cwd();
const filesWithConflicts = findFilesWithConflicts(workspaceDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

for (const filePath of filesWithConflicts) {
  try {
    if (resolveMergeConflicts(filePath)) {
      resolvedCount++;
    }
  } catch (error) {
    console.error(`Failed to resolve conflicts in ${filePath}:`, error.message);
    errorCount++;
  }
}

console.log(`\nResolution complete:`);
console.log(`- Files processed: ${filesWithConflicts.length}`);
console.log(`- Conflicts resolved: ${resolvedCount}`);
console.log(`- Errors: ${errorCount}`);

// Run a quick syntax check
console.log('\nRunning syntax check...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
  console.log('✅ Type check passed!');
} catch (error) {
  console.log('❌ Type check failed - some files may still have issues');
}