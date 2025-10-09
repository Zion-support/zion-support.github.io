#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Common patterns that cause parsing errors
const fixes = [
  // Fix commented-out JSX closing tags
  {
    pattern: /\/\/\s*>\s*\n\s*\/\/\s*([^<]+)\s*\n\s*<\/[^>]+>/g,
    replacement: '>\n        $1\n      </'
  },
  // Fix commented-out array elements
  {
    pattern: /\/\/\s*'([^']+)',?\s*\n/g,
    replacement: "            '$1',\n"
  },
  // Fix commented-out function calls
  {
    pattern: /\/\/\s*([a-zA-Z_$][a-zA-Z0-9_$]*\.[a-zA-Z_$][a-zA-Z0-9_$]*\([^)]*\))/g,
    replacement: '    $1'
  },
  // Fix commented-out JSX attributes
  {
    pattern: /\/\/\s*([a-zA-Z-]+)={([^}]+)}/g,
    replacement: '      $1={$2}'
  },
  // Fix commented-out return statements
  {
    pattern: /\/\/\s*return\s+([^;]+);/g,
    replacement: '    return $1;'
  },
  // Fix commented-out variable declarations
  {
    pattern: /\/\/\s*(const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,
    replacement: '  $1 $2 ='
  }
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

function getAllTsxFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Get all TypeScript/TSX files
const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');
const files = [];

if (fs.existsSync(srcDir)) {
  files.push(...getAllTsxFiles(srcDir));
}
if (fs.existsSync(appDir)) {
  files.push(...getAllTsxFiles(appDir));
}

console.log(`Found ${files.length} TypeScript files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);

// Run linter to check results
try {
  console.log('\nRunning linter to check results...');
  execSync('npm run lint', { stdio: 'pipe' });
  console.log('✅ All linting errors fixed!');
} catch (error) {
  console.log('⚠️  Some linting errors remain. Check output above.');
}