#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixFinalUnusedVars(filePath) {
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

    // Fix unused Link imports
    if (content.includes("import { Link } from 'react-router-dom'") && !content.includes('<Link')) {
      content = content.replace(/import { Link } from 'react-router-dom';\n?/g, '');
      modified = true;
    }

    // Fix unused EnhancedSEO imports
    if (content.includes("import EnhancedSEO from") && !content.includes('<EnhancedSEO')) {
      content = content.replace(/import EnhancedSEO from[^;]+;\n?/g, '');
      modified = true;
    }

    // Fix unused Page variables - more comprehensive patterns
    const pagePatterns = [
      // Pattern 1: const Page: React.FC = () => { ... }; export default Page;
      /const Page: React\.FC = \(\) => \{[\s\S]*?\};\s*export default Page;/g,
      // Pattern 2: const Page: React.FC = () => { ... }; const LazyPage = ...; export default LazyPage;
      /const Page: React\.FC = \(\) => \{[\s\S]*?\};\s*const LazyPage: React\.LazyExoticComponent<React\.ComponentType<any>> = React\.lazy\(\(\) => import\('\.\/page'\)\);\s*export default LazyPage;/g,
      // Pattern 3: function ComponentName() { ... } const LazyPage = ...; export default LazyPage;
      /function (\w+)\(\) \{[\s\S]*?\}\s*const LazyPage: React\.LazyExoticComponent<React\.ComponentType<any>> = React\.lazy\(\(\) => import\('\.\/page'\)\);\s*export default LazyPage;/g
    ];

    pagePatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        matches.forEach(match => {
          if (pattern.source.includes('function')) {
            // For function pattern, extract the function name
            const funcMatch = match.match(/function (\w+)\(\)/);
            if (funcMatch) {
              const funcName = funcMatch[1];
              const replacement = match.replace(/const LazyPage: React\.LazyExoticComponent<React\.ComponentType<any>> = React\.lazy\(\(\) => import\('\.\/page'\)\);\s*export default LazyPage;/, `export default ${funcName};`);
              content = content.replace(match, replacement);
              modified = true;
            }
          } else {
            // For const Page pattern, just export Page directly
            const replacement = match.replace(/const LazyPage: React\.LazyExoticComponent<React\.ComponentType<any>> = React\.lazy\(\(\) => import\('\.\/page'\)\);\s*export default LazyPage;/, 'export default Page;');
            content = content.replace(match, replacement);
            modified = true;
          }
        });
      }
    });

    // Fix unused variables in test files
    if (filePath.includes('__tests__')) {
      const testImports = [
        "import React from 'react'",
        "import { render } from '@testing-library/react'",
        "import { HelmetProvider } from 'react-helmet-async'",
        "import { BrowserRouter } from 'react-router-dom'"
      ];
      
      testImports.forEach(importLine => {
        if (content.includes(importLine)) {
          const importName = importLine.match(/import \{[^}]*\}/)?.[0]?.match(/\{([^}]+)\}/)?.[1]?.split(',').map(name => name.trim());
          if (importName) {
            const isUsed = importName.some(name => content.includes(name));
            if (!isUsed) {
              content = content.replace(importLine + ';\n', '');
              modified = true;
            }
          }
        }
      });
    }

    // Fix specific files
    if (filePath.includes('App_minimal_working.tsx')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      content = content.replace(/import { Router, Routes, Route } from 'react-router-dom';\n?/g, '');
      content = content.replace(/import { HelmetProvider } from 'react-helmet-async';\n?/g, '');
      content = content.replace(/import HomePage from '\.\/app\/page';\n?/g, '');
      modified = true;
    }

    if (filePath.includes('EnhancedHeader.tsx')) {
      content = content.replace(/import { Menu, X } from 'lucide-react';\n?/g, '');
      content = content.replace(/import React, { useState } from 'react';\n?/g, '');
      content = content.replace(/import { Link } from 'react-router-dom';\n?/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed final unused vars in: ${filePath}`);
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
      fixFinalUnusedVars(filePath);
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
    fixFinalUnusedVars(file);
  }
});

console.log('Final unused variable fixes completed!');