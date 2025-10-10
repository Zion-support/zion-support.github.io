#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  searchDir(dir);
  return files;
}

// Fix merge conflicts by keeping HEAD version
function fixMergeConflicts(filePath) {
  console.log(`Fixing merge conflicts in: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove merge conflict markers and keep HEAD version
  content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
  
  // Remove any remaining conflict markers
  content = content.replace(/<<<<<<< HEAD\n?/g, '');
  content = content.replace(/=======\n?/g, '');
  content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
  
  fs.writeFileSync(filePath, content);
}

// Main execution
const workspaceDir = process.cwd();
const conflictedFiles = findFilesWithConflicts(workspaceDir);

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

for (const file of conflictedFiles) {
  try {
    fixMergeConflicts(file);
    console.log(`✓ Fixed: ${file}`);
  } catch (error) {
    console.error(`✗ Error fixing ${file}:`, error.message);
  }
}

console.log('Merge conflict fixing completed!');