#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix extra closing braces after imports
  fixed = fixed.replace(/import[^;]+;\}/g, (match) => {
    return match.replace(/;\}/g, ';');
  });
  
  // Fix extra closing braces after 'use client'
  fixed = fixed.replace(/'use client';\}/g, "'use client';");
  
  // Fix extra closing braces after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+[^;]+;\}/g, (match) => {
    return match.replace(/;\}/g, ';');
  });
  
  // Fix extra closing braces after function declarations
  fixed = fixed.replace(/function\s+[^{]+{\s*}\}/g, (match) => {
    return match.replace(/}\}/g, '}');
  });
  
  // Fix extra closing braces after return statements
  fixed = fixed.replace(/return\s+[^;]+;\}/g, (match) => {
    return match.replace(/;\}/g, ';');
  });
  
  // Fix extra closing braces after JSX
  fixed = fixed.replace(/<\/[^>]+>;\}/g, (match) => {
    return match.replace(/;\}/g, ';');
  });
  
  // Fix missing semicolons before closing braces
  fixed = fixed.replace(/([^;}])\n(\s*)\}/g, '$1;\n$2}');
  
  // Fix missing commas in object literals
  fixed = fixed.replace(/([^,}])\n(\s*)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1,\n$2$3');
  
  // Fix missing commas in arrays
  fixed = fixed.replace(/([^,}])\n(\s*)([a-zA-Z_$][a-zA-Z0-9_$]*\s*[^,}])/g, '$1,\n$2$3');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixSyntaxErrors(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (item === 'node_modules' || item === '.git') {
          continue;
        }
        processedCount += processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting syntax error fixing...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with syntax fixes.`);
console.log('Syntax fixing completed!');