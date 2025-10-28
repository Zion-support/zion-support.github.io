import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function main() {
  // Find all page.tsx files in the app directory
  const pageFiles = await glob('app/**/page.tsx', { cwd: '/workspace' });

  console.log(`Found ${pageFiles.length} page files to process`);

  let fixedCount = 0;
  let errorCount = 0;

  for (const filePath of pageFiles) {
    try {
      const fullPath = path.join('/workspace', filePath);
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Check if the file has unused imports
      if (content.includes('import ') && content.includes('export default function')) {
        const lines = content.split('\n');
        const newLines = [];
        let hasChanges = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          // Check if this is an import line
          if (line.trim().startsWith('import ')) {
            // Extract the imported names
            const importMatch = line.match(/import\s+.*?from\s+['"][^'"]+['"];?/);
            if (importMatch) {
              const importLine = importMatch[0];
              
              // Check if any of the imported names are used in the file
              let isUsed = false;
              
              // Extract imported names (handle different import patterns)
              const namedImportMatch = importLine.match(/import\s+\{([^}]+)\}/);
              const defaultImportMatch = importLine.match(/import\s+(\w+)/);
              const allImportMatch = importLine.match(/import\s+\*\s+as\s+(\w+)/);
              
              if (namedImportMatch) {
                // Named imports
                const namedImports = namedImportMatch[1].split(',').map(name => name.trim().split(' as ')[0].trim());
                for (const importName of namedImports) {
                  if (content.includes(importName) && !line.includes(importName)) {
                    isUsed = true;
                    break;
                  }
                }
              } else if (defaultImportMatch) {
                // Default import
                const defaultImport = defaultImportMatch[1];
                if (content.includes(defaultImport) && !line.includes(defaultImport)) {
                  isUsed = true;
                }
              } else if (allImportMatch) {
                // Namespace import
                const namespaceImport = allImportMatch[1];
                if (content.includes(namespaceImport) && !line.includes(namespaceImport)) {
                  isUsed = true;
                }
              }
              
              if (!isUsed) {
                hasChanges = true;
                continue; // Skip this import line
              }
            }
          }
          
          newLines.push(line);
        }
        
        if (hasChanges) {
          content = newLines.join('\n');
          fs.writeFileSync(fullPath, content);
          fixedCount++;
          console.log(`Removed unused imports: ${filePath}`);
        }
      }
      
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\nProcessing complete:`);
  console.log(`- Fixed: ${fixedCount} files`);
  console.log(`- Errors: ${errorCount} files`);
}

main().catch(console.error);