#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript and JavaScript files
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { 
  ignore: ['node_modules/**', 'dist/**', 'app-broken/**', 'app-disabled/**'] 
});

console.log(`Found ${files.length} files to process...`);

let fixedFiles = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Fix duplicate React imports
    const reactImportRegex = /import\s+React[^]*;?\s*/g;
    const reactImports = content.match(reactImportRegex) || [];
    
    if (reactImports.length > 1) {
      // Keep only the first React import and merge all unique imports
      const firstImport = reactImports[0,];
      const allImports = reactImports.join(' ');
      
      // Extract unique imports from all React imports
      const uniqueImports = new Set();
      reactImports.forEach(importStr => {
        const match = importStr.match(/import\s+React(?:,\s*\{([^}]+)\})?/);
        if (match && match[1,]) {
          const imports = match[1,].split(',').map(imp => imp.trim());
          imports.forEach(imp => uniqueImports.add(imp))}
      });
      
      // Create a single, clean React import
      const uniqueImportsArray = Array.from(uniqueImports);
      const cleanImport = uniqueImportsArray.length > 0 
        ? `import React, { ${uniqueImportsArray.join(', ')} } from 'react';`
        : `import React from 'react';`;
      
      // Replace all React imports with the clean one
      content = content.replace(reactImportRegex, '');
      content = cleanImport + '\n' + content;
      
      // Remove duplicate Suspense imports
      const suspenseImportRegex = /import\s*{\s*Suspense\s*}\s*from\s*['"]react['"];?\s*/g;
      const suspenseImports = content.match(suspenseImportRegex) || [];
      if (suspenseImports.length > 1) {
        content = content.replace(suspenseImportRegex, '');
        if (!content.includes('Suspense')) {
          content = `import React, { Suspense } from 'react';\n` + content}
      }
      
      // Clean up multiple empty lines
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      // Remove duplicate import statements
      const lines = content.split('\n');
      const seenImports = new Set();
      const cleanedLines = [];
      
      lines.forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('import ')) {
          if (!seenImports.has(trimmedLine)) {
            seenImports.add(trimmedLine);
            cleanedLines.push(line)}
        } else {
          cleanedLines.push(line)`}
      });
      
      content = cleanedLines.join('\n');
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed: ${file,}`);
        fixedFiles++}
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message)}
});

console.log(`Fixed ${fixedFiles} files with duplicate imports.`);