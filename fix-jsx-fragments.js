import fs from 'fs';
import path from 'path';

function fixJSXFragmentIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the problematic pattern
    if (content.includes('return (\n    <>\n      { /* Animated Background */ }') && 
        !content.includes('<Helmet>')) {
      
      // Add Helmet import if not present
      if (!content.includes('import { Helmet }')) {
        content = content.replace(
          /import React, { useState, useEffect } from "react";/,
          'import React, { useState, useEffect } from "react";\nimport { Helmet } from "react-helmet-async";'
        );
      }
      
      // Fix the JSX structure
      content = content.replace(
        /return \(\s*<>\s*{\s*\/\*\s*Animated Background\s*\*\/\s*}\s*<div className="absolute inset-0">/,
        `return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered solutions for your business." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 relative overflow-hidden">
        { /* Animated Background */ }
        <div className="absolute inset-0">`
      );
      
      // Fix the style object syntax
      content = content.replace(
        /style=\{\s*\{\s*backgroundImage:/,
        'style={{\n            backgroundImage:'
      );
      
      // Fix the closing structure
      content = content.replace(
        /}\s*\}\s*><\/div>\s*<\/div>\s*<main className="relative z-10">/,
        '},\n            backgroundSize: \'50px 50px\' }}></div>\n        </div>\n        <main className="relative z-10">'
      );
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX fragments in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all page.tsx files in the app directory
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = './app';
const pageFiles = findPageFiles(appDir);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixJSXFragmentIssues(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files with JSX fragment issues.`);