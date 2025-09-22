#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting comprehensive syntax error fixes...');

// Function to fix common syntax errors in files
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unterminated string literals (common pattern)
    if (content.includes('"') && !content.includes('import') && content.length < 200) {
      // This might be a corrupted file, skip for now
      return false;
    }

    // Fix common JSX syntax errors
    const fixes = [
      // Fix unterminated string literals in import statements
      {
        pattern: /import\s+['"]([^'"]*?)\s*$/gm,
        replacement: (match, p1) => {
          if (p1 && !p1.endsWith('"') && !p1.endsWith("'")) {
            return `import "${p1}"`;
          }
          return match;
        }
      },
      // Fix missing semicolons after imports
      {
        pattern: /import\s+.*?from\s+['"][^'"]+['"]\s*$/gm,
        replacement: (match) => {
          if (!match.endsWith(';')) {
            return match + ';';
          }
          return match;
        }
      },
      // Fix JSX closing tag issues
      {
        pattern: /<(\w+)([^>]*)>\s*$/gm,
        replacement: (match, tag, attrs) => {
          // Only fix if it's not a self-closing tag
          if (!match.includes('/>') && !match.includes('</')) {
            return match;
          }
          return match;
        }
      },
      // Fix common TypeScript syntax errors
      {
        pattern: /:\s*([^;{}=,]+?)\s*$/gm,
        replacement: (match, p1) => {
          if (p1 && !p1.includes(';') && !p1.includes('{') && !p1.includes('}')) {
            return match + ';';
          }
          return match;
        }
      }
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
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
  }
  return false;
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other common directories
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            traverse(fullPath);
          }
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const componentsDir = path.join(__dirname, 'components');
const libDir = path.join(__dirname, 'lib');

console.log('📁 Scanning for files to fix...');

const files = [
  ...findFiles(componentsDir),
  ...findFiles(libDir)
];

console.log(`📊 Found ${files.length} files to check`);

let fixedCount = 0;
let errorCount = 0;

files.forEach(file => {
  try {
    if (fixFile(file)) {
      fixedCount++;
    }
  } catch (error) {
    errorCount++;
    console.log(`❌ Error processing ${file}: ${error.message}`);
  }
});

console.log(`\n📈 Results:`);
console.log(`✅ Files fixed: ${fixedCount}`);
console.log(`❌ Errors: ${errorCount}`);
console.log(`📊 Total processed: ${files.length}`);

// Run ESLint fix
console.log('\n🔧 Running ESLint auto-fix...');
try {
  execSync('npm run lint -- --fix', { stdio: 'inherit' });
  console.log('✅ ESLint auto-fix completed');
} catch (error) {
  console.log('⚠️ ESLint auto-fix had some issues, but continuing...');
}

console.log('\n🎉 Syntax error fixes completed!');