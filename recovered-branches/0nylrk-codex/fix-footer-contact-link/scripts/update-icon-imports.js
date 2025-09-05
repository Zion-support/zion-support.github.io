
/**
 * Helper script to update icon imports across the codebase
 * 
 * Usage:
 * 1. Run: node scripts/update-icon-imports.js
 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package
 */

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



