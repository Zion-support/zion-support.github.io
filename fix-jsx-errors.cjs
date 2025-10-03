#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

// Common fixes for JSX syntax errors
function fixJsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common JSX attribute syntax errors
    const fixes = [
      // Fix attribute syntax: name: "value" -> name="value"
      [/(\w+):\s*"([^"]*)"\s*,/g, '$1="$2"'],
      // Fix empty attributes: <p > -> <p>
      [/<\s*(\w+)\s+>/g, '<$1>'],
      // Fix malformed closing tags
      [/<\s*\/\s*(\w+)\s*>/g, '</$1>'],
      // Fix missing React import
      [/^(?!import React)/m, 'import React from \'react\';\n'],
      // Fix missing Helmet import
      [/<Helmet/g, 'import { Helmet } from \'react-helmet\';\n\n<Helmet'],
      // Fix invalid characters in JSX
      [/–/g, '-'],
      [/"/g, '"'],
      [/"/g, '"'],
      // Fix broken JSX structure - add proper wrapper
      [/^(?!import)(?!export default)/m, (match, offset, string) => {
        if (!string.includes('return (')) {
          return 'export default function Page() {\n  return (\n' + match;
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

    // Add proper closing if missing
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