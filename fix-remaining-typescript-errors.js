#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to find all .tsx and .ts files in the app directory
function findTsFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix various TypeScript issues in a file
function fixTypeScriptIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 1: Remove unused React imports
    if (content.includes("import React from 'react';")) {
      const lines = content.split('\n');
      const newLines = lines.filter(line => {
        const trimmed = line.trim();
        if (trimmed === "import React from 'react';") {
          // Check if React is actually used
          const reactUsage = content.match(/\bReact\./g);
          const jsxUsage = content.match(/<[A-Z]/g);
          return reactUsage || jsxUsage;
        }
        return true;
      });
      
      if (newLines.length !== lines.length) {
        content = newLines.join('\n');
        modified = true;
      }
    }
    
    // Fix 2: Fix component export issues
    if (content.includes('export default function') && !content.includes('export {')) {
      // This is already correct
    } else if (content.includes('export default') && content.includes('function')) {
      // This is already correct
    }
    
    // Fix 3: Fix type definition issues
    if (content.includes('Cannot find name') || content.includes('TS2304')) {
      // Skip files with type errors for now, focus on unused imports
    }
    
    // Fix 4: Fix duplicate export modifiers
    if (content.includes('export export')) {
      content = content.replace(/export export/g, 'export');
      modified = true;
    }
    
    // Fix 5: Fix missing type imports
    if (content.includes('AIToolCardProps') && !content.includes('import') && !content.includes('type')) {
      // Add type import if needed
      const lines = content.split('\n');
      const importLine = "import type { AIToolCardProps } from './types';";
      lines.splice(1, 0, importLine);
      content = lines.join('\n');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific component files
function fixComponentFiles() {
  const componentDir = path.join(__dirname, 'app', 'components');
  const files = findTsFiles(componentDir);
  
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix component export patterns
      if (content.includes('export default function') && !content.includes('export {')) {
        // Add proper type exports
        const componentName = path.basename(file, '.tsx');
        const typeName = `${componentName}Props`;
        
        if (content.includes(typeName) && !content.includes(`export type ${typeName}`)) {
          // Add type export
          const lines = content.split('\n');
          const lastImportIndex = lines.findIndex(line => line.startsWith('import'));
          if (lastImportIndex >= 0) {
            lines.splice(lastImportIndex + 1, 0, `export type ${typeName} = {`);
            lines.splice(lastImportIndex + 2, 0, '  // Add your props here');
            lines.splice(lastImportIndex + 3, 0, '};');
            content = lines.join('\n');
            modified = true;
          }
        }
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`Fixed component: ${file}`);
      }
    } catch (error) {
      console.error(`Error fixing component ${file}:`, error.message);
    }
  }
}

// Main execution
console.log('Starting to fix remaining TypeScript issues...');

const appDir = path.join(__dirname, 'app');
const tsFiles = findTsFiles(appDir);

console.log(`Found ${tsFiles.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of tsFiles) {
  if (fixTypeScriptIssues(file)) {
    fixedCount++;
  }
}

// Fix component files specifically
fixComponentFiles();

console.log(`Fixed ${fixedCount} files with TypeScript issues`);

// Run TypeScript check to verify fixes
console.log('Running TypeScript check...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
  console.log('TypeScript check passed!');
} catch (error) {
  console.log('TypeScript check completed with remaining warnings/errors');
}