const fs = require('fs');
const path = require('path');

// Common syntax error patterns to fix
const fixes = [
  // Fix semicolons after comments
  { pattern: /\/\/[^;]*;/g, replacement: (match) => match.replace(';', '') },
  // Fix interface declarations with semicolons
  { pattern: /interface\s+(\w+)\s*\{;/g, replacement: 'interface $1 {' },
  // Fix duplicate semicolons
  { pattern: /;;+/g, replacement: ';' },
  // Fix malformed JSX closing tags
  { pattern: /<\/?(\w+)>\s*>\s*$/gm, replacement: '</$1>' },
  // Fix missing spaces in function declarations
  { pattern: /const(\w+):/g, replacement: 'const $1:' },
  // Fix malformed arrow functions
  { pattern: /=\s*\(\s*\)\s*=>\s*{/g, replacement: ' = () => {' },
  // Fix missing spaces in object destructuring
  { pattern: /{(\w+),(\w+)}/g, replacement: '{ $1, $2 }' },
  // Fix malformed JSX attributes
  { pattern: /className\s*=\s*"([^"]*)"\s*([a-zA-Z])/g, replacement: 'className="$1" $2' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
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

function walkDir(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function walk(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walk(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  walk(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const srcDir = path.join(__dirname, 'src');

let fixedCount = 0;
let totalFiles = 0;

// Fix files in app directory
const appFiles = walkDir(appDir);
console.log(`Found ${appFiles.length} files in app directory`);

appFiles.forEach(file => {
  totalFiles++;
  if (fixFile(file)) {
    fixedCount++;
  }
});

// Fix files in src directory
const srcFiles = walkDir(srcDir);
console.log(`Found ${srcFiles.length} files in src directory`);

srcFiles.forEach(file => {
  totalFiles++;
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);