#!/usr/bin/env node

import fs from 'fs';

const filePath = '/workspace/app/5g-implementation/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix all the semicolon issues in object properties
content = content.replace(/(\w+):\s*([^,}]+);\s*([,}])/g, '$1: $2$3');
content = content.replace(/(\w+):\s*([^,}]+);\s*$/gm, '$1: $2');
content = content.replace(/{\s*(\w+):\s*([^,}]+);\s*}/g, '{\n    $1: $2\n  }');

// Fix specific patterns
content = content.replace(/icon: (\w+),;/g, 'icon: $1,');
content = content.replace(/title: '([^']+)',;/g, "title: '$1',");
content = content.replace(/description: '([^']+)',;/g, "description: '$1',");
content = content.replace(/benefits: \[([^\]]+)\]\s*}/g, 'benefits: [$1]\n  }');

// Clean up multiple empty lines
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed 5g-implementation/page.tsx');