#!/usr/bin/env node

const fs = require('fs');

// Read the App.tsx file
const content = fs.readFileSync('App.tsx', 'utf8');

// Fix all the double quotes and syntax issues
let fixed = content
  // Remove double quotes at the end of lines
  .replace(/"\s*"\s*$/gm, '')
  .replace(/"\s*"\s*;/g, ';')
  .replace(/"\s*"\s*,/g, ',')
  .replace(/"\s*"\s*\)/g, ')')
  .replace(/"\s*"\s*\n/g, '\n')
  
  // Fix import statements
  .replace(/import\s+([^;]+)from\s+"([^"]+)"\s*"\s*$/gm, 'import $1 from "$2";')
  .replace(/import\s+([^;]+)from\s+"([^"]+)"\s*"\s*;/g, 'import $1 from "$2";')
  
  // Fix React.lazy statements
  .replace(/React\.lazy\(\(\)\s*=>\s*import\("([^"]+)"\)\s*"\s*$/gm, 'React.lazy(() => import("$1"));')
  .replace(/React\.lazy\(\(\)\s*=>\s*import\("([^"]+)"\)\s*"\s*;/g, 'React.lazy(() => import("$1"));')
  
  // Fix const declarations
  .replace(/const\s+([^=]+)=\s*React\.lazy\(\(\)\s*=>\s*import\("([^"]+)"\)\s*"\s*$/gm, 'const $1 = React.lazy(() => import("$2"));')
  .replace(/const\s+([^=]+)=\s*React\.lazy\(\(\)\s*=>\s*import\("([^"]+)"\)\s*"\s*;/g, 'const $1 = React.lazy(() => import("$2"));')
  
  // Remove extra quotes and semicolons
  .replace(/;\s*"/g, ';')
  .replace(/,\s*"/g, ',')
  .replace(/\)\s*"/g, ')')
  .replace(/}\s*"/g, '}')
  .replace(/]\s*"/g, ']')
  .replace(/>\s*"/g, '>')
  
  // Fix JSX structure
  .replace(/<div className="([^"]*?)"\s*>\s*<\/div>\s*"/g, '<div className="$1"></div>')
  .replace(/<\/div>\s*"/g, '</div>')
  .replace(/<\/h[1-6]>\s*"/g, (match) => match.replace('"', ''))
  .replace(/<\/p>\s*"/g, '</p>')
  .replace(/<\/span>\s*"/g, '</span>')
  .replace(/<\/button>\s*"/g, '</button>')
  
  // Fix function declarations
  .replace(/const\s+([^=]+)=\s*\(\)\s*=>\s*\(\s*"/g, 'const $1 = () => (')
  .replace(/export\s+default\s+([^;]+);\s*"/g, 'export default $1;')
  
  // Fix return statements
  .replace(/return\s*\(\s*"/g, 'return (')
  .replace(/return\s*\(\s*<([^>]+)>\s*"/g, 'return (<$1>')
  
  // Remove extra quotes at the end of lines
  .replace(/\s*"\s*\n/g, '\n')
  .replace(/\s*"\s*$/g, '')
  
  // Fix JSX fragments
  .replace(/<>\s*"/g, '<>')
  .replace(/<\/>\s*"/g, '</>')
  
  // Fix Helmet tags
  .replace(/<Helmet>\s*<\/Helmet>\s*"/g, '<Helmet></Helmet>')
  .replace(/<title>([^<]+)<\/title>\s*"/g, '<title>$1</title>')
  .replace(/<meta\s+([^>]+)\s*\/>\s*"/g, '<meta $1 />')
  
  // Remove trailing quotes and semicolons
  .replace(/\s*"\s*;\s*$/gm, '')
  .replace(/\s*"\s*$/gm, '');

// Write the fixed content back
fs.writeFileSync('App.tsx', fixed, 'utf8');
console.log('Fixed App.tsx');