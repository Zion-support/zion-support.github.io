#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix unterminated string literals more comprehensively
function fixUnterminatedStrings(content) {
  // Fix import statements with missing closing quotes
  content = content.replace(/import\s+([^'"]*)\s+from\s+'([^']*);/g, (match, imports, path) => {
    return `import ${imports} from '${path}';`;
  });
  
  content = content.replace(/import\s+([^'"]*)\s+from\s+"([^"]*);/g, (match, imports, path) => {
    return `import ${imports} from "${path}";`;
  });
  
  // Fix require statements
  content = content.replace(/require\s*\(\s*'([^']*);/g, (match, path) => {
    return `require('${path}');`;
  });
  
  content = content.replace(/require\s*\(\s*"([^"]*);/g, (match, path) => {
    return `require("${path}");`;
  });
  
  // Fix string literals in object properties
  content = content.replace(/(\w+):\s*'([^']*);/g, (match, key, value) => {
    return `${key}: '${value}';`;
  });
  
  content = content.replace(/(\w+):\s*"([^"]*);/g, (match, key, value) => {
    return `${key}: "${value}";`;
  });
  
  // Fix JSX attributes
  content = content.replace(/className="([^"]*);/g, (match, className) => {
    return `className="${className}">`;
  });
  
  content = content.replace(/path="([^"]*);/g, (match, path) => {
    return `path="${path}">`;
  });
  
  // Fix template literals
  content = content.replace(/`([^`]*);/g, (match, template) => {
    return `\`${template}\`;`;
  });
  
  // Fix common patterns in React components
  content = content.replace(/'use client;/g, "'use client';");
  content = content.replace(/import React from 'react;/g, "import React from 'react';");
  content = content.replace(/import { ([^}]+) } from '([^']*);/g, "import { $1 } from '$2';");
  content = content.replace(/import ([^'"]+) from '([^']*);/g, "import $1 from '$2';");
  
  // Fix JSX closing tags
  content = content.replace(/<(\w+)\s+([^>]*);/g, (match, tag, attrs) => {
    return `<${tag} ${attrs}>`;
  });
  
  // Fix export statements
  content = content.replace(/export default ([^';]*);/g, (match, exportName) => {
    return `export default ${exportName};`;
  });
  
  // Fix function declarations
  content = content.replace(/function\s+(\w+)\s*\([^)]*\)\s*{;/g, (match, funcName) => {
    return match.replace('{;', '{');
  });
  
  // Fix arrow functions
  content = content.replace(/=>\s*{;/g, '=> {');
  
  // Fix object literals
  content = content.replace(/{\s*;/g, '{');
  content = content.replace(/}\s*;/g, '};');
  
  // Fix array literals
  content = content.replace(/\[\s*;/g, '[');
  content = content.replace(/\]\s*;/g, '];');
  
  // Fix common JSX patterns
  content = content.replace(/<(\w+)\s+([^>]*);/g, (match, tag, attrs) => {
    return `<${tag} ${attrs}>`;
  });
  
  // Fix string concatenation
  content = content.replace(/'([^']*)\s*\+\s*'([^']*);/g, (match, str1, str2) => {
    return `'${str1}' + '${str2}';`;
  });
  
  // Fix console statements
  content = content.replace(/console\.log\s*\(\s*'([^']*);/g, (match, message) => {
    return `console.log('${message}');`;
  });
  
  // Fix JSON.stringify
  content = content.replace(/JSON\.stringify\s*\(\s*{\s*([^}]*)\s*}\s*\)/g, (match, obj) => {
    return `JSON.stringify({ ${obj} })`;
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Apply fixes
    fixedContent = fixUnterminatedStrings(fixedContent);
    
    // Only write if content changed
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const patterns = [
    '**/*.tsx',
    '**/*.ts',
    '**/*.jsx',
    '**/*.js'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, {
      ignore: [
        'node_modules/**',
        'dist/**',
        '.next/**',
        'out/**',
        '**/backup*/**',
        '**/disabled*/**',
        '**/corrupted*/**',
        '**/broken*/**'
      ]
    });
    
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixUnterminatedStrings, processFile };