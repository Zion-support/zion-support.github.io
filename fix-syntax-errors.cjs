#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript and JavaScript files
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { 
  ignore: ['node_modules/**', 'dist/**', 'app-broken/**', 'app-disabled/**'] 
});

console.log(`Found ${files.length} files to process...`);

let fixedFiles = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    
    // Fix missing semicolons after interface properties
    content = content.replace(/(\w+):\s*([^;,\n}]+)(?=\s*[,\n}])/g, (match, prop, value) => {
      if (!value.includes(';') && !value.includes('{') && !value.includes('(')) {
        return `${prop}: ${value};`;
      }
      return match;
    });
    
    // Fix duplicate interface properties
    const lines = content.split('\n');
    const cleanedLines = [];
    const seenProps = new Set();
    let inInterface = false;
    
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('interface ') || trimmedLine.startsWith('type ')) {
        inInterface = true;
        seenProps.clear();
        cleanedLines.push(line);
        return;
      }
      
      if (inInterface && trimmedLine === '}') {
        inInterface = false;
        cleanedLines.push(line);
        return;
      }
      
      if (inInterface && trimmedLine.includes(':')) {
        const propMatch = trimmedLine.match(/^(\w+):/);
        if (propMatch) {
          const propName = propMatch[1];
          if (seenProps.has(propName)) {
            // Skip duplicate property
            return;
          }
          seenProps.add(propName);
        }
      }
      
      cleanedLines.push(line);
    });
    
    content = cleanedLines.join('\n');
    
    // Fix malformed function declarations
    content = content.replace(/export\s+function\s+(\w+)\s*\([^)]*\)\s*{\s*export\s+const\s+\1/g, 'export const $1');
    
    // Fix duplicate export statements
    const exportLines = content.split('\n').filter(line => line.trim().startsWith('export '));
    const uniqueExports = new Set();
    const finalLines = [];
    
    content.split('\n').forEach(line => {
      if (line.trim().startsWith('export ')) {
        const exportContent = line.trim();
        if (!uniqueExports.has(exportContent)) {
          uniqueExports.add(exportContent);
          finalLines.push(line);
        }
      } else {
        finalLines.push(line);
      }
    });
    
    content = finalLines.join('\n');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
    }
    
    // Fix malformed JSX
    content = content.replace(/<(\w+)\s*([^>]*?)\s*>\s*<\/\1>\s*<(\w+)\s*([^>]*?)\s*>/g, '<$1 $2></$1>\n<$3 $4>');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed syntax in: ${file}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed syntax in ${fixedFiles} files.`);