const fs = require('fs');
const path = require('path');

// Common icons that are frequently used
const commonIcons = [
  'CheckCircle', 'ArrowRight', 'Phone', 'Mail', 'Play', 'Pause', 'RefreshCw', 'Settings', 'Eye', 'Filter',
  'Calendar', 'Target', 'Award', 'TrendingUp', 'Cpu', 'Database', 'Activity', 'Lock', 'Clock',
  'Smartphone', 'Search', 'Clipboard', 'Bell', 'MessageSquare', 'Scan', 'Bandage', 'Globe',
  'MapPin', 'Download', 'Users', 'PieChart', 'LineChart', 'TrendingDown', 'Calculator',
  'CreditCard', 'Banknote', 'Wallet', 'Receipt', 'ChartBar', 'Percent', 'Coins', 'Building2',
  'PiggyBank', 'HandCoins', 'PenTool', 'Video', 'Headphones', 'Tablet', 'Laptop', 'Wifi',
  'User', 'UsersIcon', 'AwardIcon', 'Trophy', 'TargetIcon', 'Lightbulb', 'DownloadIcon',
  'Upload', 'Edit', 'Trash2', 'Plus', 'Minus', 'Check', 'X', 'GitBranch', 'BarChart3',
  'Cloud', 'Zap', 'Headphones', 'Search', 'Percent', 'MessageSquare', 'CreditCard',
  'Calculator', 'Receipt', 'Wifi', 'Smartphone', 'Settings', 'Cpu', 'Activity'
];

// Function to find which icons are used in a file
function findUsedIcons(content) {
  const usedIcons = new Set();
  
  for (const icon of commonIcons) {
    const regex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content.match(regex);
    if (matches && matches.length > 0) {
      usedIcons.add(icon);
    }
  }
  
  return Array.from(usedIcons);
}

// Function to add missing imports
function addMissingImports(content) {
  const usedIcons = findUsedIcons(content);
  
  if (usedIcons.length === 0) {
    return content;
  }
  
  // Check if there's already a lucide-react import
  const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/;
  const existingImport = content.match(lucideImportRegex);
  
  if (existingImport) {
    // Merge with existing imports
    const existingIcons = existingImport[1].split(',').map(imp => imp.trim());
    const allIcons = [...new Set([...existingIcons, ...usedIcons])].sort();
    
    content = content.replace(lucideImportRegex, `import { ${allIcons.join(', ')} } from 'lucide-react';`);
  } else {
    // Add new import at the top
    const lines = content.split('\n');
    let insertIndex = 0;
    
    // Find the first import line
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        insertIndex = i;
        break;
      }
    }
    
    lines.splice(insertIndex, 0, `import { ${usedIcons.join(', ')} } from 'lucide-react';`);
    content = lines.join('\n');
  }
  
  return content;
}

// Function to fix JSX parsing errors
function fixJSXErrors(content) {
  // Fix common JSX issues
  content = content.replace(/<>\s*<>\s*/g, '<>');
  content = content.replace(/\s*<\/>\s*<\/>/g, '</>');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const originalContent = content;
    
    // Add missing imports
    content = addMissingImports(content);
    
    // Fix JSX errors
    content = fixJSXErrors(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process...`);

let modifiedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    modifiedCount++;
  }
}

console.log(`\nProcessed ${files.length} files, modified ${modifiedCount} files.`);