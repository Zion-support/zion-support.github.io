const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import statements with extra semicolons
    if (content.includes("';';")) {
      content = content.replace(/';';/g, ';');
      modified = true;
    }

    // Fix JSX with extra quotes and semicolons
    if (content.includes('>";')) {
      content = content.replace(/>";/g, '>');
      modified = true;
    }

    // Fix other common patterns
    if (content.includes('";";')) {
      content = content.replace(/";";/g, ';');
      modified = true;
    }

    if (content.includes('>";";')) {
      content = content.replace(/>";";/g, '>');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

console.log('Starting to fix syntax errors...');
const fixedCount = findAndFixFiles('./app');
console.log(`Fixed ${fixedCount} files`);