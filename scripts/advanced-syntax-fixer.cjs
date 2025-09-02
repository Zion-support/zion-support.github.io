#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ANSI color codes for better output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;

    // Fix 1: Remove duplicate useState declarations
    const useStateRegex = /import\s+\{\s*useState\s*\}\s+from\s+['"]react['"];?\s*\nimport\s+\{\s*useState\s*\}\s+from\s+['"]react['"];?/g;
    if (useStateRegex.test(content)) {
      content = content.replace(useStateRegex, 'import { useState } from \'react\';');
      fixed = true;
      log(`Fixed duplicate useState imports in ${filePath}`, 'yellow');
    }

    // Fix 2: Remove duplicate Link declarations
    const linkRegex = /import\s+\{\s*Link\s*\}\s+from\s+['"]next\/link['"];?\s*\nimport\s+\{\s*Link\s*\}\s+from\s+['"]next\/link['"];?/g;
    if (linkRegex.test(content)) {
      content = content.replace(linkRegex, 'import { Link } from \'next/link\';');
      fixed = true;
      log(`Fixed duplicate Link imports in ${filePath}`, 'yellow');
    }

    // Fix 3: Fix unterminated strings
    const unterminatedStringRegex = /(['"])([^'"]*?)(?:\n|$)/g;
    if (unterminatedStringRegex.test(content)) {
      content = content.replace(unterminatedStringRegex, '$1$2$1');
      fixed = true;
      log(`Fixed unterminated strings in ${filePath}`, 'yellow');
    }

    // Fix 4: Fix unexpected keyword 'import' in wrong places
    const unexpectedImportRegex = /(\w+)\s*\nimport\s+/g;
    if (unexpectedImportRegex.test(content)) {
      content = content.replace(unexpectedImportRegex, '$1;\nimport ');
      fixed = true;
      log(`Fixed unexpected import placement in ${filePath}`, 'yellow');
    }

    // Fix 5: Fix unexpected keyword 'export' in wrong places
    const unexpectedExportRegex = /(\w+)\s*\nexport\s+/g;
    if (unexpectedExportRegex.test(content)) {
      content = content.replace(unexpectedExportRegex, '$1;\nexport ');
      fixed = true;
      log(`Fixed unexpected export placement in ${filePath}`, 'yellow');
    }

    // Fix 6: Fix missing semicolons before return statements
    const missingSemicolonBeforeReturnRegex = /(\w+)\s*\nreturn\s+/g;
    if (missingSemicolonBeforeReturnRegex.test(content)) {
      content = content.replace(missingSemicolonBeforeReturnRegex, '$1;\nreturn ');
      fixed = true;
      log(`Fixed missing semicolon before return in ${filePath}`, 'yellow');
    }

    // Fix 7: Fix JSX closing tag issues
    const jsxClosingTagRegex = /<(\w+)([^>]*)\/>\s*\n<\/\1>/g;
    if (jsxClosingTagRegex.test(content)) {
      content = content.replace(jsxClosingTagRegex, '<$1$2></$1>');
      fixed = true;
      log(`Fixed JSX closing tag issues in ${filePath}`, 'yellow');
    }

    // Fix 8: Fix missing commas in object/array literals
    const missingCommaRegex = /(\w+)\s*\n\s*(\w+):/g;
    if (missingCommaRegex.test(content)) {
      content = content.replace(missingCommaRegex, '$1,\n  $2:');
      fixed = true;
      log(`Fixed missing commas in ${filePath}`, 'yellow');
    }

    // Fix 9: Fix unterminated comments
    const unterminatedCommentRegex = /\/\*([^*]*?)(?:\n|$)/g;
    if (unterminatedCommentRegex.test(content)) {
      content = content.replace(unterminatedCommentRegex, '/*$1*/');
      fixed = true;
      log(`Fixed unterminated comments in ${filePath}`, 'yellow');
    }

    // Fix 10: Fix duplicate exports
    const duplicateExportRegex = /export\s+default\s+(\w+);?\s*\nexport\s+default\s+\1;?/g;
    if (duplicateExportRegex.test(content)) {
      content = content.replace(duplicateExportRegex, 'export default $1;');
      fixed = true;
      log(`Fixed duplicate exports in ${filePath}`, 'yellow');
    }

    if (fixed && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      log(`✅ Fixed syntax issues in ${filePath}`, 'green');
      return true;
    }

    return false;
  } catch (error) {
    log(`❌ Error fixing ${filePath}: ${error.message}`, 'red');
    return false;
  }
}

function scanAndFixDirectory(dirPath, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  let totalFiles = 0;
  let fixedFiles = 0;

  function processDirectory(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other common directories
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            processDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            totalFiles++;
            if (fixFile(fullPath)) {
              fixedFiles++;
            }
          }
        }
      }
    } catch (error) {
      log(`❌ Error processing directory ${currentPath}: ${error.message}`, 'red');
    }
  }

  processDirectory(dirPath);
  return { totalFiles, fixedFiles };
}

function main() {
  log('🔧 Advanced Syntax Fixer Starting...', 'cyan');
  
  const sourceDirs = ['src', 'pages', 'components', 'utils', 'hooks', 'types'];
  let totalProcessed = 0;
  let totalFixed = 0;

  for (const dir of sourceDirs) {
    if (fs.existsSync(dir)) {
      log(`\n📁 Processing directory: ${dir}`, 'blue');
      const { totalFiles, fixedFiles } = scanAndFixDirectory(dir);
      totalProcessed += totalFiles;
      totalFixed += fixedFiles;
    }
  }

  log(`\n🎯 Summary:`, 'cyan');
  log(`   Total files processed: ${totalProcessed}`, 'white');
  log(`   Files fixed: ${totalFixed}`, 'green');
  log(`   Files unchanged: ${totalProcessed - totalFixed}`, 'white');

  if (totalFixed > 0) {
    log(`\n✅ Advanced syntax fixing completed!`, 'green');
    log(`   Run 'npm run lint' again to check for remaining issues.`, 'yellow');
  } else {
    log(`\nℹ️  No syntax issues found that could be automatically fixed.`, 'blue');
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, scanAndFixDirectory };