import fs from 'fs';
import path from 'path';

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix imports in a file
const fixImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Find all import statements
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?/g;
    const imports = [];
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      const importList = match[1].split(',').map(imp => imp.trim());
      const source = match[2];
      
      // Check which imports are actually used in the file
      const usedImports = importList.filter(imp => {
        const cleanImport = imp.replace(/\s+as\s+\w+/, '').trim();
        // Check if the import is used in JSX or as a component
        const isUsed = content.includes(`<${cleanImport}`) || 
                      content.includes(`{${cleanImport}`) ||
                      content.includes(`${cleanImport}.`) ||
                      content.includes(`${cleanImport}(`) ||
                      content.includes(` ${cleanImport} `) ||
                      content.includes(`=${cleanImport}`) ||
                      content.includes(`:${cleanImport}`) ||
                      content.includes(`[${cleanImport}`) ||
                      content.includes(`${cleanImport}]`) ||
                      content.includes(`${cleanImport},`) ||
                      content.includes(`${cleanImport};`) ||
                      content.includes(`${cleanImport}`) && content.indexOf(`${cleanImport}`) !== content.lastIndexOf(`${cleanImport}`);
        
        return isUsed;
      });
      
      if (usedImports.length === 0) {
        // Remove entire import line
        content = content.replace(match[0], '');
        modified = true;
      } else if (usedImports.length !== importList.length) {
        // Update import to only include used imports
        const newImport = `import { ${usedImports.join(', ')} } from '${source}';`;
        content = content.replace(match[0], newImport);
        modified = true;
      }
    }
    
    // Remove React import if it's not used
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
console.log('Fixing imports properly...');

const files = getAllFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  try {
    fixImports(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error with file ${file}:`, error.message);
  }
});

console.log(`Processed ${fixedCount} files`);

// Also fix the main App.tsx
fixImports('./App.tsx');

console.log('Import fixes completed!');