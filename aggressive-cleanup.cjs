#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Starting aggressive merge conflict cleanup...');

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove all merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Clean up malformed syntax
    content = content.replace(/;\s*;+/g, ';');
    content = content.replace(/\{\s*;\s*\}/g, '{}');
    content = content.replace(/\(\s*;\s*\)/g, '()');
    content = content.replace(/,\s*;\s*/g, ', ');
    content = content.replace(/:\s*;\s*/g, ': ');
    content = content.replace(/=\s*;\s*/g, '= ');
    content = content.replace(/\s+;\s*$/gm, ';');
    content = content.replace(/;\s*$/gm, ';');
    
    // Clean up malformed JSX
    content = content.replace(/<(\w+):\s*className/g, '<$1 className');
    content = content.replace(/<(\w+):\s*(\w+)/g, '<$1 $2');
    content = content.replace(/className\s*=\s*"([^"]*)"\s*;/g, 'className="$1"');
    content = content.replace(/className\s*=\s*'([^']*)'\s*;/g, "className='$1'");
    
    // Clean up malformed function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\(\{\}\s*,\s*\)/g, 'const $1 = () => {}');
    content = content.replace(/const\s+(\w+)\s*=\s*\(\{\}\s*\)/g, 'const $1 = () => {}');
    
    // Clean up malformed imports
    content = content.replace(/import\s+([^;]+);\s*;+/g, 'import $1;');
    content = content.replace(/from\s+['"]([^'"]+)['"]\s*;\s*;+/g, "from '$1';");
    
    // Clean up malformed exports
    content = content.replace(/export\s+default\s+([^;]+);\s*;+/g, 'export default $1;');
    
    // Remove empty lines with just semicolons
    content = content.replace(/^\s*;\s*$/gm, '');
    
    // Clean up multiple consecutive empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Clean up malformed strings
    content = content.replace(/"([^"]*)\n([^"]*)"([^"]*)\n([^"]*)"/g, '"$1$2$3$4"');
    content = content.replace(/'([^']*)\n([^']*)'([^']*)\n([^']*)'/g, "'$1$2$3$4'");
    
    // Clean up malformed JSX tags
    content = content.replace(/<(\w+)\s*:\s*([^>]+)>/g, '<$1 $2>');
    content = content.replace(/<\/\s*(\w+)\s*:\s*>/g, '</$1>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Cleaned: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to get all files with merge conflicts
function getFilesWithConflicts() {
  try {
    const result = execSync('grep -r ">>>>>>> " app/ --include="*.tsx" --include="*.ts" | cut -d: -f1 | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.trim());
  } catch (error) {
    return [];
  }
}

// Main cleanup process
function main() {
  const filesWithConflicts = getFilesWithConflicts();
  
  if (filesWithConflicts.length === 0) {
    console.log('✅ No files with merge conflicts found!');
    return;
  }
  
  console.log(`📁 Found ${filesWithConflicts.length} files with merge conflicts`);
  
  let cleanedCount = 0;
  let errorCount = 0;
  
  filesWithConflicts.forEach(file => {
    if (cleanMergeConflicts(file)) {
      cleanedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\n📊 Cleanup Summary:`);
  console.log(`✅ Successfully cleaned: ${cleanedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  
  // Check if there are still conflicts
  const remainingConflicts = getFilesWithConflicts();
  if (remainingConflicts.length > 0) {
    console.log(`\n⚠️  Still ${remainingConflicts.length} files with conflicts remaining`);
    console.log('First 10 remaining files:');
    remainingConflicts.slice(0, 10).forEach(file => console.log(`  - ${file}`));
  } else {
    console.log('\n🎉 All merge conflicts cleaned successfully!');
  }
}

main();