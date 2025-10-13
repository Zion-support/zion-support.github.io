#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common fixes for syntax errors
const fixes = [
  // Fix return( syntax
  {
    pattern: /return\(/g,
    replacement: 'return ('
  },
  // Fix missing React imports
  {
    pattern: /^import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?\s*$/gm,
    replacement: (match, imports, module) => {
      if (module.includes('react') && !imports.includes('React')) {
        return `import React, { ${imports} } from '${module}';`;
      }
      return match;
    }
  },
  // Fix missing component declaration
  {
    pattern: /^(\s*)return\s*\(/gm,
    replacement: (match, indent) => {
      return `${indent}const Component = () => {\n${indent}  return (`;
    }
  },
  // Fix JSX fragment syntax
  {
    pattern: /return\s*\(\s*<>\s*\)/g,
    replacement: 'return (\n    <>\n    </>\n  )'
  },
  // Fix missing closing tags
  {
    pattern: /<div([^>]*)>\s*$/gm,
    replacement: '<div$1>'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has basic React structure
    if (!content.includes('import React') && content.includes('return')) {
      content = `import React from 'react';\n\n` + content;
      modified = true;
    }

    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // If file doesn't have proper component structure, add it
    if (content.includes('return') && !content.includes('const ') && !content.includes('function ')) {
      const lines = content.split('\n');
      const returnIndex = lines.findIndex(line => line.trim().startsWith('return'));
      
      if (returnIndex > 0) {
        // Add component declaration before return
        lines.splice(returnIndex, 0, 'const Component = () => {');
        lines.push('};');
        lines.push('');
        lines.push('export default Component;');
        content = lines.join('\n');
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main function
async function main() {
  // Find all TypeScript/JSX files
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);