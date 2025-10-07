#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Find all TypeScript/JSX files in src/components
const files = await glob('src/components/**/*.{tsx,ts}');

console.log(`Found ${files.length} files to check...`);

let fixedFiles = 0;

for (const filePath of files) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix backticks after JSX tags
    content = content.replace(/<(\w+)`/g, '<$1');
    
    // Fix orphaned /> tags (standalone /> on their own lines)
    content = content.replace(/^\s*\/>\s*$/gm, '');
    
    // Fix unterminated regular expression literals in object properties
    content = content.replace(/(\w+):\s*\/[^\/\n]*$/gm, (match, prop) => {
      const value = match.split(':')[1].trim();
      if (value.startsWith('/') && !value.endsWith('/')) {
        return `${prop}: '${value.substring(1)}'`;
      }
      return match;
    });
    
    // Fix malformed <br> tags
    content = content.replace(/<br\s*>\s*<\/br>/g, '<br />');
    content = content.replace(/<br\s*>\s*$/gm, '<br />');
    
    // Fix unterminated template literals
    content = content.replace(/`[^`]*$/gm, (match) => {
      if (!match.endsWith('`')) {
        return match + '`';
      }
      return match;
    });
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*\/[^\/\n]*$/gm, (match) => {
      const value = match.replace(/\{\s*\//, '').trim();
      return `{'${value}'}`;
    });
    
    // Fix specific patterns where /> appears in wrong places
    content = content.replace(/\s*\/>\s*<(\w+)/g, ' <$1');
    content = content.replace(/\s*\/>\s*<\/(\w+)>/g, '</$1>');
    
    // Fix malformed JSX attributes
    content = content.replace(/(\w+)=\{[^}]*$/gm, (match) => {
      if (!match.includes('}')) {
        return match + '}';
      }
      return match;
    });
    
    // Fix unterminated object properties
    content = content.replace(/(\w+):\s*\/[^\/\n]*$/gm, (match, prop) => {
      const value = match.split(':')[1].trim();
      if (value.startsWith('/') && !value.endsWith('/')) {
        return `${prop}: '${value.substring(1)}'`;
      }
      return match;
    });
    
    // Fix specific patterns with malformed closing tags
    content = content.replace(/\s*\/>\s*<(\w+)/g, ' <$1');
    content = content.replace(/\s*\/>\s*<\/(\w+)>/g, '</$1>');
    
    // Fix unterminated string literals
    content = content.replace(/'[^']*$/gm, (match) => {
      if (!match.endsWith("'")) {
        return match + "'";
      }
      return match;
    });
    
    // Fix unterminated double quotes
    content = content.replace(/"[^"]*$/gm, (match) => {
      if (!match.endsWith('"')) {
        return match + '"';
      }
      return match;
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`\nFixed ${fixedFiles} files.`);