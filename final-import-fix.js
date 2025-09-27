import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Comprehensive import fixes
    const fixes = [
      // Fix all broken import patterns
      { pattern: /import,\s*([^']+)fr,\s*o,\s*m\s+'([^']+)';/g, replacement: "import $1 from '$2';" },
      { pattern: /import,\s*\{\s*([^}]+)\s*\}\s*fr,\s*o,\s*m\s+'([^']+)';/g, replacement: "import { $1 } from '$2';" },
      { pattern: /import\s+([^,]+),\s*([^,]+),\s*from/g, replacement: 'import $1 from' },
      { pattern: /import\s+([^,]+),\s*\{\s*([^}]+)\s*\}\s*from/g, replacement: 'import { $2 } from' },
      { pattern: /import,\s*([^']+)fr,\s*o,\s*m/g, replacement: 'import $1 from' },
      { pattern: /import,\s*([^']+)fr,\s*o,\s*m\s+'([^']+)';/g, replacement: "import $1 from '$2';" },
      
      // Fix specific broken patterns
      { pattern: /import Reac,\s*t,/g, replacement: 'import React' },
      { pattern: /import,\s*React,/g, replacement: 'import React' },
      { pattern: /import,\s*Head,/g, replacement: 'import Head' },
      { pattern: /import,\s*Link,/g, replacement: 'import Link' },
      { pattern: /import,\s*dynamic,/g, replacement: 'import dynamic' },
      { pattern: /from 'rea,\s*c,\s*t'/g, replacement: "from 'react'" },
      { pattern: /from 'ne,\s*x,\s*t'/g, replacement: "from 'next'" },
      { pattern: /from 'next\/hea,\s*d'/g, replacement: "from 'next/head'" },
      { pattern: /from 'next\/li,\s*n,\s*k'/g, replacement: "from 'next/link'" },
      { pattern: /from 'next\/dynam,\s*i,\s*c'/g, replacement: "from 'next/dynamic'" },
      { pattern: /from 'next\/a,\s*p,\s*p'/g, replacement: "from 'next/app'" },
      { pattern: /from 'next\/docume,\s*n,\s*t'/g, replacement: "from 'next/document'" },
      { pattern: /from 'react-helm,\s*e,\s*t-asy,\s*n,\s*c'/g, replacement: "from 'react-helmet-async'" },
      
      // Fix export statements
      { pattern: /export,\s*default,/g, replacement: 'export default' },
      { pattern: /export\s+default\s+function\s+([^(]+),\s*([^(]+)/g, replacement: 'export default function $1' },
      
      // Fix function declarations
      { pattern: /function\s+([^(]+),\s*([^(]+)/g, replacement: 'function $1' },
      { pattern: /functi,\s*o,\s*n/g, replacement: 'function' },
      
      // Fix JSX elements
      { pattern: /<Ht,\s*m,\s*l/g, replacement: '<Html' },
      { pattern: /<He,\s*a,\s*d>/g, replacement: '<Head>' },
      { pattern: /<Ma,\s*i,\s*n>/g, replacement: '<Main>' },
      { pattern: /<NextScri,\s*p,\s*t>/g, replacement: '<NextScript>' },
      
      // Fix attributes
      { pattern: /lan,\s*g=/g, replacement: 'lang=' },
      { pattern: /hre,\s*f=/g, replacement: 'href=' },
      { pattern: /r,\s*e,\s*l=/g, replacement: 'rel=' },
      { pattern: /styleshe,\s*e,\s*t/g, replacement: 'stylesheet' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Clean up any remaining broken patterns
    content = content.replace(/,\s*$/gm, '');
    content = content.replace(/\s*,\s*$/gm, '');
    content = content.replace(/,\s*$/gm, '');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDir(filePath, callback);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      callback(filePath);
    }
  });
}

// Fix all TypeScript/JavaScript files
console.log('Starting final import fixes...');
walkDir('./pages', fixFile);
walkDir('./src', fixFile);
console.log('Final import fixes completed!');