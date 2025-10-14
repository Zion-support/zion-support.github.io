#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix final syntax errors
function fixFinalSyntax(content) {
  let fixed = content;

  // Fix import statements with malformed quotes
  fixed = fixed.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+""'([^']+)'/g, 'import { $1 } from "$2";');
  fixed = fixed.replace(/import\s+([^;]+)\s+from\s+""'([^']+)'/g, 'import $1 from "$2";');
  fixed = fixed.replace(/import\s+([^;]+)\s+from\s+"([^"]+)"\s*$/gm, 'import $1 from "$2";');
  fixed = fixed.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+"([^"]+)"\s*$/gm, 'import { $1 } from "$2";');

  // Fix unterminated string literals
  fixed = fixed.replace(/import\s+([^;]+)\s+from\s+"([^"]*?)\s*$/gm, 'import $1 from "$2";');
  fixed = fixed.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+"([^"]*?)\s*$/gm, 'import { $1 } from "$2";');

  // Fix JSX attributes with missing quotes
  fixed = fixed.replace(/className="([^"]*?)"\s+([a-zA-Z0-9\-_]+)=/g, 'className="$1" $2=');
  fixed = fixed.replace(/name="([^"]*?)"\s+content="([^"]*?)"\s+([a-zA-Z0-9\-_]+)=/g, 'name="$1" content="$2" $3=');
  fixed = fixed.replace(/content="([^"]*?)"\s+([a-zA-Z0-9\-_]+)=/g, 'content="$1" $2=');

  // Fix JSX closing tags
  fixed = fixed.replace(/<\/div>"\s*\)\s*;\s*$/gm, '</div>\n  );');
  fixed = fixed.replace(/<\/div>"\s*\}\s*;\s*$/gm, '</div>\n  };');
  fixed = fixed.replace(/<\/div>"\s*\}\s*$/gm, '</div>\n  };');

  // Fix function declarations
  fixed = fixed.replace(/const\s+([A-Za-z]+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');
  fixed = fixed.replace(/const\s+([A-Za-z]+)\s*=\s*\(\)\s*=>\s*\{/g, 'const $1 = () => {');

  // Fix export statements
  fixed = fixed.replace(/export\s+default\s+([^;]+)\s*$/gm, 'export default $1;');

  // Fix JSX structure
  fixed = fixed.replace(/<div\s+className="([^"]*?)"\s+([a-zA-Z0-9\-_]+)=([^>]*?)>/g, '<div className="$1" $2=$3>');
  fixed = fixed.replace(/<h2\s+className="([^"]*?)"\s+([a-zA-Z0-9\-_]+)=([^>]*?)>/g, '<h2 className="$1" $2=$3>');
  fixed = fixed.replace(/<p\s+className="([^"]*?)"\s+([a-zA-Z0-9\-_]+)=([^>]*?)>/g, '<p className="$1" $2=$3>');

  // Fix specific patterns for 404 page
  if (fixed.includes('export default function NotFound()')) {
    fixed = `import React from "react";

export default function NotFound() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-white">404</h2>
      <p className="text-gray-300">This is the 404 component.</p>
    </div>
  );
};`;
  }

  // Fix specific patterns for main page
  if (fixed.includes("'use client'")) {
    fixed = fixed.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+""'react-helmet-async'/g, 'import { Helmet } from "react-helmet-async";');
  }

  // Fix meta tags
  fixed = fixed.replace(/<meta\s+name="([^"]*?)"\s+content="([^"]*?)"\s+([a-zA-Z0-9\-_]+)=([^>]*?)\s*\/>/g, '<meta name="$1" content="$2" $3=$4 />');

  // Fix JSX comments
  fixed = fixed.replace(/\/\*([^*]|\*[^/])*\*\/\s*;/g, (match) => match.replace(/;$/, ''));

  // Fix semicolons
  fixed = fixed.replace(/;\s*$/gm, '');
  fixed = fixed.replace(/}\s*;\s*$/gm, '};');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixFinalSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
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
    'app/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**'] 
    });
    
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFinalSyntax, processFile };