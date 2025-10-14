import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix malformed import statements with 'use client'
  fixed = fixed.replace(/from 'react-helmet-async'use client'/g, "from 'react-helmet-async';\n'use client'");
  fixed = fixed.replace(/from 'react-helmet-async'use client/g, "from 'react-helmet-async';\n'use client'");
  
  // Fix missing semicolons after import statements
  fixed = fixed.replace(/import React from 'react'(\s*)$/gm, "import React from 'react';$1");
  fixed = fixed.replace(/import {[^}]+} from '[^']+'(\s*)$/gm, (match, whitespace) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix unterminated string literals in object properties
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
    const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**'] });
    
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main();