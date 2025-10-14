#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Remove merge conflict markers
  fixed = fixed.replace(/
  fixed = fixed.replace(/
  fixed = fixed.replace(//g, '');

  // Fix unterminated string literals - look for strings that don't have proper closing quotes
  // This is a complex pattern, so we'll handle common cases
  fixed = fixed.replace(/"([^"]*?)\n/g, (match, content) => {
    // If the line ends with a quote, it's probably fine
    if (content.endsWith('"')) return match
    // Otherwise, add the missing quote
    return `"${content}\n`
  });

  // Fix double quotes at the end of lines
  fixed = fixed.replace(/"\s*"\s*\n/g, '"\n')
  fixed = fixed.replace(/"\s*"\s*;/g, '";')
  fixed = fixed.replace(/"\s*"\s*,/g, '",')
  fixed = fixed.replace(/"\s*"\s*\)/g, '")')

  // Fix malformed JSX - common patterns
  fixed = fixed.replace(/<div className="([^"]*?)\s*>\s*<\/div>\s*"/g, '<div className="$1"></div>')
  fixed = fixed.replace(/<div className="([^"]*?)\s*>\s*<\/div>\s*"/g, '<div className="$1"></div>')
  
  // Fix extra semicolons and quotes
  fixed = fixed.replace(/;\s*"/g, '')
  fixed = fixed.replace(/,\s*"/g, '')
  fixed = fixed.replace(/\)\s*"/g, ')')
  fixed = fixed.replace(/}\s*"/g, '}')
  fixed = fixed.replace(/]\s*"/g, ']')
  fixed = fixed.replace(/>\s*"/g, '>')

  // Fix import statements with extra quotes
  fixed = fixed.replace(/import\s+([^;]+);\s*"/g, 'import $1;')
  fixed = fixed.replace(/from\s+"([^"]+)\s*"/g, 'from "$1"')

  // Fix JSX closing tags
  fixed = fixed.replace(/<\/div>\s*"/g, '</div>')
  fixed = fixed.replace(/<\/h[1-6]>\s*"/g, (match) => match.replace('"', ''))
  fixed = fixed.replace(/<\/p>\s*"/g, '</p>')
  fixed = fixed.replace(/<\/span>\s*"/g, '</span>')
  fixed = fixed.replace(/<\/button>\s*"/g, '</button>')

  // Fix function declarations
  fixed = fixed.replace(/const\s+([^=]+)=\s*\(\)\s*=>\s*\(\s*"/g, 'const $1 = () => (')
  fixed = fixed.replace(/export\s+default\s+([^;]+);\s*"/g, 'export default $1;')

  // Fix return statements
  fixed = fixed.replace(/return\s*\(\s*"/g, 'return (')
  fixed = fixed.replace(/return\s*\(\s*<([^>]+)>\s*"/g, 'return (<$1>')

  // Remove extra quotes at the end of lines
  fixed = fixed.replace(/\s*"\s*\n/g, '\n')
  fixed = fixed.replace(/\s*"\s*$/g, '')

  // Fix JSX fragments
  fixed = fixed.replace(/<>\s*"/g, '<>')
  fixed = fixed.replace(/<\/>\s*"/g, '</>')

  // Fix Helmet tags
  fixed = fixed.replace(/<Helmet>\s*<\/Helmet>\s*"/g, '<Helmet></Helmet>')
  fixed = fixed.replace(/<title>([^<]+)<\/title>\s*"/g, '<title>$1</title>')
  fixed = fixed.replace(/<meta\s+([^>]+)\s*\/>\s*"/g, '<meta $1 />')

  // Fix common JSX patterns
  fixed = fixed.replace(/className="([^"]*?)\s*>\s*<\/div>\s*"/g, 'className="$1"></div>')
  fixed = fixed.replace(/className="([^"]*?)\s*>\s*<\/h[1-6]>\s*"/g, 'className="$1"></h1>')

  // Remove trailing quotes and semicolons
  fixed = fixed.replace(/\s*"\s*;\s*$/gm, '')
  fixed = fixed.replace(/\s*"\s*$/gm, '')

  return fixed;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
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

// Main execution
console.log('Starting syntax error fixes...');

// Get all TypeScript and JavaScript files
const patterns = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'app/**/*.jsx',
  'app/**/*.js',
  '*.tsx',
  '*.ts',
  '*.jsx',
  '*.js'
];

let totalFixed = 0;

patterns.forEach(async pattern => {
  const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**', '.next/**'] });
  
  files.forEach(file => {
    if (fixFile(file)) {
      totalFixed++;
    }
  });
});

console.log(`Fixed ${totalFixed} files`);
console.log('Syntax error fixes completed!');