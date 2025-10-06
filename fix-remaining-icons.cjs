const fs = require('fs');
const path = require('path');

// All possible icons that might be used
const allIcons = [
  'ArrowLeft', 'ArrowRight', 'Calendar', 'Clock', 'User', 'Users', 'DollarSign', 
  'TrendingUp', 'Target', 'CheckCircle', 'Share2', 'Bookmark', 'Tag', 'Brain', 
  'Rocket', 'Satellite', 'Zap', 'Globe', 'Award', 'BookOpen', 'BarChart3',
  'ChevronRight', 'ChevronLeft', 'ExternalLink', 'Mail', 'Phone', 'MapPin',
  'Star', 'Heart', 'ThumbsUp', 'MessageCircle', 'Search', 'Filter', 'Sort',
  'Plus', 'Minus', 'X', 'Check', 'AlertCircle', 'Info', 'HelpCircle'
];

// Find all TypeScript files that might have icon issues
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract all icon names used in the file
    const iconNames = new Set();
    allIcons.forEach(iconName => {
      const regex = new RegExp(`<${iconName}\\s`, 'g');
      if (regex.test(content)) {
        iconNames.add(iconName);
      }
    });

    if (iconNames.size === 0) {
      return;
    }

    // Check if lucide-react import already exists
    const hasLucideImport = content.includes("from 'lucide-react'");
    
    if (hasLucideImport) {
      // Update existing import
      const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/;
      const match = content.match(importRegex);
      
      if (match) {
        const existingIcons = match[1].split(',').map(icon => icon.trim());
        const allIcons = [...new Set([...existingIcons, ...Array.from(iconNames)])];
        const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
        content = content.replace(importRegex, newImport);
      }
    } else {
      // Add new import after the first import
      const firstImportMatch = content.match(/^import\s+[^;]+;?\s*$/m);
      if (firstImportMatch) {
        const newImport = `import { ${Array.from(iconNames).join(', ')} } from 'lucide-react';\n`;
        content = content.replace(firstImportMatch[0], firstImportMatch[0] + newImport);
      } else {
        // Add at the beginning
        content = `import { ${Array.from(iconNames).join(', ')} } from 'lucide-react';\n` + content;
      }
    }

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath} with icons: ${Array.from(iconNames).join(', ')}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find and fix all TypeScript files
const tsxFiles = findTsxFiles('./app');
console.log(`Found ${tsxFiles.length} TypeScript files to check`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  const beforeContent = fs.readFileSync(file, 'utf8');
  fixFile(file);
  const afterContent = fs.readFileSync(file, 'utf8');
  if (beforeContent !== afterContent) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files with icon imports`);