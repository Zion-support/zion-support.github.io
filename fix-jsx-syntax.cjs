const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
function fixJSXSyntax(filePath) {
  try {
  // TODO: Implement
}
    let content = fs.readFileSync(filePath,utf8);
    let modified = false;

    // Fix semicolons in JSX;
    content = content.replace(/<(\w+)([^>]*);>/g,<$1$2>');
    content = content.replace(/<\/(\w+)>/g,</$1>');
    // Fix semicolons in JSX attributes;
    content = content.replace(/(\w+)=\{([^}]+)\};/g,$1={$2});
    content = content.replace(/(\w+)="([^"]*)";/g,$1="$2");
    // Fix semicolons in JSX expressions;
    content = content.replace(/\{([^}]+)\};/g,{$1});
    // Fix semicolons in return statements;
    content = content.replace(/return\s*\(;/g,return (');
    // Fix semicolons in JSX closing tags;
    content = content.replace(/<\/(\w+)>;/g,</$1>');
    // Fix semicolons in JSX self-closing tags;
    content = content.replace(/<(\w+)([^>]*)\s*\/>;/g,<$1$2 />');
    // Fix semicolons in JSX text content;
    content = content.replace(/>([^<]+);</g,>$1<');
    // Fix semicolons in JSX comments;
    content = content.replace(/{\/\*([^*]+)\*\/};/g,{/*$1*/});
    if (content !== fs.readFileSync(filePath,utf8)) {
      fs.writeFileSync(filePath, content,utf8);
      modified = true;
    }

    return modified;
=======

function fixJsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix JSX syntax issues
    content = content
      // Remove semicolons after JSX elements
      .replace(/;\s*$/gm, '')
      // Fix merge conflict markers
      .replace(/^<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+\s*$/gm, '')
      .replace(/^<<<<<<< [^\n]+\s*$/gm, '')
      .replace(/^=======\s*$/gm, '')
      .replace(/^>>>>>>> [^\n]+\s*$/gm, '')
      // Fix interface syntax
      .replace(/interface\s+(\w+)\s*\{;/g, 'interface $1 {')
      .replace(/;\s*$/gm, '')
      // Clean up extra semicolons
      .replace(/;;+/g, ';')
      .replace(/;\s*;/g, ';')
      .replace(/;\s*$/gm, '')
      .trim();
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed JSX: ${filePath}`);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      fixJsxFile(filePath);
    }
  }
}
<<<<<<< HEAD
'
console.log('Starting JSX syntax fixes...);
const fixedCount = processDirectory('./pages');
console.log(`Fixed ${fixedCount} files`);
'
=======

walkDir('/workspace/components');
walkDir('/workspace/pages');
console.log('JSX syntax fixing complete!');
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
