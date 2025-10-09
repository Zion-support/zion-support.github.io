#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

console.log('🔧 Starting class brace fixes...');

// Get all files with export statements that might have class issues
const filesWithExports = execSync('find src/utils/ -name "*.ts" -o -name "*.tsx" | xargs grep -l "export default"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

let fixedCount = 0;

filesWithExports.forEach(filePath => {
  try {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Find class definitions
    const classMatches = content.match(/class\s+(\w+)/g);
    if (!classMatches) {
      console.log(`ℹ️  No classes found in: ${filePath}`);
      return;
    }
    
    // For each class, ensure it has proper closing
    classMatches.forEach(classMatch => {
      const className = classMatch.replace('class ', '');
      
      // Find the export statement for this class
      const exportPattern = new RegExp(`export default ${className};`, 'g');
      const exportMatches = content.match(exportPattern);
      
      if (exportMatches) {
        // Check if there's a closing brace before the export
        const beforeExport = content.substring(0, content.indexOf(`export default ${className};`));
        const lastBraceIndex = beforeExport.lastIndexOf('}');
        const lastNewlineIndex = beforeExport.lastIndexOf('\n');
        
        // If the last brace is not the last non-whitespace character before export
        if (lastBraceIndex < lastNewlineIndex || beforeExport.substring(lastBraceIndex + 1).trim() !== '') {
          // Add missing closing brace
          content = content.replace(
            `export default ${className};`,
            `}\n\nexport default ${className};`
          );
        }
      }
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

console.log(`\n🎉 Class brace fixes complete!`);
console.log(`✅ Fixed: ${fixedCount} files`);