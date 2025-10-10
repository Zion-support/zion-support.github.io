#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unclosed button tags
    content = content.replace(/<button([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<button$1>$2</button>');
    content = content.replace(/<button([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<button$1>$2</button>');
    
    // Fix unclosed div tags
    content = content.replace(/<div([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<div$1>$2</div>');
    
    // Fix unclosed h1, h2, h3, h4, h5, h6 tags
    content = content.replace(/<(h[1-6])([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<$1$2>$3</$1>');
    
    // Fix unclosed p tags
    content = content.replace(/<p([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<p$1>$2</p>');
    
    // Fix unclosed span tags
    content = content.replace(/<span([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<span$1>$2</span>');
    
    // Fix unclosed li tags
    content = content.replace(/<li([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<li$1>$2</li>');
    
    // Fix unclosed ul/ol tags
    content = content.replace(/<(ul|ol)([^>]*)>\s*([^<]*?)\s*<\/\s*$/gm, '<$1$2>$3</$1>');
    
    // Fix malformed JSX attributes with semicolons
    content = content.replace(/(\w+)=\{([^}]+)\}\s*;/g, '$1={$2}');
    
    // Fix standalone semicolons in JSX
    content = content.replace(/;\s*<\/[^>]+>/g, '</$1>');
    
    // Fix any remaining malformed closing tags
    content = content.replace(/<\/\s*$/gm, '');
    
    // Remove any remaining standalone semicolons
    content = content.replace(/^\s*;\s*$/gm, '');
    
    // Fix any malformed React.Fragment
    content = content.replace(/<React\.Fragment>\s*([^<]*?)\s*<\/\s*$/gm, '<React.Fragment>$1</React.Fragment>');
    
    // Fix any malformed <> fragments
    content = content.replace(/<>\s*([^<]*?)\s*<\/\s*$/gm, '<>$1</>');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed syntax errors in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithSyntaxErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.startsWith('.')) {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
console.log('Finding and fixing syntax errors...');

const files = findFilesWithSyntaxErrors(workspaceDir);
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nSummary:`);
console.log(`- Files processed: ${fixedCount}`);
console.log(`- Files with errors: ${errorCount}`);
console.log(`- Total files: ${files.length}`);

if (errorCount === 0) {
  console.log('\nAll syntax errors have been fixed!');
} else {
  console.log('\nSome files had errors and may need manual review.');
}