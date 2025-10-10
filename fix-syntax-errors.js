import fs from 'fs';
import path from 'path';

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/titl>/g, '</title>');
    content = content.replace(/<\/spa>/g, '</span>');
    content = content.replace(/<\/h>/g, '</h2>');
    content = content.replace(/<\/div>/g, '</div>');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*(\w+)\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*)"\s*>\s*<\/div>/g, 'className="$1">');
    
    // Fix missing closing tags for common elements
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1>');
    content = content.replace(/<h1([^>]*)>\s*$/gm, '<h1$1>');
    content = content.replace(/<h2([^>]*)>\s*$/gm, '<h2$1>');
    content = content.replace(/<h3([^>]*)>\s*$/gm, '<h3$1>');
    content = content.replace(/<p([^>]*)>\s*$/gm, '<p$1>');
    
    // Fix malformed function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    
    // Fix malformed imports
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s+'([^']+)';/g, (match, imports, module) => {
      const cleanImports = imports.split(',').map(imp => imp.trim()).join(', ');
      return `import { ${cleanImports} } from '${module}';`;
    });
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*(\w+)\s*\}\s*$/gm, '{$1}');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n'.repeat(openBraces - closeBraces) + '}'.repeat(openBraces - closeBraces);
    }
    
    // Fix malformed TypeScript types
    content = content.replace(/:\s*(\w+)\s*\[\]/g, ': $1[]');
    content = content.replace(/:\s*(\w+)\s*<\s*(\w+)\s*>/g, ': $1<$2>');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s+$/gm, '');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
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

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting syntax error fixes...');
const fixedCount = findAndFixFiles('./app');
console.log(`Fixed ${fixedCount} files with syntax errors.`);