import fs from 'fs';
import path from 'path';

// Function to add lazy loading to page components
function addLazyLoading(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if it's a page component
  if (filePath.includes('/page.tsx') && !filePath.includes('index')) {
    // Add lazy loading imports if not already present
    if (!content.includes('lazy') && !content.includes('Suspense')) {
      content = content.replace(
        /import React from 'react';/,
        `import React, { lazy, Suspense } from 'react';`
      );
    }
  }
  
  return content;
}

// Function to optimize imports
function optimizeImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove unused React imports
  if (content.includes('import React, {') && !content.includes('useState') && !content.includes('useEffect')) {
    content = content.replace(/import React, \{[^}]*\} from 'react';/, 'import React from \'react\';');
  }
  
  // Remove unused lucide-react imports
  const lucideMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
  if (lucideMatch) {
    const imports = lucideMatch[1].split(',').map(imp => imp.trim());
    const usedImports = imports.filter(imp => {
      const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
      return content.includes(cleanImp) && content.indexOf(cleanImp) > content.indexOf(lucideMatch[0]);
    });
    
    if (usedImports.length > 0) {
      content = content.replace(
        lucideMatch[0],
        `import { ${usedImports.join(', ')} } from 'lucide-react';`
      );
    } else {
      content = content.replace(lucideMatch[0], '');
    }
  }
  
  return content;
}

// Get all page files
const pageFiles = [];
function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findPageFiles(filePath);
    } else if (file === 'page.tsx') {
      pageFiles.push(filePath);
    }
  });
}

findPageFiles('app');

console.log('Optimizing performance...');

pageFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add lazy loading
    content = addLazyLoading(filePath);
    
    // Optimize imports
    content = optimizeImports(filePath);
    
    // Write back
    fs.writeFileSync(filePath, content);
    console.log(`Optimized: ${filePath}`);
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
  }
});

console.log('Performance optimization completed!');