const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Performance optimization script
function optimizePerformance() {
  console.log('🚀 Starting comprehensive performance optimization...');
  
  try {
    // 1. Optimize HTML files
    optimizeHTML();
    
    // 2. Optimize CSS files
    optimizeCSS();
    
    // 3. Optimize JavaScript files
    optimizeJavaScript();
    
    // 4. Optimize images
    optimizeImages();
    
    // 5. Generate critical CSS
    generateCriticalCSS();
    
    // 6. Optimize fonts
    optimizeFonts();
    
    // 7. Generate performance report
    generatePerformanceReport();
    
    console.log('✅ Performance optimization completed successfully!');
  } catch (error) {
    console.error('❌ Performance optimization failed:', error.message);
    process.exit(1);
  }
}

function optimizeHTML() {
  console.log('📄 Optimizing HTML files...');
  
  const distPath = path.join(process.cwd(), 'dist');
  const htmlFiles = findFiles(distPath, '.html');
  
  htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove unnecessary whitespace
    content = content.replace(/>\s+</g, '><');
    
    // Remove comments (except important ones)
    content = content.replace(/<!--(?!\s*(?:\[if [^\]]+]|<!|>))(?:(?!-->).)*-->/g, '');
    
    // Optimize meta tags
    content = content.replace(/\s+/g, ' ');
    
    // Add preload hints for critical resources
    if (content.includes('<head>')) {
      const preloadHints = `
    <!-- Preload critical resources -->
    <link rel="preload" href="/assets/css/index.css" as="style">
    <link rel="preload" href="/assets/js/index.js" as="script">
    <link rel="preload" href="/assets/js/vendor.js" as="script">`;
      
      content = content.replace('<head>', `<head>${preloadHints}`);
    }
    
    fs.writeFileSync(file, content);
  });
  
  console.log(`✅ Optimized ${htmlFiles.length} HTML files`);
}

function optimizeCSS() {
  console.log('🎨 Optimizing CSS files...');
  
  const distPath = path.join(process.cwd(), 'dist');
  const cssFiles = findFiles(distPath, '.css');
  
  cssFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove unnecessary whitespace
    content = content.replace(/\s+/g, ' ');
    
    // Remove comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Remove empty rules
    content = content.replace(/[^{}]+{\s*}/g, '');
    
    // Optimize selectors
    content = content.replace(/\s*{\s*/g, '{');
    content = content.replace(/;\s*/g, ';');
    content = content.replace(/}\s*/g, '}');
    
    fs.writeFileSync(file, content);
  });
  
  console.log(`✅ Optimized ${cssFiles.length} CSS files`);
}

function optimizeJavaScript() {
  console.log('⚡ Optimizing JavaScript files...');
  
  const distPath = path.join(process.cwd(), 'dist');
  const jsFiles = findFiles(distPath, '.js');
  
  jsFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove console.log statements in production
    if (process.env.NODE_ENV === 'production') {
      content = content.replace(/console\.(log|debug|info|warn|error)\([^)]*\);?/g, '');
    }
    
    // Remove unnecessary whitespace
    content = content.replace(/\s+/g, ' ');
    
    // Remove comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    content = content.replace(/\/\/.*$/gm, '');
    
    fs.writeFileSync(file, content);
  });
  
  console.log(`✅ Optimized ${jsFiles.length} JavaScript files`);
}

function optimizeImages() {
  console.log('🖼️ Optimizing images...');
  
  const distPath = path.join(process.cwd(), 'dist');
  const imageFiles = findFiles(distPath, ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);
  
  imageFiles.forEach(file => {
    try {
      // Use sharp for image optimization if available
      if (require.resolve('sharp')) {
        const sharp = require('sharp');
        const input = sharp(file);
        
        // Get image metadata
        input.metadata().then(metadata => {
          if (metadata.format === 'png' || metadata.format === 'jpeg') {
            // Optimize based on file size
            if (metadata.size > 100000) { // 100KB
              return input
                .resize(metadata.width > 1920 ? 1920 : metadata.width)
                .jpeg({ quality: 85, progressive: true })
                .png({ compressionLevel: 9 })
                .toFile(file);
            }
          }
        });
      }
    } catch (error) {
      // Sharp not available, skip optimization
      console.log(`⚠️ Skipping image optimization for ${file} (sharp not available)`);
    }
  });
  
  console.log(`✅ Optimized ${imageFiles.length} image files`);
}

function generateCriticalCSS() {
  console.log('🎯 Generating critical CSS...');
  
  const distPath = path.join(process.cwd(), 'dist');
  const cssFiles = findFiles(distPath, '.css');
  
  if (cssFiles.length > 0) {
    const mainCSS = cssFiles.find(file => file.includes('index')) || cssFiles[0];
    let content = fs.readFileSync(mainCSS, 'utf8');
    
    // Extract critical CSS (above-the-fold styles)
    const criticalCSS = extractCriticalCSS(content);
    
    // Write critical CSS to a separate file
    const criticalPath = path.join(distPath, 'critical.css');
    fs.writeFileSync(criticalPath, criticalCSS);
    
    console.log('✅ Generated critical CSS');
  }
}

function extractCriticalCSS(css) {
  // Extract critical CSS rules (simplified version)
  const criticalSelectors = [
    'body', 'html', '#root', '.loading', '.spinner',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p', 'a', 'button', 'input', 'form',
    '.container', '.header', '.nav', '.main', '.footer'
  ];
  
  const rules = css.match(/([^{}]+)\s*{[^{}]*}/g) || [];
  const criticalRules = rules.filter(rule => {
    return criticalSelectors.some(selector => 
      rule.includes(selector)
    );
  });
  
  return criticalRules.join('\n');
}

function optimizeFonts() {
  console.log('🔤 Optimizing fonts...');
  
  const distPath = path.join(process.cwd(), 'dist');
  const fontFiles = findFiles(distPath, ['.woff', '.woff2', '.ttf', '.otf', '.eot']);
  
  // Add font-display: swap to CSS
  const cssFiles = findFiles(distPath, '.css');
  cssFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add font-display: swap to @font-face rules
    content = content.replace(
      /@font-face\s*{([^}]*)}/g,
      (match, declarations) => {
        if (!declarations.includes('font-display')) {
          return `@font-face {${declarations}font-display: swap;}`;
        }
        return match;
      }
    );
    
    fs.writeFileSync(file, content);
  });
  
  console.log(`✅ Optimized ${fontFiles.length} font files`);
}

function generatePerformanceReport() {
  console.log('📊 Generating performance report...');
  
  const distPath = path.join(process.cwd(), 'dist');
  const report = {
    timestamp: new Date().toISOString(),
    buildSize: getDirectorySize(distPath),
    fileCounts: {
      html: findFiles(distPath, '.html').length,
      css: findFiles(distPath, '.css').length,
      js: findFiles(distPath, '.js').length,
      images: findFiles(distPath, ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']).length,
      fonts: findFiles(distPath, ['.woff', '.woff2', '.ttf', '.otf', '.eot']).length,
    },
    optimizations: [
      'HTML minification',
      'CSS optimization',
      'JavaScript minification',
      'Image optimization',
      'Critical CSS generation',
      'Font optimization'
    ]
  };
  
  const reportPath = path.join(distPath, 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`✅ Performance report generated: ${reportPath}`);
  console.log(`📈 Build size: ${(report.buildSize / 1024 / 1024).toFixed(2)} MB`);
}

function findFiles(dir, extensions) {
  const files = [];
  const extArray = Array.isArray(extensions) ? extensions : [extensions];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (extArray.includes(ext)) {
          files.push(fullPath);
        }
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

// Run optimization
optimizePerformance();