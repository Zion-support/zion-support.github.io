#!/usr/bin/env node

const fs = require('fs');
const { glob } = require('glob');

function fixMalformedBraces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed objects with extra braces
    content = content.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`],?\s*\n\s+)({\s*\n\s+)(\w+:\s*['"`][^'"`]*['"`])/g, '$1$2$4');
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix malformed objects with extra braces in the middle
    content = content.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`],?\s*\n\s+)({\s*\n\s+)(\w+:\s*['"`][^'"`]*['"`],?\s*\n\s+)({\s*\n\s+)(\w+:\s*['"`][^'"`]*['"`])/g, '$1$2$4$6');
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix malformed objects with extra braces at the end
    content = content.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`],?\s*\n\s+)({\s*\n\s+)(\w+:\s*['"`][^'"`]*['"`],?\s*\n\s+)({\s*\n\s+)(\w+:\s*['"`][^'"`]*['"`],?\s*\n\s+)({\s*\n\s+)(\w+:\s*['"`][^'"`]*['"`])/g, '$1$2$4$6$8');
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    if (modified) {
      fs.writeFileSync(filePath, content);
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
  // Find all TypeScript/JSX files
  const files = await glob('src/**/*.{ts,tsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} TypeScript/JSX files`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixMalformedBraces(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);