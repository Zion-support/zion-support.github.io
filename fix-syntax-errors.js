const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Fix unterminated strings with double quotes
      .replace(/'use client'"/g, "'use client'")
      .replace(/"use client""/g, '"use client"')
      // Fix unterminated strings with single quotes
      .replace(/import.*from 'next\/head''/g, "import Head from 'next/head'")
      .replace(/import.*from 'next\/link''/g, "import Link from 'next/link'")
      .replace(/import.*from 'next\/navigation''/g, "import { useRouter } from 'next/navigation'")
      .replace(/import.*from 'lucide-react''/g, "import { ArrowRight } from 'lucide-react'")
      // Fix malformed object literals
      .replace(/^\s*"title":\s*'[^']*',?\s*$/gm, '')
      .replace(/^\s*"description":\s*'[^']*',?\s*$/gm, '')
      .replace(/^\s*"keywords":\s*'[^']*',?\s*$/gm, '')
      .replace(/^\s*"icon":\s*<[^>]*>,?\s*$/gm, '')
      .replace(/^\s*"color":\s*'[^']*',?\s*$/gm, '')
      .replace(/^\s*"value":\s*'[^']*',?\s*$/gm, '')
      .replace(/^\s*"label":\s*'[^']*',?\s*$/gm, '')
      // Fix malformed imports
      .replace(/} from 'lucide-react';/g, "} from 'lucide-react';")
      .replace(/import.*from '\.\.\/components\/[^']*''/g, (match) => {
        const componentName = match.match(/components\/([^']*)/)[1];
        return `import ${componentName} from '../components/${componentName}';`;
      })
      // Remove standalone object properties
      .replace(/^\s*"[^"]*":\s*'[^']*',?\s*$/gm, '')
      .replace(/^\s*"[^"]*":\s*<[^>]*>,?\s*$/gm, '')
      // Fix PostCSS config
      .replace(/"plugins":\s*{,\s*$/gm, '"plugins": {')
      .replace(/'@tailwindcss\/postcss''/g, "'@tailwindcss/postcss': {}")
      // Clean up extra commas and semicolons
      .replace(/;;+/g, ';')
      .replace(/,\s*}/g, '}')
      .replace(/,\s*]/g, ']')
      // Remove empty lines with just commas
      .replace(/^\s*,\s*$/gm, '')
      // Fix malformed JSX
      .replace(/className="w-8 h-8""/g, 'className="w-8 h-8"')
      .replace(/className="[^"]*""/g, (match) => match.slice(0, -1));
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all TypeScript/TSX files in the app directory
const appDir = path.join(__dirname, 'app');
const files = [];

function findFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findFiles(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
}

findFiles(appDir);

// Fix each file
files.forEach(fixFile);

console.log(`Fixed ${files.length} files`);