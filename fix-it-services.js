#!/usr/bin/env node

import fs from 'fs';

const filePath = '/workspace/src/it-services/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix malformed object properties
content = content.replace(/title: description,/g, 'title: "IT Service",');
content = content.replace(/\$4: '[^']*',/g, 'description: "$1",');
content = content.replace(/price: category, '[^']*',/g, 'category: "$1",');
content = content.replace(/price: benefits, \[[^\]]*\],/g, 'benefits: $1,');

// Fix duplicate properties
content = content.replace(/title: description,\s*\n\s*\$4: '[^']*',/g, 'title: "IT Service",\n      description: "$1",');

// Fix malformed arrays
content = content.replace(/benefits: \[([^\]]*)\],\s*technologies: \[([^\]]*)\],\s*title: description,/g, 'benefits: [$1],\n      technologies: [$2],\n      title: "IT Service",');

// Fix missing commas
content = content.replace(/(\w+):\s*'([^']*)',\s*\n\s*(\w+):/g, '$1: "$2",\n      $3:');

// Fix malformed object structure
content = content.replace(/(\s+)(\w+):\s*(\w+),\s*'([^']*)',/g, '$1$2: "$4",');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed it-services/page.tsx');