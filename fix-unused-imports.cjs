const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files that might have unused imports
const files = glob.sync('app/**/*.tsx', { cwd: '/workspace' });

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused React imports
  if (content.includes("import React from 'react';") && !content.includes('<React.') && !content.includes('React.')) {
    content = content.replace(/^import React from 'react';\s*$/gm, '');
    modified = true;
  }

  // Remove unused imports that are commonly unused
  const unusedImports = [
    'Home', 'PagePage', 'Page', 'AboutLayout', 'FiveGMobileApplications', 'ErrorBoundary'
  ];

  unusedImports.forEach(importName => {
    const regex = new RegExp(`^import\\s+\\{[^}]*${importName}[^}]*\\}\\s+from\\s+['"][^'"]*['"];?\\s*$`, 'gm');
    if (regex.test(content)) {
      content = content.replace(regex, '');
      modified = true;
    }
  });

  // Clean up multiple empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  if (modified) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFixed ${fixedCount} files with unused import issues.`);