#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to process a file
function processFile(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;

    // Fix malformed closing tags
    if (content.includes('</div>}')) {
      content = content.replace(/<\/div>\}/g, '}');
      modified = true;
    }

    // Fix malformed closing tags with semicolons
    if (content.includes('</div>;')) {
      content = content.replace(/<\/div>;/g, ';');
      modified = true;
    }

    // Fix malformed closing tags with commas
    if (content.includes('</div>,') && !content.includes('</div>, ')) {
      content = content.replace(/<\/div>,/g, ',');
      modified = true;
    }

    // Fix unterminated regular expressions
    if (content.includes('const regex = /')) {
      content = content.replace(/const regex = \/([^/]*)$/gm, 'const regex = /$1/;');
      modified = true;
    }

    // Fix malformed object properties
    if (content.includes('const config = {')) {
      // Look for lines that might be missing colons
      const _lines = content.split('\n');
      let _newLines = [];
      for (let i = 0; i < lines.length; i++) {
        let _line = lines[i];
        // Fix lines that look like property assignments but are missing colons
        if (line.match(/^\s*[a-zA-Z_][a-zA-Z0-9_]*\s+[a-zA-Z_][a-zA-Z0-9_]*\s*$/)) {
          line = line.replace(
            /^(\s*[a-zA-Z_][a-zA-Z0-9_]*)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*$/,
            '$1: $2,'
          );
          modified = true;
        }
        newLines.push(line);
      }
      if (modified) {
        content = newLines.join('\n');
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');

      return true;
    }

    return false;
  } catch (error) {

    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/JavaScript files in app directory
  const _files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  let _fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });

}

main().catch(console.error);
