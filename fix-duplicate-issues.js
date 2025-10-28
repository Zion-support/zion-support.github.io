import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = await glob('app/**/*.tsx', { cwd: process.cwd() });
let fixedCount = 0;

files.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;

  // Fix duplicate export default statements
  const exportDefaultMatches = content.match(/export default [^;]+;/g);
  if (exportDefaultMatches && exportDefaultMatches.length > 1) {
    // Keep only the last export default
    const lastExport = exportDefaultMatches[exportDefaultMatches.length - 1];
    content = content.replace(/export default [^;]+;/g, '');
    content = content + '\n' + lastExport;
    modified = true;
  }

  // Fix duplicate imports
  const lines = content.split('\n');
  const seenImports = new Set();
  const cleanedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('import ')) {
      const importKey = line.trim();
      if (seenImports.has(importKey)) {
        // Skip duplicate import
        continue;
      } else {
        seenImports.add(importKey);
        cleanedLines.push(line);
      }
    } else {
      cleanedLines.push(line);
    }
  }
  
  if (cleanedLines.length !== lines.length) {
    content = cleanedLines.join('\n');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(fullPath, content);
    fixedCount++;
    console.log(`Fixed: ${filePath}`);
  }
});

console.log(`Fixed ${fixedCount} files with duplicate issues`);