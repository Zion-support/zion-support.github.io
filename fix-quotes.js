#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix quote issues
function fixQuoteIssues(content) {
  let fixed = content;
  
  // Remove stray quotes at the end of lines that are not part of strings
  fixed = fixed.replace(/^(\s*<[^>]*[^"])\s*"$/gm, '$1');
  fixed = fixed.replace(/^(\s*<[^>]*[^"])\s*"$/gm, '$1');
  
  // Fix unterminated strings by removing stray quotes
  fixed = fixed.replace(/^(\s*<[^>]*"[^"]*)\s*"$/gm, '$1');
  
  // Fix lines that end with just a quote
  fixed = fixed.replace(/^(\s*)\s*"$/gm, '');
  
  // Fix malformed JSX with quotes
  fixed = fixed.replace(/<([^>]*)\s*"$/gm, '<$1>');
  
  return fixed;
}

// Main function to process all blog files
async function main() {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const files = await glob('**/*.tsx', { cwd: blogDir });
  
  console.log(`Found ${files.length} blog files to process...`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(blogDir, file);
    try {
      const originalContent = fs.readFileSync(filePath, 'utf8');
      const fixedContent = fixQuoteIssues(originalContent);
      
      if (originalContent !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`Fixed quotes in: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`Fixed quotes in ${fixedCount} files.`);
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixQuoteIssues };