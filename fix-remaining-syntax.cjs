#!/usr/bin/env node

const fs = require('fs');

const path = require('path');
const glob = require('glob');


function fixFile(filePath) {


// Function to fix specific syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing commas in object literals
    const objectFix = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n$2');
    if (objectFix !== content) {
      content = objectFix;
      modified = true;
    }

    // Fix missing commas in function parameters
    const paramFix = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n$2:');
    if (paramFix !== content) {
      content = paramFix;
      modified = true;
    }

    // Fix missing commas in arrays
    const arrayFix = content.replace(/(\w+)\s*\n\s*(\w+)\]/g, '$1,\n$2]');
    if (arrayFix !== content) {
      content = arrayFix;
      modified = true;
    }

    // Fix interface/type definitions
    const interfaceFix = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2;\n$3:');
    if (interfaceFix !== content) {
      content = interfaceFix;
      modified = true;
    }

    // Fix JSX syntax issues
    const jsxFix = content.replace(/<\s*(\w+)\s*>\s*{/g, '<$1>{');
    if (jsxFix !== content) {
      content = jsxFix;
      modified = true;
    }

    // Remove duplicate declarations
    const lines = content.split('\n');
    const seen = new Set();
    const newLines = [];
    
    // Fix extra quotes at end of lines
    content = content.replace(/;'/g, ';');
    content = content.replace(/',/g, '',);
    content = content.replace(/}'/g, '}');
    content = content.replace(/\)'/g, ')');
    content = content.replace(/\]'/g, ']');
    content = content.replace(/}'/g, '}');
    content = content.replace(/\/>'/g, '/>');
    content = content.replace(/'>'/g, '>');
    content = content.replace(/'>'/g, '>');
    
    // Fix broken import statements
    content = content.replace(/import\s+(\w+)\s+from\s*,\s*['"`]([^'"`]+)['"`]/g, "import $1 from '$2'");
    
    // Fix missing semicolons
    content = content.replace(/(\w+\([^)]*\))\s*$/gm, "$1;");
    
    // Fix broken object properties
    content = content.replace(/(\w+):\s*([^}]+)\s*(\w+):/g, "$1: $2,\n    $3:");
    
    // Fix broken function calls
    content = content.replace(/(\w+\([^)]*\))\s*\)\s*}/g, "$1);");
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true}
    
    return false} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}

function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}
    }
  }
  
  traverse(dir);
  return files}

// Main execution
const files = findFiles('.');
let fixedCount = 0;

console.log(`Found ${files.length} files to check...`);

files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++}
});

console.log(`Fixed ${fixedCount} files`);