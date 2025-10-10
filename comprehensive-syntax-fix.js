import fs from 'fs';
import path from 'path';

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix semicolons in JSX text content
    content = content.replace(/>([^<]+);</g, '>$1<');
    
    // Fix malformed JSX tags
    content = content.replace(/<(\w+);/g, '<$1');
    content = content.replace(/<(\w+)\s+([^>]*);/g, '<$1 $2');
    
    // Fix missing closing tags for common elements
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1>');
    content = content.replace(/<h1([^>]*)>\s*$/gm, '<h1$1>');
    content = content.replace(/<h2([^>]*)>\s*$/gm, '<h2$1>');
    content = content.replace(/<h3([^>]*)>\s*$/gm, '<h3$1>');
    content = content.replace(/<p([^>]*)>\s*$/gm, '<p$1>');
    content = content.replace(/<span([^>]*)>\s*$/gm, '<span$1>');
    content = content.replace(/<a([^>]*)>\s*$/gm, '<a$1>');
    
    // Fix malformed Suspense fallback
    content = content.replace(/<Suspense fallback={<div><\/Suspense>}>/g, '<Suspense fallback={<div>Loading...</div>}>');
    
    // Fix ternary operators in JSX
    content = content.replace(/\{\s*([^}]+);\s*\?/g, '{$1 ?');
    
    // Fix missing closing braces in objects
    content = content.replace(/(\w+):\s*([^,}]+)\)/g, '$1: $2');
    
    // Fix malformed function calls
    content = content.replace(/\(\s*\)\s*;/g, '();');
    
    // Fix missing semicolons in statements
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    
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

console.log('Starting comprehensive syntax fixes...');
const fixedCount = findAndFixFiles('./app');
console.log(`Fixed ${fixedCount} files with syntax errors.`);