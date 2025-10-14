#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals in import statements
  fixed = fixed.replace(/import\s+.*?from\s+"([^"]*?)(?:\n|$)/g, (match, importPath) => {
    if (!match.includes('"') || match.split('"').length % 2 === 0) {
      return match.replace(/([^"]*?)(?:\n|$)/, '$1"\n');
    }
    return match;
  });
  
  // Fix unterminated string literals in general
  fixed = fixed.replace(/"([^"]*?)(?:\n|$)/g, (match, str) => {
    if (match.endsWith('\n') && !match.endsWith('"\n')) {
      return `"${str}"\n`;
    }
    return match;
  });
  
  // Fix malformed import statements
  fixed = fixed.replace(/import\s+([^"]*?)\s+from\s+"([^"]*?)"([^;]*?)(?:\n|$)/g, (match, imports, module, rest) => {
    if (rest && !rest.includes(';')) {
      return `import ${imports} from "${module}";\n`;
    }
    return match;
  });
  
  // Fix broken JSX attributes
  fixed = fixed.replace(/className="([^"]*?)(?:\n|$)/g, (match, className) => {
    if (match.endsWith('\n') && !match.endsWith('"\n')) {
      return `className="${className}"\n`;
    }
    return match;
  });
  
  // Fix merge conflict markers
  fixed = fixed.replace(/[\s\S]*?  fixed = fixed.replace(/<<<<<<< [^\n]*[\s\S]*?[\s\S]*?  
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{([^}]*?)(?:\n|$)/g, (match, name, body) => {
    if (!match.includes('}')) {
      return `const ${name}: React.FC = () => {\n${body}\n};\n`;
    }
    return match;
  });
  
  // Fix broken JSX structure - add missing closing tags
  const openTags = (fixed.match(/<(\w+)(?:\s[^>]*)?>/g) || []).length;
  const closeTags = (fixed.match(/<\/(\w+)>/g) || []).length;
  
  // Fix common JSX issues
  fixed = fixed.replace(/<(\w+)([^>]*?)(?:\n|$)/g, (match, tag, attrs) => {
    if (match.endsWith('\n') && !match.includes('>')) {
      return `<${tag}${attrs}>\n`;
    }
    return match;
  });
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+)(?:\n|$)/g, (match, key, value) => {
    if (match.endsWith('\n') && !match.includes(',')) {
      return `${key}: ${value},\n`;
    }
    return match;
  });
  
  return fixed;
}

// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixSyntaxErrors(content);
    
    // If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix common syntax errors in TSX files
function fixTsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed Helmet tags
    if (content.includes('<Helmet></Helmet>')) {
      content = content.replace(/<Helmet><\/Helmet>\s*<title>/g, '<Helmet>\n        <title>');
      content = content.replace(/<Helmet><\/Helmet>\s*<meta/g, '<Helmet>\n        <meta');
      modified = true;
    }

    // Fix unterminated string literals
    content = content.replace(/"([^"]*)\n/g, '"$1"\n');
    content = content.replace(/'([^']*)\n/g, "'$1'\n");

    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1></section>');
    content = content.replace(/<button([^>]*)>\s*$/gm, '<button$1></button>');

    // Fix JSX expressions without parent elements
    content = content.replace(/return\s*\(\s*<div([^>]*)>\s*<Helmet/g, 'return (\n    <div$1>\n      <Helmet');

    // Fix missing semicolons and commas
    content = content.replace(/(\w+)\s*=\s*\{([^}]*)\}\s*$/gm, '$1: {$2},');
    content = content.replace(/(\w+)\s*:\s*([^,}]+)\s*$/gm, '$1: $2,');

    // Fix malformed function parameters
    content = content.replace(/React\.ChangeEvent<HTMLInputElement \| HTMLTextAreaElement><\/HTMLInputElement>/g, 'React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>');

    // Fix array syntax issues
    content = content.replace(/\[\s*"([^"]*)"\s*$/gm, '["$1"]');
    content = content.replace(/\[\s*{/gm, '[{');
    content = content.replace(/}\s*\]/gm, '}]');

    // Fix object syntax issues
    content = content.replace(/{\s*"([^"]*)"\s*$/gm, '{"$1"');
    content = content.replace(/}\s*$/gm, '},');

    // Fix missing closing parentheses
    content = content.replace(/\(\s*$/gm, '()');

    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*)\s*$/gm, 'className="$1"');
    content = content.replace(/href="([^"]*)\s*$/gm, 'href="$1"');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
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
  
  // Find all TypeScript and TSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '**/*.tsx',
    '**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**'] 
    });
    
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`Fixed ${totalFixed} files`);
}

main().catch(console.error);
