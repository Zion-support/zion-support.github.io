#!/usr/bin/env node

import fs from 'fs';

const filePath = './app/pricing/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Remove all merge conflict markers and keep only the HEAD content
const lines = content.split('\n');
const fixedLines = [];
let inConflict = false;
let conflictType = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.startsWith('<<<<<<<')) {
    inConflict = true;
    conflictType = 'head';
    continue;
  } else if (line.startsWith('=======')) {
    conflictType = 'other';
    continue;
  } else if (line.startsWith('>>>>>>>')) {
    inConflict = false;
    conflictType = '';
    continue;
  }
  
  if (!inConflict || conflictType === 'head') {
    fixedLines.push(line);
  }
}

fs.writeFileSync(filePath, fixedLines.join('\n'));
console.log('Fixed pricing page merge conflicts');