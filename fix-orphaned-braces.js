#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Pattern to find all JSX files
const jsxFiles = glob.sync('app/**/*.tsx', { cwd: process.cwd() });

console.log(`Found ${jsxFiles.length} JSX files to process...`);

let fixedFiles = 0;
let totalFixes = 0;

jsxFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fileFixes = 0;

    // Fix orphaned opening braces
    content = content.replace(/^\s*{\s*$/gm, '');
    content = content.replace(/^\s*{\s*<div/gm, '<div');
    content = content.replace(/^\s*{\s*<section/gm, '<section');
    content = content.replace(/^\s*{\s*<main/gm, '<main');
    content = content.replace(/^\s*{\s*<nav/gm, '<nav');
    content = content.replace(/^\s*{\s*<header/gm, '<header');
    content = content.replace(/^\s*{\s*<footer/gm, '<footer');
    
    // Fix orphaned closing braces
    content = content.replace(/^\s*}\s*$/gm, '');
    content = content.replace(/<\/div>\s*}\s*$/gm, '</div>');
    content = content.replace(/<\/section>\s*}\s*$/gm, '</section>');
    content = content.replace(/<\/main>\s*}\s*$/gm, '</main>');
    content = content.replace(/<\/nav>\s*}\s*$/gm, '</nav>');
    content = content.replace(/<\/header>\s*}\s*$/gm, '</header>');
    content = content.replace(/<\/footer>\s*}\s*$/gm, '</footer>');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fileFixes = 1;
      totalFixes += fileFixes;
      fixedFiles++;
      console.log(`Fixed ${fileFixes} issues in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${totalFixes} orphaned brace issues across ${fixedFiles} files.`);