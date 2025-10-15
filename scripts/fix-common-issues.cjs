#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common unused imports to remove
const unusedImports = [
  'ArrowRight', 'Phone', 'Mail', 'Play', 'Pause', 'RefreshCw', 'Settings',
  'Eye', 'Filter', 'Target', 'Users', 'Award', 'TrendingUp', 'Cpu', 'Database',
  'Activity', 'Clock', 'FileText', 'Send', 'ThumbsUp', 'ThumbsDown', 'AlertCircle',
  'CheckSquare', 'XCircle', 'PieChart', 'LineChart', 'TrendingDown', 'Calculator',
  'CreditCard', 'Banknote', 'Wallet', 'Receipt', 'ChartBar', 'Percent', 'Coins',
  'Building2', 'PiggyBank', 'HandCoins', 'PenTool', 'Video', 'Headphones',
  'Smartphone', 'Tablet', 'Laptop', 'Wifi', 'Lock', 'User', 'UsersIcon',
  'AwardIcon', 'Trophy', 'TargetIcon', 'Lightbulb', 'Clipboard', 'Calendar',
  'MessageSquare', 'Share2', 'DownloadIcon', 'Upload', 'Edit', 'Trash2',
  'Plus', 'Minus', 'Check', 'X', 'Globe', 'MapPin', 'Download', 'Zap',
  'BarChart3', 'Cloud', 'Shield', 'Brain', 'CheckCircle', 'useState', 'useEffect'
];

// Fix unescaped entities
const fixUnescapedEntities = (content) => {
  return content
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/"/g, '&ldquo;')
    .replace(/"/g, '&rdquo;');
};

// Remove unused imports
const removeUnusedImports = (content) => {
  const lines = content.split('\n');
  const cleanedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('import ')) {
      const importMatch = line.match(/import\s*{([^}]+)}/);
      if (importMatch) {
        const imports = importMatch[1]
          .split(',')
          .map(imp => imp.trim().split(' as ')[0].trim())
          .filter(imp => imp.length > 0);
        
        const usedImports = imports.filter(imp => {
          if (unusedImports.includes(imp)) return false;
          const fileWithoutImport = content.replace(line, '');
          return fileWithoutImport.includes(imp) || 
                 fileWithoutImport.includes(`<${imp}`) ||
                 fileWithoutImport.includes(`${imp}.`) ||
                 fileWithoutImport.includes(`${imp} `);
        });
        
        if (usedImports.length === 0) {
          continue; // Skip entire import line
        } else if (usedImports.length < imports.length) {
          const newImportLine = line.replace(
            /import\s*{[^}]+}/,
            `import { ${usedImports.join(', ')} }`
          );
          cleanedLines.push(newImportLine);
          continue;
        }
      }
    }
    
    // Remove unused variable declarations
    if (line.includes('const [') && line.includes('] = useState') && 
        (line.includes('isVisible') || line.includes('setIsVisible'))) {
      continue;
    }
    
    if (line.includes('const technologies =') || 
        line.includes('const specialties =') ||
        line.includes('const unused =')) {
      continue;
    }
    
    cleanedLines.push(line);
  }
  
  return cleanedLines.join('\n');
};

// Remove console statements
const removeConsoleStatements = (content) => {
  return content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);?\s*/g, '');
};

// Process a single file
const processFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports
    const cleanedContent = removeUnusedImports(content);
    if (cleanedContent !== content) {
      content = cleanedContent;
      modified = true;
    }
    
    // Remove console statements
    const noConsoleContent = removeConsoleStatements(content);
    if (noConsoleContent !== content) {
      content = noConsoleContent;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Get all files recursively
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Main execution
const appDir = path.join(__dirname, '..', 'app');
const files = getAllFiles(appDir);

console.log(`Processing ${files.length} files...`);

files.forEach(processFile);

console.log('Common issues fixed!');