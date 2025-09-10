const fs = require('fs');
const path = require('path');

// Function to convert kebab-case to PascalCase
function kebabToPascal(str) {
  return str.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
}

// Function to fix function names in a file
function fixFunctionNames(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix function declarations with hyphens
    const functionRegex = /export default function ([a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]*)\(/g;
    const matches = content.match(functionRegex);
    
    if (matches) {
      matches.forEach(match => {
        const functionName = match.match(/function ([a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]*)\(/)[1];
        if (functionName.includes('-')) {
          const newName = kebabToPascal(functionName);
          content = content.replace(
            new RegExp(`export default function ${functionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\(`, 'g'),
            `export default function ${newName}(`
          );
          modified = true;
        }
      });
    }
    
    // Fix titles and content that match the old function names
    const titleRegex = /<h1[^>]*>([^<]*)<\/h1>/g;
    content = content.replace(titleRegex, (match, title) => {
      if (title.includes('-') && !title.includes(' ')) {
        const newTitle = kebabToPascal(title);
        return match.replace(title, newTitle);
      }
      return match;
    });
    
    // Fix content text
    const contentRegex = /<p[^>]*>([^<]*)content coming soon<\/p>/g;
    content = content.replace(contentRegex, (match, prefix) => {
      if (prefix.includes('-') && !prefix.includes(' ')) {
        const newPrefix = kebabToPascal(prefix);
        return match.replace(prefix, newPrefix);
      }
      return match;
    });
    
    const devRegex = /<div[^>]*>([^<]*)page under development<\/div>/g;
    content = content.replace(devRegex, (match, prefix) => {
      if (prefix.includes('-') && !prefix.includes(' ')) {
        const newPrefix = kebabToPascal(prefix);
        return match.replace(prefix, newPrefix);
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Find all .tsx and .jsx files in src directory
function findFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {
  fixFunctionNames(file);
});

console.log('Function name fixing completed!');