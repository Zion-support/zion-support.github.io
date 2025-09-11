const fs = require('fs');

// List of critical files to check and fix
const criticalFiles = [
  'package.json',
  'vite.config.ts',
  'tailwind.config.ts',
  'tailwind.config.js',
  'tsconfig.json',
  'next.config.js',
  'sitemap.xml',
  'public/sitemap.xml',
  'dist/sitemap.xml'
];

console.log('🔧 Quick fix for critical files...\n');

let fixed = 0;

criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      if (content.includes('\n?/, '')
          .replace(/
          .replace(/\n?[\s\S]*?
          .replace(/
          .replace(//g, '')
          .replace(/
        
        fs.writeFileSync(file, fixed);
        console.log(`✅ Fixed: ${file}`);
        fixed++;
      }
    } catch (error) {
      console.log(`❌ Error with ${file}:`, error.message);
    }
  }
});

console.log(`\n🎉 Fixed ${fixed} critical files!`);