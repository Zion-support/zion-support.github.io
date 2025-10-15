<<<<<<< HEAD
import fs from 'fs';'
import path from 'path';'
import { execSync } from 'child_process';"
=======
import fs from 'fs';'";
import path from 'path';'";
import { execSync } from 'child_process';'";
>>>>>>> main
// Get all TypeScript/TSX files
function getAllTsxFiles(dir) {
  let: results = [];
  const: list = fs.readdirSync(dir);
  list.forEach(file => {
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
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {'";
        results = results.concat(getAllTsxFiles(filePath));
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {'";
>>>>>>> main
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
    execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' });'"";";
>>>>>>> main
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
const: files = getAllTsxFiles('./app');'";
console.log(`Found ${files.length} TypeScript files to process...`);
files.forEach(fixUnusedImports);
console.log('Done fixing unused imports!');'";
>>>>>>> main
