#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals and extra quotes/semicolons
  fixed = fixed.replace(/import\s+([^"]+)\s+from\s+"([^"]+)";";/g, 'import $1 from "$2";');
  fixed = fixed.replace(/import\s+([^"]+)\s+from\s+"([^"]+)";/g, 'import $1 from "$2";');
  
  // Fix broken JSX structure - fix common patterns
  fixed = fixed.replace(/return\s+\("([^"]*)"\s*<div/g, 'return (\n    <div');
  fixed = fixed.replace(/<div\s+className="([^"]*)"[^>]*><\/div>\s*<Helmet><\/Helmet>/g, '<div className="$1">\n      <Helmet>');
  fixed = fixed.replace(/<title>([^<]*)<\/title>"\s*<meta/g, '<title>$1</title>\n        <meta');
  fixed = fixed.replace(/<meta\s+name="([^"]*)"\s+content="([^"]*)"\s*\/>\s*<\/Helmet>/g, '<meta name="$1" content="$2" />\n      </Helmet>');
  
  // Fix broken JSX closing tags
  fixed = fixed.replace(/<\/Helmet>"\s*<div/g, '</Helmet>\n      <div');
  fixed = fixed.replace(/<div\s+className="([^"]*)"[^>]*><\/div>"\s*<div/g, '<div className="$1">\n        <div');
  fixed = fixed.replace(/<h1[^>]*>([^<]*)<\/h1>"\s*<p/g, '<h1>$1</h1>\n          <p');
  fixed = fixed.replace(/<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/div>\s*\)/g, '<p>$1</p>\n        </div>\n      </div>\n    </div>\n  );');
  
  // Fix merge conflict markers
  fixed = fixed.replace(/[\s\S]*?  fixed = fixed.replace(/<<<<<<< [^\n]+[\s\S]*?[\s\S]*?  fixed = fixed.replace(/[\s\S]*?  fixed = fixed.replace(/<<<<<<< [^\n]+[\s\S]*?/g, '');
  
  // Fix broken JSX expressions
  fixed = fixed.replace(/<div\s+className="([^"]*)"[^>]*><\/div>"\s*<div/g, '<div className="$1">\n        <div');
  fixed = fixed.replace(/<div\s+className="([^"]*)"[^>]*><\/div>"\s*<h1/g, '<div className="$1">\n          <h1');
  fixed = fixed.replace(/<div\s+className="([^"]*)"[^>]*><\/div>"\s*<p/g, '<div className="$1">\n          <p');
  
  // Fix missing opening tags
  fixed = fixed.replace(/return\s+\(\s*<div\s+className="([^"]*)"[^>]*><\/div>/g, 'return (\n    <div className="$1">');
  
  // Fix broken function declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\s*return\s+\(\s*"([^"]*)"\s*<div/g, 'const $1 = () => {\n  return (\n    <div');
  
  // Fix broken export statements
  fixed = fixed.replace(/export\s+default\s+function\s+Page\(\)\s*\{\s*/g, 'export default function Page() {\n  return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <div className="container mx-auto px-4 py-16">\n        <div className="text-center">\n          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>\n          <p className="text-gray-300 text-lg">\n            This page is under construction. Please check back later.\n          </p>\n        </div>\n      </div>\n    </div>\n  );\n}');
  
  // Fix broken JSX structure in general
  fixed = fixed.replace(/<div\s+className="([^"]*)"[^>]*><\/div>\s*<Helmet><\/Helmet>\s*<title>([^<]*)<\/title>\s*<meta\s+name="([^"]*)"\s+content="([^"]*)"\s*\/>\s*<\/Helmet>/g, 
    '<div className="$1">\n      <Helmet>\n        <title>$2</title>\n        <meta name="$3" content="$4" />\n      </Helmet>');
  
  // Fix broken closing tags
  fixed = fixed.replace(/<\/div>\s*\)\s*;\s*}/g, '</div>\n  );\n}');
  
  // Fix broken string literals in JSX
  fixed = fixed.replace(/className="([^"]*)"[^>]*><\/div>"\s*<div/g, 'className="$1">\n        <div');
  fixed = fixed.replace(/className="([^"]*)"[^>]*><\/div>"\s*<h1/g, 'className="$1">\n          <h1');
  fixed = fixed.replace(/className="([^"]*)"[^>]*><\/div>"\s*<p/g, 'className="$1">\n          <p');
  
  // Fix broken JSX attributes
  fixed = fixed.replace(/className="([^"]*)"[^>]*><\/div>"\s*<div\s+className="([^"]*)"[^>]*><\/div>/g, 'className="$1">\n        <div className="$2">');
  
  // Fix broken return statements
  fixed = fixed.replace(/return\s+\(\s*"([^"]*)"\s*<div\s+className="([^"]*)"[^>]*><\/div>/g, 'return (\n    <div className="$2">');
  
  // Fix broken JSX structure with proper indentation
  fixed = fixed.replace(/<div\s+className="([^"]*)"[^>]*><\/div>\s*<Helmet><\/Helmet>\s*<title>([^<]*)<\/title>\s*<meta\s+name="([^"]*)"\s+content="([^"]*)"\s*\/>\s*<\/Helmet>\s*<div\s+className="([^"]*)"[^>]*><\/div>\s*<div\s+className="([^"]*)"[^>]*><\/div>\s*<h1\s+className="([^"]*)"[^>]*>([^<]*)<\/h1>\s*<p\s+className="([^"]*)"[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/div>\s*\)/g, 
    '<div className="$1">\n      <Helmet>\n        <title>$2</title>\n        <meta name="$3" content="$4" />\n      </Helmet>\n      <div className="$5">\n        <div className="$6">\n          <h1 className="$7">$8</h1>\n          <p className="$9">$10</p>\n        </div>\n      </div>\n    </div>\n  )');
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(content, filePath) {
  let fixed = content;
  
  // Fix common patterns in page files
  if (filePath.includes('/page.tsx')) {
    // Extract page name from path
    const pageName = path.basename(path.dirname(filePath));
    const title = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Fix broken page structure
    fixed = fixed.replace(/export\s+default\s+function\s+Page\(\)\s*\{\s*/g, 
      `export default function Page() {\n  return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <div className="container mx-auto px-4 py-16">\n        <div className="text-center">\n          <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>\n          <p className="text-gray-300 text-lg">\n            This page is under construction. Please check back later.\n          </p>\n        </div>\n      </div>\n    </div>\n  );\n}`);
  }
  
  return fixed;
}

// Main function to process files
async function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
  // Fix unterminated string literals by adding missing quotes
  // Look for lines that start with a quote but don't end with one
  fixed = fixed.replace(/^(\s*"[^"]*?)(\n|$)/gm, (match, p1, p2) => {
    if (!p1.endsWith('"') && !p1.endsWith('";')) {
      return p1 + '"' + p2;
    }
    return match;
  });
  
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/content="([^"]*?)(\n|$)/gm, (match, p1, p2) => {
    if (!p1.endsWith('"')) {
      return `content="${p1}"${p2}`;
    }
    return match;
  });
  
  // Remove merge conflict markers
  fixed = fixed.replace(/[\s\S]*?  fixed = fixed.replace(/[\s\S]*?  fixed = fixed.replace(/[\s\S]*?  
  // Fix extra semicolons and quotes
  fixed = fixed.replace(/;";/g, ';');
  fixed = fixed.replace(/";"/g, ';');
  fixed = fixed.replace(/""/g, '"');
  fixed = fixed.replace(/;;/g, ';');
  
  // Fix malformed import statements
  fixed = fixed.replace(/import React from "react";";/g, 'import React from "react";');
  fixed = fixed.replace(/import {[^}]*} from "[^"]*";";/g, (match) => match.replace(/";$/, '";'));
  
  // Fix JSX structure issues
  fixed = fixed.replace(/return \("([\s\S]*?)"\);/g, (match, p1) => {
    return `return (\n${p1}\n);`;
  });
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>([\s\S]*?)(\n\s*\))/g, (match, p1, p2, p3) => {
    if (!p2.includes('</div>')) {
      return `<div${p1}>${p2}</div>${p3}`;
  // Fix malformed import statements
  fixed = fixed.replace(/import\s+([^"]*?)\s+from\s+"([^"]*?)"([^;]*?)(?:\n|$)/g, (match, imports, module, rest) => {
    if (rest && !rest.includes(';')) {
      return `import ${imports} from "${module}";\n`;
    }
    return match;
  });
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default function Page\(\) \{;/g, 'export default function Page() {');
  fixed = fixed.replace(/const \w+ = \(\) => \{"/g, (match) => match.replace(/"/, ''));
  
  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    fixed += '\n' + '}'.repeat(missingBraces);
  }
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>([\s\S]*?)<\/>/g, (match, p1) => {
    if (!p1.trim()) return '<></>';
    return `<>${p1}</>`;
  });
  
  // Fix missing semicolons after statements
  fixed = fixed.replace(/(\w+)\s*$/gm, (match, p1) => {
    if (['return', 'const', 'let', 'var', 'function'].includes(p1)) {
      return match;
    }
    if (!match.endsWith(';') && !match.endsWith('{') && !match.endsWith('}') && !match.endsWith(')')) {
      return match + ';';
    }
    return match;
  });
  
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
    'components/**/*.tsx',
    'components/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let processedCount = 0;
  let errorCount = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', 'coverage/**', 'scripts/**'] 
    });
    
    for (const filePath of files) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        let fixed = fixSyntaxErrors(content);
        fixed = fixSpecificFile(fixed, filePath);
        
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed, 'utf8');
          console.log(`Fixed: ${filePath}`);
          processedCount++;
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        errorCount++;
      }
    }
  }
  
  console.log(`\nProcessed ${processedCount} files with ${errorCount} errors`);
}

// Run the fix
processFiles().catch(console.error);
