#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix broken import statements
function fixImports(content) {
  // Fix imports that are missing the import keyword
  content = content.replace(/^([A-Za-z][A-Za-z0-9_,\s\n]*)\s*\}\s*from\s*['"][^'"]+['"];?\s*$/gm, (match, imports) => {
    const cleanImports = imports.replace(/\n\s*/g, ' ').trim();
    return `import { ${cleanImports} } from 'lucide-react';`;
  });
  
  // Fix imports that are missing the opening brace
  content = content.replace(/^import\s+([A-Za-z][A-Za-z0-9_,\s\n]*)\s*\}\s*from\s*['"][^'"]+['"];?\s*$/gm, (match, imports) => {
    const cleanImports = imports.replace(/\n\s*/g, ' ').trim();
    return `import { ${cleanImports} } from 'lucide-react';`;
  });
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix imports
    content = fixImports(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports: ${filePath}`);
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
console.log('Starting import fixing...');

const files = [...findFiles('./app'), ...findFiles('./src')];
let fixedCount = 0;

for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);
console.log('Import fixing completed.');