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
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';
    let headContent = [];
    let separatorFound = false;
    let branchContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        if (inConflict && conflictType === 'head') {
          separatorFound = true;
          conflictType = 'branch';
          continue;
        }
      } else if (line.startsWith('>>>>>>>')) {
        if (inConflict) {
          // Resolve conflict by choosing the branch content (usually more complete)
          if (separatorFound && branchContent.length > 0) {
            resolvedLines.push(...branchContent);
          } else if (headContent.length > 0) {
            resolvedLines.push(...headContent);
          }
          
          // Reset conflict state
          inConflict = false;
          conflictType = '';
          headContent = [];
          separatorFound = false;
          branchContent = [];
          continue;
        }
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headContent.push(line);
        } else if (conflictType === 'branch') {
          branchContent.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content back to file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true;
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
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const appDir = path.join(__dirname, 'app');
const filesWithConflicts = findFilesWithConflicts(appDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

for (const file of filesWithConflicts) {
  try {
    if (resolveMergeConflicts(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Failed to fix ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nMerge conflict resolution complete:`);
console.log(`- Files processed: ${filesWithConflicts.length}`);
console.log(`- Successfully fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);

// Verify no more conflicts
const remainingConflicts = findFilesWithConflicts(appDir);
if (remainingConflicts.length === 0) {
  console.log('\n✅ All merge conflicts have been resolved!');
} else {
  console.log(`\n⚠️  ${remainingConflicts.length} files still have merge conflicts:`);
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}