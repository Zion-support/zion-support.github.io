#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

console.log('🔧 Starting final extra braces fixes...');

// Get all files with export statements
const filesWithExports = execSync('find src/ -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "export default"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

let fixedCount = 0;

filesWithExports.forEach(filePath => {
  try {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix multiple consecutive closing braces before export
    content = content.replace(/\n\s*}\s*\n\s*}\s*\n\s*export default/g, '\n}\n\nexport default');
    
    // Fix extra closing braces after class/function definitions
    content = content.replace(/(\n\s*}\s*)(\n\s*}\s*)(\n\s*export default)/g, '$1$3');
    
    // Fix cases where there are extra braces before export
    content = content.replace(/\n\s*}\s*\n\s*}\s*\n\s*export default/g, '\n}\n\nexport default');
    
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

console.log(`\n🎉 Final extra braces fixes complete!`);
console.log(`✅ Fixed: ${fixedCount} files`);