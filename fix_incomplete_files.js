#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix incomplete files by adding missing closing parts
function fixIncompleteFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file ends abruptly without proper closing
    if (!content.trim().endsWith('};') && !content.trim().endsWith('export default')) {
      console.log(`Fixing incomplete file: ${filePath}`);
      
      // Add the missing closing parts
      const fixedContent = content.trim() + `
  );
};

export default AiAutomationPage;`;
      
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files that might be incomplete
function findIncompleteFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          // Check if file is incomplete (doesn't end with proper closing)
          if (!content.trim().endsWith('};') && !content.trim().endsWith('export default') && 
              content.includes('const ') && content.includes('React.FC')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Searching for incomplete files...');
const incompleteFiles = findIncompleteFiles(process.cwd());

if (incompleteFiles.length === 0) {
  console.log('✅ No incomplete files found.');
  process.exit(0);
}

console.log(`📁 Found ${incompleteFiles.length} potentially incomplete files:`);
incompleteFiles.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Fixing incomplete files...');
let fixedCount = 0;

incompleteFiles.forEach(file => {
  if (fixIncompleteFile(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Successfully fixed ${fixedCount} files.`);