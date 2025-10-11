const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax issues
    const fixes = [
      // Fix JSX fragment issues
      {
        pattern: /<>([^<]*?)<\//g,
        replacement: '<div>$1</div>'
      },
      // Fix unclosed JSX elements
      {
        pattern: /<main([^>]*)>([^<]*?)(?=<section|<div|<h[1-6]|<p|<button)/g,
        replacement: '<main$1>$2'
      },
      // Fix missing closing tags
      {
        pattern: /<section([^>]*)>([^<]*?)(?=<\/main>)/g,
        replacement: '<section$1>$2</section>'
      },
      // Fix broken JSX expressions
      {
        pattern: /{([^}]*?)\s*}\s*{/g,
        replacement: '{$1} {'
      },
      // Fix missing semicolons in object properties
      {
        pattern: /(\w+):\s*([^,}]+)(?=\s*[,}])/g,
        replacement: '$1: $2'
      },
      // Fix broken import statements
      {
        pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;\s*import/g,
        replacement: 'import { $1 } from "$2";\nimport'
      },
      // Fix broken JSX attributes
      {
        pattern: /className\s*=\s*{([^}]+)}\s*([^>]*?)>/g,
        replacement: 'className={$1}$2>'
      },
      // Fix missing closing div tags
      {
        pattern: /<div([^>]*)>([^<]*?)(?=<\/main>)/g,
        replacement: '<div$1>$2</div>'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes
    // Fix broken object literals
    content = content.replace(/\{\s*([^}]*?)\s*,\s*([^}]*?)\s*,\s*([^}]*?)\s*\}/g, '{\n    $1,\n    $2,\n    $3\n  }');
    
    // Fix broken JSX expressions
    content = content.replace(/\{\s*([^}]*?)\s*\}\s*\{\s*([^}]*?)\s*\}/g, '{$1} {$2}');
    
    // Fix missing closing tags for common elements
    const commonElements = ['div', 'section', 'main', 'article', 'header', 'footer', 'nav'];
    for (const element of commonElements) {
      const openTag = new RegExp(`<${element}([^>]*)>`, 'g');
      const closeTag = new RegExp(`</${element}>`, 'g');
      const openMatches = content.match(openTag);
      const closeMatches = content.match(closeTag);
      
      if (openMatches && closeMatches && openMatches.length > closeMatches.length) {
        // Add missing closing tags
        const missingCount = openMatches.length - closeMatches.length;
        for (let i = 0; i < missingCount; i++) {
          content += `</${element}>`;
        }
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find all TypeScript/TSX files
const tsxFiles = findTsxFiles('./app');

console.log(`Found ${tsxFiles.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);