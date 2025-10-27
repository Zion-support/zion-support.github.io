#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused React imports (when React is not used in JSX)
    if (content.includes("import React from 'react';") && !content.includes('<') && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }

    // Remove unused Link imports
    if (content.includes("import { Link } from 'next/link';") && !content.includes('<Link')) {
      content = content.replace(/import { Link } from 'next\/link';\n?/g, '');
      modified = true;
    }

    // Remove unused ArrowRight imports
    if (content.includes("import { ArrowRight } from 'lucide-react';") && !content.includes('ArrowRight')) {
      content = content.replace(/import { ArrowRight } from 'lucide-react';\n?/g, '');
      modified = true;
    }

    // Remove unused icon imports
    const unusedIcons = ['Star', 'Clock', 'Zap', 'Shield', 'Globe', 'Database', 'Users', 'Settings', 'Check', 'Search', 'ArrowLeft', 'RefreshCw', 'Cloud'];
    unusedIcons.forEach(icon => {
      const iconImportPattern = `import { ${icon} } from 'lucide-react';`;
      if (content.includes(iconImportPattern) && !content.includes(icon)) {
        content = content.replace(new RegExp(iconImportPattern + '\\n?', 'g'), '');
        modified = true;
      }
    });

    // Add React import if missing and JSX is present
    if (content.includes('<') && !content.includes("import React") && !content.includes("import * as React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }

    // Fix unused props by prefixing with underscore
    const unusedPropsRegex = /interface (\w+Props) \{[\s\S]*?\}/g;
    let match;
    while ((match = unusedPropsRegex.exec(content)) !== null) {
      const propName = match[1];
      if (!content.includes(`React.FC<${propName}>`) && !content.includes(`: ${propName}`)) {
        content = content.replace(new RegExp(`\\b${propName}\\b`, 'g'), `_${propName}`);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting unused imports fix...');

const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

let fixedCount = 0;
files.forEach(file => {
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);

// Also fix specific files mentioned in the lint output
const specificFiles = [
  'app/404.tsx',
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx'
];

specificFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    if (fixUnusedImports(fullPath)) {
      console.log(`Fixed specific file: ${file}`);
    }
  }
});

console.log('Unused imports fix completed!');