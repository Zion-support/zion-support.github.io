#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive syntax error fix...');

// Function to fix common syntax errors in a file
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  let hasChanges = false;

  // Fix semicolon instead of comma in function parameters
  const functionParamRegex = /\(([^)]*;.*?)\)/g;
  fixed = fixed.replace(functionParamRegex, (match, params) => {
    const fixedParams = params.replace(/;/g, ',');
    if (fixedParams !== params) {
      hasChanges = true;
      return `(${fixedParams})`;
    }
    return match;
  });

  // Fix semicolon instead of comma in object destructuring
  const destructuringRegex = /\{([^}]*;.*?)\}/g;
  fixed = fixed.replace(destructuringRegex, (match, props) => {
    const fixedProps = props.replace(/;/g, ',');
    if (fixedProps !== props) {
      hasChanges = true;
      return `{${fixedProps}}`;
    }
    return match;
  });

  // Fix object property separators
  const objectPropertyRegex = /(\w+):\s*([^,;]+);/g;
  fixed = fixed.replace(objectPropertyRegex, (match, key, value) => {
    hasChanges = true;
    return `${key}: ${value},`;
  });

  // Fix missing closing braces in objects
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    fixed += '}'.repeat(missingBraces);
    hasChanges = true;
  }

  // Fix missing closing parentheses in function calls
  const openParens = (fixed.match(/\(/g) || []).length;
  const closeParens = (fixed.match(/\)/g) || []).length;
  if (openParens > closeParens) {
    const missingParens = openParens - closeParens;
    fixed += ')'.repeat(missingParens);
    hasChanges = true;
  }

  // Fix unterminated string literals
  const singleQuotes = (fixed.match(/'/g) || []).length;
  const doubleQuotes = (fixed.match(/"/g) || []).length;
  
  if (singleQuotes % 2 !== 0) {
    fixed = fixed.replace(/'([^']*)$/, "'$1'");
    hasChanges = true;
  }
  
  if (doubleQuotes % 2 !== 0) {
    fixed = fixed.replace(/"([^"]*)$/, '"$1"');
    hasChanges = true;
  }

  // Fix common TypeScript syntax issues
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
    // Fix missing return type annotations
    fixed = fixed.replace(/function\s+(\w+)\s*\([^)]*\)\s*{/g, (match, funcName) => {
      if (!match.includes(':')) {
        hasChanges = true;
        return match.replace('{', ': any {');
      }
      return match;
    });

    // Fix arrow function return types
    fixed = fixed.replace(/=>\s*{/g, (match) => {
      if (!match.includes(':')) {
        hasChanges = true;
        return ': any => {';
      }
      return match;
    });
  }

  return { content: fixed, hasChanges };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, hasChanges } = fixSyntaxErrors(content, filePath);
    
    if (hasChanges) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', '.next', 'out', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
try {
  const sourceDir = process.cwd();
  const sourceFiles = findSourceFiles(sourceDir);
  
  console.log(`📁 Found ${sourceFiles.length} source files to process...`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of sourceFiles) {
    try {
      if (processFile(file)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`❌ Failed to process ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`✅ Files fixed: ${fixedCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`📁 Total files processed: ${sourceFiles.length}`);
  
  if (fixedCount > 0) {
    console.log('\n🔧 Running additional fixes...');
    
    // Run ESLint fix
    try {
      execSync('npm run fix:all', { stdio: 'inherit' });
      console.log('✅ ESLint fixes applied');
    } catch (error) {
      console.log('⚠️ ESLint fix had issues, continuing...');
    }
    
    // Run TypeScript check
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log('✅ TypeScript check passed');
    } catch (error) {
      console.log('⚠️ TypeScript check still has issues, but continuing...');
    }
  }
  
  console.log('\n🎉 Comprehensive syntax fix completed!');
  
} catch (error) {
  console.error('💥 Fatal error:', error.message);
  process.exit(1);
}