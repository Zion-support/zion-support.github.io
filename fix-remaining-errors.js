#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Fixing remaining parsing and linting errors...');

// Function to fix specific parsing errors
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove extra semicolon after closing brace
    if (content.includes('};\n\nexport default')) {
      content = content.replace(/};\n\nexport default/g, '}\n\nexport default');
      modified = true;
    }

    // Fix 2: Fix malformed function declarations
    if (content.includes('function Page') && content.includes('displayName')) {
      // Remove displayName and extra semicolon
      content = content.replace(/\n\w+\.displayName = '[^']*';\n\n\};\n/g, '\n}\n');
      modified = true;
    }

    // Fix 3: Fix 'use client' placement
    if (content.includes("'use client'") && content.includes("import React")) {
      content = content.replace(/'use client';\nimport React from 'react';\n/g, "import React from 'react';\n'use client';\n");
      modified = true;
    }

    // Fix 4: Remove unused Link imports
    if (content.includes("import Link from 'next/link'") && !content.includes('<Link')) {
      content = content.replace(/import Link from 'next\/link'\n?/g, '');
      modified = true;
    }

    // Fix 5: Fix missing semicolons in imports
    content = content.replace(/import ([^;]+)\n/g, 'import $1;\n');

    // Fix 6: Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim() + '\n';

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed parsing errors: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific component files
function fixComponentFiles(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Fix missing function declarations
    if (content.includes('return (') && !content.includes('function') && !content.includes('const') && !content.includes('=')) {
      const exportMatch = content.match(/export default (\w+);/);
      if (exportMatch) {
        const componentName = exportMatch[1];
        content = content.replace(
          /return \(/,
          `const ${componentName}: React.FC = () => {\n  return (`
        );
        content = content.replace(
          /export default (\w+);/,
          '};\n\nexport default $1;'
        );
        modified = true;
      }
    }

    // Fix 2: Fix incomplete JSX fragments
    if (content.includes('<>') && !content.includes('</>')) {
      content = content.replace(/<>/g, '<React.Fragment>').replace(/<\/>/g, '</React.Fragment>');
      modified = true;
    }

    // Fix 3: Add missing React import for JSX
    if (content.includes('<') && content.includes('>') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed component: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing component ${filePath}:`, error.message);
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
  
  console.log(`📁 Processing ${files.length} TypeScript files`);
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixParsingErrors(file) || fixComponentFiles(file)) {
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
    console.log('⚠️  Some linting issues remain, checking specific files...');
    
    // Try to fix remaining specific issues
    const remainingFiles = [
      'app/5g-data-analytics/page.tsx',
      'app/5g-edge-computing/page.tsx',
      'app/5g-implementation/page.tsx',
      'app/5g-iot-solutions/page.tsx',
      'app/accessibility-page/page.tsx'
    ];
    
    for (const file of remainingFiles) {
      const fullPath = path.join(__dirname, file);
      if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes("import Link from 'next/link'") && !content.includes('<Link')) {
          content = content.replace(/import Link from 'next\/link'\n?/g, '');
          fs.writeFileSync(fullPath, content);
          console.log(`✅ Removed unused Link import from ${file}`);
        }
      }
    }
  }
  
} catch (error) {
  console.error('❌ Error during fix process:', error.message);
  process.exit(1);
}