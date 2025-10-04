#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all blog page files with JSX errors
const blogFiles = await glob('app/blog/**/page.tsx');

console.log(`Found ${blogFiles.length} blog files to check...`);

let fixedCount = 0;

for (const filePath of blogFiles) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Fix common JSX issues

    // 1. Fix unterminated string literals (remove stray quotes)
    content = content.replace(/"[^"]*$/gm, match => {
      if (match.endsWith('"') && match.length > 1) {
        return match;
      }
      return match.replace(/"[^"]*$/, '');
    });

    // 2. Fix JSX expressions without parent element
    // Look for patterns like: return (\n    <div></div>\n      <div></div>
    content = content.replace(
      /return\s*\(\s*\n\s*<[^>]+><\/[^>]+>\s*\n\s*<[^>]+>/g,
      match => {
        return match.replace(
          /return\s*\(\s*\n\s*/,
          'return (\n    <div className="container">\n      ',
        );
      },
    );

    // 3. Fix missing closing tags by ensuring proper nesting
    // This is a simplified approach - wrap everything in a main container if needed
    if (
      content.includes('export default function') &&
      !content.includes('<div className="container">')
    ) {
      content = content.replace(
        /(export default function[^{]*\{\s*return\s*\(\s*)(<[^>]+>)/,
        '$1<div className="container">\n      $2',
      );

      // Add closing div before the last closing parenthesis
      const lastReturnIndex = content.lastIndexOf('return (');
      if (lastReturnIndex !== -1) {
        const closingParenIndex = content.lastIndexOf(');');
        if (closingParenIndex !== -1) {
          content =
            content.substring(0, closingParenIndex) + '\n    </div>\n  );';
        }
      }
    }

    // 4. Fix unexpected tokens like > in JSX
    content = content.replace(/([^=])>([^<])/g, '$1&gt;$2');

    // 5. Fix object literal syntax errors (= instead of :)
    content = content.replace(/(\w+)=(\w+)/g, '$1: $2');

    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files.`);
