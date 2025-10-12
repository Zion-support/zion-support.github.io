const fs = require('fs');
const path = require('path');

// Function to remove unused React imports from a file
function removeUnusedReactImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has unused React import
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      console.log(`Removing unused React import from ${filePath}`);
      
      // Remove the React import line
      content = content.replace(/import React from 'react';\n?/, '');
      
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TSX files
function removeUnusedReactFromAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += removeUnusedReactFromAllFiles(filePath);
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      if (removeUnusedReactImport(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
const fixedCount = removeUnusedReactFromAllFiles(appDir);

console.log(`Removed unused React imports from ${fixedCount} files`);