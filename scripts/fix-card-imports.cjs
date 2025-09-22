#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing Card import statements...');

// Find all files that import Card incorrectly
const findFilesWithCardImport = () => {
  try {
    const result = execSync('grep -r "import Card from" app/ --include="*.tsx" --include="*.ts"', { encoding: 'utf8' });
    return result.split('\n').filter(line => line.trim()).map(line => {
      const [file] = line.split(':');
      return file;
    });
  } catch (error) {
    return [];
  }
};

// Fix Card import in a file
const fixCardImport = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace default import with named import
    content = content.replace(
      /import Card from ['"]([^'"]*\/Card)['"];?/g,
      "import { Card } from '$1';"
    );
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed Card import in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
};

// Main execution
const files = findFilesWithCardImport();
console.log(`Found ${files.length} files with incorrect Card imports`);

let fixedCount = 0;
for (const file of files) {
  if (fixCardImport(file)) {
    fixedCount++;
  }
}

console.log(`✅ Fixed ${fixedCount} files`);