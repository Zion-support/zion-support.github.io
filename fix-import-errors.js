#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix import statement errors
function fixImportErrors(content, filePath) {
  let fixed = content;
  
  // Fix concatenated import statements
  fixed = fixed.replace(/'import/g, ";\nimport");
  fixed = fixed.replace(/'const/g, ";\nconst");
  fixed = fixed.replace(/'export/g, ";\nexport");
  fixed = fixed.replace(/'function/g, ";\nfunction");
  fixed = fixed.replace(/'interface/g, ";\ninterface");
  fixed = fixed.replace(/'type/g, ";\ntype");
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>([^<]*?)<\/>/g, (match, content) => {
    if (content.trim()) {
      return `<div>${content}</div>`;
    }
    return match;
  });
  
  // Fix unterminated JSX fragments
  if (fixed.includes('<>') && !fixed.includes('</>')) {
    fixed = fixed.replace(/<>/g, '<div>');
    fixed = fixed.replace(/([^>])\s*$/g, '$1</div>');
  }
  
  // Fix malformed quotes in JSX
  fixed = fixed.replace(/"([^"]*?)"/g, (match, content) => {
    if (content.includes('"')) {
      return `"${content.replace(/"/g, '\\"')}"`;
    }
    return match;
  });
  
  // Fix broken JSX attributes
  fixed = fixed.replace(/className="([^"]*?)"/g, (match, className) => {
    const cleaned = className.replace(/[^a-zA-Z0-9\s\-_]/g, ' ').trim();
    return `className="${cleaned}"`;
  });
  
  // Fix malformed meta tags
  fixed = fixed.replace(/<meta\s+name="([^"]*?)"\s+content="([^"]*?)"\s*\/>/g, '<meta name="$1" content="$2" />');
  
  // Fix broken closing tags
  fixed = fixed.replace(/<\/\s*>/g, '</div>');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{/g, 'const $1 = () => {');
  
  // Fix broken return statements
  fixed = fixed.replace(/return\s*\(\s*([^)]*?)\s*\)\s*;\s*<\/div>\s*<\/div>\s*\);/g, 'return (\n    <div>\n      $1\n    </div>\n  );');
  
  // Fix malformed export statements
  fixed = fixed.replace(/export\s+default\s+(\w+)\s*;\s*export\s+default/g, 'export default');
  
  // Fix broken string literals
  fixed = fixed.replace(/'([^']*?)'([^']*?)'/g, '"$1$2"');
  fixed = fixed.replace(/"([^"]*?)"([^"]*?)"/g, '"$1$2"');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{([^}]*?)\}/g, (match, content) => {
    if (content.includes('=') && !content.includes(':')) {
      return `{${content.replace(/=/g, ': ')}}`;
    }
    return match;
  });
  
  // Fix broken component structure
  if (filePath.includes('.tsx') || filePath.includes('.jsx')) {
    // Ensure proper component structure
    if (fixed.includes('export default function') && !fixed.includes('React')) {
      fixed = "import React from 'react';\n" + fixed;
    }
    
    // Fix malformed JSX return
    if (fixed.includes('return (') && !fixed.includes('</div>')) {
      fixed = fixed.replace(/return\s*\(\s*<div>([^<]*?)<\/div>\s*\);\s*<\/div>\s*<\/div>\s*\);/g, 'return (\n    <div>\n      $1\n    </div>\n  );');
    }
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixImportErrors(content, filePath);
    
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
  console.log('Starting import error fixes...');
  
  // Get all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.{ts,tsx,js,jsx}',
    'src/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'pages/**/*.{ts,tsx,js,jsx}',
    'utils/**/*.{ts,tsx,js,jsx}',
    'hooks/**/*.{ts,tsx,js,jsx}',
    'contexts/**/*.{ts,tsx,js,jsx}',
    'config/**/*.{ts,tsx,js,jsx}',
    'data/**/*.{ts,tsx,js,jsx}',
    'types/**/*.{ts,tsx,js,jsx}'
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
  
  console.log(`Fixed ${totalFixed} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixImportErrors, processFile };