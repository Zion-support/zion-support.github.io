const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed object syntax
    content = content.replace(/\{\s*;\s*\}/g, '{}');
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix missing colons in object properties
    content = content.replace(/(\w+)\s+(\w+)/g, (match, key, value) => {
      if (key === 'icon' || key === 'title' || key === 'description' || key === 'benefits') {
        return `${key}: ${value}`;
      }
      return match;
    });
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix malformed array syntax
    content = content.replace(/\[\s*;\s*\]/g, '[]');
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix missing commas between objects in arrays
    content = content.replace(/\}\s*\{/g, '},\n    {');
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix missing commas after object properties
    content = content.replace(/(\w+:\s*[^,}]+)\s*(\w+:\s*[^,}]+)/g, '$1,\n      $2');
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix malformed function declarations
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*\{\s*\}/g, 'const $1: React.FC = () => {\n  return null;\n}');
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix missing return statements
    if (content.includes('const') && content.includes('React.FC') && !content.includes('return')) {
      content = content.replace(/(const\s+\w+:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{[^}]*)\}/g, '$1\n  return null;\n}');
      modified = true;
    }
    
    // Fix malformed JSX
    content = content.replace(/<(\w+)([^>]*)>\s*$/gm, '<$1$2></$1>');
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, (match) => {
      if (match.includes('const') || match.includes('let') || match.includes('var')) {
        return match + ';';
      }
      return match;
    });
    if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;
    
    if (modified) {
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

// Find all TSX files in the app directory
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

console.log(`Found ${files.length} TSX files to check...`);

let fixedCount = 0;
files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fixFile(fullPath)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);