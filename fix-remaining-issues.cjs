const fs = require('fs');
const path = require('path');

// Function to fix remaining issues in a file
function fixRemainingIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused ErrorBoundary imports
    if (content.includes("import ErrorBoundary from '../components/ErrorBoundary';")) {
      content = content.replace("import ErrorBoundary from '../components/ErrorBoundary';\n", '');
      modified = true;
    }
    
    if (content.includes('import ErrorBoundary from "../components/ErrorBoundary";')) {
      content = content.replace('import ErrorBoundary from "../components/ErrorBoundary";\n', '');
      modified = true;
    }
    
    // Add missing Navigation and Footer imports if they're used but not imported
    if (content.includes('<Navigation />') && !content.includes('import Navigation')) {
      const importLine = "import Navigation from '../components/Navigation';\n";
      const importFooter = "import Footer from '../components/Footer';\n";
      
      // Find the right place to add imports
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Find the last import statement
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          insertIndex = i + 1;
        }
      }
      
      // Insert the imports
      lines.splice(insertIndex, 0, importLine, importFooter);
      content = lines.join('\n');
      modified = true;
    }
    
    if (content.includes('<Footer />') && !content.includes('import Footer')) {
      const importFooter = "import Footer from '../components/Footer';\n";
      
      // Find the right place to add imports
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Find the last import statement
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          insertIndex = i + 1;
        }
      }
      
      // Insert the import
      lines.splice(insertIndex, 0, importFooter);
      content = lines.join('\n');
      modified = true;
    }
    
    // Remove unused memo import from Navigation
    if (filePath.includes('Navigation.tsx') && content.includes("import React, { useState, memo, useCallback } from 'react';")) {
      content = content.replace("import React, { useState, memo, useCallback } from 'react';", "import React, { useState, useCallback } from 'react';");
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed issues in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all page files
function fixAllRemainingIssues(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-app directories
      if (!['node_modules', '.next', '.git'].includes(file)) {
        fixedCount += fixAllRemainingIssues(filePath);
      }
    } else if (file.endsWith('.tsx')) {
      if (fixRemainingIssues(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix remaining issues...');
const totalFixed = fixAllRemainingIssues(appDir);
console.log(`Fixed issues in ${totalFixed} files.`);