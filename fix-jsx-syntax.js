#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX syntax issues
    const fixes = [
      // Fix semicolons in JSX tags
      {
        pattern: /<(\w+);/g,
        replacement: '<$1'
      },
      // Fix semicolons in self-closing tags
      {
        pattern: /<(\w+)\s+([^>]*?);\s*\/>/g,
        replacement: '<$1 $2 />'
      },
      // Fix semicolons in closing tags
      {
        pattern: /<\/(\w+);/g,
        replacement: '</$1>'
      },
      // Fix malformed JSX fragments
      {
        pattern: /<>\s*<\/>/g,
        replacement: '<></>'
      },
      // Fix broken JSX structure
      {
        pattern: /<\/>\s*<div/g,
        replacement: '</>\n<div'
      },
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
      // Fix broken button tags
      {
        pattern: /<button;\s*([^>]*?)>/g,
        replacement: '<button $1>'
      },
      // Fix broken link tags
      {
        pattern: /<a;\s*([^>]*?)>/g,
        replacement: '<a $1>'
      },
      // Fix broken div tags
      {
        pattern: /<div;\s*([^>]*?)>/g,
        replacement: '<div $1>'
      },
      // Fix broken section tags
      {
        pattern: /<section;\s*([^>]*?)>/g,
        replacement: '<section $1>'
      },
      // Fix broken main tags
      {
        pattern: /<main;\s*([^>]*?)>/g,
        replacement: '<main $1>'
      },
      // Fix broken span tags
      {
        pattern: /<span;\s*([^>]*?)>/g,
        replacement: '<span $1>'
      },
      // Fix broken p tags
      {
        pattern: /<p;\s*([^>]*?)>/g,
        replacement: '<p $1>'
      },
      // Fix broken h1-h6 tags
      {
        pattern: /<(h[1-6]);\s*([^>]*?)>/g,
        replacement: '<$1 $2>'
      },
      // Fix broken ul/ol tags
      {
        pattern: /<(ul|ol);\s*([^>]*?)>/g,
        replacement: '<$1 $2>'
      },
      // Fix broken li tags
      {
        pattern: /<li;\s*([^>]*?)>/g,
        replacement: '<li $1>'
      },
      // Fix broken form tags
      {
        pattern: /<form;\s*([^>]*?)>/g,
        replacement: '<form $1>'
      },
      // Fix broken input tags
      {
        pattern: /<input;\s*([^>]*?)>/g,
        replacement: '<input $1 />'
      },
      // Fix broken textarea tags
      {
        pattern: /<textarea;\s*([^>]*?)>/g,
        replacement: '<textarea $1>'
      },
      // Fix broken select tags
      {
        pattern: /<select;\s*([^>]*?)>/g,
        replacement: '<select $1>'
      },
      // Fix broken option tags
      {
        pattern: /<option;\s*([^>]*?)>/g,
        replacement: '<option $1>'
      },
      // Fix broken label tags
      {
        pattern: /<label;\s*([^>]*?)>/g,
        replacement: '<label $1>'
      },
      // Fix broken img tags
      {
        pattern: /<img;\s*([^>]*?)>/g,
        replacement: '<img $1 />'
      },
      // Fix broken svg tags
      {
        pattern: /<svg;\s*([^>]*?)>/g,
        replacement: '<svg $1>'
      },
      // Fix broken path tags
      {
        pattern: /<path;\s*([^>]*?)>/g,
        replacement: '<path $1 />'
      },
      // Fix broken circle tags
      {
        pattern: /<circle;\s*([^>]*?)>/g,
        replacement: '<circle $1 />'
      },
      // Fix broken rect tags
      {
        pattern: /<rect;\s*([^>]*?)>/g,
        replacement: '<rect $1 />'
      },
      // Fix broken line tags
      {
        pattern: /<line;\s*([^>]*?)>/g,
        replacement: '<line $1 />'
      },
      // Fix broken polygon tags
      {
        pattern: /<polygon;\s*([^>]*?)>/g,
        replacement: '<polygon $1 />'
      },
      // Fix broken polyline tags
      {
        pattern: /<polyline;\s*([^>]*?)>/g,
        replacement: '<polyline $1 />'
      },
      // Fix broken ellipse tags
      {
        pattern: /<ellipse;\s*([^>]*?)>/g,
        replacement: '<ellipse $1 />'
      },
      // Fix broken g tags
      {
        pattern: /<g;\s*([^>]*?)>/g,
        replacement: '<g $1>'
      },
      // Fix broken defs tags
      {
        pattern: /<defs;\s*([^>]*?)>/g,
        replacement: '<defs $1>'
      },
      // Fix broken clipPath tags
      {
        pattern: /<clipPath;\s*([^>]*?)>/g,
        replacement: '<clipPath $1>'
      },
      // Fix broken mask tags
      {
        pattern: /<mask;\s*([^>]*?)>/g,
        replacement: '<mask $1>'
      },
      // Fix broken pattern tags
      {
        pattern: /<pattern;\s*([^>]*?)>/g,
        replacement: '<pattern $1>'
      },
      // Fix broken linearGradient tags
      {
        pattern: /<linearGradient;\s*([^>]*?)>/g,
        replacement: '<linearGradient $1>'
      },
      // Fix broken radialGradient tags
      {
        pattern: /<radialGradient;\s*([^>]*?)>/g,
        replacement: '<radialGradient $1>'
      },
      // Fix broken stop tags
      {
        pattern: /<stop;\s*([^>]*?)>/g,
        replacement: '<stop $1 />'
      },
      // Fix broken text tags
      {
        pattern: /<text;\s*([^>]*?)>/g,
        replacement: '<text $1>'
      },
      // Fix broken tspan tags
      {
        pattern: /<tspan;\s*([^>]*?)>/g,
        replacement: '<tspan $1>'
      },
      // Fix broken foreignObject tags
      {
        pattern: /<foreignObject;\s*([^>]*?)>/g,
        replacement: '<foreignObject $1>'
      },
      // Fix broken switch tags
      {
        pattern: /<switch;\s*([^>]*?)>/g,
        replacement: '<switch $1>'
      },
      // Fix broken use tags
      {
        pattern: /<use;\s*([^>]*?)>/g,
        replacement: '<use $1 />'
      },
      // Fix broken symbol tags
      {
        pattern: /<symbol;\s*([^>]*?)>/g,
        replacement: '<symbol $1>'
      },
      // Fix broken marker tags
      {
        pattern: /<marker;\s*([^>]*?)>/g,
        replacement: '<marker $1>'
      },
      // Fix broken viewBox attributes
      {
        pattern: /viewBox="([^"]*?)"/g,
        replacement: (match, viewBox) => {
          // Clean up viewBox values
          return `viewBox="${viewBox.trim()}"`;
        }
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
      console.log(`Fixed JSX syntax in: ${filePath}`);
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
console.log(`Checking ${files.length} React files for JSX syntax errors`);

let fixedCount = 0;
for (const file of files) {
  if (fixJSXSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX syntax in ${fixedCount} files`);