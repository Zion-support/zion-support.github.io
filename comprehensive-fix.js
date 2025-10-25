<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Fix "use client" directive
    content = content.replace(/"use client",\n/g, '"use client";\n');
    content = content.replace(/'use client',\n/g, "'use client";\n');

    // Fix interface definitions with missing closing braces
    content = content.replace(/interface\s+(\w+)\s*\{([^}]*?)(\n\s*const|\n\s*function|\n\s*export|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)/g, (match, name, body, next) => {
      if (!body.trim().endsWith('}')) {
        return `interface ${name} {${body}\n}\n${next}`;
      }
      return match;
    });

    // Fix class definitions with missing closing braces
    content = content.replace(/class\s+(\w+)[^{]*\{([^}]*?)(\n\s*const|\n\s*function|\n\s*export|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)/g, (match, name, body, next) => {
      if (!body.trim().endsWith('}')) {
        return `class ${name} {${body}\n}\n${next}`;
      }
      return match;
    });

    // Fix extra commas in interface properties
    content = content.replace(/(\w+):\s*([^;,\n]+),(\s*\n\s*[a-zA-Z_])/g, '$1: $2;\n$3');
    content = content.replace(/(\w+):\s*([^;,\n]+),(\s*\n\s*})/g, '$1: $2;\n$3');

    // Fix missing semicolons after variable declarations
    content = content.replace(/(\w+):\s*([^;,\n]+)(\s*\n\s*[a-zA-Z_])/g, '$1: $2;\n$3');
    content = content.replace(/(\w+):\s*([^;,\n]+)(\s*\n\s*})/g, '$1: $2;\n$3');

    // Fix missing closing braces in object literals
    content = content.replace(/(\w+):\s*([^}]*?)(\n\s*[a-zA-Z_])/g, (match, key, value, next) => {
      if (!value.trim().endsWith('}') && !value.trim().endsWith(';')) {
        return `${key}: ${value};\n${next}`;
      }
      return match;
    });

    // Fix missing closing parentheses in function calls
    content = content.replace(/(\w+)\s*\(([^)]*?)(\n\s*[a-zA-Z_])/g, '$1($2);\n$3');

    // Fix missing closing braces in function definitions
    content = content.replace(/(\w+)\s*\([^)]*\)\s*:\s*[^{]*\{([^}]*?)(\n\s*[a-zA-Z_])/g, (match, body, next) => {
      if (!body.trim().endsWith('}')) {
        return `${match.substring(0, match.lastIndexOf(body))}${body}\n}\n${next}`;
      }
      return match;
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
=======
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix comprehensive syntax errors
function fixComprehensiveErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix malformed object properties
    content = content.replace(/description: '[^']*'\}\}\s*\]\s*\]\s*;/g, "description: 'Seamless integration with CI/CD pipelines and DevOps tools for streamlined operations.'\n    }\n  ];");
    
    // Fix malformed JSX elements
    content = content.replace(/<h2>,<\/h2>\s*Why Choose Our Cloud Migration\?\s*,/g, '<h2>Why Choose Our Cloud Migration?</h2>');
    content = content.replace(/<h2 className="[^"]*">,<\/h2>\s*Key Benefits,\s*<\s*\/\s*<h2>/g, '<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Benefits</h2>');
    
    // Fix malformed className attributes
    content = content.replace(/className="text-xltext-gray-300max-w-3xlmx-auto"/g, 'className="text-xl text-gray-300 max-w-3xl mx-auto"');
    content = content.replace(/className="gridgrid-cols-1md:grid-cols-2gap-6"/g, 'className="grid grid-cols-1 md:grid-cols-2 gap-6"');
    content = content.replace(/className="text-3xlmd:text-4xl font-bold text-white mb-4"/g, 'className="text-3xl md:text-4xl font-bold text-white mb-4"');
    
    // Fix malformed array structures
    content = content.replace(/\]\s*;\s*const benefits = \[\s*\]\s*;/g, '];');
    content = content.replace(/\]\s*;\s*const benefits = \[\s*\]/g, '];');
    
    // Fix malformed object declarations
    content = content.replace(/,\s*->\s*price: '\$7,999',\s*|\s*->\s*period: 'per month',/g, ',\n    {\n      name: \'Professional\',\n      price: \'$7,999\',\n      period: \'per month\',');
    
    // Fix malformed import statements
    content = content.replace(/'use client';\s*import React, \{useState\}from 'react';/g, "'use client';\n\nimport React, { useState } from 'react';");
    
    // Fix malformed JSX closing tags
    content = content.replace(/<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,<\/div>/g, '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">');
    
    // Fix malformed array elements
    content = content.replace(/features: \[,\s*/g, 'features: [');
    
    // Fix duplicate semicolons
    content = content.replace(/\]\;\;/g, '];');
    
    // Fix malformed object properties
    content = content.replace(/title: 'Cloud Security'\}\];/g, "title: 'Cloud Security',\n      description: 'Comprehensive security solutions',\n      features: ['Firewall protection', 'Intrusion detection']\n    }];");
    
    // Fix malformed JSX structure
    content = content.replace(/<feature\.icon className="[^"]*" \/>/g, '<feature.icon className="w-12 h-12 text-purple-400 mb-4" />');
    
    // Fix malformed closing tags
    content = content.replace(/<\/div><feature\.icon/g, '<feature.icon');
    content = content.replace(/<\/div><title>/g, '</div>\n        <title>');
    content = content.replace(/<\/Helmet><title>/g, '</Helmet>\n      <title>');
    
    // Fix malformed array structures
    content = content.replace(/\];\s*const\s+benefits\s*=\s*\[\s*},/g, '];\n  const benefits = [');
    
    // Fix malformed object declarations
    content = content.replace(/const\s+benefits\s*=\s*\[\s*;\s*\]\s*;/g, 'const benefits = [];');
    
    // Fix malformed JSX elements
    content = content.replace(/<h2>[^<]*<\/h2>\s*[^<]*\s*<\/h2>/g, '<h2>Why Choose Our Cloud Migration?</h2>');
    
    // Fix malformed className attributes
    content = content.replace(/className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g, (match, before, char1, char2, after) => {
      return `className="${before}${char1} ${char2}${after}"`;
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
>>>>>>> origin/main
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (fixFile(fullPath)) {
          fixedCount++;
          console.log(`Fixed: ${fullPath}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

console.log('Starting comprehensive syntax fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
=======
// Function to find all files with syntax errors
function findFilesWithErrors(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive syntax error fixes...');

const appDir = path.join(process.cwd(), 'app');
const files = findFilesWithErrors(appDir);

let fixedCount = 0;
for (const file of files) {
  if (fixComprehensiveErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Comprehensive syntax error fixes completed!');
>>>>>>> origin/main
