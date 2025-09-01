#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

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

    // Fix 1: Fix unterminated strings at the beginning of files
    // Look for files that start with unterminated strings
    const unterminatedStringStartRegex = /^(['"])([^'"]*?)(?:\n|$)/;
    if (unterminatedStringStartRegex.test(content)) {
      content = content.replace(unterminatedStringStartRegex, '$1$2$1');
      fixed = true;
      log(`Fixed unterminated string at start in ${filePath}`, 'yellow');
    }

    // Fix 2: Fix missing semicolons after import statements
    const missingSemicolonAfterImportRegex = /(import\s+[^;]+?)(\n)/g;
    if (missingSemicolonAfterImportRegex.test(content)) {
      content = content.replace(missingSemicolonAfterImportRegex, '$1;$2');
      fixed = true;
      log(`Fixed missing semicolons after imports in ${filePath}`, 'yellow');
    }

    // Fix 3: Fix unterminated string literals in TypeScript files
    const unterminatedStringLiteralRegex = /(['"])([^'"]*?)(?:\n|$)/g;
    if (unterminatedStringLiteralRegex.test(content)) {
      content = content.replace(unterminatedStringLiteralRegex, '$1$2$1');
      fixed = true;
      log(`Fixed unterminated string literals in ${filePath}`, 'yellow');
    }

    // Fix 4: Fix missing semicolons in object properties
    const missingSemicolonInObjectRegex = /(\w+):\s*([^;]+?)(\n\s*\w+:)/g;
    if (missingSemicolonInObjectRegex.test(content)) {
      content = content.replace(missingSemicolonInObjectRegex, '$1: $2;$3');
      fixed = true;
      log(`Fixed missing semicolons in objects in ${filePath}`, 'yellow');
    }

    // Fix 5: Fix unterminated comments
    const unterminatedCommentRegex = /\/\*([^*]*?)(?:\n|$)/g;
    if (unterminatedCommentRegex.test(content)) {
      content = content.replace(unterminatedCommentRegex, '/*$1*/');
      fixed = true;
      log(`Fixed unterminated comments in ${filePath}`, 'yellow');
    }

    // Fix 6: Fix missing semicolons before export statements
    const missingSemicolonBeforeExportRegex = /(\w+)\s*\nexport\s+/g;
    if (missingSemicolonBeforeExportRegex.test(content)) {
      content = content.replace(missingSemicolonBeforeExportRegex, '$1;\nexport ');
      fixed = true;
      log(`Fixed missing semicolon before export in ${filePath}`, 'yellow');
    }

    // Fix 7: Fix unterminated template literals
    const unterminatedTemplateLiteralRegex = /`([^`]*?)(?:\n|$)/g;
    if (unterminatedTemplateLiteralRegex.test(content)) {
      content = content.replace(unterminatedTemplateLiteralRegex, '`$1`');
      fixed = true;
      log(`Fixed unterminated template literals in ${filePath}`, 'yellow');
    }

    // Fix 8: Fix missing semicolons in function calls
    const missingSemicolonInFunctionCallRegex = /(\w+\([^)]*\))\s*\n/g;
    if (missingSemicolonInFunctionCallRegex.test(content)) {
      content = content.replace(missingSemicolonInFunctionCallRegex, '$1;\n');
      fixed = true;
      log(`Fixed missing semicolons in function calls in ${filePath}`, 'yellow');
    }

    // Fix 9: Fix unterminated JSX attributes
    const unterminatedJSXAttributeRegex = /(\w+)=["']([^"']*?)(?:\n|$)/g;
    if (unterminatedJSXAttributeRegex.test(content)) {
      content = content.replace(unterminatedJSXAttributeRegex, '$1="$2"');
      fixed = true;
      log(`Fixed unterminated JSX attributes in ${filePath}`, 'yellow');
    }

    // Fix 10: Fix missing semicolons in variable declarations
    const missingSemicolonInVarDeclRegex = /(const|let|var)\s+(\w+)\s*=\s*([^;]+?)(\n)/g;
    if (missingSemicolonInVarDeclRegex.test(content)) {
      content = content.replace(missingSemicolonInVarDeclRegex, '$1 $2 = $3;$4');
      fixed = true;
      log(`Fixed missing semicolons in variable declarations in ${filePath}`, 'yellow');
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
  log('🔧 Final Syntax Fixer Starting...', 'cyan');
  
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
    log(`\n✅ Final syntax fixing completed!`, 'green');
    log(`   Run 'npm run lint' again to check for remaining issues.`, 'yellow');
  } else {
    log(`\nℹ️  No syntax issues found that could be automatically fixed.`, 'blue');
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, scanAndFixDirectory };