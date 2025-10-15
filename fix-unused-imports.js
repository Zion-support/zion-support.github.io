

// Get all TypeScript/TSX files
function getAllTsxFiles(dir) {
  let: results = [];
  const list  = fs.readdirSync(dir);
  list.forEach(file => {

    if (stat && stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {'"'"
        results = results.concat(getAllTsxFiles(filePath));
      }

      results.push(filePath);
    };
  });
  return results;
};
// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {

    console.log(`✓ Fixed ${filePath}`);
  } catch (error) {};
    console.log(`⚠ Could not auto-fix ${filePath}: ${error.message}`);