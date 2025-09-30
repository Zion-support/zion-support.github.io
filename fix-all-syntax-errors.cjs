#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix malformed import statements;
function fixMalformedImports(content) {
  // Fix patterns like: import React from 'react';
import;
  content = content.replace(/import\s+([^]+);import/g, 'import $1;\nimport');

  // Fix patterns like: ';'import;
  content = content.replace(/';\s*'import/g, "';\nimport");

  // Fix patterns like: ';'const;
  content = content.replace(/';\s*'const/g, "';\n\nconst");

  // Fix patterns like: ';'interface;
  content = content.replace(/';\s*'interface/g, "';\n\ninterface");

  // Fix patterns like: ';'export;
  content = content.replace(/';\s*'export/g, "';\n\nexport");

  // Fix patterns like: ';'function;
  content = content.replace(/';\s*'function/g, "';\n\nfunction");

  // Fix patterns like: ';'class;
  content = content.replace(/';\s*'class/g, "';\n\nclass");

  // Fix patterns like: ';'type;
  content = content.replace(/';\s*'type/g, "';\n\ntype");

  // Fix malformed import statements with missing quotes;
  content = content.replace(/import\s+{\s*;\s*/g, 'import {\n  ');

  return content}

// Function to fix specific file issues;
function fixSpecificFileIssues(filePath, content) {
  // Fix react-router-dom imports in Next.js files;
  if (content.includes('react-router-dom')) {
    content = content.replace(
      /import\s+{\s*Link\s*}\s+from\s+'react-router-dom';/g,
      "import Link from 'next/link';"
    );
    content = content.replace(
      /import\s+{\s*useLocation\s*}\s+from\s+'react-router-dom';/g,
      "import { useRouter } from 'next/router';"
    )}

  return content}

// List of files to fix;
const filesToFix = [
  'components/AccessibilityEnhancer.tsx',
  'components/PerformanceOptimizer.tsx',
  'components/SEOEnhancer.tsx',
  'components/layout/Footer.tsx',
  `components/layout/Header.tsx` ];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return}

    // Fix common syntax errors
    const fixes = [
      // Remove extra commas and semicolons
      { pattern: /,\s*;/g, replacement: ';' },
      { pattern: /,\s*,/g, replacement: ',' },
      { pattern: /;\s*,/g, replacement: ';' },
      { pattern: /,\s*$/gm, replacement: '' },
      { pattern: /;\s*$/gm, replacement: ';' },
      
      // Fix object syntax
      { pattern: /{\s*,/g, replacement: '{' },
      { pattern: /,\s*}/g, replacement: '}' },
      { pattern: /\[\s*,/g, replacement: '[' },
      { pattern: /,\s*\]/g, replacement: ']' },
      
      // Fix function parameters
      { pattern: /\(\s*,/g, replacement: '(' },
      { pattern: /,\s*\)/g, replacement: ')' },
      
      // Fix import statements
      { pattern: /import\s+([^;]+),\s*;/g, replacement: 'import $1;' },
      
      // Fix JSX syntax
      { pattern: /<\s*,/g, replacement: '<' },
      { pattern: /,\s*>/g, replacement: '>' },
      { pattern: /{\s*,/g, replacement: '{' },
      { pattern: /,\s*}/g, replacement: '}' },
      
      // Remove empty lines with just commas or semicolons
      { pattern: /^\s*[,;]+\s*$/gm, replacement: '' },
      
      // Fix trailing commas in objects and arrays
      { pattern: /,\s*}/g, replacement: '}' },
      { pattern: /,\s*\]/g, replacement: ']' },
      { pattern: /,\s*\)/g, replacement: ')' },
    ];

    // Apply general fixes;
    content = fixMalformedImports(content);
    content = fixSpecificFileIssues(filePath, content);

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`)} else {
      console.log(`No fixes needed: ${filePath}`)}
  } catch (error) { 
    console.error(`Error fixing ${filePath }:`, error.message)}
}

// Fix all files;
console.log(`Starting comprehensive syntax error fixes...`);
filesToFix.forEach(fixFile);

// Also check for any other files with similar patterns;
const componentsDir = 'components';
if (fs.existsSync(componentsDir)) {
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          if (
            content.includes("';'import") ||
            content.includes("';'const") ||
            content.includes("`;`interface")
          ) {
            console.log(
              `Found additional file with syntax errors: ${filePath}`
            );
            fixFile(filePath)}
        } catch (error) { 
          // Skip files that can`t be read}
      }
    })}

  walkDir(componentsDir)}

// Function to recursively find files
function findFiles(dir, extensions) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'out', 'coverage'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive syntax fix...');

const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const files = findFiles('.', extensions);

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixFile(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nFix complete!`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Total files processed: ${files.length}`);