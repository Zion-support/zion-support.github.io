#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

// Function to fix import paths
function fixImportPaths(content) {
  return content
    .replace(/import Footer from '\.\.\/components\/Footer';/g, "import Footer from '../../components/Footer';")
    .replace(/import Navigation from '\.\.\/components\/Navigation';/g, "import Navigation from '../../components/Navigation';");
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixImportPaths(content);
    
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

// Get micro-saas page files
const patterns = [
  'app/micro-saas/*/page.tsx'
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