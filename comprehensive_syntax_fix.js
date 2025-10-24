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

// Fix comprehensive syntax issues
function fixComprehensiveSyntax(content) {
  let fixed = content;
  
  // Fix malformed JSX elements with semicolons
  fixed = fixed.replace(/<(\w+)\s*[^>]*?>\s*([^<]*?)\s*<\/\1\s*;\s*>/g, '<$1>$2</$1>');
  fixed = fixed.replace(/<(\w+)\s*[^>]*?>\s*([^<]*?)\s*<\/\1\s*,\s*>/g, '<$1>$2</$1>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/\w+\s*;\s*>/g, (match) => match.replace(/;\s*/, ''));
  fixed = fixed.replace(/<\/\w+\s*,\s*>/g, (match) => match.replace(/,\s*/, ''));
  
  // Fix malformed object properties with semicolons
  fixed = fixed.replace(/(\w+)\s*:\s*<[^>]*?>\s*,\s*;/g, '$1: <$2>,');
  fixed = fixed.replace(/(\w+)\s*:\s*<[^>]*?>\s*;\s*,/g, '$1: <$2>,');
  
  // Fix malformed array declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*;/g, 'const $1 = [');
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*,/g, 'const $1 = [');
  
  // Fix malformed array elements with semicolons
  fixed = fixed.replace(/(\w+)\s*:\s*'([^']*?)\s*,\s*',/g, "$1: '$2',");
  fixed = fixed.replace(/(\w+)\s*:\s*"([^"]*?)\s*,\s*",/g, '$1: "$2",');
  
  // Fix malformed array elements with semicolons
  fixed = fixed.replace(/'([^']*?)\s*,\s*',/g, "'$1',");
  fixed = fixed.replace(/"([^"]*?)\s*,\s*",/g, '"$1",');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/(\w+)=\"([^"]*?)\s*,\s*\"/g, '$1="$2"');
  fixed = fixed.replace(/(\w+)=\"([^"]*?)\s*;\s*\"/g, '$1="$2"');
  
  // Fix malformed function calls
  fixed = fixed.replace(/(\w+)\s*\(\s*\)\s*;\s*/g, '$1();');
  fixed = fixed.replace(/(\w+)\s*\(\s*\)\s*,\s*/g, '$1(),');
  
  // Fix malformed object destructuring
  fixed = fixed.replace(/\{\s*(\w+)\s*,\s*\}/g, '{$1}');
  fixed = fixed.replace(/\{\s*(\w+)\s*;\s*\}/g, '{$1}');
  
  // Fix malformed array destructuring
  fixed = fixed.replace(/\[\s*(\w+)\s*,\s*\]/g, '[$1]');
  fixed = fixed.replace(/\[\s*(\w+)\s*;\s*\]/g, '[$1]');
  
  // Fix malformed JSX elements with extra characters
  fixed = fixed.replace(/<(\w+)\s*[^>]*?>\s*([^<]*?)\s*<\/\1\s*[;,]\s*>/g, '<$1>$2</$1>');
  
  // Fix malformed object properties
  fixed = fixed.replace(/(\w+)\s*:\s*<[^>]*?>\s*[;,]/g, '$1: <$2>,');
  
  // Fix malformed array elements
  fixed = fixed.replace(/(\w+)\s*:\s*'([^']*?)\s*[;,]/g, "$1: '$2',");
  fixed = fixed.replace(/(\w+)\s*:\s*"([^"]*?)\s*[;,]/g, '$1: "$2",');
  
  // Fix malformed string literals
  fixed = fixed.replace(/'([^']*?)\s*[;,]/g, "'$1',");
  fixed = fixed.replace(/"([^"]*?)\s*[;,]/g, '"$1",');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*([^}]*?)\s*[;,]\s*\}/g, '{$1}');
  
  // Fix malformed function parameters
  fixed = fixed.replace(/(\w+)\s*[;,]\s*\)/g, '$1)');
  
  // Fix malformed variable declarations
  fixed = fixed.replace(/(\w+)\s*[;,]\s*=/g, '$1 =');
  
  // Fix malformed object properties
  fixed = fixed.replace(/(\w+)\s*[;,]\s*:/g, '$1:');
  
  // Fix malformed array elements
  fixed = fixed.replace(/(\w+)\s*[;,]\s*\]/g, '$1]');
  
  // Fix malformed JSX elements
  fixed = fixed.replace(/<(\w+)\s*[;,]\s*>/g, '<$1>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/(\w+)\s*[;,]\s*>/g, '</$1>');
  
  return fixed;
}

// Process all files
const allFiles = getAllTsxFiles(__dirname);
let fixedCount = 0;

allFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixComprehensiveSyntax(content);
    
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
