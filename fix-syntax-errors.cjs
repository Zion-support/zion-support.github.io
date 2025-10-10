#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(filePath) {
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

    // Fix unclosed h1, h2, button, p tags
    const unclosedTags = ['h1', 'h2', 'h3', 'button', 'p', 'div', 'section'];
    unclosedTags.forEach(tag => {
      const regex = new RegExp(`<${tag}[^>]*>([^<]*);\\s*</${tag}>`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, `<${tag}$1</${tag}>`);
        modified = true;
      }
    });

    // Fix JSX fragments that are not properly closed
    const fragmentRegex = /<>\s*<Helmet>[\s\S]*?<\/Helmet>\s*<Navigation\s*>\s*<div/g;
    if (fragmentRegex.test(content)) {
      content = content.replace(fragmentRegex, '<>\n      <Helmet>[\s\S]*?<\/Helmet>\n      <Navigation />\n      <div');
      modified = true;
    }

    // Fix missing closing tags in JSX
    const missingClosingTags = /<(\w+)[^>]*>([^<]*);\s*<\/\1>/g;
    if (missingClosingTags.test(content)) {
      content = content.replace(missingClosingTags, '<$1>$2</$1>');
      modified = true;
    }

    // Fix object literal syntax errors
    const objectLiteralRegex = /}\s*}\s*]/g;
    if (objectLiteralRegex.test(content)) {
      content = content.replace(objectLiteralRegex, '}\n  ]');
      modified = true;
    }

    // Fix malformed JSX expressions
    const malformedJSX = /{\s*([^}]*);\s*}/g;
    if (malformedJSX.test(content)) {
      content = content.replace(malformedJSX, '{$1}');
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

// Function to find all TSX files with syntax errors
function findProblematicFiles() {
  try {
    // Get list of files with syntax errors from TypeScript compiler
    const result = execSync('pnpm run type-check 2>&1 | grep "error TS" | head -20', { 
      encoding: 'utf8',
      cwd: '/workspace'
    });
    
    const files = new Set();
    const lines = result.split('\n');
    
    lines.forEach(line => {
      const match = line.match(/^([^(]+)\(/);
      if (match) {
        files.add(match[1]);
      }
    });
    
    return Array.from(files);
  } catch (error) {
    console.log('Could not get TypeScript errors, using alternative method...');
    return [];
  }
}

// Main function
function main() {
  console.log('Starting syntax error fixes...');
  
  // Find problematic files
  const problematicFiles = findProblematicFiles();
  
  if (problematicFiles.length === 0) {
    console.log('No problematic files found via TypeScript compiler');
    // Fallback: check common patterns
    const commonPatterns = [
      'app/ai-3d-generation/page.tsx',
      'app/ai-agricultural-intelligence-pro/page.tsx',
      'app/ai-analytics-dashboard/page.tsx',
      'app/ai-analytics/page.tsx',
      'app/ai-api-management/page.tsx',
      'app/ai-api-manager/page.tsx',
      'app/ai-automation/page.tsx'
    ];
    
    problematicFiles.push(...commonPatterns);
  }
  
  let fixedCount = 0;
  
  problematicFiles.forEach(filePath => {
    const fullPath = path.join('/workspace', filePath);
    if (fs.existsSync(fullPath)) {
      if (fixSyntaxErrors(fullPath)) {
        fixedCount++;
      }
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, findProblematicFiles };