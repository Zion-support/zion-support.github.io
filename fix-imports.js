import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common lucide-react icons that might be missing
const commonIcons = [
  'Settings', 'Eye', 'Star', 'Zap', 'Shield', 'ShieldCheck', 'Target', 'Brain', 'Cpu', 'BarChart',
  'CheckCircle', 'ArrowRight', 'Clock', 'Users', 'Globe', 'Database', 'PieChart',
  'LineChart', 'Activity', 'RefreshCw', 'Wifi', 'TrendingUp', 'MessageSquare',
  'Sparkles', 'Server', 'Cloud', 'Lock', 'Monitor', 'Code', 'Award', 'AlertTriangle',
  'Bot', 'Laptop', 'Smartphone', 'Tablet', 'Headphones', 'Camera', 'Video', 'Mic',
  'Mail', 'Phone', 'MapPin', 'Calendar', 'FileText', 'Download', 'Upload', 'Share',
  'Heart', 'ThumbsUp', 'ThumbsDown', 'Bookmark', 'Flag', 'Search', 'Filter', 'Sort',
  'ChevronDown', 'ChevronUp', 'ChevronLeft', 'ChevronRight', 'Plus', 'Minus', 'X',
  'Edit', 'Trash', 'Copy', 'Save', 'Play', 'Pause', 'Stop', 'SkipForward', 'SkipBack'
];

// Find all TypeScript/JavaScript files in the app directory
const files = await glob('app/**/*.{ts,tsx,js,jsx}');

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if it's not a page component or doesn't use lucide-react
  if (!file.includes('/page.tsx') || !content.includes('lucide-react')) {
    continue;
  }
  
  // Find all icon usages in the file
  const iconMatches = content.match(/(\w+)\s+className="[^"]*"/g) || [];
  const usedIcons = new Set();
  
  iconMatches.forEach(match => {
    const iconName = match.split(' ')[0];
    if (commonIcons.includes(iconName)) {
      usedIcons.add(iconName);
    }
  });
  
  if (usedIcons.size === 0) continue;
  
  // Check current imports
  const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
  if (!importMatch) continue;
  
  const currentImports = importMatch[1].split(',').map(imp => imp.trim());
  const missingImports = Array.from(usedIcons).filter(icon => !currentImports.includes(icon));
  
  if (missingImports.length > 0) {
    const newImports = [...currentImports, ...missingImports].sort();
    const newImportLine = `import { ${newImports.join(', ')} } from 'lucide-react';`;
    content = content.replace(importMatch[0], newImportLine);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports in ${file}: added ${missingImports.join(', ')}`);
  }
}

console.log('Import fixing completed!');