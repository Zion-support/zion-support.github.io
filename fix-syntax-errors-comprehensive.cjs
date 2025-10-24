const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
  // Fix semicolon issues in object properties
  { pattern: /(\w+):\s*([^,}]+);\s*,/g, replacement: '$1: $2,' },
  // Fix missing semicolons after statements
  { pattern: /(\w+)\s*}\s*$/gm, replacement: '$1;\n}' },
  // Fix JSX closing tag issues
  { pattern: /<(\w+)><\/\1>/g, replacement: '<$1></$1>' },
  // Fix missing closing tags
  { pattern: /<div([^>]*)><\/div>\s*<div/g, replacement: '<div$1><div' },
  // Fix merge conflict markers
  { pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, replacement: '' },
  // Fix malformed JSX
  { pattern: /<(\w+);/g, replacement: '<$1' },
  { pattern: /<\/\1>;/g, replacement: '</$1>' },
  // Fix object syntax
  { pattern: /{\s*(\w+):\s*([^,}]+);\s*}/g, replacement: '{\n  $1: $2\n}' },
  // Fix function syntax
  { pattern: /(\w+)\s*{\s*$/gm, replacement: '$1 {\n' },
  // Fix array syntax
  { pattern: /\[\s*(\w+);\s*\]/g, replacement: '[$1]' },
  // Fix string literal issues
  { pattern: /"([^"]*)"\s*;\s*$/gm, replacement: '"$1";' },
  // Fix TypeScript interface syntax
  { pattern: /interface\s+(\w+)\s*{\s*;\s*/g, replacement: 'interface $1 {\n' },
  // Fix React component syntax
  { pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, replacement: 'const $1: React.FC = () => {\n' },
  // Fix JSX fragment issues
  { pattern: /<>\s*<\/>/g, replacement: '<></>' },
  // Fix className issues
  { pattern: /className="([^"]*);"/g, replacement: 'className="$1"' },
  // Fix missing commas in arrays
  { pattern: /(\w+)\s*\]/g, replacement: '$1]' },
  // Fix missing commas in objects
  { pattern: /(\w+)\s*}/g, replacement: '$1}' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes
    // Fix missing closing div tags
    const openDivs = (content.match(/<div/g) || []).length;
    const closeDivs = (content.match(/<\/div>/g) || []).length;
    if (openDivs > closeDivs) {
      const missingDivs = openDivs - closeDivs;
      content += '</div>'.repeat(missingDivs);
    }
    
    // Fix missing closing tags for other elements
    const elements = ['section', 'article', 'main', 'header', 'footer', 'nav', 'aside'];
    elements.forEach(tag => {
      const openTags = (content.match(new RegExp(`<${tag}`, 'g')) || []).length;
      const closeTags = (content.match(new RegExp(`</${tag}>`, 'g')) || []).length;
      if (openTags > closeTags) {
        const missingTags = openTags - closeTags;
        content += `</${tag}>`.repeat(missingTags);
      }
    });
    
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

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting comprehensive syntax fix...');
const fixedCount = walkDirectory('/workspace/app');
console.log(`Fixed ${fixedCount} files`);