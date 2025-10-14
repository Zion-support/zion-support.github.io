#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals with extra quotes
  fixed = fixed.replace(/from\s+['';]([^';']+)[';']';/g, "from '$1';");
  fixed = fixed.replace(/from\s+['';]([^';']+)[';`]"/g, "from '$1';");
  fixed = fixed.replace(/import\s+([^'';\s]+)\s+from\s+[';']([^';']+)[';']';/g, "import $1 from '$2';");
  fixed = fixed.replace(/import\s+([^'';\s]+)\s+from\s+[';']([^';']+)[';`]"/g, "import $1 from '$2';");
  
  // Fix unterminated string literals in general
  fixed = fixed.replace(/['';]([^';'\n]*?)[';']';/g, "'$1';");
  fixed = fixed.replace(/['';]([^';'\n]*?)[';`]'/g, ';$1';");
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<(\w+)><\/\1>/g, '<$1 />');
  fixed = fixed.replace(/<(\w+)><\/\1><\/\1>/g, '<$1 />');
  
  // Fix broken JSX structure
  fixed = fixed.replace(/<div[^>]*><\/div>\s*<(\w+)/g, '<div>\n    <$1');
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<(\w+)/g, '</div>\n  </div>\n  <$1');
  
  // Fix unterminated comments
  fixed = fixed.replace(/\/\*([^*]|\*[^/])*$/gm, '');
  fixed = fixed.replace(/\/\/.*$/gm, (match) => match.replace(/'$/, ';'));
  
  // Fix export statements
  fixed = fixed.replace(/export default (\w+)'/g, 'export default $1;');
  fixed = fixed.replace(/export default (\w+)"/g, 'export default $1;');
  
  // Fix use client directive
  fixed = fixed.replace(/?/g, '');
  fixed = fixed.replace(/?/g, '');
  fixed = fixed.replace(/?/g, '');
  
  // Fix broken JSX attributes
  fixed = fixed.replace(/className="([^">]*?)>/g, 'className="$1">');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n  ');
  
  // Fix broken return statements
  fixed = fixed.replace(/return\s*\(\s*$/gm, 'return (\n    ');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  
  const patterns = [
    '**