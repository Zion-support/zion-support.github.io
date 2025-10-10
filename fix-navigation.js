#!/usr/bin/env node

import fs from 'fs';

// Read the Navigation.tsx file
const filePath = '/workspace/app/components/Navigation.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix array syntax issues
content = content.replace(/}\s*\]\s*$/gm, '}\n    ]');
content = content.replace(/,\s*\]\s*$/gm, '\n    ]');

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('✓ Fixed Navigation.tsx array syntax');