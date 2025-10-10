const fs = require('fs');
const path = require('path');

const optimizePerformance = () => {
  console.log('Running performance optimizations...');
  
  const distDir = path.join(__dirname, '..', 'dist');
  
  if (!fs.existsSync(distDir)) {
    console.log('Dist directory not found. Please run build first.');
    return;
  }

  // Optimize HTML files
  const htmlFiles = findFiles(distDir, '.html');
  htmlFiles.forEach(file => {
    optimizeHtmlFile(file);
  });

  // Optimize CSS files
  const cssFiles = findFiles(distDir, '.css');
  cssFiles.forEach(file => {
    optimizeCssFile(file);
  });

  // Optimize JS files
  const jsFiles = findFiles(distDir, '.js');
  jsFiles.forEach(file => {
    optimizeJsFile(file);
  });

  // Generate performance report
  generatePerformanceReport(distDir);
  
  console.log('Performance optimizations completed');
};

const findFiles = (dir, extension) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath, extension));
    } else if (item.endsWith(extension)) {
      files.push(fullPath);
    }
  });
  
  return files;
};

const optimizeHtmlFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add performance hints
  const performanceHints = `
    <!-- Performance hints -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="dns-prefetch" href="https://www.google-analytics.com">
    <link rel="dns-prefetch" href="https://www.googletagmanager.com">
    
    <!-- Critical CSS inline -->
    <style>
      /* Critical above-the-fold styles */
      body { margin: 0; font-family: Inter, sans-serif; }
      .min-h-screen { min-height: 100vh; }
      .bg-gradient-to-br { background: linear-gradient(to bottom right, #0f172a, #581c87, #0f172a); }
    </style>
  `;
  
  // Insert performance hints before closing head tag
  content = content.replace('</head>', `${performanceHints}\n</head>`);
  
  // Add resource hints
  const resourceHints = `
    <!-- Resource hints -->
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/index.js" as="script">
  `;
  
  content = content.replace('</head>', `${resourceHints}\n</head>`);
  
  fs.writeFileSync(filePath, content);
  console.log(`Optimized HTML: ${path.basename(filePath)}`);
};

const optimizeCssFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove unnecessary whitespace
  content = content.replace(/\s+/g, ' ');
  content = content.replace(/;\s*}/g, '}');
  content = content.replace(/,\s+/g, ',');
  
  // Remove comments
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Remove unnecessary semicolons
  content = content.replace(/;}/g, '}');
  
  fs.writeFileSync(filePath, content);
  console.log(`Optimized CSS: ${path.basename(filePath)}`);
};

const optimizeJsFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove console.log statements in production
  if (process.env.NODE_ENV === 'production') {
    content = content.replace(/console\.log\([^)]*\);?/g, '');
    content = content.replace(/console\.warn\([^)]*\);?/g, '');
    content = content.replace(/console\.info\([^)]*\);?/g, '');
  }
  
  // Remove unnecessary whitespace
  content = content.replace(/\s+/g, ' ');
  
  fs.writeFileSync(filePath, content);
  console.log(`Optimized JS: ${path.basename(filePath)}`);
};

const generatePerformanceReport = (distDir) => {
  const report = {
    timestamp: new Date().toISOString(),
    optimizations: [
      'HTML: Added performance hints and resource preloading',
      'CSS: Minified and optimized stylesheets',
      'JS: Removed console statements and minified code',
      'Added DNS prefetching for external resources',
      'Added critical CSS inline for faster rendering'
    ],
    recommendations: [
      'Enable gzip compression on your server',
      'Set up CDN for static assets',
      'Implement service worker for caching',
      'Use image optimization for better loading times',
      'Consider implementing lazy loading for images'
    ]
  };
  
  const reportPath = path.join(distDir, 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`Performance report generated: ${reportPath}`);
};

// Run optimizations
optimizePerformance();