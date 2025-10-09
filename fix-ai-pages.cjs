#!/usr/bin/env node

const fs = require('fs');
const { glob } = require('glob');

function fixAIPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing opening braces in object arrays
    content = content.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`],?\s*\n\s+)(\w+:\s*['"`][^'"`]*['"`])/g, '$1$2{\n$1  $3');
    modified = true;
    
    // Fix missing commas between objects
    content = content.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`]\s*)\n\s+(\w+:\s*['"`][^'"`]*['"`])/g, '$1$2,\n$1$3');
    modified = true;
    
    // Fix missing closing braces
    content = content.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`]\s*)\n\s+(\w+:\s*['"`][^'"`]*['"`])/g, '$1$2,\n$1$3');
    modified = true;
    
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
  // Find all AI service pages
  const files = await glob('src/ai-*/page.tsx', { cwd: process.cwd() });

  console.log(`Found ${files.length} AI service pages`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixAIPage(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);