const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Files with 'use client' expression errors
const filesWithUseClient = [
  'src/App.tsx',
  'src/ai-invoice-generator/page.tsx',
  'src/ai-scheduler/page.tsx'
];

// Fix 'use client' expression errors
filesWithUseClient.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove 'use client' directive that's causing expression errors
    content = content.replace(/'use client';/g, '');
    
    // Remove unused lazy import from App.tsx
    if (filePath === 'src/App.tsx') {
      content = content.replace(/import React, { useEffect, useState, lazy } from 'react';/g, 'import React, { useEffect, useState } from \'react\';');
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  }
});

// Get all src files
const srcFiles = glob.sync('src/**/*.{ts,tsx}', { ignore: ['src/components/**', 'src/pages/**', 'src/content/**', 'src/data/**', 'src/hooks/**', 'src/types/**', 'src/utils/**', 'src/config/**'] });

// Fix unused variables by prefixing with underscore or removing
srcFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines that are just 'use client' or empty
      if (line.trim() === "'use client';" || line.trim() === '') {
        continue;
      }
      
      // Remove unused imports from lucide-react
      if (line.includes('from \'lucide-react\'')) {
        const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*['"]lucide-react['"]/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = [];
          
          // Check which imports are actually used in the file
          for (const imp of imports) {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            if (content.includes(cleanImp) && !content.includes(`// ${cleanImp}`)) {
              usedImports.push(imp);
            }
          }
          
          if (usedImports.length > 0) {
            newLines.push(`import {${usedImports.join(', ')}} from 'lucide-react';`);
          }
          modified = true;
        } else {
          newLines.push(line);
        }
      } else {
        newLines.push(line);
      }
    }
    
    if (modified) {
      content = newLines.join('\n');
    }
    
    // Remove unused variable assignments
    content = content.replace(/const\s+_(\w+)\s*=\s*[^;]+;/g, '');
    content = content.replace(/const\s+(\w+)\s*=\s*[^;]+;\s*\/\/\s*unused/gi, '');
    
    // Remove unused function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{[^}]*};\s*\/\/\s*unused/gi, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Processed ${filePath}`);
  }
});

console.log('Lint error fixes completed!');