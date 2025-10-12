import fs from 'fs';
import path from 'path';

// Find all page.tsx files
function findPageFiles(dir) {
  files = [];
  items = fs.readdirSync(dir);
  
  for (const item of items) {
    fullPath = path.join(dir, item);
    stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix JSX errors in a file
function fixJSXErrors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix malformed JSX tags like "Page\n  </\n  <br />"
  malformedTagRegex = /(\s+Page\s*\n\s*<\/\s*\n\s*<br \/>)/g;
  if (malformedTagRegex.test(content)) {
    content = content.replace(malformedTagRegex, (match) => {
      // Extract the page name from the file path
      pageName = path.basename(path.dirname(filePath)).split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      return `\n              <span className="b g-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">\n                ${pageName}\n              </span>\n              <br />`;
    });
    modified = true;
  }
  
  // Fix generic "page solutions" text
  pageSolutionsRegex = /Transform your business with our advanced page solutions\./g;
  if (pageSolutionsRegex.test(content)) {
    pageName = path.basename(path.dirname(filePath)).split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    content = content.replace(pageSolutionsRegex, `Transform your business with our advanced ${pageName.toLowerCase()} solutions.`);
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed JSX errors in: ${filePath}`);
  }
}

// Find and fix all page files
pageFiles = findPageFiles('/workspace/app');
console.log(`Found ${pageFiles.length} page files`);

let fixedCount = 0;
for (const file of pageFiles) {
  try {
    fixJSXErrors(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);