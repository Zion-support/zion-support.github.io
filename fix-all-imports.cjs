const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files that import GlobalErrorBoundary
const files = glob.sync('app/**/*.tsx', { cwd: '/workspace' });

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Calculate the correct relative path based on file depth
  const depth = file.split('/').length - 2; // -2 for 'app/' and filename
  let correctPath = '../'.repeat(depth) + 'components/GlobalErrorBoundary';

  // Fix different import patterns
  const patterns = [
    // Pattern 1: Any relative path to GlobalErrorBoundary
    {
      regex: /import\s+ErrorBoundary\s+from\s+['"][^'"]*GlobalErrorBoundary['"];?/g,
      replacement: `import ErrorBoundary from '${correctPath}';`
    }
  ];

  patterns.forEach(pattern => {
    if (pattern.regex.test(content)) {
      content = content.replace(pattern.regex, pattern.replacement);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed: ${file} -> ${correctPath}`);
  }
});

console.log(`\nFixed ${fixedCount} files with GlobalErrorBoundary import issues.`);