#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common TypeScript/JSX parsing issues
function fixTypeScriptErrors(content) {
  let fixed = content;
  
  // Fix emoji characters that cause parsing issues
  const emojiMap = {
    '🎧': 'headphones',
    '📈': 'trending-up',
    '💰': 'dollar-sign',
    '👥': 'users',
    '📧': 'Email:',
    '📍': 'Address:',
    '🚀': 'rocket',
    '⚡': 'zap',
    '🔒': 'lock',
    '💡': 'lightbulb',
    '🎯': 'target',
    '📊': 'bar-chart',
    '🔧': 'settings',
    '🌟': 'star',
    '💼': 'briefcase',
    '🎨': 'palette',
    '📱': 'smartphone',
    '💻': 'laptop',
    '🌐': 'globe',
    '🔍': 'search',
    '📝': 'edit',
    '✅': 'check',
    '❌': 'x',
    '⚠️': 'alert-triangle',
    'ℹ️': 'info',
    '🎉': 'party-popper',
    '🔥': 'flame',
    '💪': 'muscle'
  };

  for (const [emoji, replacement] of Object.entries(emojiMap)) {
    fixed = fixed.replace(new RegExp(emoji, 'g'), replacement);
  }

  // Fix common JSX structure issues
  // Fix unclosed JSX elements by adding missing closing tags
  const openDivs = (fixed.match(/<div/g) || []).length;
  const closeDivs = (fixed.match(/<\/div>/g) || []).length;
  
  if (openDivs > closeDivs) {
    const missingDivs = openDivs - closeDivs;
    // Add missing closing divs before the closing of the component
    const lastReturnMatch = fixed.match(/return\s*\(\s*<[^>]*>/);
    if (lastReturnMatch) {
      const returnIndex = lastReturnMatch.index;
      const beforeClosing = fixed.lastIndexOf(');', returnIndex);
      if (beforeClosing !== -1) {
        const missingDivsHtml = '</div>'.repeat(missingDivs);
        fixed = fixed.slice(0, beforeClosing) + missingDivsHtml + '\n  ' + fixed.slice(beforeClosing);
      }
    }
  }

  // Fix common syntax issues
  fixed = fixed.replace(/\{\s*'([^']*)'\s*\}/g, '"$1"'); // Fix single quotes in JSX expressions
  fixed = fixed.replace(/\{\s*"([^"]*)"\s*\}/g, '"$1"'); // Normalize quotes
  
  // Fix common TypeScript issues
  fixed = fixed.replace(/:\s*any\s*=/g, ': any ='); // Fix any type annotations
  fixed = fixed.replace(/,\s*}/g, '}'); // Remove trailing commas in objects
  fixed = fixed.replace(/,\s*\)/g, ')'); // Remove trailing commas in function calls
  
  // Fix JSX structure issues
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*)\s*\/>/g, '<$1 />'); // Fix self-closing tags
  fixed = fixed.replace(/(<[^>]*>)\s*$/gm, '$1'); // Remove trailing whitespace in JSX
  
  // Fix common parsing errors
  fixed = fixed.replace(/\}\s*\)\s*;/g, '});'); // Fix function closing
  fixed = fixed.replace(/\}\s*\)\s*$/gm, '})'); // Fix arrow function closing
  
  return fixed;
}

// Function to fix specific file issues
function fixSpecificFileIssues(filePath, content) {
  let fixed = content;
  
  // Fix specific issues in ai-services page
  if (filePath.includes('ai-services/page.tsx')) {
    // Fix the missing closing divs issue
    const openDivs = (fixed.match(/<div/g) || []).length;
    const closeDivs = (fixed.match(/<\/div>/g) || []).length;
    
    if (openDivs > closeDivs) {
      const missingDivs = openDivs - closeDivs;
      // Find the last return statement and add missing divs
      const returnMatch = fixed.match(/return\s*\(\s*<div[^>]*>/);
      if (returnMatch) {
        const returnIndex = returnMatch.index;
        const beforeClosing = fixed.lastIndexOf(');', returnIndex);
        if (beforeClosing !== -1) {
          const missingDivsHtml = '</div>'.repeat(missingDivs);
          fixed = fixed.slice(0, beforeClosing) + missingDivsHtml + '\n  ' + fixed.slice(beforeClosing);
        }
      }
    }
  }
  
  return fixed;
}

// Main function to process files
async function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
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
        let fixed = content;
        
        // Apply general fixes
        fixed = fixTypeScriptErrors(fixed);
        
        // Apply specific file fixes
        fixed = fixSpecificFileIssues(file, fixed);
        
        // Only write if content changed
        if (fixed !== content) {
          fs.writeFileSync(file, fixed, 'utf8');
          console.log(`Fixed: ${file}`);
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