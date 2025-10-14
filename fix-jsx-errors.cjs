#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix duplicate </Helmet> closing tags
  fixed = fixed.replace(/<\/Helmet>\s*<\/Helmet>/g, '</Helmet>');
  
  // Fix missing closing tags for common JSX elements
  // This is a more complex pattern that needs careful handling
  
  return fixed;
}

// Main function to process files
async function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      try {
        const content = fs.readFileSync(file, 'utf8');
        let fixed = fixJSXErrors(content);
        
        if (fixed !== content) {
          fs.writeFileSync(file, fixed, 'utf8');
          console.log(`Fixed: ${file}`);
          fixedFiles++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

// Run the fix
processFiles();