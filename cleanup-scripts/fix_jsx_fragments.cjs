const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed JSX fragments - look for the specific pattern
    content = content.replace(/WrappedComponent \{\.\.\.props\} \/>/g, '<WrappedComponent {...props} />');
    
    // Fix other malformed patterns
    content = content.replace(/export default function Wrapped\n\(props\) \{/g, 'export default function Wrapped(props) {');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TypeScript files in the app directory
const appDir = './app';
const files = [];

function walkDir(dir) {
  const filesList = fs.readdirSync(dir);
  filesList.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      files.push(filePath);
    }
  });
}

walkDir(appDir);

files.forEach(fixFile);
console.log(`Processed ${files.length} files`);
