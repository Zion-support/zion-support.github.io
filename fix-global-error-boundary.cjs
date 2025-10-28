#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} TypeScript files to check...`);

let fixedFiles = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Replace GlobalErrorBoundary with ErrorBoundary
  const newContent = content.replace(/GlobalErrorBoundary/g, 'ErrorBoundary');
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent);
    fixedFiles++;
    console.log(`Fixed GlobalErrorBoundary import in: ${file}`);
  }
});

console.log(`\nFixed GlobalErrorBoundary imports in ${fixedFiles} files.`);