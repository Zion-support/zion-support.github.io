#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing closing tags
  // Look for patterns like: <section>...<div>...</div> (missing </section>)
  // This is a simplified approach - in practice, you'd want a proper parser
  
  // Fix common JSX issues
  fixed = fixed.replace(/(<section[^>]*>[\s\S]*?<div[^>]*>[\s\S]*?<\/div>)(?!\s*<\/section>)/g, '$1\n        </section>');
  
  // Fix missing closing tags for main elements
  fixed = fixed.replace(/(<main[^>]*>[\s\S]*?)(?!\s*<\/main>)(?=\s*<\/div>\s*<\/div>\s*<\/div>)/g, '$1\n        </main>');
  
  // Fix extra closing divs
  fixed = fixed.replace(/(<\/div>\s*){3,}/g, '</div>\n        </div>\n      </div>');
  
  // Fix missing semicolons in JSX
  fixed = fixed.replace(/(\w+)\s*(\n\s*<\/)/g, '$1;\n$2');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/(\w+)\s*(\n\s*<)/g, '$1;\n$2');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with TypeScript errors
function findFilesWithErrors() {
  try {
    const result = execSync('pnpm run type-check 2>&1 | grep "error TS" | cut -d: -f1 | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    return [];
  }
}

// Main execution
function main() {
  console.log('🔍 Finding files with TypeScript errors...');
  const filesWithErrors = findFilesWithErrors();
  
  if (filesWithErrors.length === 0) {
    console.log('✅ No files with TypeScript errors found!');
    return;
  }
  
  console.log(`📁 Found ${filesWithErrors.length} files with TypeScript errors:`);
  filesWithErrors.forEach(file => console.log(`  - ${file}`));
  
  console.log('\n🔧 Fixing syntax errors...');
  let fixedCount = 0;
  
  filesWithErrors.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n✅ Successfully fixed syntax errors in ${fixedCount} files`);
  
  // Verify errors are fixed
  const remainingErrors = findFilesWithErrors();
  if (remainingErrors.length === 0) {
    console.log('🎉 All TypeScript errors have been fixed!');
  } else {
    console.log(`⚠️  ${remainingErrors.length} files still have errors:`);
    remainingErrors.forEach(file => console.log(`  - ${file}`));
  }
}

main();