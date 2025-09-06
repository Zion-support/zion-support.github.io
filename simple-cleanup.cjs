#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Starting simple cleanup...');

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

// Main execution
try {
  console.log('🔍 Cleaning up problematic files...');
  
  // Remove problematic files
  const filesToRemove = [
    '/workspace/.eslintrc.js',
    '/workspace/.eslintrc.mjs',
    '/workspace/postcss.config.mjs'
  ];
  
  for (const file of filesToRemove) {
    if (fs.existsSync(file)) {
      try {
        fs.unlinkSync(file);
        console.log(`🗑️  Removed: ${file}`);
      } catch (error) {
        console.log(`❌ Could not remove ${file}: ${error.message}`);
      }
    }
  }
  
  // Fix specific files
  const filesToFix = [
    '/workspace/src/main.tsx',
    '/workspace/src/hooks/index.ts'
  ];
  
  let fixedCount = 0;
  for (const file of filesToFix) {
    if (fs.existsSync(file)) {
      if (processFile(file)) {
        fixedCount++;
      }
    }
  }
  
  // Clean up temp directories
  const dirsToRemove = [
    '/workspace/temp_conflicts',
    '/workspace/temp-exclude',
    '/workspace/temp_backup',
    '/workspace/temp_broken_files',
    '/workspace/corrupted_backup'
  ];
  
  for (const dir of dirsToRemove) {
    if (fs.existsSync(dir)) {
      try {
        execSync(`rm -rf "${dir}"`, { cwd: '/workspace' });
        console.log(`🗑️  Removed directory: ${dir}`);
      } catch (error) {
        console.log(`❌ Could not remove ${dir}: ${error.message}`);
      }
    }
  }
  
  console.log(`\n🎉 Cleanup complete! Fixed ${fixedCount} files.`);
  
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