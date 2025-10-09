#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
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
        continue;
      } else if (line.trim() === '=======') {
        conflictType = 'other';
        continue;
      } else if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        // Only keep lines from HEAD version
        if (conflictType === 'head') {
          resolvedLines.push(line);
        }
        // Skip lines from other version (conflictType === 'other')
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content back to file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
function main() {
  console.log('Starting merge conflict resolution...');
  
  const srcDir = path.join(__dirname, 'src');
  const files = findSourceFiles(srcDir);
  
  let resolvedCount = 0;
  let totalConflicts = 0;
  
  for (const file of files) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
    
    // Check if file still has conflicts
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      totalConflicts++;
    }
  }
  
  console.log(`\nResolution complete:`);
  console.log(`- Files processed: ${files.length}`);
  console.log(`- Files with conflicts resolved: ${resolvedCount}`);
  console.log(`- Files still with conflicts: ${totalConflicts}`);
  
  if (totalConflicts > 0) {
    console.log('\nFiles still with conflicts:');
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
        console.log(`  - ${file}`);
      }
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = { resolveMergeConflicts, findSourceFiles };