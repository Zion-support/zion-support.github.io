const fs = require('fs');
const path = require('path');

// Common Lucide React icons that might be missing
const commonIcons = [
  'Shield', 'Zap', 'Star', 'ArrowRight', 'CheckCircle', 'Clock', 'Users', 'Brain', 'Target',
  'Settings', 'RefreshCw', 'Eye', 'Database', 'PieChart', 'LineChart', 'Activity', 'TrendingUp',
  'MessageCircle', 'Cpu', 'Globe', 'BarChart', 'MessageSquare', 'Sparkles', 'Award', 'Cloud',
  'Code', 'BarChart3', 'PieChart3'
];

function findFilesWithMissingIcons(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('lucide-react') && content.includes('<')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

function fixMissingIconsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find all icon usage in JSX
    const iconMatches = content.match(/<(\w+)\s+className/g);
    if (!iconMatches) return;
    
    const usedIcons = new Set();
    iconMatches.forEach(match => {
      const iconName = match.match(/<(\w+)\s+className/)[1];
      if (commonIcons.includes(iconName)) {
        usedIcons.add(iconName);
      }
    });
    
    if (usedIcons.size === 0) return;
    
    // Check current imports
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
    if (!importMatch) return;
    
    const currentImports = importMatch[1].split(',').map(imp => imp.trim());
    const missingIcons = Array.from(usedIcons).filter(icon => !currentImports.includes(icon));
    
    if (missingIcons.length > 0) {
      const newImports = [...currentImports, ...missingIcons].join(', ');
      content = content.replace(
        /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"]/,
        `import { ${newImports} } from 'lucide-react'`
      );
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed missing icons in: ${filePath} - Added: ${missingIcons.join(', ')}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find and fix all files
const files = findFilesWithMissingIcons(path.join(__dirname, 'app'));
files.forEach(fixMissingIconsInFile);

console.log(`Processed ${files.length} files for missing icon imports`);