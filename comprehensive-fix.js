#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to clean merge conflicts and syntax errors comprehensively
function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers completely
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix malformed strings and quotes
    content = content.replace(/\"\"/g, '"');
    content = content.replace(/;\"/g, '"');
    content = content.replace(/\"\s*$/gm, '"');
    content = content.replace(/\"\s*;\s*$/gm, '"');
    
    // Fix JSX syntax errors
    content = content.replace(/<div>\s*<Head>/g, '<div>\n      <Head>');
    content = content.replace(/<\/Head>\s*<div/g, '</Head>\n      <div');
    
    // Fix function declarations
    content = content.replace(/export default function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*\(\s*<div>/g, 'export default function $1() {\n  return (\n    <div>');
    
    // Fix malformed closing tags and parentheses
    content = content.replace(/\)\s*}\s*;?\s*$/gm, '  );\n}');
    content = content.replace(/\)\s*}\s*;?\s*\"\s*;?\s*$/gm, '  );\n}');
    content = content.replace(/\)\s*}\s*;?\s*\"\s*;?\s*\"\s*;?\s*$/gm, '  );\n}');
    
    // Fix specific patterns
    content = content.replace(/const NotFound = \(return \(<>;/g, 'const NotFound = () => {\n  return (\n    <>');
    content = content.replace(/from from /g, 'from ');
    content = content.replace(/;\s*$/gm, '');
    
    // Fix JSX closing tags
    content = content.replace(/<\/div>\s*\)\s*;\s*$/gm, '</div>\n  );\n}');
    content = content.replace(/<\/div>\s*\)\s*\"\s*;\s*$/gm, '</div>\n  );\n}');
    content = content.replace(/<\/div>\s*\)\s*\"\s*;\s*\"\s*;\s*$/gm, '</div>\n  );\n}');
    
    // Fix malformed strings in JSX
    content = content.replace(/content=\"([^\"]*)\"\s*\"\s*$/gm, 'content="$1"');
    content = content.replace(/title=\"([^\"]*)\"\s*\"\s*$/gm, 'title="$1"');
    
    // Fix malformed JSX attributes
    content = content.replace(/className=\"([^\"]*)\"\s*\"\s*$/gm, 'className="$1"');
    content = content.replace(/href=\"([^\"]*)\"\s*\"\s*$/gm, 'href="$1"');
    
    // Fix malformed text content
    content = content.replace(/>\s*([^<]*)\"\s*<\//gm, '>$1</');
    content = content.replace(/>\s*([^<]*)\"\s*$/gm, '>$1');
    
    // Clean up extra whitespace and newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    // Fix specific malformed patterns
    content = content.replace(/}\s*\"\s*;?\s*$/gm, '}');
    content = content.replace(/}\s*\"\s*;?\s*\"\s*;?\s*$/gm, '}');
    
    // Fix malformed function endings
    content = content.replace(/\)\s*}\s*\"\s*;?\s*\"\s*;?\s*\"\s*;?\s*$/gm, '  );\n}');
    
    // Fix malformed JSX closing
    content = content.replace(/<\/div>\s*\)\s*\"\s*;\s*\"\s*;?\s*\"\s*;?\s*$/gm, '</div>\n  );\n}');
    
    // Final cleanup
    content = content.replace(/\s+$/gm, '');
    content = content.replace(/\n{3,}/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/JSX files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive syntax fix...');

const files = findTsxFiles('/workspace');
console.log(`Found ${files.length} TypeScript/JSX files to process`);

files.forEach(file => {
  cleanFile(file);
});

console.log('Comprehensive syntax fix completed!');