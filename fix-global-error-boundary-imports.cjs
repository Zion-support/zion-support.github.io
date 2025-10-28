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

  // Fix different import patterns
  const patterns = [
    // Pattern 1: '../../components/GlobalErrorBoundary'
    {
      regex: /import\s+ErrorBoundary\s+from\s+['"]\.\.\/\.\.\/components\/GlobalErrorBoundary['"];?/g,
      replacement: "import ErrorBoundary from '../../components/GlobalErrorBoundary';"
    },
    // Pattern 2: '../components/GlobalErrorBoundary'
    {
      regex: /import\s+ErrorBoundary\s+from\s+['"]\.\.\/components\/GlobalErrorBoundary['"];?/g,
      replacement: "import ErrorBoundary from '../../components/GlobalErrorBoundary';"
    },
    // Pattern 3: '../../../components/GlobalErrorBoundary'
    {
      regex: /import\s+ErrorBoundary\s+from\s+['"]\.\.\/\.\.\/\.\.\/components\/GlobalErrorBoundary['"];?/g,
      replacement: "import ErrorBoundary from '../../components/GlobalErrorBoundary';"
    },
    // Pattern 4: '../../components/GlobalErrorBoundary' (without semicolon)
    {
      regex: /import\s+ErrorBoundary\s+from\s+['"]\.\.\/\.\.\/components\/GlobalErrorBoundary['"];?/g,
      replacement: "import ErrorBoundary from '../../components/GlobalErrorBoundary';"
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
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFixed ${fixedCount} files with GlobalErrorBoundary import issues.`);