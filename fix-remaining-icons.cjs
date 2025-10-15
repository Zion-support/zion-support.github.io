const fs = require('fs');
const path = require('path');

// Additional missing icons to replace
const additionalIconReplacements = {
  'DollarSign': '<div className="w-6 h-6 bg-green-500 rounded" />',
  'ArrowRight': '<div className="w-6 h-6 bg-blue-500 rounded" />',
  'Headphones': '<div className="w-6 h-6 bg-purple-500 rounded" />',
  'Heart': '<div className="w-6 h-6 bg-red-500 rounded" />',
  'GraduationCap': '<div className="w-6 h-6 bg-indigo-500 rounded" />',
  'Right': '<div className="w-6 h-6 bg-blue-500 rounded" />'
};

// Find all files that might have these icons
const findFilesWithIcons = () => {
  const files = [];
  const appDir = path.join(process.cwd(), 'app');
  
  const walkDir = (dir) => {
    const filesInDir = fs.readdirSync(dir);
    filesInDir.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        files.push(filePath);
      }
    });
  };
  
  walkDir(appDir);
  return files;
};

const files = findFilesWithIcons();

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Replace missing icon references
    Object.entries(additionalIconReplacements).forEach(([iconName, replacement]) => {
      // Handle JSX elements
      const jsxRegex = new RegExp(`<${iconName}\\s+className="[^"]*"\\s*/>`, 'g');
      if (content.match(jsxRegex)) {
        content = content.replace(jsxRegex, replacement);
        modified = true;
      }
      
      // Handle icon references in expressions
      const exprRegex = new RegExp(`<${iconName}\\s+className="[^"]*"\\s*/>`, 'g');
      if (content.match(exprRegex)) {
        content = content.replace(exprRegex, replacement);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed icons in: ${filePath.replace(process.cwd(), '')}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Additional icon fixes completed!');
