#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix duplicate imports
function fixDuplicateImports(content) {
  const lines = content.split('\n');
  const result = [];
  const imports = new Map(); // module -> { default: [], named: [] }
  let inImportBlock = false;
  let currentImportBlock = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is an import statement
    if (line.trim().startsWith('import ')) {
      if (!inImportBlock) {
        inImportBlock = true;
        currentImportBlock = [line];
      } else {
        currentImportBlock.push(line);
      }
    } else if (inImportBlock && (line.trim() === '' || line.trim().startsWith('//'))) {
      currentImportBlock.push(line);
    } else {
      if (inImportBlock) {
        // Process the import block
        const processedBlock = processImportBlock(currentImportBlock);
        result.push(...processedBlock);
        inImportBlock = false;
        currentImportBlock = [];
      }
      result.push(line);
    }
  }
  
  // Process any remaining import block
  if (inImportBlock) {
    const processedBlock = processImportBlock(currentImportBlock);
    result.push(...processedBlock);
  }
  
  return result.join('\n');
}

// Function to process a block of imports and remove duplicates
function processImportBlock(importBlock) {
  const imports = new Map(); // module -> { default: [], named: [] }
  
  for (const line of importBlock) {
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
    }
  }
  
  // Generate new import statements
  const result = [];
  for (const [moduleName, { default: defaultImports, named: namedImports }] of imports) {
    if (defaultImports.length > 0 && namedImports.length > 0) {
      // Both default and named imports
      const uniqueNamed = [...new Set(namedImports)];
      result.push(`import ${defaultImports[0]}, { ${uniqueNamed.join(', ')} } from '${moduleName}';`);
    } else if (defaultImports.length > 0) {
      // Only default imports
      result.push(`import ${defaultImports[0]} from '${moduleName}';`);
    } else if (namedImports.length > 0) {
      // Only named imports
      const uniqueNamed = [...new Set(namedImports)];
      result.push(`import { ${uniqueNamed.join(', ')} } from '${moduleName}';`);
    }
  }
  
  return result;
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

console.log(`Fixing ${files.length} TypeScript files for duplicate imports...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);