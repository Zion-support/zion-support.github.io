#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax issues
    const originalContent = content;
    
    // Fix missing closing braces in JSX
    content = content.replace(/(<[^>]+>)([^<]*?)(<[^>]+>)/g, (match, open, middle, close) => {
      if (middle.includes('{') && !middle.includes('}')) {
        return match + '}';
      }
      return match;
    });
    
    // Fix unterminated string literals
    content = content.replace(/(['"`])([^'"`]*?)(\n|$)/g, (match, quote, str, end) => {
      if (!str.includes(quote)) {
        return quote + str + quote + end;
      }
      return match;
    });
    
    // Fix missing semicolons before const/function/export/import
    content = content.replace(/([^;])\s*(const|function|export|import|class|interface|type)\s/g, '$1;\n$2 ');
    
    // Fix double semicolons
    content = content.replace(/;;+/g, ';');
    
    // Fix missing spaces after semicolons
    content = content.replace(/;([a-zA-Z])/g, '; $1');
    
    // Fix common JSX issues
    content = content.replace(/(<[^>]+>)\s*([^<]*?)\s*(<[^>]+>)/g, (match, open, middle, close) => {
      if (middle.trim() && !middle.includes('{') && !middle.includes('}')) {
        return open + ' ' + middle.trim() + ' ' + close;
      }
      return match;
    });
    
    // Fix missing closing braces in object literals
    const lines = content.split('\n');
    let braceCount = 0;
    let inString = false;
    let stringChar = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
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
      
      // If we're at the end of a function/object and braces are unbalanced
      if (i === lines.length - 1 && braceCount > 0) {
        lines[i] += '}'.repeat(braceCount);
        modified = true;
      }
    }
    
    if (lines.length > 0) {
      content = lines.join('\n');
    }
    
    // Fix common React/JSX issues
    content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{/g, 'export default function $1() {');
    content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
    
    // Fix missing return statements in React components
    content = content.replace(/(const\s+\w+\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{)([^}]*?)(<[^>]+>)/g, (match, func, body, jsx) => {
      if (!body.includes('return')) {
        return func + '\n  return (' + body + jsx;
      }
      return match;
    });
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim();
    
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