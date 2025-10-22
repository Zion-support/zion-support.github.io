import fs from 'fs';
import path from 'path';

// Read the services.ts file
const filePath = '/workspace/app/data/services.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Fix common syntax errors
const fixes = [
  // Fix malformed object properties
  { pattern: /,}freeTrial: '([^']+)',}/g, replacement: ',\n    freeTrial: \'$1\'\n  }' },
  { pattern: /,}freeTrial: "([^"]+)",}/g, replacement: ',\n    freeTrial: "$1"\n  }' },
  { pattern: /,}freeTrial: ([^,}]+),}/g, replacement: ',\n    freeTrial: $1\n  }' },
  
  // Fix malformed closing braces
  { pattern: /,}}/g, replacement: '\n  }' },
  { pattern: /}}/g, replacement: '}' },
  
  // Fix missing commas in object properties
  { pattern: /(\w+):\s*'([^']+)'(\s*[^,}])/g, replacement: '$1: \'$2\',$3' },
  { pattern: /(\w+):\s*"([^"]+)"(\s*[^,}])/g, replacement: '$1: "$2",$3' },
  
  // Fix array syntax errors
  { pattern: /,\s*]/g, replacement: '\n  ]' },
  
  // Fix function parameter syntax
  { pattern: /\(\s*,\s*/g, replacement: '(' },
  { pattern: /,\s*\)/g, replacement: ')' },
  
  // Fix enum syntax
  { pattern: /enum\s+(\w+)\s*{\s*([^}]+)\s*}/g, replacement: 'enum $1 {\n  $2\n}' },
  
  // Fix interface syntax
  { pattern: /interface\s+(\w+)\s*{\s*([^}]+)\s*}/g, replacement: 'interface $1 {\n  $2\n}' },
  
  // Fix type syntax
  { pattern: /type\s+(\w+)\s*=\s*([^;]+);/g, replacement: 'type $1 = $2;' },
  
  // Fix import syntax
  { pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, replacement: 'import { $1 } from \'$2\'' },
  
  // Fix export syntax
  { pattern: /export\s+const\s+(\w+)\s*=\s*([^;]+);/g, replacement: 'export const $1 = $2;' },
  
  // Fix object literal syntax
  { pattern: /{\s*([^}]+)\s*}/g, replacement: '{\n  $1\n}' },
  
  // Fix array literal syntax
  { pattern: /\[\s*([^\]]+)\s*\]/g, replacement: '[\n  $1\n]' }
];

// Apply fixes
fixes.forEach(fix => {
  content = content.replace(fix.pattern, fix.replacement);
});

// Write the fixed content back
fs.writeFileSync(filePath, content);

console.log('Syntax errors fixed in services.ts');