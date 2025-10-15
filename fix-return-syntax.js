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

// Fix return syntax errors in a file
function fixReturnSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if it's a script file
    if (filePath.includes('scripts/') || filePath.includes('.js') || filePath.includes('.cjs')) {
      return;
    }
    
    // Check if file has the problematic pattern
    if (!content.includes('return;') || !content.includes('},')) {
      return;
    }
    
    // Find the function declaration
    const functionMatch = content.match(/export default function\s+(\w+)\s*\(\s*\)\s*{\s*return;\s*},?\s*/);
    if (!functionMatch) {
      return;
    }
    
    const functionName = functionMatch[1];
    const functionStart = content.indexOf('export default function');
    const returnEnd = content.indexOf('},');
    
    if (returnEnd === -1) {
      return;
    }
    
    // Find where the array starts after the comma
    let arrayStart = returnEnd + 2; // Skip the "},"
    while (arrayStart < content.length && (content[arrayStart] === ' ' || content[arrayStart] === '\n')) {
      arrayStart++;
    }
    
    // Find where the array ends (look for the closing bracket and semicolon)
    let arrayEnd = arrayStart;
    let bracketCount = 0;
    let foundFirstBracket = false;
    
    while (arrayEnd < content.length) {
      if (content[arrayEnd] === '[') {
        bracketCount++;
        foundFirstBracket = true;
      } else if (content[arrayEnd] === ']') {
        bracketCount--;
        if (foundFirstBracket && bracketCount === 0) {
          // Find the semicolon after the closing bracket
          while (arrayEnd < content.length && content[arrayEnd] !== ';') {
            arrayEnd++;
          }
          if (arrayEnd < content.length) {
            arrayEnd++; // Include the semicolon
          }
          break;
        }
      }
      arrayEnd++;
    }
    
    if (arrayEnd >= content.length) {
      return;
    }
    
    // Extract the array content
    const arrayContent = content.substring(arrayStart, arrayEnd);
    
    // Reconstruct the file
    const beforeFunction = content.substring(0, functionStart);
    const afterArray = content.substring(arrayEnd);
    
    const newContent = beforeFunction + 
      `export default function ${functionName}() {\n` +
      `  const features = ${arrayContent}\n` +
      afterArray;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed return syntax in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting return syntax fix...');

const appDir = path.join(__dirname, 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  fixReturnSyntax(file);
});

console.log('Return syntax fixing completed!');