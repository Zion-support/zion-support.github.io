const fs = require('fs');
const path = require('path');

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) => {
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

// Common icons that are actually used
const commonIcons = [
  'ArrowRight', 'CheckCircle', 'Star', 'Brain', 'Zap', 'Globe', 
  'TrendingUp', 'Target', 'Monitor', 'MessageSquare', 'Phone',
  'Mail', 'Shield', 'BarChart3', 'Code', 'Database', 'Users',
  'Settings', 'Sparkles', 'Award', 'Clock', 'DollarSign', 'Smartphone',
  'Lock', 'Cpu', 'Atom', 'TrendingDown', 'Lightbulb', 'Puzzle'
];

// Fix a single file by analyzing which icons are actually used
const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Find the lucide-react import line
    const importMatch = content.match(/import\s*{\s*([^}]+)}\s*from\s*['"]lucide-react['"];?\s*$/m);
    if (!importMatch) return false;
    
    // Get all imported icons
    const importedIcons = importMatch[1].split(',').map(icon => icon.trim());
    
    // Find which icons are actually used in the file
    const usedIcons = [];
    importedIcons.forEach(icon => {
      // Check if the icon is used in JSX (as a component)
      if (content.includes(`<${icon}`) || content.includes(`<${icon} `)) {
        usedIcons.push(icon);
      }
      // Check if the icon is used in template literals or strings
      else if (content.includes(`{${icon}`) || content.includes(`"${icon}"`) || content.includes(`'${icon}'`)) {
        usedIcons.push(icon);
      }
      // Check if the icon is used in variable assignments
      else if (content.includes(`= ${icon}`) || content.includes(`: ${icon}`)) {
        usedIcons.push(icon);
      }
    });
    
    // If no icons are used, remove the import entirely
    if (usedIcons.length === 0) {
      const newContent = content.replace(importMatch[0], '');
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Removed unused import from: ${filePath}`);
        return true;
      }
    }
    // If some icons are used, update the import
    else if (usedIcons.length !== importedIcons.length) {
      const newImport = `import { ${usedIcons.join(', ')} } from "lucide-react";`;
      const newContent = content.replace(importMatch[0], newImport);
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Updated import in: ${filePath} (${usedIcons.length}/${importedIcons.length} icons used)`);
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('🔧 Smart fixing imports...');
  
  const files = getAllFiles('./app');
  let fixedCount = 0;
  
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`✅ Fixed ${fixedCount} files`);
};

main();