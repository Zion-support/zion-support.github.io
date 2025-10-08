#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

//Find all TypeScript/JSX files in src/components
const files = await glob('src/components/**/*.{tsx,ts}');

// console.log(`Found ${files.length} files to check...`);

let fixedFiles = 0;

for (const filePath of files) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    //Fix orphaned /> tags (standalone /> on their own lines)
    content = content.replace(/^\s*\/>\s*$/gm, '');

    //Fix unterminated regular expression literals in object properties
    //Pattern: property: /pattern without closing /content = content.replace(/(\w+):\s*\/[^\/\n]*$/gm, (match, prop) => {
      const value = match.split(':')[1].trim();
      if (value.startsWith('/') && !value.endsWith('/')) {
        return `${prop}: '${value.substring(1)}'`;
      }
      return match;
    });

    //Fix JSX attributes that look like regex but are actually strings
    content = content.replace(/={\s*\/[^\/\n]*$/gm, match => {
      const value = match
        .match(/={\s*\/[^\/\n]*$/)[0]
        .replace(/={\s*\//, '')
        .trim();
      return `={'${value}'}`;
    });

    //Fix common patterns where /> appears in wrong places
    content = content.replace(/\s*\/>\s*<span/g, ' <span');
    content = content.replace(/\s*\/>\s*<\/span>/g, '</span>');
    content = content.replace(/\s*\/>\s*<\/div>/g, '</div>');
    content = content.replace(/\s*\/>\s*<\/a>/g, '</a>');
    content = content.replace(/\s*\/>\s*<\/Link>/g, '</Link>');

    //Fix malformed <br> tags that should be self-closing
    content = content.replace(/<br\s*>\s*<\/br>/g, '<br />');
    content = content.replace(/<br\s*>\s*$/gm, '<br />');

    //Fix unterminated regular expressions in array/object literals
    content = content.replace(/(\w+):\s*\/[^\/\n]*$/gm, (match, prop) => {
      const value = match.split(':')[1].trim();
      if (value.startsWith('/') && !value.endsWith('/')) {
        return `${prop}: '${value.substring(1)}'`;
      }
      return match;
    });

    //Fix malformed JSX expressions
    content = content.replace(/\{\s*\/[^\/\n]*$/gm, match => {
      const value = match.replace(/\{\s*\//, '').trim();
      return `{'${value}'}`;
    });

    //Fix specific patterns with unterminated regex in object properties
    content = content.replace(/(\w+):\s*\/[^\/\n]*$/gm, (match, prop) => {
      const value = match.split(':')[1].trim();
      if (value.startsWith('/') && !value.endsWith('/')) {
        return `${prop}: '${value.substring(1)}'`;
      }
      return match;
    });

    //Fix malformed template literals
    content = content.replace(/`[^`]*$/gm, match => {
      if (!match.endsWith('`')) {
        return match + '`';
      }
      return match;
    });

    //Fix specific patterns where /> appears before other elements
    content = content.replace(/\s*\/>\s*<(\w+)/g, ' <$1');
    content = content.replace(/\s*\/>\s*<\/(\w+)>/g, '</$1>');

    //Fix malformed JSX attributes
    content = content.replace(/(\w+)=\{[^}]*$/gm, match => {
      if (!match.includes('}')) {
        return match + '}';
      }
      return match;
    });

    //Fix specific patterns with malformed object properties
    content = content.replace(/(\w+):\s*\/[^\/\n]*$/gm, (match, prop) => {
      const value = match.split(':')[1].trim();
      if (value.startsWith('/') && !value.endsWith('/')) {
        return `${prop}: '${value.substring(1)}'`;
      }
      return match;
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
//       console.log(`Fixed: ${filePath}`);
      fixedFiles++;
    }
  } catch (error) {
//     console.error(`Error processing ${filePath}:`, error.message);
  }
}

// console.log(`\nFixed ${fixedFiles} files.`);
