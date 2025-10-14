const fs = require('fs');
const path = require('path');

// Function to fix unused Suspense imports
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if Suspense is imported but not used in JSX
    const hasSuspenseImport = content.includes("import { Suspense } from 'react'") || 
                             content.includes("import React, { Suspense } from 'react'");
    
    if (hasSuspenseImport) {
      // Check if Suspense is actually used in JSX
      const hasSuspenseInJSX = content.includes('<Suspense') || content.includes('</Suspense>');
      
      if (!hasSuspenseInJSX) {
        // Remove Suspense from import
        content = content.replace(/import React, { Suspense } from 'react';/, "import React from 'react';");
        content = content.replace(/import { Suspense } from 'react';/, '');
        
        // Clean up empty import lines
        content = content.replace(/import React, { } from 'react';\n/, '');
        content = content.replace(/import { } from 'react';\n/, '');
        
        modified = true;
      }
    }

    // Fix unused imports in general
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip empty import lines
      if (line.trim() === "import { } from 'react';" || 
          line.trim() === "import React, { } from 'react';") {
        continue;
      }
      
      newLines.push(line);
    }
    
    if (modified || newLines.length !== lines.length) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);