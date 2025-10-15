import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix syntax errors introduced by the previous script
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix incorrect function parameter syntax
    content = content.replace(/\(_\(([^,]+),\s*_([^)]+)\)\s*=>/g, '($1, $2) =>');
    
    // Fix other common syntax issues
    content = content.replace(/,\s*_([^)]+)\)\s*=>/g, ', $1) =>');
    
    // Fix any remaining underscore prefixes that shouldn't be there
    content = content.replace(/\(_([^,)]+),\s*_([^)]+)\)\s*=>/g, '($1, $2) =>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax: ${filePath}`);
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
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Process the app directory
console.log('Starting fix of syntax errors...');
const fixedCount = processFiles('./app');
console.log(`Fixed ${fixedCount} files.`);