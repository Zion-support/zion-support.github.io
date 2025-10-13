import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common missing imports
const commonImports = {
  'TrendingUp': 'TrendingUp',
  'Settings': 'Settings', 
  'Users': 'Users',
  'Globe': 'Globe',
  'Activity': 'Activity',
  'Zap': 'Zap',
  'Brain': 'Brain',
  'Activity': 'Activity'
};

// Function to fix imports in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Find the lucide-react import
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
    if (importMatch) {
      const currentImports = importMatch[1].split(',').map(imp => imp.trim());
      const newImports = [...currentImports];

      // Check for missing imports
      for (const [iconName, importName] of Object.entries(commonImports)) {
        if (content.includes(`<${iconName}`) || content.includes(`${iconName}.`) || content.includes(`{${iconName}`)) {
          if (!currentImports.includes(importName)) {
            newImports.push(importName);
            modified = true;
          }
        }
      }

      if (modified) {
        const newImportLine = `import { ${newImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importMatch[0], newImportLine);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed imports in: ${filePath}`);
        return true;
      }
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main execution
async function main() {
  const files = await glob('app/**/*.{ts,tsx}');
  
  console.log(`Found ${files.length} files to check...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixImports(path.join(process.cwd(), file))) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);