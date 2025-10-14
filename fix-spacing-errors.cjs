const fs = require('fs');
const path = require('path');

// Function to fix spacing issues in a file
function fixSpacingIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common spacing issues
    const fixes = [
      // Fix className spacing issues
      { pattern: /className="([^"]*[a-z])([A-Z][^"]*)"/g, replacement: 'className="$1 $2"' },
      // Fix variable names with spaces
      { pattern: /\b([a-z]+)\s+([A-Z][a-z]+)\b/g, replacement: '$1$2' },
      // Fix function names with spaces
      { pattern: /function\s+([a-z]+)\s+([A-Z][a-z]+)/g, replacement: 'function $1$2' },
      // Fix interface names with spaces
      { pattern: /interface\s+([a-z]+)\s+([A-Z][a-z]+)/g, replacement: 'interface $1$2' },
      // Fix import statements with spaces
      { pattern: /import\s+\{([^}]*[a-z])\s+([A-Z][a-z]+[^}]*)\}/g, replacement: 'import {$1$2}' },
      // Fix destructuring with spaces
      { pattern: /\{\s*([a-z]+)\s+([A-Z][a-z]+)\s*\}/g, replacement: '{$1$2}' },
      // Fix method calls with spaces
      { pattern: /\.([a-z]+)\s+([A-Z][a-z]+)\s*\(/g, replacement: '.$1$2(' },
      // Fix event listener calls
      { pattern: /add\s+Event\s+Listener/g, replacement: 'addEventListener' },
      { pattern: /remove\s+Event\s+Listener/g, replacement: 'removeEventListener' },
      // Fix React hooks
      { pattern: /use\s+Effect/g, replacement: 'useEffect' },
      { pattern: /use\s+State/g, replacement: 'useState' },
      { pattern: /use\s+Memo/g, replacement: 'useMemo' },
      { pattern: /use\s+Callback/g, replacement: 'useCallback' },
      // Fix JSX closing tags
      { pattern: /<\/([a-z]+)\s+([A-Z][a-z]+)>/g, replacement: '</$1$2>' },
      // Fix JSX opening tags
      { pattern: /<([a-z]+)\s+([A-Z][a-z]+)/g, replacement: '<$1$2' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed spacing issues in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TypeScript/JavaScript files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixSpacingIssues(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Start fixing from the app directory
console.log('Starting to fix spacing issues...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files with spacing issues.`);