const fs = require('fs');
const path = require('path');

// Performance monitoring script
function analyzePerformance() {
  console.log('🔍 Analyzing application performance...');
  
  // Check bundle sizes
  const distPath = path.join(__dirname, '../dist');
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath, { recursive: true });
    const jsFiles = files.filter(file => file.endsWith('.js'));
    const cssFiles = files.filter(file => file.endsWith('.css'));
    
    let totalJSSize = 0;
    let totalCSSSize = 0;
    
    jsFiles.forEach(file => {
      const filePath = path.join(distPath, file);
      const stats = fs.statSync(filePath);
      totalJSSize += stats.size;
    });
    
    cssFiles.forEach(file => {
      const filePath = path.join(distPath, file);
      const stats = fs.statSync(filePath);
      totalCSSSize += stats.size;
    });
    
    console.log(`📊 Bundle Analysis:`);
    console.log(`   JavaScript: ${(totalJSSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   CSS: ${(totalCSSSize / 1024).toFixed(2)} KB`);
    console.log(`   Total: ${((totalJSSize + totalCSSSize) / 1024 / 1024).toFixed(2)} MB`);
    
    // Performance recommendations
    if (totalJSSize > 2 * 1024 * 1024) { // 2MB
      console.log('⚠️  JavaScript bundle is large. Consider code splitting.');
    }
    
    if (totalCSSSize > 100 * 1024) { // 100KB
      console.log('⚠️  CSS bundle is large. Consider purging unused styles.');
    }
    
    if (totalJSSize + totalCSSSize < 500 * 1024) { // 500KB
      console.log('✅ Bundle size is excellent!');
    }
  }
  
  // Check for performance issues in source code
  console.log('\n🔍 Checking for performance issues...');
  
  const srcPath = path.join(__dirname, '../app');
  if (fs.existsSync(srcPath)) {
    const files = fs.readdirSync(srcPath, { recursive: true });
    const tsxFiles = files.filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
    
    let largeFiles = [];
    let potentialIssues = [];
    
    tsxFiles.forEach(file => {
      const filePath = path.join(srcPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n').length;
      
      if (lines > 500) {
        largeFiles.push({ file, lines });
      }
      
      // Check for potential performance issues
      if (content.includes('useEffect(() => {}, [])') && content.includes('setInterval')) {
        potentialIssues.push(`${file}: Potential memory leak with setInterval in useEffect`);
      }
      
      if (content.includes('console.log') && !content.includes('process.env.NODE_ENV')) {
        potentialIssues.push(`${file}: Console.log found in production code`);
      }
    });
    
    if (largeFiles.length > 0) {
      console.log('📄 Large files detected:');
      largeFiles.forEach(({ file, lines }) => {
        console.log(`   ${file}: ${lines} lines`);
      });
    }
    
    if (potentialIssues.length > 0) {
      console.log('⚠️  Potential performance issues:');
      potentialIssues.forEach(issue => {
        console.log(`   ${issue}`);
      });
    }
  }
  
  console.log('\n✅ Performance analysis complete!');
}

// Run the analysis
analyzePerformance();