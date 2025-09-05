const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax issues
    content = content.replace(/,(\s*})/g, '$1'); // Remove trailing commas before closing braces
    content = content.replace(/,(\s*])/g, '$1'); // Remove trailing commas before closing brackets
    content = content.replace(/;(\s*})/g, '$1'); // Replace semicolons with commas before closing braces
    content = content.replace(/;(\s*])/g, '$1'); // Replace semicolons with commas before closing brackets
    
    // Fix object property syntax
    content = content.replace(/(\w+):\s*;/g, '$1: null,'); // Fix missing values
    content = content.replace(/(\w+):\s*(\w+);/g, '$1: $2,'); // Fix semicolons in object properties
    
    // Fix function calls with underscores
    content = content.replace(/_(\w+)/g, '$1'); // Remove underscores from variable names
    
    // Fix missing commas in arrays and objects
    content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n$2'); // Add missing commas between properties
    
    // Fix import statements
    content = content.replace(/import\s+{\s*_(\w+)/g, 'import { $1'); // Fix import destructuring
    content = content.replace(/,(\s*})/g, '$1'); // Remove trailing commas in imports
    
    // Fix export statements
    content = content.replace(/export\s+{\s*_(\w+)/g, 'export { $1');
    
    // Fix function declarations
    content = content.replace(/function\s+_(\w+)/g, 'function $1');
    content = content.replace(/const\s+_(\w+)/g, 'const $1');
    content = content.replace(/let\s+_(\w+)/g, 'let $1');
    content = content.replace(/var\s+_(\w+)/g, 'var $1');
    
    // Fix object property access
    content = content.replace(/\._(\w+)/g, '.$1');
    content = content.replace(/\[_(\w+)\]/g, '[$1]');
    
    // Fix string literals
    content = content.replace(/'_(\w+)'/g, "'$1'");
    content = content.replace(/"_(\w+)"/g, '"$1"');
    
    // Fix boolean values
    content = content.replace(/_true/g, 'true');
    content = content.replace(/_false/g, 'false');
    content = content.replace(/_null/g, 'null');
    content = content.replace(/_undefined/g, 'undefined');
    
    // Clean up multiple semicolons
    content = content.replace(/;+;/g, ';');
    content = content.replace(/;+(\s*})/g, '$1');
    content = content.replace(/;+(\s*])/g, '$1');
    
    // Clean up multiple commas
    content = content.replace(/,+/g, ',');
    content = content.replace(/,+(\s*})/g, '$1');
    content = content.replace(/,+(\s*])/g, '$1');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithSyntaxErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && !item.includes('src.broken')) {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(ts|tsx|js|jsx|mjs)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('_') && (content.includes('_true') || content.includes('_false') || content.includes('_null') || content.includes('_(') || content.includes('_ '))) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find and fix all files with syntax errors
const filesToFix = findFilesWithSyntaxErrors('.');
console.log(`Found ${filesToFix.length} files with potential syntax errors`);

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);