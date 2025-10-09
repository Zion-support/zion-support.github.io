import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Comprehensive list of lucide-react icons
const allIcons = [
  'Settings', 'Eye', 'Star', 'Zap', 'Shield', 'ShieldCheck', 'Target', 'Brain', 'Cpu', 'BarChart', 'BarChart3',
  'CheckCircle', 'ArrowRight', 'Clock', 'Users', 'Globe', 'Database', 'PieChart', 'LineChart', 'Activity', 
  'RefreshCw', 'Wifi', 'TrendingUp', 'MessageSquare', 'Sparkles', 'Server', 'Cloud', 'Lock', 'Monitor', 
  'Code', 'Award', 'AlertTriangle', 'Bot', 'Laptop', 'Smartphone', 'Tablet', 'Headphones', 'Camera', 
  'Video', 'Mic', 'Mail', 'Phone', 'MapPin', 'Calendar', 'FileText', 'Download', 'Upload', 'Share',
  'Heart', 'ThumbsUp', 'ThumbsDown', 'Bookmark', 'Flag', 'Search', 'Filter', 'Sort', 'ChevronDown', 
  'ChevronUp', 'ChevronLeft', 'ChevronRight', 'Plus', 'Minus', 'X', 'Edit', 'Trash', 'Copy', 'Save', 
  'Play', 'Pause', 'Stop', 'SkipForward', 'SkipBack', 'Link', 'ExternalLink', 'Download', 'Upload',
  'Home', 'User', 'Users', 'Settings', 'HelpCircle', 'Info', 'AlertCircle', 'Check', 'XCircle'
];

// Find all TypeScript/JavaScript files in the app directory
const files = await glob('app/**/*.{ts,tsx,js,jsx}');

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Skip if it's not a page component
  if (!file.includes('/page.tsx') && !file.includes('/page.js')) {
    continue;
  }
  
  // Find all icon usages in the file
  const iconMatches = content.match(/(\w+)\s+className="[^"]*"/g) || [];
  const usedIcons = new Set();
  
  iconMatches.forEach(match => {
    const iconName = match.split(' ')[0];
    if (allIcons.includes(iconName)) {
      usedIcons.add(iconName);
    }
  });
  
  // Also check for JSX usage like <IconName />
  const jsxMatches = content.match(/<(\w+)\s+[^>]*\/>/g) || [];
  jsxMatches.forEach(match => {
    const iconName = match.match(/<(\w+)/)?.[1];
    if (iconName && allIcons.includes(iconName)) {
      usedIcons.add(iconName);
    }
  });
  
  if (usedIcons.size === 0) continue;
  
  // Check current imports
  const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
  
  if (importMatch) {
    const currentImports = importMatch[1].split(',').map(imp => imp.trim());
    const missingImports = Array.from(usedIcons).filter(icon => !currentImports.includes(icon));
    
    if (missingImports.length > 0) {
      const newImports = [...currentImports, ...missingImports].sort();
      const newImportLine = `import { ${newImports.join(', ')} } from 'lucide-react';`;
      content = content.replace(importMatch[0], newImportLine);
      modified = true;
      console.log(`Fixed imports in ${file}: added ${missingImports.join(', ')}`);
    }
  } else if (usedIcons.size > 0) {
    // Add new import if none exists
    const newImportLine = `import { ${Array.from(usedIcons).sort().join(', ')} } from 'lucide-react';\n`;
    // Find the first import line and add before it
    const firstImportMatch = content.match(/import\s+.*?from\s+['"][^'"]+['"];?\s*\n/);
    if (firstImportMatch) {
      content = content.replace(firstImportMatch[0], newImportLine + firstImportMatch[0]);
    } else {
      // Add at the beginning after any existing comments
      const lines = content.split('\n');
      let insertIndex = 0;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() && !lines[i].trim().startsWith('//') && !lines[i].trim().startsWith('/*')) {
          insertIndex = i;
          break;
        }
      }
      lines.splice(insertIndex, 0, newImportLine);
      content = lines.join('\n');
    }
    modified = true;
    console.log(`Added new import in ${file}: ${Array.from(usedIcons).sort().join(', ')}`);
  }
  
  // Fix missing Link import from Next.js
  if (content.includes('<Link ') && !content.includes("import Link from 'next/link'")) {
    const linkImport = "import Link from 'next/link';\n";
    const firstImportMatch = content.match(/import\s+.*?from\s+['"][^'"]+['"];?\s*\n/);
    if (firstImportMatch) {
      content = content.replace(firstImportMatch[0], linkImport + firstImportMatch[0]);
    } else {
      const lines = content.split('\n');
      let insertIndex = 0;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() && !lines[i].trim().startsWith('//') && !lines[i].trim().startsWith('/*')) {
          insertIndex = i;
          break;
        }
      }
      lines.splice(insertIndex, 0, linkImport);
      content = lines.join('\n');
    }
    modified = true;
    console.log(`Added Link import in ${file}`);
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
  }
}

console.log('All import fixing completed!');