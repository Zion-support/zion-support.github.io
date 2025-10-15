const fs = require('fs');
const path = require('path');

// Advanced performance optimizer
function optimizePerformance() {
  console.log('🚀 Running advanced performance optimizations...\n');

  const distPath = path.join(__dirname, '..', 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist directory not found. Run build first.');
    return;
  }

  // 1. Optimize HTML
  optimizeHTML(distPath);
  
  // 2. Optimize CSS
  optimizeCSS(distPath);
  
  // 3. Optimize JavaScript
  optimizeJavaScript(distPath);
  
  // 4. Create performance budget
  createPerformanceBudget(distPath);
  
  // 5. Generate performance report
  generatePerformanceReport(distPath);
  
  console.log('\n✅ Advanced performance optimizations completed!');
}

function optimizeHTML(distPath) {
  console.log('📄 Optimizing HTML...');
  
  const htmlPath = path.join(distPath, 'index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Add critical CSS inline
    const criticalCSS = `
      <style>
        body{font-family:'Exo 2',sans-serif;background:#0a0a0a;color:#fff;overflow-x:hidden}
        .loading-spinner{display:inline-block;width:20px;height:20px;border:3px solid #f3f3f3;border-top:3px solid #3498db;border-radius:50%;animation:spin 1s linear infinite}
        @keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        .lazy{opacity:0;transition:opacity 0.3s}
        .loaded{opacity:1}
      </style>
    `;
    
    // Add resource hints
    const resourceHints = `
      <link rel="dns-prefetch" href="https://fonts.googleapis.com">
      <link rel="dns-prefetch" href="https://fonts.gstatic.com">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link rel="preload" href="/app/styles/futuristic.css" as="style">
    `;
    
    // Insert critical CSS and resource hints
    html = html.replace('<head>', `<head>${resourceHints}${criticalCSS}`);
    
    // Add service worker registration
    const swScript = `
      <script>
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
              .then(registration => console.log('SW registered'))
              .catch(error => console.log('SW registration failed'));
          });
        }
      </script>
    `;
    
    html = html.replace('</body>', `${swScript}</body>`);
    
    fs.writeFileSync(htmlPath, html);
    console.log('  ✅ HTML optimized');
  }
}

function optimizeCSS(distPath) {
  console.log('🎨 Optimizing CSS...');
  
  const assetsPath = path.join(distPath, 'assets');
  const cssFiles = fs.readdirSync(assetsPath).filter(f => f.endsWith('.css'));
  
  cssFiles.forEach(file => {
    const filePath = path.join(assetsPath, file);
    let css = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused CSS (basic optimization)
    css = css
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Minify whitespace
      .replace(/;\s*}/g, '}') // Remove trailing semicolons
      .replace(/:\s+/g, ':') // Remove spaces after colons
      .replace(/;\s+/g, ';') // Remove spaces after semicolons
      .trim();
    
    fs.writeFileSync(filePath, css);
  });
  
  console.log('  ✅ CSS optimized');
}

function optimizeJavaScript(distPath) {
  console.log('⚡ Optimizing JavaScript...');
  
  const assetsPath = path.join(distPath, 'assets');
  const jsFiles = fs.readdirSync(assetsPath).filter(f => f.endsWith('.js'));
  
  jsFiles.forEach(file => {
    const filePath = path.join(assetsPath, file);
    let js = fs.readFileSync(filePath, 'utf8');
    
    // Remove console logs (additional pass)
    js = js
      .replace(/console\.log\([^)]*\);?\s*/g, '')
      .replace(/console\.warn\([^)]*\);?\s*/g, '')
      .replace(/console\.info\([^)]*\);?\s*/g, '')
      .replace(/console\.debug\([^)]*\);?\s*/g, '');
    
    fs.writeFileSync(filePath, js);
  });
  
  console.log('  ✅ JavaScript optimized');
}

function createPerformanceBudget(distPath) {
  console.log('💰 Creating performance budget...');
  
  const assetsPath = path.join(distPath, 'assets');
  const files = fs.readdirSync(assetsPath);
  
  let totalSize = 0;
  const budget = {
    maxTotalSize: 2 * 1024 * 1024, // 2MB
    maxJSSize: 1.5 * 1024 * 1024, // 1.5MB
    maxCSSSize: 100 * 1024, // 100KB
    maxImageSize: 500 * 1024, // 500KB
    maxChunkSize: 500 * 1024 // 500KB per chunk
  };
  
  const analysis = {
    totalSize: 0,
    jsSize: 0,
    cssSize: 0,
    imageSize: 0,
    chunks: [],
    withinBudget: true,
    violations: []
  };
  
  files.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const size = stats.size;
    totalSize += size;
    
    if (file.endsWith('.js')) {
      analysis.jsSize += size;
      analysis.chunks.push({ name: file, size });
      
      if (size > budget.maxChunkSize) {
        analysis.violations.push(`Chunk ${file} exceeds size limit: ${formatBytes(size)}`);
        analysis.withinBudget = false;
      }
    } else if (file.endsWith('.css')) {
      analysis.cssSize += size;
    } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      analysis.imageSize += size;
    }
  });
  
  analysis.totalSize = totalSize;
  
  if (totalSize > budget.maxTotalSize) {
    analysis.violations.push(`Total size exceeds budget: ${formatBytes(totalSize)} > ${formatBytes(budget.maxTotalSize)}`);
    analysis.withinBudget = false;
  }
  
  if (analysis.jsSize > budget.maxJSSize) {
    analysis.violations.push(`JavaScript size exceeds budget: ${formatBytes(analysis.jsSize)} > ${formatBytes(budget.maxJSSize)}`);
    analysis.withinBudget = false;
  }
  
  if (analysis.cssSize > budget.maxCSSSize) {
    analysis.violations.push(`CSS size exceeds budget: ${formatBytes(analysis.cssSize)} > ${formatBytes(budget.maxCSSSize)}`);
    analysis.withinBudget = false;
  }
  
  if (analysis.imageSize > budget.maxImageSize) {
    analysis.violations.push(`Image size exceeds budget: ${formatBytes(analysis.imageSize)} > ${formatBytes(budget.maxImageSize)}`);
    analysis.withinBudget = false;
  }
  
  // Save budget analysis
  fs.writeFileSync(
    path.join(distPath, 'performance-budget.json'),
    JSON.stringify({ budget, analysis }, null, 2)
  );
  
  console.log(`  ${analysis.withinBudget ? '✅' : '⚠️'} Performance budget: ${analysis.withinBudget ? 'PASSED' : 'VIOLATIONS FOUND'}`);
  
  if (analysis.violations.length > 0) {
    console.log('  Violations:');
    analysis.violations.forEach(violation => {
      console.log(`    - ${violation}`);
    });
  }
}

function generatePerformanceReport(distPath) {
  console.log('📊 Generating performance report...');
  
  const assetsPath = path.join(distPath, 'assets');
  const files = fs.readdirSync(assetsPath);
  
  let totalSize = 0;
  const bundles = [];
  
  files.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const size = stats.size;
    totalSize += size;
    
    bundles.push({
      name: file,
      size: size,
      sizeFormatted: formatBytes(size),
      type: getFileType(file)
    });
  });
  
  bundles.sort((a, b) => b.size - a.size);
  
  const report = {
    timestamp: new Date().toISOString(),
    totalSize: totalSize,
    totalSizeFormatted: formatBytes(totalSize),
    bundles: bundles,
    recommendations: generateRecommendations(bundles, totalSize)
  };
  
  fs.writeFileSync(
    path.join(distPath, 'performance-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('  ✅ Performance report generated');
}

function generateRecommendations(bundles, totalSize) {
  const recommendations = [];
  
  const largeBundles = bundles.filter(b => b.size > 200 * 1024);
  if (largeBundles.length > 0) {
    recommendations.push({
      type: 'code-splitting',
      priority: 'high',
      message: `Consider further code splitting for: ${largeBundles.map(b => b.name).join(', ')}`
    });
  }
  
  const jsBundles = bundles.filter(b => b.type === 'javascript');
  const totalJSSize = jsBundles.reduce((sum, b) => sum + b.size, 0);
  
  if (totalJSSize > 1024 * 1024) {
    recommendations.push({
      type: 'lazy-loading',
      priority: 'medium',
      message: 'Consider implementing lazy loading for non-critical components'
    });
  }
  
  const imageBundles = bundles.filter(b => b.type === 'image');
  if (imageBundles.length > 0) {
    recommendations.push({
      type: 'image-optimization',
      priority: 'medium',
      message: 'Consider using WebP format and responsive images'
    });
  }
  
  return recommendations;
}

function getFileType(filename) {
  if (filename.endsWith('.js')) return 'javascript';
  if (filename.endsWith('.css')) return 'stylesheet';
  if (/\.(jpg|jpeg|png|gif|webp)$/i.test(filename)) return 'image';
  if (filename.endsWith('.html')) return 'html';
  return 'other';
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Run the optimizer
optimizePerformance();