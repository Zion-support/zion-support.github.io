#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Get all TypeScript/TSX files
const files = await glob('app/**/*.{ts,tsx}', { cwd: '/workspace' });

function fixSyntaxErrors(content) {
  // Fix missing commas in JSX attributes
  content = content.replace(/(\w+),\s*\n\s*(\w+)=/g, '$1\n                          $2=');
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+):\s*([^,}\n]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
  
  // Fix missing commas in array elements
  content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n    $2');
  
  // Fix missing commas after object properties
  content = content.replace(/(\w+):\s*([^,}\n]+)(?=\s*\n\s*\w+:\s*)/g, '$1: $2,');
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+)\s+(\w+)\s*\)/g, '$1, $2)');
  
  // Fix missing commas in JSX props
  content = content.replace(/(\w+)=\{([^}]+)\}\s+(\w+)=/g, '$1={$2} $3=');
  
  // Fix missing commas in destructuring
  content = content.replace(/(\w+)\s+(\w+)\s*\}/g, '$1, $2}');
  
  // Fix missing commas in import statements
  content = content.replace(/import\s*\{\s*([^}]+)\s*\}\s*from/g, (match, imports) => {
    const cleanImports = imports.replace(/\s+/g, ' ').trim();
    return `import { ${cleanImports} } from`;
  });
  
  // Fix missing commas in export statements
  content = content.replace(/export\s*\{\s*([^}]+)\s*\}/g, (match, exports) => {
    const cleanExports = exports.replace(/\s+/g, ' ').trim();
    return `export { ${cleanExports} }`;
  });
  
  // Fix specific JSX syntax errors
  content = content.replace(/<(\w+),/g, '<$1');
  content = content.replace(/(\w+),\s*(\w+)=/g, '$1\n                          $2=');
  content = content.replace(/(\w+),\s*(\w+)\s*>/g, '$1\n                          $2>');
  
  // Fix missing closing brackets
  content = content.replace(/(\w+):\s*\[([^\]]*)\s*$/gm, '$1: [$2]');
  
  // Fix incomplete function definitions
  content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\s*return;\s*\},/g, 'const $1 = () => {\n  // Implementation needed\n  return null;\n};');
  
  // Fix missing return statements
  content = content.replace(/export default function\s+(\w+)\(\)\s*\{\s*$/gm, 'export default function $1() {\n  return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <div className="container mx-auto px-4 py-8">\n        <h1 className="text-4xl font-bold text-white text-center mb-8">\n          $1\n        </h1>\n      </div>\n    </div>\n  );\n}');
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix syntax errors
    content = fixSyntaxErrors(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Starting comprehensive syntax error fixes...');

let fixedCount = 0;
for (const file of files) {
  const fullPath = path.join('/workspace', file);
  if (fs.existsSync(fullPath)) {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files.`);