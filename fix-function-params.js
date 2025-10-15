import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix function parameter syntax errors
function fixFunctionParams(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix function parameters with underscore prefixes
    content = content.replace(/\(_\{([^}]+)\}\)/g, '({$1})');
    content = content.replace(/\(_\(([^)]+)\)/g, '(($1)');
    
    // Fix destructuring with underscore prefixes
    content = content.replace(/\{_([^}]+)\}/g, '{$1}');
    
    // Fix variable declarations with underscore prefixes that shouldn't be there
    content = content.replace(/const\s+_([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g, 'const $1 =');
    content = content.replace(/let\s+_([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g, 'let $1 =');
    content = content.replace(/var\s+_([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g, 'var $1 =');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed function params: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process all TypeScript/JavaScript files
function processFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFunctionParams(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Process the app directory
console.log('Starting fix of function parameter syntax errors...');
const fixedCount = processFiles('./app');
console.log(`Fixed ${fixedCount} files.`);