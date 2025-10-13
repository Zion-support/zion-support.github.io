const fs = require('fs');
const path = require('path');

// Performance optimization script
function optimizePerformance() {
  console.log('Starting performance optimization...');
  
  // Check if dist directory exists
  const distPath = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distPath)) {
    console.log('Dist directory not found. Please run build first.');
    return;
  }
  
  // Optimize HTML files
  optimizeHTML();
  
  // Optimize CSS files
  optimizeCSS();
  
  // Optimize JS files
  optimizeJS();
  
  console.log('Performance optimization completed!');
}

function optimizeHTML() {
  console.log('Optimizing HTML files...');
  
  const htmlFiles = findFiles(distPath, '.html');
  htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove comments
    content = content.replace(/<!--[\s\S]*?-->/g, '');
    
    // Minify whitespace
    content = content.replace(/\s+/g, ' ').trim();
    
    fs.writeFileSync(file, content);
  });
  
  console.log(`Optimized ${htmlFiles.length} HTML files`);
}

function optimizeCSS() {
  console.log('Optimizing CSS files...');
  
  const cssFiles = findFiles(distPath, '.css');
  cssFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Minify whitespace
    content = content.replace(/\s+/g, ' ').trim();
    
    fs.writeFileSync(file, content);
  });
  
  console.log(`Optimized ${cssFiles.length} CSS files`);
}

function optimizeJS() {
  console.log('Optimizing JS files...');
  
  const jsFiles = findFiles(distPath, '.js');
  jsFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove comments (but preserve license comments)
    content = content.replace(/\/\*(?!\*!)[\s\S]*?\*\//g, '');
    content = content.replace(/\/\/.*$/gm, '');
    
    // Minify whitespace
    content = content.replace(/\s+/g, ' ').trim();
    
    fs.writeFileSync(file, content);
  });
  
  console.log(`Optimized ${jsFiles.length} JS files`);
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

// Run optimization
optimizePerformance();