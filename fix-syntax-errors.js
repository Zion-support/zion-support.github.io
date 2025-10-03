#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in TSX files
function fixTSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common patterns
    const fixes = [
      // Fix malformed JSX with content placeholders
      {
        pattern: /\{\/\* content \*\/\}/g,
        replacement: ''
      },
      // Fix malformed return statements
      {
        pattern: /return \(\s*<div>\{\/\* content \*\/\}/g,
        replacement: 'return (\n    <div>'
      },
      // Fix malformed JSX elements
      {
        pattern: /<div>\{\/\* content \*\/\}<\/div>/g,
        replacement: '<div></div>'
      },
      // Fix malformed function declarations
      {
        pattern: /=\s*\(\s*\)\s*=>\s*\{\s*\/\* content \*\/\}/g,
        replacement: '= () => {'
      },
      // Fix malformed class methods
      {
        pattern: /\{\s*\/\* content \*\/\}/g,
        replacement: '{}'
      },
      // Fix malformed JSX closing tags
      {
        pattern: /<div><\/div>\s*<\/div>/g,
        replacement: '<div></div>'
      },
      // Fix malformed constructor
      {
        pattern: /constructor\(props: any\)\s*\{\s*\/\* content \*\/\}/g,
        replacement: 'constructor(props: any) {'
      },
      // Fix malformed static methods
      {
        pattern: /static\s+getDerivedStateFromError\(error: Error\)\s*\{\s*\/\* content \*\/\}/g,
        replacement: 'static getDerivedStateFromError(error: Error) {'
      },
      // Fix malformed componentDidCatch
      {
        pattern: /componentDidCatch\(error: Error, errorInfo: React\.ErrorInfo\)\s*\{\s*\/\* content \*\/\}/g,
        replacement: 'componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {'
      },
      // Fix malformed render method
      {
        pattern: /render\(\)\s*\{\s*\/\* content \*\/\}/g,
        replacement: 'render() {'
      },
      // Fix malformed if statements
      {
        pattern: /if\s*\([^)]*\)\s*\{\s*\/\* content \*\/\}/g,
        replacement: (match) => match.replace(/\{\s*\/\* content \*\/\}/, '{')
      }
    ];

    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional cleanup for specific patterns
    // Remove empty JSX elements that are malformed
    content = content.replace(/<div><\/div>\s*<div><\/div>/g, '<div></div>');
    
    // Fix malformed JSX structure
    content = content.replace(/<div>\s*<\/div>\s*<\/div>/g, '<div></div>');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*<div>\s*\{\/\* content \*\/\}/g, 'return (\n    <div>');

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

// Function to recursively find and fix TSX files
function fixTSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {
        fixedCount += fixTSXFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixTSXFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const totalFixed = fixTSXFiles('/workspace');
console.log(`Fixed ${totalFixed} files.`);