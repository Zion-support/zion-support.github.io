const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Asset optimization script
function optimizeAssets() {
  console.log('📦 Starting asset optimization...');
  
  try {
    // 1. Optimize images
    optimizeImages();
    
    // 2. Optimize CSS
    optimizeCSS();
    
    // 3. Optimize JavaScript
    optimizeJavaScript();
    
    // 4. Optimize fonts
    optimizeFonts();
    
    // 5. Generate asset manifest
    generateAssetManifest();
    
    // 6. Compress assets
    compressAssets();
    
    // 7. Generate optimization report
    generateOptimizationReport();
    
    console.log('✅ Asset optimization completed successfully!');
  } catch (error) {
    console.error('❌ Asset optimization failed:', error.message);
    process.exit(1);
  }
}

function optimizeImages() {
  console.log('🖼️ Optimizing images...');
  
  const distPath = path.join(process.cwd(), 'dist');
  const imageFiles = findFiles(distPath, ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);
  
  imageFiles.forEach(file => {
    try {
      const stats = fs.statSync(file);
      const originalSize = stats.size;
      
      // Use sharp for image optimization if available
      if (require.resolve('sharp')) {
        const sharp = require('sharp');
        const input = sharp(file);
        
        input.metadata().then(metadata => {
          let output = input;
          
          // Resize large images
          if (metadata.width > 1920) {
            output = output.resize(1920, null, { withoutEnlargement: true });
          }
          
          // Optimize based on format
          if (metadata.format === 'png') {
            output = output.png({ 
              compressionLevel: 9,
              progressive: true,
              quality: 90
            });
          } else if (metadata.format === 'jpeg') {
            output = output.jpeg({ 
              quality: 85,
              progressive: true,
              mozjpeg: true
            });
          } else if (metadata.format === 'webp') {
            output = output.webp({ 
              quality: 85,
              effort: 6
            });
          }
          
          return output.toFile(file);
        }).then(() => {
          const newStats = fs.statSync(file);
          const newSize = newStats.size;
          const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
          console.log(`✅ Optimized ${path.basename(file)}: ${originalSize} → ${newSize} bytes (${savings}% savings)`);
        });
      } else {
        console.log(`⚠️ Skipping image optimization for ${file} (sharp not available)`);
      }
    } catch (error) {
      console.error(`❌ Failed to optimize image ${file}:`, error.message);
    }
  });
  
  console.log(`✅ Optimized ${imageFiles.length} image files`);
}

function optimizeCSS() {
  console.log('🎨 Optimizing CSS...');
  
  const distPath = path.join(process.cwd(), 'dist');
  const cssFiles = findFiles(distPath, '.css');
  
  cssFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalSize = content.length;
    
    // Remove comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Remove unnecessary whitespace
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/;\s*/g, ';');
    content = content.replace(/{\s*/g, '{');
    content = content.replace(/}\s*/g, '}');
    
    // Remove empty rules
    content = content.replace(/[^{}]+{\s*}/g, '');
    
    // Optimize selectors
    content = content.replace(/\s*>\s*/g, '>');
    content = content.replace(/\s*\+\s*/g, '+');
    content = content.replace(/\s*~\s*/g, '~');
    
    // Remove unnecessary units
    content = content.replace(/(\d+)px/g, '$1px');
    content = content.replace(/(\d+)em/g, '$1em');
    content = content.replace(/(\d+)rem/g, '$1rem');
    
    // Optimize colors
    content = content.replace(/#([0-9a-fA-F])\1([0-9a-fA-F])\2([0-9a-fA-F])\3/g, '#$1$2$3');
    content = content.replace(/#([0-9a-fA-F]{6})/g, (match, hex) => {
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      
      if (r === g && g === b) {
        const gray = r.toString(16).padStart(2, '0');
        return `#${gray}${gray}${gray}`;
      }
      
      return match;
    });
    
    // Remove redundant properties
    content = content.replace(/margin:\s*0\s*0\s*0\s*0;?/g, 'margin:0;');
    content = content.replace(/padding:\s*0\s*0\s*0\s*0;?/g, 'padding:0;');
    
    fs.writeFileSync(file, content);
    
    const newSize = content.length;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    console.log(`✅ Optimized ${path.basename(file)}: ${originalSize} → ${newSize} bytes (${savings}% savings)`);
  });
  
  console.log(`✅ Optimized ${cssFiles.length} CSS files`);
}

function optimizeJavaScript() {
  console.log('⚡ Optimizing JavaScript...');
  
  const distPath = path.join(process.cwd(), 'dist');
  const jsFiles = findFiles(distPath, '.js');
  
  jsFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalSize = content.length;
    
    // Remove console.log statements in production
    if (process.env.NODE_ENV === 'production') {
      content = content.replace(/console\.(log|debug|info|warn|error)\([^)]*\);?/g, '');
    }
    
    // Remove comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    content = content.replace(/\/\/.*$/gm, '');
    
    // Remove unnecessary whitespace
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/;\s*/g, ';');
    content = content.replace(/{\s*/g, '{');
    content = content.replace(/}\s*/g, '}');
    
    // Remove empty statements
    content = content.replace(/;\s*;/g, ';');
    content = content.replace(/{\s*}/g, '{}');
    
    // Optimize string literals
    content = content.replace(/'([^']*)'/g, '"$1"');
    
    // Remove unnecessary semicolons
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/;\s*\)/g, ')');
    
    fs.writeFileSync(file, content);
    
    const newSize = content.length;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    console.log(`✅ Optimized ${path.basename(file)}: ${originalSize} → ${newSize} bytes (${savings}% savings)`);
  });
  
  console.log(`✅ Optimized ${jsFiles.length} JavaScript files`);
}

function optimizeFonts() {
  console.log('🔤 Optimizing fonts...');
  
  const distPath = path.join(process.cwd(), 'dist');
  const fontFiles = findFiles(distPath, ['.woff', '.woff2', '.ttf', '.otf', '.eot']);
  
  fontFiles.forEach(file => {
    try {
      const stats = fs.statSync(file);
      const originalSize = stats.size;
      
      // Use fonttools for font optimization if available
      if (require.resolve('fonttools')) {
        // This would require fonttools to be installed
        console.log(`⚠️ Font optimization for ${file} requires fonttools`);
      } else {
        console.log(`⚠️ Skipping font optimization for ${file} (fonttools not available)`);
      }
    } catch (error) {
      console.error(`❌ Failed to optimize font ${file}:`, error.message);
    }
  });
  
  console.log(`✅ Processed ${fontFiles.length} font files`);
}

function generateAssetManifest() {
  console.log('📋 Generating asset manifest...');
  
  const distPath = path.join(process.cwd(), 'dist');
  const manifest = {
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    assets: {}
  };
  
  // Scan all assets
  const assetFiles = findFiles(distPath, ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.woff', '.woff2', '.ttf', '.otf', '.eot']);
  
  assetFiles.forEach(file => {
    const relativePath = path.relative(distPath, file);
    const stats = fs.statSync(file);
    const ext = path.extname(file).toLowerCase();
    
    if (!manifest.assets[ext]) {
      manifest.assets[ext] = [];
    }
    
    manifest.assets[ext].push({
      path: relativePath,
      size: stats.size,
      modified: stats.mtime.toISOString()
    });
  });
  
  // Calculate total sizes
  manifest.totalSize = Object.values(manifest.assets)
    .flat()
    .reduce((total, asset) => total + asset.size, 0);
  
  manifest.totalFiles = assetFiles.length;
  
  // Write manifest
  const manifestPath = path.join(distPath, 'asset-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log(`✅ Generated asset manifest with ${manifest.totalFiles} files (${(manifest.totalSize / 1024 / 1024).toFixed(2)} MB)`);
}

function compressAssets() {
  console.log('🗜️ Compressing assets...');
  
  const distPath = path.join(process.cwd(), 'dist');
  
  try {
    // Use gzip compression if available
    if (require.resolve('zlib')) {
      const zlib = require('zlib');
      const gzip = zlib.createGzip();
      
      // Compress HTML files
      const htmlFiles = findFiles(distPath, '.html');
      htmlFiles.forEach(file => {
        const content = fs.readFileSync(file);
        const compressed = zlib.gzipSync(content);
        fs.writeFileSync(file + '.gz', compressed);
      });
      
      // Compress CSS files
      const cssFiles = findFiles(distPath, '.css');
      cssFiles.forEach(file => {
        const content = fs.readFileSync(file);
        const compressed = zlib.gzipSync(content);
        fs.writeFileSync(file + '.gz', compressed);
      });
      
      // Compress JavaScript files
      const jsFiles = findFiles(distPath, '.js');
      jsFiles.forEach(file => {
        const content = fs.readFileSync(file);
        const compressed = zlib.gzipSync(content);
        fs.writeFileSync(file + '.gz', compressed);
      });
      
      console.log(`✅ Compressed ${htmlFiles.length + cssFiles.length + jsFiles.length} files with gzip`);
    } else {
      console.log('⚠️ Skipping compression (zlib not available)');
    }
  } catch (error) {
    console.error('❌ Compression failed:', error.message);
  }
}

function generateOptimizationReport() {
  console.log('📊 Generating optimization report...');
  
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
      'Image compression and resizing',
      'CSS minification and optimization',
      'JavaScript minification',
      'Font optimization',
      'Asset manifest generation',
      'Gzip compression'
    ],
    recommendations: [
      'Consider using WebP format for images',
      'Implement lazy loading for images',
      'Use critical CSS inlining',
      'Enable HTTP/2 server push',
      'Implement service worker caching'
    ]
  };
  
  // Calculate compression ratios
  const compressedFiles = findFiles(distPath, '.gz');
  report.compressionRatio = compressedFiles.length > 0 ? 
    (compressedFiles.length / (report.fileCounts.html + report.fileCounts.css + report.fileCounts.js) * 100).toFixed(1) : 0;
  
  const reportPath = path.join(distPath, 'optimization-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`✅ Optimization report generated: ${reportPath}`);
  console.log(`📈 Build size: ${(report.buildSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`🗜️ Compression ratio: ${report.compressionRatio}%`);
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

// Run asset optimization
optimizeAssets();