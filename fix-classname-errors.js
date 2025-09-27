import fs from 'fs';
import path from 'path';

// Fix className spacing issues
const fixes = [
  { pattern: /rounded-mdhover:/g, replacement: 'rounded-md hover:' },
  { pattern: /items-centerspace-/g, replacement: 'items-center space-' },
  { pattern: /font-mediumtext-/g, replacement: 'font-medium text-' },
  { pattern: /text-smopacity-/g, replacement: 'text-sm opacity-' },
  { pattern: /text-2xlfont-/g, replacement: 'text-2xl font-' },
  { pattern: /w-5h-5/g, replacement: 'w-5 h-5' },
  { pattern: /p-4text-/g, replacement: 'p-4 text-' },
  { pattern: /justify-betweenmb-/g, replacement: 'justify-between mb-' },
  { pattern: /gap-6mb-/g, replacement: 'gap-6 mb-' },
  { pattern: /grid-cols-1 md: grid-cols-2/g, replacement: 'grid-cols-1 md:grid-cols-2' },
  { pattern: /grid-cols-2 l, g:grid-cols-4/g, replacement: 'grid-cols-2 lg:grid-cols-4' },
  { pattern: /bg-gradient-to-r from-(\w+)-500 to-(\w+)-600 rounded-lg p-4text-/g, replacement: 'bg-gradient-to-r from-$1-500 to-$2-600 rounded-lg p-4 text-' },
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

console.log('Starting className error fixes...');
const fixedCount = walkDir('./src');
console.log(`Fixed ${fixedCount} files`);