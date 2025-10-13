const fs = require('fs');
const path = require('path');

class ComprehensiveOptimizer {
  constructor() {
    this.distPath = path.join(__dirname, '../dist');
    this.reportPath = path.join(__dirname, '../comprehensive-optimization-report.json');
  }

  // Analyze current build
  analyzeBuild() {
    const assetsPath = path.join(this.distPath, 'assets');
    const files = fs.readdirSync(assetsPath);
    
    const analysis = {
      timestamp: new Date().toISOString(),
      buildStats: {
        totalFiles: files.length,
        totalSize: 0,
        jsFiles: 0,
        jsSize: 0,
        cssFiles: 0,
        cssSize: 0,
        imageFiles: 0,
        imageSize: 0
      },
      chunks: {},
      recommendations: [],
      optimizations: []
    };

    files.forEach(file => {
      const filePath = path.join(assetsPath, file);
      const stats = fs.statSync(filePath);
      const size = stats.size;
      
      analysis.buildStats.totalSize += size;

      if (file.endsWith('.js')) {
        analysis.buildStats.jsFiles++;
        analysis.buildStats.jsSize += size;
        
        // Analyze chunk sizes
        const chunkName = file.split('-')[0];
        if (!analysis.chunks[chunkName]) {
          analysis.chunks[chunkName] = { count: 0, size: 0 };
        }
        analysis.chunks[chunkName].count++;
        analysis.chunks[chunkName].size += size;
        
        // Check for large files
        if (size > 100 * 1024) {
          analysis.recommendations.push({
            type: 'warning',
            message: `Large JS file: ${file} (${this.formatBytes(size)})`
          });
        }
      } else if (file.endsWith('.css')) {
        analysis.buildStats.cssFiles++;
        analysis.buildStats.cssSize += size;
      } else if (file.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i)) {
        analysis.buildStats.imageFiles++;
        analysis.buildStats.imageSize += size;
      }
    });

    return analysis;
  }

  // Generate optimization recommendations
  generateOptimizations(analysis) {
    const optimizations = [];

    // Bundle size optimizations
    if (analysis.buildStats.jsSize > 500 * 1024) {
      optimizations.push({
        type: 'performance',
        priority: 'high',
        title: 'Bundle Size Optimization',
        description: 'JavaScript bundle is large. Consider further code splitting.',
        actions: [
          'Implement dynamic imports for route-based code splitting',
          'Use React.lazy() for component-level lazy loading',
          'Consider removing unused dependencies',
          'Implement tree shaking for better dead code elimination'
        ]
      });
    }

    // Chunk optimization
    Object.entries(analysis.chunks).forEach(([chunkName, data]) => {
      if (data.size > 200 * 1024) {
        optimizations.push({
          type: 'performance',
          priority: 'medium',
          title: `Large Chunk: ${chunkName}`,
          description: `Chunk ${chunkName} is ${this.formatBytes(data.size)}`,
          actions: [
            `Split ${chunkName} chunk into smaller modules`,
            'Use dynamic imports for non-critical features',
            'Consider vendor chunk optimization'
          ]
        });
      }
    });

    // Performance optimizations
    optimizations.push({
      type: 'performance',
      priority: 'high',
      title: 'Core Web Vitals Optimization',
      description: 'Implement Core Web Vitals monitoring and optimization',
      actions: [
        'Add LCP optimization with image preloading',
        'Implement CLS prevention with proper image dimensions',
        'Optimize FCP with critical CSS inlining',
        'Add INP monitoring for interaction responsiveness'
      ]
    });

    // SEO optimizations
    optimizations.push({
      type: 'seo',
      priority: 'high',
      title: 'SEO Enhancement',
      description: 'Improve search engine optimization',
      actions: [
        'Add structured data for better rich snippets',
        'Implement proper meta tags for all pages',
        'Add canonical URLs and sitemap optimization',
        'Implement breadcrumb navigation'
      ]
    });

    // Accessibility optimizations
    optimizations.push({
      type: 'accessibility',
      priority: 'high',
      title: 'Accessibility Improvements',
      description: 'Enhance accessibility compliance',
      actions: [
        'Add proper ARIA labels and landmarks',
        'Implement keyboard navigation support',
        'Add screen reader announcements',
        'Ensure color contrast compliance'
      ]
    });

    return optimizations;
  }

  // Format bytes to human readable
  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Generate comprehensive report
  generateReport() {
    console.log('🚀 Starting comprehensive optimization analysis...');
    
    const analysis = this.analyzeBuild();
    const optimizations = this.generateOptimizations(analysis);
    
    const report = {
      ...analysis,
      optimizations,
      summary: {
        totalOptimizations: optimizations.length,
        highPriority: optimizations.filter(opt => opt.priority === 'high').length,
        mediumPriority: optimizations.filter(opt => opt.priority === 'medium').length,
        lowPriority: optimizations.filter(opt => opt.priority === 'low').length
      }
    };

    // Save report
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    
    // Log summary
    console.log('📊 Build Analysis:');
    console.log(`   Total files: ${analysis.buildStats.totalFiles}`);
    console.log(`   Total size: ${this.formatBytes(analysis.buildStats.totalSize)}`);
    console.log(`   JS files: ${analysis.buildStats.jsFiles} (${this.formatBytes(analysis.buildStats.jsSize)})`);
    console.log(`   CSS files: ${analysis.buildStats.cssFiles} (${this.formatBytes(analysis.buildStats.cssSize)})`);
    
    console.log('\n🎯 Optimization Recommendations:');
    optimizations.forEach((opt, index) => {
      const icon = opt.priority === 'high' ? '🔴' : opt.priority === 'medium' ? '🟡' : '🟢';
      console.log(`   ${icon} ${opt.title}`);
      console.log(`      ${opt.description}`);
      opt.actions.forEach(action => {
        console.log(`      • ${action}`);
      });
      console.log('');
    });
    
    console.log('📄 Comprehensive report generated:', this.reportPath);
    console.log('✅ Comprehensive optimization analysis completed!');
    
    return report;
  }
}

// Run the comprehensive optimizer
if (require.main === module) {
  const optimizer = new ComprehensiveOptimizer();
  optimizer.generateReport();
}

module.exports = ComprehensiveOptimizer;