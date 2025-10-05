#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix unclosed br tags like <br -> <br />
    content = content.replace(/<br\s*$/gm, '<br />');
    
    // Fix unclosed br tags that are followed by newline and other content
    content = content.replace(/<br\s*\n/g, '<br />\n');
    
    // Fix unclosed br tags that are followed by whitespace and other content
    content = content.replace(/<br\s+([^>]*)/g, '<br $1 />');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  // Find all TypeScript/TSX files in src/components
  const pattern = 'src/components/**/*.{ts,tsx}';
  const files = await glob(pattern);

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);