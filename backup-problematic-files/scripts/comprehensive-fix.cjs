<<<<<<< HEAD


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
#!/usr/bin/env node

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
const fs = require('fs');
const path = require('path');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

console.log('🔧 Comprehensive fix for all files...');

// List of problematic files
const filesToFix = [
  'pages/about.tsx',
<<<<<<< HEAD
  'pages/blog.tsx',
=======
  'pages/blog.tsx', 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  'pages/contact.tsx',
  'pages/services.tsx',
  'pages/talent.tsx'
];
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove all merge conflict markers

    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers

<<<<<<< HEAD

    let content = fs.readFileSync(filePath, 'utf8');
    // Remove all merge conflict markers
    content = content.replace(/[^\n]+\n?/g, '');
=======
    content = content.replace(/
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    
<<<<<<< HEAD
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======

console.log(`\n🎉 Fixed ${fixedCount}/${filesToFix.length} files`);
<<<<<<< HEAD

console.log(`\n🎉 Fixed ${fixedCount}/${filesToFix.length} files`);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
