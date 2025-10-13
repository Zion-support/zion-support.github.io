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

