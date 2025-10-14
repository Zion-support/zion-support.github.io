#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors in JSX/TSX files
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix duplicate closing tags (like </Helmet> appearing twice)
  fixed = fixed.replace(/(<\/[A-Za-z]+>)\s*<\/[A-Za-z]+>/g, '$1');

  // Fix unterminated strings in object properties
  fixed = fixed.replace(/(\w+):\s*,/g, '$1: \'\',');

  // Fix missing quotes in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}\s][^,}]*?)(?=\s*[,}])/g, (match, key, value) => {
    if (!value.startsWith('"') && !value.startsWith("'") && !value.startsWith('`')) {
      return `${key}: '${value.trim()}'`;
    }
    return match;
  });

  // Fix unterminated strings in JSX attributes
  fixed = fixed.replace(/(\w+)="([^"]*?)(?=\s*[>\/])/g, (match, attr, value) => {
    if (!value.endsWith('"')) {
      return `${attr}="${value}"`;
    }
    return match;
  });

  // Fix missing closing quotes in JSX attributes
  fixed = fixed.replace(/(\w+)="([^"]*?)(?=\s*[>\/])/g, (match, attr, value) => {
    if (!value.endsWith('"')) {
      return `${attr}="${value}"`;
    }
    return match;
  });

  // Fix missing closing tags for common elements
  const commonTags = ['div', 'section', 'form', 'ul', 'li', 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  
  commonTags.forEach(tag => {
    // Fix missing closing tags at the end of files
    const openTagRegex = new RegExp(`<${tag}[^>]*>`, 'g');
    const closeTagRegex = new RegExp(`</${tag}>`, 'g');
    
    const openMatches = (fixed.match(openTagRegex) || []).length;
    const closeMatches = (fixed.match(closeTagRegex) || []).length;
    
    if (openMatches > closeMatches) {
      const missing = openMatches - closeMatches;
      for (let i = 0; i < missing; i++) {
        fixed += `</${tag}>`;
      }
    }
  });

  // Fix JSX fragments - ensure proper opening and closing
  const fragmentOpenMatches = (fixed.match(/<>/g) || []).length;
  const fragmentCloseMatches = (fixed.match(/<\/>/g) || []).length;
  
  if (fragmentOpenMatches > fragmentCloseMatches) {
    const missing = fragmentOpenMatches - fragmentCloseMatches;
    for (let i = 0; i < missing; i++) {
      fixed += '</>';
    }
  }

  // Fix specific patterns found in the files
  fixed = fixed.replace(/import React, { useState } from "react;/g, 'import React, { useState } from "react";');
  fixed = fixed.replace(/name: ,'/g, "name: '',");
  fixed = fixed.replace(/email: ,'/g, "email: '',");
  fixed = fixed.replace(/company: ,'/g, "company: '',");
  fixed = fixed.replace(/message: /g, "message: ''");
  
  // Fix unterminated strings in descriptions
  fixed = fixed.replace(/description: '([^']*?)(?=\s*[,}])/g, (match, desc) => {
    if (!desc.endsWith("'")) {
      return `description: '${desc}'`;
    }
    return match;
  });

  // Fix console.log with unterminated strings
  fixed = fixed.replace(/console\.log\('([^']*?)(?=\s*;)/g, (match, msg) => {
    if (!msg.endsWith("'")) {
      return `console.log('${msg}');`;
    }
    return match;
  });

  // Fix JSX structure issues
  fixed = fixed.replace(/<>\s*<\/>/g, '');
  fixed = fixed.replace(/<>\s*<section/g, '<section');
  fixed = fixed.replace(/<\/section>\s*<\/>/g, '</section>');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all files
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '**/*.tsx',
    '**/*.ts'
  ];

  let totalFiles = 0;
  let fixedFiles = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'build/**']
    });

    files.forEach(file => {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    });
  }

  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };