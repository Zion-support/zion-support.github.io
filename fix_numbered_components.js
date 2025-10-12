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

// Fix component names that start with numbers
function fixNumberedComponents(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix component names that start with numbers
  numberedComponentRegex = /const (\d+[a-zA-Z]*)Page: React\.FC = \(\) => \{/g;
  matches = content.match(numberedComponentRegex);
  
  if (matches) {
    for (const match of matches) {
      numberMatch = match.match(/const (\d+[a-zA-Z]*)Page/);
      if (numberMatch) {
        oldName = numberMatch[1];
        newName = oldName.replace(/^(\d+)/, (match, num) => {
          numberWords = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
          return numberWords[parseInt(num)] || num;
        });
        
        // Replace component name
        content = content.replace(new RegExp(`const ${oldName}Page`, 'g'), `const ${newName}Page`);
        content = content.replace(new RegExp(`export default ${oldName}Page`, 'g'), `export default ${newName}Page`);
        modified = true;
      }
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed numbered component in: ${filePath}`);
  }
}

// Find and fix all page files
pageFiles = findPageFiles('/workspace/app');
console.log(`Found ${pageFiles.length} page files`);

let fixedCount = 0;
for (const file of pageFiles) {
  try {
    fixNumberedComponents(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);