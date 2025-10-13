#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files with known linting issues and their fixes
const fixes = [
  {
    file: 'app/ai-services/page.tsx',
    removeImports: ['Globe', 'Database', 'Settings']
  },
  {
    file: 'app/ai-supply-chain-optimizer/page.tsx',
    removeImports: ['ArrowRight', 'Globe', 'BarChart3', 'Zap', 'Target', 'CheckCircle', 'Star', 'Sparkles', 'Mail', 'Smartphone', 'TrendingUp', 'Helmet', 'Link']
  },
  {
    file: 'app/blog/page.tsx',
    removeImports: ['Link']
  },
  {
    file: 'app/careers/page.tsx',
    removeImports: ['Link', 'ArrowRight', 'Users', 'Zap', 'Shield', 'Globe', 'Mail', 'MapPin', 'Clock', 'CheckCircle', 'Star', 'Award', 'Helmet']
  },
  {
    file: 'app/case-studies/page.tsx',
    removeImports: ['Helmet', 'Link', 'ArrowRight', 'Target', 'Star', 'Globe']
  }
];

function fixFile(filePath, importsToRemove) {
  try {
    const fullPath = path.join(__dirname, '..', filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    // Remove unused imports
    importsToRemove.forEach(importName => {
      // Remove from import statements
      const importRegex = new RegExp(`\\s*${importName}\\s*,?`, 'g');
      if (importRegex.test(content)) {
        content = content.replace(importRegex, '');
        modified = true;
      }
    });

    // Clean up empty import lines and trailing commas
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/{\s*,/g, '{');
    content = content.replace(/{\s*}/g, '{}');

    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`✅ Fixed imports in ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔧 Fixing remaining linting errors...');
  
  let fixedFiles = 0;
  
  fixes.forEach(({ file, removeImports }) => {
    if (fixFile(file, removeImports)) {
      fixedFiles++;
    }
  });

  console.log(`✅ Fixed ${fixedFiles} files`);
  
  // Run ESLint to check remaining issues
  try {
    console.log('🔧 Running ESLint check...');
    execSync('npm run lint', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    console.log('✅ All linting issues resolved!');
  } catch (error) {
    console.log('⚠️  Some linting issues remain');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFile };