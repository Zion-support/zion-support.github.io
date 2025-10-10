#!/usr/bin/env node
import fs from 'fs';
// Function to fix the blog page specifically
function fixBlogPage(content) {
  let fixed = content;
  // Fix malformed JSX elements
  fixed = fixed
    // Fix malformed closing tags
    .replace(/<\/di><\/div>/g, '</div>')
    .replace(/<\/sectio><\/section>/g, '</section>')
    .replace(/<\/titl>/g, '</title>')
    .replace(/<\/h1>/g, '</h1>')
    .replace(/<\/p>/g, '</p>')
    // Fix malformed opening tags
    .replace(/<h1[^>]*><\/h1>/g, '<h1>')
    .replace(/<p[^>]*><\/p>/g, '<p>')
    // Fix missing closing tags
    .replace(/<h1[^>]*>([^<]+)<\/h1>/g, '<h1>$1</h1>')
    .replace(/<p[^>]*>([^<]+)<\/p>/g, '<p>$1</p>')
    // Fix syntax errors
    .replace(/\)\}/g, ');')
    .replace(/\}\)/g, '});')
    .replace(/\}\)/g, '});')
    // Fix missing semicolons
    .replace(/([^;}])\n\s*}/g, '$1;\n}')
    // Fix missing closing parentheses
    .replace(/([^)])\n\s*}/g, '$1)\n}');
  return fixed;
};
// Read and fix the blog page
try {
  const content = fs.readFileSync('app/blog/page.tsx', 'utf8');
  const fixed = fixBlogPage(content);
  fs.writeFileSync('app/blog/page.tsx', fixed);
  console.log('Blog page fixed successfully!');
} catch (error) {
  console.error('Error fixing blog page:', error.message);
};
