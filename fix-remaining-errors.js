#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining errors
function fixRemainingErrors(content, filePath) {
  let fixed = content;
  
  // Fix concatenated import statements
  fixed = fixed.replace(/';'import/g, ";\nimport");
  fixed = fixed.replace(/';'export/g, ";\nexport");
  fixed = fixed.replace(/';'const/g, ";\nconst");
  fixed = fixed.replace(/';'function/g, ";\nfunction");
  fixed = fixed.replace(/';'interface/g, ";\ninterface");
  fixed = fixed.replace(/';'type/g, ";\ntype");
  
  // Fix malformed quotes in import statements
  fixed = fixed.replace(/import\s+React\s+from\s+'react';'([^']*?)'/g, 'import React from "react";\n$1');
  fixed = fixed.replace(/import\s+{\s*(\w+)\s*}\s+from\s+"([^"]*?)";'([^']*?)'/g, 'import { $1 } from "$2";\n$3');
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+"([^"]*?)";'([^']*?)'/g, 'import $1 from "$2";\n$3');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/name:\s*""([^"]*?)"\s+content:\s*"([^"]*?)"\s*\/>/g, 'name="$1" content="$2" />');
  fixed = fixed.replace(/className:\s*"([^"]*?)"/g, 'className="$1"');
  fixed = fixed.replace(/href:\s*"([^"]*?)"/g, 'href="$1"');
  fixed = fixed.replace(/src:\s*"([^"]*?)"/g, 'src="$1"');
  fixed = fixed.replace(/alt:\s*"([^"]*?)"/g, 'alt="$1"');
  fixed = fixed.replace(/title:\s*"([^"]*?)"/g, 'title="$1"');
  fixed = fixed.replace(/type:\s*"([^"]*?)"/g, 'type="$1"');
  fixed = fixed.replace(/rel:\s*"([^"]*?)"/g, 'rel="$1"');
  fixed = fixed.replace(/sizes:\s*"([^"]*?)"/g, 'sizes="$1"');
  
  // Fix malformed JSX elements
  fixed = fixed.replace(/<h1\s+className:\s*"([^"]*?)">([^<]*?)<\/h1>/g, '<h1 className="$1">$2</h1>');
  fixed = fixed.replace(/<p\s+className:\s*"([^"]*?)">([^<]*?)<\/p>/g, '<p className="$1">$2</p>');
  fixed = fixed.replace(/<div\s+className:\s*"([^"]*?)">([^<]*?)<\/div>/g, '<div className="$1">$2</div>');
  
  // Fix broken string concatenation
  fixed = fixed.replace(/"([^"]*?)"\s*\+\s*"([^"]*?)"/g, '"$1$2"');
  fixed = fixed.replace(/'([^']*?)'\s*\+\s*'([^']*?)'/g, "'$1$2'");
  
  // Fix malformed template literals
  fixed = fixed.replace(/`([^`]*?)\n/g, '`$1`');
  fixed = fixed.replace(/\$\{([^}]*?)\}/g, '${$1}');
  
  // Fix broken JSX fragments
  if (fixed.includes('<>') && !fixed.includes('</>')) {
    fixed = fixed.replace(/<>/g, '<div>');
    fixed = fixed.replace(/([^>])\s*$/g, '$1</div>');
  }
  
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{/g, 'const $1 = () => {');
  
  // Fix broken return statements
  fixed = fixed.replace(/return\s*\(\s*([^)]*?)\s*\)\s*;\s*<\/div>\s*<\/div>\s*\);/g, 'return (\n    <div>\n      $1\n    </div>\n  );');
  
  // Fix malformed export statements
  fixed = fixed.replace(/export\s+default\s+(\w+)\s*;\s*export\s+default/g, 'export default');
  
  // Fix broken closing tags
  fixed = fixed.replace(/<\/\s*>/g, '</div>');
  
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
      fixed = 'import React from "react";\n' + fixed;
    }
    
    // Fix malformed JSX return
    if (fixed.includes('return (') && !fixed.includes('</div>')) {
      fixed = fixed.replace(/return\s*\(\s*<div>([^<]*?)<\/div>\s*\);\s*<\/div>\s*<\/div>\s*\);/g, 'return (\n    <div>\n      $1\n    </div>\n  );');
    }
  }
  
  // Fix specific patterns that are causing issues
  fixed = fixed.replace(/import\s+React\s+from\s+'react';'\/\/\s*([^']*?)'/g, 'import React from "react";\n// $1');
  fixed = fixed.replace(/import\s+React\s+from\s+"react";"import\s+{\s*(\w+)\s*}\s+from\s+"([^"]*?)";'([^']*?)'/g, 'import React from "react";\nimport { $1 } from "$2";\n$3');
  
  // Fix malformed meta tags
  fixed = fixed.replace(/<meta\s+name:\s*""([^"]*?)"\s+content:\s*"([^"]*?)"\s*\/>/g, '<meta name="$1" content="$2" />');
  
  // Fix broken string literals
  fixed = fixed.replace(/"([^"]*?)"\s*\+\s*"([^"]*?)"/g, '"$1$2"');
  fixed = fixed.replace(/'([^']*?)'\s*\+\s*'([^']*?)'/g, "'$1$2'");
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className:\s*"([^"]*?)"/g, 'className="$1"');
  fixed = fixed.replace(/name:\s*"([^"]*?)"/g, 'name="$1"');
  fixed = fixed.replace(/content:\s*"([^"]*?)"/g, 'content="$1"');
  
  // Fix broken JSX elements
  fixed = fixed.replace(/<h1\s+className:\s*"([^"]*?)">([^<]*?)<\/h1>/g, '<h1 className="$1">$2</h1>');
  fixed = fixed.replace(/<p\s+className:\s*"([^"]*?)">([^<]*?)<\/p>/g, '<p className="$1">$2</p>');
  fixed = fixed.replace(/<div\s+className:\s*"([^"]*?)">([^<]*?)<\/div>/g, '<div className="$1">$2</div>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content, filePath);
    
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
  console.log('Starting remaining error fixes...');
  
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

export { fixRemainingErrors, processFile };