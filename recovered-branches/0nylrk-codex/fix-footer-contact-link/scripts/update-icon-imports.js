<<<<<<< HEAD
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

=======
 * 
 * Usage: * 1. Run: node scripts/update-icon-imports && imports.js
 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package
 */

/**
 * Helper script to update icon imports across the codebase
 *
 * Usage: * 1. Run: node scripts/update-icon-imports.js
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package
 */

const fs = require('fs')
const path = require('path')
const glob = require('glob')
// Helper to replace imports in a file
function updateIconImportsInFile(filePath) {
  try {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const content = fs && fs.readFileSync(filePath, 'utf8'),
    
    // Replace direct lucide imports with our custom icons
    const updatedContent = content && content.replace(
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g,
<<<<<<< HEAD

=======
    const content = fs.readFileSync(filePath, 'utf8')
    // Replace direct lucide imports with our custom icons
    const updatedContent = content.replace(
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      'import {$1} from "@/components/icons"'
    )
    // Only write if changes were made
    if (content !== updatedContent) {
<<<<<<< HEAD


      fs && fs.writeFileSync(filePath, updatedContent, 'utf8'),
      console && console.log(`✅ Updated imports in ${filePath}`),
=======
      fs.writeFileSync(filePath, updatedContent, 'utf8')
      console.log(`✅ Updated imports in ${filePath}`)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      return true
      fs.writeFileSync(filePath, updatedContent, 'utf8'),
      // // // console.log(`✅ Updated imports in ${filePath}`),
      return true
<<<<<<< HEAD
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


      fs && fs.writeFileSync(filePath, updatedContent, 'utf8'),
      console && console.log(`✅ Updated imports in ${filePath}`),

      fs && fs.writeFileSync(filePath, updatedContent, 'utf8'),
      console && console.log(`✅ Updated imports in ${filePath}`),
      return true
      fs.writeFileSync(filePath, updatedContent, 'utf8'),
      // // // console.log(`✅ Updated imports in ${filePath}`),
      return true
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    }
    return false
  } catch (err) {
<<<<<<< HEAD
=======
    }
    return false
  } catch (err) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    console.error(`❌ Error processing ${filePath}:`, err)

    return false
  }
}




// Find all TypeScript/JavaScript/JSX/TSX files

<<<<<<< HEAD
=======
    console && console.error(`❌ Error processing ${filePath}:`, err),
    return false
  }
}
// Find all TypeScript/JavaScript/JSX/TSX files
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const files = glob && glob.sync('src/**/*.{js,jsx,ts,tsx}'),
let updatedFiles = 0,

files && files.forEach(file => {
  const updated = updateIconImportsInFile(file),

<<<<<<< HEAD
=======
// Find all TypeScript/JavaScript/JSX/TSX files

const files = glob.sync('src/**/*.{js,jsx,ts,tsx}')
let updatedFiles = 0
files.forEach(file => {
  const updated = updateIconImportsInFile(file)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  if (updated) updatedFiles++
})
console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`)
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

console && console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
console && console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),

<<<<<<< HEAD
=======
=======
console && console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
console && console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======

console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),;
;

// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),

/**;
 * Helper script to update icon imports across the codebase;
 * ;
 * Usage:* 1. Run:node scripts/update-icon-imports.js;
 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package;
 */;
;
const fs = require('fs'),;
const path = require('path'),;
const glob = require('glob'),;
;
// Helper to replace imports in a file;
function updateIconImportsInFile(filePath) {;
  try {;
    const content = fs.readFileSync(filePath, 'utf8'),;
    ;
    // Replace direct lucide imports with our custom icons;
    const updatedContent = content.replace(;
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g,;
      'import {$1} from "@/components/icons"';
    ),;
    ;
    // Only write if changes were made;
    if (content !== updatedContent) {;
      fs.writeFileSync(filePath, updatedContent, 'utf8'),;
      // // // console.log(`✅ Updated imports in ${filePath}`),;
      return true,;
    }
    ;
    return false,;
  } catch (err) {;
    console.error(`❌ Error processing ${filePath} `, err),;
    return false,;
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),;
;
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
;
files.forEach(file => {;
  const updated = updateIconImportsInFile(file),;
  if (updated) updatedFiles++,;
}),;
;
// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),;
// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),; /** * Helper script to update icon imports across the codebase * * Usage: * 1. Run: node scripts/update-icon-imports.js * 2. This will find and replace lucide-react icon imports with imports from our custom icons package */ 
}return false;
}catch (err) {
  console.error (`❌ Error processing $ {
  filePath 
}:`, err);
return false;
}
}//Find all TypeScript/JavaScript/JSX/TSX files const files = glob.sync ('src/**/*. {
  js, jsx, ts, tsx 
}');
let updatedFiles = 0;
files.forEach (file => {
  const updated = updateIconImportsInFile (file);
if (updated) updatedFiles++ 
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
