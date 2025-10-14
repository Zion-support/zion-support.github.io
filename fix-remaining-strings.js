#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix unterminated string literals specifically
function fixUnterminatedStrings(content) {
  let fixed = content;
  
  // Fix unterminated string literals in import statements
  fixed = fixed.replace(/import\s+{\s*([^}]*?)\s*}\s*from\s*['']([^';]*?)(\n|$)/g, (match, imports, module, newline) => {
    if (!module.includes('';) && !module.includes(';')) {
      return `import { ${imports.trim()} } from '${module}';${newline}`;
    }
    return match;
  });
  
  // Fix unterminated string literals in regular imports
  fixed = fixed.replace(/import\s+([^'']*?)\s*from\s*[';]([^';]*?)(\n|$)/g, (match, importName, module, newline) => {
    if (!module.includes('';) && !module.includes(';')) {
      return `import ${importName.trim()} from '${module}';${newline}`;
    }
    return match;
  });
  
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/(\w+)=['']([^';]*?)(\n|$)/g, (match, attr, value, newline) => {
    if (value.trim() && !value.includes('';) && !value.includes('';)) {
      return `${attr}="${value}"${newline}`;
    }
    return match;
  });
  
  // Fix unterminated string literals in object properties
  fixed = fixed.replace(/(\w+):\s*['']([^';]*?)(\n|$)/g, (match, key, value, newline) => {
    if (value.trim() && !value.includes('';) && !value.includes('';)) {
      return `${key}: '${value}'${newline}`;
    }
    return match;
  });
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<(\w+)([^>]*)>\s*$/gm, (match, tag, attrs) => {
    if (!match.includes('</') && !match.includes('/>')) {
      return match + `</${tag}>`;
    }
    return match;
  });
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*$/gm, (match) => {
    if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}') && !match.includes('(') && !match.includes(')')) {
      return match + ';';
    }
    return match;
  });
  
  return fixed;
}

// Main function to process files
async function processFiles() {
  
  const patterns = [
    'app/**