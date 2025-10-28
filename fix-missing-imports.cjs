const fs = require('fs');
const path = require('path');

// Find all .tsx files in the app directory that need imports
const appDir = './app';
const files = [];

function findTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findTsxFiles(fullPath);
    } else if (item.endsWith('.tsx') && !item.includes('ErrorBoundary')) {
      files.push(fullPath);
    }
  }
}

findTsxFiles(appDir);

let fixedCount = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if file uses components but doesn't import them
    if (content.includes('Navigation') || content.includes('Footer')) {
      const lines = content.split('\n');
      let hasReactImport = false;
      let hasNavigationImport = false;
      let hasFooterImport = false;
      let insertIndex = 0;
      
      // Check existing imports
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('import React')) hasReactImport = true;
        if (lines[i].includes('import Navigation')) hasNavigationImport = true;
        if (lines[i].includes('import Footer')) hasFooterImport = true;
        if (lines[i].startsWith('import ') || lines[i].startsWith("import ")) {
          insertIndex = i + 1;
        }
      }
      
      // Add missing imports
      const importsToAdd = [];
      if (!hasReactImport && content.includes('React')) {
        importsToAdd.push("import React from 'react';");
      }
      if (!hasNavigationImport && content.includes('Navigation')) {
        importsToAdd.push("import Navigation from '../components/Navigation';");
      }
      if (!hasFooterImport && content.includes('Footer')) {
        importsToAdd.push("import Footer from '../components/Footer';");
      }
      
      if (importsToAdd.length > 0) {
        lines.splice(insertIndex, 0, ...importsToAdd);
        const newContent = lines.join('\n');
        fs.writeFileSync(file, newContent);
        fixedCount++;
        console.log(`Fixed: ${file}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);
