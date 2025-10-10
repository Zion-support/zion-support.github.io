#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Final fix for Navigation.tsx...');

try {
  let content = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');
  
  // Fix the malformed closing structure
  content = content.replace(
    /\)\)\}\s*<\/div>\s*\)\}\s*<\/div>\s*<\/div>/g,
    '))}\n                  </div>\n                )}\n              </div>'
  );
  
  fs.writeFileSync('/workspace/app/components/Navigation.tsx', content);
  console.log('✅ Fixed Navigation.tsx finally');
} catch (error) {
  console.error('❌ Error fixing Navigation.tsx:', error.message);
}