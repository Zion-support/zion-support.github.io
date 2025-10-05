#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix malformed br tags like <br / />>> -> <br />
    content = content.replace(/<br\s*\/\s*\/\s*>>+/g, '<br />');
    
    // Fix malformed br tags like <br />> -> <br />
    content = content.replace(/<br\s*\/\s*>>+/g, '<br />');
    
    // Fix malformed br tags like <br>> -> <br />
    content = content.replace(/<br\s*>>+/g, '<br />');
    
    // Fix any remaining malformed br tags
    content = content.replace(/<br\s*[^>]*>>+/g, '<br />');
    
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