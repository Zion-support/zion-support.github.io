import fs from 'fs';
import path from 'path';

// Common unused imports that should be removed
const unusedImports = [
  'Component',
  'ErrorInfo', 
  'ReactNode'
];

// Files to check and fix
const filesToCheck = [
  './app/components/GlobalErrorBoundary.tsx',
  './app/components/AdvancedErrorBoundary.tsx',
  './app/components/EnhancedErrorBoundary.tsx',
  './app/components/ImprovedErrorBoundary.tsx',
  './app/components/ComprehensiveErrorBoundary.tsx'
];

let fixedCount = 0;

filesToCheck.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Check if file has unused imports
      const lines = content.split('\n');
      const newLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if this is an import line with React
        if (line.includes('import React') && line.includes('from \'react\'')) {
          // Extract the import part
          const importMatch = line.match(/import\s+React\s*,\s*\{([^}]+)\}\s+from\s+'react'/);
          
          if (importMatch) {
            const imports = importMatch[1].split(',').map(imp => imp.trim());
            const usedImports = [];
            
            // Check which imports are actually used in the file
            for (const imp of imports) {
              const importName = imp.trim();
              if (unusedImports.includes(importName)) {
                // Check if this import is used anywhere in the file
                const isUsed = content.includes(importName) && 
                  !content.match(new RegExp(`import.*${importName}.*from`));
                
                if (!isUsed) {
                  console.log(`Removing unused import: ${importName} from ${filePath}`);
                  modified = true;
                } else {
                  usedImports.push(importName);
                }
              } else {
                usedImports.push(importName);
              }
            }
            
            if (usedImports.length === 0) {
              // No imports left, just import React
              newLines.push("import React from 'react';");
            } else {
              // Reconstruct the import line
              newLines.push(`import React, { ${usedImports.join(', ')} } from 'react';`);
            }
          } else {
            newLines.push(line);
          }
        } else {
          newLines.push(line);
        }
      }
      
      if (modified) {
        const newContent = newLines.join('\n');
        fs.writeFileSync(filePath, newContent);
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files`);