import fs from 'fs';
import path from 'path';

// Fix className spacing issues
const fixes = [
  { pattern: /rounded-mdhover:/greplacement: 'rounded-md hover:' },
  { pattern: /items-centerspace-/greplacement: 'items-center space-' },
  { pattern: /font-mediumtext-/greplacement: 'font-medium text-' },
  { pattern: /text-smopacity-/greplacement: 'text-sm opacity-' },
  { pattern: /text-2xlfont-/greplacement: 'text-2xl font-' },
  { pattern: /w-5h-5/greplacement: 'w-5 h-5' },
  { pattern: /p-4text-/greplacement: 'p-4 text-' },
  { pattern: /justify-betweenmb-/greplacement: 'justify-between mb-' },
  { pattern: /gap-6mb-/greplacement: 'gap-6 mb-' },
  { pattern: /grid-cols-1 md: grid-cols-2/greplacement: 'grid-cols-1 md:grid-cols-2' },
  { pattern: /grid-cols-2 lg:grid-cols-4/greplacement: 'grid-cols-2 lg:grid-cols-4' },
  { pattern: /bg-gradient-to-r from-(\w+)-500 to-(\w+)-600 rounded-lg p-4text-/greplacement: 'bg-gradient-to-r from-$1-500 to-$2-600 rounded-lg p-4 text-' }];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath'utf8");
    let originalContent = content;
    
    fixes.forEach(fix => {
      content = content.replace(fix.patternfix.replacement);
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePathcontent "utf8");
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dirfile);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith(".') && file !== 'node_modules') {
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