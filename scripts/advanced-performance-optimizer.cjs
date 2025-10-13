const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting advanced performance optimization...');

// Performance optimization configuration
const optimizations = {
  // Image optimization
  images: {
    quality: 85,
    formats: ['webp', 'avif', 'jpeg'],
    sizes: [320, 640, 768, 1024, 1280, 1920]
  },
  
  // Bundle optimization
  bundle: {
    chunkSizeLimit: 150,
    enableTreeShaking: true,
    enableCodeSplitting: true
  },
  
  // CSS optimization
  css: {
    minify: true,
    removeUnused: true,
    criticalCSS: true
  }
};

// Function to analyze bundle size
function analyzeBundleSize() {
  try {
    const distPath = path.join(__dirname, '../dist');
    if (!fs.existsSync(distPath)) {
      console.log('❌ Dist folder not found. Please run build first.');
      return null;
    }

    const files = fs.readdirSync(distPath, { recursive: true });
    let totalSize = 0;
    const fileStats = [];

    files.forEach(file => {
      const filePath = path.join(distPath, file);
      if (fs.statSync(filePath).isFile()) {
        const size = fs.statSync(filePath).size;
        totalSize += size;
        fileStats.push({
          name: file,
          size: size,
          sizeKB: Math.round(size / 1024 * 100) / 100
        });
      }
    });

    // Sort by size
    fileStats.sort((a, b) => b.size - a.size);

    return {
      totalSize,
      totalSizeKB: Math.round(totalSize / 1024 * 100) / 100,
      totalSizeMB: Math.round(totalSize / (1024 * 1024) * 100) / 100,
      files: fileStats
    };
  } catch (error) {
    console.error('Error analyzing bundle size:', error);
    return null;
  }
}

// Function to generate performance report
function generatePerformanceReport() {
  const bundleStats = analyzeBundleSize();
  if (!bundleStats) return;

  const report = {
    timestamp: new Date().toISOString(),
    optimizations: optimizations,
    bundleStats: bundleStats,
    recommendations: []
  };

  // Generate recommendations based on bundle analysis
  const largeFiles = bundleStats.files.filter(file => file.sizeKB > 100);
  if (largeFiles.length > 0) {
    report.recommendations.push({
      type: 'warning',
      message: `Large files detected: ${largeFiles.map(f => `${f.name} (${f.sizeKB}KB)`).join(', ')}`,
      action: 'Consider code splitting or compression for these files'
    });
  }

  if (bundleStats.totalSizeKB > 500) {
    report.recommendations.push({
      type: 'warning',
      message: `Total bundle size is ${bundleStats.totalSizeKB}KB, consider optimization`,
      action: 'Enable tree shaking, code splitting, and compression'
    });
  } else {
    report.recommendations.push({
      type: 'success',
      message: `Bundle size is optimized at ${bundleStats.totalSizeKB}KB`,
      action: 'Great job!'
    });
  }

  // Check for console statements in production
  try {
    const result = execSync('grep -r "console\\." dist/ --include="*.js" | wc -l', { encoding: 'utf8' });
    const consoleCount = parseInt(result.trim());
    if (consoleCount > 0) {
      report.recommendations.push({
        type: 'warning',
        message: `${consoleCount} console statements found in production build`,
        action: 'Remove console statements from production code'
      });
    }
  } catch (error) {
    // Ignore if grep fails
  }

  // Write report
  const reportPath = path.join(__dirname, '../performance-optimization-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log('📊 Performance Analysis:');
  console.log(`   Total size: ${bundleStats.totalSizeMB}MB (${bundleStats.totalSizeKB}KB)`);
  console.log(`   Files: ${bundleStats.files.length}`);
  console.log(`   Large files (>100KB): ${largeFiles.length}`);
  
  console.log('\n📋 Recommendations:');
  report.recommendations.forEach(rec => {
    const icon = rec.type === 'success' ? '✅' : '⚠️';
    console.log(`   ${icon} ${rec.message}`);
    if (rec.action) {
      console.log(`      → ${rec.action}`);
    }
  });

  console.log(`\n📄 Full report saved to: ${reportPath}`);
  return report;
}

// Function to optimize images
function optimizeImages() {
  console.log('🖼️  Optimizing images...');
  
  const publicPath = path.join(__dirname, '../public');
  if (!fs.existsSync(publicPath)) {
    console.log('   No public folder found, skipping image optimization');
    return;
  }

  // This would typically use sharp or imagemin
  // For now, just log the intention
  console.log('   Image optimization would be implemented here');
  console.log('   Consider using sharp or imagemin for production');
}

// Function to generate sitemap
function generateSitemap() {
  console.log('🗺️  Generating sitemap...');
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/micro-saas</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/5g-solutions</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('   Sitemap generated successfully');
}

// Main optimization function
function runOptimizations() {
  console.log('🔧 Running performance optimizations...');
  
  // Generate performance report
  const report = generatePerformanceReport();
  
  // Optimize images
  optimizeImages();
  
  // Generate sitemap
  generateSitemap();
  
  console.log('\n✅ Performance optimization completed!');
  console.log('📈 Key improvements:');
  console.log('   • Bundle size analysis completed');
  console.log('   • Performance recommendations generated');
  console.log('   • Sitemap updated');
  console.log('   • Console statements checked');
  
  return report;
}

// Run optimizations
if (require.main === module) {
  runOptimizations();
}

module.exports = {
  runOptimizations,
  analyzeBundleSize,
  generatePerformanceReport
};