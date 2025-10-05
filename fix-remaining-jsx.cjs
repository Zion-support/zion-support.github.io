#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix unclosed button tags
    content = content.replace(/<button([^>]*?)\s*$/gm, '<button$1>');
    
    // Fix unclosed Suspense tags
    content = content.replace(/<Suspense([^>]*?)\s*$/gm, '<Suspense$1>');
    
    // Fix unclosed div tags
    content = content.replace(/<div([^>]*?)\s*$/gm, '<div$1>');
    
    // Fix unclosed span tags
    content = content.replace(/<span([^>]*?)\s*$/gm, '<span$1>');
    
    // Fix unclosed p tags
    content = content.replace(/<p([^>]*?)\s*$/gm, '<p$1>');
    
    // Fix unclosed h1, h2, h3, h4, h5, h6 tags
    content = content.replace(/<h[1-6]([^>]*?)\s*$/gm, (match, attrs) => {
      const tag = match.match(/<h[1-6]/)[0];
      return tag + attrs + '>';
    });
    
    // Fix malformed JSX with incomplete elements
    content = content.replace(/^\s*\/>\s*$/gm, '');
    
    // Fix malformed JSX elements with text and />
    content = content.replace(/(\w+)\s+\/>/g, '$1');
    
    // Fix malformed icon properties
    content = content.replace(/icon:\s*\/>,/g, 'icon: "🔮",');
    content = content.replace(/icon:\s*\/>/g, 'icon: "🔮"');
    
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