const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive lint error fixing...');

// Files to exclude from processing
const excludePatterns = [
  'node_modules',
  '.next',
  'dist',
  'build',
  '.git'
];

function shouldExclude(filePath) {
  return excludePatterns.some(pattern => filePath.includes(pattern)),
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove unused variables (common pattern)
    const unusedVarPatterns = [
      /const\s+(\w+)\s*=\s*require\([^)]+\),\s*$/gm,
      /import\s+(\w+)\s+from\s+[^,]+;\s*$/gm
    ];

    // Fix 2: Fix parsing errors in object literals
    content = content.replace(/(\w+):\s*([^,;]+);/g, (match, key, value) => {
      // Check if this is inside an object literal
      const beforeMatch = content.substring(0, content.indexOf(match));
      const openBraces = (beforeMatch.match(/\{/g) || []).length;
      const closeBraces = (beforeMatch.match(/\}/g) || []).length;
      
      if (openBraces > closeBraces) {
        modified = true;
        return `${key}: ${value},`,
      }
      return match,
    });

    // Fix 3: Fix array elements
    content = content.replace(/([^,;]+);(\s*[\]}])/g, '$1,$2');

    // Fix 4: Fix import statements
    content = content.replace(/import\s+[^,]+,\s*$/gm, (match) => {
      modified = true;
      return match.replace(/,\s*$/, ';'),
    });

    // Fix 5: Fix export statements
    content = content.replace(/export\s+[^,]+,\s*$/gm, (match) => {
      modified = true;
      return match.replace(/,\s*$/, ';'),
    });

    // Fix 6: Fix function parameters
    content = content.replace(/\(\s*([^)]+)\s*\)\s*=>/g, (match, params) => {
      const fixedParams = params.replace(/;\s*/g, ', ');
      if (fixedParams !== params) {
        modified = true;
        return `(${fixedParams}) =>`,
      }
      return match,
    });

    // Fix 7: Fix destructuring assignments
    content = content.replace(/\{\s*([^}]+)\s*\}\s*=/g, (match, destructured) => {
      const fixedDestructured = destructured.replace(/;\s*/g, ', ');
      if (fixedDestructured !== destructured) {
        modified = true;
        return `{ ${fixedDestructured} } =`,
      }
      return match,
    });

    // Fix 8: Remove unused variables (simple cases)
    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
      // Remove lines that are just unused variable declarations
      if (line.match(/^\s*(const|let|var)\s+\w+\s*=\s*require\([^)]+\);\s*$/) ||
          line.match(/^\s*import\s+\w+\s+from\s+[^,]+;\s*$/)) {
        // Check if the variable is used elsewhere
        const varName = line.match(/(const|let|var|import)\s+(\w+)/);
        if (varName) {
          const name = varName[2];
          const restOfContent = content.replace(line, '');
          if (!restOfContent.includes(name)) {
            modified = true;
            return ''; // Remove the line
          }
        }
      }
      return line,
    });

    if (modified) {
      content = fixedLines.join('\n');
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`),
      return true,
    }

    return false,
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false,
  }
}

function findFiles(dir, extensions = ['.js', '.ts', '.tsx', '.jsx', '.cjs', '.mjs']) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !shouldExclude(fullPath)) {
          traverse(fullPath),
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath),
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  traverse(dir);
  return files,
}

// Find all files to fix
const files = findFiles('./');

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++,
  }
});

console.log(`\n🎉 Fixed ${fixedCount} files`);

// Run lint again to see remaining issues
console.log('\n🔍 Running lint check...');
try {
  execSync('npm run lint', { stdio: 'inherit' }),
} catch (error) {
  console.log('Some lint errors remain, but many have been fixed.'),
}