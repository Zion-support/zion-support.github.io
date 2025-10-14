#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixPageExports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the pattern where a component is defined but not exported
    // Pattern: function ComponentName() { ... } const LazyPage = ...; export default LazyPage;
    const componentPattern = /function (\w+)\(\) \{[\s\S]*?\}\s*const LazyPage: React\.LazyExoticComponent<React\.ComponentType<any>> = React\.lazy\(\(\) => import\('\.\/page'\)\);\s*export default LazyPage;/;
    
    const match = content.match(componentPattern);
    if (match) {
      const componentName = match[1];
      const replacement = content.replace(componentPattern, `export default ${componentName};`);
      content = replacement;
      modified = true;
    }

    // Fix unused React imports
    if (content.includes("import React from 'react'") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }

    // Fix unused Helmet imports
    if (content.includes("import { Helmet } from 'react-helmet-async'") && !content.includes('<Helmet')) {
      content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
      modified = true;
    }

    // Fix unused icon imports from lucide-react
    const iconImports = content.match(/import \{[^}]*\} from 'lucide-react';/g);
    if (iconImports) {
      iconImports.forEach(importLine => {
        const icons = importLine.match(/\{([^}]+)\}/)[1].split(',').map(icon => icon.trim());
        const usedIcons = icons.filter(icon => content.includes(icon));
        if (usedIcons.length === 0) {
          content = content.replace(importLine + '\n', '');
          modified = true;
        } else if (usedIcons.length < icons.length) {
          const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';`;
          content = content.replace(importLine, newImport);
          modified = true;
        }
      });
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed page exports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') && filePath.includes('/page.tsx')) {
      fixPageExports(filePath);
    }
  });
}

// Process the app directory
processDirectory('./app');
console.log('Page export fixes completed!');