#!/usr/bin/env node;
import fs from 'fs';
<<<<<<< HEAD

console.log('🔧 Fixing ai-services page syntax errors...');

=======
// console.log removed for production
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const filePath = './app/ai-services/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');
// Fix all the syntax errors by removing extra closing braces;
content = content.replace(/color: 'text-\w+-\d+'}[\s]*},/g, (match) => {
<<<<<<< HEAD
  return match.replace('}', '');
});

=======
  return match.replace('}', '')});
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Fix any remaining syntax issues;
content = content.replace(/},\s*}/g, '}');
fs.writeFileSync(filePath, content);
console.log('✅ Fixed ai-services page syntax errors');