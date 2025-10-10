#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const originalContent = content;
    
    // Fix common syntax issues
    content = content
      // Fix extra semicolons and quotes in imports and statements
      .replace(/';';/g, "';")
      .replace(/';/g, ";")
      .replace(/";";/g, '";')
      .replace(/";/g, ";")
      .replace(/`;`;/g, "`;")
      .replace(/`;/g, ";")
      
      // Fix extra semicolons after const/function/export/import
      .replace(/(const|function|export|import|class|interface|type)\s+([^;]+);;/g, '$1 $2;')
      .replace(/(const|function|export|import|class|interface|type)\s+([^;]+);\s*;/g, '$1 $2;')
      
      // Fix unterminated string literals
      .replace(/(['"`])([^'"`]*?)(\n|$)/g, (match, quote, str, end) => {
        if (!str.includes(quote) && str.trim()) {
          return quote + str + quote + end;
        }
        return match;
      })
      
      // Fix missing spaces after semicolons
      .replace(/;([a-zA-Z])/g, '; $1')
      
      // Fix double semicolons
      .replace(/;;+/g, ';')
      
      // Fix extra semicolons in JSX
      .replace(/;\s*const\s/g, '\nconst ')
      .replace(/;\s*function\s/g, '\nfunction ')
      .replace(/;\s*export\s/g, '\nexport ')
      .replace(/;\s*import\s/g, '\nimport ')
      .replace(/;\s*class\s/g, '\nclass ')
      .replace(/;\s*interface\s/g, '\ninterface ')
      .replace(/;\s*type\s/g, '\ntype ')
      
      // Fix React component syntax
      .replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{;/g, 'const $1: React.FC = () => {')
      .replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{;/g, 'export default function $1() {')
      
      // Fix missing return statements in React components
      .replace(/(const\s+\w+\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{)([^}]*?)(<[^>]+>)/g, (match, func, body, jsx) => {
        if (!body.includes('return') && jsx) {
          return func + '\n  return (' + body + jsx;
        }
        return match;
      })
      
      // Fix missing closing braces
      .replace(/(<[^>]+>)([^<]*?)(<[^>]+>)/g, (match, open, middle, close) => {
        if (middle.includes('{') && !middle.includes('}')) {
          return match + '}';
        }
        return match;
      })
      
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/\s+$/gm, '')
      .trim();
    
    // Fix specific patterns that are common in this codebase
    const lines = content.split('\n');
    let fixedLines = [];
    let inString = false;
    let stringChar = '';
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Fix unterminated strings
      if (!inString && (line.includes("'") || line.includes('"') || line.includes('`'))) {
        const quotes = ["'", '"', '`'];
        for (const quote of quotes) {
          const quoteCount = (line.match(new RegExp(quote, 'g')) || []).length;
          if (quoteCount % 2 === 1) {
            line = line + quote;
            modified = true;
          }
        }
      }
      
      // Fix missing closing braces
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if (!inString && (char === '"' || char === "'" || char === '`')) {
          inString = true;
          stringChar = char;
        } else if (inString && char === stringChar && line[j-1] !== '\\') {
          inString = false;
          stringChar = '';
        } else if (!inString) {
          if (char === '{') {
            braceCount++;
          } else if (char === '}') {
            braceCount--;
          }
        }
      }
      
      fixedLines.push(line);
    }
    
    // Add missing closing braces at the end
    if (braceCount > 0) {
      fixedLines.push('}'.repeat(braceCount));
      modified = true;
    }
    
    content = fixedLines.join('\n');
    
    // Final cleanup
    content = content
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/\s+$/gm, '')
      .trim();
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
console.log('Finding files to fix...');

const files = findFilesWithErrors(appDir);
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\nFixed ${fixedCount} files`);
console.log(`Errors in ${errorCount} files`);