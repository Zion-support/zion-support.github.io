#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix missing React imports
function fixMissingReactImports(content) {
  // Check if React hooks are used but not imported
  const usesUseState = content.includes('useState') && !content.includes('import { useState');
  const usesUseEffect = content.includes('useEffect') && !content.includes('import { useEffect');
  const usesLazy = content.includes('lazy') && !content.includes('import { lazy');
  const usesSuspense = content.includes('Suspense') && !content.includes('import { Suspense');
  const usesMemo = content.includes('memo') && !content.includes('import { memo');
  
  if (usesUseState || usesUseEffect || usesLazy || usesSuspense || usesMemo) {
    // Find the first import statement
    const lines = content.split('\n');
    let firstImportIndex = -1;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('import ')) {
        firstImportIndex = i;
        break;
      }
    }
    
    if (firstImportIndex >= 0) {
      // Add React import before the first import
      const reactImports = [];
      if (usesUseState) reactImports.push('useState');
      if (usesUseEffect) reactImports.push('useEffect');
      if (usesLazy) reactImports.push('lazy');
      if (usesSuspense) reactImports.push('Suspense');
      if (usesMemo) reactImports.push('memo');
      
      const reactImport = `import React, { ${reactImports.join(', ')} } from 'react';`;
      lines.splice(firstImportIndex, 0, reactImport);
      return lines.join('\n');
    }
  }
  
  return content;
}

// Function to fix malformed import statements
function fixMalformedImports(content) {
  const lines = content.split('\n');
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for malformed import with comma operator at the beginning
    if (line.trim().startsWith(',') || line.trim().startsWith('  ,')) {
      // This is a malformed import line, skip it
      continue;
    }
    
    // Check for lines that start with import but have comma operators
    if (line.trim().startsWith('import ') && line.includes(',') && !line.includes('{')) {
      // This is a malformed import, try to fix it
      const match = line.match(/import\s+([^,]+),\s*(.+)/);
      if (match) {
        const firstPart = match[1].trim();
        const rest = match[2].trim();
        
        // If it looks like a named import, fix it
        if (rest.includes('from')) {
          const moduleName = rest.match(/from\s+['"]([^'"]+)['"]/)?.[1];
          if (moduleName) {
            const newImport = `import { ${firstPart} } from '${moduleName}';`;
            result.push(newImport);
            continue;
          }
        }
      }
    }
    
    result.push(line);
  }
  
  return result.join('\n');
}

// Function to remove unused imports
function removeUnusedImports(content) {
  const lines = content.split('\n');
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is an import statement
    if (line.trim().startsWith('import ')) {
      const match = line.match(/import\s+(?:{([^}]+)}|([^{][^;]+?))\s+from\s+['"]([^'"]+)['"];?/);
      if (match) {
        const namedImports = match[1];
        const defaultImport = match[2];
        const moduleName = match[3];
        
        if (namedImports) {
          // Handle named imports
          const namedImportList = namedImports.split(',').map(imp => imp.trim());
          const usedNamedImports = [];
          
          for (const namedImport of namedImportList) {
            const cleanImport = namedImport.replace(/\s+as\s+\w+/, '').trim();
            if (content.includes(cleanImport) && !content.includes(`// ${cleanImport}`)) {
              usedNamedImports.push(namedImport);
            }
          }
          
          if (usedNamedImports.length === 0) {
            // All imports are unused, skip this line
            continue;
          } else if (usedNamedImports.length < namedImportList.length) {
            // Some imports are unused, replace with only used imports
            const newImport = `import { ${usedNamedImports.join(', ')} } from '${moduleName}';`;
            result.push(newImport);
            continue;
          }
        } else if (defaultImport) {
          // Handle default imports
          const cleanImport = defaultImport.trim();
          if (!content.includes(cleanImport) || content.includes(`// ${cleanImport}`)) {
            // Import is unused, skip this line
            continue;
          }
        }
      }
    }
    
    result.push(line);
  }
  
  return result.join('\n');
}

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix missing React imports
    content = fixMissingReactImports(content);
    
    // Fix malformed imports
    content = fixMalformedImports(content);
    
    // Remove unused imports
    content = removeUnusedImports(content);
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
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

// Find all TypeScript/TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Fixing ${files.length} TypeScript files...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);