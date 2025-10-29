#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
  return content;
}

// Function to fix common TypeScript/JSX syntax errors
function fixSyntaxErrors(content) {
  // Fix trailing commas in interfaces
  content = content.replace(/(\w+):\s*(\w+),(\s*})/g, '$1: $2$3');
  
  // Fix missing semicolons in type declarations
  content = content.replace(/(\w+):\s*(\w+)(\s*})/g, '$1: $2;$3');
  
  // Fix JSX fragment syntax
  content = content.replace(/<>([\s\S]*?)<\/>/g, '<React.Fragment>$1</React.Fragment>');
  
  return content;
}

// Function to fix common React component issues
function fixReactIssues(content) {
  // Fix missing React import
  if (content.includes('React.FC') && !content.includes("import React")) {
    content = content.replace(/^/, "import React from 'react';\n");
  }
  
  // Fix missing component wrapper
  if (content.includes('return (') && !content.includes('const ') && !content.includes('function ')) {
    content = content.replace(/^/, "const Component: React.FC = () => {\n");
    content = content.replace(/export default [^;]+;?$/, '};\n\nexport default Component;');
  }
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixMergeConflicts(content);
    content = fixSyntaxErrors(content);
    content = fixReactIssues(content);
    
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

// Find all TypeScript/JSX files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);