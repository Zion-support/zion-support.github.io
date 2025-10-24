const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax errors
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX syntax issues
    const fixes = [
      // Fix missing opening braces in function declarations
      { pattern: /const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\}\s*\n\s*return\s*\(\)/g, replacement: 'const $1 = () => {\n  return (' },
      { pattern: /const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\}\s*\n\s*return\s*\(/g, replacement: 'const $1 = () => {\n  return (' },
      
      // Fix missing opening braces in arrow functions
      { pattern: /\(\s*\)\s*=>\s*\{\}\s*\n\s*return\s*\(\)/g, replacement: '() => {\n  return (' },
      { pattern: /\(\s*\)\s*=>\s*\{\}\s*\n\s*return\s*\(/g, replacement: '() => {\n  return (' },
      
      // Fix missing opening parentheses in return statements
      { pattern: /return\s*\(\)\s*\n/g, replacement: 'return (\n' },
      
      // Fix malformed JSX closing tags
      { pattern: /<\/div>\s*<\/div>\s*<\/div>/g, replacement: '</div>' },
      { pattern: /<\/div>\s*<\/div>/g, replacement: '</div>' },
      
      // Fix malformed JSX opening tags
      { pattern: /<div\s*className="[^"]*">\s*<\/div>\s*<\/div>/g, replacement: '<div className="$1">' },
      
      // Fix missing closing braces and parentheses
      { pattern: /return\s*\(\s*<[^>]*>\s*$/gm, replacement: 'return (\n    <div>' },
      
      // Fix malformed JSX expressions
      { pattern: /\{\s*\}\s*<\/div>/g, replacement: '</div>' },
      { pattern: /\{\s*\}\s*<\/span>/g, replacement: '</span>' },
      { pattern: /\{\s*\}\s*<\/p>/g, replacement: '</p>' },
      { pattern: /\{\s*\}\s*<\/h1>/g, replacement: '</h1>' },
      { pattern: /\{\s*\}\s*<\/h2>/g, replacement: '</h2>' },
      { pattern: /\{\s*\}\s*<\/h3>/g, replacement: '</h3>' },
      { pattern: /\{\s*\}\s*<\/button>/g, replacement: '</button>' },
      { pattern: /\{\s*\}\s*<\/a>/g, replacement: '</a>' },
      
      // Fix malformed JSX content
      { pattern: /<h1[^>]*>\s*<\/div>\s*<\/div>\s*([^<]+)\s*<\/h1>/g, replacement: '<h1$1>$2</h1>' },
      { pattern: /<h2[^>]*>\s*<\/div>\s*<\/div>\s*([^<]+)\s*<\/h2>/g, replacement: '<h2$1>$2</h2>' },
      { pattern: /<h3[^>]*>\s*<\/div>\s*<\/div>\s*([^<]+)\s*<\/h3>/g, replacement: '<h3$1>$2</h3>' },
      { pattern: /<p[^>]*>\s*<\/div>\s*<\/div>\s*([^<]+)\s*<\/p>/g, replacement: '<p$1>$2</p>' },
      
      // Fix malformed div structures
      { pattern: /<div[^>]*>\s*<\/div>\s*<\/div>\s*<div[^>]*>/g, replacement: '<div$1><div$2>' },
      
      // Fix missing semicolons
      { pattern: /(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\}\s*(?=\n\s*const|\n\s*export|\n\s*import|\n\s*function|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)/g, replacement: '$1 = ($2) => {\n  $3\n};' },
      
      // Fix missing commas in object literals
      { pattern: /(\w+):\s*([^,}]+)\s*(\w+):/g, replacement: '$,
  1: $2,\n  $3:' },
      
      // Fix missing semicolons in variable declarations
      { pattern: /const\s+(\w+)\s*=\s*[^;]+(?=\n\s*const|\n\s*export|\n\s*import|\n\s*function|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)/g, replacement: 'const $1 = $2;' },
      { pattern: /let\s+(\w+)\s*=\s*[^;]+(?=\n\s*const|\n\s*export|\n\s*import|\n\s*function|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)/g, replacement: 'let $1 = $2;' },
      { pattern: /var\s+(\w+)\s*=\s*[^;]+(?=\n\s*const|\n\s*export|\n\s*import|\n\s*function|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)/g, replacement: 'var $1 = $2;' },
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

// Function to recursively fix files
function fixAllJSXSyntax(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (file === 'node_modules' || file === '.git' || file === '.next') {
        continue;
      }
      fixedCount += fixAllJSXSyntax(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixJSXSyntax(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting JSX syntax fixes...');
const fixedCount = fixAllJSXSyntax('.');
console.log(`Fixed JSX syntax in ${fixedCount} files.`);