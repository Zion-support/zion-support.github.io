#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix specific syntax patterns
function fixSpecificPatterns(content) {
  let fixed = content;
  
  // Fix malformed return statements with quotes
  fixed = fixed.replace(/return \("([\s\S]*?)"\);/g, (match, p1) => {
    // Remove extra quotes and fix JSX structure
    const cleaned = p1.replace(/"/g, '').trim();
    return `return (\n    <>\n      ${cleaned}\n    </>\n  );`;
  });
  
  // Fix unterminated string literals in JSX
  fixed = fixed.replace(/<title>([^<]*?)"([^<]*?)<\/title>/g, (match, p1, p2) => {
    return `<title>${p1}${p2}</title>`;
  });
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<div className="[^"]*"><\/div>\s*<Helmet><\/Helmet>/g, (match) => {
    return match.replace(/<div[^>]*><\/div>\s*/, '');
  });
  
  // Fix extra semicolons
  fixed = fixed.replace(/;\s*;/g, ';');
  fixed = fixed.replace(/;\s*$/gm, ';');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default function Page\(\) \{;/g, 'export default function Page() {');
  
  // Fix missing closing tags in JSX
  fixed = fixed.replace(/<div([^>]*)>([\s\S]*?)(\n\s*\))/g, (match, p1, p2, p3) => {
    if (!p2.includes('</div>') && p2.trim()) {
      return `<div${p1}>${p2}</div>${p3}`;
    }
    return match;
  });
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>([\s\S]*?)<\/>/g, (match, p1) => {
    if (!p1.trim()) return '<></>';
    return `<>${p1}</>`;
  });
  
  // Fix merge conflict markers
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*/g, '');
  fixed = fixed.replace(/=======[\s\S]*?>>>>>>> [^\n]*/g, '');
  
  // Fix malformed imports
  fixed = fixed.replace(/import React from "react";";/g, 'import React from "react";');
  
  // Fix unterminated string literals
  fixed = fixed.replace(/content="([^"]*?)(\n|$)/gm, (match, p1, p2) => {
    if (!p1.endsWith('"')) {
      return `content="${p1}"${p2}`;
    }
    return match;
  });
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*?)"([^"]*?)"/g, (match, p1, p2) => {
    return `className="${p1}${p2}"`;
  });
  
  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    fixed += '\n' + '}'.repeat(missingBraces);
  }
  
  // Fix malformed JSX structure in return statements
  fixed = fixed.replace(/return \(\s*<div[^>]*>([\s\S]*?)<\/div>\s*\);/g, (match, p1) => {
    return `return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      ${p1}\n    </div>\n  );`;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSpecificPatterns(content);
    
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
    'components/**/*.tsx',
    'components/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']
    });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSpecificPatterns, processFile };