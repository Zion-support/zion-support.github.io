#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all page files
const pageFiles = glob.sync('src/**/page.tsx');

console.log(`Found ${pageFiles.length} page files to process...`);

pageFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused lucide-react imports
    const lucideImports = content.match(/import\s*{\s*[^}]+}\s*from\s*['"]lucide-react['"];?\s*\n/g);
    if (lucideImports) {
      lucideImports.forEach(importLine => {
        // Extract the imported names
        const match = importLine.match(/import\s*{\s*([^}]+)\s*}/);
        if (match) {
          const imports = match[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const name = imp.split(' as ')[0].trim();
            return content.includes(`<${name}`) || content.includes(`${name}.`) || content.includes(`${name}(`);
          });
          
          if (usedImports.length === 0) {
            content = content.replace(importLine, '');
            modified = true;
          } else if (usedImports.length < imports.length) {
            const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';\n`;
            content = content.replace(importLine, newImport);
            modified = true;
          }
        }
      });
    }

    // Remove unused component imports (Navigation, Footer, SEOOptimizer)
    const componentImports = content.match(/import\s+(Navigation|Footer|SEOOptimizer)\s+from\s+['"][^'"]+['"];?\s*\n/g);
    if (componentImports) {
      componentImports.forEach(importLine => {
        const componentName = importLine.match(/import\s+(\w+)/)[1];
        if (!content.includes(`<${componentName}`) && !content.includes(`${componentName}.`)) {
          content = content.replace(importLine, '');
          modified = true;
        }
      });
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Done fixing unused imports!');