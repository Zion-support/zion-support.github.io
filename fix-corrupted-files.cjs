const fs = require('fs');
const path = require('path');

// Function to fix corrupted syntax
function fixCorruptedSyntax(content) {
  return content
    // Fix import statements
    .replace(/import React \{ ([^}]+) \}  from/g, 'import React, { $1 } from')
    .replace(/import typ, e \{ ([^}]+) \}  from/g, 'import type { $1 } from')
    .replace(/import from 'next\/head';/g, "import Head from 'next/head';")
    .replace(/import, ([^,]+), from/g, 'import $1 from')
    .replace(/import \{ ([^}]+) \} from/g, 'import { $1 } from')
    
    // Fix function declarations
    .replace(/export default function ([^(]+)\(\): J, S, X\.Eleme, n, t/g, 'export default function $1(): JSX.Element')
    .replace(/export default function ([^(]+)\(\) {  return/g, 'export default function $1() {\n  return')
    
    // Fix variable declarations
    .replace(/con, s, t \[([^,]+), ([^,]+)\] = useState/g, 'const [$1, $2] = useState')
    .replace(/con, s, t ([^=]+) = useState/g, 'const $1 = useState')
    
    // Fix JSX elements
    .replace(/<tit, l, e>([^<]+)<\/tit, l, e>/g, '<title>$1</title>')
    .replace(/<meta, nam, e="([^"]+)" conte, n, t="([^"]+)" \/>/g, '<meta name="$1" content="$2" />')
    .replace(/<He, a, d>/g, '<Head>')
    .replace(/<\/He, a, d>/g, '</Head>')
    
    // Fix component names
    .replace(/SEO, from/g, 'SEO from')
    .replace(/useAnalyti, c, s/g, 'useAnalytics')
    .replace(/J, S, X\.Eleme, n, t/g, 'JSX.Element')
    
    // Fix other common issues
    .replace(/, /g, ' ')
    .replace(/  +/g, ' ')
    .replace(/\n\s*\n\s*\n/g, '\n\n');
}

// Files to fix
const filesToFix = [
  'pages/_app.tsx',
  'pages/_document.tsx', 
  'pages/about.tsx',
  'pages/analytics.tsx',
  'pages/blog.tsx'
];

console.log('Fixing corrupted files...');

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    console.log(`Fixing ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');
    content = fixCorruptedSyntax(content);
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All files fixed!');