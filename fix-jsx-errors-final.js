#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix specific JSX errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix missing spaces in className attributes - comprehensive patterns
  const classNameFixes = [
    // Common patterns
    { from: /min-h-screenbg-/g, to: 'min-h-screen bg-' },
    { from: /containermx-auto/g, to: 'container mx-auto' },
    { from: /text-4xlfont-bold/g, to: 'text-4xl font-bold' },
    { from: /text-xltext-gray-/g, to: 'text-xl text-gray-' },
    { from: /gridmd:grid-cols-/g, to: 'grid md:grid-cols-' },
    { from: /bg-blue-50border/g, to: 'bg-blue-50 border' },
    { from: /text-lgfont-semibold/g, to: 'text-lg font-semibold' },
    { from: /bg-green-50border/g, to: 'bg-green-50 border' },
    { from: /bg-purple-50border/g, to: 'bg-purple-50 border' },
    { from: /text-centermb-/g, to: 'text-center mb-' },
    { from: /bg-whiterounded-lg/g, to: 'bg-white rounded-lg' },
    { from: /text-xlfont-semibold/g, to: 'text-xl font-semibold' },
    { from: /text-gray-600mb-/g, to: 'text-gray-600 mb-' },
    { from: /inline-flexitems-center/g, to: 'inline-flex items-center' },
    { from: /hover:text-blue-/g, to: 'hover:text-blue-' },
    { from: /ml-2w-/g, to: 'ml-2 w-' },
    { from: /hover:bg-blue-/g, to: 'hover:bg-blue-' },
    { from: /ml-2w-/g, to: 'ml-2 w-' },
    { from: /text-4xlfont-bold/g, to: 'text-4xl font-bold' },
    { from: /text-xltext-gray-/g, to: 'text-xl text-gray-' },
    { from: /gridmd:grid-cols-/g, to: 'grid md:grid-cols-' },
    { from: /bg-whiterounded-lg/g, to: 'bg-white rounded-lg' },
    { from: /text-xlfont-semibold/g, to: 'text-xl font-semibold' },
    { from: /text-gray-600mb-/g, to: 'text-gray-600 mb-' },
    { from: /inline-flexitems-center/g, to: 'inline-flex items-center' },
    { from: /hover:text-blue-/g, to: 'hover:text-blue-' },
    { from: /ml-2w-/g, to: 'ml-2 w-' },
    { from: /hover:bg-blue-/g, to: 'hover:bg-blue-' },
    { from: /ml-2w-/g, to: 'ml-2 w-' },
  ];
  
  classNameFixes.forEach(fix => {
    fixed = fixed.replace(fix.from, fix.to);
  });
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*?)";/g, 'className="$1"');
  fixed = fixed.replace(/className="([^"]*?)"$/gm, 'className="$1"');
  
  // Fix missing closing tags for Router
  if (fixed.includes('<Router>') && !fixed.includes('</Router>')) {
    fixed = fixed.replace(/(<Router>[\s\S]*?)(<\/div>\s*<\/div>\s*<\/HelmetProvider>)/, '$1      </Router>\n    $2');
  }
  
  // Fix missing closing tags for JSX fragments
  if (fixed.includes('<>') && !fixed.includes('</>')) {
    // Find the last closing div and add the fragment closing tag
    const lastDivIndex = fixed.lastIndexOf('</div>');
    if (lastDivIndex !== -1) {
      const beforeLastDiv = fixed.substring(0, lastDivIndex);
      const afterLastDiv = fixed.substring(lastDivIndex);
      fixed = beforeLastDiv + afterLastDiv.replace('</div>', '</div>\n    </>');
    }
  }
  
  // Fix unclosed p tags by adding closing tags
  const pCount = (fixed.match(/<p[^>]*>/g) || []).length;
  const closingPCount = (fixed.match(/<\/p>/g) || []).length;
  if (pCount > closingPCount) {
    const missingPs = pCount - closingPCount;
    for (let i = 0; i < missingPs; i++) {
      // Find the last unclosed p tag and add closing tag
      const lastPIndex = fixed.lastIndexOf('<p');
      if (lastPIndex !== -1) {
        const nextTagIndex = fixed.indexOf('<', lastPIndex + 1);
        if (nextTagIndex !== -1) {
          const beforeNextTag = fixed.substring(0, nextTagIndex);
          const afterNextTag = fixed.substring(nextTagIndex);
          fixed = beforeNextTag + '</p>\n              ' + afterNextTag;
        }
      }
    }
  }
  
  // Fix specific malformed patterns
  fixed = fixed.replace(/className="([^"]*?)"$/gm, 'className="$1"');
  fixed = fixed.replace(/className="([^"]*?)";/g, 'className="$1"');
  
  // Fix missing closing div tags
  const divCount = (fixed.match(/<div/g) || []).length;
  const closingDivCount = (fixed.match(/<\/div>/g) || []).length;
  if (divCount > closingDivCount) {
    const missingDivs = divCount - closingDivCount;
    for (let i = 0; i < missingDivs; i++) {
      fixed += '\n        </div>';
    }
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXErrors(content);
    
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

// Main execution
async function main() {
  console.log('Starting JSX error fixes final...');
  
  // Get all TypeScript/JavaScript files in the app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });
  
  let fixedCount = 0;
  let totalFiles = files.length;
  
  console.log(`Found ${totalFiles} files to process...`);
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('JSX error fixes final completed!');
}

main().catch(console.error);