const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Split content into lines
  const lines = content.split('\n');
  const newLines = [];
  let inImportSection = true;
  const seenImports = new Set();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('import ')) {
      if (!seenImports.has(trimmed)) {
        seenImports.add(trimmed);
        newLines.push(line);
      } else {
        modified = true;
      }
    } else if (trimmed && !trimmed.startsWith('//') && !trimmed.startsWith('/*')) {
      inImportSection = false;
      newLines.push(line);
    } else if (inImportSection && trimmed === '') {
      // Keep empty lines in import section
      newLines.push(line);
    } else if (!inImportSection) {
      newLines.push(line);
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, newLines.join('\n'));
    console.log(`Fixed duplicates in: ${file}`);
  }
});

console.log('All duplicate import fixes completed!');