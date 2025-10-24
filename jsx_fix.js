const fs = require('fs');
const path = require('path');

// Get all TypeScript/TSX files
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix JSX syntax issues
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix malformed JSX elements with commas and semicolons
  fixed = fixed.replace(/<(\w+)([^>]*?),\s*>/g, '<$1$2>');
  fixed = fixed.replace(/<(\w+)([^>]*?);\s*>/g, '<$1$2>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/(\w+)\s*,\s*>/g, '</$1>');
  fixed = fixed.replace(/<\/(\w+)\s*;\s*>/g, '</$1>');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/(\w+)=\"([^"]*?)\",\s*>/g, '$1="$2">');
  fixed = fixed.replace(/(\w+)=\"([^"]*?)\";\s*>/g, '$1="$2">');
  
  // Fix malformed className attributes
  fixed = fixed.replace(/className=\"([^"]*?)\",\s*>/g, 'className="$1">');
  fixed = fixed.replace(/className=\"([^"]*?)\";\s*>/g, 'className="$1">');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*([^}]*?)\s*,\s*\}/g, '{$1}');
  fixed = fixed.replace(/\{\s*([^}]*?)\s*;\s*\}/g, '{$1}');
  
  // Fix malformed closing brackets in JSX
  fixed = fixed.replace(/(\w+)\s*,\s*>/g, '$1>');
  fixed = fixed.replace(/(\w+)\s*;\s*>/g, '$1>');
  
  // Fix malformed opening brackets in JSX
  fixed = fixed.replace(/<\s*(\w+)\s*,\s*>/g, '<$1>');
  fixed = fixed.replace(/<\s*(\w+)\s*;\s*>/g, '<$1>');
  
  // Fix malformed closing tags with extra characters
  fixed = fixed.replace(/<\/(\w+)\s*[;,]\s*>/g, '</$1>');
  
  // Fix malformed opening tags with extra characters
  fixed = fixed.replace(/<(\w+)\s*[;,]\s*>/g, '<$1>');
  
  // Fix malformed JSX elements with extra commas
  fixed = fixed.replace(/<(\w+)([^>]*?)\s*,\s*>/g, '<$1$2>');
  
  // Fix malformed JSX elements with extra semicolons
  fixed = fixed.replace(/<(\w+)([^>]*?)\s*;\s*>/g, '<$1$2>');
  
  return fixed;
}

// Process all files
const allFiles = getAllTsxFiles(__dirname);
let fixedCount = 0;

allFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixJSXErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(file, fixed);
      console.log(`Fixed: ${path.relative(__dirname, file)}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files`);
