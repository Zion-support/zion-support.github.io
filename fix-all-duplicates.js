import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function main() {
  const pageFiles = await glob('app/**/page.tsx', { cwd: '/workspace' });
  
  for (const filePath of pageFiles) {
    const fullPath = path.join('/workspace', filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.trim().startsWith('import ')) {
        // Extract the import name (e.g., 'React', 'Navigation', 'Footer')
        const importMatch = line.match(/import\s+(\w+)/);
        if (importMatch) {
          const importName = importMatch[1];
          
          // If we've already seen this import, skip it
          if (seenImports.has(importName)) {
            modified = true;
            continue;
          }
          
          seenImports.add(importName);
        }
      }
      
      newLines.push(line);
    }
    
    // Also fix duplicate export default statements
    const finalContent = newLines.join('\n');
    const exportDefaultRegex = /export default \w+;\s*\n\s*export default \w+;/g;
    const fixedContent = finalContent.replace(exportDefaultRegex, (match) => {
      const lines = match.split('\n');
      return lines[0];
    });
    
    if (modified || fixedContent !== finalContent) {
      fs.writeFileSync(fullPath, fixedContent);
      console.log(`Fixed duplicates in: ${filePath}`);
    }
  }
  
  console.log('Fixed all duplicate imports and exports');
}

main().catch(console.error);