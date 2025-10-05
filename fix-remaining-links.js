#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Fix remaining Link issues
function fixRemainingLinks(content) {
  // Fix self-closing Link tags that should be opening/closing tags
  content = content.replace(/<Link\s+([^>]*?)\s*\/>/g, '<Link $1></Link>');
  
  // Fix any remaining Link usage issues
  content = content.replace(/<Link\s+([^>]*?)href=["']([^"']*?)["']([^>]*?)>/g, '<a $1href="$2"$3>');
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
      
      // Fix remaining Link issues
      content = fixRemainingLinks(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed remaining issues in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
}

processFiles().then(() => {
  console.log('Remaining Link fixes completed!');
}).catch(console.error);