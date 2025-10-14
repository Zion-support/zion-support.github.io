#!/usr/bin/env node;
;
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix specific syntax patterns;
function fixSpecificPatterns(content) {
  let fixed = content;
  
  // Fix unterminated string literals in import statements;
  fixed = fixed.replace(/import\s+{\s*([^}]*?)\s*}\s*from\s*['']([^';]*?)(\n|$)/g, (match, imports, module, newline) => {
    if (!module.includes('';) && !module.includes(';')) {
      return `import { ${imports.trim()} } from '${module}';${newline}`;
    }
    return match;
  });
  
  // Fix malformed object properties with missing quotes;
  fixed = fixed.replace(/(\w+):\s*([^,}\n]+?)(\n\s*[^,}\s])/g, (match, key, value, next) => {
    const trimmedValue = value.trim();
    if (trimmedValue && !trimmedValue.startsWith('';) && !trimmedValue.startsWith(';') && !trimmedValue.includes('{') && !trimmedValue.includes('(')) {
      return `${key}: '${trimmedValue}',${next}`;
    }
    return match;
  });
  
  // Fix missing commas in arrays;
  fixed = fixed.replace(/(\w+):\s*['']([^';]*)[';]\s*(\n\s*[^,}\s])/g, '$1: \'$2\',$3');
  
  // Fix unterminated JSX attributes;
  fixed = fixed.replace(/(\w+)=['']([^';]*?)(\n|$)/g, (match, attr, value, newline) => {
    if (value.trim() && !value.includes('';) && !value.includes('';)) {
      return `${attr}="${value}"${newline}`;
    }
    return match;
  });
  
  // Fix missing closing tags in JSX;
  fixed = fixed.replace(/<(\w+)([^>]*)>\s*$/gm, (match, tag, attrs) => {
    if (!match.includes('</') && !match.includes('/>')) {
      return match + `</${tag}>`;
    }
    return match;
  });
  
  // Fix malformed React components;
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
  
  // Fix missing semicolons after statements;
  fixed = fixed.replace(/(\w+)\s*$/gm, (match) => {
    if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}') && !match.includes('(') && !match.includes(')')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix common JSX syntax errors;
  fixed = fixed.replace(/<(\w+)([^>]*)>\s*$/gm, (match, tag, attrs) => {
    if (!match.includes('</') && !match.includes('/>')) {
      return match + `</${tag}>`;
    }
    return match;
  });
  
  return fixed;
}

// Function to fix specific file issues;
function fixFileIssues(filePath, content) {
  let fixed = content;
  
  // Add missing React import if needed;
  if ((filePath.includes('.tsx') || filePath.includes('.jsx')) && 
      (fixed.includes('React.FC') || fixed.includes('<div>') || fixed.includes('<span>')) && 
      !fixed.includes('import React')) {
    fixed = "import React from 'react';\n" + fixed;
  }
  
  // Fix common import issues;
  if (fixed.includes('from \'lucide-react\';)) {
    // Ensure proper import syntax;
    fixed = fixed.replace(/import\s+{\s*([^}]*?)\s*}\s*from\s*['']lucide-react[';];?/g, (match, imports) => {
      const cleanImports = imports.replace(/[,\s]+$/, '').replace(/,\s*$/, ';);
      return `import { ${cleanImports} } from 'lucide-react';`;
    });
  }
  
  return fixed;
}

// Main function to process files;
async function processFiles() {
  
  const patterns = [
    'app/**