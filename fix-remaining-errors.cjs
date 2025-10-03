#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Find all .tsx files in src/pages/blog
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Comprehensive fixes for remaining JSX syntax errors
function fixJsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Move import statements to the top
    const importMatches = content.match(/^\s*import\s+.*?from\s+['"][^'"]*['"];?\s*$/gm);
    if (importMatches) {
      // Remove import statements from anywhere in the file
      content = content.replace(/^\s*import\s+.*?from\s+['"][^'"]*['"];?\s*$/gm, '');
      
      // Add imports at the top
      const existingImports = content.match(/^import\s+.*?from\s+['"][^'"]*['"];?\s*$/gm) || [];
      const allImports = [...new Set([...existingImports, ...importMatches])];
      
      if (allImports.length > 0) {
        content = allImports.join('\n') + '\n\n' + content.replace(/^\s*import\s+.*?from\s+['"][^'"]*['"];?\s*$/gm, '').trim();
        modified = true;
      }
    }

    // Fix 2: Fix malformed JSX attributes
    const fixes = [
      // Fix className attribute syntax: className ="value" -> className="value"
      [/className\s*=\s*"([^"]*)"/g, 'className="$1"'],
      // Fix href attribute syntax: href ="value" -> href="value"
      [/href\s*=\s*"([^"]*)"/g, 'href="$1"'],
      // Fix rel attribute syntax: rel ="value" -> rel="value"
      [/rel\s*=\s*"([^"]*)"/g, 'rel="$1"'],
      // Fix name attribute syntax: name ="value" -> name="value"
      [/name\s*=\s*"([^"]*)"/g, 'name="$1"'],
      // Fix content attribute syntax: content="value" -> content="value"
      [/content\s*=\s*"([^"]*)"/g, 'content="$1"'],
      // Fix title attribute syntax: title ="value" -> title="value"
      [/title\s*=\s*"([^"]*)"/g, 'title="$1"'],
      
      // Fix 3: Fix unterminated string literals
      // Fix strings ending with ", instead of just "
      [/"([^"]*)"\s*,\s*$/gm, '"$1"'],
      // Fix strings ending with ", instead of just " in JSX
      [/"([^"]*)"\s*,\s*>/g, '"$1">'],
      [/"([^"]*)"\s*,\s*\/>/g, '"$1" />'],
      
      // Fix 4: Fix invalid characters
      [/‑/g, '-'],
      [/"/g, '"'],
      [/"/g, '"'],
      [/"/g, "'"],
      [/"/g, "'"],
      
      // Fix 5: Fix malformed JSX tags
      // Fix self-closing tags with extra commas
      [/<\s*(\w+)\s+([^>]*)\s*\/>\s*,\s*$/gm, '<$1 $2 />'],
      // Fix closing tags with extra commas
      [/<\s*\/\s*(\w+)\s*>\s*,\s*$/gm, '</$1>'],
      
      // Fix 6: Fix broken JSX structure
      // Fix JSX that's not properly wrapped in a function
      [/^(?!import|export)(?!function|const|let|var)(?!<div|<Helmet)/m, (match, offset, string) => {
        if (!string.includes('export default') && !string.includes('return (')) {
          return 'export default function Page() {\n  return (\n    <div>' + match;
        }
        return match;
      }],
      
      // Fix 7: Fix malformed meta tags
      [/<meta\s+name\s*=\s*"([^"]*)"\s*;\s*,\s*"/g, '<meta name="$1" '],
      [/<link\s+rel\s*=\s*"([^"]*)"\s*;\s*,\s*"/g, '<link rel="$1" '],
      
      // Fix 8: Fix broken Helmet structure
      [/<Helmet>\s*$/gm, '<Helmet>'],
      [/<\/Helmet>\s*$/gm, '</Helmet>'],
      
      // Fix 9: Fix broken paragraph content
      // Fix text content that's not properly wrapped in JSX
      [/^([^<][^<]*?)(?=<)/gm, (match) => {
        if (match.trim() && !match.includes('export') && !match.includes('import')) {
          return `<p>${match.trim()}</p>`;
        }
        return match;
      }],
      
      // Fix 10: Fix broken list items
      [/<li>([^<]*?)\s*,\s*,\s*<\/li>/g, '<li>$1</li>'],
      
      // Fix 11: Fix broken function structure
      [/^\s*([A-Za-z][^<]*?)(?=<)/gm, (match) => {
        if (match.trim() && !match.includes('export') && !match.includes('import') && !match.includes('function') && !match.includes('const') && !match.includes('return')) {
          return `          <p>${match.trim()}</p>`;
        }
        return match;
      }],
    ];

    for (const [pattern, replacement] of fixes) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    // Fix 12: Ensure proper function structure
    if (!content.includes('export default function') && !content.includes('export default const')) {
      if (content.includes('<Helmet>') || content.includes('<div>')) {
        content = `import React from 'react';\nimport { Helmet } from 'react-helmet';\n\nexport default function Page() {\n  return (\n    <>\n${content}\n    </>\n  );\n}`;
        modified = true;
      }
    }

    // Fix 13: Clean up extra commas and semicolons
    content = content.replace(/,\s*,\s*/g, ', ');
    content = content.replace(/;\s*;\s*/g, '; ');
    content = content.replace(/,\s*$/gm, '');
    content = content.replace(/;\s*$/gm, '');

    // Fix 14: Ensure proper closing
    if (content.includes('return (') && !content.includes(');')) {
      content += '\n  );\n}';
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main execution
const blogDir = path.join(__dirname, 'src', 'pages', 'blog');
if (!fs.existsSync(blogDir)) {
  console.log('Blog directory not found');
  process.exit(1);
}

const tsxFiles = findTsxFiles(blogDir);
console.log(`Found ${tsxFiles.length} TSX files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJsxFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);