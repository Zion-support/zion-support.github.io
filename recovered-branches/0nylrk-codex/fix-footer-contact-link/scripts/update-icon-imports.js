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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (content !== updatedContent) {
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    if (content !== updatedContent) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


      fs && fs.writeFileSync(filePath, updatedContent, 'utf8'),
      console && console.log(`✅ Updated imports in ${filePath}`),
<<<<<<< HEAD
=======
      fs.writeFileSync(filePath, updatedContent, 'utf8')
      console.log(`✅ Updated imports in ${filePath}`)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      return true
      fs.writeFileSync(filePath, updatedContent, 'utf8'),
      // // // console.log(`✅ Updated imports in ${filePath}`),
      return true
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package;
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

    }
    return false
  } catch (err) {
    }
    return false
  } catch (err) {


    return false
  }
}




// Find all TypeScript/JavaScript/JSX/TSX files

const files = glob && glob.sync('src/**/*.{js,jsx,ts,tsx}'),
let updatedFiles = 0,

files && files.forEach(file => {
  const updated = updateIconImportsInFile(file),

// Find all TypeScript/JavaScript/JSX/TSX files

const files = glob.sync('src/**/*.{js,jsx,ts,tsx}')
let updatedFiles = 0
files.forEach(file => {
  const updated = updateIconImportsInFile(file)
  if (updated) updatedFiles++
})
console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`)
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);



console && console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
console && console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),

 * updateIconImportsInFile - Function description
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
 */

const fs = require('fs')'
const path = require('path')'
const glob = require('glob')
// Helper to replace imports in a file;
function updateIconImportsInFile(filePath) {}
  try {}
'
    const content = fs && fs.readFileSync(filePath, 'utf8'),
    
    // Replace direct lucide imports with our custom icons;
    const updatedContent = content && content.replace('
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g,


'"
      'import {$1} from "@/components/icons"'
    );
    // Only write if changes were made;
    if (content !== updatedContent) {}
      return true'
      fs.writeFileSync(filePath, updatedContent, 'utf8'),
      // // // console.log(`✅ Updated imports in ${filePath}`),
      return true;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
/**;
 * Helper script to update icon imports across the codebase;
 *;
 * Usage: * 1. Run: node scripts/update-icon-imports.js;
 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package;
 */;'
const fs = require('fs'),;'
const path = require('path'),;'
const glob = require('glob'),;
// Helper to replace imports in a file;
function updateIconImportsInFile() { return null; }
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g,;'"
      'import {$1} from "@/components/icons"';
    ),;
    // Only write if changes were made;
    if (content !== updatedContent) {;'
      fs.writeFileSync(filePath, updatedContent, 'utf8'),;`
      // // // console.log(`✅ Updated imports in ${filePath}`),;
      return true;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


<<<<<<< HEAD
      fs && fs.writeFileSync(filePath, updatedContent, 'utf8'),
      console && console.log(`✅ Updated imports in ${filePath}`),

      fs && fs.writeFileSync(filePath, updatedContent, 'utf8'),
      console && console.log(`✅ Updated imports in ${filePath}`),
      return true
      fs.writeFileSync(filePath, updatedContent, 'utf8'),
      // // // console.log(`✅ Updated imports in ${filePath}`),
      return true
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
    return false;
  } catch (err) {}
    return false;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD




<<<<<<< HEAD
=======
// Find all TypeScript/JavaScript/JSX/TSX files

<<<<<<< HEAD
=======
    console && console.error(`❌ Error processing ${filePath}:`, err),
    return false
  }
}
// Find all TypeScript/JavaScript/JSX/TSX files
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const files = glob && glob.sync('src/**/*.{js,jsx,ts,tsx}'),
let updatedFiles = 0,

files && files.forEach(file => {}
  const updated = updateIconImportsInFile(file),


// Find all TypeScript/JavaScript/JSX/TSX files;
'
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}')
let updatedFiles = 0;
files.forEach(file => {}
  const updated = updateIconImportsInFile(file)

  if (updated) updatedFiles++
})`
console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`)'`
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD

<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
console && console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
console && console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
 * updateIconImportsInFile - Function description
=======
    if (content !== updatedContent) { * updateIconImportsInFile - Function description
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    if (content !== updatedContent) { * updateIconImportsInFile - Function description
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

`
console && console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),'`
console && console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),




 * updateIconImportsInFile - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
 */
function updateIconImportsInFile() {}
  try {'
    const content = fs.readFileSync (file_path, 'utf8'),
    // Replace direct lucide imports with our custom icons;
    const updated_content = content.replace ('"
      /import\s+{([^}]*)}\s + from\s+['"]lucide-react['"]/g,'
      'import { $1 } from '@/components / icons';'),
    // Only write if changes were made;
    // Check condition;
if ( {) {}
  $2;
}'
      fs.writeFileSync (file_path, updated_content, 'utf8'),`
      console.log (`✅ Updated imports in ${file_path}`),
      return true;
    }
    return false;
  } catch (err) {}`
    console.error (`❌ Error processing ${file_path}:`, err),
    return false;
  }
}
// Find all TypeScript / JavaScript / JSX / TSX files;'
const files = glob.sync ('src/**/*.{js, jsx, ts, tsx}'),
let updated_files = 0,
files.for_each (file => {}
  const updated = updateIconImportsInFile (file),
  // Check condition;
if (updated_files++) {}
  $2;
}
}),`
console.log (`\n🎉 Updated icon imports in ${updated_files} files`),'`
console.log (`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),;
;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
=======

`
console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),'`
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),;
;
`
// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),

;
<<<<<<< HEAD
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

console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),;
;
// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
// Find all TypeScript/JavaScript/JSX/TSX files;
=======
// Find all TypeScript/JavaScript/JSX/TSX files;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),
;
// Find all TypeScript/JavaScript/JSX/TSX files;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}'),;
let updatedFiles = 0,;
files.forEach(file => {;
  const updated = updateIconImportsInFile(file),;
  if (updated) updatedFiles++;
<<<<<<< HEAD
}),;`
// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),;'`
// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
}),;
// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),;
// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
