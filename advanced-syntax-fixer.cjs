#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix specific syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix object property syntax (colon instead of semicolon)
  fixed = fixed.replace(/(\w+):(\s*)(\w+)/g, '$1: $3');
  
  // Fix interface and type declarations
  fixed = fixed.replace(/interface\s+(\w+)\s*{;/g, 'interface $1 {');
  fixed = fixed.replace(/type\s+(\w+)\s*=\s*{;/g, 'type $1 = {');
  
  // Fix function parameter syntax
  fixed = fixed.replace(/\(\s*{;/g, '({');
  fixed = fixed.replace(/,\s*}/g, '}');
  
  // Fix object destructuring
  fixed = fixed.replace(/(\w+):\s*([^,}]+);/g, '$1: $2,');
  
  // Fix conditional expressions with colons
  fixed = fixed.replace(/\?\s*([^:]+):\s*([^,}]+)/g, '? $1 : $2');
  
  // Fix variable declarations with colons
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*([^:]+):\s*if/g, 'const $1 = $2;\n    if');
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*([^:]+):\s*const/g, 'const $1 = $2;\n    const');
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*([^:]+):\s*return/g, 'const $1 = $2;\n    return');
  
  // Fix template literals
  fixed = fixed.replace(/className=\{``([^`]*)`\}/g, 'className={`$1`}');
  
  // Fix JSX syntax
  fixed = fixed.replace(/<(\w+);/g, '<$1');
  fixed = fixed.replace(/>;/g, '>');
  fixed = fixed.replace(/<\/button>;/g, '</button>');
  fixed = fixed.replace(/<\/div>;/g, '</div>');
  
  // Fix return statements
  fixed = fixed.replace(/return\s*\(;/g, 'return (');
  fixed = fixed.replace(/\);$/gm, ')');
  
  // Fix trailing commas and semicolons
  fixed = fixed.replace(/,(\s*)$/gm, ';$1');
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+)\s*$/gm, '$1: $2,');
  
  // Fix color values
  fixed = fixed.replace(/(\d+)o0/g, '$100');
  fixed = fixed.replace(/(\d+)o(\d+)/g, '$1$2');
  
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
console.log('Starting advanced syntax error fixes...');

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

console.log('Advanced syntax error fixes completed!');