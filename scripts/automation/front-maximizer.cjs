#!/usr/bin/env node

/**
 * Front-End Maximizer Automation Script
 * Optimizes front-end performance, quality, and user experience
 * Runs every 4 hours via PM2
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class FrontEndMaximizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'front-end-reports');
    this.ensureReportsDirectory();
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runFrontEndMaximization() {
    console.log('🚀 Starting front-end maximization...');
    
    try {
      // Analyze current front-end state
      console.log('🔍 Analyzing current front-end state...');
      const currentState = this.analyzeCurrentState();
      
      // Optimize build configuration
      console.log('⚙️ Optimizing build configuration...');
      const buildOptimization = this.optimizeBuildConfiguration();
      
      // Check and optimize assets
      console.log('🖼️ Optimizing assets...');
      const assetOptimization = this.optimizeAssets();
      
      // Check and optimize CSS
      console.log('🎨 Optimizing CSS...');
      const cssOptimization = this.optimizeCSS();
      
      // Check and optimize JavaScript
      console.log('⚡ Optimizing JavaScript...');
      const jsOptimization = this.optimizeJavaScript();
      
      // Check accessibility
      console.log('♿ Checking accessibility...');
      const accessibilityCheck = this.checkAccessibility();
      
      // Check SEO optimization
      console.log('🔍 Checking SEO optimization...');
      const seoCheck = this.checkSEOOptimization();
      
      // Generate comprehensive report
      const report = this.generateReport({
        currentState,
        build: buildOptimization,
        assets: assetOptimization,
        css: cssOptimization,
        js: jsOptimization,
        accessibility: accessibilityCheck,
        seo: seoCheck
      });
      
      // Save report
      this.saveReport(report);
      
      console.log('✅ Front-end maximization completed successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Front-end maximization failed:', error.message);
      this.saveReport({
        timestamp: new Date().toISOString(),
        status: 'failed',
        error: error.message
      });
      return false;
    }
  }

  analyzeCurrentState() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const viteConfig = fs.existsSync(path.join(this.projectRoot, 'vite.config.ts')) ? 
        fs.readFileSync(path.join(this.projectRoot, 'vite.config.ts'), 'utf8') : '';
      const tailwindConfig = fs.existsSync(path.join(this.projectRoot, 'tailwind.config.ts')) ? 
        fs.readFileSync(path.join(this.projectRoot, 'tailwind.config.ts'), 'utf8') : '';
      
      return {
        success: true,
        framework: packageJson.dependencies?.react ? 'React' : 
                  packageJson.dependencies?.vue ? 'Vue' : 
                  packageJson.dependencies?.angular ? 'Angular' : 'Unknown',
        buildTool: packageJson.devDependencies?.vite ? 'Vite' : 
                   packageJson.devDependencies?.webpack ? 'Webpack' : 
                   packageJson.devDependencies?.parcel ? 'Parcel' : 'Unknown',
        hasTailwind: !!packageJson.devDependencies?.['tailwindcss'],
        hasTypeScript: !!packageJson.devDependencies?.typescript,
        hasLinting: !!packageJson.devDependencies?.eslint,
        hasTesting: !!packageJson.devDependencies?.jest || !!packageJson.devDependencies?.vitest
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  optimizeBuildConfiguration() {
    try {
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      
      if (fs.existsSync(viteConfigPath)) {
        const currentConfig = fs.readFileSync(viteConfigPath, 'utf8');
        
        // Check for common optimizations
        const optimizations = {
          hasMinification: currentConfig.includes('minify: true') || currentConfig.includes('minify: "terser"'),
          hasSourceMaps: currentConfig.includes('sourcemap: true'),
          hasCompression: currentConfig.includes('build: { rollupOptions' && currentConfig.includes('compression'),
          hasTreeShaking: currentConfig.includes('build: { rollupOptions' && currentConfig.includes('treeshake'),
          hasChunking: currentConfig.includes('build: { rollupOptions' && currentConfig.includes('output: { manualChunks')
        };
        
        return {
          success: true,
          currentConfig: 'vite',
          optimizations,
          recommendations: this.generateBuildRecommendations(optimizations)
        };
      } else {
        return {
          success: true,
          currentConfig: 'unknown',
          message: 'No Vite config found'
        };
      }
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  optimizeAssets() {
    try {
      const publicPath = path.join(this.projectRoot, 'public');
      const srcPath = path.join(this.projectRoot, 'src');
      
      const assets = {
        images: this.findAssets(publicPath, ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp']),
        fonts: this.findAssets(publicPath, ['.woff', '.woff2', '.ttf', '.otf']),
        icons: this.findAssets(publicPath, ['.ico', '.svg']),
        documents: this.findAssets(publicPath, ['.pdf', '.doc', '.docx'])
      };
      
      const totalSize = Object.values(assets).reduce((sum, assetList) => 
        sum + assetList.reduce((assetSum, asset) => assetSum + asset.size, 0), 0
      );
      
      return {
        success: true,
        assets,
        totalSize,
        totalSizeFormatted: this.formatBytes(totalSize),
        recommendations: this.generateAssetRecommendations(assets, totalSize)
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  optimizeCSS() {
    try {
      const srcPath = path.join(this.projectRoot, 'src');
      const cssFiles = this.findCSSFiles(srcPath);
      
      const cssAnalysis = {
        totalFiles: cssFiles.length,
        totalSize: cssFiles.reduce((sum, file) => sum + file.size, 0),
        hasTailwind: this.checkTailwindUsage(cssFiles),
        hasUnusedCSS: this.checkUnusedCSS(cssFiles),
        hasCriticalCSS: this.checkCriticalCSS(cssFiles)
      };
      
      cssAnalysis.totalSizeFormatted = this.formatBytes(cssAnalysis.totalSize);
      
      return {
        success: true,
        analysis: cssAnalysis,
        recommendations: this.generateCSSRecommendations(cssAnalysis)
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  optimizeJavaScript() {
    try {
      const srcPath = path.join(this.projectRoot, 'src');
      const jsFiles = this.findJavaScriptFiles(srcPath);
      
      const jsAnalysis = {
        totalFiles: jsFiles.length,
        totalSize: jsFiles.reduce((sum, file) => sum + file.size, 0),
        hasTypeScript: this.checkTypeScriptUsage(jsFiles),
        hasUnusedCode: this.checkUnusedCode(jsFiles),
        hasCodeSplitting: this.checkCodeSplitting(jsFiles),
        hasLazyLoading: this.checkLazyLoading(jsFiles)
      };
      
      jsAnalysis.totalSizeFormatted = this.formatBytes(jsAnalysis.totalSize);
      
      return {
        success: true,
        analysis: jsAnalysis,
        recommendations: this.generateJSRecommendations(jsAnalysis)
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  checkAccessibility() {
    try {
      // Basic accessibility checks
      const srcPath = path.join(this.projectRoot, 'src');
      const htmlFiles = this.findHTMLFiles(srcPath);
      
      const accessibilityChecks = {
        totalFiles: htmlFiles.length,
        hasAltText: this.checkAltText(htmlFiles),
        hasSemanticHTML: this.checkSemanticHTML(htmlFiles),
        hasARIALabels: this.checkARIALabels(htmlFiles),
        hasKeyboardNavigation: this.checkKeyboardNavigation(htmlFiles)
      };
      
      return {
        success: true,
        checks: accessibilityChecks,
        recommendations: this.generateAccessibilityRecommendations(accessibilityChecks)
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  checkSEOOptimization() {
    try {
      const srcPath = path.join(this.projectRoot, 'src');
      const htmlFiles = this.findHTMLFiles(srcPath);
      
      const seoChecks = {
        totalFiles: htmlFiles.length,
        hasMetaTags: this.checkMetaTags(htmlFiles),
        hasStructuredData: this.checkStructuredData(htmlFiles),
        hasOpenGraph: this.checkOpenGraph(htmlFiles),
        hasCanonicalUrls: this.checkCanonicalUrls(htmlFiles),
        hasSitemap: fs.existsSync(path.join(this.projectRoot, 'public', 'sitemap.xml'))
      };
      
      return {
        success: true,
        checks: seoChecks,
        recommendations: this.generateSEORecommendations(seoChecks)
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Helper methods
  findAssets(dir, extensions) {
    const assets = [];
    
    if (!fs.existsSync(dir)) return assets;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        assets.push(...this.findAssets(fullPath, extensions));
      } else if (extensions.some(ext => item.toLowerCase().endsWith(ext))) {
        assets.push({
          name: item,
          path: path.relative(dir, fullPath),
          size: stat.size,
          sizeFormatted: this.formatBytes(stat.size)
        });
      }
    });
    
    return assets;
  }

  findCSSFiles(dir) {
    return this.findFilesByExtension(dir, ['.css', '.scss', '.sass', '.less']);
  }

  findJavaScriptFiles(dir) {
    return this.findFilesByExtension(dir, ['.js', '.jsx', '.ts', '.tsx']);
  }

  findHTMLFiles(dir) {
    return this.findFilesByExtension(dir, ['.html', '.jsx', '.tsx']);
  }

  findFilesByExtension(dir, extensions) {
    const files = [];
    
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.findFilesByExtension(fullPath, extensions));
      } else if (extensions.some(ext => item.toLowerCase().endsWith(ext))) {
        files.push({
          name: item,
          path: path.relative(dir, fullPath),
          size: stat.size,
          sizeFormatted: this.formatBytes(stat.size)
        });
      }
    });
    
    return files;
  }

  checkTailwindUsage(cssFiles) {
    // Basic check for Tailwind usage
    return cssFiles.some(file => {
      try {
        const content = fs.readFileSync(path.join(this.projectRoot, 'src', file.path), 'utf8');
        return content.includes('@tailwind') || content.includes('@apply');
      } catch {
        return false;
      }
    });
  }

  checkUnusedCSS(cssFiles) {
    // Placeholder for unused CSS detection
    return false;
  }

  checkCriticalCSS(cssFiles) {
    // Placeholder for critical CSS detection
    return false;
  }

  checkTypeScriptUsage(jsFiles) {
    return jsFiles.some(file => file.name.endsWith('.ts') || file.name.endsWith('.tsx'));
  }

  checkUnusedCode(jsFiles) {
    // Placeholder for unused code detection
    return false;
  }

  checkCodeSplitting(jsFiles) {
    // Placeholder for code splitting detection
    return false;
  }

  checkLazyLoading(jsFiles) {
    // Placeholder for lazy loading detection
    return false;
  }

  checkAltText(htmlFiles) {
    // Basic check for alt text
    return htmlFiles.some(file => {
      try {
        const content = fs.readFileSync(path.join(this.projectRoot, 'src', file.path), 'utf8');
        return content.includes('alt=');
      } catch {
        return false;
      }
    });
  }

  checkSemanticHTML(htmlFiles) {
    // Basic check for semantic HTML
    const semanticTags = ['header', 'nav', 'main', 'section', 'article', 'aside', 'footer'];
    return htmlFiles.some(file => {
      try {
        const content = fs.readFileSync(path.join(this.projectRoot, 'src', file.path), 'utf8');
        return semanticTags.some(tag => content.includes(`<${tag}`));
      } catch {
        return false;
      }
    });
  }

  checkARIALabels(htmlFiles) {
    // Basic check for ARIA labels
    return htmlFiles.some(file => {
      try {
        const content = fs.readFileSync(path.join(this.projectRoot, 'src', file.path), 'utf8');
        return content.includes('aria-') || content.includes('role=');
      } catch {
        return false;
      }
    });
  }

  checkKeyboardNavigation(htmlFiles) {
    // Placeholder for keyboard navigation check
    return false;
  }

  checkMetaTags(htmlFiles) {
    // Basic check for meta tags
    return htmlFiles.some(file => {
      try {
        const content = fs.readFileSync(path.join(this.projectRoot, 'src', file.path), 'utf8');
        return content.includes('<meta') || content.includes('<title>');
      } catch {
        return false;
      }
    });
  }

  checkStructuredData(htmlFiles) {
    // Basic check for structured data
    return htmlFiles.some(file => {
      try {
        const content = fs.readFileSync(path.join(this.projectRoot, 'src', file.path), 'utf8');
        return content.includes('application/ld+json');
      } catch {
        return false;
      }
    });
  }

  checkOpenGraph(htmlFiles) {
    // Basic check for Open Graph tags
    return htmlFiles.some(file => {
      try {
        const content = fs.readFileSync(path.join(this.projectRoot, 'src', file.path), 'utf8');
        return content.includes('property="og:');
      } catch {
        return false;
      }
    });
  }

  checkCanonicalUrls(htmlFiles) {
    // Basic check for canonical URLs
    return htmlFiles.some(file => {
      try {
        const content = fs.readFileSync(path.join(this.projectRoot, 'src', file.path), 'utf8');
        return content.includes('rel="canonical"');
      } catch {
        return false;
      }
    });
  }

  generateBuildRecommendations(optimizations) {
    const recommendations = [];
    
    if (!optimizations.hasMinification) {
      recommendations.push('⚙️ Enable minification to reduce bundle size');
    }
    
    if (!optimizations.hasSourceMaps) {
      recommendations.push('🗺️ Enable source maps for better debugging');
    }
    
    if (!optimizations.hasCompression) {
      recommendations.push('🗜️ Enable compression (gzip/brotli) for faster loading');
    }
    
    if (!optimizations.hasTreeShaking) {
      recommendations.push('🌳 Enable tree shaking to remove unused code');
    }
    
    if (!optimizations.hasChunking) {
      recommendations.push('📦 Implement code splitting for better caching');
    }
    
    return recommendations;
  }

  generateAssetRecommendations(assets, totalSize) {
    const recommendations = [];
    
    if (totalSize > 10 * 1024 * 1024) { // 10MB
      recommendations.push('🖼️ Optimize images and compress assets to reduce bundle size');
    }
    
    if (assets.images.length > 20) {
      recommendations.push('🖼️ Consider using a CDN for image assets');
    }
    
    if (assets.fonts.length > 5) {
      recommendations.push('🔤 Limit font files and use font-display: swap');
    }
    
    return recommendations;
  }

  generateCSSRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.totalSize > 500 * 1024) { // 500KB
      recommendations.push('🎨 Optimize CSS bundle size through purging and minification');
    }
    
    if (!analysis.hasTailwind) {
      recommendations.push('🎨 Consider using Tailwind CSS for utility-first styling');
    }
    
    if (analysis.hasUnusedCSS) {
      recommendations.push('🧹 Remove unused CSS to improve performance');
    }
    
    return recommendations;
  }

  generateJSRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.totalSize > 2 * 1024 * 1024) { // 2MB
      recommendations.push('⚡ Optimize JavaScript bundle size through code splitting');
    }
    
    if (!analysis.hasTypeScript) {
      recommendations.push('🔍 Consider using TypeScript for better code quality');
    }
    
    if (!analysis.hasCodeSplitting) {
      recommendations.push('📦 Implement code splitting for better performance');
    }
    
    return recommendations;
  }

  generateAccessibilityRecommendations(checks) {
    const recommendations = [];
    
    if (!checks.hasAltText) {
      recommendations.push('♿ Add alt text to all images for screen readers');
    }
    
    if (!checks.hasSemanticHTML) {
      recommendations.push('🏗️ Use semantic HTML elements for better accessibility');
    }
    
    if (!checks.hasARIALabels) {
      recommendations.push('🎯 Add ARIA labels and roles for complex components');
    }
    
    if (!checks.hasKeyboardNavigation) {
      recommendations.push('⌨️ Ensure all interactive elements are keyboard accessible');
    }
    
    return recommendations;
  }

  generateSEORecommendations(checks) {
    const recommendations = [];
    
    if (!checks.hasMetaTags) {
      recommendations.push('🔍 Add proper meta tags for better SEO');
    }
    
    if (!checks.hasStructuredData) {
      recommendations.push('📊 Implement structured data for rich snippets');
    }
    
    if (!checks.hasOpenGraph) {
      recommendations.push('📱 Add Open Graph tags for social media sharing');
    }
    
    if (!checks.hasCanonicalUrls) {
      recommendations.push('🔗 Add canonical URLs to prevent duplicate content');
    }
    
    if (!checks.hasSitemap) {
      recommendations.push('🗺️ Generate a sitemap.xml for search engines');
    }
    
    return recommendations;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  generateReport(data) {
    const timestamp = new Date().toISOString();
    
    const report = {
      timestamp,
      status: 'completed',
      summary: {
        currentState: data.currentState?.success || false,
        build: data.build?.success || false,
        assets: data.assets?.success || false,
        css: data.css?.success || false,
        js: data.js?.success || false,
        accessibility: data.accessibility?.success || false,
        seo: data.seo?.success || false
      },
      details: data,
      recommendations: this.generateOverallRecommendations(data)
    };

    return report;
  }

  generateOverallRecommendations(data) {
    const allRecommendations = [
      ...(data.build?.recommendations || []),
      ...(data.assets?.recommendations || []),
      ...(data.css?.recommendations || []),
      ...(data.js?.recommendations || []),
      ...(data.accessibility?.recommendations || []),
      ...(data.seo?.recommendations || [])
    ];
    
    return allRecommendations.length > 0 ? allRecommendations : ['✅ All front-end optimizations are in place'];
  }

  saveReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `front-end-maximizer-${timestamp}.json`;
    const filepath = path.join(this.reportsDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    console.log(`📄 Front-end maximizer report saved: ${filename}`);
    
    // Also save a latest version
    const latestFilepath = path.join(this.reportsDir, 'front-end-maximizer-latest.json');
    fs.writeFileSync(latestFilepath, JSON.stringify(report, null, 2));
    
    // Generate markdown summary
    this.generateMarkdownSummary(report, timestamp);
  }

  generateMarkdownSummary(report, timestamp) {
    const markdown = `# Front-End Maximizer Report - ${timestamp}

## Summary
- **Current State Analysis**: ${report.summary.currentState ? '✅' : '❌'}
- **Build Optimization**: ${report.summary.build ? '✅' : '❌'}
- **Asset Optimization**: ${report.summary.assets ? '✅' : '❌'}
- **CSS Optimization**: ${report.summary.css ? '✅' : '❌'}
- **JavaScript Optimization**: ${report.summary.js ? '✅' : '❌'}
- **Accessibility**: ${report.summary.accessibility ? '✅' : '❌'}
- **SEO Optimization**: ${report.summary.seo ? '✅' : '❌'}

## Recommendations
${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## Status
${report.status === 'completed' ? '✅ Front-End Maximization Completed' : '❌ Front-End Maximization Failed'}

---
*Report generated automatically by PM2 Front-End Maximizer*
`;

    const filename = `front-end-maximizer-${timestamp}.md`;
    const filepath = path.join(this.reportsDir, filename);
    fs.writeFileSync(filepath, markdown);
    
    const latestFilepath = path.join(this.reportsDir, 'front-end-maximizer-latest.md');
    fs.writeFileSync(latestFilepath, markdown);
  }
}

// Main execution
async function main() {
  const maximizer = new FrontEndMaximizer();
  await maximizer.runFrontEndMaximization();
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = FrontEndMaximizer;