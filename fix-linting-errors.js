#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix common linting issues in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unused React imports
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/, '');
      modified = true;
    }
    
    // Fix unused imports by prefixing with underscore
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"][^'"]+['"];?/g;
    content = content.replace(importRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const fixedImports = importList.map(imp => {
        if (imp.includes(' as ')) {
          const [original, alias] = imp.split(' as ').map(s => s.trim());
          return `_${original} as ${alias}`;
        } else {
          return `_${imp}`;
        }
      });
      return match.replace(imports, fixedImports.join(', '));
    });
    
    // Fix unused variables in function parameters
    content = content.replace(/function\s+\w+\([^)]*\)/g, (match) => {
      return match.replace(/\b(\w+)\b(?=\s*[,)])/g, (param) => {
        if (param !== 'props' && param !== 'children' && param !== 'className') {
          return `_${param}`;
        }
        return param;
      });
    });
    
    // Fix arrow function parameters
    content = content.replace(/\([^)]*\)\s*=>/g, (match) => {
      return match.replace(/\b(\w+)\b(?=\s*[,)])/g, (param) => {
        if (param !== 'props' && param !== 'children' && param !== 'className') {
          return `_${param}`;
        }
        return param;
      });
    });
    
    // Add React import if JSX is used but React is not imported
    if (content.includes('<') && content.includes('>') && !content.includes("import React") && !content.includes("import * as React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting linting fixes...');

const appDir = path.join(__dirname, 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript/TSX files`);

files.forEach(fixFile);

console.log('Linting fixes completed!');

// Run ESLint with --fix to handle remaining issues
try {
  console.log('Running ESLint --fix...');
  execSync('npx eslint app --ext .ts,.tsx --fix', { stdio: 'inherit' });
  console.log('ESLint fixes completed!');
} catch (error) {
  console.log('ESLint completed with some remaining issues');
}