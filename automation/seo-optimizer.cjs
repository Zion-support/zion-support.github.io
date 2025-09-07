#!/usr/bin/env node

/**
 * SEO Optimizer
 * Comprehensive SEO analysis and optimization tool
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Starting SEO optimization...');

class SEOOptimizer {
  constructor() {
    this.issues = [];
    this.recommendations = [];
    this.auditResults = {
      timestamp: new Date().toISOString(),
      metaTags: [],
      structuredData: [],
      performance: [],
      content: [],
      recommendations: []
    };
  }

  async checkMetaTags() {
    try {
      console.log('🏷️  Checking meta tags...');
      
      const pagesDir = path.join(__dirname, '..', 'pages');
      const appDir = path.join(__dirname, '..', 'app');
      
      const directories = [pagesDir, appDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForMetaTags(dir);
      }
      
      console.log(`✅ Meta tags check completed`);
      
    } catch (error) {
      console.warn('⚠️  Meta tags check failed:', error.message);
    }
  }

  scanDirectoryForMetaTags(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForMetaTags(fullPath);
      } else if (file.name.match(/\.(jsx|tsx|js|ts)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          this.analyzeMetaTags(content, fullPath);
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  analyzeMetaTags(content, filePath) {
    const metaPatterns = [
      {
        type: 'meta_tags',
        priority: 'high',
        description:

      },
      {
        name: 'Missing Meta Description',
        pattern: /<meta\s+name="description"/gi,
        severity: 'high',
        recommendation: 'Add meta descriptions (150-160 characters)'
      },
      {
        name: 'Missing Open Graph Tags',
        pattern: /<meta\s+property="og:/gi,
        severity: 'medium',
        recommendation: 'Add Open Graph tags for social media sharing'
      },
      {
        name: 'Missing Twitter Card Tags',
        pattern: /<meta\s+name="twitter:/gi,
        severity: 'medium',
        recommendation: 'Add Twitter Card tags for better social sharing'
      },
      {
        name: 'Missing Canonical URL',
        pattern: /<link\s+rel="canonical"/gi,
        severity: 'medium',
        recommendation: 'Add canonical URLs to prevent duplicate content'
      },
      {
        name: 'Missing Viewport Meta',
        pattern: /<meta\s+name="viewport"/gi,
        severity: 'high',
        recommendation: 'Add viewport meta tag for mobile optimization'
      }
    ];
    
    metaPatterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        this.auditResults.metaTags.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          found: matches.length > 0,
          recommendation: pattern.recommendation
        });
      } else {
        this.auditResults.metaTags.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          found: false,
          recommendation: pattern.recommendation
        });
      }
    });
  }

  async checkStructuredData() {
    try {
      console.log('📊 Checking structured data...');
      
      const pagesDir = path.join(__dirname, '..', 'pages');
      const appDir = path.join(__dirname, '..', 'app');
      
      const directories = [pagesDir, appDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForStructuredData(dir);
      }
      
      console.log(`✅ Structured data check completed`);
      
    } catch (error) {
      console.warn('⚠️  Structured data check failed:', error.message);
    }
  }

  scanDirectoryForStructuredData(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForStructuredData(fullPath);
      } else if (file.name.match(/\.(jsx|tsx|js|ts)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          this.analyzeStructuredData(content, fullPath);
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  analyzeStructuredData(content, filePath) {
    const structuredDataPatterns = [
      {
        name: 'JSON-LD Schema',
        pattern: /<script\s+type="application\/ld\+json"/gi,
        severity: 'medium',
        recommendation: 'Add JSON-LD structured data for better search visibility'
      },
      {
        name: 'Microdata',
        pattern: /itemscope|itemtype|itemprop/gi,
        severity: 'low',
        recommendation: 'Consider adding microdata for structured content'
      },
      {
        name: 'RDFa',
        pattern: /vocab|typeof|property/gi,
        severity: 'low',
        recommendation: 'Consider adding RDFa for structured content'
      }
    ];
    
    structuredDataPatterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        this.auditResults.structuredData.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          found: true,
          count: matches.length,
          recommendation: pattern.recommendation
        });
      } else {
        this.auditResults.structuredData.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          found: false,
          recommendation: pattern.recommendation
        });
      }
    });
  }

  async checkContentOptimization() {
    try {
      console.log('📝 Checking content optimization...');
      
      const pagesDir = path.join(__dirname, '..', 'pages');
      const appDir = path.join(__dirname, '..', 'app');
      
      const directories = [pagesDir, appDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForContent(dir);
      }
      
      console.log(`✅ Content optimization check completed`);
      
    } catch (error) {
      console.warn('⚠️  Content optimization check failed:', error.message);
    }
  }

  scanDirectoryForContent(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForContent(fullPath);
      } else if (file.name.match(/\.(jsx|tsx|js|ts)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          this.analyzeContent(content, fullPath);
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  analyzeContent(content, filePath) {
    const contentPatterns = [
      {
        name: 'Heading Structure',
        pattern: /<h[1-6]/gi,
        severity: 'medium',
        recommendation: 'Ensure proper heading hierarchy (h1 > h2 > h3)'
      },
      {
        name: 'Alt Text for Images',
        pattern: /<img(?!.*alt)/gi,
        severity: 'high',
        recommendation: 'Add descriptive alt text to all images'
      },
      {
        name: 'Internal Links',
        pattern: /<a\s+href="\//gi,
        severity: 'low',
        recommendation: 'Add internal linking for better site structure'
      },
      {
        name: 'External Links',
        pattern: /<a\s+href="https?:\/\//gi,
        severity: 'low',
        recommendation: 'Add rel="nofollow" to external links'
      }
    ];
    
    contentPatterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        this.auditResults.content.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          count: matches.length,
          recommendation: pattern.recommendation
        });
      }
    });
  }

  async checkPerformance() {
    try {
      console.log('⚡ Checking performance factors...');
      
      // Check for performance-related issues
      const performanceChecks = [
        {
          name: 'Image Optimization',
          pattern: /<img(?!.*loading="lazy")/gi,
          severity: 'medium',
          recommendation: 'Add lazy loading to images'
        },
        {
          name: 'Script Optimization',
          pattern: /<script(?!.*defer)(?!.*async)/gi,
          severity: 'low',
          recommendation: 'Consider adding defer or async to scripts'
        },
        {
          name: 'CSS Optimization',
          pattern: /<link\s+rel="stylesheet"/gi,
          severity: 'low',
          recommendation: 'Consider critical CSS inlining'
        }
      ];
      
      const pagesDir = path.join(__dirname, '..', 'pages');
      const appDir = path.join(__dirname, '..', 'app');
      
      const directories = [pagesDir, appDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForPerformance(dir, performanceChecks);
      }
      
      console.log(`✅ Performance check completed`);
      
    } catch (error) {
      console.warn('⚠️  Performance check failed:', error.message);
    }
  }

  scanDirectoryForPerformance(dir, checks) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForPerformance(fullPath, checks);
      } else if (file.name.match(/\.(jsx|tsx|js|ts)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          
          checks.forEach(check => {
            const matches = content.match(check.pattern);
            if (matches) {
              this.auditResults.performance.push({
                file: fullPath,
                type: check.name,
                severity: check.severity,
                count: matches.length,
                recommendation: check.recommendation
              });
            }
          });
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  generateRecommendations() {
    const recommendations = [
      'Optimize meta tags for better search visibility',
      'Implement structured data (JSON-LD)',
      'Add Open Graph and Twitter Card tags',
      'Ensure proper heading hierarchy',
      'Add descriptive alt text to images',
      'Implement internal linking strategy',
      'Add canonical URLs to prevent duplicate content',
      'Optimize page loading speed',
      'Implement mobile-first responsive design',
      'Add XML sitemap and robots.txt',
      'Monitor Core Web Vitals',
      'Implement breadcrumb navigation'
    ];
    
    this.auditResults.recommendations = recommendations;
  }

  generateReport() {
    this.generateRecommendations();
    
    const report = {
      ...this.auditResults,
      summary: {
        metaTagIssues: this.auditResults.metaTags.filter(t => !t.found).length,
        structuredDataIssues: this.auditResults.structuredData.filter(s => !s.found).length,
        contentIssues: this.auditResults.content.length,
        performanceIssues: this.auditResults.performance.length,
        totalIssues: this.auditResults.metaTags.filter(t => !t.found).length +
                    this.auditResults.structuredData.filter(s => !s.found).length +
                    this.auditResults.content.length +
                    this.auditResults.performance.length
      }
    };
    
    const reportPath = path.join(__dirname, '..', 'seo-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📄 SEO optimization report saved to seo-optimization-report.json');
    return report;
  }

  async run() {
    try {
      await this.checkMetaTags();
      await this.checkStructuredData();
      await this.checkContentOptimization();
      await this.checkPerformance();
      
      const report = this.generateReport();
      
      console.log('\n🔍 SEO Optimization Summary:');
      console.log(`Meta Tag Issues: ${report.summary.metaTagIssues}`);
      console.log(`Structured Data Issues: ${report.summary.structuredDataIssues}`);
      console.log(`Content Issues: ${report.summary.contentIssues}`);
      console.log(`Performance Issues: ${report.summary.performanceIssues}`);
      console.log(`Total Issues: ${report.summary.totalIssues}`);
      
      if (report.recommendations.length > 0) {
        console.log('\n💡 SEO Recommendations:');
        report.recommendations.forEach((rec, index) => {
          console.log(`${index + 1}. ${rec}`);
        });
      }
      
    } catch (error) {
      console.error('❌ SEO optimization failed:', error.message);
      process.exit(1);
    }
  }
}

async function main() {
  const optimizer = new SEOOptimizer();
  await optimizer.run();
}

if (require.main === module) {
  main();
}

module.exports = SEOOptimizer;