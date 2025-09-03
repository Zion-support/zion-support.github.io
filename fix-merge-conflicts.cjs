#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD')) {
      return false; // No conflicts to resolve
    }

    console.log(`Resolving conflicts in: ${filePath}`);

    // Split content by conflict markers and keep HEAD version
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepLines = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepLines = true;
        continue;
      } else if (line.includes('=======')) {
        keepLines = false;
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepLines = false;
        continue;
      }

      if (!inConflict || keepLines) {
        resolvedLines.push(line);
      }
    }

    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalFixed = 0;

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
<<<<<<< HEAD
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      findFilesWithConflicts(fullPath, files);
    } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.json'))) {
      const content = fs.readFileSync(fullPath, 'utf8`);
      if (content.includes(`        files.push(fullPath);
=======

    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (item === 'node_modules' || item === '.git') {
        continue;
      }
      totalFixed += processDirectory(fullPath);
    } else if (stat.isFile()) {
      // Process JavaScript, TypeScript, and JSX files
      if (/\.(js|jsx|ts|tsx|json)$/.test(item)) {
        if (resolveMergeConflicts(fullPath)) {
          totalFixed++;
        }
>>>>>>> main
      }
    }
  }

  return totalFixed;
}

<<<<<<< HEAD
function resolveConflicts(filePath) {
  console.log(`Fixing conflicts in: ${filePath}`);
  
  let content = fs.readFileSync(filePath, `utf8`);
  
  // Remove all merge conflict markers and keep HEAD version;
  content = content.replace(/  // Clean up any remaining conflict markers;
  content = content.replace(/  content = content.replace(/=======\n?/g, '');
  content = content.replace(/  
  fs.writeFileSync(filePath, content, 'utf8');
}

// Find and fix all files with conflicts;
const filesWithConflicts = findFilesWithConflicts(`.`);
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

for (const file of filesWithConflicts) {
  try {
    resolveConflicts(file);
  } catch (error) { 
    console.error(`Error fixing ${file }:`, error.message);
  }
}

console.log(`Merge conflicts resolved!`);
=======
// Main execution
console.log('Starting merge conflict resolution...');
const totalFixed = processDirectory('.');
console.log(`\nResolved conflicts in ${totalFixed} files.`);
console.log('Merge conflict resolution complete!');
>>>>>>> main
