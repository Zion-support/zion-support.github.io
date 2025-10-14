import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-96de
// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix malformed import statements with 'use client'
<<<<<<< HEAD
  fixed = fixed.replace(/import\s+([^']+)'([^']+)'use client'/g, "import $1 from '$2';\n'use client'");
  fixed = fixed.replace(/import\s+([^']+)'([^']+)'use client'/g, "import $1 from '$2';\n'use client'");
  
  // Fix missing semicolons after import statements
  fixed = fixed.replace(/import\s+[^;]+(?!;)\n/g, (match) => {
    if (!match.trim().endsWith(';')) {
      return match.trim() + ';\n';
=======
  fixed = fixed.replace(/from 'react-helmet-async'use client'/g, "from 'react-helmet-async';\n'use client'");
  fixed = fixed.replace(/from 'react-helmet-async'use client/g, "from 'react-helmet-async';\n'use client'");
  
  // Fix missing semicolons after import statements
  fixed = fixed.replace(/import React from 'react'(\s*)$/gm, "import React from 'react';$1");
  fixed = fixed.replace(/import {[^}]+} from '[^']+'(\s*)$/gm, (match, whitespace) => {
    if (!match.endsWith(';')) {
      return match + ';';
>>>>>>> cursor/fix-errors-and-merge-to-main-96de
    }
    return match;
  });
  
  // Fix unterminated string literals in object properties
<<<<<<< HEAD
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"([^,}\n]*)/g, (match, key, value, rest) => {
    if (rest.includes('"') && !rest.includes('",')) {
      return `${key}: "${value}",`;
    }
    return match;
  });
  
  // Fix unterminated string literals with missing closing quotes
  fixed = fixed.replace(/(\w+):\s*"([^"]*)(?![^"]*")/g, (match, key, value) => {
    if (!value.endsWith('"')) {
      return `${key}: "${value}"`;
    }
    return match;
  });
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*(?=\w+:)/g, '$1: "$2",');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<(\w+)([^>]*)>\s*<\/\1>/g, '<$1$2></$1>');
  
  // Fix missing closing brackets in object literals
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*}(?=\s*[}\]])/g, '$1: "$2"\n  }');
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*=\s*[^;]+(?!;)\n/g, (match) => {
    if (!match.trim().endsWith(';')) {
      return match.trim() + ';\n';
    }
    return match;
  });
=======
  fixed = fixed.replace(/title: "([^"]*)"(\s*)$/gm, 'title: "$1",$2');
  fixed = fixed.replace(/description: "([^"]*)"(\s*)$/gm, 'description: "$1",$2');
  fixed = fixed.replace(/icon: ([^,}]+)(\s*)$/gm, 'icon: $1,$2');
  fixed = fixed.replace(/color: "([^"]*)"(\s*)$/gm, 'color: "$1",$2');
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/}\s*$/gm, '},$1');
  fixed = fixed.replace(/,\s*}/g, '}');
  fixed = fixed.replace(/,\s*]/g, ']');
  
  // Fix unterminated JSX attributes
  fixed = fixed.replace(/className="([^"]*)"(\s*)$/gm, 'className="$1"$2');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>(\s*)$/gm, '<div$1>$2');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/<\/>\s*$/gm, '</>');
>>>>>>> cursor/fix-errors-and-merge-to-main-96de
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
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
    'api/**/*.js'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
<<<<<<< HEAD
    const files = await glob(pattern, { cwd: process.cwd() });
=======
    const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**'] });
    
>>>>>>> cursor/fix-errors-and-merge-to-main-96de
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

<<<<<<< HEAD
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };
=======
main();
>>>>>>> cursor/fix-errors-and-merge-to-main-96de
