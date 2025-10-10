#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  // Fix malformed button elements
  content = content.replace(
    /<button>\s*onClick=\{([^}]+)\}\s*className="([^"]+)"<\/button>\s*>/g,
    '<button\n                onClick={$1}\n                className="$2"\n              >'
  );
  
  // Fix malformed Link elements
  content = content.replace(
    /<Link\s+key=\{([^}]+)\}\s+href=\{([^}]+)\}\s+className="([^"]+)"\s*>\s*onClick=\{([^}]+)\}\s*><\/Link>\s*<([^>]+)\s+className="([^"]+)"\s*\/>/g,
    '<Link\n                        key={$1}\n                        href={$2}\n                        className="$3"\n                        onClick={$4}\n                      >\n                        <$5 className="$6" />'
  );
  
  // Fix extra quotes in JSX attributes
  content = content.replace(/"\s*\/>/g, ' />');
  
  // Fix malformed closing tags
  content = content.replace(/<\/button>\s*>/g, '</button>');
  content = content.replace(/<\/Link>\s*>/g, '</Link>');
  
  // Fix extra quotes in text content
  content = content.replace(/>"([^<]+)"</g, '>$1<');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting JSX syntax fixes...');

const files = findFiles('.');
let processedCount = 0;

for (const file of files) {
  if (processFile(file)) {
    processedCount++;
  }
}

console.log(`\nJSX syntax fixes complete!`);
console.log(`Files processed: ${processedCount}`);