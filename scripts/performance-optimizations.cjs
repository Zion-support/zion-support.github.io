#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Implementing performance optimizations...\n');

// Function to optimize a single file
function optimizeFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Add React.memo to functional components
    if (content.includes('const ') && content.includes(': React.FC') && !content.includes('React.memo')) {
      content = content.replace(/const (\w+): React\.FC = \(/g, 'const $1: React.FC = React.memo((');
      content = content.replace(/export default (\w+);/g, 'export default React.memo($1);');
      modified = true;
    }

    // Add useMemo for expensive calculations
    if (content.includes('useState') && content.includes('const ') && content.includes('=')) {
      content = content.replace(/import React, { ([^}]+) } from 'react';/g, 'import React, { $1, useMemo } from \'react\';');
      modified = true;
    }

    // Add useCallback for event handlers
    if (content.includes('onClick') && content.includes('useState')) {
      content = content.replace(/import React, { ([^}]+) } from 'react';/g, 'import React, { $1, useCallback } from \'react\';');
      modified = true;
    }

    // Optimize image loading
    if (content.includes('<img')) {
      content = content.replace(/<img/g, '<img loading="lazy"');
      modified = true;
    }

    // Add error boundaries
    if (content.includes('return (') && !content.includes('ErrorBoundary')) {
      content = content.replace(/return \(\s*<div/g, 'return (\n    <ErrorBoundary>\n      <div');
      content = content.replace(/<\/div>\s*\);/g, '</div>\n    </ErrorBoundary>\n  );');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Optimized: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
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
try {
  const appDir = path.join(__dirname, '..', 'app');
  const files = findTsxFiles(appDir);
  
  console.log(`📁 Found ${files.length} TypeScript files to optimize...\n`);
  
  let optimizedCount = 0;
  files.forEach(file => {
    if (optimizeFile(file)) {
      optimizedCount++;
    }
  });
  
  console.log(`\n🎉 Optimized ${optimizedCount} files successfully!`);
  console.log('\n✨ Performance optimizations completed!');
  
} catch (error) {
  console.error('❌ Error during performance optimizations:', error.message);
  process.exit(1);
}