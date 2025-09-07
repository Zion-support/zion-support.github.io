/**
 * Helper script to update icon imports across the codebase
 * 
 * Usage: * 1. Run: node scripts/update-icon-imports.js
 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package
 */

const fs = require($2);
const path = require($2);
const glob = require($2);
// Helper to replace imports in a file
function updateIconImportsInFile(filePath) {
  try {
    const content = fs.readFileSync($2);
    // Replace direct lucide imports with our custom icons
    const updatedContent = $2;
      'import {$1} from "@/components/icons"'
    ),
    // Only write if changes were made
    if (content !== updatedContent) {
      fs.writeFileSync($2);
      console.log($2);
      return true
    }
    
    return false
  } catch (err) {
    console.error($2);
    return false
  }
}
// Find all TypeScript/JavaScript/JSX/TSX files
const files = glob.sync($2);
let updatedFiles = $2;
files.forEach($2);
  if (updated) updatedFiles++
}),

console.log($2);
console.log($2);