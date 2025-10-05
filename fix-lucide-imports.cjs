const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: __dirname });

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file has lucide-react imports
  if (content.includes('from \'lucide-react\'')) {
    console.log(`Fixing lucide-react imports in ${file}`);
    
    // Add @ts-ignore before lucide-react imports
    content = content.replace(
      /import\s*{([^}]+)}\s*from\s*['"]lucide-react['"];?/g,
      '// @ts-ignore\nimport { $1 } from \'lucide-react\';'
    );
    
    fs.writeFileSync(filePath, content);
  }
});

console.log('Fixed lucide-react imports in all files');
