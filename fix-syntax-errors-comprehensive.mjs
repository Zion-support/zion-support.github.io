#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix malformed imports
  content = content.replace(/import,\s*([^,]+),\s*from\s*['"]([^'"]+)['"]/g, 'import $1 from "$2"');
  content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, (match, imports, module) => {
    // Fix malformed destructured imports
    const cleanImports = imports.replace(/,\s*/g, ', ').replace(/\s*,\s*/g, ', ');
    return `import { ${cleanImports} } from "${module}"`;
  });
  
  // Fix malformed function declarations
  content = content.replace(/function\s+([^,]+),\s*([^,]+),\s*([^,]+)/g, 'function $1$2$3');
  content = content.replace(/export\s+default\s+function\s+([^,]+),\s*([^,]+),\s*([^,]+)/g, 'export default function $1$2$3');
  
  // Fix malformed variable declarations
  content = content.replace(/con,\s*s,\s*t\s+/g, 'const ');
  content = content.replace(/le,\s*t\s+/g, 'let ');
  content = content.replace(/va,\s*r\s+/g, 'var ');
  
  // Fix malformed JSX
  content = content.replace(/<([^,]+),\s*([^,]+),\s*([^,]+)/g, '<$1$2$3');
  content = content.replace(/<\/,\s*([^,]+),\s*([^,]+),\s*([^,]+)>/g, '</$1$2$3>');
  
  // Fix malformed object properties
  content = content.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*),\s*([a-zA-Z_$][a-zA-Z0-9_$]*):/g, '$1$2:');
  
  // Fix malformed array elements
  content = content.replace(/\[\s*([^,]+),\s*([^,]+),\s*([^,]+)\s*\]/g, '[$1$2$3]');
  
  // Fix malformed string literals
  content = content.replace(/['"]([^'"]+),\s*([^'"]+),\s*([^'"]+)['"]/g, '"$1$2$3"');
  
  // Fix malformed CSS
  content = content.replace(/([a-zA-Z-]+),\s*([a-zA-Z-]+):/g, '$1$2:');
  content = content.replace(/{\s*([^}]+),\s*([^}]+)\s*}/g, '{$1$2}');
  
  // Fix merge conflict markers
  content = content.replace(/^<<<<<<<.*$/gm, '');
  content = content.replace(/^=======.*$/gm, '');
  content = content.replace(/^>>>>>>>.*$/gm, '');
  
  // Fix common punctuation issues
  content = content.replace(/,\s*}/g, '}');
  content = content.replace(/,\s*]/g, ']');
  content = content.replace(/,\s*\)/g, ')');
  content = content.replace(/,\s*;/g, ';');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
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
const targetDir = process.argv[2] || '.';
const files = findFiles(targetDir);

console.log(`Found ${files.length} files to process`);

for (const file of files) {
  processFile(file);
}

console.log('Syntax error fixing completed!');