#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import statements with periods instead of semicolons
    content = content.replace(/import\s+([^;]+)\.\s*$/gm, (match, importStatement) => {
      modified = true;
      return `import ${importStatement.trim()};`;
    });

    // Fix 'use client' with period
    content = content.replace(/'use client'\./g, "'use client';");
    content = content.replace(/"use client"\./g, '"use client";');

    // Fix export statements with periods
    content = content.replace(/export\s+([^;]+)\.\s*$/gm, (match, exportStatement) => {
      modified = true;
      return `export ${exportStatement.trim()};`;
    });

    // Fix function returns with periods
    content = content.replace(/\)\s*\.\s*$/gm, ');');
    content = content.replace(/}\s*\.\s*$/gm, '};');

    // Fix object destructuring with periods
    content = content.replace(/const\s+([^=]+)=\s*([^;]+)\.\s*$/gm, (match, variable, value) => {
      modified = true;
      return `const ${variable.trim()} = ${value.trim()};`;
    });

    // Fix array destructuring with periods
    content = content.replace(/\[\s*([^\]]+)\s*\]\s*=\s*([^;]+)\.\s*$/gm, (match, variables, value) => {
      modified = true;
      return `[${variables.trim()}] = ${value.trim()};`;
    });

    // Fix object property assignments with periods
    content = content.replace(/(\w+):\s*([^,;]+)\.\s*$/gm, (match, key, value) => {
      modified = true;
      return `${key}: ${value.trim()},`;
    });

    // Fix JSX closing tags with periods
    content = content.replace(/<\/(\w+)>\s*\.\s*$/gm, '</$1>');

    // Fix component definitions with periods
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);

// Also fix the main App.tsx file
if (fixSyntaxErrors(path.join(__dirname, 'App.tsx'))) {
  fixedCount++;
}

console.log(`Total files fixed: ${fixedCount}`);