#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all files with remaining syntax errors
const files = execSync(
  "find /workspace/app -name '*.tsx' -o -name '*.ts' | xargs grep -l 'export const metadata'",
  { encoding: 'utf8' }
)
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

// // Function to process a single file
function processFile(filePath) {
  try {

    // Fix incomplete metadata objects
    const metadataRegex =
      /export const metadata = \{[\s\S]*?(?=\n\nexport default|\n\nconst|\n\nfunction|\n\ninterface|\n\nclass|\n\nconst [A-Z]|\n\n\/\/|\n\n\/\*|\n\nimport|\n\n$)/;

    if (metadataRegex.test(content)) {
      // Remove the entire metadata export
      content = content.replace(metadataRegex, '');
      modified = true;
    }

    // Fix any remaining broken metadata lines

    for (let i = 0; i < lines.length; i++) {

      if (line.includes('export const metadata')) {
        skipUntilExport = true;
        continue;
      }

      if (
        skipUntilExport &&
        (line.trim() === '' ||
          line.includes('export default') ||
          line.includes('const ') ||
          line.includes('function ') ||
          line.includes('interface ') ||
          line.includes('class '))
      ) {
        skipUntilExport = false;
        if (
          line.includes('export default') ||
          line.includes('const ') ||
          line.includes('function ') ||
          line.includes('interface ') ||
          line.includes('class ')
        ) {
          filteredLines.push(line);
        }
        continue;
      }

      if (!skipUntilExport) {
        filteredLines.push(line);
      }
    }

    //     const newContent = filteredLines.join('\n');

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      //       return true;
    }

    return false;
  } catch (error) {
    //     return false;
  }
}

// Process all files
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

// 
}