const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix all comment-related syntax errors
function fixAllComments(content) {
  // Fix unterminated JSX tags with comments
  content = content.replace(/<([^>]*?)<\/\/ Comment/g, '<$1>');
  content = content.replace(/<([^>]*?)<\/\/ Comment/g, '<$1>');
  content = content.replace(/<([^>]*?)<\/\/ Comment/g, '<$1>');
  
  // Fix missing closing tags
  content = content.replace(/<h1>([^<]*?)<\/\/ Comment/g, '<h1>$1</h1>');
  content = content.replace(/<h2>([^<]*?)<\/\/ Comment/g, '<h2>$1</h2>');
  content = content.replace(/<h3>([^<]*?)<\/\/ Comment/g, '<h3>$1</h3>');
  content = content.replace(/<p>([^<]*?)<\/\/ Comment/g, '<p>$1</p>');
  content = content.replace(/<div>([^<]*?)<\/\/ Comment/g, '<div>$1</div>');
  
  // Fix missing closing braces
  content = content.replace(/<([^>]*?)<\/\/ Comment/g, '<$1>');
  
  // Fix unterminated string literals
  content = content.replace(/import\s+.*?from\s+['"]([^'"]*?)<\/\/ Comment/g, 'import React from \'react\';');
  content = content.replace(/import\s+.*?from\s+['"]([^'"]*?)<\/\/ Comment/g, 'import React from \'react\';');
  
  return content;
}

// Main function
async function fixAllComments() {
  console.log('🔧 Fixing all comment-related syntax errors...');
  
  const patterns = [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'api/**/*.{ts,tsx}',
    '__tests__/**/*.{ts,tsx}',
    '*.{ts,tsx}'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = glob.sync(pattern, { 
      ignore: [
        'node_modules/**',
        'dist/**',
        '.next/**',
        'backup*/**',
        'app-broken/**',
        'app-disabled/**',
        'corrupted-src-backup/**'
      ]
    });
    
    for (const filePath of files) {
      try {
        totalFiles++;
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixAllComments(content);
        
        if (content !== fixedContent) {
          fs.writeFileSync(filePath, fixedContent, 'utf8');
          fixedFiles++;
          console.log(`✅ Fixed: ${filePath}`);
        }
      } catch (error) {
        console.log(`❌ Error processing ${filePath}: ${error.message}`);
      }
    }
  }
  
  console.log(`\n🎉 All comment fixes completed!`);
  console.log(`📊 Processed: ${totalFiles} files`);
  console.log(`🔧 Fixed: ${fixedFiles} files`);
}

fixAllComments().catch(console.error);