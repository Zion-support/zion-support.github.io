const fs = require('fs');
const path = require('path');

// Function to fix common JSX syntax errors
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix self-closing divs that contain content
    content = content.replace(/<div([^>]*?)><\/div>\s*([^<]+)/g, (match, attrs, innerContent) => {
      modified = true;
      return `<div${attrs}>${innerContent}`;
    });

    // Fix malformed JSX structure
    content = content.replace(/<div><\/div>\s*<([^>]+)>/g, (match, tag) => {
      modified = true;
      return `<${tag}>`;
    });

    // Fix missing closing tags for divs
    content = content.replace(/<div([^>]*?)>\s*([^<]+)\s*<\/div>\s*<\/div>/g, (match, attrs, innerContent) => {
      modified = true;
      return `<div${attrs}>${innerContent}</div>`;
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TSX files in the app directory
function getAllTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTSXFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all TSX files
const appDir = path.join(__dirname, 'app');
const files = getAllTSXFiles(appDir);

console.log(`Found ${files.length} TSX files to check...`);

files.forEach(file => {
  fixJSXErrors(file);
});

console.log('JSX error fixing completed!');