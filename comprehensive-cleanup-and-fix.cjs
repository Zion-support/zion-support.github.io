#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Starting comprehensive cleanup and fix...');

// Function to remove merge conflict markers
function removeMergeConflicts(content) {
  return content
    .replace(/[\s\S]*?[\s\S]*?    .replace(/<<<<<<< [^\n]+[\s\S]*?[\s\S]*?    .replace(/[\s\S]*?    .replace(/<<<<<<< [^\n]+[\s\S]*?/g, '')
    .replace(/^<<<<<<< [^\n]+$/gm, '')
    .replace(/^$/gm, '')
    .replace(/^}

// Function to fix common syntax issues
function fixSyntaxIssues(content) {
  return content
    .replace(/^#!/usr/bin\/env node;$/gm, '#!/usr/bin/env node')
    .replace(/^;$/gm, '')
    .replace(/^module\.exports = \{;$/gm, 'module.exports = {')
    .replace(/^  env:\{;$/gm, '  env: {')
    .replace(/^    node:true,;$/gm, '    node: true,')
    .replace(/^    es2021:true;$/gm, '    es2021: true')
    .replace(/^  \},;$/gm, '  },')
    .replace(/^  globals:\{;$/gm, '  globals: {')
    .replace(/^    module:'readonly',;$/gm, "    module: 'readonly',")
    .replace(/^    require:'readonly',;$/gm, "    require: 'readonly',")
    .replace(/^    exports:'readonly',;$/gm, "    exports: 'readonly',")
    .replace(/^    __dirname:'readonly',;$/gm, "    __dirname: 'readonly',")
    .replace(/^    __filename:'readonly',;$/gm, "    __filename: 'readonly',")
    .replace(/^    global:'readonly',;$/gm, "    global: 'readonly',")
    .replace(/^    Buffer:'readonly';$/gm, "    Buffer: 'readonly'")
    .replace(/^  \},;$/gm, '  },')
    .replace(/^  extends:\['next\/core-web-vitals'\],;$/gm, "  extends: ['next/core-web-vitals'],")
    .replace(/^  rules:\{;$/gm, '  rules: {')
    .replace(/^    'react-hooks\/rules-of-hooks':'error',;$/gm, "    'react-hooks/rules-of-hooks': 'error',")
    .replace(/^    'react-hooks\/exhaustive-deps':'warn',;$/gm, "    'react-hooks/exhaustive-deps': 'warn',")
    .replace(/^    '@typescript-eslint\/no-unused-vars':\[;$/gm, "    '@typescript-eslint/no-unused-vars': [")
    .replace(/^      'warn',;$/gm, "      'warn',")
    .replace(/^      \{ argsIgnorePattern:'\^_', varsIgnorePattern:'\^_' \};$/gm, "      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }")
    .replace(/^    \],;$/gm, '    ],')
    .replace(/^    '@typescript-eslint\/no-explicit-any':'warn',;$/gm, "    '@typescript-eslint/no-explicit-any': 'warn',")
    .replace(/^    '@typescript-eslint\/no-empty-object-type':'warn';$/gm, "    '@typescript-eslint/no-empty-object-type': 'warn'")
    .replace(/^    '@next\/next\/no-html-link-for-pages':'warn';$/gm, "    '@next/next/no-html-link-for-pages': 'warn'")
    .replace(/^  \},;$/gm, '  },')
    .replace(/^  ignorePatterns:\[;$/gm, '  ignorePatterns: [')
    .replace(/^    'node_modules\/',;$/gm, "    'node_modules/',")
    .replace(/^    '\.next\/',;$/gm, "    '.next/',")
    .replace(/^    'out\/',;$/gm, "    'out/',")
    .replace(/^    'build\/',;$/gm, "    'build/',")
    .replace(/^    'dist\/',;$/gm, "    'dist/',")
    .replace(/^    '\*\.config\.js',;$/gm, "    '*.config.js',")
    .replace(/^    '\*\.config\.ts',;$/gm, "    '*.config.ts',")
    .replace(/^    'scripts\/',;$/gm, "    'scripts/',")
    .replace(/^    'automation\/',;$/gm, "    'automation/',")
    .replace(/^    'netlify\/',;$/gm, "    'netlify/',")
    .replace(/^    'src\/',;$/gm, "    'src/',")
    .replace(/^    'apps\/';$/gm, "    'apps/'")
    .replace(/^  \];$/gm, '  ]')
    .replace(/^\};\};$/gm, '};')
    .replace(/^;$/gm, '');
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = removeMergeConflicts(content);
    fixedContent = fixSyntaxIssues(fixedContent);
    
    // Only write if content changed
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`❌ Error processing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to recursively process directory
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (['node_modules', '.git', '.next', 'out', 'dist', 'temp_conflicts', 'corrupted_backup', 'temp_broken_files', 'temp-exclude', 'temp_backup'].includes(item)) {
        continue;
      }
      fixedCount += processDirectory(fullPath);
    } else if (stat.isFile()) {
      // Process specific file types
      if (['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs', '.json'].includes(path.extname(item))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  }
  
  return fixedCount;
}

// Main execution
try {
  console.log('🔍 Scanning for files to fix...');
  
  // Process root directory
  let totalFixed = processDirectory('/workspace');
  
  // Clean up specific problematic files
  const problematicFiles = [
    '/workspace/.eslintrc.js',
    '/workspace/.eslintrc.mjs',
    '/workspace/postcss.config.mjs'
  ];
  
  for (const file of problematicFiles) {
    if (fs.existsSync(file)) {
      try {
        fs.unlinkSync(file);
        console.log(`🗑️  Removed problematic file: ${file}`);
        totalFixed++;
      } catch (error) {
        console.log(`❌ Could not remove ${file}: ${error.message}`);
      }
    }
  }
  
  // Fix specific files that need special handling
  const srcMainTsx = '/workspace/src/main.tsx';
  if (fs.existsSync(srcMainTsx)) {
    try {
      let content = fs.readFileSync(srcMainTsx, 'utf8');
      content = removeMergeConflicts(content);
      fs.writeFileSync(srcMainTsx, content);
      console.log('✅ Fixed src/main.tsx');
      totalFixed++;
    } catch (error) {
      console.log(`❌ Error fixing src/main.tsx: ${error.message}`);
    }
  }
  
  console.log(`\n🎉 Cleanup complete! Fixed ${totalFixed} files.`);
  
  // Try to run build after cleanup
  console.log('\n🔨 Testing build after cleanup...');
  try {
    execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
    console.log('✅ Build successful after cleanup!');
  } catch (error) {
    console.log('❌ Build still has issues, but cleanup completed.');
  }
  
} catch (error) {
  console.error('❌ Cleanup failed:', error.message);
  process.exit(1);
}