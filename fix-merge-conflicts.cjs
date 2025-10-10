#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files with merge conflict markers
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Resolve merge conflicts by choosing HEAD version
function resolveMergeConflicts(filePath) {
  console.log(`Fixing merge conflicts in: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Remove merge conflict markers and keep HEAD version
  content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g, '$1');
  
  // Clean up any remaining conflict markers
  content = content.replace(/<<<<<<< HEAD\n?/g, '');
  content = content.replace(/=======\n?/g, '');
  content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
  
  // Clean up any orphaned markers
  content = content.replace(/<<<<<<< [^\n]+\n?/g, '');
  content = content.replace(/=======\n?/g, '');
  content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
  
  // Fix common JSX issues that might result from merge conflicts
  content = content.replace(/<>\s*<>\s*/g, '<>');
  content = content.replace(/\s*<\/>\s*<\/>/g, '</>');
  
  // Remove empty lines that might have been left behind
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed merge conflicts in: ${filePath}`);
    return true;
  }
  
  return false;
}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts('./app');

if (filesWithConflicts.length === 0) {
  console.log('✅ No files with merge conflicts found.');
  process.exit(0);
}

console.log(`Found ${filesWithConflicts.length} files with merge conflicts:`);
filesWithConflicts.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Resolving merge conflicts...');
let fixedCount = 0;

for (const file of filesWithConflicts) {
  try {
    if (resolveMergeConflicts(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${file}:`, error.message);
  }
}

console.log(`\n✅ Fixed merge conflicts in ${fixedCount} files.`);

// Run type check to see if there are any remaining issues
console.log('\n🔍 Running type check...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
  console.log('✅ Type check passed!');
} catch (error) {
  console.log('⚠️  Type check failed. There may be additional issues to fix.');
}