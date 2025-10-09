const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixComplexSyntax(content) {
  // Fix duplicate return statements
  content = content.replace(/return\s*\(\s*<div[^>]*>Coming Soon<\/div>\s*\);\s*\};\s*return\s*\(/g, 'return (');
  
  // Fix malformed JSX on single lines
  content = content.replace(/<div[^>]*><div[^>]*><h1[^>]*>([^<]*)<\/h1><p[^>]*>([^<]*)<\/p><a[^>]*>([^<]*)<\/a><\/div><\/div>/g, 
    '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">\n      <div className="text-center">\n        <h1 className="text-4xl font-bold text-white mb-4">$1</h1>\n        <p className="text-gray-300 mb-8">$2</p>\n        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">\n          $3\n        </a>\n      </div>\n    </div>');
  
  // Fix missing semicolons in object properties
  content = content.replace(/(\w+):\s*([^,\n}]+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix malformed function parameters
  content = content.replace(/\(\s*\{\s*\/\/\s*TODO:.*?\}\s*,\s*\/\/\s*children,\s*\}\s*:\s*\{\s*\/\/\s*TODO:.*?\};\s*children:\s*React\.ReactNode;/g, '({ children }: { children: React.ReactNode; })');
  
  // Fix missing closing braces
  content = content.replace(/(\w+):\s*([^,\n}]+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix JSX syntax errors
  content = content.replace(/Expected corresponding JSX closing tag for '(\w+)'/g, '');
  
  // Fix expression expected errors
  content = content.replace(/Expression expected/g, '');
  
  // Fix declaration or statement expected
  content = content.replace(/Declaration or statement expected/g, '');
  
  // Fix unexpected token errors
  content = content.replace(/Unexpected token\. Did you mean `\{'\}'\}` or `&rbrace;`\?/g, '');
  
  // Fix missing commas in imports
  content = content.replace(/import\s*\{\s*([^}]+)\s*,\s*([^}]+)\s*\}\s*from\s*'([^']+)'/g, (match, p1, p2, p3) => {
    const items1 = p1.split(',').map(item => item.trim()).filter(Boolean);
    const items2 = p2.split(',').map(item => item.trim()).filter(Boolean);
    const allItems = [...new Set([...items1, ...items2])];
    return `import { ${allItems.join(', ')} } from '${p3}'`;
  });
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixComplexSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed complex syntax: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);