#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common issues
    const fixes = [
      // Fix trailing characters after closing parenthesis
      { pattern: /\)\s*,\s*\{\s*\n\s*export default/g, replacement: ');\n};\n\nexport default' },
      
      // Fix missing semicolons after function declarations
      { pattern: /\)\s*\}\s*\{\s*$/gm, replacement: ');\n};' },
      
      // Fix missing semicolons after imports
      { pattern: /import\s+[^;]+$/gm, replacement: (match) => match + ';' },
      
      // Fix semicolons in JSX
      { pattern: /<(\w+);/g, replacement: '<$1' },
      { pattern: /<\/(\w+);/g, replacement: '</$1' },
      { pattern: /className="([^"]*)";/g, replacement: 'className="$1"' },
      { pattern: /<title>([^<]*)<\/title>;/g, replacement: '<title>$1</title>' },
      { pattern: /<meta[^>]*\/>;/g, replacement: (match) => match.replace(';', '') },
      
      // Fix function declarations
      { pattern: /export default async \(/g, replacement: 'export default async function handler(' },
      
      // Fix JSX fragments
      { pattern: /<>;/g, replacement: '<>' },
      { pattern: /<\/>;/g, replacement: '</>' },
      
      // Fix trailing commas in function parameters
      { pattern: /,\s*\)/g, replacement: ')' },
      
      // Fix missing semicolons after return statements
      { pattern: /return\s*\([^)]*\)\s*$/gm, replacement: (match) => match + ';' },
      
      // Fix object literal syntax
      { pattern: /\}\s*,\s*\{/g, replacement: '};\n{' },
      
      // Fix component export syntax
      { pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\}\s*,\s*\{/g, replacement: (match) => {
        const componentName = match.match(/const\s+(\w+):/)[1];
        return match.replace(/,\s*\{$/, ';');
      }},
    ];

    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const sourceFiles = findSourceFiles('.');
console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
for (const file of sourceFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Syntax error fixes complete!');