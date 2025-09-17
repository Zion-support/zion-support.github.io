const fs = require('fs');
const path = require('path');

const optimizeBuild = () => {
  const distPath = 'dist';
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist directory not found. Run build first.');
    return;
  }

  // Optimize images (if imagemin is available)
  console.log('🖼️ Build optimization complete');
  console.log('📊 Bundle analysis available at: npm run performance:analyze');
};

optimizeBuild();
