#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to remove merge conflict markers
function removeMergeConflicts(content) {
  return content
    .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix malformed JSX closing tags
  content = content.replace(/<([^>]+)\s*\/\s*>/g, '<$1 />');
  
  // Fix malformed JSX attributes
  content = content.replace(/(\w+)\s*=\s*"([^"]*)"\s*\/\s*>/g, '$1="$2" />');
  
  // Fix missing semicolons in interface declarations
  content = content.replace(/interface\s+(\w+)\s*\{([^}]+)\}/g, (match, name, body) => {
    const fixedBody = body.replace(/([^;}])\s*$/gm, '$1;');
    return `interface ${name} {${fixedBody}}`;
  });
  
  // Fix malformed function declarations
  content = content.replace(/(\w+)\s*=\s*\([^)]*\)\s*=\s*</g, '$1 = ($2) => {');
  
  // Fix malformed JSX expressions
  content = content.replace(/\{\s*([^}]+)\s*=\s*</g, '{$1 => {');
  
  // Fix duplicate imports
  const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
  const uniqueImports = [...new Set(importLines)];
  const nonImportLines = content.split('\n').filter(line => !line.trim().startsWith('import'));
  content = [...uniqueImports, ...nonImportLines].join('\n');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove merge conflicts
    content = removeMergeConflicts(content);
    
    // Fix syntax errors
    content = fixSyntaxErrors(content);
    
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

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting error fixing process...');

const files = [...findFiles('./app'), ...findFiles('./src')];
let fixedCount = 0;

for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);
console.log('Error fixing process completed.');