const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting performance optimization...');

// Performance optimization script
function optimizePerformance() {
  console.log('🚀 Starting comprehensive performance optimization...');
  
  try {
    // 1. Optimize HTML files
    optimizeHTML();
    
    // 2. Optimize CSS files
    optimizeCSS();
    
    // 3. Optimize JavaScript files
    optimizeJS();
    
    // 4. Optimize images
    optimizeImages();
    
    // 5. Generate performance report
    generatePerformanceReport();
    
    console.log('✅ Performance optimization completed successfully!');
  } catch (error) {
    console.error('❌ Error during performance optimization:', error.message);
  }
}

function optimizeHTML() {
  console.log('📄 Optimizing HTML files...');
  
  const distPath = path.join(__dirname, '../dist');
  if (!fs.existsSync(distPath)) {
    console.log('⚠️  Dist directory not found, skipping HTML optimization');
    return;
  }
  
  const htmlFiles = findFiles(distPath, '.html');
  
  htmlFiles.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Remove comments
      content = content.replace(/<!--[\s\S]*?-->/g, '');
      
      // Minify whitespace
      content = content.replace(/\s+/g, ' ').trim();
      
      fs.writeFileSync(file, content);
      console.log(`✅ Optimized: ${path.relative(distPath, file)}`);
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error.message);
    }
  });
}

function optimizeCSS() {
  console.log('🎨 Optimizing CSS files...');
  
  const distPath = path.join(__dirname, '../dist');
  if (!fs.existsSync(distPath)) {
    console.log('⚠️  Dist directory not found, skipping CSS optimization');
    return;
  }
  
  const cssFiles = findFiles(distPath, '.css');
  
  cssFiles.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Remove comments
      content = content.replace(/\/\*[\s\S]*?\*\//g, '');
      
      // Minify whitespace
      content = content.replace(/\s+/g, ' ').trim();
      
      // Remove unnecessary semicolons
      content = content.replace(/;}/g, '}');
      
      fs.writeFileSync(file, content);
      console.log(`✅ Optimized: ${path.relative(distPath, file)}`);
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error.message);
    }
  });
}

function optimizeJS() {
  console.log('⚡ Optimizing JavaScript files...');
  
  const distPath = path.join(__dirname, '../dist');
  if (!fs.existsSync(distPath)) {
    console.log('⚠️  Dist directory not found, skipping JS optimization');
    return;
  }
  
  const jsFiles = findFiles(distPath, '.js');
  
  jsFiles.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Remove console.log statements in production
      content = content.replace(/console\.log\([^)]*\);?/g, '');
      
      // Remove comments
      content = content.replace(/\/\*[\s\S]*?\*\//g, '');
      content = content.replace(/\/\/.*$/gm, '');
      
      fs.writeFileSync(file, content);
      console.log(`✅ Optimized: ${path.relative(distPath, file)}`);
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error.message);
    }
  });
}

function optimizeImages() {
  console.log('🖼️  Optimizing images...');
  
  const distPath = path.join(__dirname, '../dist');
  if (!fs.existsSync(distPath)) {
    console.log('⚠️  Dist directory not found, skipping image optimization');
    return;
  }
  
  const imageFiles = findFiles(distPath, ['.png', '.jpg', '.jpeg', '.gif', '.svg']);
  
  imageFiles.forEach(file => {
    try {
      // For now, just log the files found
      // In a real implementation, you would use image optimization libraries
      console.log(`📸 Found image: ${path.relative(distPath, file)}`);
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  });
}

function generatePerformanceReport() {
  console.log('📊 Generating performance report...');
  
  const distPath = path.join(__dirname, '../dist');
  if (!fs.existsSync(distPath)) {
    console.log('⚠️  Dist directory not found, skipping report generation');
    return;
  }
  
  const report = {
    timestamp: new Date().toISOString(),
    buildSize: getDirectorySize(distPath),
    files: {
      html: findFiles(distPath, '.html').length,
      css: findFiles(distPath, '.css').length,
      js: findFiles(distPath, '.js').length,
      images: findFiles(distPath, ['.png', '.jpg', '.jpeg', '.gif', '.svg']).length
    }
  };
  
  const reportPath = path.join(__dirname, '../performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📊 Performance report saved to: ${reportPath}`);
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