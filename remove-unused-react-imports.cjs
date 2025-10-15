#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to remove unused React imports
function removeUnusedReactImports(content) {
  const lines = content.split('\n');
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is a React import
    if (line.trim().startsWith('import React')) {
      // Check if React is actually used in the code
      const codeWithoutImports = content.replace(/import\s+.*?from\s+['"][^'"]+['"];?\s*\n/g, '');
      
      if (codeWithoutImports.includes('React.') || codeWithoutImports.includes('<React.')) {
        // React is used, keep the import
        result.push(line);
      } else {
        // React is not used, check if we need other React imports
        const match = line.match(/import\s+React(?:,\s*{([^}]+)})?\s+from\s+['"]([^'"]+)['"];?/);
        if (match) {
          const namedImports = match[1];
          if (namedImports) {
            // Check which named imports are actually used
            const namedImportList = namedImports.split(',').map(imp => imp.trim());
            const usedNamedImports = [];
            
            for (const namedImport of namedImportList) {
              const cleanImport = namedImport.replace(/\s+as\s+\w+/, '').trim();
              if (codeWithoutImports.includes(cleanImport)) {
                usedNamedImports.push(namedImport);
              }
            }
            
            if (usedNamedImports.length > 0) {
              const newImport = `import { ${usedNamedImports.join(', ')} } from '${match[2]}';`;
              result.push(newImport);
            }
            // If no named imports are used, skip this line
          } else {
            // No named imports, skip this line
          }
        } else {
          result.push(line);
        }
      }
    } else {
      result.push(line);
    }
  }
  
  return result.join('\n');
}

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove unused React imports
    content = removeUnusedReactImports(content);
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Removed unused React imports from: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Checking ${files.length} TypeScript files for unused React imports...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);