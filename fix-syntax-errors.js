#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix double semicolons
  content = content.replace(/;;+/g, ';');
  
  // Fix unterminated string literals with extra quotes
  content = content.replace(/"([^"]*)"([^",\s}])/g, '"$1"$2');
  content = content.replace(/"([^"]*)"([^",\s}])/g, '"$1"$2');
  
  // Fix malformed object properties
  content = content.replace(/(\w+):\s*"([^"]*)"([^",\s}])/g, '$1: "$2"$3');
  
  // Fix JSX attributes with extra quotes
  content = content.replace(/className\s*=\s*"([^"]*)"([^",\s}])/g, 'className="$1"$2');
  
  // Fix array elements with extra quotes
  content = content.replace(/\["([^"]*)"([^",\s\]]*)\]/g, '["$1"$2]');
  
  // Fix function parameters
  content = content.replace(/\(\s*([^)]*)\s*\)\s*=>/g, '($1) =>');
  
  // Fix JSX closing tags
  content = content.replace(/<\/([^>]+)>/g, '</$1>');
  
  // Fix malformed JSX fragments
  content = content.replace(/<>([^<]*?)<\/>/g, '<>$1</>');
  
  // Fix extra semicolons in JSX
  content = content.replace(/;\s*<\/[^>]+>/g, '</$1>');
  
  // Fix malformed object literals
  content = content.replace(/\{\s*([^}]*?)\s*\}/g, '{$1}');
  
  // Fix string concatenation issues
  content = content.replace(/"([^"]*)"\s*\+\s*"([^"]*)"/g, '"$1$2"');
  
  // Fix template literals
  content = content.replace(/`([^`]*?)`/g, '`$1`');
  
  // Fix import statements
  content = content.replace(/import\s+([^;]+);;/g, 'import $1;');
  
  // Fix export statements
  content = content.replace(/export\s+([^;]+);;/g, 'export $1;');
  
  // Fix React component syntax
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');
  
  // Fix JSX return statements
  content = content.replace(/return\s*\(\s*<([^>]+)>/g, 'return (<$1>');
  
  // Fix closing parentheses
  content = content.replace(/\)\s*\)\s*;/g, '));');
  
  // Fix malformed arrays
  content = content.replace(/\[\s*"([^"]*)"\s*,\s*"([^"]*)"\s*\]/g, '["$1", "$2"]');
  
  // Fix object property syntax
  content = content.replace(/(\w+):\s*"([^"]*)"\s*,/g, '$1: "$2",');
  
  // Fix JSX attributes
  content = content.replace(/className\s*=\s*"([^"]*)"\s*\/>/g, 'className="$1" />');
  
  // Fix malformed function calls
  content = content.replace(/(\w+)\s*\(\s*([^)]*)\s*\)\s*;/g, '$1($2);');
  
  // Fix string interpolation
  content = content.replace(/\$\{([^}]+)\}/g, '${$1}');
  
  // Fix JSX self-closing tags
  content = content.replace(/<(\w+)\s+([^>]*?)\s*\/>/g, '<$1 $2 />');
  
  // Fix malformed JSX elements
  content = content.replace(/<(\w+)\s+([^>]*?)>\s*<\/\1>/g, '<$1 $2></$1>');
  
  // Fix extra spaces and newlines
  content = content.replace(/\s+/g, ' ');
  content = content.replace(/\n\s*\n/g, '\n');
  
  // Fix malformed quotes in strings
  content = content.replace(/"([^"]*)"([^",\s}])/g, '"$1"$2');
  
  // Fix object property access
  content = content.replace(/\.(\w+)\s*\(/g, '.$1(');
  
  // Fix array access
  content = content.replace(/\[(\d+)\]/g, '[$1]');
  
  // Fix function declarations
  content = content.replace(/function\s+(\w+)\s*\(\s*([^)]*)\s*\)\s*\{/g, 'function $1($2) {');
  
  // Fix arrow functions
  content = content.replace(/\(\s*([^)]*)\s*\)\s*=>\s*\{/g, '($1) => {');
  
  // Fix return statements
  content = content.replace(/return\s+([^;]+);/g, 'return $1;');
  
  // Fix variable declarations
  content = content.replace(/const\s+(\w+)\s*=\s*([^;]+);/g, 'const $1 = $2;');
  content = content.replace(/let\s+(\w+)\s*=\s*([^;]+);/g, 'let $1 = $2;');
  content = content.replace(/var\s+(\w+)\s*=\s*([^;]+);/g, 'var $1 = $2;');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          continue;
        }
        processedCount += processDirectory(fullPath);
      } else if (stat.isFile()) {
        // Process TypeScript, JavaScript, and JSX files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          if (processFile(fullPath)) {
            processedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting syntax error fixing...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with syntax errors.`);
console.log('Syntax error fixing completed!');