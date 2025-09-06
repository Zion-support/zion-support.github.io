const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflicts
    if (content.includes('
      resolvedContent = resolvedContent.replace(/
      resolvedContent = resolvedContent.replace(/
      resolvedContent = resolvedContent.replace(/
      
      // Clean up any remaining markers
      resolvedContent = resolvedContent.replace(/
      resolvedContent = resolvedContent.replace(/
      
      // Clean up extra whitespace
      resolvedContent = resolvedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`Resolved conflicts in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function traverseDirectory(dir) {
  try {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      try {
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
          traverseDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.json') || fullPath.endsWith('.toml') || fullPath.endsWith('.cjs') || fullPath.endsWith('.css') || fullPath.endsWith('.html') || fullPath.endsWith('.txt') || fullPath.endsWith('.webmanifest')) {
          fixMergeConflicts(fullPath);
        }
      } catch (error) {
        // Skip broken symlinks or inaccessible files
        console.log(`Skipping ${fullPath}: ${error.message}`);
      }
    }
  } catch (error) {
    console.log(`Skipping directory ${dir}: ${error.message}`);
  }
}

traverseDirectory(path.join(__dirname));
console.log('All merge conflicts resolved.');