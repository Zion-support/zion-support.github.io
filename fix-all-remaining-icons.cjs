const fs = require('fs');
const path = require('path');

// All remaining missing icons to replace
const allIconReplacements = {
  'Star': '<div className="w-6 h-6 bg-yellow-400 rounded" />',
  'Cloud': '<div className="w-6 h-6 bg-cyan-500 rounded" />',
  'Shield': '<div className="w-6 h-6 bg-purple-500 rounded" />',
  'Zap': '<div className="w-6 h-6 bg-yellow-500 rounded" />',
  'Globe': '<div className="w-6 h-6 bg-indigo-500 rounded" />',
  'Music': '<div className="w-6 h-6 bg-white rounded" />',
  'Instagram': '<div className="w-6 h-6 bg-pink-400 rounded" />',
  'Facebook': '<div className="w-6 h-6 bg-blue-400 rounded" />',
  'Twitter': '<div className="w-6 h-6 bg-sky-400 rounded" />',
  'Linkedin': '<div className="w-6 h-6 bg-blue-600 rounded" />',
  'Youtube': '<div className="w-6 h-6 bg-red-400 rounded" />'
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
    Object.entries(allIconReplacements).forEach(([iconName, replacement]) => {
      // Handle JSX elements with className
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

console.log('All remaining icon fixes completed!');
