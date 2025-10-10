#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Comprehensive fix for Navigation.tsx...');

try {
  let content = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');
  
  // Fix the specific malformed closing parenthesis and indentation
  content = content.replace(
    /\)\)\}\s*<\/div>\s*\)\}/g,
    '))}\n                  </div>\n                )}\n              </div>'
  );
  
  fs.writeFileSync('/workspace/app/components/Navigation.tsx', content);
  console.log('✅ Fixed Navigation.tsx comprehensively');
} catch (error) {
  console.error('❌ Error fixing Navigation.tsx:', error.message);
}