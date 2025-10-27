#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to find all .tsx files in the app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix unused React imports in a file
function fixUnusedReactImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has unused React import
    const lines = content.split('\n');
    const firstLine = lines[0]?.trim();
    const secondLine = lines[1]?.trim();
    
    // Pattern: import React from 'react';
    if (firstLine === "import React from 'react';" || secondLine === "import React from 'react';") {
      // Check if React is actually used in the file
      const reactUsage = content.match(/\bReact\./g);
      const jsxUsage = content.match(/<[A-Z]/g);
      
      // If React is not used, remove the import
      if (!reactUsage && !jsxUsage) {
        if (firstLine === "import React from 'react';") {
          lines.splice(0, 1);
        } else if (secondLine === "import React from 'react';") {
          lines.splice(1, 1);
        }
        
        content = lines.join('\n');
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused React import in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting to fix unused React imports...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixUnusedReactImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files with unused React imports`);

// Run TypeScript check to verify fixes
console.log('Running TypeScript check...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
  console.log('TypeScript check passed!');
} catch (error) {
  console.log('TypeScript check completed with warnings/errors');
}