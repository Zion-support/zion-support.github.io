#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix malformed imports and syntax
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed 'use client' directive
    content = content.replace(/'use client';?'/g, "'use client'");
    content = content.replace(/'use client';/g, "'use client'");
    
    // Fix malformed import statements
    content = content.replace(/import\s+([^"';]+)\s+from\s+([^"';]+);?'/g, (match, imports, module) => {
      modified = true;
      return `import ${imports} from "${module.trim()}";`;
    });
    
    // Fix malformed import statements without quotes
    content = content.replace(/import\s+([^"';]+)\s+from\s+([^"';]+);?/g, (match, imports, module) => {
      if (!module.startsWith('"') && !module.startsWith("'")) {
        modified = true;
        return `import ${imports} from "${module.trim()}";`;
      }
      return match;
    });
    
    // Fix malformed React imports
    content = content.replace(/import\s+React\s+from\s+([^"';]+);?'/g, (match, module) => {
      modified = true;
      return `import React from "react";`;
    });
    
    // Fix malformed Helmet imports
    content = content.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+([^"';]+);?'/g, (match, module) => {
      modified = true;
      return `import { Helmet } from "react-helmet-async";`;
    });
    
    // Fix malformed Link imports
    content = content.replace(/import\s+\{\s*Link\s*\}\s+from\s+([^"';]+);?'/g, (match, module) => {
      modified = true;
      return `import { Link } from "react-router-dom";`;
    });
    
    // Fix malformed icon imports
    content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+([^"';]+);?'/g, (match, imports, module) => {
      if (module.includes('heroicons') || module.includes('lucide')) {
        modified = true;
        return `import { ${imports} } from "${module.trim()}";`;
      }
      return match;
    });
    
    // Fix empty import statements
    content = content.replace(/import\s*\{\s*\}\s*from\s*[^;]+;?/g, '');
    
    // Fix malformed JSX attributes
    content = content.replace(/(\w+)=([^"'\s>]+)(?=\s|>)/g, (match, attr, value) => {
      if (!value.startsWith('"') && !value.startsWith("'") && !value.startsWith('{')) {
        modified = true;
        return `${attr}="${value}"`;
      }
      return match;
    });
    
    // Fix unterminated string literals
    content = content.replace(/(["'])([^"']*?)(\n|$)/g, (match, quote, text, newline) => {
      if (!text.includes(quote) && !text.endsWith('\\')) {
        modified = true;
        return `${quote}${text}${quote}${newline}`;
      }
      return match;
    });
    
    // Clean up extra semicolons and quotes
    content = content.replace(/;'$/gm, ';');
    content = content.replace(/;$/gm, '');
    content = content.replace(/\s+$/gm, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix all files recursively
function fixAllFiles(dir) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip problematic directories
        if (['node_modules', 'dist', 'build', '.git', '.next', 'out', 'app-broken', 'app-disabled'].includes(item)) {
          continue;
        }
        fixedCount += fixAllFiles(fullPath);
      } else if (stat.isFile()) {
        // Only process TypeScript/JavaScript files
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          if (fixImports(fullPath)) {
            fixedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting import and syntax fix...');

// Fix files in the main directories
const directories = [
  '/workspace/app',
  '/workspace/api',
  '/workspace/hooks'
];

let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    totalFixed += fixAllFiles(dir);
  }
}

console.log(`\nFixed imports and syntax in ${totalFixed} files.`);

// Try to build to see if it works now
console.log('\nTrying to build...');
try {
  const { execSync } = require('child_process');
  execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Build successful!');
} catch (error) {
  console.log('Build still has issues, but many imports should be fixed.');
}

console.log('Import and syntax fix complete!');