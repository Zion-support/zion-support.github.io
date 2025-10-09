#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix JSX tags that were incorrectly prefixed with underscores
function fixJSXTags(content) {
  // Fix JSX opening tags
  content = content.replace(/<(_[a-zA-Z][a-zA-Z0-9]*)/g, (match, tagName) => {
    return `<${tagName.substring(1)}`; // Remove the underscore
  });
  
  // Fix JSX closing tags
  content = content.replace(/<\/(_[a-zA-Z][a-zA-Z0-9]*)>/g, (match, tagName) => {
    return `</${tagName.substring(1)}>`; // Remove the underscore
  });
  
  // Fix self-closing JSX tags
  content = content.replace(/<(_[a-zA-Z][a-zA-Z0-9]*)\s*\/>/g, (match, tagName) => {
    return `<${tagName.substring(1)} />`; // Remove the underscore
  });
  
  return content;
}

// Function to fix variable names that were incorrectly prefixed with underscores in destructuring
function fixDestructuringVariables(content) {
  // Fix destructuring in function parameters
  content = content.replace(/function\s+\w+\s*\([^)]*\)/g, (match) => {
    return match.replace(/\b_([a-zA-Z_$][a-zA-Z0-9_$]*)\b/g, '$1');
  });
  
  // Fix arrow function parameters
  content = content.replace(/\([^)]*\)\s*=>/g, (match) => {
    return match.replace(/\b_([a-zA-Z_$][a-zA-Z0-9_$]*)\b/g, '$1');
  });
  
  // Fix destructuring assignments
  content = content.replace(/const\s*{\s*([^}]+)\s*}\s*=\s*([^;]+);/g, (match, vars, assignment) => {
    const fixedVars = vars.split(',').map(v => {
      const trimmed = v.trim();
      if (trimmed.startsWith('_') && trimmed.length > 1) {
        return trimmed.substring(1);
      }
      return trimmed;
    }).join(', ');
    return `const { ${fixedVars} } = ${assignment};`;
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply fixes
    const originalContent = content;
    
    content = fixJSXTags(content);
    content = fixDestructuringVariables(content);

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting JSX tag fixes...');

const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');
const files = [...findSourceFiles(srcDir), ...findSourceFiles(appDir)];

console.log(`Found ${files.length} files to process`);

let processedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    processedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`Processed ${processedCount} files`);

// Also process root level files
const rootFiles = ['App.tsx', 'main.tsx', 'page.tsx', 'layout.tsx'];
for (const file of rootFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    if (processFile(filePath)) {
      processedCount++;
      console.log(`Fixed: ${file}`);
    }
  }
}

console.log('JSX tag fixes completed!');