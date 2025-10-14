#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  
  // Fix unterminated string literals
  fixed = fixed.replace(/'([^']*?)\n/g, "'$1'");
  fixed = fixed.replace(/"([^"]*?)\n/g, '"$1"');
  
  // Fix malformed imports
  fixed = fixed.replace(/';import/g, ";\nimport");
  fixed = fixed.replace(/';interface/g, ";\ninterface");
  
  // Fix broken JSX - remove duplicate returns and malformed JSX
  const lines = fixed.split('\n');
  const cleanedLines = [];
  let inJSX = false;
  let braceCount = 0;
  let returnCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines and comments
    if (!line || line.startsWith('//') || line.startsWith('/*')) {
      cleanedLines.push(lines[i]);
      continue;
    }
    
    // Count braces to track JSX state
    braceCount += (line.match(/\{/g) || []).length;
    braceCount -= (line.match(/\}/g) || []).length;
    
    // Track return statements
    if (line.includes('return')) {
      returnCount++;
    }
    
    // Skip duplicate return statements after the first one
    if (returnCount > 1 && line.includes('return')) {
      continue;
    }
    
    // Fix malformed JSX fragments
    if (line.includes('</>') && !line.includes('<>')) {
      continue;
    }
    
    // Fix broken JSX expressions
    if (line.includes('JSX expressions must have one parent element')) {
      continue;
    }
    
    // Fix malformed function parameters
    if (line.includes('t,itle =') || line.includes('description =')) {
      continue;
    }
    
    // Fix broken semicolons
    fixed = fixed.replace(/;;/g, ';');
    fixed = fixed.replace(/;}/g, '}');
    fixed = fixed.replace(/};/g, '}');
    
    // Fix malformed quotes
    fixed = fixed.replace(/'([^']*?)"/g, "'$1'");
    fixed = fixed.replace(/"([^"]*?)'/g, '"$1"');
    
    // Fix broken template literals
    fixed = fixed.replace(/`([^`]*?)\n/g, '`$1`');
    
    // Fix malformed object properties
    fixed = fixed.replace(/(\w+):\s*'([^']*?)'/g, '$1: "$2"');
    
    // Fix broken array syntax
    fixed = fixed.replace(/,\s*;/g, ',');
    fixed = fixed.replace(/\[\s*;/g, '[');
    fixed = fixed.replace(/;\s*\]/g, ']');
    
    // Fix broken function calls
    fixed = fixed.replace(/\(\s*;\s*\)/g, '()');
    fixed = fixed.replace(/\(\s*,\s*\)/g, '()');
    
    // Fix malformed JSX attributes
    fixed = fixed.replace(/=\s*"([^"]*?)"/g, '="$1"');
    fixed = fixed.replace(/=\s*'([^']*?)'/g, '="$1"');
    
    // Fix broken class names
    fixed = fixed.replace(/className="([^"]*?)"/g, (match, className) => {
      const cleaned = className.replace(/[^a-zA-Z0-9\s\-_]/g, ' ').trim();
      return `className="${cleaned}"`;
    });
    
    // Fix malformed TypeScript types
    fixed = fixed.replace(/:\s*any\s*;/g, ': unknown;');
    fixed = fixed.replace(/:\s*any\s*=/g, ': unknown =');
    fixed = fixed.replace(/:\s*any\s*\)/g, ': unknown)');
    
    // Fix broken interface definitions
    fixed = fixed.replace(/interface\s+(\w+)\s*\{\s*\}\s*(\w+)/g, 'interface $1 {\n  $2');
    
    // Fix malformed export statements
    fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*\{\s*return\s*\(\s*<div>Page content<\/div>\s*\);\s*\};\s*export\s+default\s+function/g, 'export default function');
    
    // Fix broken React components
    fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*\{\s*return\s*\(\s*<div>Page content<\/div>\s*\);\s*\};\s*return\s*\(\s*<div>/g, 'export default function $1() {\n  return (\n    <div>');
    
    // Fix malformed JSX closing tags
    fixed = fixed.replace(/<\/>\s*\);\s*<\/div>\s*<\/div>\s*\);\s*}/g, '</div>\n  );\n}');
    
    // Fix broken string concatenation
    fixed = fixed.replace(/'([^']*?)'\s*\+\s*'([^']*?)'/g, '"$1$2"');
    
    // Fix malformed object destructuring
    fixed = fixed.replace(/\{\s*(\w+)\s*,\s*(\w+)\s*\}\s*=/g, '{ $1, $2 } =');
    
    // Fix broken array destructuring
    fixed = fixed.replace(/\[\s*(\w+)\s*,\s*(\w+)\s*\]\s*=/g, '[ $1, $2 ] =');
    
    // Fix malformed function parameters
    fixed = fixed.replace(/\(\s*(\w+)\s*,\s*(\w+)\s*\)\s*=>/g, '($1, $2) =>');
    
    // Fix broken conditional expressions
    fixed = fixed.replace(/\?\s*([^:]*?)\s*:\s*([^;]*?);/g, ' ? $1 : $2');
    
    // Fix malformed template literals
    fixed = fixed.replace(/\$\{([^}]*?)\}/g, '${$1}');
    
    // Fix broken arrow functions
    fixed = fixed.replace(/=>\s*\{\s*;\s*\}/g, '=> {}');
    fixed = fixed.replace(/=>\s*\{\s*return\s*;\s*\}/g, '=> {}');
    
    // Fix malformed JSX props
    fixed = fixed.replace(/\{([^}]*?)\}/g, (match, content) => {
      if (content.includes('=') && !content.includes(':')) {
        return `{${content.replace(/=/g, ': ')}}`;
      }
      return match;
    });
    
    // Fix broken useEffect
    fixed = fixed.replace(/useEffect\(\s*\(\s*\)\s*=>\s*\{\s*;\s*\}\s*,\s*\[\s*\]\s*\)/g, 'useEffect(() => {}, [])');
    
    // Fix malformed useState
    fixed = fixed.replace(/useState\(\s*\(\s*\)\s*=>\s*\{\s*;\s*\}\s*\)/g, 'useState(() => ({}))');
    
    // Fix broken component structure
    if (filePath.includes('.tsx') || filePath.includes('.jsx')) {
      // Ensure proper component structure
      if (fixed.includes('export default function') && !fixed.includes('React')) {
        fixed = "import React from 'react';\n" + fixed;
      }
      
      // Fix malformed JSX return
      if (fixed.includes('return (') && !fixed.includes('</div>')) {
        fixed = fixed.replace(/return\s*\(\s*<div>([^<]*?)<\/div>\s*\);\s*<\/div>\s*<\/div>\s*\);/g, 'return (\n    <div>\n      $1\n    </div>\n  );');
      }
    }
    
    cleanedLines.push(lines[i]);
  }
  
  return cleanedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content, filePath);
    
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

// Main function
async function main() {
  console.log('Starting syntax error fixes...');
  
  // Get all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.{ts,tsx,js,jsx}',
    'src/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'pages/**/*.{ts,tsx,js,jsx}',
    'utils/**/*.{ts,tsx,js,jsx}',
    'hooks/**/*.{ts,tsx,js,jsx}',
    'contexts/**/*.{ts,tsx,js,jsx}',
    'config/**/*.{ts,tsx,js,jsx}',
    'data/**/*.{ts,tsx,js,jsx}',
    'types/**/*.{ts,tsx,js,jsx}'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`Fixed ${totalFixed} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };