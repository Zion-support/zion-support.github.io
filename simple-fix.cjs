const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Remove merge conflict markers
<<<<<<< HEAD
    content = content.replace(/
    content = content.replace(/
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    
    // Fix common syntax issues
    content = content.replace(/\{_/g, '{');
    content = content.replace(/_}/g, '}');
    content = content.replace(/_/g, ' ');
    
    // Fix HTML entities
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&amp;/g, '&');
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Fix specific admin files
const adminFiles = [
  '/workspace/pages/admin/kyc.tsx',
  '/workspace/pages/admin/learn/index.tsx',
  '/workspace/pages/admin/logs.tsx',
  '/workspace/pages/admin/notes.tsx',
  '/workspace/pages/admin/partners.tsx'
];

let fixedCount = 0;
for (const file of adminFiles) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} admin files`);