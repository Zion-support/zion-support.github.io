const fs = require("fs");
const path = require("path")
//Function to fix common syntax errors
function fixSyntaxErrors(content) {;
const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix function names
    if (content.includes('export default function pagePage()')) {
      content = content.replace(/export default function pagePage\(\)/g, 'export default function Page()');
      modified = true;
    }

    // Fix JSX attribute semicolons
    content = content.replace(/className="([^"]*);\s*"/g, 'className="$1"');
    content = content.replace(/href="([^"]*);\s*"/g, 'href="$1"');
    content = content.replace(/src="([^"]*);\s*"/g, 'src="$1"');
    content = content.replace(/alt="([^"]*);\s*"/g, 'alt="$1"');

    // Fix JSX structure issues
    content = content.replace(/<div([^>]*)>\s*;\s*<h1/g, '<div$1>\n        <h1');
    content = content.replace(/<div([^>]*)>\s*;\s*<p/g, '<div$1>\n        <p');
    content = content.replace(/<div([^>]*)>\s*;\s*<Link/g, '<div$1>\n        <Link');

    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*{children}\s*<\/div>\s*<\/div>/g, '<div$1>{children}</div>');

    // Fix JSX expressions without proper structure
    content = content.replace(/return\s*\(\s*<>\s*{([^}]+)}\s*<\/>\s*\)/g, 'return (\n    <>\n      {$1}\n    </>\n  )');

    // Fix missing semicolons in exports
    content = content.replace(/export default (\w+)(?!;)$/gm, 'export default $1;');

    // Fix interface syntax
    content = content.replace(/interface\s+(\w+)\s*{\s*([^}]+)\s*}/g, (match, name, content) => {
      const fixedContent = content.replace(/(\w+):\s*([^;,\n]+)(?![,;])/g, '$1: $2;');
      return `interface ${name} {\n  ${fixedContent}\n}`;
    });

    // Fix type definitions
    content = content.replace(/(\w+):\s*([^;,\n]+)(?![,;])/g, '$1: $2;');

    // Fix missing React import
    if (content.includes('React.FC') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }

    // Fix JSX fragment issues
    content = content.replace(/<>\s*{([^}]+)}\s*$/gm, '<>\n      {$1}\n    </>');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

console.log('Starting comprehensive syntax fixes...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);
