#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Fix all Link issues comprehensively
function fixAllLinks(content) {
  // Fix Link tags that have incorrect closing tags
  content = content.replace(/<Link\s+([^>]*?)>([^<]*?)<\/a>/g, '<a $1>$2</a>');
  
  // Fix Link tags that are self-closing but should have content
  content = content.replace(/<Link\s+([^>]*?)\s*\/>([^<]*?)<\/a>/g, '<a $1>$2</a>');
  
  // Fix any remaining Link usage - convert to anchor tags
  content = content.replace(/<Link\s+([^>]*?)to=["']([^"']*?)["']([^>]*?)>/g, '<a $1href="$2"$3>');
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
      
      // Fix all Link issues
      content = fixAllLinks(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed all Link issues in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
}

processFiles().then(() => {
  console.log('All Link fixes completed!');
}).catch(console.error);