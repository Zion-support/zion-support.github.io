const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function fixSyntaxInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix object properties - replace semicolons with commas in object literals
    content = content.replace(/(\w+):\s*([^,;]+);/g, (match, key, value) => {
      // Don't fix if it's the last property in an object (ends with })
      if (content.indexOf(match) + match.length < content.length) {
        const afterMatch = content.substring(content.indexOf(match) + match.length);
        if (afterMatch.trim().startsWith('}')) {
          return match; // Keep semicolon if it's the last property
        }
      }
      return `${key}: ${value},`;
    });
    
    // Fix array elements - replace semicolons with commas in arrays
    content = content.replace(/([^,;]+);(\s*[\]}])/g, '$1,$2');
    
    // Fix import statements - ensure they end with semicolons
    content = content.replace(/import\s+[^;]+,\s*$/gm, (match) => {
      return match.replace(/,\s*$/, ';');
    });
    
    // Fix export statements
    content = content.replace(/export\s+[^;]+,\s*$/gm, (match) => {
      return match.replace(/,\s*$/, ';');
    });
    
    // Fix function parameters
    content = content.replace(/\(\s*([^)]+)\s*\)\s*=>/g, (match, params) => {
      const fixedParams = params.replace(/;\s*/g, ', ');
      return `(${fixedParams}) =>`;
    });
    
    // Fix destructuring assignments
    content = content.replace(/\{\s*([^}]+)\s*\}\s*=/g, (match, destructured) => {
      const fixedDestructured = destructured.replace(/;\s*/g, ', ');
      return `{ ${fixedDestructured} } =`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax in: ${filePath}`);
=======
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors more comprehensively
    content = content.replace(/;,$/gm, ';');
    content = content.replace(/",$/gm, '"');
    content = content.replace(/,$/gm, ',');
    content = content.replace(/{\s*$/gm, '{');
    content = content.replace(/}\s*$/gm, '}');
    content = content.replace(/\[\s*$/gm, '[');
    content = content.replace(/\]\s*$/gm, ']');
    content = content.replace(/import _React/g, 'import React');
    
    // Fix import statements
    content = content.replace(/from 'react';,/g, "from 'react';");
    content = content.replace(/from 'next\/link';,/g, "from 'next/link';");
    content = content.replace(/from 'next\/head';,/g, "from 'next/head';");
    content = content.replace(/from 'framer-motion';,/g, "from 'framer-motion';");
    content = content.replace(/from 'lucide-react';,/g, "from 'lucide-react';");
    content = content.replace(/from '\.\.\/components\/Layout';,/g, "from '../components/Layout';");
    
    // Fix object properties missing commas
    content = content.replace(/(\w+):\s*"([^"]+)"\s*\n\s*(\w+):/g, '$1: "$2",\n    $3:');
    content = content.replace(/(\w+):\s*(\d+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix array elements missing commas
    content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n    $2');
    
    // Fix function declarations
    content = content.replace(/export default function (\w+)\(\) \{\}/g, 'export default function $1() {');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*"([^"]+)"\s*\n\s*(\w+):/g, '$1: "$2",\n    $3:');
    
    // Fix specific patterns
    content = content.replace(/method: "GET"\s*\n\s*path:/g, 'method: "GET",\n    path:');
    content = content.replace(/path: "([^"]+)"\s*\n\s*description:/g, 'path: "$1",\n    description:');
    content = content.replace(/description: "([^"]+)"\s*\n\s*parameters:/g, 'description: "$1",\n    parameters:');
    
    // Fix missing commas in arrays
    content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n    $2:');
    
    // Fix specific import patterns
    content = content.replace(/import \{ \}\s*\n\s*(\w+)/g, 'import { $1');
    content = content.replace(/import \{ \s*\n\s*(\w+)/g, 'import { $1');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

<<<<<<< HEAD
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.next')) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Fix all TypeScript/React files
const files = findTsxFiles('./pages');
files.push(...findTsxFiles('./components'));

console.log(`Found ${files.length} files to fix`);

files.forEach(fixSyntaxInFile);

console.log('Syntax fixing completed!');
=======
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx')) {
      fixFile(filePath);
    }
  });
}

walkDir('./pages');
console.log('Comprehensive syntax fixing complete!');
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
