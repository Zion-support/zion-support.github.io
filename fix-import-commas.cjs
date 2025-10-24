#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

// Function to fix import statement commas
function fixImportCommas(content) {
  return content
    // Fix commas after import statements
    .replace(/import\s+[^;]+;,/g, (match) => {
      return match.replace(/,$/, ';');
    })
    // Fix commas after 'use client' directive
    .replace(/'use client';,/g, "'use client';")
    // Fix other common comma issues
    .replace(/,\s*$/gm, '');
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixImportCommas(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript and JavaScript files
const patterns = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'app/**/*.js',
  'app/**/*.jsx'
];

let totalFiles = 0;
let fixedFiles = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { cwd: process.cwd() });
  totalFiles += files.length;
  
  files.forEach(file => {
    if (processFile(file)) {
      fixedFiles++;
    }
  });
});

console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);