import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
const files = execSync('find app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Skip if file doesn't exist or is empty
    if (!content) return;
    
    // Check if file has lucide-react imports
    const lucideMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*["']lucide-react["']/);
    if (!lucideMatch) return;
    
    const imports = lucideMatch[1]
      .split(',')
      .map(imp => imp.trim())
      .filter(imp => imp);
    
    // Check which imports are actually used in the file
    const usedImports = imports.filter(imp => {
      // Remove any type annotations or aliases
      const cleanImp = imp.split(' as ')[0].trim();
      // Check if the import is used in the file (not in the import statement itself)
      const regex = new RegExp(`\\b${cleanImp}\\b`, 'g');
      const matches = content.match(regex) || [];
      // Count occurrences outside of import statements
      const importMatches = content.match(new RegExp(`import\\s*{[^}]*\\b${cleanImp}\\b[^}]*}`, 'g')) || [];
      return matches.length > importMatches.length;
    });
    
    // Only update if there are unused imports
    if (usedImports.length !== imports.length) {
      let newContent = content;
      
      if (usedImports.length === 0) {
        // Remove the entire import line
        newContent = content.replace(/import\s*{\s*[^}]+}\s*from\s*["']lucide-react["'];\n?/g, '');
      } else {
        // Replace with only used imports
        const newImportLine = `import { ${usedImports.join(', ')} } from "lucide-react";`;
        newContent = content.replace(/import\s*{\s*[^}]+}\s*from\s*["']lucide-react["']/g, newImportLine);
      }
      
      // Also remove unused Link imports from react-router-dom
      if (newContent.includes('import { Link } from "react-router-dom"') && !newContent.includes('<Link')) {
        newContent = newContent.replace(/import\s*{\s*Link\s*}\s*from\s*["']react-router-dom["'];\n?/g, '');
      }
      
      if (newContent !== content) {
        fs.writeFileSync(file, newContent);
        console.log(`Fixed unused imports in ${file}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Finished fixing unused imports');