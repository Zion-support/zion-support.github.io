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

// Fix J SX errors in a file
function fix JS XErrors(file Path) {
  let content = fs.read File Sync(file Path, 'utf8');
  let modified = false;
  
  // Fix malformed J SX tags like "Page\n  </\n  <b r />"
  const malformed Tag Regex = /(\s+Page\s*\n\s*<\/\s*\n\s*<b r \/>)/g;
  if (malformed Tag Regex.test(content)) {
    content = content.replace(malformed Tag Regex, (match) => {
      // Extract the page name from the file path
      const page Name = path.basename(path.dirname(file Path)).split('-').map(word => 
        word.char At(0).to Upper Case() + word.slice(1)
      ).join(' ');
      
      return `\n              <s pan class Name="b g-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">\n                ${page Name}\n              </s pan>\n              <b r />`;
    });
    modified = true;
  }
  
  // Fix generic "page solutions" text
  const page Solutions Regex = /Transform your business with our advanced page solutions\./g;
  if (page Solutions Regex.test(content)) {
    const page Name = path.basename(path.dirname(file Path)).split('-').map(word => 
      word.char At(0).to Upper Case() + word.slice(1)
    ).join(' ');
    
    content = content.replace(page Solutions Regex, `Transform your business with our advanced ${page Name.to Lower Case()} solutions.`);
    modified = true;
  }
  
  if (modified) {
    fs.write File Sync(file Path, content);
    console.log(`Fixed J SX errors in: ${file Path}`);
  }
}

// Find and fix all page files
const page Files = find Page Files('/workspace/app');
console.log(`Found ${page Files.length} page files`);

let fixed Count = 0;
for (const file of page Files) {
  try {
    fix JS XErrors(file);
    fixed Count++;
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixed Count} files`);