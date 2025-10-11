const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files in src directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let newContent = content;
    
    // Common unused imports to remove
    const unusedImports = [
      'Navigation', 'Footer', 'Link', 'Phone', 'Mail', 'MapPin', 'Clock', 'Users', 'Star', 'Zap', 'Cloud', 'Database', 'Code', 'BarChart', 'Team', 'Achievement', 'Goal', 'World', 'PhoneIcon', 'MailIcon', 'Location', 'ArrowRight', 'CheckCircle', 'TrendingUp', 'Settings', 'Cpu', 'MessageSquare', 'Eye', 'Sparkles', 'Award', 'Lock', 'FileText', 'Search', 'Bot', 'Palette', 'Camera', 'Music', 'Video', 'Gamepad2', 'ShoppingCart', 'CreditCard', 'Building', 'Factory', 'Car', 'Plane', 'Ship', 'Train', 'Home', 'Heart', 'Stethoscope', 'GraduationCap', 'Briefcase', 'Wrench', 'Hammer', 'Paintbrush', 'Scissors', 'BookOpen', 'Calculator', 'Calendar', 'Clock3', 'Compass', 'Globe2', 'Map', 'Navigation', 'PieChart', 'TrendingDown', 'Activity', 'Lightning', 'Crosshair', 'Security', 'People', 'StarIcon', 'Check', 'Arrow', 'PhoneIcon', 'MailIcon', 'Location'
    ];
    
    // Remove unused imports from import statements
    const importRegex = /import\s*{([^}]+)}\s*from\s*['"][^'"]+['"];?/g;
    newContent = newContent.replace(importRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
        return !unusedImports.includes(cleanImp) && isImportUsed(cleanImp, newContent);
      });
      
      if (usedImports.length === 0) {
        modified = true;
        return ''; // Remove entire import statement
      } else if (usedImports.length !== importList.length) {
        modified = true;
        return match.replace(imports, usedImports.join(', '));
      }
      return match;
    });
    
    // Remove unused variable declarations
    const variableRegex = /const\s+(\w+)\s*=\s*[^;]+;/g;
    newContent = newContent.replace(variableRegex, (match, varName) => {
      if (unusedImports.includes(varName) && !isVariableUsed(varName, newContent)) {
        modified = true;
        return ''; // Remove unused variable
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Check if an import is used in the file
function isImportUsed(importName, content) {
  // Skip checking for certain patterns that might be false positives
  if (importName === 'React' || importName === 'useState' || importName === 'useEffect') {
    return true;
  }
  
  // Look for usage in JSX, function calls, etc.
  const usagePatterns = [
    new RegExp(`<${importName}\\b`, 'g'),
    new RegExp(`\\b${importName}\\s*\\(`, 'g'),
    new RegExp(`\\b${importName}\\s*[=:]`, 'g'),
    new RegExp(`\\b${importName}\\s*[\\[\\{]`, 'g'),
    new RegExp(`\\b${importName}\\s*\\?`, 'g'),
    new RegExp(`\\b${importName}\\s*\\|`, 'g'),
    new RegExp(`\\b${importName}\\s*&`, 'g'),
    new RegExp(`\\b${importName}\\s*\\+`, 'g'),
    new RegExp(`\\b${importName}\\s*-`, 'g'),
    new RegExp(`\\b${importName}\\s*\\*`, 'g'),
    new RegExp(`\\b${importName}\\s*\\/`, 'g'),
    new RegExp(`\\b${importName}\\s*%`, 'g'),
    new RegExp(`\\b${importName}\\s*<`, 'g'),
    new RegExp(`\\b${importName}\\s*>`, 'g'),
    new RegExp(`\\b${importName}\\s*===`, 'g'),
    new RegExp(`\\b${importName}\\s*!==`, 'g'),
    new RegExp(`\\b${importName}\\s*==`, 'g'),
    new RegExp(`\\b${importName}\\s*!=`, 'g'),
    new RegExp(`\\b${importName}\\s*<=`, 'g'),
    new RegExp(`\\b${importName}\\s*>=`, 'g'),
    new RegExp(`\\b${importName}\\s*&&`, 'g'),
    new RegExp(`\\b${importName}\\s*\\|\\|`, 'g'),
    new RegExp(`\\b${importName}\\s*\\?`, 'g'),
    new RegExp(`\\b${importName}\\s*:`, 'g'),
    new RegExp(`\\b${importName}\\s*;`, 'g'),
    new RegExp(`\\b${importName}\\s*,`, 'g'),
    new RegExp(`\\b${importName}\\s*\\)`, 'g'),
    new RegExp(`\\b${importName}\\s*\\]`, 'g'),
    new RegExp(`\\b${importName}\\s*\\}`, 'g'),
    new RegExp(`\\b${importName}\\s*$`, 'g')
  ];
  
  return usagePatterns.some(pattern => pattern.test(content));
}

// Check if a variable is used in the file
function isVariableUsed(varName, content) {
  const usagePatterns = [
    new RegExp(`\\b${varName}\\b`, 'g')
  ];
  
  const matches = content.match(usagePatterns[0]);
  return matches && matches.length > 1; // More than just the declaration
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = getAllFiles(srcDir);

console.log(`Processing ${files.length} files...`);

files.forEach(file => {
  removeUnusedImports(file);
});

console.log('Done fixing unused imports!');