<<<<<<< HEAD
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common syntax error patterns to fix
const fixes = [
  // Fix unterminated string literals
  {
    pattern: /import.*from\s+['"][^'"]*$/gm,
    replacement: match => match + "';",
  },

  // Fix extra commas and colons
  { pattern: /,,+/g, replacement: ',' },
  { pattern: /:,,+/g, replacement: ':' },
  { pattern: /:>/g, replacement: ' =>' },
  { pattern: /:>/g, replacement: ' =>' },

  // Fix malformed function parameters
  { pattern: /\(([^)]*):\s*>/g, replacement: '($1) =>' },

  // Fix malformed type annotations
  { pattern: /:\s*string;,+/g, replacement: ': string;' },
  { pattern: /:\s*number;,+/g, replacement: ': number;' },
  { pattern: /:\s*boolean;,+/g, replacement: ': boolean;' },

  // Fix malformed imports
  {
    pattern: /import\s+.*from\s+['"][^'"]*;,+/g,
    replacement: match => match.replace(/;,+/g, ';'),
  },

  // Fix malformed template literals
  { pattern: /`[^`]*$/gm, replacement: match => match + '`' },

  // Fix malformed object properties
  { pattern: /:\s*\{\s*as\s+T\s*;/g, replacement: ': {} as T;' },

  // Fix malformed class properties
  {
    pattern: /private\s+(\w+):\s*(\w+):\s*(\d+),+/g,
    replacement: 'private $1: $2 = $3;',
  },

  // Fix malformed method signatures
  { pattern: /(\w+):\s*\(\):\s*(\w+):\s*>/g, replacement: '$1: () => $2' },

  // Fix malformed array/object destructuring
  { pattern: /\[([^\]]*):\s*>/g, replacement: '[$1]' },

  // Fix malformed generic types
  { pattern: /<T\s*>/g, replacement: '<T>' },

  // Fix malformed interface properties
  { pattern: /readonly\s+(\w+):\s*(\w+);,+/g, replacement: 'readonly $1: $2;' },

  // Fix malformed reference directives
  {
    pattern: /\/\/\/\s*<reference\s+types:\s*["']([^"']*)["']\s*\/>;,+/g,
    replacement: '/// <reference types="$1" />',
  },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });

    // Additional specific fixes
    content = content
      .replace(/,,+/g, ',')
      .replace(/;\s*;+/g, ';')
      .replace(/\{\s*;\s*\}/g, '{}')
      .replace(/\(\s*;\s*\)/g, '()')
      .replace(/\[\s*;\s*\]/g, '[]')
      .replace(/\s+;/g, ';')
      .replace(/;\s+/g, '; ')
      .replace(/\s+/g, ' ')
      .replace(/\n\s*\n\s*\n/g, '\n\n');

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

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.startsWith('.') &&
      file !== 'node_modules'
    ) {
      fixedCount += walkDirectory(filePath);
    } else if (
      file.endsWith('.ts') ||
      file.endsWith('.tsx') ||
      file.endsWith('.js') ||
      file.endsWith('.jsx')
    ) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

console.log('Starting syntax fix...');
const fixedCount = walkDirectory('./src');
console.log(`Fixed ${fixedCount} files`);
=======
#!/usr/bin/env node import fs from 'fs';' import path from 'path';' import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); // Common syntax error patterns to fix const fixes = [ // Fix unterminated string literals' { pattern: /import.*from\s+['"][^'"]*$/gm, replacement: (match) => match + "';" }, // Fix extra commas and colons' { pattern: /,+/g, replacement: ',' },' { pattern: /:,+/g, replacement: ':' },' { pattern: /:>/g, replacement: ' =>' },' { pattern: /:>/g, replacement: ' =>' }, // Fix malformed function parameters' { pattern: /\(([^)]*):\s*>/g, replacement: '($1) =>' }, // Fix malformed type annotations' { pattern: /:\s*string;,+/g, replacement: ': string;' },' { pattern: /:\s*number;,+/g, replacement: ': number;' },' { pattern: /:\s*boolean;,+/g, replacement: ': boolean;' }, // Fix malformed imports' { pattern: /import\s+.*from\s+['"][^'"]*;,+/g, replacement: (match) => match.replace(/;,+/g, ';') }, // Fix malformed template literals' { pattern: /`[^`]*$/gm, replacement: (match) => match + '`' }, // Fix malformed object properties' { pattern: /:\s*\{\s*as\s+T\s*;/g, replacement: ': {} as T;' }, // Fix malformed class properties' { pattern: /private\s+(\w+):\s*(\w+):\s*(\d+),+/g, replacement: 'private $1: $2 = $3;' }, // Fix malformed method signatures' { pattern: /(\w+):\s*\(\):\s*(\w+):\s*>/g, replacement: '$1: () => $2' }, // Fix malformed array/object destructuring' { pattern: /\[([^\]]*):\s*>/g, replacement: '[$1]' }, // Fix malformed generic types' { pattern: /<T\s*>/g, replacement: '<T>' }, // Fix malformed interface properties' { pattern: /readonly\s+(\w+):\s*(\w+);,+/g, replacement: 'readonly $1: $2;' }, // Fix malformed reference directives' { pattern: /\/\/\/\s*<reference\s+types:\s*["']([^"']*)["']\s*\/>;,+/g, replacement: '/// <reference types="$1" />' }, ]; function fixFile(filePath) { try {' let content = fs.readFileSync(filePath, 'utf8'); let originalContent = content; // Apply fixes fixes.forEach(fix => {' if (typeof fix.replacement === 'function') { content = content.replace(fix.pattern, fix.replacement); } else { content = content.replace(fix.pattern, fix.replacement); } }); // Additional specific fixes content = content' .replace(/,+/g, ',')' .replace(/;\s*;+/g, ';')' .replace(/\{\s*;\s*\}/g, '{}')' .replace(/\(\s*;\s*\)/g, '()')' .replace(/\[\s*;\s*\]/g, '[]')' .replace(/\s+;/g, ';')' .replace(/;\s+/g, '; ')' .replace(/\s+/g, ' ')' .replace(/\n\s*\n\s*\n/g, '\n\n'); if (content !== originalContent) {' fs.writeFileSync(filePath, content, 'utf8'); console.log(`Fixed: ${filePath}`); return true; } return false; } catch (error) { console.error(`Error fixing ${filePath}:`, error.message); return false; } } function walkDirectory(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; files.forEach(file => { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); ' if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') { fixedCount += walkDirectory(filePath);' } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) { if (fixFile(filePath)) { fixedCount++; } } }); return fixedCount; } ' console.log('Starting syntax fix...');' const fixedCount = walkDirectory('./src'); console.log(`Fixed ${fixedCount} files`);'
>>>>>>> b64650e00461d09eaf1ec492cc713ff355215146
