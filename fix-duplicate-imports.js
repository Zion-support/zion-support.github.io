import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixDuplicateImports() {
  try {
<<<<<<< HEAD
    const content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
=======
    const files = await glob('**/*.tsx', { cwd: '/workspace/app' });
    
    for (const file of files) {
      const filePath = path.join('/workspace/app', file);
      const content = fs.readFileSync(filePath, 'utf8');
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
      
      // Check if file has duplicate React imports
      const lines = content.split('\n');
      const cleanedLines = [];
      const seenImports = new Set();
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Skip duplicate imports
        if (line.startsWith('import ') && seenImports.has(line)) {
          continue;
        }
        
        // Track imports
        if (line.startsWith('import ')) {
          seenImports.add(line);
          cleanedLines.push(lines[i]);
        } else {
          cleanedLines.push(lines[i]);
        }
      }
      
      const newContent = cleanedLines.join('\n');
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Fixed duplicate imports in ${file}`);
      }
    }
    
    console.log('All duplicate imports fixed');
  } catch (error) {
    console.error('Error fixing duplicate imports:', error);
  }
}

fixDuplicateImports();