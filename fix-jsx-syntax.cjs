#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all TypeScript/JSX files
function findTsxFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Fix common JSX syntax issues
function fixJsxSyntax(filePath) {
  console.log(`Fixing JSX syntax in: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Fix unclosed JSX tags by adding proper closing tags
  // This is a basic approach - we'll need to be more sophisticated for complex cases
  
  // Remove orphaned JSX fragments
  content = content.replace(/<>\s*<\/>/g, '');
  
  // Fix common JSX syntax issues
  content = content.replace(/\s*<>\s*<>\s*/g, '<>');
  content = content.replace(/\s*<\/>\s*<\/>\s*/g, '</>');
  
  // Fix missing closing tags for common elements
  const openTags = ['div', 'section', 'article', 'main', 'header', 'footer', 'nav', 'aside'];
  
  for (const tag of openTags) {
    // Count opening and closing tags
    const openMatches = content.match(new RegExp(`<${tag}[^>]*>`, 'g'));
    const closeMatches = content.match(new RegExp(`</${tag}>`, 'g'));
    
    const openCount = openMatches ? openMatches.length : 0;
    const closeCount = closeMatches ? closeMatches.length : 0;
    
    if (openCount > closeCount) {
      console.log(`  - Adding ${openCount - closeCount} closing </${tag}> tags`);
      // Add missing closing tags at the end of the component
      const missingTags = '</' + tag + '>'.repeat(openCount - closeCount);
      content = content.replace(/(\s*)(<\/>)?(\s*)$/, `$1${missingTags}$2$3`);
    }
  }
  
  // Fix JSX fragment issues
  content = content.replace(/<>\s*<\/>/g, '');
  
  // Remove any remaining orphaned opening tags that don't have proper structure
  content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>\s*$/gm, '');
  
  // Clean up multiple consecutive empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  // Remove any remaining syntax issues from merge conflicts
  content = content.replace(/\s*<>\s*$/gm, '');
  content = content.replace(/^\s*<\/>\s*$/gm, '');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed JSX syntax in: ${filePath}`);
    return true;
  }
  
  return false;
}

// Main execution
console.log('🔍 Searching for TypeScript/JSX files...');
const tsxFiles = findTsxFiles('./app');

console.log(`Found ${tsxFiles.length} TypeScript/JSX files`);

console.log('\n🔧 Fixing JSX syntax issues...');
let fixedCount = 0;

for (const file of tsxFiles) {
  try {
    if (fixJsxSyntax(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${file}:`, error.message);
  }
}

console.log(`\n✅ Fixed JSX syntax in ${fixedCount} files.`);

// Run type check to see if there are any remaining issues
console.log('\n🔍 Running type check...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
  console.log('✅ Type check passed!');
} catch (error) {
  console.log('⚠️  Type check failed. There may be additional issues to fix.');
}