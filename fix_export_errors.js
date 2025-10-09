#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

console.log('🔧 Starting export error fixes...');

// Get all files with export errors
const filesWithErrors = execSync('find src/ -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "export default"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

let fixedCount = 0;

filesWithErrors.forEach(filePath => {
  try {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix extra closing braces before export statements
    content = content.replace(/\n\s*}\s*\n\s*export default/g, '\nexport default');
    
    // Fix extra closing braces after export statements
    content = content.replace(/export default [^;]+;\s*\n\s*}/g, (match) => {
      return match.replace(/\n\s*}$/, '');
    });
    
    // Write the fixed content back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      fixedCount++;
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
});

console.log(`\n🎉 Export error fixes complete!`);
console.log(`✅ Fixed: ${fixedCount} files`);