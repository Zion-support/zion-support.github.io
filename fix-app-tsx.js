#!/usr/bin/env node

import fs from 'fs';

const filePath = '/workspace/app/App.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix all the semicolon issues in JSX
content = content.replace(/\/>;/g, '/>');
content = content.replace(/element={<[^>]+>} \/>;/g, (match) => match.replace(/\/>;$/, '/>'));
content = content.replace(/\/>;/g, '/>');

// Fix malformed JSX closing tags
content = content.replace(/<\/[^>]+>;/g, (match) => match.replace(/;$/g, ''));

// Fix malformed function calls
content = content.replace(/\(\s*\)\s*=>\s*\(;/g, '() => (');
content = content.replace(/return\s*\(,/g, 'return (');
content = content.replace(/return\s*\(;/g, 'return (');

// Fix malformed JSX attributes
content = content.replace(/=\s*{([^}]+);\s*}/g, '={$1}');

// Clean up multiple empty lines
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed App.tsx');