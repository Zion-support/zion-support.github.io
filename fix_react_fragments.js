const fs = require('fs');
const path = require('path');

function fixReactFragments(content) {
  // Replace React.Fragment with <> and </React.Fragment> with </>
  return content
    .replace(/<React\.Fragment>/g, '<>')
    .replace(/<\/React\.Fragment>/g, '</>');
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('React.Fragment')) {
      console.log(`Fixing React.Fragment in: ${filePath}`);
      const fixed = fixReactFragments(content);
      fs.writeFileSync(filePath, fixed);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        fixedCount += walkDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting React.Fragment fix...');
const fixedCount = walkDirectory('app');
console.log(`Fixed React.Fragment in ${fixedCount} files`);
