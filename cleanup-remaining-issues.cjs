const fs = require('fs');
const path = require('path');

// Function to clean up merge conflict markers
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
      content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned merge conflicts: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to clean up unused imports
function cleanUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Common unused imports that appear frequently
    const unusedImports = [
      'ArrowRight', 'CheckCircle', 'Brain', 'Lock', 'Star', 'Eye', 'Box', 'Palette', 'Zap', 'Layers',
      'BarChart3', 'Globe', 'Target', 'Shield', 'TrendingUp', 'Play', 'Volume2', 'VolumeX', 'Search',
      'Upload', 'Mail', 'Phone', 'MapPin', 'Users', 'Cpu', 'Rocket', 'Network', 'Monitor', 'Server',
      'CircuitBoard', 'Atom', 'Satellite', 'Wrench', 'BarChart', 'PieChart', 'LineChart', 'Activity',
      'Settings', 'Layout', 'RotateCcw', 'RotateCw', 'DollarSign', 'PieChart', 'Activity', 'Globe',
      'Monitor', 'Sparkles', 'Calculator', 'FileText', 'Database', 'Lock', 'Building2', 'CreditCard',
      'Wallet', 'TrendingUp', 'Zap', 'Users', 'Award', 'Shield', 'Cloud', 'Code', 'Clock', 'Target'
    ];

    // Remove unused imports from import statements
    unusedImports.forEach(importName => {
      const importRegex = new RegExp(`import\\s*{[^}]*\\b${importName}\\b[^}]*}\\s*from\\s*['"][^'"]+['"];?`, 'g');
      const oldContent = content;
      content = content.replace(importRegex, (match) => {
        // Extract the import statement and remove the unused import
        const imports = match.match(/{([^}]+)}/)[1];
        const importList = imports.split(',').map(imp => imp.trim());
        const filteredImports = importList.filter(imp => imp !== importName);
        
        if (filteredImports.length === 0) {
          return ''; // Remove entire import statement if no imports left
        } else {
          return match.replace(imports, filteredImports.join(', '));
        }
      });
      
      if (content !== oldContent) {
        modified = true;
      }
    });

    // Clean up empty import statements
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\n?/g, '');
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?/g, '');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned unused imports: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error cleaning imports in ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively process files
function processFiles(dir) {
  const files = fs.readdirSync(dir);
  let cleanedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      cleanedCount += processFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (cleanMergeConflicts(filePath)) {
        cleanedCount++;
      }
      if (cleanUnusedImports(filePath)) {
        cleanedCount++;
      }
    }
  }

  return cleanedCount;
}

// Main execution
console.log('Starting cleanup of remaining issues...');
const appDir = path.join(__dirname, 'app');
const cleanedCount = processFiles(appDir);
console.log(`Cleaned ${cleanedCount} files.`);

// Also clean the main App.tsx file
const appTsxPath = path.join(__dirname, 'App.tsx');
if (fs.existsSync(appTsxPath)) {
  if (cleanMergeConflicts(appTsxPath) || cleanUnusedImports(appTsxPath)) {
    console.log('Cleaned: App.tsx');
  }
}

console.log('Cleanup completed.');