import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix lazy function syntax errors
function fixLazySyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix lazy function calls with incorrect syntax
    content = content.replace(/lazy\(_\(\)\s*=>/g, 'lazy(() =>');
    
    // Fix other similar patterns
    content = content.replace(/\(_\(\)\s*=>/g, '(() =>');
    
    // Fix any remaining underscore prefixes in function calls
    content = content.replace(/\(_\(([^)]*)\)\s*=>/g, '(($1) =>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed lazy syntax: ${filePath}`);
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
      if (fixLazySyntax(filePath)) {
        fixedCount++;
      }
    }
  });;
  
  return fixedCount;
}

// Process the app directory
console.log('Starting fix of lazy syntax errors...');
const fixedCount = processFiles('./app');
console.log(`Fixed ${fixedCount} files.`);