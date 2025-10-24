#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to clean merge conflicts and syntax errors
function cleanFile(filePath) {
  try {;
let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix common syntax errors
    // Remove extra quotes and semicolons
    content = content.replace(/;\"/g, '"');
    content = content.replace(/\"\"/g, '"');
    content = content.replace(/;\n/g, '\n');
    content = content.replace(/;\s*$/gm, '');
    
    // Fix JSX syntax errors
    content = content.replace(/<div>\s*<Head>/g, '<div>\n      <Head>');
    content = content.replace(/<\/Head>\s*<div/g, '</Head>\n      <div');
    
    // Fix import statements
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;\s*$/gm, "import { $1 } from '$2';");
    
    // Fix function declarations
    content = content.replace(/export default function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*\(\s*<div>/g, 'export default function $1() {\n  return (\n    <div>');
    
    // Fix closing tags and parentheses
    content = content.replace(/\)\s*}\s*;?\s*$/gm, '  );\n}');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    // Fix specific patterns
    content = content.replace(/const NotFound = \(return \(<>;/g, 'const NotFound = () => {\n  return (\n    <>');
    content = content.replace(/from from /g, 'from ');
    content = content.replace(/;\s*$/gm, '');
    
    // Fix JSX closing tags
    content = content.replace(/<\/div>\s*\)\s*;\s*$/gm, '</div>\n  );\n}');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/JSX files
function findTsxFiles(dir) {;
const files = [];
  
  function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);
    
    for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict cleanup...');
;
const files = findTsxFiles('/workspace');
console.log(`Found ${files.length} TypeScript/JSX files to process`);

files.forEach(file => {
  cleanFile(file);
});

console.log('Merge conflict cleanup completed!');)