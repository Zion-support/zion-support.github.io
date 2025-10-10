#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix useEffect syntax errors
function fixUseEffectErrors(content) {
  let fixed = content;
  
  // Fix useEffect with extra closing divs
  fixed = fixed.replace(/useEffect\(\s*\(\s*\)\s*=>\s*\{\s*[^}]*\s*\},\s*\[\]\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\)\s*;/g, (match) => {
    const cleanMatch = match.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\)\s*;/, ']);');
    return cleanMatch;
  });
  
  // Fix useEffect with extra closing divs (variations)
  fixed = fixed.replace(/useEffect\(\s*\(\s*\)\s*=>\s*\{\s*[^}]*\s*\},\s*\[\]\s*<\/div>\s*<\/div>\s*\)\s*;/g, (match) => {
    const cleanMatch = match.replace(/<\/div>\s*<\/div>\s*\)\s*;/, ']);');
    return cleanMatch;
  });
  
  // Fix useEffect with extra closing divs (single div)
  fixed = fixed.replace(/useEffect\(\s*\(\s*\)\s*=>\s*\{\s*[^}]*\s*\},\s*\[\]\s*<\/div>\s*\)\s*;/g, (match) => {
    const cleanMatch = match.replace(/<\/div>\s*\)\s*;/, ']);');
    return cleanMatch;
  });
  
  return fixed;
}

// Main function to process files
async function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'App.tsx'
  ];
  
  let processedCount = 0;
  let errorCount = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: [
        'node_modules/**',
        'dist/**',
        'build/**',
        '**/*.d.ts',
        '**/node_modules/**'
      ]
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fixed = fixUseEffectErrors(content);
        
        // Only write if content changed
        if (fixed !== content) {
          fs.writeFileSync(file, fixed, 'utf8');
          console.log(`Fixed useEffect errors in: ${file}`);
          processedCount++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorCount++;
      }
    }
  }
  
  console.log(`\nProcessed ${processedCount} files with ${errorCount} errors`);
}

// Run the script
processFiles().catch(console.error);