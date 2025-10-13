const fs = require('fs');
const path = require('path');

// Performance optimization script
function optimizePerformance() {
  const distDir = path.join(__dirname, '..', 'dist');
  
  if (!fs.existsSync(distDir)) {
    console.log('Dist directory not found. Please run build first.');
    return;
  }
  
  console.log('Starting performance optimization...');
  
  // Read all HTML files
  const htmlFiles = findFiles(distDir, '.html');
  
  htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add performance optimizations
    content = addPerformanceOptimizations(content);
    
    fs.writeFileSync(file, content);
    console.log(`Optimized: ${path.relative(distDir, file)}`);
  });
  
  console.log('Performance optimization completed!');
}

function findFiles(dir, extension) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(findFiles(fullPath, extension));
    } else if (path.extname(item) === extension) {
      files.push(fullPath);
    }
  });
  
  return files;
}

function addPerformanceOptimizations(html) {
  // Add preload hints for critical resources
  const preloadHints = `
    <link rel="preload" href="/assets/index-CUTafpvq.css" as="style">
    <link rel="preload" href="/assets/index-DOMfs2G7.js" as="script">
    <link rel="preload" href="/assets/react-vendor-B_35fahn.js" as="script">
  `;
  
  // Add performance meta tags
  const performanceMeta = `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#06b6d4">
    <meta name="color-scheme" content="dark">
  `;
  
  // Add resource hints
  const resourceHints = `
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    <link rel="preconnect" href="//fonts.gstatic.com" crossorigin>
  `;
  
  // Insert optimizations before closing head tag
  html = html.replace('</head>', `${preloadHints}${performanceMeta}${resourceHints}</head>`);
  
  // Add loading="lazy" to images
  html = html.replace(/<img([^>]*?)>/g, '<img$1 loading="lazy">');
  
  // Add defer to non-critical scripts
  html = html.replace(/<script([^>]*?)>/g, (match, attrs) => {
    if (!attrs.includes('defer') && !attrs.includes('async')) {
      return `<script${attrs} defer>`;
    }
    return match;
  });
  
  return html;
}

// Run optimization
optimizePerformance();
