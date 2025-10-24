const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix JSX attribute semicolons
    const originalContent = content;
    
    // Fix className attributes with semicolons
    content = content.replace(/className="([^"]*);\s*"/g, 'className="$1"');
    
    // Fix href attributes with semicolons
    content = content.replace(/href="([^"]*);\s*"/g, 'href="$1"');
    
    // Fix src attributes with semicolons
    content = content.replace(/src="([^"]*);\s*"/g, 'src="$1"');
    
    // Fix alt attributes with semicolons
    content = content.replace(/alt="([^"]*);\s*"/g, 'alt="$1"');
    
    // Fix JSX structure issues - remove semicolons after opening div tags
    content = content.replace(/<div([^>]*)>\s*;\s*<h1/g, '<div$1>\n        <h1');
    content = content.replace(/<div([^>]*)>\s*;\s*<p/g, '<div$1>\n        <p');
    content = content.replace(/<div([^>]*)>\s*;\s*<Link/g, '<div$1>\n        <Link');
    content = content.replace(/<div([^>]*)>\s*;\s*<button/g, '<div$1>\n        <button');
    content = content.replace(/<div([^>]*)>\s*;\s*<a/g, '<div$1>\n        <a');
    
    // Fix hover: classes with spaces
    content = content.replace(/hover:\s+([a-zA-Z-]+)/g, 'hover:$1');
    
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
    
    // Fix missing closing tags in JSX
    content = content.replace(/<div([^>]*)>\s*{([^}]+)}\s*<\/div>\s*<\/div>/g, '<div$1>{$2}</div>');
    
    if (content !== originalContent) {
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

console.log('Starting final syntax fixes...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);