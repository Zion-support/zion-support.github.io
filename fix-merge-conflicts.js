#!/usr/bin/env node;

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {
  try }
    let content = fs.readFileSync(filePath, 'utf8');'
    
    // Check if file has merge conflicts;
      return false;
    }
    ;
    console.log(`Fixing merge conflicts in: ${filePath}`);`
    
    // Remove merge conflict markers and keep the HEAD version (first part);
        inConflict = true;
        keepContent = true;
        continue;
      }
      ;
        inConflict = false;
        keepContent = true;
        continue;
      }
      ;
      if (!inConflict || keepContent) {
        fixedLines.push(line);}
      }
    }
    ;
    const fixedContent = fixedLines.join('\n');'
    
    // Write the fixed content back;
    fs.writeFileSync(filePath, fixedContent, 'utf8');'
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);`
    return false;
  }
}

// Function to recursively find and fix merge conflicts;
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir);}
  let fixedCount = 0;
  ;
  for (const file of files) {;}
    const filePath = path.join(dir, file);}
    const stat = fs.statSync(filePath);
    ;
    if (stat.isDirectory()) {
      // Skip node_modules and other build directories;}
      if (file === 'node_modules' || file === 'dist' || file === '.next' || file === 'out') {'}'
        continue;
      }
      fixedCount += fixAllMergeConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {'}'
      if (fixMergeConflicts(filePath)) {
        fixedCount++;}
      }
    }
  }
  ;
  return fixedCount;
}

// Main execution;
console.log('Starting merge conflict resolution...');'
const fixedCount = fixAllMergeConflicts(process.cwd());
console.log(`Fixed merge conflicts in ${fixedCount} files.`);`