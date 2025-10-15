import fs from 'fs';
import path from 'path';

function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix JSX fragment errors - add missing closing tags
    content = content.replace(/<>\s*<(\w+)>\s*<\/\1>\s*$/gm, '<>\n      <$1>\n        Content\n      </$1>\n    </>');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<(\w+)>\s*([^<]*?)\s*$/gm, '<>\n      <$1>\n        $2\n      </$1>\n    </>');
    
    // Fix JSX expressions with multiple parent elements
    content = content.replace(/<>\s*<(\w+)>\s*<\/\1>\s*<(\w+)>\s*<\/\2>\s*$/gm, '<>\n      <$1>\n        Content\n      </$1>\n      <$2>\n        Content\n      </$2>\n    </>');
    
    // Fix missing closing tags for JSX fragments
    content = content.replace(/<>\s*<(\w+)>\s*([^<]*?)\s*$/gm, '<>\n      <$1>\n        $2\n      </$1>\n    </>');
    
    // Fix malformed function declarations
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*};"\s*;/g, 'const $1: React.FC = () => {\n  return (\n    <div>Component content</div>\n  );\n};');
    
    // Fix missing return statements
    content = content.replace(/export default function (\w+)\(\)\s*{\s*}\s*return\s*\(/g, 'export default function $1() {\n  return (');
    
    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*?)\s*$/gm, 'className="$1"');
    
    // Fix missing closing braces
    content = content.replace(/}\s*;\s*$/gm, '}');
    
    // Fix array syntax issues
    content = content.replace(/\[\s*";"\s*([^;]+);"\s*\]/g, '[\n    $1\n  ]');
    
    // Fix object syntax issues
    content = content.replace(/\{\s*";"\s*([^;]+);"\s*\}/g, '{\n    $1\n  }');
    
    // Fix specific JSX fragment patterns
    content = content.replace(/<>\s*<(\w+)>\s*<\/\1>\s*<(\w+)>\s*<\/\2>\s*$/gm, '<>\n      <$1>\n        Content\n      </$1>\n      <$2>\n        Content\n      </$2>\n    </>');
    
    // Fix missing React import
    if ((content.includes('React.FC') || content.includes('<') && content.includes('>')) && !content.includes('import React')) {
      content = 'import React from \'react\';\n' + content;
    }
    
    // Fix specific patterns that cause parsing errors
    content = content.replace(/<(\w+)\s*([^>]*?)\s*>\s*$/gm, '<$1 $2>\n        Content\n      </$1>');
    
    // Fix malformed closing tags
    content = content.replace(/<\/(\w+)";"\s*>/g, '</$1>');
    
    // Fix missing closing tags for specific elements
    content = content.replace(/<Suspense>\s*$/gm, '<Suspense>\n        <div>Loading...</div>\n      </Suspense>');
    
    // Fix JSX expressions that need parent elements
    content = content.replace(/<>\s*<(\w+)>\s*<\/\1>\s*<(\w+)>\s*<\/\2>\s*$/gm, '<>\n      <$1>\n        Content\n      </$1>\n      <$2>\n        Content\n      </$2>\n    </>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixJSXErrors(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting JSX error fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed JSX errors in ${fixedCount} files.`);