#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix merge conflicts
function fixMergeConflicts(content) {
  // Remove merge conflict markers and keep the HEAD version
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> origin\/main\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1');
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing imports
  if (content.includes('React') && !content.includes("import React")) {
    content = "import React from 'react';\n" + content;
  }
  
  // Fix missing semicolons after imports
  content = content.replace(/(import [^;]+)(\n)/g, '$1;$2');
  
  // Fix missing closing braces and parentheses
  content = content.replace(/(\w+)\s*\(\s*([^)]*)\s*$/gm, '$1($2)');
  
  // Fix JSX syntax issues
  content = content.replace(/<(\w+)([^>]*)\s*$/gm, '<$1$2>');
  
  return content;
}

// Function to fix specific component issues
function fixComponentIssues(content, filePath) {
  // Fix missing export default
  if (content.includes('function ') && !content.includes('export default')) {
    content = content.replace(/function (\w+)/g, 'export default function $1');
  }
  
  // Fix missing React import for JSX
  if (content.includes('<') && content.includes('>') && !content.includes("import React")) {
    content = "import React from 'react';\n" + content;
  }
  
  // Fix missing return statements
  if (content.includes('function ') && !content.includes('return')) {
    content = content.replace(/(function \w+[^{]*\{)/g, '$1\n  return null;');
  }
  
  return content;
}

// Main function to process files
function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let processedFiles = 0;
  let errorFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      try {
        const fullPath = path.resolve(file);
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Skip if file is empty
        if (!content.trim()) {
          return;
        }
        
        // Fix merge conflicts
        const originalContent = content;
        content = fixMergeConflicts(content);
        
        // Fix syntax errors
        content = fixSyntaxErrors(content);
        
        // Fix component-specific issues
        content = fixComponentIssues(content, file);
        
        // Only write if content changed
        if (content !== originalContent) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Fixed: ${file}`);
          processedFiles++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${processedFiles} files`);
  console.log(`Errors in ${errorFiles} files`);
}

// Run the script
processFiles();