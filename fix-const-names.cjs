const fs = require('fs');
const path = require('path');

// Function to fix const declarations with missing spaces
function fixConstDeclarations(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix const declarations with missing spaces
    const fixes = [
      // Fix const declarations like "constFive GEdge Computing Page"
      { pattern: /const([A-Z][a-zA-Z\s]+[A-Za-z])\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, replacement: (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `const ${cleanName}: React.FC = () => {`;
      }},
      // Fix export default statements with missing spaces
      { pattern: /export\s+default([A-Z][a-zA-Z\s]+[A-Za-z]);/g, replacement: (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `export default ${cleanName};`;
      }},
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed const declarations in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TypeScript/JavaScript files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixConstDeclarations(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Start fixing from the app directory
console.log('Starting to fix const declarations...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files with const declaration issues.`);