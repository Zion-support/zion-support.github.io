const fs = require('fs');
const path = require('path');

// Find all blog files
const blogDir = 'src/blog';
const files = [];

function findTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findTsxFiles(fullPath);
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

findTsxFiles(blogDir);

let fixedCount = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if file has double closing parentheses
    if (content.trim().endsWith(');')) {
      // Remove the extra closing parenthesis
      const newContent = content.replace(/\);$/, ';');
      if (newContent !== content) {
        fs.writeFileSync(file, newContent);
        console.log(`Fixed double parenthesis: ${file}`);
        fixedCount++;
      }
    }
    // Check if file ends with "};" without closing parenthesis
    else if (content.trim().endsWith('};') && !content.trim().endsWith(');')) {
      // Find the last return statement
      const returnMatch = content.match(/return\s*\(/g);
      if (returnMatch && returnMatch.length > 0) {
        // Add closing parenthesis before the closing brace
        const newContent = content.replace(/};$/, ');');
        fs.writeFileSync(file, newContent);
        console.log(`Fixed missing parenthesis: ${file}`);
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);