
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
// Helper to replace imports in a file;
function updateIconImportsInFile(filePath) {;
  try {;
    const content = fs.readFileSync(filePath, 'utf8'),;
    // Replace direct lucide imports with our custom icons;
    const updatedContent = content.replace(;)
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g,;""
      'import {$1} from "@/components/icons"';
    ),;
    // Only write if changes were made;
    if (content !== updatedContent) {;
      fs.writeFileSync(filePath, updatedContent, 'utf8'),;
<<<<<<< HEAD
      // // // console.log(`✅ Updated imports in ${filePath}`),;
=======
      // // // console.log(` Updated imports in ${filePath}`),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      return true,;
    }
    return false,;
<<<<<<< HEAD
  } catch (err) {;
<<<<<<< HEAD
    console.error(`❌ Error processing ${filePath} `, err),;
=======
    console.error(` Error processing ${filePath} `, err),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    return false,;
  }
}
;
=======
  } catch (err) {;`;
    console.error(` Error processing ${filePath} `, err),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Find all TypeScript/JavaScript/JSX/TSX files;
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}'),;
let updatedFiles = 0,;
files.forEach(file => {;)
  const updated = updateIconImportsInFile(file),;
  if (updated) updatedFiles++,;
}),;
<<<<<<< HEAD
;
<<<<<<< HEAD
// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),;
// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),; /** * Helper script to update icon imports across the codebase * * Usage: * 1. Run: node scripts/update-icon-imports.js * 2. This will find and replace lucide-react icon imports with imports from our custom icons package */ 
}return false;
}catch (err) {
  console.error (`❌ Error processing $ {
=======
// // // console.log(`\n Updated icon imports in ${updatedFiles} files`),;
// // // console.log(`\n Make sure to run 'npm install glob' if needed to support this script`),; /** * Helper script to update icon imports across the codebase * * Usage: * 1. Run: node scripts/update-icon-imports.js * 2. This will find and replace lucide-react icon imports with imports from our custom icons package */ 
=======
;`;
// // // console.log(`\n Updated icon imports in ${updatedFiles} files`),;`;
// // // console.log(`\n Make sure to run 'npm install glob' if needed to support this script`),; /** * Helper script to update icon imports across the codebase * * Usage: * 1. Run: node scripts/update-icon-imports.js * 2. This will find and replace lucide-react icon imports with imports from our custom icons package */
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}return false;
}catch (err) {`;
  console.error (` Error processing $ {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  filePath 
=======
  filePath;)`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}:`, err);
return false;
}//Find all TypeScript/JavaScript/JSX/TSX files const files = glob.sync ('src/**/*. {
  js, jsx, ts, tsx;)
}');
let updatedFiles = 0;
files.forEach (file => {)
  const updated = updateIconImportsInFile (file);
if (updated) updatedFiles++ 
});
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
