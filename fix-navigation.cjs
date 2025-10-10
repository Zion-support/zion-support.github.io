#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Fixing Navigation.tsx...');

try {
  let content = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');
  
  // Fix the specific malformed tag
  content = content.replace(
    /<div className="text-xs text-gray-400">\{service\.description\}>/g,
    '<div className="text-xs text-gray-400">{service.description}</div>'
  );
  
  // Fix the malformed closing tags
  content = content.replace(
    /\)\)\}\s*>\s*<\/div>/g,
    '))}\n                  </div>'
  );
  
  fs.writeFileSync('/workspace/app/components/Navigation.tsx', content);
  console.log('✅ Fixed Navigation.tsx');
} catch (error) {
  console.error('❌ Error fixing Navigation.tsx:', error.message);
}