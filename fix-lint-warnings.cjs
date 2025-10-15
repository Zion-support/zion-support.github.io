const fs = require('fs');
const path = require('path');

// Function to fix unused imports
function fixUnusedImports(content) {
  // Remove unused imports from lucide-react
  const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
  
  return content.replace(lucideImportRegex, (match, imports) => {
    // Split imports and filter out unused ones
    const importList = imports.split(',').map(imp => imp.trim());
    
    // Common unused imports to remove
    const unusedImports = [
      'ArrowRight', 'Phone', 'Mail', 'Play', 'Pause', 'RefreshCw', 'Settings', 'Eye', 'Filter',
      'Calendar', 'Target', 'Award', 'TrendingUp', 'Cpu', 'Database', 'Activity', 'Lock', 'Clock',
      'Smartphone', 'Search', 'Clipboard', 'Bell', 'MessageSquare', 'Scan', 'Bandage', 'Globe',
      'MapPin', 'Download', 'Users', 'PieChart', 'LineChart', 'TrendingDown', 'Calculator',
      'CreditCard', 'Banknote', 'Wallet', 'Receipt', 'ChartBar', 'Percent', 'Coins', 'Building2',
      'PiggyBank', 'HandCoins', 'PenTool', 'Video', 'Headphones', 'Tablet', 'Laptop', 'Wifi',
      'User', 'UsersIcon', 'AwardIcon', 'Trophy', 'TargetIcon', 'Lightbulb', 'DownloadIcon',
      'Upload', 'Edit', 'Trash2', 'Plus', 'Minus', 'Check', 'X', 'GitBranch', 'CheckCircle',
      'BarChart3', 'Cloud', 'Zap', 'useState', 'useEffect', 'setIsVisible', 'isVisible',
      'technologies', 'specialties', 'Link'
    ];
    
    const usedImports = importList.filter(imp => !unusedImports.includes(imp));
    
    if (usedImports.length === 0) {
      return ''; // Remove entire import line if no imports left
    }
    
    return `import { ${usedImports.join(', ')} } from 'lucide-react';`;
  });
}

// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  return content
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;');
}

// Function to remove console statements
function removeConsoleStatements(content) {
  return content.replace(/console\.(log|warn|error|info)\([^)]*\);?\s*/g, '');
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const originalContent = content;
    
    // Fix unused imports
    content = fixUnusedImports(content);
    
    // Fix unescaped entities
    content = fixUnescapedEntities(content);
    
    // Remove console statements
    content = removeConsoleStatements(content);
    
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