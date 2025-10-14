#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix className strings by adding proper spaces
function fixClassName(className) {
  if (!className) return className;
  
  // Remove extra spaces and fix common patterns
  return className
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/([a-zA-Z0-9])([A-Z])/g, '$1 $2') // Add space before capital letters
    .replace(/([a-zA-Z0-9])(\d)/g, '$1 $2') // Add space before numbers
    .replace(/\s+/g, ' ') // Clean up multiple spaces again
    .trim();
}

// Function to fix common JSX syntax issues
function fixJSXContent(content) {
  let fixed = content;
  
  // Fix className issues
  fixed = fixed.replace(/className="([^"]*)"/g, (match, className) => {
    const fixedClassName = fixClassName(className);
    return `className="${fixedClassName}"`;
  });
  
  // Fix missing spaces in className
  fixed = fixed.replace(/className="([^"]*[a-zA-Z0-9])([A-Z][^"]*)"/g, 'className="$1 $2"');
  fixed = fixed.replace(/className="([^"]*[a-zA-Z0-9])(\d[^"]*)"/g, 'className="$1 $2"');
  
  // Fix common malformed patterns
  fixed = fixed.replace(/className="([^"]*[a-z])([A-Z][^"]*)"/g, 'className="$1 $2"');
  fixed = fixed.replace(/className="([^"]*[a-zA-Z])(\d[^"]*)"/g, 'className="$1 $2"');
  
  // Fix missing closing tags for common elements
  fixed = fixed.replace(/<h3([^>]*)>([^<]*)<\/h3>/g, '<h3$1>$2</h3>');
  fixed = fixed.replace(/<p([^>]*)>([^<]*)<\/p>/g, '<p$1>$2</p>');
  fixed = fixed.replace(/<div([^>]*)>([^<]*)<\/div>/g, '<div$1>$2</div>');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>([^<]*)<\/>/g, '<>$1</>');
  
  // Fix missing commas in function parameters
  fixed = fixed.replace(/\)\s*{/g, ') => {');
  
  // Fix duplicate imports
  const importLines = fixed.split('\n').filter(line => line.trim().startsWith('import'));
  const uniqueImports = [...new Set(importLines)];
  const nonImportLines = fixed.split('\n').filter(line => !line.trim().startsWith('import'));
  fixed = [...uniqueImports, ...nonImportLines].join('\n');
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+):\s*'([^']*)'(\s*[^,}])/g, '$1: \'$2\',$3');
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"(\s*[^,}])/g, '$1: "$2",$3');
  
  // Fix missing closing brackets
  fixed = fixed.replace(/\[\s*$/gm, '[]');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*$/gm, 'return (');
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Fix 404 page specific issues
  if (filePath.includes('404/page.tsx')) {
    fixed = fixed.replace(/<div className=" min-h-scre e n bg-gradient-to-br from-slate-900via-purple-900to-slate-900">/g, 
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
    fixed = fixed.replace(/<div className=" contain e r mx-autopx-4py-16">/g, 
      '<div className="container mx-auto px-4 py-16">');
    fixed = fixed.replace(/<h1 className=" tex t -4xl font-boldtext-whitemb-8">/g, 
      '<h1 className="text-4xl font-bold text-white mb-8">');
    fixed = fixed.replace(/<p className=" text- x ltext-gray-300mb-8">/g, 
      '<p className="text-xl text-gray-300 mb-8">');
    fixed = fixed.replace(/<div className=" gr i d md:grid-cols-2 lg:grid-cols-3gap-8mt-12">;/g, 
      '<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">');
  }
  
  // Fix 5G pages specific issues
  if (filePath.includes('5g-')) {
    // Fix common 5G page patterns
    fixed = fixed.replace(/<div className=" min-h-screenbg-gray-50">/g, 
      '<div className="min-h-screen bg-gray-50">');
    fixed = fixed.replace(/<div className=" contain e r mx-autopx-4py-16">/g, 
      '<div className="container mx-auto px-4 py-16">');
    fixed = fixed.replace(/<div className=" text-centermb-16">/g, 
      '<div className="text-center mb-16">');
    fixed = fixed.replace(/<h1 className=" text-4xlfont-boldtext-gray-900mb-6">/g, 
      '<h1 className="text-4xl font-bold text-gray-900 mb-6">');
    fixed = fixed.replace(/<p className=" text-xltext-gray-600max-w-3xlmx-auto">/g, 
      '<p className="text-xl text-gray-600 max-w-3xl mx-auto">');
    fixed = fixed.replace(/<div className=" gridmd:grid-cols-3gap-8mb-16">;/g, 
      '<div className="grid md:grid-cols-3 gap-8 mb-16">');
  }
  
  return fixed;
}

// Main function to process files
async function fixFiles() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} files to process...`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = fixJSXContent(content);
      fixed = fixSpecificFile(filePath, fixed);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nProcessing complete!`);
  console.log(`Files fixed: ${fixedCount}`);
  console.log(`Errors: ${errorCount}`);
}

// Run the fix
fixFiles().catch(console.error);