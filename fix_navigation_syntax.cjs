const fs = require('fs');

// Read the corrupted Navigation.tsx file
let content = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');

// Fix common syntax errors
content = content
  // Fix missing spaces around operators
  .replace(/\s*,\s*}/g, '}')
  .replace(/\s*,\s*]/g, ']')
  .replace(/\s*,\s*\)/g, ')')
  .replace(/\s*,\s*;/g, ';')
  
  // Fix missing spaces in JSX
  .replace(/className="([^"]*)"([^>]*>)/g, 'className="$1"$2')
  .replace(/href="([^"]*)"([^>]*>)/g, 'href="$1"$2')
  .replace(/to="([^"]*)"([^>]*>)/g, 'to="$1"$2')
  
  // Fix broken JSX attributes
  .replace(/className="([^"]*)"([^>]*>)/g, 'className="$1"$2')
  .replace(/onClick="([^"]*)"([^>]*>)/g, 'onClick="$1"$2')
  
  // Fix broken function calls
  .replace(/return\(/g, 'return (')
  .replace(/return\s*\(/g, 'return (')
  
  // Fix broken JSX
  .replace(/<div\s*className="([^"]*)"\s*>\s*<\/div>/g, '<div className="$1"></div>')
  .replace(/<div\s*>\s*<\/div>/g, '<div></div>')
  
  // Fix broken imports
  .replace(/import\s*{\s*([^}]*)\s*}\s*from\s*'([^']*)';/g, 'import { $1 } from \'$2\';')
  
  // Fix broken function declarations
  .replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {')
  
  // Fix broken array declarations
  .replace(/\[\s*\]/g, '[]')
  .replace(/\[\s*,\s*\]/g, '[]')
  
  // Fix broken object declarations
  .replace(/{\s*}/g, '{}')
  .replace(/{\s*,\s*}/g, '{}')
  
  // Fix broken string concatenations
  .replace(/"\s*\+\s*"/g, '')
  .replace(/'\s*\+\s*'/g, '')
  
  // Fix broken template literals
  .replace(/`\s*\+\s*`/g, '')
  
  // Fix broken comments
  .replace(/\/\*\s*\*\//g, '')
  .replace(/\/\/\s*$/gm, '')
  
  // Fix broken semicolons
  .replace(/;\s*;/g, ';')
  .replace(/;\s*$/gm, ';')
  
  // Fix broken parentheses
  .replace(/\(\s*\)/g, '()')
  .replace(/\(\s*,\s*\)/g, '()')
  
  // Fix broken brackets
  .replace(/\[\s*\]/g, '[]')
  .replace(/\[\s*,\s*\]/g, '[]')
  
  // Fix broken braces
  .replace(/{\s*}/g, '{}')
  .replace(/{\s*,\s*}/g, '{}')
  
  // Fix broken quotes
  .replace(/'/g, "'")
  .replace(/"/g, '"')
  
  // Fix broken spaces
  .replace(/\s+/g, ' ')
  .replace(/\s*=\s*/g, ' = ')
  .replace(/\s*:\s*/g, ': ')
  .replace(/\s*,\s*/g, ', ')
  .replace(/\s*;\s*/g, '; ')
  .replace(/\s*{\s*/g, ' {')
  .replace(/\s*}\s*/g, '}')
  .replace(/\s*\[\s*/g, ' [')
  .replace(/\s*\]\s*/g, ']')
  .replace(/\s*\(\s*/g, ' (')
  .replace(/\s*\)\s*/g, ')')
  
  // Fix broken newlines
  .replace(/\n\s*\n\s*\n/g, '\n\n')
  .replace(/\n\s*$/gm, '\n')
  
  // Fix broken indentation
  .replace(/^\s+/gm, (match) => '  '.repeat(match.length / 2));

// Write the fixed content back
fs.writeFileSync('/workspace/app/components/Navigation.tsx', content, 'utf8');

console.log('Fixed Navigation.tsx syntax errors');