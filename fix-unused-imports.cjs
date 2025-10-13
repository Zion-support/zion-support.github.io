const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules | grep -v dist', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${files.length} files to process`);

let fixedFiles = 0;

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    let newContent = content;
    
    // Remove unused imports (simple pattern matching)
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip if it's not an import line
      if (!line.trim().startsWith('import ')) {
        newLines.push(line);
        continue;
      }
      
      // Check if this is a multi-line import
      if (line.includes('{') && !line.includes('}')) {
        // Multi-line import starting
        const importLines = [line];
        let j = i + 1;
        while (j < lines.length && !lines[j].includes('}')) {
          importLines.push(lines[j]);
          j++;
        }
        if (j < lines.length) {
          importLines.push(lines[j]);
        }
        
        // Check if any of the imported items are used in the file
        const fullImport = importLines.join('\n');
        const importMatches = fullImport.match(/\{([^}]+)\}/);
        if (importMatches) {
          const imports = importMatches[1].split(',').map(imp => imp.trim().split(' as ')[0].trim());
          const usedImports = imports.filter(imp => {
            if (imp === 'React' || imp === 'lazy' || imp === 'Suspense') return true;
            const regex = new RegExp(`\\b${imp}\\b`, 'g');
            const fileContent = content.replace(fullImport, '');
            return regex.test(fileContent);
          });
          
          if (usedImports.length === 0) {
            // Remove the entire import
            i = j;
            continue;
          } else if (usedImports.length < imports.length) {
            // Keep only used imports
            const newImport = fullImport.replace(/\{[^}]+\}/, `{ ${usedImports.join(', ')} }`);
            newLines.push(newImport);
            i = j;
            continue;
          }
        }
        
        // Keep the original import
        importLines.forEach(l => newLines.push(l));
        i = j;
      } else {
        // Single line import
        const importMatch = line.match(/import\s+.*\s+from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const moduleName = importMatch[1];
          if (moduleName.includes('lucide-react')) {
            // Check if any lucide-react imports are used
            const importMatches = line.match(/\{([^}]+)\}/);
            if (importMatches) {
              const imports = importMatches[1].split(',').map(imp => imp.trim().split(' as ')[0].trim());
              const usedImports = imports.filter(imp => {
                const regex = new RegExp(`\\b${imp}\\b`, 'g');
                const fileContent = content.replace(line, '');
                return regex.test(fileContent);
              });
              
              if (usedImports.length === 0) {
                // Remove the entire import
                continue;
              } else if (usedImports.length < imports.length) {
                // Keep only used imports
                const newImport = line.replace(/\{[^}]+\}/, `{ ${usedImports.join(', ')} }`);
                newLines.push(newImport);
                continue;
              }
            }
          }
        }
        
        newLines.push(line);
      }
    }
    
    const finalContent = newLines.join('\n');
    if (finalContent !== content) {
      fs.writeFileSync(file, finalContent);
      console.log(`Fixed: ${file}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedFiles} files`);