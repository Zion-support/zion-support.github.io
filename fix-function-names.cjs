#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

// Function to fix function names with hyphens
function fixFunctionNames(content) {
  return content
    // Fix function names with hyphens
    .replace(/export default function ([a-zA-Z0-9-]+)Page\(\)/g, (match, name) => {
      const cleanName = name.replace(/-/g, '');
      return `export default function ${cleanName}Page()`;
    });
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixFunctionNames(content);
    
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

// Get all page files
const patterns = [
  'app/*/page.tsx',
  'app/*/*/page.tsx'
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