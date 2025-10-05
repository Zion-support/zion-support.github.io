#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Fix lucide-react imports
function fixLucideImports(content) {
  // Replace destructured imports with default imports
  const lucideImports = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g);
  
  if (lucideImports) {
    lucideImports.forEach(importStatement => {
      const matches = importStatement.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
      if (matches) {
        const imports = matches[1].split(',').map(imp => imp.trim());
        const newImports = imports.map(imp => 
          `import ${imp} from 'lucide-react/dist/esm/icons/${imp.toLowerCase().replace(/([A-Z])/g, '-$1').substring(1)}';`
        ).join('\n');
        
        content = content.replace(importStatement, newImports);
      }
    });
  }
  
  return content;
}

// Remove unused React imports
function removeUnusedReactImports(content) {
  // Check if React is imported but not used
  const hasReactImport = content.includes("import React from 'react';");
  const usesReact = content.includes('React.') || content.includes('<React.');
  
  if (hasReactImport && !usesReact) {
    content = content.replace(/import React from 'react';\n?/, '');
  }
  
  return content;
}

// Fix className prop issues on self-closing tags
function fixClassNameProps(content) {
  // Fix className on self-closing tags that don't support it
  content = content.replace(/<(\w+)\s+className="[^"]*"\s*\/>/g, '<$1 />');
  
  return content;
}

// Process all TypeScript/TSX files in the app/blog directory
const blogFiles = glob.sync('app/blog/**/*.tsx');

console.log(`Found ${blogFiles.length} blog files to process...`);

let processedCount = 0;
let errorCount = 0;

blogFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixLucideImports(content);
    content = removeUnusedReactImports(content);
    content = fixClassNameProps(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      processedCount++;
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nProcessed ${processedCount} files successfully`);
if (errorCount > 0) {
  console.log(`Errors in ${errorCount} files`);
}