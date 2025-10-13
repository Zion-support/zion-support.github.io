#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
<<<<<<< HEAD
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]*\n/g, '$1');
=======
    // Remove merge conflict markers and keep the HEAD version (first part)
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = '';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
    
<<<<<<< HEAD
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'separator';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict) {
        fixedLines.push(line);
      } else if (inConflict && conflictType === 'head') {
        fixedLines.push(line);
      }
    }
=======
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n/g, '');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
    
<<<<<<< HEAD
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
=======
    const fixedContent = fixedLines.join('\n');
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      modified = true;
      console.log(`Fixed merge conflicts in: ${filePath}`);
    }
    
    return modified;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
// Find all TypeScript/JavaScript files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDir(currentDir) {
=======
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
<<<<<<< HEAD
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
        searchDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
=======
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
<<<<<<< HEAD
  searchDir(dir);
=======
  scanDirectory(dir);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
  return files;
}

// Main execution
<<<<<<< HEAD
const workspaceDir = '/workspace';
const conflictedFiles = findFilesWithConflicts(workspaceDir);

console.log(`Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

let fixedCount = 0;
conflictedFiles.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed merge conflicts in ${fixedCount} out of ${conflictedFiles.length} files.`);
=======
console.log('Starting merge conflict resolution...');

const workspaceDir = process.cwd();
const conflictFiles = findFilesWithConflicts(workspaceDir);

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also fix some common syntax issues
console.log('Fixing common syntax issues...');

// Fix common JSX issues
const jsxFiles = conflictFiles.filter(f => f.endsWith('.tsx') || f.endsWith('.jsx'));

for (const file of jsxFiles) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Fix unclosed JSX tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
    
    // Fix missing closing tags in simple cases
    if (content.includes('<div') && !content.includes('</div>')) {
      content = content.replace(/(<div[^>]*>)([^<]*)$/gm, '$1$2</div>');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed JSX syntax in: ${file}`);
    }
  } catch (error) {
    console.error(`Error fixing JSX in ${file}:`, error.message);
  }
}

console.log('Merge conflict resolution completed!');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
