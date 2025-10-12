const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix misplaced imports
    const importRegex = /import\s+[^;]+;/g;
    const imports = content.match(importRegex) || [];
    
    // Remove all imports first
    content = content.replace(importRegex, '');
    
    // Find the first non-import line to place imports
    const lines = content.split('\n');
    let insertIndex = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line && !line.startsWith('//') && !line.startsWith('/*')) {
        insertIndex = i;
        break;
      }
    }
    
    // Add imports at the top
    if (imports.length > 0) {
      const uniqueImports = [...new Set(imports)];
      lines.splice(insertIndex, 0, ...uniqueImports);
      fixed = true;
    }
    
    // Fix function declarations
    content = lines.join('\n');
    
    // Fix React component syntax
    content = content.replace(/export default function (\w+)\(\) \{/g, 'const $1: React.FC = () => {');
    content = content.replace(/export default (\w+);/g, 'export default $1');
    
    // Fix JSX syntax issues
    content = content.replace(/return\s*\(\s*<div/g, 'return (\n    <div');
    content = content.replace(/<\/div>\s*\)\s*;?\s*$/gm, '</div>\n  )\n}');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    content = content.replace(/;\s*;/g, ';');
    
    // Fix React imports
    if (!content.includes('import React')) {
      content = 'import React from \'react\'\n' + content;
      fixed = true;
    }
    
    // Fix Helmet imports
    if (content.includes('<Helmet>') && !content.includes('react-helmet-async')) {
      content = content.replace(/import React from 'react'/, "import React from 'react'\nimport { Helmet } from 'react-helmet-async'");
      fixed = true;
    }
    
    // Fix Link imports
    if (content.includes('<Link') && !content.includes('react-router-dom')) {
      content = content.replace(/import React from 'react'/, "import React from 'react'\nimport { Link } from 'react-router-dom'");
      fixed = true;
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findAndFixSyntaxErrors(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findAndFixSyntaxErrors(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixSyntaxErrors(filePath);
    }
  }
}

// Start fixing from the app directory
findAndFixSyntaxErrors('/workspace/app');
console.log('Syntax errors fixed!');