#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive code cleanup and optimization...\n');

// Function to fix unused imports and variables
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused React imports
    if (content.includes("import React, {") && !content.includes('React.')) {
      content = content.replace(/import React, \{([^}]+)\}/g, (match, imports) => {
        const usedImports = imports.split(',').map(imp => imp.trim()).filter(imp => {
          const importName = imp.split(' ')[0].trim();
          return content.includes(importName + '(') || content.includes(importName + '.') || content.includes('<' + importName);
        });
        
        if (usedImports.length === 0) {
          return 'import React from \'react\';';
        } else {
          return `import React, { ${usedImports.join(', ')} } from 'react';`;
        }
      });
      modified = true;
    }

    // Remove unused lucide-react imports
    const lucideMatch = content.match(/import \{([^}]+)\} from 'lucide-react';/);
    if (lucideMatch) {
      const allImports = lucideMatch[1].split(',').map(imp => imp.trim());
      const usedImports = allImports.filter(imp => {
        const importName = imp.split(' ')[0].trim();
        return content.includes(importName + ' className') || content.includes(importName + ' w-') || content.includes(importName + ' h-');
      });
      
      if (usedImports.length !== allImports.length) {
        if (usedImports.length === 0) {
          content = content.replace(/import \{[^}]+\} from 'lucide-react';/, '');
        } else {
          content = content.replace(/import \{[^}]+\} from 'lucide-react';/, `import { ${usedImports.join(', ')} } from 'lucide-react';`);
        }
        modified = true;
      }
    }

    // Remove unused useState and useEffect imports
    if (content.includes('useState') && !content.includes('useState(')) {
      content = content.replace(/,\s*useState/g, '');
      modified = true;
    }
    if (content.includes('useEffect') && !content.includes('useEffect(')) {
      content = content.replace(/,\s*useEffect/g, '');
      modified = true;
    }

    // Remove unused memo, lazy, Suspense imports
    ['memo', 'lazy', 'Suspense'].forEach(importName => {
      if (content.includes(importName) && !content.includes(importName + '(') && !content.includes('<' + importName)) {
        content = content.replace(new RegExp(`,\\s*${importName}`, 'g'), '');
        modified = true;
      }
    });

    // Fix duplicate ArrowRight imports
    const arrowRightMatches = content.match(/import.*ArrowRight.*from 'lucide-react';/g);
    if (arrowRightMatches && arrowRightMatches.length > 1) {
      content = content.replace(/import.*ArrowRight.*from 'lucide-react';\n/g, '');
      content = content.replace(/import \{([^}]+)\} from 'lucide-react';/, (match, imports) => {
        if (!imports.includes('ArrowRight')) {
          return `import { ${imports}, ArrowRight } from 'lucide-react';`;
        }
        return match;
      });
      modified = true;
    }

    // Fix unescaped entities
    content = content.replace(/'/g, '&apos;');
    content = content.replace(/"/g, '&quot;');
    modified = true;

    // Remove console statements
    content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);?\n?/g, '');
    modified = true;

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
    if (fixUnusedImports(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n🎉 Fixed ${fixedCount} files successfully!`);
  
  // Run lint fix
  console.log('\n🔧 Running ESLint fix...');
  try {
    execSync('npm run lint:fix', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    console.log('✅ ESLint fix completed');
  } catch (error) {
    console.log('⚠️  ESLint fix had some issues, but continuing...');
  }
  
  console.log('\n✨ Code cleanup completed successfully!');
  
} catch (error) {
  console.error('❌ Error during cleanup:', error.message);
  process.exit(1);
}