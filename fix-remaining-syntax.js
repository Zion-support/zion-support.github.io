#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files that might have syntax errors
const filesToCheck = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v app-broken | grep -v app-disabled | grep -v temp-broken | grep -v src', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim());

console.log(`Checking ${filesToCheck.length} files for remaining syntax errors`);

let fixedCount = 0;
let errorCount = 0;

filesToCheck.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    
    // 1. Fix malformed imports
    content = content.replace(/import React from 'react';/g, "import React from 'react';");
    content = content.replace(/import React from 'react';-dom/g, "import React from 'react';\nimport ReactDOM from 'react-dom';");
    
    // 2. Fix malformed interfaces
    content = content.replace(/interface (\w+)Props \{\s*children: Node\}/g, 'interface $1Props {\n  children: React.ReactNode;\n}');
    
    // 3. Fix missing semicolons and braces
    content = content.replace(/\}\s*export default/g, '};\n\nexport default');
    content = content.replace(/\}\s*\)\s*export default/g, '});\n\nexport default');
    
    // 4. Fix malformed JSX closing
    content = content.replace(/<\/section>\s*<\/>\s*\d+/g, '</section>\n    </>');
    content = content.replace(/<\/section>\s*<\/>\s*\w+/g, '</section>\n    </>');
    
    // 5. Fix missing function closing braces
    content = content.replace(/\}\s*export default (\w+);/g, '};\n\nexport default $1;');
    
    // 6. Fix malformed ternary operators
    content = content.replace(/fontSize === 'large' \? '1\.2' :\s*fontSize === 'extra-large' \? '1\.4' :\s*fontSize === 'small' \? '0\.9' : '1'/g, 
      "fontSize === 'large' ? '1.2' : fontSize === 'extra-large' ? '1.4' : fontSize === 'small' ? '0.9' : '1'");
    
    // 7. Fix missing commas in object properties
    content = content.replace(/(\w+):\s*(\w+)\s*fontSize ===/g, '$1: $2,\n    fontSize ===');
    
    // 8. Fix malformed function declarations
    content = content.replace(/const (\w+): React\.FC = \(\) => \{/g, 'const $1: React.FC<EnhancedAccessibilityProps> = ({ children }) => {');
    
    // 9. Fix missing closing parentheses
    content = content.replace(/\);(\s*export default)/g, ');\n$1');
    
    // 10. Fix malformed JSX fragments
    content = content.replace(/<>\s*(\d+)/g, '<>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nFixed ${fixedCount} files, ${errorCount} errors`);
