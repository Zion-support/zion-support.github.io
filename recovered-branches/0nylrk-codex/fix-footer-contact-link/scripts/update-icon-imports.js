
/**
 * Helper script to update icon imports across the codebase
 * 
 * Usage: * 1. Run: node scripts/update-icon-imports.js
 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package
 */

<<<<<<< HEAD
const fs = require('fs'),
const path = require('path'),
const glob = require('glob'),

// Helper to replace imports in a file
function updateIconImportsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8'),
    
    // Replace direct lucide imports with our custom icons
    const updatedContent = content.replace(
<<<<<<< HEAD
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g,
      'import {$1} from "@/components/icons"'
    ),
    // Only write if changes were made
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, 'utf8'),
      // // // console.log(`✅ Updated imports in ${filePath}`),
      return true
=======
      /import\s+{([^}]*)}\s+from\s+['&quot;]lucide-react['&quot;]/g,
      'import {$1} from &quot;@/components/icons&quot;'
    );
    
    // Only write if changes were made
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      // console.log(`✅ Updated imports in ${filePath}`);
      return true;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    return false
  } catch (err) {
    console.error(`❌ Error processing ${filePath}:`, err),
    return false
  }
}

// Find all TypeScript/JavaScript/JSX/TSX files
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}'),
let updatedFiles = 0,

files.forEach(file => {
  const updated = updateIconImportsInFile(file),
  if (updated) updatedFiles++
}),

<<<<<<< HEAD
// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),
=======
// console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`);
// console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
const _fs = require('fs');
const _path = require('path');
const _glob = require('glob');

// Helper to replace imports in a file
function updateIconImportsInFile(_filePath) {_try {
    const _content = fs.readFileSync(filePath, _'utf8');
    
    // Replace direct lucide imports with our custom icons
    const _updatedContent = content.replace(
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g,
      'import {_$1} from "@/components/icons"'
    );
    
    // Only write if changes were made
    if (content !== updatedContent) {_fs.writeFileSync(filePath, _updatedContent, _'utf8');
      
      return true;}
    
    return false;
  } catch (err) {_return false;}
}

// Find all TypeScript/JavaScript/JSX/TSX files
const _files = glob.sync('src/**/*.{_js, _jsx, _ts, _tsx}');
let _updatedFiles = 0;

files.forEach(file => {_const _updated = updateIconImportsInFile(file);
  if (updated) updatedFiles++;});



>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
