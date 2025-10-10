#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let conflictType = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('<<<<<<< HEAD')) {
      inConflict = true;
      conflictType = 'head';
      continue;
    }
    
    if (line.includes('=======')) {
      conflictType = 'other';
      continue;
    }
    
    if (line.includes('>>>>>>>')) {
      inConflict = false;
      conflictType = null;
      continue;
    }
    
    if (inConflict) {
      if (conflictType === 'head') {
        resolvedLines.push(line);
      }
      // Skip lines from other branch
    } else {
      resolvedLines.push(line);
    }
  }
  
  return resolvedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD')) {
      console.log(`Processing: ${filePath}`);
      const resolvedContent = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const files = process.argv.slice(2);
  
  if (files.length === 0) {
    console.log('Usage: node fix-merge-conflicts.js <file1> <file2> ...');
    console.log('Or: find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs node fix-merge-conflicts.js');
    process.exit(1);
  }
  
  let processedCount = 0;
  let errorCount = 0;
  
  files.forEach(file => {
    if (processFile(file)) {
      processedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\nProcessed ${processedCount} files with conflicts`);
  console.log(`Errors: ${errorCount}`);
}

if (require.main === module) {
  main();
}

module.exports = { resolveMergeConflicts, processFile };