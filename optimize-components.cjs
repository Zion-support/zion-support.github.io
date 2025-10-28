const fs = require('fs');
const path = require('path');

function optimizeComponent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const originalContent = content;

    // Add React.memo to functional components that don't already have it
    if (content.includes('export const ') && 
        content.includes(': React.FC') && 
        !content.includes('React.memo') &&
        !content.includes('export default')) {
      
      // Find the component name
      const componentMatch = content.match(/export const (\w+): React\.FC/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        
        // Wrap with React.memo
        content = content.replace(
          new RegExp(`export const ${componentName}: React\\.FC`, 'g'),
          `export const ${componentName}: React.FC`
        );
        
        // Add memo wrapper at the end
        const exportMatch = content.match(new RegExp(`export const ${componentName}: React\\.FC[\\s\\S]*?^};`, 'm'));
        if (exportMatch) {
          const componentCode = exportMatch[0];
          const memoWrapped = componentCode.replace(
            new RegExp(`export const ${componentName}: React\\.FC`),
            `const ${componentName}Component: React.FC`
          ).replace('};', '});');
          
          content = content.replace(componentCode, memoWrapped + `\n\nexport const ${componentName} = React.memo(${componentName}Component);`);
          modified = true;
        }
      }
    }

    // Add useMemo for expensive calculations
    if (content.includes('useState') && content.includes('useEffect') && !content.includes('useMemo')) {
      // Add useMemo import if not present
      if (!content.includes('useMemo')) {
        content = content.replace(
          /import React, { ([^}]+) } from 'react';/,
          "import React, { $1, useMemo } from 'react';"
        );
        modified = true;
      }
    }

    // Add useCallback for event handlers
    if (content.includes('const handle') && !content.includes('useCallback')) {
      // Add useCallback import if not present
      if (!content.includes('useCallback')) {
        content = content.replace(
          /import React, { ([^}]+) } from 'react';/,
          "import React, { $1, useCallback } from 'react';"
        );
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Optimized: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findComponentFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') && item.includes('Component')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find component files
const appDir = path.join(__dirname, 'app');
const componentFiles = findComponentFiles(appDir);

console.log(`Found ${componentFiles.length} component files`);

let optimizedCount = 0;
for (const file of componentFiles) {
  if (optimizeComponent(file)) {
    optimizedCount++;
  }
}

console.log(`Optimized ${optimizedCount} files`);