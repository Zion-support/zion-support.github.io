const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax issues
    if (content.includes('<>') && !content.includes('React.Fragment')) {
      // Replace empty fragments with React.Fragment
      content = content.replace(/<>/g, '<React.Fragment>');
      content = content.replace(/<\/>/g, '</React.Fragment>');
      modified = true;
    }
    
    // Fix missing React import
    if (content.includes('React.Fragment') && !content.includes("import React")) {
      content = content.replace(/('use client'\n)/, "$1import React from 'react';\n");
      modified = true;
    }
    
    // Fix JSX syntax issues
    if (content.includes('return (') && content.includes('<>')) {
      // Ensure proper JSX structure
      content = content.replace(/return \(\s*<>/g, 'return (\n    <React.Fragment>');
      content = content.replace(/<\/>\s*\)/g, '</React.Fragment>\n  )');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixSyntaxErrors(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Fixing syntax errors...');
const fixedCount = processDirectory('./app');
console.log(`Fixed syntax errors in ${fixedCount} files`);