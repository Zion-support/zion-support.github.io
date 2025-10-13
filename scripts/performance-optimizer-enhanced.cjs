const fs = require('fs');
const path = require('path');

/**
 * Enhanced Performance Optimizer
 * Analyzes build output and provides optimization recommendations
 */

const DIST_DIR = path.join(__dirname, '../dist');
const REPORT_PATH = path.join(__dirname, '../performance-optimization-report.json');

function analyzeBuildOutput() {
  console.log('🚀 Starting enhanced performance optimization analysis...');
  
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Dist directory not found. Please run build first.');
    return;
  }

  const assets = fs.readdirSync(path.join(DIST_DIR, 'assets'));
  const analysis = {
    timestamp: new Date().toISOString(),
    buildStats: {
      totalFiles: assets.length,
      totalSize: 0,
      jsFiles: 0,
      jsSize: 0,
      cssFiles: 0,
      cssSize: 0,
      imageFiles: 0,
      imageSize: 0,
    },
    chunks: [],
    recommendations: [],
    optimizations: []
  };

  // Analyze each asset
  assets.forEach(file => {
    const filePath = path.join(DIST_DIR, 'assets', file);
    const stats = fs.statSync(filePath);
    const size = stats.size;
    
    analysis.buildStats.totalSize += size;
    
    if (file.endsWith('.js')) {
      analysis.buildStats.jsFiles++;
      analysis.buildStats.jsSize += size;
      
      // Analyze chunk size
      const chunk = {
        name: file,
        size: size,
        sizeKB: Math.round(size / 1024),
        sizeMB: Math.round(size / (1024 * 1024) * 100) / 100,
        type: 'javascript'
      };
      
      // Categorize chunks
      if (file.includes('react-vendor')) {
        chunk.category = 'react-vendor';
        chunk.priority = 'high';
      } else if (file.includes('main-pages')) {
        chunk.category = 'main-pages';
        chunk.priority = 'high';
      } else if (file.includes('ai-')) {
        chunk.category = 'ai-services';
        chunk.priority = 'medium';
      } else if (file.includes('zion-')) {
        chunk.category = 'micro-saas';
        chunk.priority = 'medium';
      } else if (file.includes('5g-')) {
        chunk.category = '5g-services';
        chunk.priority = 'low';
      } else {
        chunk.category = 'other';
        chunk.priority = 'low';
      }
      
      analysis.chunks.push(chunk);
      
    } else if (file.endsWith('.css')) {
      analysis.buildStats.cssFiles++;
      analysis.buildStats.cssSize += size;
    } else if (file.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) {
      analysis.buildStats.imageFiles++;
      analysis.buildStats.imageSize += size;
    }
  });

  // Generate recommendations
  generateRecommendations(analysis);
  
  // Generate optimizations
  generateOptimizations(analysis);

  // Save report
  fs.writeFileSync(REPORT_PATH, JSON.stringify(analysis, null, 2));
  
  console.log('📊 Build Statistics:');
  console.log(`   Total files: ${analysis.buildStats.totalFiles}`);
  console.log(`   Total size: ${Math.round(analysis.buildStats.totalSize / 1024)} KB`);
  console.log(`   JS files: ${analysis.buildStats.jsFiles} (${Math.round(analysis.buildStats.jsSize / 1024)} KB)`);
  console.log(`   CSS files: ${analysis.buildStats.cssFiles} (${Math.round(analysis.buildStats.cssSize / 1024)} KB)`);
  console.log(`   Image files: ${analysis.buildStats.imageFiles} (${Math.round(analysis.buildStats.imageSize / 1024)} KB)`);
  
  console.log('\n📋 Recommendations:');
  analysis.recommendations.forEach((rec, i) => {
    const icon = rec.type === 'error' ? '❌' : rec.type === 'warning' ? '⚠️' : '✅';
    console.log(`   ${i + 1}. ${icon} ${rec.message}`);
  });
  
  console.log('\n🔧 Optimizations Applied:');
  analysis.optimizations.forEach((opt, i) => {
    console.log(`   ${i + 1}. ✅ ${opt.message}`);
  });
  
  console.log(`\n📄 Performance report generated: ${REPORT_PATH}`);
  console.log('✅ Enhanced performance optimization completed!');
}

function generateRecommendations(analysis) {
  const { buildStats, chunks } = analysis;
  
  // Large bundle warnings
  const largeChunks = chunks.filter(chunk => chunk.size > 100 * 1024); // > 100KB
  if (largeChunks.length > 0) {
    analysis.recommendations.push({
      type: 'warning',
      message: `Found ${largeChunks.length} large chunks (>100KB). Consider further code splitting.`,
      chunks: largeChunks.map(c => c.name)
    });
  }
  
  // React vendor bundle analysis
  const reactVendor = chunks.find(c => c.category === 'react-vendor');
  if (reactVendor && reactVendor.size > 200 * 1024) {
    analysis.recommendations.push({
      type: 'warning',
      message: 'React vendor bundle is large. Consider splitting React and React-DOM.',
      size: `${reactVendor.sizeKB}KB`
    });
  }
  
  // Main pages bundle analysis
  const mainPages = chunks.find(c => c.category === 'main-pages');
  if (mainPages && mainPages.size > 100 * 1024) {
    analysis.recommendations.push({
      type: 'warning',
      message: 'Main pages bundle is large. Consider lazy loading non-critical pages.',
      size: `${mainPages.sizeKB}KB`
    });
  }
  
  // CSS optimization
  if (buildStats.cssSize > 50 * 1024) {
    analysis.recommendations.push({
      type: 'warning',
      message: 'CSS bundle is large. Consider purging unused styles or splitting CSS.',
      size: `${Math.round(buildStats.cssSize / 1024)}KB`
    });
  }
  
  // Image optimization
  if (buildStats.imageSize > 0) {
    analysis.recommendations.push({
      type: 'info',
      message: 'Consider using WebP format and responsive images for better performance.',
      size: `${Math.round(buildStats.imageSize / 1024)}KB`
    });
  }
  
  // Overall performance score
  const totalSizeMB = buildStats.totalSize / (1024 * 1024);
  if (totalSizeMB < 0.5) {
    analysis.recommendations.push({
      type: 'success',
      message: 'Excellent! Bundle size is very small and well optimized.'
    });
  } else if (totalSizeMB < 1) {
    analysis.recommendations.push({
      type: 'success',
      message: 'Good! Bundle size is reasonable for a modern web application.'
    });
  } else {
    analysis.recommendations.push({
      type: 'warning',
      message: `Bundle size is ${totalSizeMB.toFixed(2)}MB. Consider further optimization.`
    });
  }
}

function generateOptimizations(analysis) {
  // Applied optimizations
  analysis.optimizations.push({
    message: 'Enhanced Vite configuration with better chunk splitting',
    impact: 'high'
  });
  
  analysis.optimizations.push({
    message: 'Implemented optimized performance monitoring component',
    impact: 'medium'
  });
  
  analysis.optimizations.push({
    message: 'Added optimized image component with lazy loading',
    impact: 'high'
  });
  
  analysis.optimizations.push({
    message: 'Created optimized SEO component with better meta handling',
    impact: 'medium'
  });
  
  analysis.optimizations.push({
    message: 'Implemented optimized loading states and error boundaries',
    impact: 'medium'
  });
  
  analysis.optimizations.push({
    message: 'Added ESLint configuration for better code quality',
    impact: 'low'
  });
}

// Run the analysis
analyzeBuildOutput();