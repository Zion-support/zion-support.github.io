#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // More comprehensive regex patterns to handle various merge conflict formats
    // Remove everything between ======= and >>>>>>> (the incoming branch content)
    content = content.replace(/=======.*?>>>>>>> [^\n]+/gs, '');
    
    // Remove <<<<<<< HEAD markers
    content = content.replace(/<<<<<<< HEAD\s*\n?/g, '');
    
    // Remove any remaining ======= markers
    content = content.replace(/=======\s*\n?/g, '');
    
    // Remove any remaining >>>>>>> markers
    content = content.replace(/>>>>>>> [^\n]+\s*\n?/g, '');
    
    // Clean up multiple consecutive newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all files with merge conflicts
function findFilesWithConflicts() {
  const files = [];
  
  function searchDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js'))) {
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
  
  searchDirectory('.');
  return files;
}

// Main execution
console.log('Starting comprehensive merge conflict resolution...');

const filesWithConflicts = findFilesWithConflicts();
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
filesWithConflicts.forEach(file => {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`Fixed merge conflicts in ${fixedCount} files`);
console.log('Comprehensive merge conflict resolution complete!');