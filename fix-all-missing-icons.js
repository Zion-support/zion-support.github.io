import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common icons that are used but might be missing

function fixMissingIcons(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Find all icons used in the file
    const usedIcons = new Set();
    
    // Look for icon: IconName patterns
    const iconMatches = content.matchAll(/icon:\s*(\w+)/g);
    for (const match of iconMatches) {
      usedIcons.add(match[1]);
    }
    
    // Look for <IconName patterns
    const jsxMatches = content.matchAll(/<(\w+)(?:\s|>)/g);
    for (const match of jsxMatches) {
      const iconName = match[1];
      if (commonIcons.includes(iconName)) {
        usedIcons.add(iconName);
      }
    }

    if (usedIcons.size === 0) return false;

    // Check which icons are already imported
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    let importedIcons = new Set();
    
    if (lucideImportMatch) {
      const imports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      importedIcons = new Set(imports);
    }

    // Find missing icons
    const missingIcons = Array.from(usedIcons).filter(icon => !importedIcons.has(icon));
    
    if (missingIcons.length === 0) return false;

    if (lucideImportMatch) {
      // Add missing icons to existing import
      const existingImports = lucideImportMatch[1].trim();
      const newImports = existingImports + ', ' + missingIcons.join(', ');
      const newImportLine = `import { ${newImports} } from 'lucide-react';`;
      content = content.replace(lucideImportMatch[0], newImportLine);
      modified = true;
    } else {
      // Add new import line
      const newImportLine = `import { ${missingIcons.join(', ')} } from 'lucide-react';\n`;
      
      // Find the best place to insert the import
      const useClientMatch = content.match(/('use client';?\s*\n)/);
      if (useClientMatch) {
        content = content.replace(useClientMatch[0], useClientMatch[0] + newImportLine);
      } else {
        content = newImportLine + content;
      }
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      }): ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
        return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let totalFixed = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      totalFixed += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixMissingIcons(filePath)) {
        totalFixed++;
      }
    }
  }

  return totalFixed;
}

const appDir = path.join(__dirname, 'app');
