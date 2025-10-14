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

// Fix unused imports in a file
const fixUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Common unused imports to remove
    const unusedImports = [
      'ArrowRight', 'Star', 'TrendingUp', 'Clock', 'Award', 'Home', 'Users', 'Settings',
      'Shield', 'Cloud', 'BarChart3', 'MessageSquare', 'CheckCircle', 'React'
    ];

    // Remove unused imports from lucide-react
    unusedImports.forEach(importName => {
      const importRegex = new RegExp(`import\\s*{[^}]*\\b${importName}\\b[^}]*}\\s*from\\s*['"]lucide-react['"];?\\n?`, 'g');
      if (content.match(importRegex)) {
        // Check if the import is actually used
        const usageRegex = new RegExp(`\\b${importName}\\b`, 'g');
        const matches = content.match(usageRegex);
        if (matches && matches.length === 1) { // Only the import statement
          content = content.replace(importRegex, '');
          modified = true;
        }
      }
    });

    // Remove unused React imports
    const hasReactImport = content.includes("import React from 'react';");
    const hasJSX = content.includes('<') && content.includes('>');
    const hasReactUsage = content.includes('React.') || content.includes('React.createElement');

    if (hasReactImport && !hasJSX && !hasReactUsage) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }

    // Remove unused Helmet imports
    const hasHelmetImport = content.includes("import { Helmet } from 'react-helmet-async';");
    const usesHelmet = content.includes('<Helmet') || content.includes('Helmet.');

    if (hasHelmetImport && !usesHelmet) {
      content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed unused imports: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
console.log('Fixing remaining unused imports...');
const tsxFiles = findTsxFiles();
let fixedCount = 0;

tsxFiles.forEach(file => {
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files with unused imports.`);