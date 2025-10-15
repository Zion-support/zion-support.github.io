#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all TypeScript/JSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if it's a script file
    if (filePath.includes('scripts/') || filePath.includes('.js') || filePath.includes('.cjs')) {
      return;
    }
    
    // Fix the pattern: export default function Name() { return; }, [array]
    const functionPattern = /export default function\s+(\w+)\s*\(\s*\)\s*{\s*return;\s*},?\s*(\[.*?\])/s;
    const match = content.match(functionPattern);
    
    if (match) {
      const functionName = match[1];
      const arrayContent = match[2];
      
      // Find where the array ends and the rest of the function begins
      const arrayEndIndex = content.indexOf(arrayContent) + arrayContent.length;
      const afterArray = content.substring(arrayEndIndex);
      
      // Find the start of the function
      const functionStartIndex = content.indexOf('export default function');
      const beforeFunction = content.substring(0, functionStartIndex);
      
      // Reconstruct the function properly
      const newContent = beforeFunction + 
        `export default function ${functionName}() {\n` +
        `  const features = ${arrayContent};\n` +
        afterArray;
      
      content = newContent;
      
      console.log(`Fixed syntax in: ${filePath}`);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting syntax error fix...');

const appDir = path.join(__dirname, 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  fixSyntaxErrors(file);
});

console.log('Syntax error fixing completed!');