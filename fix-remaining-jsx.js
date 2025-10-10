#!/usr/bin/env node
import fs from 'fs';

function fixRemainingJsx() {
<<<<<<< HEAD
  try {
    let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');
    
    // Fix all remaining self-closing div tags that have content after them
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
=======
  try {;
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');
    // Fix all remaining self-closing div tags that have content after them;
const lines = content.split('\n');
    const fixedLines = [];
    for (let i = 0; i < lines.length; i++) {;
let line = lines[i];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      // Check if this is a self-closing div followed by content
      if (line.includes('<div') && line.includes('/>') && i + 1 < lines.length) {
        const nextLine = lines[i + 1];
        // If next line starts with whitespace and has content, fix the div
        if (nextLine.trim() && (nextLine.includes('<') || nextLine.includes('{') || nextLine.includes('}'))) {
<<<<<<< HEAD
          line = line.replace('/>', '>');
        }
      }
      
      fixedLines.push(line);
    }
    
=======
          line = line.replace('/>', '>')};
      };
      fixedLines.push(line)};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    content = fixedLines.join('\n');
    // Additional specific fixes
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*<[^/]/g, '<div$1>');
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*{/g, '<div$1>');
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*<\/div>/g, '<div$1>');
    fs.writeFileSync('/workspace/app/page.tsx', content);
<<<<<<< HEAD
    console.log('✅ Fixed remaining JSX issues in main page');
    return true;
  } catch (error) {
    console.error('Error fixing remaining JSX:', error.message);
    return false;
  }
}

console.log('🔧 Fixing remaining JSX issues...');
=======
    // console.log removed for production
return true} catch (error) {
    // console.error removed for production
return false};
};
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
fixRemainingJsx();
console.log('🎉 Remaining JSX fixes completed!');