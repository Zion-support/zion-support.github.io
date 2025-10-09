#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head' or 'other'
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        conflictType = 'head';
        continue; // Skip the marker line
      } else if (line.trim() === '=======') {
        conflictType = 'other';
        continue; // Skip the separator line
      } else if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        continue; // Skip the end marker line
      }
      
      if (inConflict) {
        // Only keep lines from HEAD (current branch)
        if (conflictType === 'head') {
          resolvedLines.push(line);
        }
        // Skip lines from other branch
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write the resolved content back
    fs.writeFileSync(filePath, resolvedLines.join('\n'), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
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
console.log('Starting merge conflict resolution...');

const srcDir = path.join(process.cwd(), 'src');
const filesWithConflicts = findFilesWithConflicts(srcDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

for (const filePath of filesWithConflicts) {
  if (resolveMergeConflicts(filePath)) {
    resolvedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nResolution complete:`);
console.log(`- Files resolved: ${resolvedCount}`);
console.log(`- Files with errors: ${errorCount}`);

if (resolvedCount > 0) {
  console.log('\nRunning lint check to verify fixes...');
  try {
    execSync('pnpm run lint', { stdio: 'inherit' });
    console.log('✅ All merge conflicts resolved and linting passed!');
  } catch (error) {
    console.log('⚠️  Linting still shows some issues, but merge conflicts are resolved.');
  }
}