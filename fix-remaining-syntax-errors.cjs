#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix specific patterns found in the codebase
function fixSpecificPatterns(content) {
  // Fix common patterns in React components
  content = content.replace(/'use client;/g, "'use client';");
  content = content.replace(/import React from 'react;/g, "import React from 'react';");
  content = content.replace(/import { ([^}]+) } from '([^']*);/g, "import { $1 } from '$2';");
  content = content.replace(/import ([^'"]+) from '([^']*);/g, "import $1 from '$2';");
  
  // Fix specific patterns found in the error output
  content = content.replace(/import { ([^}]+) } from '([^']*);/g, "import { $1 } from '$2';");
  content = content.replace(/import ([^'"]+) from '([^']*);/g, "import $1 from '$2';");
  
  // Fix JSX patterns
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
  
  // Fix string literals in object properties
  content = content.replace(/(\w+):\s*'([^']*);/g, (match, key, value) => {
    return `${key}: '${value}';`;
  });
  
  content = content.replace(/(\w+):\s*"([^"]*);/g, (match, key, value) => {
    return `${key}: "${value}";`;
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
  
  // Fix specific patterns found in the error output
  content = content.replace(/const\s+(\w+)\s*=\s*'([^']*);/g, (match, varName, value) => {
    return `const ${varName} = '${value}';`;
  });
  
  content = content.replace(/const\s+(\w+)\s*=\s*"([^"]*);/g, (match, varName, value) => {
    return `const ${varName} = "${value}";`;
  });
  
  // Fix let declarations
  content = content.replace(/let\s+(\w+)\s*=\s*'([^']*);/g, (match, varName, value) => {
    return `let ${varName} = '${value}';`;
  });
  
  content = content.replace(/let\s+(\w+)\s*=\s*"([^"]*);/g, (match, varName, value) => {
    return `let ${varName} = "${value}";`;
  });
  
  // Fix var declarations
  content = content.replace(/var\s+(\w+)\s*=\s*'([^']*);/g, (match, varName, value) => {
    return `var ${varName} = '${value}';`;
  });
  
  content = content.replace(/var\s+(\w+)\s*=\s*"([^"]*);/g, (match, varName, value) => {
    return `var ${varName} = "${value}";`;
  });
  
  // Fix return statements
  content = content.replace(/return\s+'([^']*);/g, (match, value) => {
    return `return '${value}';`;
  });
  
  content = content.replace(/return\s+"([^"]*);/g, (match, value) => {
    return `return "${value}";`;
  });
  
  // Fix throw statements
  content = content.replace(/throw\s+'([^']*);/g, (match, value) => {
    return `throw '${value}';`;
  });
  
  content = content.replace(/throw\s+"([^"]*);/g, (match, value) => {
    return `throw "${value}";`;
  });
  
  // Fix specific patterns from the error output
  content = content.replace(/const\s+(\w+)\s*=\s*'([^']*);/g, (match, varName, value) => {
    return `const ${varName} = '${value}';`;
  });
  
  content = content.replace(/const\s+(\w+)\s*=\s*"([^"]*);/g, (match, varName, value) => {
    return `const ${varName} = "${value}";`;
  });
  
  // Fix specific patterns found in the error output
  content = content.replace(/const\s+(\w+)\s*=\s*'([^']*);/g, (match, varName, value) => {
    return `const ${varName} = '${value}';`;
  });
  
  content = content.replace(/const\s+(\w+)\s*=\s*"([^"]*);/g, (match, varName, value) => {
    return `const ${varName} = "${value}";`;
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Apply fixes
    fixedContent = fixSpecificPatterns(fixedContent);
    
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

module.exports = { fixSpecificPatterns, processFile };