const fs = require('fs');
const path = require('path');

// Performance optimization script
function optimizePerformance() {
  console.log('🚀 Starting performance optimization...');
  
  const distPath = path.join(__dirname, '..', 'dist');
  
  // Check if dist directory exists
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist directory not found. Please run build first.');
    return;
  }
  
  // Optimize HTML files
  optimizeHTML(distPath);
  
  // Optimize CSS files
  optimizeCSS(distPath);
  
  // Optimize JS files
  optimizeJS(distPath);
  
  // Generate performance report
  generatePerformanceReport(distPath);
  
  console.log('✅ Performance optimization completed!');
}

function optimizeHTML(distPath) {
  console.log('📄 Optimizing HTML files...');
  
  const htmlFiles = findFiles(distPath, '.html');
  
  htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove comments
    content = content.replace(/<!--[\s\S]*?-->/g, '');
    
    // Minify inline CSS
    content = content.replace(/<style[^>]*>([\s\S]*?)<\/style>/g, (match, css) => {
      const minifiedCSS = css.replace(/\s+/g, ' ').trim();
      return `<style>${minifiedCSS}</style>`;
    });
    
    // Minify inline JS
    content = content.replace(/<script[^>]*>([\s\S]*?)<\/script>/g, (match, js) => {
      const minifiedJS = js.replace(/\s+/g, ' ').trim();
      return `<script>${minifiedJS}</script>`;
    });
    
    fs.writeFileSync(file, content, 'utf8');
  });
  
  console.log(`✅ Optimized ${htmlFiles.length} HTML files`);
}

function optimizeCSS(distPath) {
  console.log('🎨 Optimizing CSS files...');
  
  const cssFiles = findFiles(distPath, '.css');
  
  cssFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Remove unnecessary whitespace
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/{\s*/g, '{');
    content = content.replace(/;\s*/g, ';');
    
    fs.writeFileSync(file, content, 'utf8');
  });
  
  console.log(`✅ Optimized ${cssFiles.length} CSS files`);
}

function optimizeJS(distPath) {
  console.log('⚡ Optimizing JS files...');
  
  const jsFiles = findFiles(distPath, '.js');
  
  jsFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove comments (but preserve license comments)
    content = content.replace(/\/\*(?!\*!)[\s\S]*?\*\//g, '');
    content = content.replace(/\/\/.*$/gm, '');
    
    // Remove unnecessary whitespace
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/;\s*/g, ';');
    
    fs.writeFileSync(file, content, 'utf8');
  });
  
  console.log(`✅ Optimized ${jsFiles.length} JS files`);
}

function generatePerformanceReport(distPath) {
  console.log('📊 Generating performance report...');
  const report = {
    timestamp: new Date().toISOString(),
    buildSize: getDirectorySize(distPath),
    fileCounts: {
      html: findFiles(distPath, '.html').length,
      css: findFiles(distPath, '.css').length,
      js: findFiles(distPath, '.js').length,
      images: findFiles(distPath, '.png').length + findFiles(distPath, '.jpg').length + findFiles(distPath, '.jpeg').length + findFiles(distPath, '.gif').length + findFiles(distPath, '.svg').length
    },
    recommendations: [
      'Enable gzip compression on your server',
      'Use a CDN for static assets',
      'Implement lazy loading for images',
      'Consider using service workers for caching',
      'Monitor Core Web Vitals regularly'
    ]
  };
  
  const reportPath = path.join(distPath, 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  
  console.log('✅ Performance report generated:', reportPath);
  console.log(`📦 Total build size: ${formatBytes(report.buildSize)}`);
  console.log(`📁 Files: ${report.fileCounts.html} HTML, ${report.fileCounts.css} CSS, ${report.fileCounts.js} JS, ${report.fileCounts.images} Images`);
}

function findFiles(dir, extension) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith(extension)) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

function getDirectorySize(dir) {
  let size = 0;
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else {
        size += stat.size;
      }
    });
  }
  
  traverse(dir);
  return size;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Run optimization
optimizePerformance();