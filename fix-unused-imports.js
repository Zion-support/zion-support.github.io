#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to remove unused imports and fix expressions
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Skip if file doesn't have imports
    if (!content.includes('import')) {
      return false;
    }
    
    // Extract all import statements
    const importRegex = /^import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"];?$/gm;
    const imports = [];
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      const importNames = match[1].split(',').map(name => name.trim());
      const moduleName = match[2];
      imports.push({ names: importNames, module: moduleName, fullMatch: match[0] });
    }
    
    // Check which imports are actually used
    const usedImports = new Set();
    
    imports.forEach(importGroup => {
      importGroup.names.forEach(importName => {
        // Check if the import is used in the file (excluding the import statement itself)
        const contentWithoutImports = content.replace(/^import.*$/gm, '');
        const regex = new RegExp(`\\b${importName}\\b`, 'g');
        if (regex.test(contentWithoutImports)) {
          usedImports.add(importName);
        }
      });
    });
    
    // Remove unused imports
    imports.forEach(importGroup => {
      const usedNames = importGroup.names.filter(name => usedImports.has(name));
      
      if (usedNames.length === 0) {
        // Remove entire import statement
        content = content.replace(importGroup.fullMatch + '\n', '');
        modified = true;
      } else if (usedNames.length < importGroup.names.length) {
        // Update import statement to only include used names
        const newImport = `import { ${usedNames.join(', ')} } from '${importGroup.module}';`;
        content = content.replace(importGroup.fullMatch, newImport);
        modified = true;
      }
    });
    
    // Fix unused expressions (lines that are just function calls without assignment)
    content = content.replace(/^(\s*)([a-zA-Z_$][a-zA-Z0-9_$]*\s*\([^)]*\)\s*;?\s*)$/gm, (match, indent, expr) => {
      // Skip if it's a legitimate function call that should be kept
      if (expr.includes('console.') || 
          expr.includes('useEffect') || 
          expr.includes('useState') ||
          expr.includes('useCallback') ||
          expr.includes('useMemo') ||
          expr.includes('React.') ||
          expr.includes('document.') ||
          expr.includes('window.') ||
          expr.includes('localStorage.') ||
          expr.includes('sessionStorage.')) {
        return match;
      }
      // Remove standalone function calls that are likely unused
      return '';
    });
    
    // Remove empty lines that might have been created
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  let fixedCount = 0;
  
  console.log(`Found ${files.length} files to process...`);
  
  files.forEach(file => {
    if (fixUnusedImports(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

main();