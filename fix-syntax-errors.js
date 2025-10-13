#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix unclosed JSX elements by adding proper closing tags
  // This is a simplified approach - in practice, you'd want more sophisticated parsing
  
  // Fix common patterns like unclosed divs, sections, etc.
  const openTags = ['div', 'section', 'h1', 'h2', 'h3', 'p', 'span', 'ul', 'li', 'article', 'main', 'header', 'footer'];
  
  for (const tag of openTags) {
    // Look for unclosed tags and try to close them
    const openTagRegex = new RegExp(`<${tag}([^>]*)>`, 'g');
    const closeTagRegex = new RegExp(`</${tag}>`, 'g');
    
    const openMatches = [...fixed.matchAll(openTagRegex)];
    const closeMatches = [...fixed.matchAll(closeTagRegex)];
    
    if (openMatches.length > closeMatches.length) {
      // Add missing closing tags at the end
      const missing = openMatches.length - closeMatches.length;
      for (let i = 0; i < missing; i++) {
        fixed += `</${tag}>`;
      }
    }
  }
  
  // Fix JSX fragments
  fixed = fixed.replace(/<>/g, '<React.Fragment>');
  fixed = fixed.replace(/<\/>/g, '</React.Fragment>');
  
  // Fix common syntax issues
  fixed = fixed.replace(/\{\s*>\s*\}/g, '>');
  fixed = fixed.replace(/\{\s*<\s*\}/g, '<');
  fixed = fixed.replace(/\{\s*\/\s*\}/g, '/');
  
  return fixed;
}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
<<<<<<< HEAD
    console.error(`Error fixing ${filePath}:`, error.message);
=======
    console.error(`Error processing ${filePath}:`, error.message);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
    return false;
  }
}

<<<<<<< HEAD
// Function to find all problematic files
function findProblematicFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
=======
// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
<<<<<<< HEAD
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
=======
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
      }
    }
  }
  
<<<<<<< HEAD
  scanDirectory(dir);
=======
  traverse(dir);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
  return files;
}

// Main execution
<<<<<<< HEAD
const workspaceDir = process.cwd();
const files = findProblematicFiles(workspaceDir);

console.log(`Found ${files.length} JSX files to check for syntax errors...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
=======
console.log('Starting syntax error fixes...');

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
    fixedCount++;
  }
}

<<<<<<< HEAD
console.log(`Fixed syntax errors in ${fixedCount} files.`);
=======
console.log(`Fixed syntax errors in ${fixedCount} files`);

// Also fix the main App.tsx file
if (fixSyntaxErrors(path.join(__dirname, 'App.tsx'))) {
  fixedCount++;
}

console.log(`Total files fixed: ${fixedCount}`);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
