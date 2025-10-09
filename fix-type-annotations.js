#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix malformed type annotations
function fixTypeAnnotations(content) {
  // Fix malformed type annotations with comments inside
  content = content.replace(
    /\{\/\*\/\s*([^}]+)\s*\/\*\/\}/g,
    (match, body) => {
      return `{ ${body.trim()} }`;
    }
  );

  // Fix specific patterns we've seen
  content = content.replace(
    /\{\/\*\/\s*usedJSHeapSize:\s*number\s*\/\*\/\}/g,
    '{ usedJSHeapSize: number }'
  );

  content = content.replace(
    /\{\/\*\/\s*value:\s*number\s*\/\*\/\}/g,
    '{ value: number }'
  );

  // Fix variable name issues
  content = content.replace(
    /const _memory = \([^)]+\)\.memory;\s*memoryUsage = memory\?/g,
    'const _memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;\n          memoryUsage = _memory?.'
  );

  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply fixes
    const originalContent = content;
    
    content = fixTypeAnnotations(content);

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
console.log('Starting type annotation fixes...');

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
console.log('Type annotation fixes completed!');