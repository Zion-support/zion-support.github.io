const fs = require('fs');
const path = require('path');

function fixAllRemainingLintErrors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix unused icon imports in various page files
  const unusedIcons = ['Star', 'Clock', 'Zap', 'Shield', 'Globe', 'Database', 'Users', 'Settings', 'Check'];
  
  // Check if any of these icons are imported but not used
  const hasUnusedIcons = unusedIcons.some(icon => {
    const iconImportPattern = `import { ${icon} } from 'lucide-react';`;
    return content.includes(iconImportPattern) && !content.includes(icon);
  });

  if (hasUnusedIcons) {
    // Remove unused icon imports
    unusedIcons.forEach(icon => {
      const iconImportPattern = `import { ${icon} } from 'lucide-react';`;
      if (content.includes(iconImportPattern) && !content.includes(icon)) {
        content = content.replace(new RegExp(iconImportPattern + '\\n?', 'g'), '');
        modified = true;
      }
    });
  }

  // Fix unused 'from' imports
  if (content.includes("import { from } from 'lucide-react';")) {
    content = content.replace(/import { from } from 'lucide-react';\n?/g, '');
    modified = true;
  }

  // Fix unused React imports in config files
  if (filePath.includes('appConfig.ts') || filePath.includes('AccessibilityContext.tsx')) {
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }

  return false;
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let totalFixed = 0;

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      totalFixed += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixAllRemainingLintErrors(filePath)) {
        totalFixed++;
        console.log(`Fixed: ${filePath}`);
      }
    }
  });

  return totalFixed;
}

// Process the app directory
const appDir = '/workspace/app';
const totalFixed = processDirectory(appDir);

console.log(`\nTotal files fixed: ${totalFixed}`);