#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixAllJSX(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix all common JSX issues
    const fixes = [
      // Fix malformed closing tags followed by opening tags
      {
        pattern: /<\/div><section/g,
        replacement: '</div>\n<section'
      },
      {
        pattern: /<\/div><div/g,
        replacement: '</div>\n<div'
      },
      {
        pattern: /<\/section><div/g,
        replacement: '</section>\n<div'
      },
      {
        pattern: /<\/main><div/g,
        replacement: '</main>\n<div'
      },
      {
        pattern: /<\/header><div/g,
        replacement: '</header>\n<div'
      },
      {
        pattern: /<\/footer><div/g,
        replacement: '</footer>\n<div'
      },
      {
        pattern: /<\/nav><div/g,
        replacement: '</nav>\n<div'
      },
      {
        pattern: /<\/article><div/g,
        replacement: '</article>\n<div'
      },
      {
        pattern: /<\/aside><div/g,
        replacement: '</aside>\n<div'
      },
      // Fix malformed opening tags
      {
        pattern: /<section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">/g,
        replacement: '<section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">'
      },
      // Fix malformed closing tags
      {
        pattern: /<\/div><\/div>/g,
        replacement: '</div>\n</div>'
      },
      {
        pattern: /<\/section><\/div>/g,
        replacement: '</section>\n</div>'
      },
      {
        pattern: /<\/main><\/div>/g,
        replacement: '</main>\n</div>'
      },
      // Fix malformed JSX structure
      {
        pattern: /<div className="max-w-7xl mx-auto">\s*<\/div>/g,
        replacement: '<div className="max-w-7xl mx-auto">\n</div>'
      },
      // Fix malformed className attributes
      {
        pattern: /className="([^"]*?)\s+([^"]*?)"/g,
        replacement: 'className="$1 $2"'
      },
      // Fix malformed spacing in className
      {
        pattern: /className="([^"]*?)\s+:\s+([^"]*?)"/g,
        replacement: 'className="$1:$2"'
      },
      // Fix malformed closing tags with spaces
      {
        pattern: /<\/div>\s*<div/g,
        replacement: '</div>\n<div'
      },
      {
        pattern: /<\/section>\s*<div/g,
        replacement: '</section>\n<div'
      },
      {
        pattern: /<\/main>\s*<div/g,
        replacement: '</main>\n<div'
      },
      // Fix malformed opening tags with spaces
      {
        pattern: /<div\s+className/g,
        replacement: '<div className'
      },
      {
        pattern: /<section\s+className/g,
        replacement: '<section className'
      },
      {
        pattern: /<main\s+className/g,
        replacement: '<main className'
      },
      // Fix malformed closing tags
      {
        pattern: /<\/div>\s*<\/div>/g,
        replacement: '</div>\n</div>'
      },
      {
        pattern: /<\/section>\s*<\/div>/g,
        replacement: '</section>\n</div>'
      },
      {
        pattern: /<\/main>\s*<\/div>/g,
        replacement: '</main>\n</div>'
      },
      // Fix malformed JSX fragments
      {
        pattern: /<>\s*<\/>\s*<div/g,
        replacement: '<div'
      },
      {
        pattern: /<>\s*<div/g,
        replacement: '<div'
      },
      {
        pattern: /<>\s*<section/g,
        replacement: '<section'
      },
      {
        pattern: /<>\s*<main/g,
        replacement: '<main'
      },
      // Fix malformed closing fragments
      {
        pattern: /<\/div>\s*<\/>/g,
        replacement: '</div>'
      },
      {
        pattern: /<\/section>\s*<\/>/g,
        replacement: '</section>'
      },
      {
        pattern: /<\/main>\s*<\/>/g,
        replacement: '</main>'
      },
      // Fix malformed return statements
      {
        pattern: /return\s*\(\s*<>\s*<\/>\s*<div/g,
        replacement: 'return (\n<div'
      },
      {
        pattern: /return\s*\(\s*<div/g,
        replacement: 'return (\n<div'
      },
      {
        pattern: /return\s*\(\s*<section/g,
        replacement: 'return (\n<section'
      },
      {
        pattern: /return\s*\(\s*<main/g,
        replacement: 'return (\n<main'
      },
      // Fix malformed closing return statements
      {
        pattern: /<\/div>\s*\)\s*$/gm,
        replacement: '</div>\n)'
      },
      {
        pattern: /<\/section>\s*\)\s*$/gm,
        replacement: '</section>\n)'
      },
      {
        pattern: /<\/main>\s*\)\s*$/gm,
        replacement: '</main>\n)'
      },
      // Fix malformed function declarations
      {
        pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*\(\s*<>\s*<\/>\s*<div/g,
        replacement: 'const $1: React.FC = () => {\n  return (\n    <div'
      },
      // Fix malformed component declarations
      {
        pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*\(\s*<div/g,
        replacement: 'const $1: React.FC = () => {\n  return (\n    <div'
      },
      // Fix malformed export statements
      {
        pattern: /export\s+default\s+(\w+)\s*$/gm,
        replacement: 'export default $1'
      },
      // Fix malformed import statements
      {
        pattern: /import\s+React\s*,\s*{\s*([^}]*?)\s*}\s*from\s*'react'/g,
        replacement: 'import React, { $1 } from \'react\''
      },
      // Fix malformed JSX comments
      {
        pattern: /{\/\*\s*([^*]*?)\s*\*\/}/g,
        replacement: '{/* $1 */}'
      },
      // Fix malformed JSX expressions
      {
        pattern: /\{\s*([^}]*?)\s*\}/g,
        replacement: '{$1}'
      },
      // Fix malformed JSX attributes
      {
        pattern: /(\w+)=\{([^}]*?)\}/g,
        replacement: '$1={$2}'
      },
      // Fix malformed JSX strings
      {
        pattern: /(\w+)="([^"]*?)"/g,
        replacement: '$1="$2"'
      },
      // Fix malformed JSX boolean attributes
      {
        pattern: /(\w+)=\{true\}/g,
        replacement: '$1'
      },
      {
        pattern: /(\w+)=\{false\}/g,
        replacement: ''
      },
      // Fix malformed JSX conditional rendering
      {
        pattern: /\{\s*([^}]*?)\s*&&\s*<([^>]*?)>\s*([^<]*?)\s*<\/\2>\s*\}/g,
        replacement: '{$1 && <$2>$3</$2>}'
      },
      // Fix malformed JSX ternary operators
      {
        pattern: /\{\s*([^?]*?)\s*\?\s*<([^>]*?)>\s*([^<]*?)\s*<\/\2>\s*:\s*<([^>]*?)>\s*([^<]*?)\s*<\/\4>\s*\}/g,
        replacement: '{$1 ? <$2>$3</$2> : <$4>$5</$4>}'
      },
      // Fix malformed JSX map functions
      {
        pattern: /\{\s*([^}]*?)\.map\s*\(\s*\(\s*([^,]*?),\s*([^)]*?)\s*\)\s*=>\s*<([^>]*?)>\s*([^<]*?)\s*<\/\4>\s*\)\s*\}/g,
        replacement: '{$1.map(($2, $3) => <$4 key={$3}>$5</$4>)}'
      },
      // Fix malformed JSX keys
      {
        pattern: /<([^>]*?)\s+key=\{[^}]*?\}\s*>/g,
        replacement: '<$1 key={$2}>'
      },
      // Fix malformed JSX refs
      {
        pattern: /<([^>]*?)\s+ref=\{[^}]*?\}\s*>/g,
        replacement: '<$1 ref={$2}>'
      },
      // Fix malformed JSX event handlers
      {
        pattern: /<([^>]*?)\s+onClick=\{[^}]*?\}\s*>/g,
        replacement: '<$1 onClick={$2}>'
      },
      {
        pattern: /<([^>]*?)\s+onChange=\{[^}]*?\}\s*>/g,
        replacement: '<$1 onChange={$2}>'
      },
      {
        pattern: /<([^>]*?)\s+onSubmit=\{[^}]*?\}\s*>/g,
        replacement: '<$1 onSubmit={$2}>'
      },
      // Fix malformed JSX form elements
      {
        pattern: /<input\s+([^>]*?)\s*\/>/g,
        replacement: '<input $1 />'
      },
      {
        pattern: /<img\s+([^>]*?)\s*\/>/g,
        replacement: '<img $1 />'
      },
      {
        pattern: /<br\s*\/>/g,
        replacement: '<br />'
      },
      {
        pattern: /<hr\s*\/>/g,
        replacement: '<hr />'
      },
      // Fix malformed JSX closing tags
      {
        pattern: /<\/div>\s*<\/div>\s*<\/div>/g,
        replacement: '</div>\n</div>\n</div>'
      },
      {
        pattern: /<\/section>\s*<\/div>\s*<\/div>/g,
        replacement: '</section>\n</div>\n</div>'
      },
      {
        pattern: /<\/main>\s*<\/div>\s*<\/div>/g,
        replacement: '</main>\n</div>\n</div>'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX issues in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findReactFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx|jsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const files = findReactFiles('.');
console.log(`Checking ${files.length} React files for JSX issues`);

let fixedCount = 0;
for (const file of files) {
  if (fixAllJSX(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX issues in ${fixedCount} files`);