#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all pages...');

// Get all page files
const pagesDir = 'pages';
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));

console.log(`Found ${files.length} page files to fix`);

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors
    if (content.includes("import React from 'react';'")) {
      content = content.replace("import React from 'react';'", "import React from 'react';");
      modified = true;
    }
    
    if (content.includes("import Head from 'next / head';")) {
      content = content.replace("import Head from 'next / head';", "import Head from 'next/head';");
      modified = true;
    }
    
    if (content.includes("import type { NextPage } from 'next',")) {
      content = content.replace("import type { NextPage } from 'next',", "import type { NextPage } from 'next';");
      modified = true;
    }
    
    if (content.includes("import type { NextPage } from 'next','")) {
      content = content.replace("import type { NextPage } from 'next','", "import type { NextPage } from 'next';");
      modified = true;
    }
    
    // Fix malformed imports
    content = content.replace(/import\s*\{\s*\}\s*from\s*['"][^'"]+['"];?\s*\n\s*import\s*\{\s*[^}]+/g, (match) => {
      const lines = match.split('\n');
      const importLines = lines.filter(line => line.trim().startsWith('import'));
      const otherLines = lines.filter(line => !line.trim().startsWith('import'));
      
      if (importLines.length > 1) {
        const firstImport = importLines[0];
        const secondImport = importLines[1];
        
        // Extract the from part from the first import
        const fromMatch = firstImport.match(/from\s*['"]([^'"]+)['"]/);
        if (fromMatch) {
          const fromPart = fromMatch[0];
          // Extract the imports from the second import
          const importsMatch = secondImport.match(/\{\s*([^}]+)\s*\}/);
          if (importsMatch) {
            const imports = importsMatch[1];
            return `import { ${imports} } ${fromPart};\n${otherLines.join('\n')}`;
          }
        }
      }
      return match;
    });
    
    // Fix unterminated strings
    content = content.replace(/<meta'\s*name='description'\s*content='[^']*$/gm, (match) => {
      return match.replace(/'$/, '');
    });
    
    // Fix JSX syntax errors
    content = content.replace(/<div[^>]*>;\s*<Head>;\s*<title>[^<]*<\/title>;\s*<meta[^>]*>;?\s*<\/Head>;?\s*<\/div>;?/g, (match) => {
      return match.replace(/;/g, '').replace(/'/g, '"');
    });
    
    // Fix missing semicolons in imports
    content = content.replace(/import\s+.*?from\s+['"][^'"]+['"]\s*(?=\n|$)/g, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix duplicate imports
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
    const uniqueImports = [...new Set(importLines)];
    if (importLines.length !== uniqueImports.length) {
      content = content.replace(importLines.join('\n'), uniqueImports.join('\n'));
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed pages/${file}`);
    }
  } catch (error) {
    console.log(`⚠️  Could not fix pages/${file}: ${error.message}`);
  }
});

console.log('🎉 All pages fixed!');