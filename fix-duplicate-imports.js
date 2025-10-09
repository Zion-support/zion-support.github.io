import fs from 'fs';
import path from 'path';

// Get all page files
function getAllPageFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Find all import statements
    const importMatches = content.matchAll(/import\s+.*?from\s+['"][^'"]+['"];?\n?/g);
    const imports = Array.from(importMatches);
    
    if (imports.length > 1) {
      // Group imports by module
      const importsByModule = {};
      const importLines = [];
      
      for (const match of imports) {
        const fullMatch = match[0];
        const moduleMatch = fullMatch.match(/from\s+['"]([^'"]+)['"]/);
        if (moduleMatch) {
          const module = moduleMatch[1];
          if (!importsByModule[module]) {
            importsByModule[module] = [];
          }
          importsByModule[module].push(fullMatch);
        }
        importLines.push(fullMatch);
      }
      
      // Check for duplicates within the same module
      let hasDuplicates = false;
      for (const [module, moduleImports] of Object.entries(importsByModule)) {
        if (moduleImports.length > 1) {
          hasDuplicates = true;
          break;
        }
      }
      
      if (hasDuplicates) {
        // Remove all import statements
        let newContent = content;
        for (const importLine of importLines) {
          newContent = newContent.replace(importLine, '');
        }
        
        // Add consolidated imports
        const consolidatedImports = [];
        for (const [module, moduleImports] of Object.entries(importsByModule)) {
          if (moduleImports.length > 0) {
            // Extract all imported names from this module
            const allNames = new Set();
            for (const importLine of moduleImports) {
              const nameMatch = importLine.match(/import\s+{([^}]+)}/);
              if (nameMatch) {
                const names = nameMatch[1].split(',').map(name => name.trim());
                names.forEach(name => allNames.add(name));
              } else {
                // Handle default imports
                const defaultMatch = importLine.match(/import\s+(\w+)/);
                if (defaultMatch) {
                  allNames.add(defaultMatch[1]);
                }
              }
            }
            
            if (allNames.size > 0) {
              const namesArray = Array.from(allNames);
              if (namesArray.length === 1 && namesArray[0] === 'React') {
                consolidatedImports.push(`import React from '${module}';`);
              } else {
                consolidatedImports.push(`import { ${namesArray.join(', ')} } from '${module}';`);
              }
            }
          }
        }
        
        // Add consolidated imports at the beginning
        newContent = consolidatedImports.join('\n') + '\n' + newContent;
        modified = true;
        content = newContent;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed duplicate imports: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files
const pageFiles = getAllPageFiles('app');

console.log(`Checking ${pageFiles.length} page files for duplicate imports...`);

// Fix all files
pageFiles.forEach(fixDuplicateImports);

console.log('All duplicate imports fixed!');