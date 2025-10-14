const fs = require('fs');
const path = require('path');

// List of files with unused imports
const filesToFix = [
  'app/404.tsx',
  'app/careers/page.tsx',
  'app/components/About.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/ContentStatistics.tsx',
  'app/components/DynamicContentShowcase.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/Sidebar.tsx',
  'app/config/errorBoundaryConfig.tsx',
  'app/micro-saas/page.tsx',
  'app/support/page.tsx'
];

// Fix unused imports in a file
const fixUnusedImports = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const updatedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip empty import statements
      if (line.trim() === 'import {} from' || line.includes('import {} from')) {
        continue;
      }
      
      // Check for unused React import (if no JSX)
      if (line.includes('import React') && !content.includes('<') && !content.includes('React.')) {
        continue; // Skip this line
      }
      
      // Check for unused imports in destructured imports
      if (line.includes('import') && line.includes('{')) {
        const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const importName = imp.split(' as ')[0].trim();
            // Check if the import is used in the file (excluding the import line itself)
            const contentWithoutImports = content.split('\n').filter(l => !l.includes('import')).join('\n');
            return contentWithoutImports.includes(importName);
          });
          
          if (usedImports.length === 0) {
            continue; // Skip this line entirely
          } else if (usedImports.length !== imports.length) {
            const newLine = line.replace(/import\s*{[^}]+}\s*from/, `import { ${usedImports.join(', ')} } from`);
            updatedLines.push(newLine);
            continue;
          }
        }
      }
      
      updatedLines.push(line);
    }
    
    const updatedContent = updatedLines.join('\n');
    if (updatedContent !== content) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('Fixing final unused imports...');
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of filesToFix) {
    if (fixUnusedImports(file)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
  console.log(`Errors: ${errorCount} files`);
  console.log('Done!');
};

main();