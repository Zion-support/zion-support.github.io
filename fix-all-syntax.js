#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files that might have syntax errors
const filesToCheck = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v app-broken | grep -v app-disabled | grep -v temp-broken | grep -v src', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim());

console.log(`Checking ${filesToCheck.length} files for all syntax errors`);

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
    
    // 2. Fix duplicate imports
    content = content.replace(/} from '@heroicons\/react\/24\/outline';\s*ArrowRightIcon\s*} from '@heroicons\/react\/24\/outline';/g, "} from '@heroicons/react/24/outline';");
    content = content.replace(/} from '@heroicons\/react\/24\/outline';\s*import {[^}]+} from 'lucide-react';\s*HeartIcon\s*} from '@heroicons\/react\/24\/outline';/g, "} from '@heroicons/react/24/outline';\nimport { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react';");
    
    // 3. Fix malformed interfaces
    content = content.replace(/interface (\w+)Props \{\s*children: Node\}/g, 'interface $1Props {\n  children: React.ReactNode;\n}');
    
    // 4. Fix missing semicolons and braces
    content = content.replace(/\}\s*export default/g, '};\n\nexport default');
    content = content.replace(/\}\s*\)\s*export default/g, '});\n\nexport default');
    
    // 5. Fix malformed JSX closing
    content = content.replace(/<\/section>\s*<\/>\s*\d+/g, '</section>\n    </>');
    content = content.replace(/<\/section>\s*<\/>\s*\w+/g, '</section>\n    </>');
    
    // 6. Fix missing function closing braces
    content = content.replace(/\}\s*export default (\w+);/g, '};\n\nexport default $1;');
    
    // 7. Fix malformed array declarations
    content = content.replace(/];\s*\{[^}]+\}\s*];/g, '];');
    
    // 8. Fix malformed function declarations
    content = content.replace(/const (\w+): React\.FC<EnhancedAccessibilityProps> = \(\{ children \}\) => \{/g, 'const $1: React.FC = () => {');
    content = content.replace(/const (\w+): React\.FC<EnhancedAccessibilityProps> = \(\{ children \}\) => \{/g, 'const $1: React.FC = () => {');
    
    // 9. Fix missing closing parentheses
    content = content.replace(/\);(\s*export default)/g, ');\n$1');
    
    // 10. Fix malformed JSX fragments
    content = content.replace(/<>\s*(\d+)/g, '<>');
    
    // 11. Fix missing commas in object arrays
    content = content.replace(/\}\s*\{/g, '},\n    {');
    
    // 12. Fix malformed string literals
    content = content.replace(/import { createRoot } from 'react-dom\/client;/g, "import { createRoot } from 'react-dom/client';");
    content = content.replace(/import App from '\.\/App;/g, "import App from './App';");
    content = content.replace(/import '\.\/index\.css;/g, "import './index.css';");
    
    // 13. Fix malformed comments
    content = content.replace(/\/\/ Ensure scheduler is properly initialized;/g, '// Ensure scheduler is properly initialized');
    content = content.replace(/\/\/ Fix for scheduler unstable_now error;/g, '// Fix for scheduler unstable_now error');
    
    // 14. Fix malformed if statements
    content = content.replace(/if \(typeof window !== 'undefined'\) \{';/g, "if (typeof window !== 'undefined') {");
    
    // 15. Fix malformed object properties
    content = content.replace(/window\.performance = window\.performance \|\| \{\}/g, 'window.performance = window.performance || {};;');
    
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
