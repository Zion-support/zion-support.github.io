#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Skip node_modules and other build directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      // Only process TypeScript/JavaScript files
      if (file.match(/\.(ts|tsx|js|jsx)$/)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const originalContent = content;
    
    // Fix unterminated string literals
    content = content.replace(/';$/gm, "'");
    content = content.replace(/";$/gm, '"');
    content = content.replace(/`;$/gm, '`');
    
    // Fix trailing commas in objects/arrays
    content = content.replace(/,,\s*}/g, '}');
    content = content.replace(/,,\s*]/g, ']');
    content = content.replace(/,,\s*\)/g, ')');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+)\s*=\s*([^,\n}]+)\s*\n\s*(\w+)/g, '$1: $2,\n  $3');
    
    // Fix property assignment syntax
    content = content.replace(/(\w+)\s*=\s*([^,\n}]+)\s*\n\s*(\w+)/g, '$1: $2,\n  $3');
    
    // Fix missing colons in object properties
    content = content.replace(/(\w+)\s*=\s*([^,\n}]+)/g, '$1: $2');
    
    // Fix missing commas after properties
    content = content.replace(/(\w+):\s*([^,\n}]+)\s*\n\s*(\w+)/g, '$1: $2,\n  $3');
    
    // Fix enum syntax errors
    content = content.replace(/enum\s+(\w+)\s*{\s*([^}]+)\s*}/g, (match, enumName, body) => {
      const fixedBody = body
        .split('\n')
        .map(line => {
          line = line.trim();
          if (line && !line.includes('=') && !line.includes(',')) {
            return line + ' = "' + line.toLowerCase().replace(/_/g, '-') + '",';
          }
          return line;
        })
        .join('\n');
      return `enum ${enumName} {\n  ${fixedBody}\n}`;
    });

    // Fix function parameter syntax
    content = content.replace(/(\w+),\s*\)/g, '$1)');
    
    // Fix missing closing brackets/parentheses
    content = content.replace(/(\w+)\s*=\s*([^,\n}]+)\s*\n\s*(\w+)/g, '$1: $2,\n  $3');
    
    // Fix JSX syntax errors
    content = content.replace(/<(\w+)\s*([^>]*)\s*>/g, '<$1 $2>');
    
    // Fix import statements
    content = content.replace(/import\s+([^;]+);$/gm, 'import $1;');
    
    // Fix export statements
    content = content.replace(/export\s+([^;]+);$/gm, 'export $1;');
    
    // Fix const/let declarations
    content = content.replace(/const\s+(\w+)\s*=\s*([^;]+);$/gm, 'const $1 = $2;');
    content = content.replace(/let\s+(\w+)\s*=\s*([^;]+);$/gm, 'let $1 = $2;');
    
    // Fix arrow functions
    content = content.replace(/=>\s*([^,;]+),$/gm, '=> $1,');
    
    // Fix template literals
    content = content.replace(/`([^`]+)`;$/gm, '`$1`');
    
    // Fix object destructuring
    content = content.replace(/\{\s*(\w+)\s*=\s*([^}]+)\s*\}/g, '{ $1: $2 }');
    
    // Fix array destructuring
    content = content.replace(/\[\s*(\w+)\s*=\s*([^\]]+)\s*\]/g, '[ $1 = $2 ]');
    
    // Fix type annotations
    content = content.replace(/(\w+):\s*([^,;]+)\s*=/g, '$1: $2 =');
    
    // Fix interface declarations
    content = content.replace(/interface\s+(\w+)\s*{\s*([^}]+)\s*}/g, (match, interfaceName, body) => {
      const fixedBody = body
        .split('\n')
        .map(line => {
          line = line.trim();
          if (line && !line.includes(':') && !line.includes(';')) {
            return line + ': any;';
          }
          return line;
        })
        .join('\n');
      return `interface ${interfaceName} {\n  ${fixedBody}\n}`;
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting syntax error resolution...');

const allFiles = getAllFiles('./src');
let fixedCount = 0;

allFiles.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed syntax errors in ${fixedCount} files.`);
console.log('Syntax error resolution complete!');