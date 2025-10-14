#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals
  fixed = fixed.replace(/"([^"]*?)(?:\n|$)/g, (match, str) => {
    if (!match.endsWith('"')) {
      return `"${str}"`;
    }
    return match;
  });
  
  // Fix broken JSX attributes
  fixed = fixed.replace(/className=([^"'\s>]+)/g, 'className="$1"');
  fixed = fixed.replace(/href=([^"'\s>]+)/g, 'href="$1"');
  fixed = fixed.replace(/to=([^"'\s>]+)/g, 'to="$1"');
  fixed = fixed.replace(/key=([^"'\s>]+)/g, 'key="$1"');
  
  // Fix missing quotes in object properties
  fixed = fixed.replace(/(\w+)=([^"'\s,}]+)/g, '$1="$2"');
  
  // Fix broken imports
  fixed = fixed.replace(/import\s+([^"']+)\s+from\s+([^"';]+);?/g, (match, imports, from) => {
    const cleanFrom = from.replace(/[^a-zA-Z0-9@/._-]/g, '');
    return `import ${imports} from "${cleanFrom}";`;
  });
  
  // Fix broken JSX closing tags
  fixed = fixed.replace(/<(\w+)([^>]*)>\s*$/gm, (match, tag, attrs) => {
    return `<${tag}${attrs}></${tag}>`;
  });
  
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}])\s*$/gm, '$1;');
  
  // Fix broken function declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g, (match, name) => {
    return `const ${name} = () => {`;
  });
  
  // Fix broken return statements
  fixed = fixed.replace(/return\s*\(\s*$/gm, 'return (');
  
  // Fix broken JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/^\s*<\/>/gm, '</>');
  
  // Fix broken object literals
  fixed = fixed.replace(/(\w+):\s*([^,}]+)/g, (match, key, value) => {
    const cleanValue = value.replace(/[^a-zA-Z0-9"'_/.-]/g, '');
    return `${key}: "${cleanValue}"`;
  });
  
  // Fix broken template literals
  fixed = fixed.replace(/`([^`]*?)(?:\n|$)/g, (match, str) => {
    if (!match.endsWith('`')) {
      return `\`${str}\``;
    }
    return match;
  });
  
  return fixed;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting syntax error fixes...');

  // Get all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.jsx',
    'app/**/*.js'
  ];

  let totalFixed = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern);
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }

  console.log(`Fixed ${totalFixed} files`);
}

main().catch(console.error);