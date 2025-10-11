const fs = require('fs');
const path = require('path');

// List of files with syntax errors
const filesToFix = [
  '/workspace/app/ai-accounting-assistant/page.tsx',
  '/workspace/app/ai-agricultural-intelligence-pro/page.tsx',
  '/workspace/app/ai-analytics-dashboard/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all the incorrectly added semicolons
    content = content.replace(/;\s*$/gm, '');
    content = content.replace(/,\s*;\s*$/gm, ',');
    content = content.replace(/\[\s*;\s*$/gm, '[');
    content = content.replace(/\{\s*;\s*$/gm, '{');
    
    // Fix the main syntax error: ico, n: -> icon:
    content = content.replace(/ico,\s*n:/g, 'icon:');
    
    // Fix array and object syntax
    content = content.replace(/\[\s*$/gm, '[');
    content = content.replace(/\{\s*$/gm, '{');
    content = content.replace(/\}\s*\]/g, '}]');
    content = content.replace(/\}\s*\)/g, '})');
    content = content.replace(/\}\s*,/g, '},');
    
    // Fix JSX syntax errors
    content = content.replace(/<([^>]+)\s*$/gm, '<$1>');
    content = content.replace(/\s*>\s*$/gm, '>');
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*([^}]+)\s*$/gm, '{$1}');
    
    // Fix specific patterns that cause issues
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{/g, 'const $1 = () => {');
    content = content.replace(/return\s*\(\s*$/gm, 'return (');
    content = content.replace(/\s*\)\s*;\s*$/gm, ');');
    
    // Fix JSX closing tags
    content = content.replace(/<\/\s*$/gm, '</');
    content = content.replace(/<\s*$/gm, '<');
    
    // Fix missing closing parentheses and braces
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
    }
    if (openBraces > closeBraces) {
      content += '}'.repeat(openBraces - closeBraces);
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Syntax error fixing completed!');