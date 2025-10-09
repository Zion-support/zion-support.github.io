#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

console.log('🔧 Starting utility file error fixes...');

// Get all utility files with export statements
const utilityFiles = execSync('find src/utils/ -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

let fixedCount = 0;

utilityFiles.forEach(filePath => {
  try {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix missing closing braces before export statements
    content = content.replace(/\n\s*export default/g, '\n}\n\nexport default');
    
    // Fix cases where there's no class/function closing but export exists
    if (content.includes('export default') && !content.includes('class ') && !content.includes('function ')) {
      // This is likely a module with just exports, skip
      console.log(`ℹ️  Skipping module file: ${filePath}`);
      return;
    }
    
    // Count braces to ensure proper closure
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      // Insert missing braces before export statement
      content = content.replace(/(\n\s*)(export default)/g, (match, prefix, exportStmt) => {
        return prefix + '}'.repeat(missingBraces) + '\n' + prefix + exportStmt;
      });
    }
    
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

console.log(`\n🎉 Utility file error fixes complete!`);
console.log(`✅ Fixed: ${fixedCount} files`);