#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting SEO Optimizer...');

class SEOOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.startTime = new Date();
    this.results = {
      sitemap: { success: false, generated: false, issues: [] },
      metaTags: { success: false, optimized: false, issues: [] },
      structuredData: { success: false, implemented: false, issues: [] },
      robotsTxt: { success: false, created: false, issues: [] },
      performance: { success: false, score: 0, issues: [] }
    };
    this.ensureReportsDir();
  }

  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);

    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 60000,
        ...options
      });
      
      this.log(`✅ ${description} - Success`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message, output: error.stdout?.toString() || '' };
    }
  }

  async generateSitemap() {
    this.log('\n🗺️ GENERATING SITEMAP');
    
    try {
      const issues = [];

      // Check if sitemap generation script exists
      const sitemapScript = path.join(this.projectRoot, 'scripts', 'generate-sitemap.js');
      if (fs.existsSync(sitemapScript)) {
        const sitemapResult = await this.runCommand('npm run sitemap:generate', 'Sitemap Generation');
        
        if (sitemapResult.success) {
          this.results.sitemap = {
            success: true,
            generated: true,
            issues: []
          };
        } else {
          issues.push('Sitemap generation failed');
          this.results.sitemap = {
            success: false,
            generated: false,
            issues
          };
        }
      } else {
        // Create a basic sitemap
        await this.createBasicSitemap();
        this.results.sitemap = {
          success: true,
          generated: true,
          issues: ['Created basic sitemap (consider implementing dynamic sitemap)']
        };
      }
    } catch (error) {
      this.log(`❌ Failed to generate sitemap: ${error.message}`, 'ERROR');
      this.results.sitemap = {
        success: false,
        generated: false,
        issues: ['Failed to generate sitemap']
      };
    }
  }

  async createBasicSitemap() {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://zion.app/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://zion.app/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://zion.app/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

    const sitemapPath = path.join(this.projectRoot, 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapContent);
    this.log('✅ Basic sitemap created');
  }

  async optimizeMetaTags() {
    this.log('\n🏷️ OPTIMIZING META TAGS');
    
    try {
      const issues = [];

      // Check for meta tags in pages
      const pagesDir = path.join(this.projectRoot, 'pages');
      const appDir = path.join(this.projectRoot, 'app');
      
      let hasMetaTags = false;
      let metaTagIssues = [];

      // Check pages directory
      if (fs.existsSync(pagesDir)) {
        const pages = this.findFiles(pagesDir, ['.js', '.jsx', '.ts', '.tsx']);
        for (const page of pages) {
          const content = fs.readFileSync(page, 'utf8');
          if (content.includes('Head') || content.includes('title') || content.includes('meta')) {
            hasMetaTags = true;
          } else {
            metaTagIssues.push(`Missing meta tags in ${path.relative(this.projectRoot, page)}`);
          }
        }
      }

      // Check app directory
      if (fs.existsSync(appDir)) {
        const appFiles = this.findFiles(appDir, ['.js', '.jsx', '.ts', '.tsx']);
        for (const file of appFiles) {
          const content = fs.readFileSync(file, 'utf8');
          if (content.includes('metadata') || content.includes('title') || content.includes('description')) {
            hasMetaTags = true;
          } else {
            metaTagIssues.push(`Missing metadata in ${path.relative(this.projectRoot, file)}`);
          }
        }
      }

      this.results.metaTags = {
        success: hasMetaTags,
        optimized: hasMetaTags,
        issues: metaTagIssues
      };

    } catch (error) {
      this.log(`❌ Failed to optimize meta tags: ${error.message}`, 'ERROR');
      this.results.metaTags = {
        success: false,
        optimized: false,
        issues: ['Failed to optimize meta tags']
      };
    }
  }

  async implementStructuredData() {
    this.log('\n📊 IMPLEMENTING STRUCTURED DATA');
    
    try {
      const issues = [];

      // Create structured data examples
      const structuredDataExamples = `
// Example: Organization structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "url": "https://zion.app",
  "logo": "https://zion.app/logo.png",
  "description": "Leading technology solutions provider",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service"
  }
};

// Example: Website structured data
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Zion Tech Group",
  "url": "https://zion.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://zion.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
`;

      const examplesPath = path.join(this.projectRoot, 'structured-data-examples.js');
      fs.writeFileSync(examplesPath, structuredDataExamples);

      this.results.structuredData = {
        success: true,
        implemented: true,
        issues: ['Created structured data examples - implement in your components']
      };

    } catch (error) {
      this.log(`❌ Failed to implement structured data: ${error.message}`, 'ERROR');
      this.results.structuredData = {
        success: false,
        implemented: false,
        issues: ['Failed to implement structured data']
      };
    }
  }

  async createRobotsTxt() {
    this.log('\n🤖 CREATING ROBOTS.TXT');
    
    try {
      const issues = [];

      const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://zion.app/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /
Allow: /about
Allow: /contact
Allow: /services
Allow: /blog
`;

      const robotsPath = path.join(this.projectRoot, 'public', 'robots.txt');
      fs.writeFileSync(robotsPath, robotsContent);

      this.results.robotsTxt = {
        success: true,
        created: true,
        issues: []
      };

    } catch (error) {
      this.log(`❌ Failed to create robots.txt: ${error.message}`, 'ERROR');
      this.results.robotsTxt = {
        success: false,
        created: false,
        issues: ['Failed to create robots.txt']
      };
    }
  }

  async checkPerformance() {
    this.log('\n⚡ CHECKING PERFORMANCE');
    
    try {
      const issues = [];

      // Check if build exists
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        const buildStats = fs.statSync(buildDir);
        const sizeInMB = buildStats.size / (1024 * 1024);
        
        if (sizeInMB > 50) {
          issues.push(`Build size is large: ${sizeInMB.toFixed(2)}MB`);
        }

        this.results.performance = {
          success: sizeInMB < 50,
          score: Math.max(0, 100 - (sizeInMB * 2)),
          issues
        };
      } else {
        issues.push('Build directory not found - run npm run build');
        this.results.performance = {
          success: false,
          score: 0,
          issues
        };
      }

    } catch (error) {
      this.log(`❌ Failed to check performance: ${error.message}`, 'ERROR');
      this.results.performance = {
        success: false,
        score: 0,
        issues: ['Failed to check performance']
      };
    }
  }

  findFiles(dir, extensions) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          files.push(...this.findFiles(fullPath, extensions));
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      });
    } catch (error) {
      // Skip directories that can't be read
    }
    
    return files;
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 SEO OPTIMIZER REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log('');

    let totalIssues = 0;
    let passedChecks = 0;

    Object.entries(this.results).forEach(([check, result]) => {
      const status = result.success ? '✅' : '❌';
      const issuesCount = result.issues?.length || 0;
      
      totalIssues += issuesCount;
      if (result.success) passedChecks++;

      this.log(`${status} ${check}: ${issuesCount} issues`);
      
      if (issuesCount > 0) {
        result.issues.forEach(issue => this.log(`  - ${issue}`, 'WARNING'));
      }
    });

    this.log('\n📈 SUMMARY');
    this.log(`Passed Checks: ${passedChecks}/${Object.keys(this.results).length}`);
    this.log(`Total Issues: ${totalIssues}`);

    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      results: this.results,
      summary: {
        passedChecks,
        totalChecks: Object.keys(this.results).length,
        totalIssues,
        seoScore: Math.round((passedChecks / Object.keys(this.results).length) * 100)
      },
      recommendations: [
        'Implement dynamic sitemap generation',
        'Add comprehensive meta tags to all pages',
        'Implement structured data markup',
        'Optimize images with proper alt text',
        'Add canonical URLs to prevent duplicate content',
        'Implement breadcrumb navigation',
        'Add Open Graph and Twitter Card meta tags',
        'Optimize page loading speed',
        'Implement proper heading hierarchy (H1, H2, H3)',
        'Add internal linking strategy'
      ]
    };
    
    const reportPath = path.join(this.reportsDir, 'seo-optimizer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`\n📄 Detailed report saved to ${reportPath}`);

    if (totalIssues === 0) {
      this.log('\n🎉 All SEO checks passed! Your application is SEO optimized.', 'SUCCESS');
    } else {
      this.log(`\n⚠️ Found ${totalIssues} SEO issues that need attention.`, 'WARNING');
    }
  }

  async run() {
    this.log('🚀 Starting SEO Optimizer');
    this.log('='.repeat(60));
    
    try {
      await this.generateSitemap();
      await this.optimizeMetaTags();
      await this.implementStructuredData();
      await this.createRobotsTxt();
      await this.checkPerformance();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateReport();
    }
  }
}

// Run the SEO optimizer
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = SEOOptimizer;