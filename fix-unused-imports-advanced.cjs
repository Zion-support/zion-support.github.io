const fs = require('fs');
const path = require('path');

// Function to fix unused imports
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if React is imported but not used in JSX
    const hasReactImport = content.includes("import React from 'react'") || 
                          content.includes("import React, {") ||
                          content.includes("import * as React from 'react'");
    
    if (hasReactImport) {
      // Check if React is actually used in JSX (not just in JSX syntax)
      const hasReactInJSX = content.includes('<React.') || 
                           content.includes('React.createElement') ||
                           content.includes('React.Fragment') ||
                           content.includes('React.Component');
      
      // Check if it's a functional component that needs React for JSX
      const hasJSX = content.includes('<') && content.includes('>');
      
      if (!hasReactInJSX && !hasJSX) {
        // Remove React import
        content = content.replace(/import React from 'react';\n/, '');
        content = content.replace(/import \* as React from 'react';\n/, '');
        modified = true;
      }
    }

    // Fix unused named imports
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip empty import lines
      if (line.trim() === "import { } from 'react';" || 
          line.trim() === "import React, { } from 'react';" ||
          line.trim() === "import { } from 'lucide-react';" ||
          line.trim() === "import { } from '@heroicons/react';") {
        continue;
      }
      
      // Check for unused named imports
      if (line.includes('import {') && line.includes('} from')) {
        const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const source = importMatch[2];
          const usedImports = [];
          
          for (const imp of imports) {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            // Check if the import is used in the file
            const isUsed = content.includes(`<${cleanImp}`) || 
                          content.includes(`</${cleanImp}>`) ||
                          content.includes(`${cleanImp}(`) ||
                          content.includes(`${cleanImp}.`) ||
                          content.includes(` ${cleanImp} `) ||
                          content.includes(`{${cleanImp}}`) ||
                          content.includes(`[${cleanImp}]`) ||
                          content.includes(`"${cleanImp}"`) ||
                          content.includes(`'${cleanImp}'`) ||
                          content.includes(`${cleanImp}:`) ||
                          content.includes(`${cleanImp}=`) ||
                          content.includes(`${cleanImp} `) ||
                          content.includes(`${cleanImp}\n`) ||
                          content.includes(`${cleanImp};`) ||
                          content.includes(`${cleanImp},`) ||
                          content.includes(`${cleanImp})`) ||
                          content.includes(`${cleanImp}]`) ||
                          content.includes(`${cleanImp}`) && content.split(`${cleanImp}`).length > 2;
            
            if (isUsed) {
              usedImports.push(imp);
            }
          }
          
          if (usedImports.length === 0) {
            // All imports are unused, remove the entire line
            continue;
          } else if (usedImports.length < imports.length) {
            // Some imports are unused, keep only the used ones
            const newLine = `import { ${usedImports.join(', ')} } from '${source}';`;
            newLines.push(newLine);
            modified = true;
            continue;
          }
        }
      }
      
      newLines.push(line);
    }
    
    if (modified || newLines.length !== lines.length) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx/.ts files to process`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);