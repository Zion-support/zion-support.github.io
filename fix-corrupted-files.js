import fs from 'fs';
import { execSync } from 'child_process';

function fixCorruptedFiles() {
  try {
    // Find all TypeScript/TSX files
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules | grep -v ".git"', { encoding: 'utf8' });
    const files = result.trim().split('\n').filter(f => f);
    
    console.log(`Found ${files.length} TypeScript files to check`);
    
    files.forEach(filePath => {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Remove duplicate import statements
        const lines = content.split('\n');
        const seenImports = new Set();
        const cleanedLines = [];
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          // Check if it's an import statement
          if (line.trim().startsWith('import ')) {
            const importKey = line.trim();
            if (seenImports.has(importKey)) {
              console.log(`Removing duplicate import in ${filePath}: ${line.trim()}`);
              modified = true;
              continue; // Skip duplicate import
            }
            seenImports.add(importKey);
          }
          
          // Remove lines that are clearly corrupted (contain merge conflict artifacts)
          if (line.includes('module.exports = {}') || 
              line.includes('cursor/') ||
              line.includes('/* TODO: Fix JSX expression */') ||
              line.includes('export {}; interface') ||
              line.includes('re,') ||
              line.includes('q: NextApiRequest) re,')) {
            console.log(`Removing corrupted line in ${filePath}: ${line.trim()}`);
            modified = true;
            continue;
          }
          
          cleanedLines.push(line);
        }
        
        if (modified) {
          const cleanedContent = cleanedLines.join('\n');
          fs.writeFileSync(filePath, cleanedContent);
          console.log(`Fixed corrupted file: ${filePath}`);
        }
        
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    });
    
  } catch (error) {
    console.error('Error finding files:', error.message);
  }
}

fixCorruptedFiles();