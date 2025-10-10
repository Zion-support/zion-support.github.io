const fs = require('fs');
const path = require('path');

const optimizePerformance = () => {
  console.log('Running performance optimizations...');
  
  // Create optimized CSS
  const cssPath = path.join(__dirname, '../dist/assets');
  if (fs.existsSync(cssPath)) {
    const files = fs.readdirSync(cssPath);
    const cssFiles = files.filter(file => file.endsWith('.css'));
    
    cssFiles.forEach(file => {
      const filePath = path.join(cssPath, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unnecessary whitespace
      content = content.replace(/\s+/g, ' ').trim();
      
      // Remove comments
      content = content.replace(/\/\*[\s\S]*?\*\//g, '');
      
      fs.writeFileSync(filePath, content);
    });
  }
  
  // Create performance manifest
  const manifest = {
    name: 'Zion Tech Group',
    short_name: 'Zion Tech',
    description: 'Advanced AI and IT Solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
  
  fs.writeFileSync(
    path.join(__dirname, '../dist/manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('Performance optimizations completed');
};

optimizePerformance();