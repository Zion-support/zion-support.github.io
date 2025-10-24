#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing final linting issues...\n');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing Star import
    if (content.includes('<Star') && !content.includes("import { Star")) {
      content = content.replace(/import { ([^}]+) } from 'lucide-react';/, `import { $1, Star } from 'lucide-react';`);
      modified = true;
    }

    // Fix missing Shield import
    if (content.includes('<Shield') && !content.includes("import { Shield")) {
      content = content.replace(/import { ([^}]+) } from 'lucide-react';/, `import { $1, Shield } from 'lucide-react';`);
      modified = true;
    }

    // Fix missing ShoppingCart import
    if (content.includes('<ShoppingCart') && !content.includes("import { ShoppingCart")) {
      content = content.replace(/import { ([^}]+) } from 'lucide-react';/, `import { $1, ShoppingCart } from 'lucide-react';`);
      modified = true;
    }

    // Fix missing Bell import
    if (content.includes('<Bell') && !content.includes("import { Bell")) {
      content = content.replace(/import { ([^}]+) } from 'lucide-react';/, `import { $1, Bell } from 'lucide-react';`);
      modified = true;
    }

    // Fix missing BarChart3 import
    if (content.includes('<BarChart3') && !content.includes("import { BarChart3")) {
      content = content.replace(/import { ([^}]+) } from 'lucide-react';/, `import { $1, BarChart3 } from 'lucide-react';`);
      modified = true;
    }

    // Fix missing Search import
    if (content.includes('<Search') && !content.includes("import { Search")) {
      content = content.replace(/import { ([^}]+) } from 'lucide-react';/, `import { $1, Search } from 'lucide-react';`);
      modified = true;
    }

    // Fix missing BookOpen import
    if (content.includes('<BookOpen') && !content.includes("import { BookOpen")) {
      content = content.replace(/import { ([^}]+) } from 'lucide-react';/, `import { $1, BookOpen } from 'lucide-react';`);
      modified = true;
    }

    // Fix missing Users import
    if (content.includes('<Users') && !content.includes("import { Users")) {
      content = content.replace(/import { ([^}]+) } from 'lucide-react';/, `import { $1, Users } from 'lucide-react';`);
      modified = true;
    }

    // Fix missing Clock import
    if (content.includes('<Clock') && !content.includes("import { Clock")) {
      content = content.replace(/import { ([^}]+) } from 'lucide-react';/, `import { $1, Clock } from 'lucide-react';`);
      modified = true;
    }

    // Fix duplicate ArrowRight imports
    if (content.includes('ArrowRight') && content.match(/ArrowRight/g).length > 1) {
      content = content.replace(/import { ([^}]*ArrowRight[^}]*), ArrowRight([^}]*)} from 'lucide-react';/g, `import { $1$2 } from 'lucide-react';`);
      modified = true;
    }

    // Fix duplicate React imports
    if (content.includes('React') && content.match(/import React/g).length > 1) {
      content = content.replace(/import React[^;]+;\nimport React[^;]+;/g, 'import React from \'react\';');
      modified = true;
    }

    // Fix unescaped entities
    content = content.replace(/(?<!import.*)'/g, '&apos;');
    content = content.replace(/(?<!import.*)"/g, '&quot;');
    modified = true;

    // Remove unused React imports in non-JSX files
    if (!content.includes('<') && content.includes("import React from 'react';")) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }

    // Remove unused useState imports
    if (content.includes('useState') && !content.includes('useState(')) {
      content = content.replace(/,\s*useState/g, '');
      modified = true;
    }

    // Remove unused useEffect imports
    if (content.includes('useEffect') && !content.includes('useEffect(')) {
      content = content.replace(/,\s*useEffect/g, '');
      modified = true;
    }

    // Remove unused Suspense imports
    if (content.includes('Suspense') && !content.includes('<Suspense')) {
      content = content.replace(/,\s*Suspense/g, '');
      modified = true;
    }

    // Remove unused Helmet imports
    if (content.includes('Helmet') && !content.includes('<Helmet')) {
      content = content.replace(/,\s*Helmet/g, '');
      modified = true;
    }

    // Fix empty block statements
    content = content.replace(/{\s*}/g, '{ /* empty */ }');
    modified = true;

    // Fix unreachable code
    content = content.replace(/return;\s*[^}]+}/g, 'return; }');
    modified = true;

    // Fix parsing errors in error boundary files
    if (filePath.includes('ErrorBoundary') || filePath.includes('ErrorHandler')) {
      if (!content.includes('import React')) {
        content = 'import React from \'react\';\n' + content;
        modified = true;
      }
    }

    // Fix JSX fragment errors
    content = content.replace(/<>([^<]*)$/gm, '<React.Fragment>$1</React.Fragment>');
    modified = true;

    // Fix parsing errors in utils files
    if (filePath.includes('utils/')) {
      content = content.replace(/,\s*$/gm, ';');
      content = content.replace(/,\s*}/g, ' }');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
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
  
  console.log(`📁 Found ${files.length} TypeScript files to process...\n`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n🎉 Fixed ${fixedCount} files successfully!`);
  console.log('\n✨ Final linting fixes completed!');
  
} catch (error) {
  console.error('❌ Error during final fixes:', error.message);
  process.exit(1);
}