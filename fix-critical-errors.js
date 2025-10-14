#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix critical syntax errors
function fixCriticalErrors(content, filePath) {
  let fixed = content;
  
  // Fix malformed function declarations with $2, $3 placeholders
  fixed = fixed.replace(/React\.FC<\$2>\s*=\s*\(\$3\)/g, 'React.FC<Props> = ({ children })');
  fixed = fixed.replace(/React\.FC<\$2>/g, 'React.FC<Props>');
  fixed = fixed.replace(/\(\$3\)/g, '({ children })');
  
  // Fix malformed imports
  fixed = fixed.replace(/import\s+React[^;]*;\s*;\s*/g, 'import React from \'react\';\n');
  
  // Fix unterminated string literals at the beginning of files
  fixed = fixed.replace(/^'use client;+/, "'use client';");
  fixed = fixed.replace(/^'use client;+/, "'use client';");
  
  // Fix malformed JSX return statements
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*>\s*<\/div>\s*\)\s*;\s*return\s*\(\s*<div[^>]*>\s*<\/div>\s*\)\s*;/g, 'return (\n    <div>Page content</div>\n  );');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default function\s+\w+\(\)\s*\{\s*\}\s*return\s*\(/g, 'export default function Component() {\n  return (');
  fixed = fixed.replace(/const\s+\w+\s*=\s*\(\)\s*=>\s*\{\s*\}\s*return\s*\(/g, 'const Component = () => {\n  return (');
  
  // Fix missing closing braces
  fixed = fixed.replace(/\}\s*\)\s*;\s*\}\s*$/gm, '});');
  fixed = fixed.replace(/\}\s*\)\s*;\s*\}\s*'$/gm, '});');
  
  // Fix malformed JSX elements
  fixed = fixed.replace(/<div[^>]*>\s*$/gm, '<div>');
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*$/gm, '</div>');
  
  // Fix unterminated template literals
  fixed = fixed.replace(/`([^`]*)$/gm, '`$1`');
  
  // Fix malformed imports
  fixed = fixed.replace(/import\s+React[^;]*;\s*;\s*/g, 'import React from \'react\';\n');
  
  // Fix specific patterns for different file types
  if (filePath.includes('page.tsx')) {
    // Fix page components
    if (fixed.includes('export default function Component()')) {
      const componentName = filePath.split('/').pop().replace('.tsx', '').replace('page', 'Page');
      fixed = fixed.replace(/export default function Component\(\)/g, `export default function ${componentName}()`);
    }
  }
  
  if (filePath.includes('components/')) {
    // Fix component files
    if (fixed.includes('export default function Component()')) {
      const componentName = filePath.split('/').pop().replace('.tsx', '');
      fixed = fixed.replace(/export default function Component\(\)/g, `export default function ${componentName}()`);
    }
  }
  
  // Fix malformed JSX return statements
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*>\s*<\/div>\s*\)\s*;\s*return\s*\(\s*<div[^>]*>\s*<\/div>\s*\)\s*;/g, 'return (\n    <div>Page content</div>\n  );');
  
  // Clean up extra closing braces and parentheses
  fixed = fixed.replace(/\}\s*\)\s*;\s*\}\s*$/gm, '});');
  fixed = fixed.replace(/\}\s*\)\s*;\s*\}\s*'$/gm, '});');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixCriticalErrors(content, filePath);
    
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

// Main function
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.jsx',
    'app/**/*.js'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nFixed ${totalFixed} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixCriticalErrors, processFile };