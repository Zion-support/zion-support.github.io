const fs = require('fs');

// Function to fix specific syntax errors
function fixSpecificErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix unterminated string literals in import statements
    content = content.replace(/from 'lucide-react;'/g, "from 'lucide-react'");
    content = content.replace(/from 'next;'/g, "from 'next'");
    content = content.replace(/from 'react;'/g, "from 'react'");
    content = content.replace(/from 'next\/link;'/g, "from 'next/link'");
    
    // Fix extra quotes and semicolons
    content = content.replace(/';'/g, "';");
    content = content.replace(/";"/g, '";');
    content = content.replace(/""/g, '"');
    content = content.replace(/''/g, "'");
    
    // Fix return statements
    content = content.replace(/return \(\)/g, 'return (');
    
    // Fix object declarations
    content = content.replace(/export const metadata: Metadata = {,/g, 'export const metadata: Metadata = {');
    
    // Fix function declarations
    content = content.replace(/function (\w+)\(\) \{/g, 'function $1() {');
    
    // Fix missing closing parentheses
    content = content.replace(/\(([^)]*?)\n/g, '($1)\n');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*([^,}\n]+)\n\s*(\w+):/g, '$1: $2,\n$3:');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*\n\s*(import|export|const|let|var|function|interface|type)/g, '$1;\n$2');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files to fix
const filesToFix = [
  './app/about/page.tsx',
  './app/contact/page.tsx',
  './app/layout.tsx',
  './app/network-infrastructure/page.tsx',
  './app/page.tsx'
];

console.log('Fixing specific syntax errors...');

let fixedCount = 0;
filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixSpecificErrors(file)) {
      fixedCount++;
    }
  }
});

console.log(`\nFixed ${fixedCount} files`);