#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all .tsx files in the app directory
const findTsxFiles = () => {
  try {
    const result = execSync('find app -name "*.tsx" -type f', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.error('Error finding .tsx files:', error.message);
    return [];
  }
};

// Fix unused React imports
const fixUnusedReactImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if React is imported but not used (no JSX)
    const hasReactImport = content.includes("import React from 'react';");
    const hasJSX = content.includes('<') && content.includes('>');
    const hasReactUsage = content.includes('React.') || content.includes('React.createElement');

    if (hasReactImport && !hasJSX && !hasReactUsage) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.warn(`Fixed unused React import: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Fix unused Helmet imports
const fixUnusedHelmetImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const hasHelmetImport = content.includes("import { Helmet } from 'react-helmet-async';");
    const usesHelmet = content.includes('<Helmet') || content.includes('Helmet.');

    if (hasHelmetImport && !usesHelmet) {
      content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.warn(`Fixed unused Helmet import: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
console.warn('Fixing unused imports...');
const tsxFiles = findTsxFiles();
let fixedCount = 0;

tsxFiles.forEach(file => {
  if (fixUnusedReactImports(file)) {
    fixedCount++;
  }
  if (fixUnusedHelmetImports(file)) {
    fixedCount++;
  }
});

console.warn(`Fixed ${fixedCount} files with unused imports.`);