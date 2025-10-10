#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix all common syntax errors in TSX files
function fixAllSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix semicolons in arrays (replace ',;' with ',')
    const semicolonInArrayRegex = /,\s*;/g;
    if (semicolonInArrayRegex.test(content)) {
      content = content.replace(semicolonInArrayRegex, ',');
      modified = true;
    }

    // Fix semicolons at end of array items (replace ';' with ',' in arrays)
    const arraySemicolonRegex = /(\s+)([^,]+);(\s*)(\])/g;
    if (arraySemicolonRegex.test(content)) {
      content = content.replace(arraySemicolonRegex, '$1$2,$3$4');
      modified = true;
    }

    // Fix unclosed JSX tags - meta tags
    const unclosedMetaRegex = /<meta\s*>/g;
    if (unclosedMetaRegex.test(content)) {
      content = content.replace(unclosedMetaRegex, '<meta name="description" content="AI solutions" />');
      modified = true;
    }

    // Fix Navigation component without closing tag
    const navigationRegex = /<Navigation\s*>\s*<div/g;
    if (navigationRegex.test(content)) {
      content = content.replace(navigationRegex, '<Navigation />\n      <div');
      modified = true;
    }

    // Fix unclosed JSX tags with semicolons
    const unclosedTagRegex = /<(\w+)[^>]*>([^<]*);\s*<\/\1>/g;
    if (unclosedTagRegex.test(content)) {
      content = content.replace(unclosedTagRegex, '<$1>$2</$1>');
      modified = true;
    }

    // Fix JSX expressions with semicolons
    const jsxSemicolonRegex = /{\s*([^}]*);\s*}/g;
    if (jsxSemicolonRegex.test(content)) {
      content = content.replace(jsxSemicolonRegex, '{$1}');
      modified = true;
    }

    // Fix object literal syntax errors (extra closing braces)
    const objectLiteralRegex = /}\s*}\s*]/g;
    if (objectLiteralRegex.test(content)) {
      content = content.replace(objectLiteralRegex, '}\n  ]');
      modified = true;
    }

    // Fix missing commas in object literals
    const missingCommaRegex = /(\w+)\s*}\s*]/g;
    if (missingCommaRegex.test(content)) {
      content = content.replace(missingCommaRegex, '$1\n  }');
      modified = true;
    }

    // Fix malformed JSX fragments
    const fragmentRegex = /<>\s*<Helmet>[\s\S]*?<\/Helmet>\s*<Navigation\s*>\s*<div/g;
    if (fragmentRegex.test(content)) {
      content = content.replace(fragmentRegex, '<>\n      <Helmet>[\s\S]*?<\/Helmet>\n      <Navigation />\n      <div');
      modified = true;
    }

    // Fix specific patterns found in the errors
    // Fix h1, h2, button, p tags with semicolons
    const tagPatterns = ['h1', 'h2', 'h3', 'button', 'p', 'div', 'section'];
    tagPatterns.forEach(tag => {
      const regex = new RegExp(`<${tag}[^>]*>([^<]*);\\s*</${tag}>`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, `<${tag}>$1</${tag}>`);
        modified = true;
      }
    });

    // Fix CheckCircle and other icon components
    const iconRegex = /<CheckCircle\s*>/g;
    if (iconRegex.test(content)) {
      content = content.replace(iconRegex, '<CheckCircle className="w-4 h-4 text-teal-500" />');
      modified = true;
    }

    // Fix feature mapping with semicolons
    const featureMapRegex = /features\.map\(\(feature, index\) => \(\s*}\s*\)/g;
    if (featureMapRegex.test(content)) {
      content = content.replace(featureMapRegex, 'features.map((feature, index) => (');
      modified = true;
    }

    // Fix benefits mapping with semicolons
    const benefitsMapRegex = /feature\.benefits\.map\(\(benefit, idx\) => \(\s*}\s*\)/g;
    if (benefitsMapRegex.test(content)) {
      content = content.replace(benefitsMapRegex, 'feature.benefits.map((benefit, idx) => (');
      modified = true;
    }

    // Fix conditional rendering with semicolons
    const conditionalRegex = /feature\.benefits && \(\s*;/g;
    if (conditionalRegex.test(content)) {
      content = content.replace(conditionalRegex, 'feature.benefits && (');
      modified = true;
    }

    // Fix closing tags that are malformed
    const malformedClosingRegex = /}\s*\)\s*\)\s*\)/g;
    if (malformedClosingRegex.test(content)) {
      content = content.replace(malformedClosingRegex, '}\n                )\n              )');
      modified = true;
    }

    // Fix JSX expressions that should be strings
    const stringExpressionRegex = /{\s*'([^']+)'\s*}/g;
    if (stringExpressionRegex.test(content)) {
      content = content.replace(stringExpressionRegex, '$1');
      modified = true;
    }

    // Fix missing closing tags in complex JSX
    const complexJSXRegex = /<(\w+)[^>]*>\s*{([^}]+)}\s*<\/\1>/g;
    if (complexJSXRegex.test(content)) {
      content = content.replace(complexJSXRegex, '<$1>$2</$1>');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to get all TSX files in the app directory
function getAllTSXFiles() {
  const files = [];
  
  function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
        walkDir(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir('/workspace/app');
  return files;
}

// Main function
function main() {
  console.log('Starting comprehensive syntax error fixes...');
  
  const allFiles = getAllTSXFiles();
  console.log(`Found ${allFiles.length} TSX files to check`);
  
  let fixedCount = 0;
  
  allFiles.forEach(filePath => {
    if (fixAllSyntaxErrors(filePath)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
  
  // Run type check to see remaining errors
  console.log('\nRunning type check to see remaining errors...');
  try {
    execSync('pnpm run type-check', { 
      cwd: '/workspace',
      stdio: 'pipe'
    });
    console.log('Type check passed!');
  } catch (error) {
    console.log('Type check still has errors, but we fixed what we could.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixAllSyntaxErrors, getAllTSXFiles };