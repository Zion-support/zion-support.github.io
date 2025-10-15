#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Patterns to fix
const fixes = [
  // Fix unterminated string literals with extra quotes and semicolons
  { pattern: /";\s*$/gm, replacement: '' },
  { pattern: /";\s*";\s*$/gm, replacement: '' },
  { pattern: /";\s*";\s*";\s*$/gm, replacement: '' },
  { pattern: /";\s*";\s*";\s*";\s*$/gm, replacement: '' },
  { pattern: /";\s*";\s*";\s*";\s*";\s*$/gm, replacement: '' },
  { pattern: /";\s*";\s*";\s*";\s*";\s*";\s*$/gm, replacement: '' },
  // Fix import statements with extra quotes and semicolons
  { pattern: /import\s+([^;]+);\s*";\s*$/gm, replacement: 'import $1;' },
  { pattern: /import\s+([^;]+);\s*";\s*";\s*$/gm, replacement: 'import $1;' },
  { pattern: /import\s+([^;]+);\s*";\s*";\s*";\s*$/gm, replacement: 'import $1;' },
  // Fix export statements
  { pattern: /export\s+([^;]+);\s*";\s*$/gm, replacement: 'export $1;' },
  { pattern: /export\s+([^;]+);\s*";\s*";\s*$/gm, replacement: 'export $1;' },
  // Fix JSX attributes with extra quotes
  { pattern: /<(\w+)\s+([^>]*?);\s*";\s*>/gm, replacement: '<$1 $2>' },
  { pattern: /<(\w+)\s+([^>]*?);\s*";\s*";\s*>/gm, replacement: '<$1 $2>' },
  // Fix variable declarations with extra colons
  { pattern: /const:\s+/gm, replacement: 'const ' },
  { pattern: /let:\s+/gm, replacement: 'let ' },
  { pattern: /var:\s+/gm, replacement: 'var ' },
  // Fix type annotations with extra colons
  { pattern: /:\s*:\s*/gm, replacement: ': ' },
  // Fix JSX closing tags with extra quotes
  { pattern: /<\/(\w+)>\s*";\s*$/gm, replacement: '</$1>' },
  { pattern: /<\/(\w+)>\s*";\s*";\s*$/gm, replacement: '</$1>' },
  // Fix function declarations
  { pattern: /function\s+([^(]+)\s*\(\s*([^)]*)\s*\)\s*{\s*";\s*$/gm, replacement: 'function $1($2) {' },
  // Fix arrow functions
  { pattern: /=>\s*{\s*";\s*$/gm, replacement: '=> {' },
  { pattern: /=>\s*{\s*";\s*";\s*$/gm, replacement: '=> {' },
  // Fix object properties
  { pattern: /(\w+):\s*([^,}]+);\s*";\s*$/gm, replacement: '$1: $2' },
  // Fix array elements
  { pattern: /,\s*";\s*$/gm, replacement: '' },
  { pattern: /,\s*";\s*";\s*$/gm, replacement: '' },
  // Fix template literals
  { pattern: /`([^`]*);\s*";\s*`/gm, replacement: '`$1`' },
  // Fix comments
  { pattern: /\/\/\s*([^;]+);\s*";\s*$/gm, replacement: '// $1' },
  { pattern: /\/\*\s*([^*]+)\*\/\s*";\s*$/gm, replacement: '/* $1 */' },
  // Fix vite config specific issues
  { pattern: /import\s+([^;]+);\s*";\s*from\s+['"]([^'"]+)['"];?\s*";\s*$/gm, replacement: "import $1 from '$2';" },
  // Fix React component syntax
  { pattern: /const\s+(\w+):\s*(\w+)\s*=\s*\([^)]*\)\s*=>\s*{\s*";\s*$/gm, replacement: 'const $1: $2 = ($3) => {' },
  // Fix JSX return statements
  { pattern: /return\s*\(\s*";\s*$/gm, replacement: 'return (' },
  { pattern: /return\s*\(\s*";\s*";\s*$/gm, replacement: 'return (' },
  // Fix closing parentheses and braces
  { pattern: /\)\s*;\s*";\s*$/gm, replacement: ');' },
  { pattern: /}\s*;\s*";\s*$/gm, replacement: '};' },
  { pattern: /}\s*;\s*";\s*";\s*$/gm, replacement: '};' },
  // Fix semicolons at end of lines
  { pattern: /;\s*";\s*$/gm, replacement: ';' },
  { pattern: /;\s*";\s*";\s*$/gm, replacement: ';' },
  // Fix quotes in strings
  { pattern: /'([^']*);\s*";\s*'/gm, replacement: "'$1'" },
  { pattern: /"([^"]*);\s*";\s*"/gm, replacement: '"$1"' },
  // Fix multiline strings
  { pattern: /;\s*";\s*\n/gm, replacement: '\n' },
  { pattern: /;\s*";\s*";\s*\n/gm, replacement: '\n' },
  // Fix specific patterns found in the files
  { pattern: /import\s+{\s*([^}]+)\s*}\s*;\s*from\s+['"]([^'"]+)['"]\s*;\s*";\s*$/gm, replacement: "import { $1 } from '$2';" },
  { pattern: /import\s+{\s*([^}]+)\s*}\s*;\s*from\s+['"]([^'"]+)['"]\s*;\s*";\s*";\s*$/gm, replacement: "import { $1 } from '$2';" },
  // Fix Helmet import specifically
  { pattern: /import\s+{\s*Helmet\s*}\s*;\s*from\s+["']react-helmet-async["']\s*;\s*";\s*";\s*";\s*$/gm, replacement: "import { Helmet } from 'react-helmet-async';" },
  // Fix Brain, Shield, Users, Award imports
  { pattern: /import\s+{\s*Brain,\s*Shield,\s*Users,\s*Award\s*}\s*;\s*from\s+['"]([^'"]+)['"]\s*;\s*";\s*";\s*";\s*";\s*$/gm, replacement: "import { Brain, Shield, Users, Award } from '$1';" },
  // Fix SEOHead type definition
  { pattern: /const:\s*SEOHead\s*=\s*\([^)]*\)\s*=>\s*\(\s*";\s*$/gm, replacement: 'const SEOHead = ($1) => (' },
  // Fix meta tag syntax
  { pattern: /<meta:\s*name\s*=\s*["']([^"']+)["']\s*content\s*=\s*{([^}]+)}\s*\/>\s*;\s*";\s*";\s*$/gm, replacement: '<meta name="$1" content={$2} />' },
  // Fix closing Helmet tag
  { pattern: /<\/Helmet>\s*;\s*";\s*$/gm, replacement: '</Helmet>' },
  { pattern: /<\/Helmet>\s*;\s*";\s*";\s*$/gm, replacement: '</Helmet>' },
  // Fix closing parenthesis
  { pattern: /\)\s*;\s*";\s*$/gm, replacement: ')' },
  { pattern: /\)\s*;\s*";\s*";\s*$/gm, replacement: ')' },
  // Fix semicolon at end of file
  { pattern: /;\s*";\s*$/gm, replacement: ';' },
  { pattern: /;\s*";\s*";\s*$/gm, replacement: ';' },
  // Fix empty lines with just quotes and semicolons
  { pattern: /^\s*";\s*$/gm, replacement: '' },
  { pattern: /^\s*";\s*";\s*$/gm, replacement: '' },
  { pattern: /^\s*";\s*";\s*";\s*$/gm, replacement: '' },
  { pattern: /^\s*";\s*";\s*";\s*";\s*$/gm, replacement: '' },
  { pattern: /^\s*";\s*";\s*";\s*";\s*";\s*$/gm, replacement: '' },
  { pattern: /^\s*";\s*";\s*";\s*";\s*";\s*";\s*$/gm, replacement: '' },
  // Fix lines that are just semicolons
  { pattern: /^\s*;\s*$/gm, replacement: '' },
  { pattern: /^\s*;\s*";\s*$/gm, replacement: '' },
  { pattern: /^\s*;\s*";\s*";\s*$/gm, replacement: '' },
];
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    // Apply all fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    // Additional cleanup
    content = content
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive empty lines
      .replace(/^\s*\n/gm, '') // Remove empty lines at start
      .replace(/\n\s*$/g, '\n') // Remove trailing whitespace
      .trim();
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}
async function main() {
  console.log('Starting syntax error fixes...');
  // Get all TypeScript and JavaScript files
  const patterns = [
    '**/*.ts',
    '**/*.tsx',
    '**/*.js',
    '**/*.jsx',
    '**/*.mjs',
    '**/*.cjs'
  ];
  let totalFiles = 0;
  let fixedFiles = 0;
  for (const pattern of patterns) {
    const files = await glob(pattern, {
      ignore: [
        'node_modules/**',
        'dist/**',
        '.next/**',
        'out/**',
        '**/*.d.ts'
      ]
    });
    for (const file of files) {
      totalFiles++;
      if (fixFile(file)) {
        fixedFiles++;
      }
    }
  }
  console.log(`\nFixed ${fixedFiles} out of ${totalFiles} files`);
  console.log('Syntax error fixes completed!');
}
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
export { fixFile, fixes };