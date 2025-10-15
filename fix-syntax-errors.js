#!/usr/bin/env node

import fs from 'fs';
// import path from 'path';
import { glob } from 'glob';

// Patterns to fix malformed object syntax
const fixes = [
  // Fix trailing commas in object properties
  { pattern: /(\w+):\s*([^,}]+),\s*}/g, replacement: '$1: $2 }' },
  // Fix trailing commas in arrays
  { pattern: /(\w+)\s*,\s*]/g, replacement: '$1 ]' },
  // Fix double commas
  { pattern: /,\s*,/g, replacement: ',' },
  // Fix semicolons in object properties
  { pattern: /(\w+):\s*([^,}]+);/g, replacement: '$1: $2,' },
  // Fix malformed object declarations
  { pattern: /{\s*(\w+):\s*([^,}]+),\s*}/g, replacement: '{ $1: $2 }' },
  // Fix array syntax issues
  { pattern: /\[\s*(\w+)\s*,\s*\]/g, replacement: '[ $1 ]' },
  // Fix malformed JSX attributes
  { pattern: /const\s+(\w+)\s*=\s*{([^}]+)}/g, replacement: '$1={$2}' },
  // Fix duplicate closing brackets
  { pattern: /\]\]/g, replacement: ']' },
  // Fix malformed export statements
  { pattern: /export\s+default\s+NotFoundPage;/g, replacement: 'export default config;' },
  // Fix interface syntax
  { pattern: /(\w+):\s*(\w+);,/g, replacement: '$1: $2;' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes for common patterns
    content = content.replace(/,\s*}/g, ' }');
    content = content.replace(/,\s*]/g, ' ]');
    content = content.replace(/;\s*}/g, ' }');
    content = content.replace(/;\s*]/g, ' ]');
    
    // Fix malformed object destructuring
    content = content.replace(/{\s*(\w+)\s*,\s*}/g, '{ $1 }');
    
    // Fix malformed array destructuring
    content = content.replace(/\[\s*(\w+)\s*,\s*\]/g, '[ $1 ]');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false
  } catch (error) {}
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}
// Function to recursively find and fix files
function fixDirectory(dirPath) {}
}let fixedCount = 0
  try {}
} catch (error) {}
  console.error(error)
}const items = fs.readdirSync(dirPath)
    for (const item of items) {}
      const fullPath = path.join(dirPath, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {}
        // Skip node_modules and other build directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {}
          fixedCount += fixDirectory(fullPath)
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {}
        if (fixSyntaxErrors(fullPath)) {}
          fixedCount++
        }
      }
    }
  } catch (error) {}
    console.error(`Error reading directory ${dirPath}:`, error.message)
  }
  return fixedCount
}
// Main execution
console.log('Starting syntax error fixes...')
const fixedCount = fixDirectory('./')
console.log(`Syntax fixes complete. Fixed ${fixedCount} files.`)