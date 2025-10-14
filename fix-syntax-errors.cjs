#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix common syntax errors in TSX files
function fixTsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed Helmet tags
    if (content.includes('<Helmet></Helmet>')) {
      content = content.replace(/<Helmet><\/Helmet>\s*<title>/g, '<Helmet>\n        <title>');
      content = content.replace(/<Helmet><\/Helmet>\s*<meta/g, '<Helmet>\n        <meta');
      modified = true;
    }

    // Fix unterminated string literals
    content = content.replace(/"([^"]*)\n/g, '"$1"\n');
    content = content.replace(/'([^']*)\n/g, "'$1'\n");

    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1></section>');
    content = content.replace(/<button([^>]*)>\s*$/gm, '<button$1></button>');

    // Fix JSX expressions without parent elements
    content = content.replace(/return\s*\(\s*<div([^>]*)>\s*<Helmet/g, 'return (\n    <div$1>\n      <Helmet');

    // Fix missing semicolons and commas
    content = content.replace(/(\w+)\s*=\s*\{([^}]*)\}\s*$/gm, '$1: {$2},');
    content = content.replace(/(\w+)\s*:\s*([^,}]+)\s*$/gm, '$1: $2,');

    // Fix malformed function parameters
    content = content.replace(/React\.ChangeEvent<HTMLInputElement \| HTMLTextAreaElement><\/HTMLInputElement>/g, 'React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>');

    // Fix array syntax issues
    content = content.replace(/\[\s*"([^"]*)"\s*$/gm, '["$1"]');
    content = content.replace(/\[\s*{/gm, '[{');
    content = content.replace(/}\s*\]/gm, '}]');

    // Fix object syntax issues
    content = content.replace(/{\s*"([^"]*)"\s*$/gm, '{"$1"');
    content = content.replace(/}\s*$/gm, '},');

    // Fix missing closing parentheses
    content = content.replace(/\(\s*$/gm, '()');

    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*)\s*$/gm, 'className="$1"');
    content = content.replace(/href="([^"]*)\s*$/gm, 'href="$1"');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TSX files
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
console.log('Starting comprehensive syntax fix...');

const appDir = path.join(process.cwd(), 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixTsxFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);

// Run type check to see remaining errors
console.log('\nRunning type check...');
try {
  execSync('npm run type-check', { stdio: 'pipe' });
  console.log('Type check passed!');
} catch (error) {
  const errorOutput = error.stdout?.toString() || error.stderr?.toString() || '';
  const errorCount = (errorOutput.match(/error TS/g) || []).length;
  console.log(`Type check found ${errorCount} errors`);
}
