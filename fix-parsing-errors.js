#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Get all TypeScript/TSX files
const files = await glob('app/**/*.{ts,tsx}', { cwd: '/workspace' });

function fixParsingErrors(content) {
  // Fix missing commas in object literals
  content = content.replace(/(\w+):\s*([^,}\n]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
  
  // Fix missing commas in array elements
  content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n    $2');
  
  // Fix missing commas after object properties
  content = content.replace(/(\w+):\s*([^,}\n]+)(?=\s*\n\s*\w+:\s*)/g, '$1: $2,');
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+)\s+(\w+)\s*\)/g, '$1, $2)');
  
  // Fix missing commas in JSX props
  content = content.replace(/(\w+)=\{([^}]+)\}\s+(\w+)=/g, '$1={$2} $3=');
  
  // Fix missing commas in destructuring
  content = content.replace(/(\w+)\s+(\w+)\s*\}/g, '$1, $2}');
  
  // Fix missing commas in import statements
  content = content.replace(/import\s*\{\s*([^}]+)\s*\}\s*from/g, (match, imports) => {
    const cleanImports = imports.replace(/\s+/g, ' ').trim();
    return `import { ${cleanImports} } from`;
  });
  
  // Fix missing commas in export statements
  content = content.replace(/export\s*\{\s*([^}]+)\s*\}/g, (match, exports) => {
    const cleanExports = exports.replace(/\s+/g, ' ').trim();
    return `export { ${cleanExports} }`;
  });
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix parsing errors
    content = fixParsingErrors(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Starting parsing error fixes...');

let fixedCount = 0;
for (const file of files) {
  const fullPath = path.join('/workspace', file);
  if (fs.existsSync(fullPath)) {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files.`);