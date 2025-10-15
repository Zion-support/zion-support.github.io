const fs = require('fs');
const path = require('path');

// Common icons that are missing
const commonIcons = [
  'Shield', 'Settings', 'BarChart3', 'TrendingUp', 'Database', 'Eye', 'Zap', 'Target', 'Users',
  'CheckCircle', 'FileText', 'Clock', 'Bot', 'Workflow', 'Brain', 'Headphones', 'ShoppingCart',
  'Cpu', 'Activity', 'Star', 'Phone', 'Play', 'ArrowRight', 'Mail', 'MessageSquare', 'Globe',
  'MessageCircle', 'DollarSign', 'Calendar', 'Award', 'Search', 'Filter', 'User', 'Helmet',
  'DollarSign', 'AlertTriangle', 'Heart', 'Bot', 'Workflow', 'Brain', 'Headphones', 'ShoppingCart',
  'Cpu', 'Activity', 'Star', 'Phone', 'Play', 'ArrowRight', 'Mail', 'MessageSquare', 'Globe',
  'MessageCircle', 'DollarSign', 'Calendar', 'Award', 'Search', 'Filter', 'User', 'Helmet'
];

function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has lucide-react import
    if (!content.includes("from 'lucide-react'")) {
      return;
    }
    
    // Extract current imports
    const importMatch = content.match(/import\s*{([^}]+)}\s*from\s*['"]lucide-react['"]/);
    if (!importMatch) return;
    
    const currentImports = importMatch[1].split(',').map(imp => imp.trim());
    
    // Find all icon usages in JSX
    const iconMatches = content.match(/<(\w+)\s+className=/g) || [];
    const usedIcons = new Set();
    
    iconMatches.forEach(match => {
      const iconName = match.match(/<(\w+)\s+className=/)[1];
      if (commonIcons.includes(iconName)) {
        usedIcons.add(iconName);
      }
    });
    
    // Add missing imports
    const missingImports = Array.from(usedIcons).filter(icon => !currentImports.includes(icon));
    
    if (missingImports.length > 0) {
      const newImports = [...currentImports, ...missingImports].sort();
      const newImportStatement = `import { ${newImports.join(', ')} } from 'lucide-react';`;
      
      content = content.replace(importMatch[0], newImportStatement);
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in ${filePath}: Added ${missingImports.join(', ')}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Find all .tsx files in app directory
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

// Process all files
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

tsxFiles.forEach(file => {
  fixImports(file);
});

console.log('Import fixing complete!');
