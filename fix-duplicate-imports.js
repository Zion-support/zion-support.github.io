import fs from 'fs';
import { glob } from 'glob';
#!/usr/bin/env node




// Function to process a file
function processFile(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;

    // Split content into lines
    const _lines = content.split('\n');
    const _newLines = [];
    let _seenReactImport = false;

    for (let i = 0; i < lines.length; i++) {
      const _line = lines[i];

      // Check if this is a React import
      if (line.trim().startsWith("")) {
        if (!seenReactImport) {
          newLines.push(line);
          seenReactImport = true;
          modified = true;
        }
        // Skip duplicate React imports
      } else {
        newLines.push(line);
      }
    }

    if (modified) {
      content = newLines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');

      return true;
    }

    return false;
  } catch (error) {

    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/JavaScript files in app directory
  const _files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  let _fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });

}

main().catch(console.error);
