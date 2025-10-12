#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix final parsing issues
function fix Final Parsing(content) {
  let fixed = content;
  
  // Fix malformed class Name attributes
  fixed = fixed.replace(/from-slate-900to-slate-900pt-20/g, 'from-slate-900 to-slate-900 pt-20');
  fixed = fixed.replace(/max-w-7 xl/g, 'max-w-7xl');
  fixed = fixed.replace(/px-4 sm:px-6 lg:px-8py-16/g, 'px-4 sm:px-6 lg:px-8 py-16');
  fixed = fixed.replace(/text-4 xl/g, 'text-4xl');
  fixed = fixed.replace(/font-boldtext-white/g, 'font-bold text-white');
  fixed = fixed.replace(/text-lgtext-gray-300/g, 'text-lg text-gray-300');
  fixed = fixed.replace(/justify-centermx-auto/g, 'justify-center mx-auto');
  
  // Fix malformed J SX attributes
  fixed = fixed.replace(/" \/ \/>/g, '" />');
  fixed = fixed.replace(/" \/>/g, '" />');
  
  // Fix malformed function names
  fixed = fixed.replace(/const Ai3 d Generation Page/g, 'const Ai3d Generation Page');
  fixed = fixed.replace(/function Ai3 d Generation Page/g, 'function Ai3d Generation Page');
  
  // Fix malformed meta tags
  fixed = fixed.replace(/<m eta name="description" content="([^"]*)" \/ \/>/g, '<m eta name="description" content="$1" />');
  fixed = fixed.replace(/<m eta name="keywords" content="([^"]*)" \/ \/>/g, '<m eta name="keywords" content="$1" />');
  
  // Fix malformed title tags
  fixed = fixed.replace(/<t itle>Ai 3 d Generation/g, '<t itle>A I 3 D Generation');
  
  // Fix malformed Helmet tags
  fixed = fixed.replace(/<H elmet>\s*<t itle>([^<]*)<\/t itle>\s*<m eta name="description" content="([^"]*)" \/ \/>/g, 
    '<H elmet>\n        <t itle>$1</t itle>\n        <m eta name="description" content="$2" />');
  
  return fixed;
}

// Function to process a single file
function process File(file Path) {
  try {
    const content = fs.read File Sync(file Path, 'utf8');
    const fixed = fix Final Parsing(content);
    
    if (content !== fixed) {
      fs.write File Sync(file Path, fixed, 'utf8');
      console.log(`Fixed final parsing: ${file Path}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${file Path}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('Starting to fix final parsing issues...');
  
  // Get all Type Script/T SX files
  const files = await glob('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']
  });
  
  let fixed Count = 0;
  
  files.for Each(file => {
    if (process File(file)) {
      fixed Count++;
    }
  });
  
  console.log(`\n Fixed final parsing issues in ${fixed Count} files out of ${files.length} total files.`);
}

main().catch(console.error);