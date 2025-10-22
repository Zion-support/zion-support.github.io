#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses lucide-react icons but doesn't import them
    if (content.includes('Layers') || content.includes('Link') || content.includes('ArrowRight')) {
      // Add lucide-react import if not present
      if (!content.includes('from \'lucide-react\'')) {
        const importMatch = content.match(/import.*from ['"]react['"];?\n/);
        if (importMatch) {
          content = content.replace(
            importMatch[0],
            importMatch[0] + "import { Layers, Link, ArrowRight } from 'lucide-react';\n"
          );
        } else {
          // Add at the beginning
          content = "import { Layers, Link, ArrowRight } from 'lucide-react';\n" + content;
        }
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixImports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting import fixes...');
const fixedCount = findAndFixFiles('./app');
console.log(`Fixed ${fixedCount} files with import issues.`);