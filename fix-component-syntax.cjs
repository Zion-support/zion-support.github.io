#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixComponentSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix corrupted property names with colons
<<<<<<< HEAD
    content = content.replace(/(\w+):\s*(\w+):\s*(\w+)/g, '$1: $2');
    content = content.replace(/(\w+):\s*(\w+):\s*(\w+)/g, '$1: $2');
    
    // Fix specific patterns
    content = content.replace(/nam:\s*e:\s*string/g, 'name: string');
    content = content.replace(/emai:\s*l:\s*string/g, 'email: string');
    content = content.replace(/compan:\s*y:\s*string/g, 'company: string');
    content = content.replace(/phon:\s*e:\s*string/g, 'phone: string');
    content = content.replace(/childre:\s*n:\s*ReactNode/g, 'children: ReactNode');
    content = content.replace(/isLoade:\s*d:\s*false/g, 'isLoaded: false');
    content = content.replace(/hasErro:\s*r:\s*false/g, 'hasError: false');
    
    // Fix more general patterns
    content = content.replace(/(\w+):\s*(\w+):\s*(\w+)/g, '$1: $2');
    content = content.replace(/(\w+):\s*(\w+):\s*(\w+)/g, '$1: $2');
        // Clean up extra whitespace
=======
    // Clean up extra whitespace
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
    console.error(`Error processing ${filePath}:`, error.message);    return false;
=======
<<<<<<< HEAD
<<<<<<< HEAD
    console.error(`Error processing ${filePath}:`, error.message);
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
    console.error(`Error processing ${filePath}: `, error.message);
    return false;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }
}

// Fix specific files mentioned in the build error
const filesToFix = [
  '/workspace/components/ContactForm.tsx',
  '/workspace/components/ErrorBoundary.tsx',
  '/workspace/pages/index.tsx'
];
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
console.log('🔍 Fixing syntax errors in component files...');

let fixedCount = 0;
for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixComponentSyntax(file)) {
      fixedCount++;
    }
  }
}

console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
console.log('🎉 Component syntax fixing complete!');