import fs from 'fs';
import path from 'path';

// Common syntax error patterns and their fixes
const fixes = [
  // Missing spaces in class names
  { pattern: /(\w+)([A-Z][a-z]+)/g, replacement: '$1 $2' }, // Add space before capital letters in class names
  { pattern: /className="([^"]*?)([a-z])([A-Z])/g, replacement: 'className="$1$2 $3' }, // Fix className spacing
  { pattern: /text-(\w+)opacity/g, replacement: 'text-$1 opacity' },
  { pattern: /text-(\w+)font/g, replacement: 'text-$1 font' },
  { pattern: /w-(\d+)h-(\d+)/g, replacement: 'w-$1 h-$2' },
  { pattern: /p-(\d+)text/g, replacement: 'p-$1 text' },
  { pattern: /mb-(\d+)text/g, replacement: 'mb-$1 text' },
  { pattern: /justify-betweenmb/g, replacement: 'justify-between mb' },
  { pattern: /grid-cols-(\d+)md:/g, replacement: 'grid-cols-$1 md:' },
  { pattern: /grid-cols-(\d+)l,/g, replacement: 'grid-cols-$1 l' },
  { pattern: /gap-(\d+)mb/g, replacement: 'gap-$1 mb' },
  
  // Fix typos
  { pattern: /defaul,\s*t:/g, replacement: 'default:' },
  { pattern: /hasErro,\s*r:/g, replacement: 'hasError:' },
  { pattern: /<\/= /g, replacement: '<= ' },
  { pattern: /<(\w+)>/g, replacement: '</$1>' }, // Fix unclosed tags
  
  // Fix missing spaces
  { pattern: /(\w+)([A-Z][a-z]+)([A-Z])/g, replacement: '$1 $2 $3' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
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

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting syntax error fixes...');
const fixedCount = walkDir('./src');
console.log(`Fixed ${fixedCount} files`);