#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix all syntax issues in a file
function fixAllSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed import statements with extra quotes
    content = content.replace(/import\s+([^"';]+)\s+from\s+([^"';]+);?'/g, (match, imports, module) => {
      modified = true;
      return `import ${imports} from "${module.trim()}";`;
    });
    
    // Fix malformed import statements with extra quotes at the end
    content = content.replace(/import\s+([^"';]+)\s+from\s+([^"';]+);?''/g, (match, imports, module) => {
      modified = true;
      return `import ${imports} from "${module.trim()}";`;
    });
    
    // Fix malformed React imports
    content = content.replace(/import\s+React,?\s*\{?\s*([^}]*?)\s*\}?\s+from\s+([^"';]+);?'/g, (match, imports, module) => {
      modified = true;
      if (imports.trim()) {
        return `import React, { ${imports.trim()} } from "react";`;
      } else {
        return `import React from "react";`;
      }
    });
    
    // Fix malformed component declarations
    content = content.replace(/const\s+(\w+):\s*"React\.FC\s*=\s*\(\)\s*=>\s*\{/g, (match, name) => {
      modified = true;
      return `const ${name}: React.FC = () => {`;
    });
    
    // Fix malformed component declarations with extra quotes
    content = content.replace(/const\s+(\w+):\s*"React\.FC\s*=\s*\(\)\s*=>\s*\{/g, (match, name) => {
      modified = true;
      return `const ${name}: React.FC = () => {`;
    });
    
    // Fix malformed object properties
    content = content.replace(/(\w+):\s*"([^"]*?)",?'/g, (match, key, value) => {
      modified = true;
      return `${key}: "${value}",`;
    });
    
    // Fix malformed object properties without quotes
    content = content.replace(/(\w+):\s*([^,}\n]+)(?=\s*[,}])/g, (match, key, value) => {
      if (!value.startsWith('"') && !value.startsWith("'") && !value.startsWith('{') && !value.startsWith('[') && !value.includes('=>')) {
        modified = true;
        return `${key}: "${value.trim()}",`;
      }
      return match;
    });
    
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
    
    // Fix malformed function calls
    content = content.replace(/useEffect\(\(\)\s*=>\s*\{\}/g, (match) => {
      modified = true;
      return `useEffect(() => {}, []);`;
    });
    
    // Fix malformed JSX expressions
    content = content.replace(/\{([^}]*?)(\n|$)/g, (match, expr, newline) => {
      if (!expr.includes('}') && expr.trim() && !expr.trim().endsWith(';')) {
        modified = true;
        return `{${expr.trim()}}${newline}`;
      }
      return match;
    });
    
    // Clean up extra quotes and semicolons
    content = content.replace(/;'$/gm, ';');
    content = content.replace(/;$/gm, '');
    content = content.replace(/\s+$/gm, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax in: ${filePath}`);
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
          if (fixAllSyntax(fullPath)) {
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
console.log('Starting comprehensive syntax fix...');

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

console.log(`\nFixed syntax in ${totalFixed} files.`);

// Try to build to see if it works now
console.log('\nTrying to build...');
try {
  const { execSync } = require('child_process');
  execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Build successful!');
} catch (error) {
  console.log('Build still has issues, but many syntax errors should be resolved.');
}

console.log('Comprehensive syntax fix complete!');