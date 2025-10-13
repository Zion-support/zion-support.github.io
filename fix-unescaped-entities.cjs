const fs = require('fs');
const path = require('path');

// Common unescaped entities to fix
const replacements = {
  "Let's": "Let&apos;s",
  "Don't": "Don&apos;t",
  "We're": "We&apos;re",
  "You're": "You&apos;re",
  "It's": "It&apos;s",
  "I'm": "I&apos;m",
  "can't": "can&apos;t",
  "won't": "won&apos;t",
  "isn't": "isn&apos;t",
  "aren't": "aren&apos;t",
  "doesn't": "doesn&apos;t",
  "didn't": "didn&apos;t",
  "hasn't": "hasn&apos;t",
  "haven't": "haven&apos;t",
  "shouldn't": "shouldn&apos;t",
  "wouldn't": "wouldn&apos;t",
  "couldn't": "couldn&apos;t"
};

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const [original, replacement] of Object.entries(replacements)) {
      if (content.includes(original)) {
        content = content.replace(new RegExp(original, 'g'), replacement);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed unescaped entities in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find and fix all TSX/TS files
const files = findTsxFiles('/workspace/app');
console.log(`Found ${files.length} files to process`);

files.forEach(fixFile);
console.log('Finished fixing unescaped entities');