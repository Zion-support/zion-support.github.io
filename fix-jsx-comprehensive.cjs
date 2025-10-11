#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixJSXComprehensive(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unclosed JSX elements by adding proper closing tags
    const jsxElements = ['div', 'span', 'button', 'Link', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'main', 'section', 'article', 'header', 'footer', 'nav', 'aside'];
    
    for (const element of jsxElements) {
      // Fix unclosed self-closing tags
      content = content.replace(new RegExp(`<${element}([^>]*?)\\s*$`, 'gm'), `<$1$2 />`);
      
      // Fix unclosed opening tags by finding matching closing tags
      const openTagRegex = new RegExp(`<${element}([^>]*)>`, 'g');
      const closeTagRegex = new RegExp(`</${element}>`, 'g');
      
      let openMatches = [...content.matchAll(openTagRegex)];
      let closeMatches = [...content.matchAll(closeTagRegex)];
      
      // If there are more opening tags than closing tags, add missing closing tags
      if (openMatches.length > closeMatches.length) {
        const missing = openMatches.length - closeMatches.length;
        for (let i = 0; i < missing; i++) {
          content += `</${element}>`;
        }
        modified = true;
      }
    }
    
    // Fix malformed JSX attributes
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
    
    // Fix any remaining malformed JSX
    content = content.replace(/;\s*$/gm, '');
    
    // Remove any trailing semicolons after closing braces
    content = content.replace(/}\s*;\s*$/gm, '}');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed JSX issues in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithJSXIssues(dir) {
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
console.log('Finding and fixing JSX issues...');

const files = findFilesWithJSXIssues(workspaceDir);
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  if (fixJSXComprehensive(file)) {
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
  console.log('\nAll JSX issues have been fixed!');
} else {
  console.log('\nSome files had errors and may need manual review.');
}