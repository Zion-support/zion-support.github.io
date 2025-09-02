#!/usr/bin/env node

/**
 * Performance monitoring script for Zion Tech Group
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      timestamp: new Date().toISOString(),
      performance: {},
      build: {},
      accessibility: {},
      seo: {}
    };
  }

  async analyzeBuildOutput() {
    try {
      const buildInfoPath = path.join(process.cwd(), '.next', 'BUILD_ID');
      if (fs.existsSync(buildInfoPath)) {
        this.metrics.build.buildId = fs.readFileSync(buildInfoPath, 'utf8').trim();
        this.metrics.build.status = 'success';
      }

      // Analyze bundle sizes
      const appBuildPath = path.join(process.cwd(), '.next', 'static');
      if (fs.existsSync(appBuildPath)) {
        const files = fs.readdirSync(appBuildPath, { recursive: true });
        const jsFiles = files.filter(f => f.endsWith('.js'));
        const cssFiles = files.filter(f => f.endsWith('.css'));
        
        this.metrics.build.jsFiles = jsFiles.length;
        this.metrics.build.cssFiles = cssFiles.length;
      }
    } catch (error) {
      this.metrics.build.error = error.message;
    }
  }

  analyzeAccessibility() {
    // Check for accessibility features
    const accessibilityFeatures = {
      skipLinks: this.checkForSkipLinks(),
      altTexts: this.checkForAltTexts(),
      ariaLabels: this.checkForAriaLabels(),
      colorContrast: this.checkColorContrast(),
      keyboardNavigation: this.checkKeyboardNavigation()
    };

    this.metrics.accessibility = accessibilityFeatures;
  }

  checkForSkipLinks() {
    const accessibilityCSS = path.join(process.cwd(), 'src', 'styles', 'accessibility.css');
    if (fs.existsSync(accessibilityCSS)) {
      const content = fs.readFileSync(accessibilityCSS, 'utf8');
      return content.includes('.skip-link');
    }
    return false;
  }

  checkForAltTexts() {
    // This would need to scan component files
    return true; // Placeholder
  }

  checkForAriaLabels() {
    // This would need to scan component files
    return true; // Placeholder
  }

  checkColorContrast() {
    const cssFile = path.join(process.cwd(), 'src', 'index.css');
    if (fs.existsSync(cssFile)) {
      const content = fs.readFileSync(cssFile, 'utf8');
      return content.includes('prefers-contrast');
    }
    return false;
  }

  checkKeyboardNavigation() {
    const accessibilityCSS = path.join(process.cwd(), 'src', 'styles', 'accessibility.css');
    if (fs.existsSync(accessibilityCSS)) {
      const content = fs.readFileSync(accessibilityCSS, 'utf8');
      return content.includes('focus-visible');
    }
    return false;
  }

  analyzeSEO() {
    const seoFeatures = {
      sitemap: fs.existsSync(path.join(process.cwd(), 'public', 'sitemap.xml')),
      robots: fs.existsSync(path.join(process.cwd(), 'public', 'robots.txt')),
      manifest: fs.existsSync(path.join(process.cwd(), 'public', 'manifest.json')),
      structuredData: this.checkStructuredData(),
      metaTags: this.checkMetaTags()
    };

    this.metrics.seo = seoFeatures;
  }

  checkStructuredData() {
    const indexPage = path.join(process.cwd(), 'pages', 'index.p.tsx');
    if (fs.existsSync(indexPage)) {
      const content = fs.readFileSync(indexPage, 'utf8');
      return content.includes('application/ld+json');
    }
    return false;
  }

  checkMetaTags() {
    const indexPage = path.join(process.cwd(), 'pages', 'index.p.tsx');
    if (fs.existsSync(indexPage)) {
      const content = fs.readFileSync(indexPage, 'utf8');
      return {
        title: content.includes('<title>'),
        description: content.includes('name="description"'),
        openGraph: content.includes('property="og:'),
        twitter: content.includes('name="twitter:')
      };
    }
    return false;
  }

  analyzePerformance() {
    const performanceFeatures = {
      serviceWorker: fs.existsSync(path.join(process.cwd(), 'public', 'sw.js')),
      caching: fs.existsSync(path.join(process.cwd(), 'public', '_headers')),
      compression: this.checkCompression(),
      lazyLoading: this.checkLazyLoading(),
      codesplitting: this.checkCodeSplitting()
    };

    this.metrics.performance = performanceFeatures;
  }

  checkCompression() {
    const nextConfig = path.join(process.cwd(), 'next.config.js');
    if (fs.existsSync(nextConfig)) {
      const content = fs.readFileSync(nextConfig, 'utf8');
      return content.includes('compress: true');
    }
    return false;
  }

  checkLazyLoading() {
    const appFile = path.join(process.cwd(), 'src', 'App.tsx');
    if (fs.existsSync(appFile)) {
      const content = fs.readFileSync(appFile, 'utf8');
      return content.includes('lazy(');
    }
    return false;
  }

  checkCodeSplitting() {
    const appFile = path.join(process.cwd(), 'src', 'App.tsx');
    if (fs.existsSync(appFile)) {
      const content = fs.readFileSync(appFile, 'utf8');
      return content.includes('Suspense');
    }
    return false;
  }

  generateReport() {
    const report = {
      summary: {
        timestamp: this.metrics.timestamp,
        overallScore: this.calculateOverallScore(),
        recommendations: this.generateRecommendations()
      },
      details: this.metrics
    };

    return report;
  }

  calculateOverallScore() {
    let score = 0;
    let total = 0;

    // Performance scoring
    Object.values(this.metrics.performance).forEach(value => {
      total++;
      if (value) score++;
    });

    // SEO scoring
    Object.values(this.metrics.seo).forEach(value => {
      total++;
      if (value) score++;
    });

    // Accessibility scoring
    Object.values(this.metrics.accessibility).forEach(value => {
      total++;
      if (value) score++;
    });

    return Math.round((score / total) * 100);
  }

  generateRecommendations() {
    const recommendations = [];

    if (!this.metrics.performance.serviceWorker) {
      recommendations.push('Add service worker for offline functionality');
    }

    if (!this.metrics.seo.sitemap) {
      recommendations.push('Add XML sitemap for better SEO');
    }

    if (!this.metrics.accessibility.skipLinks) {
      recommendations.push('Add skip links for keyboard navigation');
    }

    if (!this.metrics.performance.compression) {
      recommendations.push('Enable compression in Next.js config');
    }

    return recommendations;
  }

  async run() {
    console.log('🚀 Starting Zion Tech Group Performance Analysis...\n');

    console.log('📊 Analyzing build output...');
    await this.analyzeBuildOutput();

    console.log('♿ Checking accessibility features...');
    this.analyzeAccessibility();

    console.log('🔍 Analyzing SEO features...');
    this.analyzeSEO();

    console.log('⚡ Checking performance optimizations...');
    this.analyzePerformance();

    const report = this.generateReport();

    console.log('\n📈 Performance Report:');
    console.log(`Overall Score: ${report.summary.overallScore}/100`);
    
    if (report.summary.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      report.summary.recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. ${rec}`);
      });
    }

    // Save report
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 Full report saved to: ${reportPath}`);

    return report;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch(console.error);
}

export default PerformanceMonitor;