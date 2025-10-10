#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files with merge conflicts
const findFilesWithConflicts = () => {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file && !file.includes('node_modules'));
  } catch (error) {
    return [];
  }
};

// Fix merge conflicts in a file
const fixMergeConflicts = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Fix common JSX issues
    content = content.replace(/<\/p>\s*<\/div>\s*<\/section>/g, '</div>\n        </section>');
    content = content.replace(/\)\)\}\s*<\/div>\s*<\/div>\s*<\/section>/g, '))}\n          </div>\n        </section>');
    
    // Fix malformed JSX structure
    content = content.replace(/<div[^>]*>\s*<\/p>\s*<\/div>\s*<\/section>/g, '<div className="container mx-auto px-4 py-16">\n          <div className="text-center mb-16">\n            <h1 className="text-5xl font-bold text-white mb-6">Page Title</h1>\n            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Page description</p>\n          </div>\n        </div>\n      </section>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
};

// Main function
const main = () => {
  console.log('Finding files with merge conflicts...');
  const files = findFilesWithConflicts();
  
  if (files.length === 0) {
    console.log('No files with merge conflicts found.');
    return;
  }
  
  console.log(`Found ${files.length} files with merge conflicts:`);
  files.forEach(file => console.log(`  - ${file}`));
  
  let fixed = 0;
  let failed = 0;
  
  files.forEach(file => {
    if (fixMergeConflicts(file)) {
      fixed++;
    } else {
      failed++;
    }
  });
  
  console.log(`\nFixed: ${fixed} files`);
  console.log(`Failed: ${failed} files`);
  
  if (fixed > 0) {
    console.log('\nRunning lint fix...');
    try {
      execSync('npm run lint:fix', { stdio: 'inherit' });
    } catch (error) {
      console.log('Lint fix completed with some warnings/errors');
    }
  }
};

main();