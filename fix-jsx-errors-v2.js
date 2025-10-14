#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix specific JSX errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix missing spaces in className attributes
  fixed = fixed.replace(/className="([^"]*?)([a-zA-Z-]+)([^"]*?)"/g, (match, before, className, after) => {
    // Only fix if there's no space before the className
    if (before && !before.endsWith(' ')) {
      return `className="${before} ${className}${after}"`;
    }
    return match;
  });
  
  // Fix specific patterns like "min-h-screenbg-gradient-to-br"
  fixed = fixed.replace(/min-h-screenbg-gradient-to-br/g, 'min-h-screen bg-gradient-to-br');
  fixed = fixed.replace(/containermx-auto/g, 'container mx-auto');
  fixed = fixed.replace(/text-4xlfont-bold/g, 'text-4xl font-bold');
  fixed = fixed.replace(/text-xltext-gray-300/g, 'text-xl text-gray-300');
  fixed = fixed.replace(/gridmd:grid-cols-2/g, 'grid md:grid-cols-2');
  fixed = fixed.replace(/bg-blue-50border/g, 'bg-blue-50 border');
  fixed = fixed.replace(/text-lgfont-semibold/g, 'text-lg font-semibold');
  fixed = fixed.replace(/bg-green-50border/g, 'bg-green-50 border');
  fixed = fixed.replace(/bg-purple-50border/g, 'bg-purple-50 border');
  
  // Fix malformed string literals
  fixed = fixed.replace(/title: &apos;([^']*?)'/g, "title: '$1'");
  
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
  console.log('Starting JSX error fixes v2...');
  
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
  console.log('JSX error fixes v2 completed!');
}

main().catch(console.error);