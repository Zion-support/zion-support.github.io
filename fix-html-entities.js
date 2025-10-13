#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// HTML entities to replace
const htmlEntities = {
  '&apos;': "'",
  '&quot;': '"',
  '&lt;': '<',
  '&gt;': '>',
  '&amp;': '&',
  '&ldquo;': '"',
  '&rdquo;': '"',
  '&lsquo;': "'",
  '&rsquo;': "'",
  '&nbsp;': ' ',
  '&ndash;': '–',
  '&mdash;': '—',
  '&hellip;': '...',
  '&copy;': '©',
  '&reg;': '®',
  '&trade;': '™'
};

// Function to fix HTML entities in a file
function fixHtmlEntities(content) {
  let fixed = content;
  
  // Fix 'use client' directive
  fixed = fixed.replace(/&apos;use client&apos;/g, "'use client'");
  
  // Fix other HTML entities
  for (const [entity, replacement] of Object.entries(htmlEntities)) {
    fixed = fixed.replace(new RegExp(entity, 'g'), replacement);
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixHtmlEntities(content);
    
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
    'api/**/*.js',
    'api/**/*.ts'
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
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixHtmlEntities, processFile };