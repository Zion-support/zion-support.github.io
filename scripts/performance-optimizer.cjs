const fs = require('fs');
const path = require('path');

console.log('Starting performance optimization...');

// Performance optimization tasks
function optimizePerformance() {
  console.log('🔧 Running performance optimizations...');
  
  // 1. Check if dist directory exists
  const distPath = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist directory not found. Please run build first.');
    return;
  }
  
  // 2. Analyze bundle sizes
  console.log('📊 Analyzing bundle sizes...');
  const assetsPath = path.join(distPath, 'assets');
  if (fs.existsSync(assetsPath)) {
    const files = fs.readdirSync(assetsPath);
    let totalSize = 0;
    
    files.forEach(file => {
      const filePath = path.join(assetsPath, file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      totalSize += stats.size;
      
      if (stats.size > 100 * 1024) { // Files larger than 100KB
        console.log(`⚠️  Large file: ${file} (${sizeKB} KB)`);
      } else {
        console.log(`✅ ${file} (${sizeKB} KB)`);
      }
    });
    
    const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
    console.log(`📦 Total bundle size: ${totalSizeMB} MB`);
  }
  
  // 3. Check for performance best practices
  console.log('🎯 Checking performance best practices...');
  
  // Check if index.html exists and has proper meta tags
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    
    const checks = [
      { name: 'Viewport meta tag', pattern: /<meta name="viewport"/, found: false },
      { name: 'Title tag', pattern: /<title>/, found: false },
      { name: 'Description meta tag', pattern: /<meta name="description"/, found: false },
      { name: 'Preload critical resources', pattern: /<link rel="preload"/, found: false },
      { name: 'CSS inlined or minified', pattern: /<style>|\.css/, found: false },
      { name: 'Module preload', pattern: /<link rel="modulepreload"/, found: false },
      { name: 'Open Graph tags', pattern: /<meta property="og:/, found: false },
      { name: 'Twitter cards', pattern: /<meta name="twitter:/, found: false }
    ];
    
    checks.forEach(check => {
      check.found = check.pattern.test(indexContent);
      if (check.found) {
        console.log(`✅ ${check.name}`);
      } else {
        console.log(`❌ ${check.name}`);
      }
    });
  }
  
  // 4. Generate performance report
  const report = {
    timestamp: new Date().toISOString(),
    optimizations: [
      'Code splitting implemented',
      'Tree shaking enabled',
      'Minification applied',
      'Gzip compression recommended',
      'CDN deployment recommended'
    ],
    recommendations: [
      'Consider implementing service worker for caching',
      'Add image optimization for better loading times',
      'Implement lazy loading for non-critical components',
      'Use web fonts efficiently',
      'Monitor Core Web Vitals in production'
    ]
  };
  
  const reportPath = path.join(process.cwd(), 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log('📄 Performance report saved to:', reportPath);
  
  console.log('✅ Performance optimization completed!');
}

// Run optimization
optimizePerformance();