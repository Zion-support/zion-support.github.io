<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
console.log('🔧 Comprehensive fix for all files...');

// List of problematic files
const filesToFix = [
  'pages/about.tsx',
  'pages/blog.tsx', 
  'pages/contact.tsx',
  'pages/services.tsx',
  'pages/talent.tsx'
<<<<<<< HEAD

];
=======
];



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }
<<<<<<< HEAD
=======



>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove all merge conflict markers


<<<<<<< HEAD
content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
=======
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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
<<<<<<< HEAD

function fixFile(filePath) {
  try {
  // TODO: Implement
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
}


// Process all files
let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}
<<<<<<< HEAD
}
`;
console.log(`\n🎉 Fixed ${fixedCount}/${filesToFix.length} files`);
=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
