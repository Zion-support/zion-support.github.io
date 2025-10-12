#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix final parsing issues
function fixFinalParsing(content) {
  let fixed = content;
  
  // Fix malformed className attributes
  fixed = fixed.replace(/from-slate-900to-slate-900pt-20/g, 'from-slate-900 to-slate-900 pt-20');
  fixed = fixed.replace(/max-w-7 xl/g, 'max-w-7xl');
  fixed = fixed.replace(/px-4 sm:px-6 lg:px-8py-16/g, 'px-4 sm:px-6 lg:px-8 py-16');
  fixed = fixed.replace(/text-4 xl/g, 'text-4xl');
  fixed = fixed.replace(/font-boldtext-white/g, 'font-bold text-white');
  fixed = fixed.replace(/text-lgtext-gray-300/g, 'text-lg text-gray-300');
  fixed = fixed.replace(/justify-centermx-auto/g, 'justify-center mx-auto');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/" \/ \/>/g, '" />');
  fixed = fixed.replace(/" \/>/g, '" />');
  
  // Fix malformed function names
  fixed = fixed.replace(/const Ai3 dGenerationPage/g, 'const Ai3dGenerationPage');
  fixed = fixed.replace(/function Ai3 dGenerationPage/g, 'function Ai3dGenerationPage');
  
  // Fix malformed meta tags
  fixed = fixed.replace(/<meta name="description" content="([^"]*)" \/ \/>/g, '<meta name="description" content="$1" />');
  fixed = fixed.replace(/<meta name="keywords" content="([^"]*)" \/ \/>/g, '<meta name="keywords" content="$1" />');
  
  // Fix malformed title tags
  fixed = fixed.replace(/<title>Ai 3 d Generation/g, '<title>AI 3D Generation');
  
  // Fix malformed Helmet tags
  fixed = fixed.replace(/<Helmet>\s*<title>([^<]*)<\/title>\s*<meta name="description" content="([^"]*)" \/ \/>/g, 
    '<Helmet>\n        <title>$1</title>\n        <meta name="description" content="$2" />');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixFinalParsing(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed final parsing: ${filePath}`);
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
  console.log('Starting to fix final parsing issues...');
  
  // Get all TypeScript/TSX files
  const files = await glob('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']
  });
  
  let fixedCount = 0;
  
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\nFixed final parsing issues in ${fixedCount} files out of ${files.length} total files.`);
}

main().catch(console.error);