import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to remove unused imports from a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused Helmet imports
    if (content.includes("import { Helmet } from 'react-helmet-async';") && !content.includes('<Helmet>')) {
      content = content.replace("import { Helmet } from 'react-helmet-async';\n", '');
      modified = true;
    }

    // Remove unused lucide-react imports that are commonly unused
    const unusedIcons = [
      'Star', 'Satellite', 'Wifi', 'Zap', 'Smartphone', 'Globe', 'BarChart3', 
      'Sparkles', 'AlertTriangle', 'Users', 'Target', 'Shield', 'Database', 
      'TrendingUp', 'Clock', 'DollarSign', 'MessageCircle', 'Eye', 'Filter', 
      'Download', 'Share', 'Bell', 'RefreshCw', 'Pause', 'SkipForward', 
      'SkipBack', 'Repeat', 'Shuffle', 'Heart', 'ThumbsUp', 'ThumbsDown', 
      'Bookmark', 'Flag', 'Info', 'HelpCircle', 'Plus', 'Minus', 'Edit', 
      'Trash2', 'Save', 'Copy', 'Paste', 'Cut', 'Undo', 'Redo', 'Move', 
      'Maximize', 'Minimize', 'Square', 'Circle', 'Triangle', 'Hexagon', 
      'Octagon', 'Pentagon', 'Star2', 'Heart2', 'Smile', 'Frown', 'Meh', 
      'Laugh', 'Angry', 'Surprised', 'Confused', 'Wink', 'Kiss', 'Tongue'
    ];

    // Check if any of these icons are imported but not used
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (importMatch) {
      const importedIcons = importMatch[1].split(',').map(icon => icon.trim());
      const usedIcons = [];
      
      for (const icon of importedIcons) {
        // Check if the icon is actually used in the JSX
        if (content.includes(`<${icon}`) || content.includes(`{${icon}`) || content.includes(`icon: ${icon}`)) {
          usedIcons.push(icon);
        }
      }

      if (usedIcons.length !== importedIcons.length) {
        const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';`;
        content = content.replace(importMatch[0], newImport);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

for (const file of tsxFiles) {
  fixUnusedImports(file);
}

console.log('Finished fixing unused imports');