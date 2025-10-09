#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all files with remaining syntax errors
const files = execSync(
  "find /workspace/app -name '*.tsx' -o -name '*.ts' | xargs grep -l 'JSX fragment has no corresponding closing tag'",
  { encoding: 'utf8' }
)
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

// Also get files with other syntax errors
const moreFiles = execSync(
  "find /workspace/app -name '*.tsx' -o -name '*.ts' | xargs grep -l 'error TS1005'",
  { encoding: 'utf8' }
)
  .trim()
  .split('\n')
  .filter(file => file.length > 0);


// // Function to process a single file
function processFile(filePath) {
  try {

    // Fix JSX fragment issues
    if (content.includes('<>') && !content.includes('</>')) {
      // Find the last closing tag and add </> before it

      for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].trim().startsWith('</') && !lines[i].includes('</>')) {
          lastClosingTagIndex = i;
          break;
        }
      }

      if (lastClosingTagIndex !== -1) {
        lines.splice(lastClosingTagIndex + 1, 0, '    </>');
        content = lines.join('\n');
        modified = true;
      }
    }

    // Fix any remaining metadata syntax issues
    content = content.replace(/export const metadata = \{[\s\S]*?\};/g, '');

    // Fix broken object syntax
    content = content.replace(
      /\{\s*title:\s*['"`][^'"`]*['"`]\s*,\s*description:\s*['"`][^'"`]*['"`]\s*,\s*type:\s*['"`][^'"`]*['"`]\s*,\s*url:\s*['"`][^'"`]*['"`]\s*\}/g,
      ''
    );

    // Fix any remaining broken lines

    for (let i = 0; i < lines.length; i++) {

      // Skip broken metadata lines
      if (line.includes('title:') && !line.includes('//') && !line.includes('<title>')) {
        skipUntilSemicolon = true;
        continue;
      }

      if (
        skipUntilSemicolon &&
        (line.trim() === '};' || line.trim() === '}' || line.includes('export default'))
      ) {
        skipUntilSemicolon = false;
        if (line.includes('export default')) {
          filteredLines.push(line);
        }
        continue;
      }

      if (!skipUntilSemicolon) {
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
allFiles.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

// 