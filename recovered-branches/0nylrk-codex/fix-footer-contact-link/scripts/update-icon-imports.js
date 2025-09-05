
<<<<<<< HEAD
/**
 * Helper script to update icon imports across the codebase
 * 
 * Usage: * 1. Run: node scripts/update-icon-imports.js
 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package
 */

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
=======
/**;
 * Helper script to update icon imports across the codebase;
 *;
 * Usage: * 1. Run: node scripts/update-icon-imports.js;
 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package;
 */;
const fs = require('fs'),;
const path = require('path'),;
const glob = require('glob'),;
// Helper to replace imports in a file;
function updateIconImportsInFile(filePath) {;
  try {;
    const content = fs.readFileSync(filePath, 'utf8'),;
    // Replace direct lucide imports with our custom icons;
    const updatedContent = content.replace(;
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g,;
      'import {$1} from "@/components/icons"';
    ),;
    // Only write if changes were made;
    if (content !== updatedContent) {;
      fs.writeFileSync(filePath, updatedContent, 'utf8'),;
      // // // console.log(`✅ Updated imports in ${filePath}`),;
      return true;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
;
    return false;
  } catch (err) {;
    console.error(`❌ Error processing ${filePath}:`, err),;
    return false;
  }
}
<<<<<<< HEAD

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
;
// Find all TypeScript/JavaScript/JSX/TSX files;
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}'),;
let updatedFiles = 0,;
files.forEach(file => {;
  const updated = updateIconImportsInFile(file),;
  if (updated) updatedFiles++;
}),;
// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),;
// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
