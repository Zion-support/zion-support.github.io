#!/usr/bin/env node

const fs = require('fs');
const { glob } = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing opening braces in object arrays
    content = content.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`],?\s*\n\s+)(\w+:\s*['"`][^'"`]*['"`])/g, '$1$2{\n$1  $3');
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix missing commas between objects
    content = content.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`]\s*)\n\s+(\w+:\s*['"`][^'"`]*['"`])/g, '$1$2,\n$1$3');
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix missing closing braces
    content = content.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`]\s*)\n\s+(\w+:\s*['"`][^'"`]*['"`])/g, '$1$2,\n$1$3');
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix malformed JSX - missing closing tags
    content = content.replace(/(<p[^>]*>[\s\S]*?)(<div[^>]*>)/g, '$1</p>\n$2');
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix missing closing divs
    content = content.replace(/(<div[^>]*>[\s\S]*?)(<\/main>)/g, '$1</div>\n$2');
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
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);