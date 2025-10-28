const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files that might have ErrorBoundary usage
const files = glob.sync('app/**/*.tsx', { cwd: '/workspace' });

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Check if ErrorBoundary is used but not imported
  if (content.includes('<ErrorBoundary') && !content.includes('import ErrorBoundary')) {
    // Calculate the correct relative path based on file depth
    const depth = file.split('/').length - 2; // -2 for 'app/' and filename
    let correctPath = '../'.repeat(depth) + 'components/GlobalErrorBoundary';
    
    // Add the import after the first import statement
    const firstImportIndex = content.indexOf('import');
    if (firstImportIndex !== -1) {
      const nextLineIndex = content.indexOf('\n', firstImportIndex);
      content = content.slice(0, nextLineIndex) + '\nimport ErrorBoundary from \'' + correctPath + '\';' + content.slice(nextLineIndex);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFixed ${fixedCount} files with missing ErrorBoundary import issues.`);