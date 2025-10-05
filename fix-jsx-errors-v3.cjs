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
    
    // Fix malformed JSX attributes like aria-hidden="true" /> -> <span aria-hidden="true" />
    content = content.replace(/^\s*aria-hidden="true"\s*\/>\s*$/gm, '');
    
    // Fix malformed JSX elements with text and />
    content = content.replace(/(\w+)\s+\/>/g, '$1');
    
    // Fix malformed JSX elements that are just />
    content = content.replace(/^\s*\/>\s*$/gm, '');
    
    // Fix malformed icon properties
    content = content.replace(/icon:\s*\/>,/g, 'icon: "🔮",');
    content = content.replace(/icon:\s*\/>/g, 'icon: "🔮"');
    
    // Fix specific patterns like "Read More  />" -> "Read More"
    content = content.replace(/(\w+)\s+\/>/g, '$1');
    
    // Fix patterns like "Explore Breakthroughs  />" -> "Explore Breakthroughs"
    content = content.replace(/(\w+\s+\w+)\s+\/>/g, '$1');
    
    // Fix malformed JSX attributes that are standalone
    content = content.replace(/^\s*aria-hidden="true"\s*\/>\s*$/gm, '');
    
    // Fix malformed JSX attributes that are standalone
    content = content.replace(/^\s*role="status"\s*$/gm, '');
    
    // Fix malformed JSX attributes that are standalone
    content = content.replace(/^\s*aria-label="[^"]*"\s*$/gm, '');
    
    // Remove empty lines that might have been created
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
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