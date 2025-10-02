#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Skip node_modules and other build directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      // Only process TypeScript/JavaScript files
      if (file.match(/\.(ts|tsx|js|jsx)$/)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers
    const originalContent = content;
    
    // Remove <<<<<<< HEAD
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    
    // Remove =======
    content = content.replace(/=======\n?/g, '');
    
    // Remove >>>>>>> [commit hash or branch name]
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Fix common syntax errors
    // Fix unterminated string literals
    content = content.replace(/';$/gm, "'");
    content = content.replace(/";$/gm, '"');
    content = content.replace(/`;$/gm, '`');
    
    // Fix trailing commas in objects/arrays
    content = content.replace(/,,\s*}/g, '}');
    content = content.replace(/,,\s*]/g, ']');
    content = content.replace(/,,\s*\)/g, ')');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+)\s*=\s*([^,\n}]+)\s*\n\s*(\w+)/g, '$1: $2,\n  $3');
    
    // Fix enum syntax errors
    content = content.replace(/enum\s+(\w+)\s*{\s*([^}]+)\s*}/g, (match, enumName, body) => {
      const fixedBody = body
        .split('\n')
        .map(line => {
          line = line.trim();
          if (line && !line.includes('=') && !line.includes(',')) {
            return line + ' = "' + line.toLowerCase().replace(/_/g, '-') + '",';
          }
          return line;
        })
        .join('\n');
      return `enum ${enumName} {\n  ${fixedBody}\n}`;
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting merge conflict resolution...');

const allFiles = getAllFiles('./src');
let fixedCount = 0;

allFiles.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files with merge conflicts or syntax errors.`);
console.log('Merge conflict resolution complete!');