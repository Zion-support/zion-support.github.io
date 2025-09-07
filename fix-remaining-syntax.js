#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing braces for function components
    if (content.includes('  )\n') && !content.includes('  );\n}')) {
      content = content.replace(/  \)\n$/, '  );\n}');
      modified = true;
    }

    // Fix missing closing braces for arrays
    if (content.includes(']\n\n  ]')) {
      content = content.replace(/\]\n\n  \]/g, ']\n  }');
      modified = true;
    }

    // Fix missing closing braces for objects in arrays
    if (content.includes('}\n\n  ]')) {
      content = content.replace(/\}\n\n  \]/g, '}\n  }');
      modified = true;
    }

    // Fix missing semicolons after closing braces
    if (content.includes('}\n\n  ]')) {
      content = content.replace(/\}\n\n  \]/g, '};\n  ]');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git
        if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {
          processDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        fixSyntaxErrors(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}

console.log('Starting syntax error fixes...');
processDirectory('/workspace/app');
console.log('Syntax error fixes completed!');