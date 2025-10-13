const fs = require('fs');
const path = require('path');

// Function to fix remaining JSX syntax errors
function fixRemainingJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing div tags in map functions
    content = content.replace(/(\s+<\/Link>\s+<\/div>\s+\)\}\s+\)\}\s+<\/div>\s+<\/div>\s+<\/section>)/g, (match) => {
      modified = true;
      return match.replace(/(\s+<\/Link>\s+<\/div>\s+\)\}\s+\)\}\s+<\/div>\s+<\/div>\s+<\/section>)/, '$1');
    });

    // Fix missing closing div tags before closing section
    content = content.replace(/(\s+<\/div>\s+<\/div>\s+<\/section>)/g, (match) => {
      if (!match.includes('</div></div></section>')) {
        modified = true;
        return match.replace(/(\s+<\/div>\s+<\/section>)/, '</div>$1');
      }
      return match;
    });

    // Fix malformed JSX structure
    content = content.replace(/<div([^>]*?)><\/div>\s*([^<]+)/g, (match, attrs, innerContent) => {
      modified = true;
      return `<div${attrs}>${innerContent}`;
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed remaining JSX errors in: ${filePath}`);
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

console.log(`Checking ${files.length} TSX files for remaining JSX errors...`);

files.forEach(file => {
  fixRemainingJSXErrors(file);
});

console.log('Remaining JSX error fixing completed!');