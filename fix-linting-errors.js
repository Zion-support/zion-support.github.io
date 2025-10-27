#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting comprehensive linting error fixes...');

// Function to fix common linting issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove unused React imports
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }

    // Fix 2: Remove unused imports from lucide-react
    const lucideImports = content.match(/import\s*{\s*[^}]*}\s*from\s*['"]lucide-react['"];?/g);
    if (lucideImports) {
      lucideImports.forEach(importLine => {
        const imports = importLine.match(/{\s*([^}]*)\s*}/)[1];
        const importList = imports.split(',').map(imp => imp.trim());
        const usedImports = importList.filter(imp => {
          const regex = new RegExp(`\\b${imp}\\b`, 'g');
          const matches = content.match(regex);
          return matches && matches.length > 1; // More than just the import itself
        });
        
        if (usedImports.length === 0) {
          content = content.replace(importLine, '');
        } else if (usedImports.length < importList.length) {
          const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
          content = content.replace(importLine, newImport);
        }
        modified = true;
      });
    }

    // Fix 3: Remove unused Link imports from next/link
    if (content.includes("import { Link } from 'next/link';") && !content.includes('<Link')) {
      content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]next\/link['"];?\n?/g, '');
      modified = true;
    }

    // Fix 4: Fix parsing errors - missing function declarations
    if (content.includes('return (') && !content.includes('function') && !content.includes('const') && !content.includes('=')) {
      // Find the component name from export
      const exportMatch = content.match(/export default (\w+);/);
      if (exportMatch) {
        const componentName = exportMatch[1];
        const interfaceMatch = content.match(/interface (\w+Props)/);
        const propsType = interfaceMatch ? interfaceMatch[1] : '{}';
        
        // Add proper function declaration
        content = content.replace(
          /return \(/,
          `const ${componentName}: React.FC<${propsType}> = (props) => {\n  return (`
        );
        modified = true;
      }
    }

    // Fix 5: Fix missing React import for JSX
    if (content.includes('<') && content.includes('>') && !content.includes("import React") && !content.includes("import * as React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }

    // Fix 6: Fix incomplete JSX fragments
    if (content.includes('<>') && !content.includes('</>')) {
      content = content.replace(/<>/g, '<React.Fragment>').replace(/<\/>/g, '</React.Fragment>');
      modified = true;
    }

    // Fix 7: Fix missing closing braces
    if (content.includes('return (') && !content.includes('};')) {
      content = content.replace(/export default (\w+);/, '};\n\nexport default $1;');
      modified = true;
    }

    // Fix 8: Remove unused interface definitions
    const interfaceMatches = content.match(/interface\s+(\w+Props)\s*{[^}]*}/g);
    if (interfaceMatches) {
      interfaceMatches.forEach(interfaceDef => {
        const interfaceName = interfaceDef.match(/interface\s+(\w+Props)/)[1];
        if (!content.includes(interfaceName)) {
          content = content.replace(interfaceDef + '\n', '');
          modified = true;
        }
      });
    }

    // Fix 9: Fix malformed component declarations
    if (content.includes('const ') && content.includes(' = ') && !content.includes('React.FC')) {
      content = content.replace(
        /const\s+(\w+)\s*=\s*\(/g,
        'const $1: React.FC = ('
      );
      modified = true;
    }

    // Fix 10: Clean up extra whitespace and empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim() + '\n';

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
  const appDir = path.join(__dirname, 'app');
  const files = findTsxFiles(appDir);
  
  console.log(`📁 Found ${files.length} TypeScript files to process`);
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n🎉 Fixed ${fixedCount} files`);
  
  // Run linter again to check remaining issues
  console.log('\n🔍 Running linter to check remaining issues...');
  try {
    execSync('npm run lint', { stdio: 'pipe' });
    console.log('✅ All linting issues resolved!');
  } catch (error) {
    console.log('⚠️  Some linting issues remain, but many have been fixed.');
  }
  
} catch (error) {
  console.error('❌ Error during fix process:', error.message);
  process.exit(1);
}