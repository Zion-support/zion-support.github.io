const fs = require('fs');
const path = require('path');

// Function to fix comprehensive syntax issues
function fixSyntaxIssues(content) {
  let fixed = content;
  
  // Fix 'use client' directive
  fixed = fixed.replace(/'use client\"\s*$/, "'use client'");
  
  // Fix import statements
  fixed = fixed.replace(/import\s+([^'"]*)\s+from\s+['"]([^'"]*)\"\"\s*$/gm, 'import $1 from "$2"');
  fixed = fixed.replace(/import\s+([^'"]*)\s+from\s+['"]([^'"]*)\"\s*$/gm, 'import $1 from "$2"');
  
  // Fix export statements
  fixed = fixed.replace(/export\s+default\s+([^'"]*)\"\"\s*$/gm, 'export default $1');
  fixed = fixed.replace(/export\s+default\s+([^'"]*)\"\s*$/gm, 'export default $1');
  
  // Fix JSX attributes
  fixed = fixed.replace(/className\s*=\s*['"]([^'"]*)\"\"\s*$/gm, 'className="$1"');
  fixed = fixed.replace(/title\s*=\s*['"]([^'"]*)\"\"\s*$/gm, 'title="$1"');
  fixed = fixed.replace(/alt\s*=\s*['"]([^'"]*)\"\"\s*$/gm, 'alt="$1"');
  
  // Fix string literals in general
  fixed = fixed.replace(/['"]([^'"]*)\"\"\s*$/gm, '"$1"');
  fixed = fixed.replace(/['"]([^'"]*)\"\s*$/gm, '"$1"');
  
  // Fix template literals
  fixed = fixed.replace(/`([^`]*)\"\"\s*$/gm, '`$1`');
  fixed = fixed.replace(/`([^`]*)\"\s*$/gm, '`$1`');
  
  // Fix object properties
  fixed = fixed.replace(/(\w+)\s*:\s*['"]([^'"]*)\"\"\s*$/gm, '$1: "$2"');
  fixed = fixed.replace(/(\w+)\s*:\s*['"]([^'"]*)\"\s*$/gm, '$1: "$2"');
  
  // Fix function parameters
  fixed = fixed.replace(/\(\s*['"]([^'"]*)\"\"\s*$/gm, '("$1")');
  fixed = fixed.replace(/\(\s*['"]([^'"]*)\"\s*$/gm, '("$1")');
  
  // Fix return statements
  fixed = fixed.replace(/return\s+['"]([^'"]*)\"\"\s*$/gm, 'return "$1"');
  fixed = fixed.replace(/return\s+['"]([^'"]*)\"\s*$/gm, 'return "$1"');
  
  // Fix console.log statements
  fixed = fixed.replace(/console\.log\(\s*['"]([^'"]*)\"\"\s*$/gm, 'console.log("$1")');
  fixed = fixed.replace(/console\.log\(\s*['"]([^'"]*)\"\s*$/gm, 'console.log("$1")');
  
  // Fix variable declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*['"]([^'"]*)\"\"\s*$/gm, 'const $1 = "$2"');
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*['"]([^'"]*)\"\s*$/gm, 'const $1 = "$2"');
  fixed = fixed.replace(/let\s+(\w+)\s*=\s*['"]([^'"]*)\"\"\s*$/gm, 'let $1 = "$2"');
  fixed = fixed.replace(/let\s+(\w+)\s*=\s*['"]([^'"]*)\"\s*$/gm, 'let $1 = "$2"');
  fixed = fixed.replace(/var\s+(\w+)\s*=\s*['"]([^'"]*)\"\"\s*$/gm, 'var $1 = "$2"');
  fixed = fixed.replace(/var\s+(\w+)\s*=\s*['"]([^'"]*)\"\s*$/gm, 'var $1 = "$2"');
  
  // Fix JSX text content
  fixed = fixed.replace(/>\s*([^<]*)\"\"\s*$/gm, '>$1</>');
  fixed = fixed.replace(/>\s*([^<]*)\"\s*$/gm, '>$1</>');
  
  // Fix array elements
  fixed = fixed.replace(/['"]([^'"]*)\"\"\s*$/gm, '"$1"');
  fixed = fixed.replace(/['"]([^'"]*)\"\s*$/gm, '"$1"');
  
  // Fix multiline strings that might be broken
  fixed = fixed.replace(/['"]([^'"]*)\n\s*['"]([^'"]*)\"\"\s*$/gm, '"$1$2"');
  fixed = fixed.replace(/['"]([^'"]*)\n\s*['"]([^'"]*)\"\s*$/gm, '"$1$2"');
  
  return fixed;
}

// Function to recursively process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixed = fixSyntaxIssues(content);
        
        if (content !== fixed) {
          fs.writeFileSync(filePath, fixed, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Start processing from the app directory
console.log('Starting comprehensive syntax fixes...');
processDirectory('./app');
processDirectory('./src');
processDirectory('./components');
console.log('Comprehensive syntax fixes completed!');