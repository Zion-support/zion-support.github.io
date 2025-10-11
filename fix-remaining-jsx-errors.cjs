#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix remaining JSX syntax errors
function fixRemainingJsxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix 1: Fix semicolons in JSX text content
    content = content.replace(/;\s*<\/\s*$/gm, '</span>');
    content = content.replace(/;\s*<\/\s*$/gm, '</div>');
    content = content.replace(/;\s*<\/\s*$/gm, '</section>');
    content = content.replace(/;\s*<\/\s*$/gm, '</main>');
    content = content.replace(/;\s*<\/\s*$/gm, '</article>');
    content = content.replace(/;\s*<\/\s*$/gm, '</header>');
    content = content.replace(/;\s*<\/\s*$/gm, '</footer>');
    content = content.replace(/;\s*<\/\s*$/gm, '</nav>');
    
    // Fix 2: Fix incomplete JSX tags
    content = content.replace(/<\s*$/gm, '');
    content = content.replace(/\/\s*$/gm, '');
    content = content.replace(/<\/\s*$/gm, '');
    
    // Fix 3: Fix malformed className attributes
    content = content.replace(/className=\s*$/gm, 'className=""');
    
    // Fix 4: Fix specific patterns
    content = content.replace(/Home;\s*$/gm, 'Home');
    content = content.replace(/About;\s*$/gm, 'About');
    content = content.replace(/Services;\s*$/gm, 'Services');
    content = content.replace(/Contact;\s*$/gm, 'Contact');
    content = content.replace(/Privacy Policy;\s*$/gm, 'Privacy Policy');
    content = content.replace(/Terms of Service;\s*$/gm, 'Terms of Service');
    content = content.replace(/Cookie Policy;\s*$/gm, 'Cookie Policy');
    
    // Fix 5: Fix incomplete closing tags
    content = content.replace(/;\s*<\//gm, '</');
    
    // Fix 6: Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed remaining JSX errors in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with JSX errors
function findFilesWithJsxErrors() {
  try {
    const { execSync } = require('child_process');
    const result = execSync('find . -name "*.tsx" -o -name "*.jsx" | grep -v node_modules | head -50', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    return [];
  }
}

// Main execution
console.log('🔧 Starting remaining JSX error fixes...\n');

const filesToFix = findFilesWithJsxErrors();
console.log(`Found ${filesToFix.length} JSX files to check:\n`);

let fixedCount = 0;
let totalFiles = filesToFix.length;

filesToFix.forEach((filePath, index) => {
  console.log(`[${index + 1}/${totalFiles}] Processing ${filePath}`);
  
  if (fixRemainingJsxErrors(filePath)) {
    fixedCount++;
  }
});

console.log(`\n✅ Remaining JSX fixes complete!`);
console.log(`📊 Fixed errors in ${fixedCount} out of ${totalFiles} files`);