const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix duplicate imports
  const importLines = content.split('\n').filter(line => line.trim().startsWith('import '));
  const uniqueImports = new Set();
  const cleanedImports = [];

  importLines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !uniqueImports.has(trimmed)) {
      uniqueImports.add(trimmed);
      cleanedImports.push(line);
    }
  });

  // Remove all import lines and add back the unique ones
  if (importLines.length !== cleanedImports.length) {
    content = content.split('\n').filter(line => !line.trim().startsWith('import ')).join('\n');
    content = cleanedImports.join('\n') + '\n' + content;
    modified = true;
  }

  // Fix multiple default exports
  const defaultExports = content.match(/export default/g);
  if (defaultExports && defaultExports.length > 1) {
    // Keep only the last default export
    const lines = content.split('\n');
    let foundFirst = false;
    const newLines = lines.filter(line => {
      if (line.trim().startsWith('export default')) {
        if (foundFirst) {
          return false; // Remove subsequent default exports
        } else {
          foundFirst = true;
          return true; // Keep the first one
        }
      }
      return true;
    });
    content = newLines.join('\n');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed duplicates in: ${file}`);
  }
});

console.log('Duplicate import and export fixes completed!');