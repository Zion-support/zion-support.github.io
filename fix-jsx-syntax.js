#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common JSX/TypeScript syntax issues
function fixJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing semicolons after imports
    content = content.replace(/import\s+[^;]+$/gm, (match) => {
      if (!match.endsWith(';')) {
        modified = true;
        return match + ';';
      }
      return match;
    });
    
    // Fix missing semicolons after variable declarations
    content = content.replace(/(const|let|var)\s+[^=]+=\s*[^;]+$/gm, (match) => {
      if (!match.endsWith(';') && !match.includes('{') && !match.includes('(')) {
        modified = true;
        return match + ';';
      }
      return match;
    });
    
    // Fix malformed JSX fragments
    content = content.replace(/<>(\s*<[^>]+>)/g, '<>\n$1');
    content = content.replace(/(<\/[^>]+>)\s*<>/g, '$1\n</>');
    
    // Fix missing closing tags for self-closing elements
    content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s+[^>]*[^/]>/g, (match, tagName) => {
      if (!match.endsWith('/>') && !match.includes('</' + tagName + '>')) {
        modified = true;
        return match.replace('>', ' />');
      }
      return match;
    });
    
    // Fix malformed object literals in arrays
    content = content.replace(/\[\s*\{[^}]*\}\s*\]/g, (match) => {
      // Check if the object is properly closed
      const openBraces = (match.match(/\{/g) || []).length;
      const closeBraces = (match.match(/\}/g) || []).length;
      if (openBraces !== closeBraces) {
        modified = true;
        return match.replace(/\}\s*\]/, '}\n  ]');
      }
      return match;
    });
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*([^,}]+)(?=\s*[}])/g, (match, key, value) => {
      if (!value.trim().endsWith(',')) {
        modified = true;
        return `${key}: ${value.trim()},`;
      }
      return match;
    });
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*([^}]+)\s*\}/g, (match, expr) => {
      // Check if the expression is properly formed
      if (expr.includes('{') && !expr.includes('}')) {
        modified = true;
        return `{${expr}}`;
      }
      return match;
    });
    
    // Fix missing return statements
    content = content.replace(/(const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*)(?!return\s)/g, (match) => {
      modified = true;
      return match + 'return ';
    });
    
    // Fix malformed function declarations
    content = content.replace(/(function\s+\w+\s*\([^)]*\)\s*)\{/g, (match) => {
      if (!match.endsWith('{')) {
        modified = true;
        return match + ' {';
      }
      return match;
    });
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }
    
    // Fix malformed array declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[\s*\]\s*;?\s*$/gm, (match, varName) => {
      modified = true;
      return `const ${varName} = [];`;
    });
    
    // Fix missing semicolons after function calls
    content = content.replace(/(\w+\([^)]*\))\s*$/gm, (match) => {
      if (!match.endsWith(';') && !match.endsWith('{') && !match.endsWith('}')) {
        modified = true;
        return match + ';';
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findTsxFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting JSX/TypeScript syntax fixes...');

const workspaceDir = process.cwd();
const tsxFiles = findTsxFiles(workspaceDir);

console.log(`Found ${tsxFiles.length} TypeScript/JSX files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of tsxFiles) {
  try {
    if (fixJsxSyntax(file)) {
      fixedCount++;
      console.log(`Fixed: ${file}`);
    }
  } catch (error) {
    console.error(`Failed to fix ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nSyntax fixes complete:`);
console.log(`- Files processed: ${tsxFiles.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);