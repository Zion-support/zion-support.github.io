const fs = require('fs');
const path = require('path');

// Fix common variable naming issues
const fixes = [
  {
    pattern: /const _categories = /g,
    replacement: 'const categories = '
  },
  {
    pattern: /const _services = /g,
    replacement: 'const services = '
  },
  {
    pattern: /const _cyberServices = /g,
    replacement: 'const cyberServices = '
  },
  {
    pattern: /const _aiServices = /g,
    replacement: 'const aiServices = '
  },
  {
    pattern: /const _itServices = /g,
    replacement: 'const itServices = '
  },
  {
    pattern: /const _blockchainServices = /g,
    replacement: 'const blockchainServices = '
  },
  {
    pattern: /const _roboticsServices = /g,
    replacement: 'const roboticsServices = '
  }
];

function fixFile(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  }
}

// Find all page.tsx files and fix them
function findAndFixPages(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findAndFixPages(filePath);
    } else if (file === 'page.tsx') {
      fixFile(filePath);
    }
  });
}

// Start fixing from the app directory
findAndFixPages(path.join(__dirname, 'app'));

console.log('All variable naming issues fixed!');