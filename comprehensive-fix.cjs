#!/usr/bin/env node

const fs = require('fs');
const { glob } = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing commas in object/array literals
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const nextLine = lines[i + 1];
      
      // Fix missing commas between object properties
      if (line.match(/\s+\w+:\s*['"`][^'"`]*['"`]\s*$/) && 
          nextLine && nextLine.match(/^\s+\w+:/)) {
        if (!line.trim().endsWith(',')) {
          line = line.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`])\s*$/, '$1$2,');
          modified = true;
        }
      }
      
      // Fix missing commas before closing braces
      if (line.match(/\s+\w+:\s*['"`][^'"`]*['"`]\s*$/) && 
          nextLine && nextLine.match(/^\s*[}\]]/)) {
        if (!line.trim().endsWith(',')) {
          line = line.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`])\s*$/, '$1$2,');
          modified = true;
        }
      }
      
      // Fix missing commas in array elements
      if (line.match(/\s*['"`][^'"`]*['"`]\s*$/) && 
          nextLine && nextLine.match(/^\s*['"`]/)) {
        if (!line.trim().endsWith(',')) {
          line = line.replace(/(\s*)(['"`][^'"`]*['"`])\s*$/, '$1$2,');
          modified = true;
        }
      }
      
      // Fix missing closing braces in objects
      if (line.match(/\s+\w+:\s*['"`][^'"`]*['"`]\s*$/) && 
          nextLine && nextLine.match(/^\s*[a-zA-Z]/)) {
        if (!line.trim().endsWith(',')) {
          line = line.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`])\s*$/, '$1$2,');
          modified = true;
        }
      }
      
      // Fix missing opening braces in objects
      if (line.match(/^\s*\w+:\s*['"`][^'"`]*['"`]\s*$/) && 
          !line.includes('{')) {
        line = line.replace(/^(\s*)(\w+:\s*['"`][^'"`]*['"`])\s*$/, '$1{\n$1  $2,');
        modified = true;
      }
      
      // Fix missing closing braces in arrays
      if (line.match(/^\s*\w+:\s*['"`][^'"`]*['"`]\s*$/) && 
          nextLine && nextLine.match(/^\s*[}\]]/)) {
        if (!line.trim().endsWith(',')) {
          line = line.replace(/(\s+)(\w+:\s*['"`][^'"`]*['"`])\s*$/, '$1$2,');
          modified = true;
        }
      }
      
      fixedLines.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, fixedLines.join('\n'));
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