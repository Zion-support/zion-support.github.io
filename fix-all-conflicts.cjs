const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflicts
    if (content.includes('') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);

      // Simple merge conflict resolution - take the HEAD version
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let takeHead = true;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes('')) {
          takeHead = false;
          continue;
        } else if (line.includes('>>>>>>>')) {
          inConflict = false;
          continue;
        }

        if (!inConflict || (inConflict && takeHead)) {
          resolvedLines.push(line);
        }
      }
      fs.writeFileSync(filePath, resolvedLines.join('\n'), 'utf8');
      console.log(`Resolved conflicts in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

function traverseDirectory(dir) {
  try {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      try {
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
          traverseDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.json') || fullPath.endsWith('.toml') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) {
          fixMergeConflicts(fullPath);
        }
      } catch (error) {
        // Skip broken symlinks or inaccessible files
        console.log(`Skipping ${fullPath}: ${error.message}`);
      }
    });
  } catch (error) {
    console.log(`Skipping directory ${dir}: ${error.message}`);
  }
}

traverseDirectory(path.join(__dirname));
console.log('All merge conflicts resolved.');