const fs = require('fs');
const path = require('path');

// Function to fix final targeted syntax issues
function fixFinalTargeted(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 'use client' directive placement
    if (content.includes("'use client'") && !content.startsWith("'use client'")) {
      const lines = content.split('\n');
      const useClientIndex = lines.findIndex(line => line.includes("'use client'"));
      if (useClientIndex > 0) {
        const useClientLine = lines[useClientIndex];
        lines.splice(useClientIndex, 1);
        lines.unshift(useClientLine);
        content = lines.join('\n');
        modified = true;
      }
    }
    
    // Fix malformed JSX - remove invalid characters
    content = content.replace(/,\s*-\s*>\s*`\s*-\s*>/g, '');
    content = content.replace(/`\s*-\s*>/g, '');
    
    // Fix malformed return statements
    content = content.replace(/return\(\s*<>\s*\)/g, 'return (\n    <>');
    
    // Fix malformed JSX structure
    content = content.replace(
      /(\s+<h1[^>]*>[\s\S]*?<\/h1>\s*<p[^>]*>[\s\S]*?<\/p>\s*),\s*-\s*>\s*`\s*-\s*>/g,
      '$1'
    );
    
    // Fix malformed closing tags
    content = content.replace(/<\/div>\s*`\s*-\s*>/g, '</div>');
    
    // Fix malformed JSX attributes
    content = content.replace(/style=\{\{\s*animationDelay:\s*'1s'\s*,\s*\}\}/g, 'style={{ animationDelay: \'1s\' }}');
    
    // Fix malformed return structure
    content = content.replace(
      /(\s+<\/div>\s*)\n\s*\)\s*;\s*\n\s*\}\s*;\s*\n\s*export default/g,
      '$1\n    </>\n  );\n};\n\nexport default'
    );
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed final targeted: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files in the app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} page.tsx files to check for final targeted syntax issues`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFinalTargeted(file)) {
    fixedCount++;
  }
}

console.log(`Fixed final targeted syntax issues in ${fixedCount} files`);