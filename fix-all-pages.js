const fs = require('fs');
const path = require('path');

// Read the template
const template = fs.readFileSync('./template-page.tsx', 'utf8');

function fixFile(filePath) {
  try {
    // Get the directory name to create a proper title
    const dirName = path.dirname(filePath).split('/').pop();
    const title = dirName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Replace the title in the template
    const content = template.replace('Page - Zion Tech Group', `${title} - Zion Tech Group`);
    
    // Write the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDir(filePath);
    } else if (file === 'page.tsx') {
      // Check if the file has syntax issues
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('export default function Page()') && content.includes('<div>')) {
          if (fixFile(filePath)) {
            fixedCount++;
          }
        }
      } catch (error) {
        // If we can't read the file, try to fix it
        if (fixFile(filePath)) {
          fixedCount++;
        }
      }
    }
  });

  return fixedCount;
}

console.log('Fixing all page files...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);
