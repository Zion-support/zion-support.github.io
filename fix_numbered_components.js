import fs from 'fs';
import path from 'path';

// Find all page.tsx files
function find Page Files(dir) {
  const files = [];
  const items = fs.readdir Sync(dir);
  
  for (const item of items) {
    const full Path = path.join(dir, item);
    const stat = fs.stat Sync(full Path);
    
    if (stat.is Directory()) {
      files.push(...find Page Files(full Path));
    } else if (item === 'page.tsx') {
      files.push(full Path);
    }
  }
  
  return files;
}

// Fix component names that start with numbers
function fix Numbered Components(file Path) {
  let content = fs.read File Sync(file Path, 'utf8');
  let modified = false;
  
  // Fix component names that start with numbers
  const numbered Component Regex = /const (\d+[a-z A-Z]*)Page: React\.F C = \(\) => \{/g;
  const matches = content.match(numbered Component Regex);
  
  if (matches) {
    for (const match of matches) {
      const number Match = match.match(/const (\d+[a-z A-Z]*)Page/);
      if (number Match) {
        const old Name = number Match[1];
        const new Name = old Name.replace(/^(\d+)/, (match, num) => {
          const number Words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
          return number Words[parse Int(num)] || num;
        });
        
        // Replace component name
        content = content.replace(new Reg Exp(`const ${old Name}Page`, 'g'), `const ${new Name}Page`);
        content = content.replace(new Reg Exp(`export default ${old Name}Page`, 'g'), `export default ${new Name}Page`);
        modified = true;
      }
    }
  }
  
  if (modified) {
    fs.write File Sync(file Path, content);
    console.log(`Fixed numbered component in: ${file Path}`);
  }
}

// Find and fix all page files
const page Files = find Page Files('/workspace/app');
console.log(`Found ${page Files.length} page files`);

let fixed Count = 0;
for (const file of page Files) {
  try {
    fix Numbered Components(file);
    fixed Count++;
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixed Count} files`);