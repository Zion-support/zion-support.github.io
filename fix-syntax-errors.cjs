#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix import statements with extra semicolons and quotes
  fixed = fixed.replace(/import\s+([^;]+);";/g, 'import $1;');
  fixed = fixed.replace(/import\s+([^;]+);';/g, 'import $1;');
  fixed = fixed.replace(/import\s+([^;]+);';/g, 'import $1;');
  fixed = fixed.replace(/import\s+([^;]+);";/g, 'import $1;');
  
  // Fix JSX attributes with extra quotes and colons
  fixed = fixed.replace(/title="([^"]*)"">: value";/g, 'title="$1"');
  fixed = fixed.replace(/description="([^"]*)"">: value/g, 'description="$1"');
  fixed = fixed.replace(/keywords="([^"]*)"">: value/g, 'keywords="$1"');
  
  // Fix JSX closing tags
  fixed = fixed.replace(/\/>"/g, '/>');
  fixed = fixed.replace(/\/>';/g, '/>');
  fixed = fixed.replace(/\/>";/g, '/>');
  
  // Fix unterminated strings in JSX
  fixed = fixed.replace(/<([^>]+)>\s*": value/g, '<$1>');
  fixed = fixed.replace(/<([^>]+)>\s*": value";/g, '<$1>');
  fixed = fixed.replace(/<([^>]+)>\s*": value';/g, '<$1>');
  
  // Fix extra quotes and colons in text content
  fixed = fixed.replace(/>: value/g, '>');
  fixed = fixed.replace(/>": value/g, '>');
  fixed = fixed.replace(/>": value";/g, '>');
  fixed = fixed.replace(/>": value';/g, '>');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*": value/g, '<>');
  fixed = fixed.replace(/<>\s*": value";/g, '<>');
  fixed = fixed.replace(/<>\s*": value';/g, '<>');
  
  // Fix extra quotes at end of lines
  fixed = fixed.replace(/;\s*"$/gm, ';');
  fixed = fixed.replace(/;\s*'$/gm, ';');
  fixed = fixed.replace(/}\s*"$/gm, '}');
  fixed = fixed.replace(/}\s*'$/gm, '}');
  
  // Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*\[: value/g, '$1: [');
  fixed = fixed.replace(/(\w+):\s*\[: value";/g, '$1: [');
  fixed = fixed.replace(/(\w+):\s*\[: value';/g, '$1: [');
  
  // Fix array elements with extra quotes
  fixed = fixed.replace(/\{\s*"([^"]*)"\s*\},/g, '{ $1 },');
  fixed = fixed.replace(/\{\s*"([^"]*)"\s*\},/g, '{ $1 },');
  
  // Fix function declarations
  fixed = fixed.replace(/export default function\s+(\w+)\(\)\s*\{/g, 'export default function $1() {');
  
  // Fix component names
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');
  
  // Fix return statements
  fixed = fixed.replace(/return\s*\(\s*<>\s*": value/g, 'return (\n    <>');
  fixed = fixed.replace(/return\s*\(\s*<>\s*": value";/g, 'return (\n    <>');
  fixed = fixed.replace(/return\s*\(\s*<>\s*": value';/g, 'return (\n    <>');
  
  // Fix closing brackets and parentheses
  fixed = fixed.replace(/\}\s*\)\s*;\s*\{/g, '}\n  );');
  fixed = fixed.replace(/\}\s*\)\s*;\s*\{/g, '}\n  );');
  
  // Fix export statements
  fixed = fixed.replace(/export default\s+(\w+);\s*"'"'/g, 'export default $1;');
  fixed = fixed.replace(/export default\s+(\w+);\s*"$/gm, 'export default $1;');
  fixed = fixed.replace(/export default\s+(\w+);\s*'$/gm, 'export default $1;');
  
  // Fix extra quotes in strings
  fixed = fixed.replace(/"([^"]*)"">: value/g, '"$1"');
  fixed = fixed.replace(/"([^"]*)"">: value";/g, '"$1"');
  fixed = fixed.replace(/"([^"]*)"">: value';/g, '"$1"');
  
  // Fix Helmet tags
  fixed = fixed.replace(/<Helmet>\s*<title>([^<]*)<\/title>"'"'/g, '<Helmet>\n        <title>$1</title>');
  fixed = fixed.replace(/<meta\s+name="description"\s+content="([^"]*)"\s*\/>\s*';: value/g, '<meta name="description" content="$1" />');
  
  // Fix JSX closing tags
  fixed = fixed.replace(/<\/div>\s*": value/g, '</div>');
  fixed = fixed.replace(/<\/div>\s*": value";/g, '</div>');
  fixed = fixed.replace(/<\/div>\s*": value';/g, '</div>');
  
  // Fix paragraph tags
  fixed = fixed.replace(/<p\s+className="([^"]*)">: value/g, '<p className="$1">');
  fixed = fixed.replace(/<p\s+className="([^"]*)">: value";/g, '<p className="$1">');
  fixed = fixed.replace(/<p\s+className="([^"]*)">: value';/g, '<p className="$1">');
  
  // Fix heading tags
  fixed = fixed.replace(/<h1\s+className="([^"]*)">: value/g, '<h1 className="$1">');
  fixed = fixed.replace(/<h1\s+className="([^"]*)">: value";/g, '<h1 className="$1">');
  fixed = fixed.replace(/<h1\s+className="([^"]*)">: value';/g, '<h1 className="$1">');
  
  // Fix section tags
  fixed = fixed.replace(/<section\s+className="([^"]*)">: value/g, '<section className="$1">');
  fixed = fixed.replace(/<section\s+className="([^"]*)">: value";/g, '<section className="$1">');
  fixed = fixed.replace(/<section\s+className="([^"]*)">: value';/g, '<section className="$1">');
  
  // Fix div tags
  fixed = fixed.replace(/<div\s+className="([^"]*)">: value/g, '<div className="$1">');
  fixed = fixed.replace(/<div\s+className="([^"]*)">: value";/g, '<div className="$1">');
  fixed = fixed.replace(/<div\s+className="([^"]*)">: value';/g, '<div className="$1">');
  
  // Fix extra quotes in text content
  fixed = fixed.replace(/([^>])\s*": value/g, '$1');
  fixed = fixed.replace(/([^>])\s*": value";/g, '$1');
  fixed = fixed.replace(/([^>])\s*": value';/g, '$1');
  
  // Fix malformed JSX fragments at the end
  fixed = fixed.replace(/<>\s*": value/g, '<>');
  fixed = fixed.replace(/<>\s*": value";/g, '<>');
  fixed = fixed.replace(/<>\s*": value';/g, '<>');
  
  // Fix extra quotes at the very end
  fixed = fixed.replace(/"'"'$/g, '');
  fixed = fixed.replace(/"'$/g, '');
  fixed = fixed.replace(/'"$/g, '');
  
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
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

main();