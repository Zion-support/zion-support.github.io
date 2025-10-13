const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

// List of files with unused imports/variables
const filesToFix = [
  'app/about/page.tsx',
  'app/ai-analytics/page.tsx', 
  'app/ai-automation-platform/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-customer-sentiment-tracker/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/contact/page.tsx',
  'app/pricing/page.tsx',
  'app/services/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused imports - keep only React and Helmet if they exist
    content = content.replace(/import\s*{\s*[^}]*}\s*from\s*['"]lucide-react['"];?\s*\n/g, '');
    content = content.replace(/import\s*{\s*[^}]*}\s*from\s*['"]react-router-dom['"];?\s*\n/g, '');
    
    // Remove unused component imports
    content = content.replace(/import\s*{\s*[^}]*}\s*from\s*['"]\.\.\/components\/[^'"]*['"];?\s*\n/g, '');
    
    // Remove unused variable declarations
    const lines = content.split('\n');
    const filteredLines = lines.filter(line => {
      // Remove lines that declare unused variables
      if (line.includes('const ') && line.includes(' = [')) {
        const varName = line.match(/const\s+(\w+)\s*=/)?.[1];
        if (varName && !content.includes(varName + '[') && !content.includes(varName + '.')) {
          return false;
        }
      }
      return true;
    });
    
    content = filteredLines.join('\n');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('All files fixed!');
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
