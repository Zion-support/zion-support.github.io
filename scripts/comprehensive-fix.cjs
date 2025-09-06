#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Comprehensive fix for all files...');

// List of problematic files
const filesToFix = [
  'pages/about.tsx',
  'pages/blog.tsx', 
  'pages/contact.tsx',
  'pages/services.tsx',
  'pages/talent.tsx'
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers
<<<<<<< HEAD
<<<<<<< HEAD
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
=======
<<<<<<< HEAD
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Fix common syntax issues
    content = content.replace(/md: text-2xl/g, 'md:text-2xl');
    content = content.replace(/import MainLayout from '\.\.\/components\/layout\/MainLayout';[\s\S]*?const blogPosts/g, 'const blogPosts');
    content = content.replace(/,\s*"title":/g, ',');
    content = content.replace(/,\s*"description":/g, ',');
    content = content.replace(/,\s*"icon":/g, ',');
    content = content.replace(/,\s*"href":/g, ',');
    
    // Clean up extra whitespace and newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    content = content.replace(/\s+$/gm, '');
    
    // Write the fixed content
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Process all files
let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`\n🎉 Fixed ${fixedCount}/${filesToFix.length} files`);
