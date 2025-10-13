#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to recursively find all files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(file)) {
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      // Only process certain file types
      if (file.match(/\.(js|jsx|ts|tsx)$/)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

// Function to fix HTML entities in a file
function fixHtmlEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has HTML entities
    if (content.includes('&apos;') || content.includes('&quot;') || content.includes('&lt;') || content.includes('&gt;') || content.includes('&amp;')) {
      console.log(`Fixing HTML entities in: ${filePath}`);
      
      // Replace HTML entities with proper characters
      const originalContent = content;
      content = content.replace(/&apos;/g, "'");
      content = content.replace(/&quot;/g, '"');
      content = content.replace(/&lt;/g, '<');
      content = content.replace(/&gt;/g, '>');
      content = content.replace(/&amp;/g, '&');
      
      // Only write if content actually changed
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        modified = true;
        console.log(`✓ Fixed HTML entities in: ${filePath}`);
      }
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting HTML entity fixes...');

const allFiles = getAllFiles(process.cwd());
let fixedCount = 0;

allFiles.forEach(file => {
  if (fixHtmlEntities(file)) {
    fixedCount++;
  }
});

console.log(`\nCompleted! Fixed HTML entities in ${fixedCount} files.`);