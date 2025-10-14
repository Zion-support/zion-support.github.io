#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix unescaped apostrophes in JSX text content
  fixed = fixed.replace(/(?<=>)([^<]*?)'([^<]*?)(?=<)/g, (match, before, after) => {
    return before + '&apos;' + after;
  });
  
  // Fix malformed className attributes with spaces
  fixed = fixed.replace(/className="([^"]*?)\s+([^"]*?)"/g, 'className="$1$2"');
  
  // Fix malformed hover: attributes
  fixed = fixed.replace(/hover:\s+([a-zA-Z-]+)/g, 'hover:$1');
  
  // Fix missing closing tags for common elements
  const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
  selfClosingTags.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'g');
    fixed = fixed.replace(regex, `<$1$2 />`);
  });
  
  // Fix unclosed div tags (basic pattern)
  const divCount = (fixed.match(/<div/g) || []).length;
  const closingDivCount = (fixed.match(/<\/div>/g) || []).length;
  if (divCount > closingDivCount) {
    const missingDivs = divCount - closingDivCount;
    for (let i = 0; i < missingDivs; i++) {
      fixed += '\n        </div>';
    }
  }
  
  // Fix unclosed p tags (basic pattern)
  const pCount = (fixed.match(/<p/g) || []).length;
  const closingPCount = (fixed.match(/<\/p>/g) || []).length;
  if (pCount > closingPCount) {
    const missingPs = pCount - closingPCount;
    for (let i = 0; i < missingPs; i++) {
      fixed += '\n              </p>';
    }
  }
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>([^<]*?)<([^>]*?)>([^<]*?)<\/>/, '<>$1<$2>$3</$2></>');
  
  // Fix missing closing tags for Router
  if (fixed.includes('<Router>') && !fixed.includes('</Router>')) {
    fixed = fixed.replace(/(<Router>[\s\S]*?)(<\/div>\s*<\/div>\s*<\/HelmetProvider>)/, '$1      </Router>\n    $2');
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
  console.log('Starting JSX error fixes...');
  
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
  console.log('JSX error fixes completed!');
}

main().catch(console.error);