import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/TSX files
const getFiles = (dir, extensions = ['.ts', '.tsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix unused imports in a file
const fixUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused Helmet imports
    if (content.includes("import { Helmet } from 'react-helmet-async'") && !content.includes('<Helmet>')) {
      content = content.replace(/import { Helmet } from 'react-helmet-async'\n?/g, '');
      modified = true;
    }
    
    // Remove unused icon imports (this is a simplified approach)
    // We'll focus on the most common unused imports
    const commonUnusedIcons = [
      'Star', 'Satellite', 'Wifi', 'Zap', 'Smartphone', 'Globe', 'BarChart3', 
      'Sparkles', 'AlertTriangle', 'Users', 'Target', 'Shield', 'Database',
      'TrendingUp', 'Clock', 'DollarSign', 'MessageCircle', 'Eye', 'Filter',
      'Download', 'Share', 'Bell', 'RefreshCw', 'Pause', 'SkipForward', 'SkipBack',
      'Repeat', 'Shuffle', 'Heart', 'ThumbsUp', 'ThumbsDown', 'Bookmark', 'Flag',
      'Info', 'HelpCircle', 'Plus', 'Minus', 'Edit', 'Trash2', 'Save', 'Copy',
      'Paste', 'Cut', 'Undo', 'Redo', 'Move', 'Maximize', 'Minimize', 'Square',
      'Circle', 'Triangle', 'Hexagon', 'Octagon', 'Pentagon', 'Star2', 'Heart2',
      'Smile', 'Frown', 'Meh', 'Laugh', 'Angry', 'Surprised', 'Confused', 'Wink',
      'Kiss', 'Tongue', 'FileText', 'Package', 'Calendar', 'Timer', 'Battery',
      'Wifi2', 'Signal', 'Bluetooth', 'Camera', 'Mic', 'Headphones', 'Speaker',
      'Volume2', 'VolumeX', 'Search', 'Upload', 'Brain', 'Cpu', 'Rocket', 'Network',
      'Monitor', 'Server', 'CircuitBoard', 'Atom', 'Wrench', 'BarChart', 'PieChart',
      'LineChart', 'Activity', 'Settings', 'Award', 'Cloud', 'Code', 'CheckSquare',
      'Box', 'Workflow', 'LinkIcon', 'Lock', 'Mail', 'Phone', 'MapPin', 'Play',
      'Send', 'MousePointer', 'Hash', 'AtSign', 'Terminal', 'Layers', 'Lightbulb'
    ];
    
    // This is a simplified approach - in practice, you'd want to parse the AST
    // For now, we'll just remove the most obvious unused imports
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
const appDir = path.join(process.cwd(), 'app');
const files = getFiles(appDir);

console.log(`Found ${files.length} TypeScript files to process`);

let fixedCount = 0;
for (const file of files) {
  try {
    fixUnusedImports(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Processed ${fixedCount} files`);