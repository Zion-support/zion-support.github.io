const fs = require('fs');
const path = require('path');

console.log('Starting performance optimization...');

// Performance optimization script
const optimizePerformance = () => {
  try {
    // Check if dist directory exists
    const distPath = path.join(__dirname, '..', 'dist');
    if (!fs.existsSync(distPath)) {
      console.log('Dist directory not found. Run build first.');
      return;
    }

    // Optimize HTML files
    const htmlFiles = fs.readdirSync(distPath).filter(file => file.endsWith('.html'));
    htmlFiles.forEach(file => {
      const filePath = path.join(distPath, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unnecessary whitespace
      content = content.replace(/\s+/g, ' ').trim();
      
      // Add preload hints for critical resources
      if (file === 'index.html') {
        const preloadHints = `
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/index.js" as="script">
    <link rel="preload" href="/assets/react-vendor.js" as="script">`;
        
        if (!content.includes('preload')) {
          content = content.replace('<head>', `<head>${preloadHints}`);
        }
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Optimized ${file}`);
    });

    // Optimize CSS files
    const cssFiles = fs.readdirSync(path.join(distPath, 'assets')).filter(file => file.endsWith('.css'));
    cssFiles.forEach(file => {
      const filePath = path.join(distPath, 'assets', file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unnecessary whitespace and comments
      content = content.replace(/\/\*[\s\S]*?\*\//g, '');
      content = content.replace(/\s+/g, ' ').trim();
      
      fs.writeFileSync(filePath, content);
      console.log(`Optimized CSS ${file}`);
    });

    // Generate performance report
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: [
        'HTML minification',
        'CSS optimization',
        'Preload hints added',
        'Whitespace removal'
      ],
      filesProcessed: htmlFiles.length + cssFiles.length
    };

    fs.writeFileSync(
      path.join(distPath, 'performance-report.json'),
      JSON.stringify(report, null, 2)
    );

    console.log('Performance optimization completed successfully!');
    console.log(`Processed ${report.filesProcessed} files`);
  } catch (error) {
    console.error('Error during performance optimization:', error);
  }
};

optimizePerformance();