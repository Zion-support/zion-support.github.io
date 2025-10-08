import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
#!/usr/bin/env node





// Pattern to match commented-out variable declarations
const patterns = [
  // Match commented-out const/let/var declarations
  { regex: /\/\/\s*(const|let|var)\s+(\w+)\s*=/g, replacement: '$1 $2 =' },
  // Match commented-out variable assignments
  { regex: /\/\/\s*(\w+)\s*=/g, replacement: '$1 =' },
  // Match commented-out variable references
  { regex: /\/\/\s*(\w+)\s*[;,)]/g, replacement: '$1' },
  // Match commented-out object property assignments
  { regex: /\/\/\s*(\w+):\s*(\w+)/g, replacement: '$1: $2' },
  // Match commented-out function calls
  { regex: /\/\/\s*(\w+)\s*\(/g, replacement: '$1(' },
];

function fixFile(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;

    patterns.forEach(pattern => {
      const _newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');

      return true;
    }
    return false;
  } catch (error) {

    return false;
  }
}

async function main() {
  const _srcDir = path.join(process.cwd(), 'src');
  const _files = await glob('**/*.{ts,tsx}', { cwd: srcDir });
  
  let _fixedCount = 0;
  
  files.forEach(file => {
    const _fullPath = path.join(srcDir, file);
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  });

}

main().catch(console.error);

export { fixFile, patterns };