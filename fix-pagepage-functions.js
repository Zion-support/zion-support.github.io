import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: '/workspace' });

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove pagePage function declarations
  if (content.includes('function pagePage() {')) {
    const lines = content.split('\n');
    let newLines = [];
    let inPagePageFunction = false;
    let braceCount = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('function pagePage() {')) {
        inPagePageFunction = true;
        braceCount = 1;
        continue;
      }
      if (inPagePageFunction) {
        for (const char of line) {
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }
        if (braceCount === 0) {
          inPagePageFunction = false;
          continue;
        }
        continue;
      }
      newLines.push(line);
    }
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed pagePage functions: ${file}`);
  }
});

console.log('pagePage function fixes completed');