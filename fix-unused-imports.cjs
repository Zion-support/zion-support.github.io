const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files in the app directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Common unused imports to remove
const unusedImports = [
  'Helmet',
  'Star',
  'Users',
  'Award',
  'Zap',
  'Shield',
  'Brain',
  'Cloud',
  'Code',
  'Target',
  'Globe',
  'Database',
  'Smartphone',
  'Lock',
  'TrendingUp',
  'Settings',
  'Calendar',
  'CheckSquare',
  'FileText',
  'MessageCircle',
  'Heart',
  'DollarSign',
  'Box',
  'Monitor',
  'LinkIcon',
  'Server',
  'Package',
  'Mic',
  'Workflow',
  'Eye',
  'Wifi',
  'MessageSquare',
  'ShoppingCart',
  'Phone',
  'Mail',
  'MapPin',
  'BarChart3',
  'Sparkles',
  'Cpu',
  'Satellite',
  'AlertTriangle',
  'BarChart',
  'PieChart',
  'Receipt',
  'CreditCard',
  'Banknote',
  'Camera',
  'Image',
  'Video',
  'RotateCcw',
  'Download',
  'Upload',
  'Lightbulb',
  'Clock',
  'MessageCircle',
  'Filter',
  'Share',
  'Bell',
  'RefreshCw',
  'Pause',
  'SkipForward',
  'SkipBack',
  'Repeat',
  'Shuffle',
  'ThumbsUp',
  'ThumbsDown',
  'Bookmark',
  'Flag',
  'Info',
  'HelpCircle',
  'Plus',
  'Minus',
  'Edit',
  'Trash2',
  'Save',
  'Copy',
  'Paste',
  'Cut',
  'Undo',
  'Redo',
  'Move',
  'Maximize',
  'Minimize',
  'Square',
  'Circle',
  'Triangle',
  'Hexagon',
  'Octagon',
  'Pentagon',
  'Star2',
  'Heart2',
  'Smile',
  'Frown',
  'Meh',
  'Laugh',
  'Angry',
  'Surprised',
  'Confused',
  'Wink',
  'Kiss',
  'Tongue',
  'Wink2',
  'Kiss2',
  'Tongue2',
  'Wink3',
  'Kiss3',
  'Tongue3',
  'Wink4',
  'Kiss4',
  'Tongue4',
  'Wink5',
  'Kiss5',
  'Tongue5',
  'Wink6',
  'Kiss6',
  'Tongue6',
  'Wink7',
  'Kiss7',
  'Tongue7',
  'Wink8',
  'Kiss8',
  'Tongue8'
];

function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports from lucide-react
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    
    content = content.replace(lucideImportRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        // Check if the import is actually used in the file
        const importName = imp.split(' as ')[0].trim();
        const usageRegex = new RegExp(`\\b${importName}\\b`, 'g');
        const usageCount = (content.match(usageRegex) || []).length;
        return usageCount > 1; // More than 1 because the import itself counts as 1
      });
      
      if (usedImports.length === 0) {
        modified = true;
        return ''; // Remove the entire import line
      } else if (usedImports.length < importList.length) {
        modified = true;
        return `import { ${usedImports.join(', ')} } from 'lucide-react';`;
      }
      
      return match;
    });
    
    // Remove unused Helmet imports
    if (content.includes("import { Helmet } from 'react-helmet-async';") && !content.includes('<Helmet>')) {
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?\n?/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all files and process them
const files = getAllFiles('./app');
console.log(`Processing ${files.length} files...`);

files.forEach(file => {
  removeUnusedImports(file);
});

console.log('Unused imports cleanup completed!');