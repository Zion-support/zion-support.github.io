#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Remove extra closing div tags at the end of files
  fixed = fixed.replace(/\s*<\/div>\s*$/gm, '');
  fixed = fixed.replace(/\s*<\/div>\s*<\/div>\s*$/gm, '');
  fixed = fixed.replace(/\s*<\/div>\s*<\/div>\s*<\/div>\s*$/gm, '');
  fixed = fixed.replace(/\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*$/gm, '');
  fixed = fixed.replace(/\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*$/gm, '');
  
  // Fix malformed button tags
  fixed = fixed.replace(/>\s*<\/button>\s*<\/button>/g, '>');
  fixed = fixed.replace(/>\s*<\/button>\s*<\/button>\s*<\/button>/g, '>');
  
  // Fix unclosed tags
  fixed = fixed.replace(/(<[^>]+>)\s*$/gm, '$1');
  
  // Remove extra whitespace at end of files
  fixed = fixed.replace(/\s+$/, '');
  
  return fixed;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix TypeScript/JSX files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('🔧 Starting comprehensive syntax error fixes...');

const srcDir = path.join(__dirname, 'src');
if (fs.existsSync(srcDir)) {
  const fixedCount = fixFilesInDirectory(srcDir);
  console.log(`🎉 Fixed ${fixedCount} files`);
} else {
  console.log('❌ src directory not found');
}

console.log('✅ Comprehensive syntax error fixes completed!');