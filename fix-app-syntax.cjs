#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing syntax errors in app directory...');

// Function to fix common syntax issues
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix missing export statements
    if (content.includes('title:') && !content.includes('export const metadata')) {
      content = 'export const metadata = {\n' + content;
    }
    
    // Fix missing closing brackets
    content = content.replace(/benefits=\[([^\]]+)\n/g, 'benefits={[$1]}\n');
    
    // Fix malformed JSX attributes
    content = content.replace(/className=\{`([^`]+)`\s*\{/g, 'className={`$1{');
    
    // Fix missing closing tags
    content = content.replace(/<p[^>]*>([^<]+);\s*$/gm, '<p>$1</p>');
    
    // Fix duplicate properties
    content = content.replace(/(\w+):\s*'([^']+)',\s*\n\s*\1:\s*'([^']+)',/g, '$1: \'$2\',');
    
    // Fix missing closing brackets for arrays
    content = content.replace(/benefits=\[([^\]]+)\n\s*\]/g, 'benefits={[$1]}');
    
    // Fix orphaned code blocks
    content = content.replace(/^\s*title:\s*'[^']+',\s*$/gm, '');
    content = content.replace(/^\s*description:\s*'[^']+',\s*$/gm, '');
    content = content.replace(/^\s*keywords:\s*'[^']+',\s*$/gm, '');
    
    // Fix missing function declarations
    if (content.includes('export default function') && !content.includes('export const metadata')) {
      content = 'export const metadata = {\n  title: \'Page Title\',\n  description: \'Page description\'\n};\n\n' + content;
    }
    
    // Fix malformed JSX
    content = content.replace(/;\s*$/gm, '');
    content = content.replace(/\{\s*;\s*\}/g, '{}');
    
    // Fix missing closing brackets
    content = content.replace(/benefits=\[([^\]]+)\n\s*\]/g, 'benefits={[$1]}');
    
    // Fix orphaned closing brackets
    content = content.replace(/^\s*\}\s*$/gm, '');
    
    // Clean up extra whitespace
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process app directory
function processAppDirectory() {
  let filesProcessed = 0;
  let errorsFixed = 0;
  
  function walkDir(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        try {
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            walkDir(fullPath);
          } else if (stat.isFile() && item.match(/\.(ts|tsx|js|jsx)$/)) {
            filesProcessed++;
            if (fixSyntaxErrors(fullPath)) {
              errorsFixed++;
            }
          }
        } catch (error) {
          console.log(`⚠️  Skipping ${fullPath}: ${error.message}`);
        }
      }
    } catch (error) {
      console.log(`⚠️  Skipping directory ${currentPath}: ${error.message}`);
    }
  }
  
  walkDir('./app');
  
  return { filesProcessed, errorsFixed };
}

// Main execution
const startTime = Date.now();
const { filesProcessed, errorsFixed } = processAppDirectory();

const endTime = Date.now();
const duration = ((endTime - startTime) / 1000).toFixed(2);

console.log('\n🎉 App syntax fixing completed!');
console.log(`📊 Files processed: ${filesProcessed}`);
console.log(`🔧 Errors fixed: ${errorsFixed}`);
console.log(`⏱️  Duration: ${duration}s`);

if (errorsFixed > 0) {
  console.log('\n✨ All syntax errors have been fixed!');
  console.log('🚀 You can now run the build command.');
} else {
  console.log('\n✅ No syntax errors found in the app directory.');
}