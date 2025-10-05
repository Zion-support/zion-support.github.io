#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Fix all remaining Link/a tag mismatches
function fixFinalLinks(content) {
  // Fix Link opening tags with a closing tags
  content = content.replace(/<Link\s+([^>]*?)>([\s\S]*?)<\/a>/g, '<a $1>$2</a>');
  
  // Fix any remaining Link tags
  content = content.replace(/<Link\s+([^>]*?)>/g, '<a $1>');
  content = content.replace(/<\/Link>/g, '</a>');
  
  return content;
}

// Process all TypeScript/TSX files
async function processFiles() {
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Fix final Link issues
      content = fixFinalLinks(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed final Link issues in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
}

processFiles().then(() => {
  console.log('Final Link fixes completed!');
}).catch(console.error);