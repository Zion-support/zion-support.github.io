#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing opening braces in object arrays
  fixed = fixed.replace(/(\s+)(\w+):\s*([^,}]+),/g, (match, indent, key, value) => {
    if (!match.includes('{')) {
      return `${indent}{${key}: ${value}},`;
    }
    return match;
  });
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*?)(\w+)([^"]*?)"/g, (match, before, className, after) => {
    // Fix cases where class names are concatenated without spaces
    if (before && after && !before.endsWith(' ') && !after.startsWith(' ')) {
      return `className="${before} ${className}${after}"`;
    }
    return match;
  });
  
  // Fix missing closing tags
  fixed = fixed.replace(/<(\w+)([^>]*?)(?<!\/)>/g, (match, tag, attrs) => {
    // Check if this is a self-closing tag
    if (attrs.includes('/>')) {
      return match;
    }
    // Check if there's a corresponding closing tag
    const tagName = tag.split(' ')[0];
    const openTag = `<${tagName}`;
    const closeTag = `</${tagName}>`;
    
    if (match.includes(closeTag)) {
      return match;
    }
    
    // For now, just return the match as-is to avoid breaking valid JSX
    return match;
  });
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+)(?=\s*[},])/g, (match, key, value) => {
    if (!value.trim().endsWith(';') && !value.trim().endsWith(',') && !value.trim().endsWith('}')) {
      return `${key}: ${value.trim()},`;
    }
    return match;
  });
  
  // Fix malformed imports
  fixed = fixed.replace(/import\s+{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?/g, (match, imports, module) => {
    const cleanImports = imports.split(',').map(imp => imp.trim()).join(', ');
    return `import { ${cleanImports} } from '${module}';`;
  });
  
  // Fix missing React import
  if (fixed.includes('React') && !fixed.includes("import React")) {
    fixed = "import React from 'react';\n" + fixed;
  }
  
  // Fix missing closing braces for functions
  const openBraces = (fixed.match(/{/g) || []).length;
  const closeBraces = (fixed.match(/}/g) || []).length;
  
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    fixed += '\n' + '}'.repeat(missingBraces);
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find TSX files
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
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${files.length} total files.`);