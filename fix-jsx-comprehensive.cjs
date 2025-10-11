const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix malformed object properties - more comprehensive
    content = content.replace(/ico,\s*n:/g, 'icon:');
    content = content.replace(/,\s*;/g, ',');
    content = content.replace(/{\s*;/g, '{');
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/;\s*,/g, ',');
    
    // Fix missing commas in object arrays
    content = content.replace(/}\s*$/gm, '},');
    content = content.replace(/]\s*$/gm, '],');
    
    // Fix the last item in arrays (remove trailing comma)
    content = content.replace(/,(\s*]\s*;)/g, '$1');
    content = content.replace(/,(\s*}\s*;)/g, '$1');
    
    // Fix malformed imports
    content = content.replace(/import\s*{\s*Helmet;\s*}\s*from\s*'react-helmet-async'/g, "import { Helmet } from 'react-helmet-async'");
    
    // Fix function declarations
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{const/g, 'const $1: React.FC = () => {\n  const');
    
    // Fix JSX structure issues
    content = content.replace(/<div\s+className="[^"]*"\s*$/gm, (match) => match + '>');
    content = content.replace(/<section\s+className="[^"]*"\s*$/gm, (match) => match + '>');
    content = content.replace(/<main\s+className="[^"]*"\s*$/gm, (match) => match + '>');
    content = content.replace(/<h[1-6]\s+className="[^"]*"\s*$/gm, (match) => match + '>');
    content = content.replace(/<p\s+className="[^"]*"\s*$/gm, (match) => match + '>');
    content = content.replace(/<ul\s+className="[^"]*"\s*$/gm, (match) => match + '>');
    content = content.replace(/<li\s+className="[^"]*"\s*$/gm, (match) => match + '>');
    
    // Fix self-closing tags
    content = content.replace(/<(\w+)\s+className="[^"]*"\s*$/gm, '<$1 className="$2">');
    
    // Fix malformed JSX structure
    content = content.replace(/<div\s+className="[^"]*"\s*<Helmet>/g, '<>\n      <Helmet>');
    content = content.replace(/<div\s+className="[^"]*"\s*<Navigation>/g, '<>\n      <Navigation>');
    
    // Fix missing closing tags
    content = content.replace(/<main\s+className="[^"]*"\s*$/gm, (match) => match + '>');
    content = content.replace(/<section\s+className="[^"]*"\s*$/gm, (match) => match + '>');
    
    // Fix array syntax issues
    content = content.replace(/}\s*,\s*$/gm, '},');
    content = content.replace(/]\s*,\s*$/gm, '],');
    
    // Fix the last item in arrays (remove trailing comma)
    content = content.replace(/,(\s*]\s*;)/g, '$1');
    content = content.replace(/,(\s*}\s*;)/g, '$1');
    
    // Fix specific patterns
    content = content.replace(/}\s*,\s*$/gm, '},');
    content = content.replace(/]\s*,\s*$/gm, '],');
    
    // Remove trailing commas from the last items
    content = content.replace(/,(\s*]\s*;)/g, '$1');
    content = content.replace(/,(\s*}\s*;)/g, '$1');
    
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

// Find all problematic files
const patterns = [
  'app/**/*.tsx',
  '*.tsx'
];

let fixedCount = 0;
patterns.forEach(pattern => {
  const files = glob.sync(pattern, { ignore: ['node_modules/**', 'dist/**', '.next/**'] });
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
});

console.log(`Fixed ${fixedCount} files`);