import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all .tsx files in the app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the problematic pattern
    if (content.includes('return;\n},')) {
      console.log(`Fixing ${filePath}...`);
      
      // Fix the pattern: replace "return;\n}," with "const features = ["
      content = content.replace(/return;\n},/g, 'const features = [');
      
      // Add missing imports that are commonly needed
      const commonImports = ['Zap', 'Shield', 'FileText', 'Settings', 'Clock', 'BarChart3', 'Target', 'Users', 'Globe', 'CheckCircle', 'Bug', 'ArrowRight', 'Star', 'Brain', 'Leaf', 'Coins', 'Link', 'Calculator', 'TestTube'];
      
      // Find existing lucide-react import
      const importMatch = content.match(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"];?/);
      
      if (importMatch) {
        const currentImports = importMatch[1].split(',').map(imp => imp.trim());
        
        // Add missing imports
        const missingImports = commonImports.filter(imp => !currentImports.includes(imp));
        if (missingImports.length > 0) {
          const newImportLine = importMatch[0].replace(/\{([^}]+)\}/, `{$1, ${missingImports.join(', ')}}`);
          content = content.replace(importMatch[0], newImportLine);
        }
      } else {
        // Add import if it doesn't exist
        const importLine = `import { ${commonImports.join(', ')} } from 'lucide-react';\n`;
        content = importLine + content;
      }
      
      // Add React import if missing
      if (!content.includes("import React")) {
        content = "import React from 'react';\n" + content;
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Find and fix all files
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files!`);