import fs from 'fs';
import path from 'path';

// Common Lucide React icons used in the project
const commonIcons = [
  'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown',
  'CheckCircle', 'Check', 'X', 'XCircle',
  'Star', 'StarIcon',
  'Shield', 'ShieldCheck',
  'Globe', 'Globe2',
  'Users', 'User', 'UserPlus',
  'Settings', 'Cog',
  'BarChart3', 'BarChart', 'ChartBar',
  'TrendingUp', 'TrendingDown',
  'Zap', 'Bolt',
  'Target', 'Crosshair',
  'Brain', 'Cpu', 'Database',
  'Cloud', 'CloudUpload', 'CloudDownload',
  'Smartphone', 'Phone', 'Mail',
  'Search', 'Filter', 'FilterIcon',
  'Calendar', 'Clock', 'Time',
  'FileText', 'File', 'Files',
  'Bot', 'MessageSquare', 'MessageCircle',
  'Headphones', 'Play', 'Pause',
  'Activity', 'Pulse',
  'Wifi', 'WifiIcon',
  'Award', 'Trophy',
  'DollarSign', 'Dollar',
  'ShoppingCart', 'Cart',
  'Workflow', 'WorkflowIcon',
  'Helmet', 'HelmetIcon',
  'Leaf', 'TreePine',
  'Calculator', 'CalculatorIcon',
  'Eye', 'EyeIcon',
  'Mail', 'MailIcon',
  'Phone', 'PhoneIcon',
  'MessageSquare', 'MessageSquareIcon',
  'MessageCircle', 'MessageCircleIcon',
  'Clock', 'ClockIcon',
  'Calendar', 'CalendarIcon',
  'FileText', 'FileTextIcon',
  'BarChart3', 'BarChart3Icon',
  'TrendingUp', 'TrendingUpIcon',
  'Database', 'DatabaseIcon',
  'Eye', 'EyeIcon',
  'Zap', 'ZapIcon',
  'Shield', 'ShieldIcon',
  'Users', 'UsersIcon',
  'MessageSquare', 'MessageSquareIcon',
  'Bot', 'BotIcon',
  'Clock', 'ClockIcon',
  'Globe', 'GlobeIcon',
  'TrendingUp', 'TrendingUpIcon',
  'Shield', 'ShieldIcon',
  'Users', 'UsersIcon',
  'MessageSquare', 'MessageSquareIcon',
  'Zap', 'ZapIcon',
  'Headphones', 'HeadphonesIcon',
  'CheckCircle', 'CheckCircleIcon',
  'ArrowRight', 'ArrowRightIcon',
  'Star', 'StarIcon',
  'Phone', 'PhoneIcon',
  'Play', 'PlayIcon',
  'Mail', 'MailIcon',
  'Calendar', 'CalendarIcon',
  'BarChart3', 'BarChart3Icon',
  'FileText', 'FileTextIcon',
  'Users', 'UsersIcon',
  'Zap', 'ZapIcon',
  'Shield', 'ShieldIcon',
  'Clock', 'ClockIcon',
  'ArrowRight', 'ArrowRightIcon',
  'Headphones', 'HeadphonesIcon',
  'Search', 'SearchIcon',
  'Filter', 'FilterIcon',
  'User', 'UserIcon',
  'Calendar', 'CalendarIcon',
  'ArrowRight', 'ArrowRightIcon',
  'Award', 'AwardIcon',
  'Users', 'UsersIcon',
  'TrendingUp', 'TrendingUpIcon',
  'Clock', 'ClockIcon',
  'CheckCircle', 'CheckCircleIcon',
  'ArrowRight', 'ArrowRightIcon',
  'CheckCircle', 'CheckCircleIcon',
  'ArrowRight', 'ArrowRightIcon'
];

// Function to extract all icon names used in a file
function extractIconNames(content) {
  const iconPattern = /<(\w+)\s+className="[^"]*"/g;
  const icons = new Set();
  let match;
  
  while ((match = iconPattern.exec(content)) !== null) {
    const iconName = match[1];
    // Only include if it looks like a Lucide icon (starts with capital letter)
    if (iconName[0] === iconName[0].toUpperCase() && iconName.length > 1) {
      icons.add(iconName);
    }
  }
  
  return Array.from(icons);
}

// Function to fix missing imports in a file
function fixMissingImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract icon names used in the file
    const usedIcons = extractIconNames(content);
    
    if (usedIcons.length === 0) {
      return false;
    }
    
    // Check if lucide-react is already imported
    const hasLucideImport = content.includes("from 'lucide-react'");
    
    if (!hasLucideImport) {
      // Find the last import statement
      const importLines = content.split('\n');
      let lastImportIndex = -1;
      
      for (let i = 0; i < importLines.length; i++) {
        if (importLines[i].trim().startsWith('import ')) {
          lastImportIndex = i;
        }
      }
      
      if (lastImportIndex !== -1) {
        // Add lucide-react import after the last import
        const lucideImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';`;
        importLines.splice(lastImportIndex + 1, 0, lucideImport);
        content = importLines.join('\n');
      } else {
        // Add at the beginning
        const lucideImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';\n`;
        content = lucideImport + content;
      }
    } else {
      // Update existing lucide-react import
      const importPattern = /import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]lucide-react['"]/;
      const match = content.match(importPattern);
      
      if (match) {
        const existingIcons = match[1].split(',').map(icon => icon.trim());
        const allIcons = [...new Set([...existingIcons, ...usedIcons])];
        const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
        content = content.replace(importPattern, newImport);
      }
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed imports in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively process all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixMissingImports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting to fix missing icon imports...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed imports in ${fixedCount} files.`);