#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix duplicate imports
function fixDuplicateImports(content) {
  const lines = content.split('\n');
  const result = [];
  const imports = new Map(); // module -> { default: [], named: [] }
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is an import statement
    if (line.trim().startsWith('import ')) {
      const match = line.match(/import\s+(?:{([^}]+)}|([^{][^;]+?))\s+from\s+['"]([^'"]+)['"];?/);
      if (match) {
        const namedImports = match[1];
        const defaultImport = match[2];
        const moduleName = match[3];
        
        if (!imports.has(moduleName)) {
          imports.set(moduleName, { default: [], named: [] });
        }
        
        if (namedImports) {
          const namedImportList = namedImports.split(',').map(imp => imp.trim());
          imports.get(moduleName).named.push(...namedImportList);
        } else if (defaultImport) {
          imports.get(moduleName).default.push(defaultImport.trim());
        }
      }
    } else {
      result.push(line);
    }
  }
  
  // Generate new import statements
  for (const [moduleName, { default: defaultImports, named: namedImports }] of imports) {
    if (defaultImports.length > 0 && namedImports.length > 0) {
      // Both default and named imports
      const uniqueNamed = [...new Set(namedImports)];
      result.unshift(`import ${defaultImports[0]}, { ${uniqueNamed.join(', ')} } from '${moduleName}';`);
    } else if (defaultImports.length > 0) {
      // Only default imports
      result.unshift(`import ${defaultImports[0]} from '${moduleName}';`);
    } else if (namedImports.length > 0) {
      // Only named imports
      const uniqueNamed = [...new Set(namedImports)];
      result.unshift(`import { ${uniqueNamed.join(', ')} } from '${moduleName}';`);
    }
  }
  
  return result.join('\n');
}

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix duplicate imports
    content = fixDuplicateImports(content);
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed duplicate imports in: ${filePath}`);
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

console.log(`Fixing duplicate imports in ${files.length} TypeScript files...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);