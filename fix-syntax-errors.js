#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix triple quotes
  content = content.replace(/'''/g, "'");
  content = content.replace(/"""/g, '"');
  
  // Fix malformed function declarations
  content = content.replace(/export default function (\w+)\(\) \{\}/g, 'export default function $1() {');
  
  // Fix malformed try-catch blocks
  content = content.replace(/try \{\}/g, 'try {');
  content = content.replace(/catch \(error\) \{\}/g, 'catch (error) {');
  
  // Fix malformed arrow functions
  content = content.replace(/const (\w+) = \(([^)]*)\) => \{\}/g, 'const $1 = ($2) => {');
  
  // Fix malformed object literals
  content = content.replace(/\{\}/g, '{}');
  
  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*)"\s*"""/g, 'className="$1"');
  content = content.replace(/content="([^"]*)"\s*"""/g, 'content="$1"');
  
  // Fix malformed string literals
  content = content.replace(/'([^']*)''/g, "'$1'");
  content = content.replace(/"([^"]*)""/g, '"$1"');
  
  // Fix malformed imports
  content = content.replace(/import React from 'react''/g, "import React from 'react'");
  content = content.replace(/import \{ ([^}]+) \} from '([^']+)''/g, "import { $1 } from '$2'");
  
  // Fix malformed 'use client' directives
  content = content.replace(/'use client''/g, "'use client'");
  
  // Fix malformed return statements
  content = content.replace(/return \(\s*<>\s*"""/g, 'return (\n    <>\n      ');
  
  // Fix malformed JSX closing tags
  content = content.replace(/<\/>\s*"""/g, '</>\n    );');
  
  // Fix malformed function calls
  content = content.replace(/console\.error\('([^']*)'\);''/g, "console.error('$1');");
  content = content.replace(/res\.setHeader\('([^']*)', '([^']*)'\);''/g, "res.setHeader('$1', '$2');");
  content = content.replace(/res\.end\(([^)]+)\);''/g, 'res.end($1);');
  
  // Fix malformed object properties
  content = content.replace(/error: '([^']*)' \}\}\}/g, "error: '$1' }");
  
  // Fix malformed JSON.stringify
  content = content.replace(/JSON\.stringify\(\{ error: '([^']*)' \}\)\}/g, "JSON.stringify({ error: '$1' })");
  
  // Fix malformed closing braces
  content = content.replace(/\}\s*\}\s*\}/g, '}');
  
  // Fix malformed semicolons
  content = content.replace(/;\s*''/g, ';');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
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
    'api/**/*.js',
    'app-broken/**/*.tsx',
    'app-broken/**/*.ts',
    'app-disabled/**/*.tsx',
    'app-disabled/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };