#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript and JavaScript files
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { 
  ignore: ['node_modules/**', 'dist/**', 'app-broken/**', 'app-disabled/**'] 
});

console.log(`Found ${files.length} files to process...`);

let fixedFiles = 0;

// Common imports that are often missing
const commonImports = {
  'CheckCircle': "import { CheckCircle } from 'lucide-react';",
  'ArrowRight': "import { ArrowRight } from 'lucide-react';",
  'Link': "import { Link } from 'react-router-dom';",
  'Suspense': "import { Suspense } from 'react';",
  'useState': "import { useState } from 'react';",
  'useEffect': "import { useEffect } from 'react';",
  'lazy': "import { lazy } from 'react';",
  'React': "import React from 'react';"
};

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Check what imports are needed
    const neededImports = [];
    
    // Check for JSX usage
    if (content.includes('<CheckCircle') && !content.includes("from 'lucide-react'")) {
      neededImports.push('CheckCircle');
    }
    if (content.includes('<ArrowRight') && !content.includes("from 'lucide-react'")) {
      neededImports.push('ArrowRight');
    }
    if (content.includes('<Link') && !content.includes("from 'react-router-dom'")) {
      neededImports.push('Link');
    }
    if (content.includes('<Suspense') && !content.includes("from 'react'")) {
      neededImports.push('Suspense');
    }
    
    // Check for hook usage
    if (content.includes('useState(') && !content.includes("from 'react'")) {
      neededImports.push('useState');
    }
    if (content.includes('useEffect(') && !content.includes("from 'react'")) {
      neededImports.push('useEffect');
    }
    if (content.includes('lazy(') && !content.includes("from 'react'")) {
      neededImports.push('lazy');
    }
    
    // Add missing imports
    if (neededImports.length > 0) {
      let importsToAdd = [];
      
      // Group lucide-react imports
      const lucideImports = neededImports.filter(imp => ['CheckCircle', 'ArrowRight'].includes(imp));
      if (lucideImports.length > 0) {
        importsToAdd.push(`import { ${lucideImports.join(', ')} } from 'lucide-react';`);
      }
      
      // Group react-router-dom imports
      const routerImports = neededImports.filter(imp => ['Link'].includes(imp));
      if (routerImports.length > 0) {
        importsToAdd.push(`import { ${routerImports.join(', ')} } from 'react-router-dom';`);
      }
      
      // Group react imports
      const reactImports = neededImports.filter(imp => ['Suspense', 'useState', 'useEffect', 'lazy'].includes(imp));
      if (reactImports.length > 0) {
        // Check if React is already imported
        if (content.includes("import React")) {
          // Add to existing React import
          const reactImportMatch = content.match(/import\s+React(?:,\s*\{([^}]*)\})?/);
          if (reactImportMatch) {
            const existingImports = reactImportMatch[1] ? reactImportMatch[1].split(',').map(imp => imp.trim()) : [];
            const allImports = [...new Set([...existingImports, ...reactImports])];
            const newReactImport = `import React, { ${allImports.join(', ')} } from 'react';`;
            content = content.replace(/import\s+React[^;]*;/, newReactImport);
          }
        } else {
          importsToAdd.push(`import React, { ${reactImports.join(', ')} } from 'react';`);
        }
      }
      
      // Add imports at the top
      if (importsToAdd.length > 0) {
        const lines = content.split('\n');
        let insertIndex = 0;
        
        // Find the last import statement
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].trim().startsWith('import ')) {
            insertIndex = i + 1;
          }
        }
        
        // Insert new imports
        lines.splice(insertIndex, 0, ...importsToAdd);
        content = lines.join('\n');
      }
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed imports in: ${file}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed imports in ${fixedFiles} files.`);