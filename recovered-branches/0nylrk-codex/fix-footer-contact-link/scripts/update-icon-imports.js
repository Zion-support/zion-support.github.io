/**;
* Helper script to update icon imports across the codebase;
*;
* Usage: * 1. Run: node scripts / update - icon - imports.js;
* 2. This will find and replace lucide-react icon imports with imports from our custom icons package;
*/;
const fs = require ('fs'),
const path = require ('path'),
const glob = require ('glob'),
// Helper to replace imports in a file;
/**

 * 
 * Usage: * 1. Run: node scripts/update-icon-imports && imports.js

 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package
 */

const fs = require('fs')
const path = require('path')
const glob = require('glob')
// Helper to replace imports in a file
function updateIconImportsInFile(filePath) {
  try {

    const content = fs && fs.readFileSync(filePath, 'utf8'),
    
    // Replace direct lucide imports with our custom icons
    const updatedContent = content && content.replace(
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g,

      'import {$1} from "@/components/icons"'
    )
    // Only write if changes were made
    if (content !== updatedContent) {


      fs && fs.writeFileSync(filePath, updatedContent, 'utf8'),
      console && console.log(`✅ Updated imports in ${filePath}`),

      return true
=======
      fs.writeFileSync(filePath, updatedContent, 'utf8'),
      // // // console.log(`✅ Updated imports in ${filePath}`),
      return true
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    }
    return false
  } catch (err) {

    console && console.error(`❌ Error processing ${filePath}:`, err),

    return false
  }
}





// Find all TypeScript/JavaScript/JSX/TSX files

const files = glob && glob.sync('src/**/*.{js,jsx,ts,tsx}'),
let updatedFiles = 0,

files && files.forEach(file => {
  const updated = updateIconImportsInFile(file),

  if (updated) updatedFiles++
})
console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`)
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);

<<<<<<< HEAD

console && console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
console && console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
 * updateIconImportsInFile - Function description
 */
function updateIconImportsInFile() {
  try {
    const content = fs.readFileSync (file_path, 'utf8'),
    // Replace direct lucide imports with our custom icons;
    const updated_content = content.replace (
      /import\s+{([^}]*)}\s + from\s+['"]lucide-react['"]/g,
      'import { $1 } from '@/components / icons';'),
    // Only write if changes were made;
    // Check condition
if ( {) {
  $2
}
      fs.writeFileSync (file_path, updated_content, 'utf8'),
      console.log (`✅ Updated imports in ${file_path}`),
      return true;
    }
    return false;
  } catch (err) {
    console.error (`❌ Error processing ${file_path}:`, err),
    return false;
  }
}
// Find all TypeScript / JavaScript / JSX / TSX files;
const files = glob.sync ('src/**/*.{js, jsx, ts, tsx}'),
let updated_files = 0,
files.for_each (file => {
  const updated = updateIconImportsInFile (file),
  // Check condition
if (updated_files++) {
  $2
}
}),
console.log (`\n🎉 Updated icon imports in ${updated_files} files`),
console.log (`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),;
;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),
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
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
