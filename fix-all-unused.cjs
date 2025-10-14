#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixUnusedVars(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

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

    // Fix unused test imports
    if (content.includes("import { render } from '@testing-library/react'") && !content.includes('render(')) {
      content = content.replace(/import { render } from '@testing-library\/react';\n?/g, '');
      modified = true;
    }

    if (content.includes("import { HelmetProvider } from 'react-helmet-async'") && !content.includes('<HelmetProvider')) {
      content = content.replace(/import { HelmetProvider } from 'react-helmet-async';\n?/g, '');
      modified = true;
    }

    if (content.includes("import { BrowserRouter } from 'react-router-dom'") && !content.includes('<BrowserRouter')) {
      content = content.replace(/import { BrowserRouter } from 'react-router-dom';\n?/g, '');
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

    // Fix unused component variables that are assigned but never used
    const componentMatches = content.match(/const (\w+): React\.FC = \(\) => \{[\s\S]*?\};\s*const LazyPage: React\.LazyExoticComponent<React\.ComponentType<any>> = React\.lazy\(\(\) => import\('\.\/page'\)\);\s*export default LazyPage;/);
    if (componentMatches) {
      const componentName = componentMatches[1];
      content = content.replace(componentMatches[0], componentMatches[0].replace(/const LazyPage: React\.LazyExoticComponent<React\.ComponentType<any>> = React\.lazy\(\(\) => import\('\.\/page'\)\);\s*export default LazyPage;/, `export default ${componentName};`));
      modified = true;
    }

    // Fix simple Page variable assignments
    const simplePageMatch = content.match(/const Page: React\.FC = \(\) => \{[\s\S]*?\};\s*const LazyPage: React\.LazyExoticComponent<React\.ComponentType<any>> = React\.lazy\(\(\) => import\('\.\/page'\)\);\s*export default LazyPage;/);
    if (simplePageMatch) {
      content = content.replace(simplePageMatch[0], simplePageMatch[0].replace(/const LazyPage: React\.LazyExoticComponent<React\.ComponentType<any>> = React\.lazy\(\(\) => import\('\.\/page'\)\);\s*export default LazyPage;/, 'export default Page;'));
      modified = true;
    }

    // Fix unused component variables like FiveGConsultingPage, etc.
    const unusedComponentMatches = content.match(/const (\w+): React\.FC = \(\) => \{[\s\S]*?\};\s*const LazyPage: React\.LazyExoticComponent<React\.ComponentType<any>> = React\.lazy\(\(\) => import\('\.\/page'\)\);\s*export default LazyPage;/);
    if (unusedComponentMatches) {
      const componentName = unusedComponentMatches[1];
      content = content.replace(unusedComponentMatches[0], unusedComponentMatches[0].replace(/const LazyPage: React\.LazyExoticComponent<React\.ComponentType<any>> = React\.lazy\(\(\) => import\('\.\/page'\)\);\s*export default LazyPage;/, `export default ${componentName};`));
      modified = true;
    }

    // Fix unused variables in test files
    if (filePath.includes('__tests__')) {
      // Remove unused imports in test files
      const testImports = [
        "import React from 'react'",
        "import { render } from '@testing-library/react'",
        "import { HelmetProvider } from 'react-helmet-async'",
        "import { BrowserRouter } from 'react-router-dom'"
      ];
      
      testImports.forEach(importLine => {
        if (content.includes(importLine) && !content.includes(importLine.replace('import ', '').split(' ')[1])) {
          content = content.replace(importLine + ';\n', '');
          modified = true;
        }
      });
    }

    // Fix unused variables in App_minimal_working.tsx
    if (filePath.includes('App_minimal_working.tsx')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      content = content.replace(/import { Router, Routes, Route } from 'react-router-dom';\n?/g, '');
      content = content.replace(/import { HelmetProvider } from 'react-helmet-async';\n?/g, '');
      content = content.replace(/import HomePage from '\.\/app\/page';\n?/g, '');
      modified = true;
    }

    // Fix unused variables in EnhancedHeader.tsx
    if (filePath.includes('EnhancedHeader.tsx')) {
      content = content.replace(/import { Menu, X } from 'lucide-react';\n?/g, '');
      content = content.replace(/import React, { useState } from 'react';\n?/g, '');
      content = content.replace(/import { Link } from 'react-router-dom';\n?/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused vars in: ${filePath}`);
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
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixUnusedVars(filePath);
    }
  });
}

// Process all directories
processDirectory('./app');
processDirectory('./__tests__');
processDirectory('./src');

// Fix specific files
const specificFiles = [
  './App.tsx',
  './App_minimal_working.tsx',
  './EnhancedHeader.tsx'
];

specificFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fixUnusedVars(file);
  }
});

console.log('All unused variable fixes completed!');