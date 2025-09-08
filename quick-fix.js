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
      
      if (content.includes('<<<<<<< HEAD')) {
        console.log(`📝 Fixing: ${file}`);
        
        // Remove conflict markers and keep incoming changes
        let fixed = content
          .replace(/<<<<<<< HEAD[\s\S]*?=======\n?/, '')
          .replace(/>>>>>>> [^\n]+/g, '')
          .replace(/=======\n?[\s\S]*?>>>>>>> [^\n]+/g, '')
          .replace(/<<<<<<< [^\n]+/g, '')
          .replace(/=======/g, '')
          .replace(/>>>>>>> [^\n]+/g, '');
        
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