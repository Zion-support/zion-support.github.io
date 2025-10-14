const fs = require('fs');
const path = require('path');

// Function to fix import statements
function fixImportStatements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import statements that were incorrectly modified
    const fixes = [
      { pattern: /importReact/g, replacement: 'import React' },
      { pattern: /import\{/g, replacement: 'import {' },
      { pattern: /from'react'/g, replacement: "from 'react'" },
      { pattern: /from'react-helmet-async'/g, replacement: "from 'react-helmet-async'" },
      { pattern: /from'react-router-dom'/g, replacement: "from 'react-router-dom'" },
      { pattern: /from'lucide-react'/g, replacement: "from 'lucide-react'" },
      { pattern: /from'@\/components'/g, replacement: "from '@/components'" },
      { pattern: /from'@\/hooks'/g, replacement: "from '@/hooks'" },
      { pattern: /from'@\/utils'/g, replacement: "from '@/utils'" },
      { pattern: /from'@\/contexts'/g, replacement: "from '@/contexts'" },
      { pattern: /from'@\/config'/g, replacement: "from '@/config'" },
      { pattern: /from'@\/constants'/g, replacement: "from '@/constants'" },
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
      console.log(`Fixed imports in: ${filePath}`);
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
      if (fixImportStatements(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Start fixing from the app directory
console.log('Starting to fix import statements...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files with import issues.`);