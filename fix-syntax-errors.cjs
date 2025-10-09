#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix duplicate imports
function fixDuplicateImports(content) {
  // Match import statements with duplicate items
  const importRegex = /import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"];?/g;
  
  return content.replace(importRegex, (match, imports, module) => {
    // Split by comma and clean up
    const items = imports.split(',').map(item => item.trim()).filter(item => item);
    
    // Remove duplicates while preserving order
    const uniqueItems = [...new Set(items)];
    
    return `import { ${uniqueItems.join(', ')} } from '${module}';`;
  });
}

// Function to fix malformed object syntax
function fixObjectSyntax(content) {
  // Fix patterns like: {,\n  // TODO: Add content\n};\n  icon: SomeIcon,
  const malformedObjectRegex = /\{\s*,\s*\n\s*\/\/ TODO: Add content\s*\n\};\s*\n\s*icon:\s*([^,]+),/g;
  
  content = content.replace(malformedObjectRegex, (match, iconName) => {
    return `{\n      icon: ${iconName.trim()},`;
  });
  
  // Fix patterns where object properties are outside the object
  const outsidePropsRegex = /\}\s*\n\s*icon:\s*([^,]+),\s*\n\s*title:\s*['"]([^'"]+)['"],\s*\n\s*description:\s*['"]([^'"]+)['"],\s*\n\s*benefits:\s*\[([^\]]+)\];\s*\n\s*\}/g;
  
  content = content.replace(outsidePropsRegex, (match, icon, title, description, benefits) => {
    return `{\n      icon: ${icon.trim()},\n      title: '${title}',\n      description: '${description}',\n      benefits: [${benefits}]\n    }`;
  });
  
  return content;
}

// Function to fix duplicate return statements
function fixDuplicateReturns(content) {
  // Find and fix duplicate return statements
  const returnRegex = /return\s*\([^)]*\);\s*\};\s*return\s*\(/g;
  
  content = content.replace(returnRegex, (match) => {
    return 'return (';
  });
  
  return content;
}

// Function to fix malformed JSX
function fixMalformedJSX(content) {
  // Fix JSX that's all on one line
  const singleLineJSXRegex = /return\s*\(\s*<div[^>]*>.*?<\/div>\s*\);\s*$/gm;
  
  content = content.replace(singleLineJSXRegex, (match) => {
    // Format the JSX properly
    let formatted = match.replace(/return\s*\(\s*/, 'return (\n    ');
    formatted = formatted.replace(/className="([^"]*)"/g, (m, className) => {
      return `className="${className}"`;
    });
    formatted = formatted.replace(/<div/g, '<div');
    formatted = formatted.replace(/<\/div>/g, '\n    </div>');
    formatted = formatted.replace(/\s*\);\s*$/, '\n  );');
    
    return formatted;
  });
  
  return content;
}

// Main function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply all fixes
    content = fixDuplicateImports(content);
    content = fixObjectSyntax(content);
    content = fixDuplicateReturns(content);
    content = fixMalformedJSX(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/TSX files in src directory
const files = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);