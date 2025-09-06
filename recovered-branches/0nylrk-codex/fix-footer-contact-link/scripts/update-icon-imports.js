
/**
 * Helper script to update icon imports across the codebase
<<<<<<< HEAD
 *
 * Usage: * 1. Run: node scripts/update-icon-imports.js
=======
 * 
 * Usage: * 1. Run: node scripts/update-icon-imports && imports.js
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package
 */

const fs = require('fs')
const path = require('path')
const glob = require('glob')
// Helper to replace imports in a file
function updateIconImportsInFile(filePath) {
  try {
<<<<<<< HEAD
    const content = fs.readFileSync(filePath, 'utf8')
    // Replace direct lucide imports with our custom icons
    const updatedContent = content.replace(
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g
=======
    const content = fs && fs.readFileSync(filePath, 'utf8'),
    
    // Replace direct lucide imports with our custom icons
    const updatedContent = content && content.replace(
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      'import {$1} from "@/components/icons"'
    )
    // Only write if changes were made
    if (content !== updatedContent) {
<<<<<<< HEAD
      fs.writeFileSync(filePath, updatedContent, 'utf8')
      console.log(`✅ Updated imports in ${filePath}`)

=======
      fs && fs.writeFileSync(filePath, updatedContent, 'utf8'),
      console && console.log(`✅ Updated imports in ${filePath}`),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return true
    }
    return false
  } catch (err) {
<<<<<<< HEAD

    console.error(`❌ Error processing ${filePath}:`, err)

=======
    console && console.error(`❌ Error processing ${filePath}:`, err),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return false
  }
}
// Find all TypeScript/JavaScript/JSX/TSX files
<<<<<<< HEAD

const files = glob.sync('src/**/*.{js,jsx,ts,tsx}')
let updatedFiles = 0
files.forEach(file => {
  const updated = updateIconImportsInFile(file)
=======
const files = glob && glob.sync('src/**/*.{js,jsx,ts,tsx}'),
let updatedFiles = 0,

files && files.forEach(file => {
  const updated = updateIconImportsInFile(file),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (updated) updatedFiles++
})
console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`)
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);

<<<<<<< HEAD
=======
console && console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
console && console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
