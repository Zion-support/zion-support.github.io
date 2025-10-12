#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common parsing errors
function fix File Content(content) {
  let fixed = content;
  
  // Fix invalid escape sequences in import statements
  fixed = fixed.replace(/import\s+([^']+)from\s+\\'([^']+)\\'/g, "import $1 from '$2'");
  
  // Fix class Name spacing issues (missing spaces between classes)
  fixed = fixed.replace(/(\w+)([A-Z][a-z]+)(\w+)/g, (match, p1, p2, p3) => {
    // Only fix if it looks like a class Name issue (contains common Tailwind patterns)
    if (match.includes('from-') || match.includes('to-') || match.includes('bg-') || 
        match.includes('text-') || match.includes('border-') || match.includes('px-') || 
        match.includes('py-') || match.includes('mb-') || match.includes('mt-') ||
        match.includes('ml-') || match.includes('mr-') || match.includes('mx-') ||
        match.includes('pt-') || match.includes('pb-') || match.includes('pl-') ||
        match.includes('pr-') || match.includes('gap-') || match.includes('col-') ||
        match.includes('md:') || match.includes('lg:') || match.includes('sm:') ||
        match.includes('xl:') || match.includes('2xl:')) {
      return p1 + ' ' + p2 + p3;
    }
    return match;
  });
  
  // Fix specific common patterns
  fixed = fixed.replace(/from-slate-900pt-20/g, 'from-slate-900 pt-20');
  fixed = fixed.replace(/text-whitemb-6/g, 'text-white mb-6');
  fixed = fixed.replace(/text-gray-300mb-8/g, 'text-gray-300 mb-8');
  fixed = fixed.replace(/mx-autow-fit/g, 'mx-auto w-fit');
  fixed = fixed.replace(/w-5 h-5ml-2/g, 'w-5 h-5 ml-2');
  fixed = fixed.replace(/border-tborder-slate-800/g, 'border-t border-slate-800');
  fixed = fixed.replace(/px-4 sm:px-6 lg:px-8py-12/g, 'px-4 sm:px-6 lg:px-8 py-12');
  fixed = fixed.replace(/grid-cols-1 md:grid-cols-4gap-8/g, 'grid-cols-1 md:grid-cols-4 gap-8');
  fixed = fixed.replace(/col-span-1md:col-span-2/g, 'col-span-1 md:col-span-2');
  
  // Fix malformed J SX - add missing opening tags
  fixed = fixed.replace(/<d iv class Name="[^"]*" \/>/g, (match) => {
    const class Name = match.match(/class Name="([^"]*)"/)[1];
    return `<d iv class Name="${c lass Name}">`;
  });
  
  // Fix self-closing divs that should be opening tags
  fixed = fixed.replace(/<d iv class Name="([^"]*)" \/>\s*<([^>]+)>/g, '<d iv class Name="$1">\n        <$2>');
  
  // Remove invalid 'use client' directive (this is a Vite project, not Next.js)
  fixed = fixed.replace(/'use client';\s*\n/g, '');
  
  // Fix J SX expressions that need parent elements
  fixed = fixed.replace(/<H elmet \/>\s*<t itle>/g, '<H elmet>\n        <t itle>');
  fixed = fixed.replace(/<\/t itle>\s*<m eta/g, '</title>\n        <m eta');
  fixed = fixed.replace(/<\/meta>\s*<\/H elmet>/g, '</m eta>\n      </H elmet>');
  
  return fixed;
}

// Function to process a single file
function process File(file Path) {
  try {
    const content = fs.read File Sync(file Path, 'utf8');
    const fixed = fix File Content(content);
    
    if (content !== fixed) {
      fs.write File Sync(file Path, fixed, 'utf8');
      console.log(`Fixed: ${file Path}`);
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
  console.log('Starting to fix parsing errors...');
  
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
  
  console.log(`\n Fixed ${fixed Count} files out of ${files.length} total files.`);
}

main().catch(console.error);

export { fix File Content, process File };