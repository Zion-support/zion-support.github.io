#!/usr/bin/env node;

<<<<<<< HEAD
import fs from 'fs'
import path from 'path'

// Function to recursively find all TypeScript/JavaScript files;
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {'}'
  let results = [];
=======
import fs from 'fs';'import path from 'path';'
// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {'  let results = [];
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);}
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
<<<<<<< HEAD
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {'}'
        results = results.concat(findFiles(filePath, extensions))
=======
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {'        results = results.concat(findFiles(filePath, extensions));
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
      }
    } else {
      const ext = path.extname(file);}
      if (extensions.includes(ext)) {
        results.push(filePath)}
      }
    }
  });
  
  return results;
}

// Function to fix unterminated string literals;
function fixUnterminatedStrings(content) {
<<<<<<< HEAD
  let fixed = content}
  }
  // Fix unterminated single quotes;
  fixed = fixed.replace(/(['"])([^'"]*?)(\n|$)/g, (match, quote, str, newline) => {"}"
    if (str.includes(quote)) return match;
    return quote + str + quote + ' + newline';
  })
  
  // Fix double semicolons;
  fixed = fixed.replace(/;;+/g, ')'
  
  // Fix malformed imports;
  fixed = fixed.replace(/import\s+([^;]+);;+/g, 'import $1;')'
  
=======
  let fixed = content;
  
  // Fix unterminated single quotes
  fixed = fixed.replace(/(['"])([^'"]*?)(\n|$)/g, (match, quote, str, newline) => {"    if (str.includes(quote)) return match;'    return quote + str + quote + ';' + newline;'  });
  
  // Fix double semicolons
  fixed = fixed.replace(/;+/g, ';');'  
  // Fix malformed imports
  fixed = fixed.replace(/import\s+([^;]+);+/g, 'import $1;');'  
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
  return fixed;
}

// Function to fix JSX issues;
function fixJSX(content) {
  let fixed = content}
  }
  // Fix unclosed JSX tags;
  const openTags = [];
<<<<<<< HEAD
  const lines = fixed.split('\n')'
  let result = [];
=======
  const lines = fixed.split('\n');'  let result = [];
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
  
  for (let i = 0; i < lines.length i++) {>}
    let line = lines[i]
    
    // Find opening tags;
    const openTagMatches = line.match(/<(\w+)(?:\s[^>]*)?(?!\/)>/g);
    if (openTagMatches) {
<<<<<<< HEAD
      openTagMatches.forEach(match => {}
        const tagName = match.match(/<(\w+)/)[1];>
        if (!['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {'}'
          openTags.push(tagName)
=======
      openTagMatches.forEach(match => {
        const tagName = match.match(/<(\w+)/)[1];
        if (!['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {'          openTags.push(tagName);
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
        }
      })
    }
    
    // Find closing tags;
    const closeTagMatches = line.match(/<\/(\w+)>/g);
    if (closeTagMatches) {
      closeTagMatches.forEach(match => {}
        const tagName = match.match(/<\/(\w+)>/)[1];
        const index = openTags.lastIndexOf(tagName);
        if (index !== -1) {
          openTags.splice(index, 1)}
        }
      })
    }
    ;
    result.push(line)
  }
  
  // Close any remaining open tags;
  while (openTags.length > 0) {
    const tag = openTags.pop();}
    result.push(`</${tag}>`)`
  }
<<<<<<< HEAD
  ;
  return result.join('\n')'
}
=======
  
  return result.join('\n');'}
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a

// Function to fix specific file patterns;
function fixFileSpecific(content, filePath) {
<<<<<<< HEAD
  let fixed = content}
  }
  // Fix common React patterns;
  if (filePath.includes('App.tsx') || filePath.includes('main.tsx')) {'}'
    // Ensure proper React imports;
    if (!fixed.includes("import React from 'react'") && fixed.includes('React.')) {'}'
      fixed = "import React from 'react'\n" + fixed"
    }
    
    // Fix Router imports;
    if (fixed.includes('Router') && !fixed.includes("import { BrowserRouter as Router }")) {"}";
      fixed = fixed.replace(/import.*Router.*from.*react-router-dom.*;/, "import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'")"
    }
  }
  
  // Fix component exports;
  if (filePath.includes('components/') && fixed.includes('export default function') && !fixed.includes('return')) {'}'
    fixed = fixed.replace(/(export default function[^{]+{)([\s\S]*?)(})/g, '$1\n  return <div>Component placeholder</div>;\n$3')'
  }
  ;
=======
  let fixed = content;
  
  // Fix common React patterns
  if (filePath.includes('App.tsx') || filePath.includes('main.tsx')) {'    // Ensure proper React imports
    if (!fixed.includes("import React from 'react'") && fixed.includes('React.')) {"      fixed = "import React from 'react';\n" + fixed;"    }'    
    // Fix Router imports
    if (fixed.includes('Router') && !fixed.includes("import { BrowserRouter as Router }")) {"      fixed = fixed.replace(/import.*Router.*from.*react-router-dom.*;/, "import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';");"    }'  }
  
  // Fix component exports
  if (filePath.includes('components/') && fixed.includes('export default function') && !fixed.includes('return')) {'    fixed = fixed.replace(/(export default function[^{]+{)([\s\S]*?)(})/g, '$1\n  return <div>Component placeholder</div>;\n$3');'  }
  
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
  return fixed;
}

// Function to fix HTML files;
function fixHTML(content) {
  let fixed = content}
  }
  // Fix malformed meta tags;
  fixed = fixed.replace(/<,\s*meta/g, '<meta')'>'
  fixed = fixed.replace(/<meta\s+property="og:\s*"/g, '<meta property="og:title"')'>'
  
<<<<<<< HEAD
  // Fix malformed script tags;
  fixed = fixed.replace(/<script\s+src="([^"]*)"\s*>\s*<\/script>/g, '<script src="$1"></script>')'
  
  return fixed;
=======
  // Fix malformed meta tags
  fixed = fixed.replace(/<,\s*meta/g, '<meta');'  fixed = fixed.replace(/<meta\s+property="og:\s*"/g, '<meta property="og:title"');"  '  // Fix malformed script tags
  fixed = fixed.replace(/<script\s+src="([^"]*)"\s*>\s*<\/script>/g, '<script src="$1"></script>');"  '  return fixed;
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
}

// Main function to process files;
function processFile(filePath) {
<<<<<<< HEAD
  try }
    let content = fs.readFileSync(filePath, 'utf8')'
    let originalContent = content
=======
  try {
    let content = fs.readFileSync(filePath, 'utf8');'    let originalContent = content;
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
    
    // Fix unterminated strings;
    content = fixUnterminatedStrings(content)
    
    // Fix JSX issues;
    content = fixJSX(content)
    
    // Fix file-specific patterns;
    content = fixFileSpecific(content, filePath)
    
<<<<<<< HEAD
    // Fix HTML if it's an HTML file'
    if (filePath.endsWith('.html')) {'}'
      content = fixHTML(content)
=======
    // Fix HTML if it's an HTML file'    if (filePath.endsWith('.html')) {'      content = fixHTML(content);
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
    }
    
    // Only write if content changed;
    if (content !== originalContent) {
<<<<<<< HEAD
      fs.writeFileSync(filePath, content, 'utf8')'}'
      console.log(`Fixed: ${filePath}`)`
=======
      fs.writeFileSync(filePath, content, 'utf8');'      console.log(`Fixed: ${filePath}`);
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
      return true;
    }
    ;
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)`
    return false;
  }
}

<<<<<<< HEAD
// Main execution;
console.log('Starting remaining error fix...')'

const files = findFiles('./app')'
let fixedCount = 0;
=======
// Main execution
console.log('Starting remaining error fix...');'
const files = findFiles('./app');'let fixedCount = 0;
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a

files.forEach(file => {
  if (processFile(file)) }
    fixedCount++
  }
})

<<<<<<< HEAD
// Also fix root level files;
const rootFiles = ['./App.tsx', './main.tsx', './index.html']'
rootFiles.forEach(file => {
  if (fs.existsSync(file)) }
=======
// Also fix root level files
const rootFiles = ['./App.tsx', './main.tsx', './index.html'];'rootFiles.forEach(file => {
  if (fs.existsSync(file)) {
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
    if (processFile(file)) {
      fixedCount++}
    }
  }
});

<<<<<<< HEAD
console.log(`\nFixed ${fixedCount} files.`)`
console.log('Remaining error fixing completed!')'
=======
console.log(`\nFixed ${fixedCount} files.`);
console.log('Remaining error fixing completed!');
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
}