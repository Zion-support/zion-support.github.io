#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Fixing syntax errors in page.tsx...');

try {
  let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');
  
  // Fix common syntax errors
  content = content.replace(/popular: true;,}/g, 'popular: true\n    }');
  content = content.replace(/popular: false;,}/g, 'popular: false\n    }');
  content = content.replace(/category: '[^']+',\s*popular: (true|false);,}/g, 'category: \'$1\',\n      popular: $2\n    }');
  
  // Fix other common syntax issues
  content = content.replace(/;,}/g, '\n    }');
  content = content.replace(/;,/g, ',');
  content = content.replace(/,\s*}/g, '\n    }');
  
  // Fix malformed object properties
  content = content.replace(/(\w+):\s*([^,}]+),/g, '$1: $2,');
  
  // Fix array syntax
  content = content.replace(/\[\s*,/g, '[');
  content = content.replace(/,\s*\]/g, ']');
  
  // Fix function syntax
  content = content.replace(/\(\s*,/g, '(');
  content = content.replace(/,\s*\)/g, ')');
  
  // Fix JSX syntax
  content = content.replace(/<\s*,/g, '<');
  content = content.replace(/,\s*>/g, '>');
  
  // Write the fixed content
  fs.writeFileSync('/workspace/app/page.tsx', content);
  
  console.log('✅ Syntax errors fixed in page.tsx');
  
} catch (error) {
  console.error('❌ Error fixing syntax:', error.message);
  process.exit(1);
}