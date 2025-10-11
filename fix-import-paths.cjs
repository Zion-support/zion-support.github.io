const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/React files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix import paths for nested directories
  if (file.includes('/ai-services/') || file.includes('/it-services/') || file.includes('/micro-saas-services/') || file.includes('/micro-saas/')) {
    // Count the depth of nesting
    const depth = file.split('/').length - 2; // -2 for 'app' and the filename
    const relativePath = '../'.repeat(depth);
    
    if (content.includes("import Navigation from '../components/Navigation'")) {
      content = content.replace("import Navigation from '../components/Navigation'", `import Navigation from '${relativePath}components/Navigation'`);
      modified = true;
    }
    
    if (content.includes("import Footer from '../components/Footer'")) {
      content = content.replace("import Footer from '../components/Footer'", `import Footer from '${relativePath}components/Footer'`);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFixed ${fixedCount} files`);