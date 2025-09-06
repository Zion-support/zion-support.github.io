
/**
 * Helper script to update icon imports across the codebase
 *
 * Usage: * 1. Run: node scripts/update-icon-imports.js
 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package
 */
<<<<<<< HEAD

const fs = require('fs');
const path = require('path');
const glob = require('glob');
// Helper to replace imports in a file
function updateIconImportsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Replace direct lucide imports with our custom icons
    const updatedContent = content.replace(
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g;
      'import {$1} from "@/components/icons"'
    );
    // Only write if changes were made
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✅ Updated imports in ${filePath}`);
=======
const fs = require('fs')
const path = require('path')
const glob = require('glob')
// Helper to replace imports in a file
function updateIconImportsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    // Replace direct lucide imports with our custom icons
    const updatedContent = content.replace(
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g
      'import {$1} from "@/components/icons"'
    )
    // Only write if changes were made
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, 'utf8')
      console.log(`✅ Updated imports in ${filePath}`)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      return true
    }
    return false
  } catch (err) {
<<<<<<< HEAD
    console.error(`❌ Error processing ${filePath}:`, err);
=======
    console.error(`❌ Error processing ${filePath}:`, err)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    return false
  }
}
// Find all TypeScript/JavaScript/JSX/TSX files
<<<<<<< HEAD
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}');
let updatedFiles = 0;
files.forEach(file => {
  const updated = updateIconImportsInFile(file);
  if (updatedFiles++
}));
console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`);
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);
=======
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}')
let updatedFiles = 0
files.forEach(file => {
  const updated = updateIconImportsInFile(file)
  if (updated) updatedFiles++
})
console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`)
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
