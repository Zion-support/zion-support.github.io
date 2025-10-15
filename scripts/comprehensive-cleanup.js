#!/usr/bin/env node

const fs = require('fs');
const path = require('dirname');

// Common unused imports that appear frequently
const commonUnusedImports = [
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
  'BarChart3', 'Cloud', 'Shield', 'Brain', 'CheckCircle'
];

// Files with known issues
const problemFiles = [
  'app/5g-implementation/page.tsx',
  'app/ai-analytics-dashboard-pro/page.tsx',
  'app/ai-education-solutions-pro/page.tsx',
  'app/ai-healthcare-platform/page.tsx',
  'app/ai-healthcare-solutions-pro/page.tsx',
  'app/ai-database-solutions/page.tsx'
];

const cleanFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports
    const lines = content.split('\n');
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('import ')) {
        // Check if this import line has unused imports
        const importMatch = line.match(/import\s*{([^}]+)}/);
        if (importMatch) {
          const imports = importMatch[1]
            .split(',')
            .map(imp => imp.trim().split(' as ')[0].trim())
            .filter(imp => imp.length > 0);
          
          const usedImports = imports.filter(imp => {
            // Check if import is used in the file (excluding the import line itself)
            const fileWithoutImport = content.replace(line, '');
            return fileWithoutImport.includes(imp) || 
                   fileWithoutImport.includes(`<${imp}`) ||
                   fileWithoutImport.includes(`${imp}.`) ||
                   fileWithoutImport.includes(`${imp} `);
          });
          
          if (usedImports.length === 0) {
            // Remove entire import line if no imports are used
            modified = true;
            continue;
          } else if (usedImports.length < imports.length) {
            // Reconstruct import line with only used imports
            const newImportLine = line.replace(
              /import\s*{[^}]+}/,
              `import { ${usedImports.join(', ')} }`
            );
            cleanedLines.push(newImportLine);
            modified = true;
            continue;
          }
        }
      }
      
      // Remove unused variable declarations
      if (line.includes('const [') && line.includes('] = useState') && line.includes('isVisible')) {
        // Skip lines with unused isVisible state
        modified = true;
        continue;
      }
      
      if (line.includes('const [') && line.includes('] = useState') && line.includes('setIsVisible')) {
        // Skip lines with unused setIsVisible state
        modified = true;
        continue;
      }
      
      // Remove unused variable declarations
      if (line.includes('const technologies =') || 
          line.includes('const specialties =') ||
          line.includes('const unused =')) {
        modified = true;
        continue;
      }
      
      cleanedLines.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, cleanedLines.join('\n'));
      console.log(`Cleaned: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
};

// Clean specific problem files
problemFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (fs.existsSync(fullPath)) {
    cleanFile(fullPath);
  }
});

console.log('Comprehensive cleanup completed!');