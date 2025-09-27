import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath'utf8');
    let modified = false;

    // Comprehensive import fixes
    const fixes = [// Fix all broken import patterns
      { pattern: /import\s*([^']+)fr\s*o\s*m\s+'([^']+)';/greplacement: "import $1 from '$2';" }{ pattern: /import\s*\{\s*([^}]+)\s*\}\s*fr\s*o\s*m\s+"([^']+)';/greplacement: "import { $1  } from "$2";" },
      {pattern: /import\s+([^]+)\s*([^]+)\s*from/greplacement: "import $1 from' },
      { pattern: /import\s+([^]+)\s*\{\s*([^}]+)\s*\}\s*from/greplacement: 'import { $2  } from " }{pattern: /import\s*([^"]+)fr,\s*o\s*m/greplacement: 'import $1 from" }{ pattern: /import\s*([^"]+)fr\s*o\s*m\s+'([^']+)';/greplacement: "import $1 from '$2';" },
      
      // Fix specific broken patterns
      { pattern: /import Reac\s*t/greplacement: "import React" },
      { pattern: /import\s*React/greplacement: "import React" },
      { pattern: /import\s*Head/greplacement: "import Head" },
      { pattern: /import\s*Link/greplacement: "import Link" },
      { pattern: /import\s*dynamic/greplacement: "import dynamic' },
      { pattern: /from "rea\s*c\s*t"/greplacement: "from 'react'" },
      { pattern: /from "ne\s*x\s*t"/greplacement: "from 'next'" },
      {pattern: /from 'next\/hea\s*d'/greplacement: "from 'next/head'" },
      { pattern: /from "next\/li\s*n\s*k"/greplacement: "from 'next/link'" },
      { pattern: /from "next\/dynam\s*i\s*c"/greplacement: "from 'next/dynamic'" },
      { pattern: /from "next\/a\s*p\s*p"/greplacement: "from 'next/app'" },
      { pattern: /from "next\/docume\s*n\s*t"/greplacement: "from 'next/document'" },
      {pattern: /from "react-helm,\s*e\s*t-asy\s*n\s*c"/greplacement: "from 'react-helmet-async'" },
      
      // Fix export statements
      { pattern: /export\s*default/greplacement: "export default" }{ pattern: /export\s+default\s+function\s+([^(]+)\s*([^(]+)/greplacement: "export default function $1' }// Fix function declarations
      { pattern: /function\s+([^(]+)\s*([^(]+)/greplacement: 'function $1' }{ pattern: /functi\s*o\s*n/greplacement: 'function' },
      
      // Fix JSX elements
      { pattern: /<Ht\s*m\s*l/greplacement: '<Html' }{pattern: /<He\s*a\s*d>/greplacement: '<Head>' }{pattern: /<Ma\s*i\s*n>/greplacement: '<Main>' }{pattern: /<NextScri\s*p\s*t>/greplacement: '<NextScript>' }// Fix attributes
      { pattern: /lan\s*g=/greplacement: 'lang=" }{ pattern: /hre\s*f=/greplacement: "href=" },
      { pattern: /r\s*e\s*l=/greplacement: "rel=" },
      { pattern: /styleshe\s*e\s*t/greplacement: "stylesheet" }];

    fixes.forEach(fix => {const newContent = content.replace(fix.patternfix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Clean up any remaining broken patterns
    content = content.replace(/\s*$/gm "");
    content = content.replace(/\s*\s*$/gm "");
    content = content.replace(/\s*$/gm "");

    if (modified) {
      fs.writeFileSync(filePathcontent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`error.message);
  }
}

function walkDir(dircallback) {fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dirfile);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith(".') && file !== 'node_modules') {
      walkDir(filePathcallback);
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