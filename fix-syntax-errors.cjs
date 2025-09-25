#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix trailing commas in imports and exports
  fixed = fixed.replace(/,(\s*)$/gm, ';$1');
  
  // Fix object property syntax (colon instead of semicolon)
  fixed = fixed.replace(/(\w+);(\s*)(\w+)/g, '$1: $3');
  
  // Fix color values (30o0 -> 300, etc.)
  fixed = fixed.replace(/(\d+)o0/g, '$100');
  fixed = fixed.replace(/(\d+)o(\d+)/g, '$1$2');
  
  // Fix JSX closing tags (>, -> >)
  fixed = fixed.replace(/>,(\s*<\/[^>]+>)/g, '>$1');
  
  // Fix template literals and string concatenation
  fixed = fixed.replace(/`([^`]*)\$\{([^}]+)\}`([^`]*)/g, '`$1${$2}$3`');
  
  // Fix function declarations
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\(\s*\)\s*:\s*React\.ReactElement\s*{/g, 'export default function $1(): React.ReactElement {');
  
  // Fix array and object syntax
  fixed = fixed.replace(/\[\s*([^[\]]*)\s*\]/g, (match, content) => {
    if (content.trim()) {
      return '[' + content.split(',').map(item => item.trim()).join(', ') + ']';
    }
    return match;
  });
  
  // Fix conditional expressions
  fixed = fixed.replace(/\?\s*([^:]+)\s*,\s*:\s*([^,}]+)/g, '? $1 : $2');
  
  // Fix missing semicolons after statements
  fixed = fixed.replace(/([^;}])\s*$/gm, '$1;');
  
  // Fix JSX attributes
  fixed = fixed.replace(/className=\{`([^`]*)`\}/g, 'className={`$1`}');
  
  return fixed;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixFilesInDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const fixed = fixSyntaxErrors(content);
        
        if (content !== fixed) {
          fs.writeFileSync(fullPath, fixed);
          console.log(`Fixed: ${fullPath}`);
        }
      } catch (error) {
        console.error(`Error fixing ${fullPath}:`, error.message);
      }
    }
  }
}

// Main execution
console.log('Starting syntax error fixes...');

// Fix zion-os directory
if (fs.existsSync('/workspace/zion-os/src')) {
  console.log('Fixing zion-os files...');
  fixFilesInDirectory('/workspace/zion-os/src');
}

// Fix zion-website directory
if (fs.existsSync('/workspace/zion-website/src')) {
  console.log('Fixing zion-website files...');
  fixFilesInDirectory('/workspace/zion-website/src');
}

console.log('Syntax error fixes completed!');