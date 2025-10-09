#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      // Remove merge conflict markers and keep the HEAD version (first part)
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======\n?[\s\S]*?>>>>>>> [^\n]+\n?/g, '');
      modified = true;
    }

    // Fix common syntax errors
    // Fix duplicate imports with missing commas
    content = content.replace(/(import\s*{[^}]+)\s*,\s*([^}]+)\s*,\s*([^}]+)\s*from\s*['"][^'"]+['"];?/g, (match, p1, p2, p3) => {
      // Clean up the import statement
      const cleanImports = p1 + ', ' + p2 + ', ' + p3;
      return cleanImports.replace(/,\s*,/g, ',').replace(/,\s*}/g, '}');
    });

    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*([^,\n}]+)\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix duplicate property names in objects
    content = content.replace(/(\w+):\s*([^,\n}]+)\s*,\s*\1:/g, '$1: $2,');
    
    // Fix missing commas after object properties
    content = content.replace(/(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix array syntax errors
    content = content.replace(/\[\s*{\s*,\s*name:/g, '[{\n    name:');
    
    // Fix object syntax errors
    content = content.replace(/{\s*,\s*name:/g, '{\n    name:');
    
    // Fix trailing commas in objects
    content = content.replace(/,(\s*})/g, '$1');
    
    // Fix missing commas in function parameters
    content = content.replace(/(\w+)\s+(\w+)\s*\)/g, '$1, $2)');
    
    // Fix duplicate imports
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
    const uniqueImports = [...new Set(importLines)];
    if (importLines.length !== uniqueImports.length) {
      const nonImportLines = content.split('\n').filter(line => !line.trim().startsWith('import'));
      content = uniqueImports.join('\n') + '\n' + nonImportLines.join('\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const srcDir = path.join(__dirname, 'src');
const files = findSourceFiles(srcDir);

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} source files to check...`);

for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} out of ${totalFiles} files.`);

// Run linting to check if there are still errors
console.log('\nRunning linting check...');
try {
  execSync('npm run lint', { stdio: 'pipe' });
  console.log('✅ Linting passed!');
} catch (error) {
  console.log('❌ Linting still has errors. Running additional fixes...');
  
  // Try to fix remaining issues
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Additional fixes for common issues
      
      // Fix missing commas in object literals
      content = content.replace(/(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
      
      // Fix array syntax
      content = content.replace(/\[\s*{\s*,\s*/g, '[{\n    ');
      
      // Fix object syntax
      content = content.replace(/{\s*,\s*/g, '{\n    ');
      
      // Fix duplicate property names
      const lines = content.split('\n');
      const seenProps = new Set();
      const fixedLines = lines.map(line => {
        const propMatch = line.match(/^\s*(\w+):/);
        if (propMatch) {
          const propName = propMatch[1];
          if (seenProps.has(propName)) {
            return ''; // Remove duplicate property
          }
          seenProps.add(propName);
        }
        return line;
      });
      
      content = fixedLines.join('\n');
      
      if (content !== fs.readFileSync(file, 'utf8')) {
        fs.writeFileSync(file, content, 'utf8');
        modified = true;
      }
      
      if (modified) {
        console.log(`Additional fixes applied to: ${file}`);
      }
    } catch (err) {
      console.error(`Error in additional fixes for ${file}:`, err.message);
    }
  }
}

console.log('\nMerge conflict resolution completed!');