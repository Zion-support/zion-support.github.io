#!/usr/bin/env node

import fs from 'fs';

console.log('Fixing index.html merge conflicts...');

let content = fs.readFileSync('index.html', 'utf8');

// Remove merge conflict markers and keep the HEAD version
content = content.replace(/<<<<<<< HEAD\n/g, '');
content = content.replace(/=======\n/g, '');
content = content.replace(/>>>>>>> [^\n]+\n/g, '');

// Clean up any remaining merge conflict artifacts
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

fs.writeFileSync('index.html', content, 'utf8');

console.log('Fixed index.html merge conflicts');