#!/usr/bin//

import fs from 'fs';
import path from 'path';
let content = fs.readFileSync(filePath, 'utf8'';
if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>'';
const lines = content.split('\n'';
if (line.startsWith('<<<<<<<'';
if (line.startsWith('======='';
if (line.startsWith('>>>>>>>'';
///
///
if (!lines[j].startsWith('<<<<<<<') && !lines[j].startsWith('======='';
const cleanedContent = cleanedLines.join('\n'';
fs.writeFileSync(filePath, cleanedContent, 'utf8'';
if (['node_modules', '.git', 'dist', 'build', '.next'';
if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx'';
console.log('Starting merge conflict cleanup...'';
const cleanedCount = cleanDirectory('//;'
)))))))))))))))))))
]