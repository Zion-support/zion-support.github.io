import fs from 'fs';
import path from 'path';

// Function to fix HTML entities in a file
function fixHtmlEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace common HTML entities
    const replacements = [
      { from: /&quot;/g, to: '"' },
      { from: /&apos;/g, to: "'" },
      { from: /&lt;/g, to: '<' },
      { from: /&gt;/g, to: '>' },
      { from: /&amp;/g, to: '&' },
      { from: /&nbsp;/g, to: ' ' },
      { from: /&ldquo;/g, to: '"' },
      { from: /&rdquo;/g, to: '"' },
      { from: /&lsquo;/g, to: "'" },
      { from: /&rsquo;/g, to: "'" }
    ];

    for (const { from, to } of replacements) {
      if (from.test(content)) {
        content = content.replace(from, to);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed HTML entities in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Fixing HTML entities...');
const files = getAllTsxFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  if (fixHtmlEntities(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
console.log('HTML entities fix completed!');