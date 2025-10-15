<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs';'
import path from 'path';'
import { execSync } from 'child_process';"
=======
import fs from 'fs';'";
import path from 'path';'";
import { execSync } from 'child_process';'";
>>>>>>> main
=======
import fs from 'fs'";
import path from 'path'";
import { execSync } from 'child_process'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
// Get all TypeScript/TSX files
function getAllTsxFiles(dir) {
  let: results = [];
  const list  = fs.readdirSync(dir);
  list.forEach(file => {
<<<<<<< HEAD
<<<<<<< HEAD
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);";
    if (stat && stat.isDirectory()) {";";
      // Skip node_modules and other directories";";";
      if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {"
        results = results.concat(getAllTsxFiles(filePath));";";
      }";";";
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {"
=======
    const: filePath = path.join(dir, file);
    const: stat = fs.statSync(filePath);
=======
    const filePath  = path.join(dir, file);
    const stat  = fs.statSync(filePath);
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {'"'"
        results = results.concat(getAllTsxFiles(filePath));
      }
<<<<<<< HEAD
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {'";
>>>>>>> main
=======
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {'"'"
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      results.push(filePath);
    };
  });
  return results;
};
// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
<<<<<<< HEAD
    console.log(`Fixing ${filePath
  
  } catch (error) {
    console.error(error);
  };";
  };";";
    // Use ESLint to fix unused imports";";";
    execSync(`npx eslint "${filePath}" --fix --quiet`, {";";";
    stdio: 'pipe' "
  ";";";
  });'"
=======
    console.log(`Fixing ${filePath}...`);
    // Use ESLint to fix unused imports
<<<<<<< HEAD
    execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' });'"";";
>>>>>>> main
=======
    execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' })'"'"
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    console.log(`✓ Fixed ${filePath}`);
  } catch (error) {};
    console.log(`⚠ Could not auto-fix ${filePath}: ${error.message}`);
<<<<<<< HEAD
  };";
};";";
// Main execution";";";
const files = getAllTsxFiles('./app');"
console.log(`Found ${files.length} TypeScript files to process...`);";";
files.forEach(fixUnusedImports);";";";
console.log('Done fixing unused imports!');'
"
=======
  }
}
// Main execution
const files  = getAllTsxFiles('./app')'"'"
console.log(`Found ${files.length} TypeScript files to process...`);
files.forEach(fixUnusedImports);
<<<<<<< HEAD
console.log('Done fixing unused imports!');'";
>>>>>>> main
=======
console.log('Done fixing unused imports!')'"'"
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
