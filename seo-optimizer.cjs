#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SEOOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.optimizations = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options,
      });
      this.log(`✅ ${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async generateSitemap() {
    this.log('Generating sitemap...', 'PROGRESS');
    
    try {
      const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

      fs.writeFileSync('public/sitemap.xml', sitemapContent);
      this.optimizations.push('Sitemap generated');
      
    } catch (error) {
      this.log(`Sitemap generation failed: ${error.message}`, 'ERROR');
      this.errors.push(`Sitemap generation: ${error.message}`);
    }
  }

  async generateRobotsTxt() {
    this.log('Generating robots.txt...', 'PROGRESS');
    
    try {
      const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`;

      fs.writeFileSync('public/robots.txt', robotsContent);
      this.optimizations.push('Robots.txt generated');
      
    } catch (error) {
      this.log(`Robots.txt generation failed: ${error.message}`, 'ERROR');
      this.errors.push(`Robots.txt generation: ${error.message}`);
    }
  }

  async generateMetaTags() {
    this.log('Generating meta tags configuration...', 'PROGRESS');
    
    try {
      const metaTagsConfig = `// SEO Meta Tags Configuration
export const defaultSEO = {
  title: 'Zion Tech Group - AI-Powered Business Solutions',
  description: 'Transform your business with our comprehensive suite of AI-powered solutions, cloud platforms, cybersecurity, and micro SaaS services.',
  keywords: 'AI, artificial intelligence, cloud computing, cybersecurity, micro SaaS, business automation, Zion Tech Group',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - AI-Powered Business Solutions',
    description: 'Transform your business with our comprehensive suite of AI-powered solutions.',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI-Powered Business Solutions',
      },
    ],
  },
  twitter: {
    handle: '@ziontechgroup',
    site: '@ziontechgroup',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#1e40af',
    },
    {
      name: 'msapplication-TileColor',
      content: '#1e40af',
    },
  ],
};

export default defaultSEO;`;

      fs.writeFileSync('src/config/seo.js', metaTagsConfig);
      this.optimizations.push('SEO meta tags configuration generated');
      
    } catch (error) {
      this.log(`Meta tags generation failed: ${error.message}`, 'ERROR');
      this.errors.push(`Meta tags generation: ${error.message}`);
    }
  }

  async generateStructuredData() {
    this.log('Generating structured data...', 'PROGRESS');
    
    try {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
        "description": "AI-powered business solutions and technology services",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-302-464-0950",
          "contactType": "customer service",
          "email": "kleber@ziontechgroup.com"
        },
        "sameAs": [
          "https://twitter.com/ziontechgroup",
          "https://linkedin.com/company/ziontechgroup"
        ],
        "offers": {
          "@type": "Offer",
          "description": "AI-powered business solutions",
          "category": "Technology Services"
        }
      };

      fs.writeFileSync('public/structured-data.json', JSON.stringify(structuredData, null, 2));
      this.optimizations.push('Structured data generated');
      
    } catch (error) {
      this.log(`Structured data generation failed: ${error.message}`, 'ERROR');
      this.errors.push(`Structured data generation: ${error.message}`);
    }
  }

  async optimizeImages() {
    this.log('Optimizing images for SEO...', 'PROGRESS');
    
    try {
      // Check if images exist and add alt tags
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
      const imageFiles = [];
      
      const findImages = (dir) => {
        if (!fs.existsSync(dir)) return;
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {
            findImages(filePath);
          } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
            imageFiles.push(filePath);
          }
        });
      };
      
      findImages('public');
      
      if (imageFiles.length > 0) {
        this.optimizations.push(`Found ${imageFiles.length} images for SEO optimization`);
      }
      
    } catch (error) {
      this.log(`Image optimization failed: ${error.message}`, 'ERROR');
      this.errors.push(`Image optimization: ${error.message}`);
    }
  }

  async generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n🔍 SEO OPTIMIZATION REPORT');
    this.log('='.repeat(50));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(`Optimizations Applied: ${this.optimizations.length}`);
    this.log(`Errors: ${this.errors.length}`);
    this.log('');
    
    if (this.optimizations.length > 0) {
      this.log('✅ SEO Optimizations Applied:');
      this.optimizations.forEach(opt => this.log(`   • ${opt}`));
      this.log('');
    }
    
    if (this.errors.length > 0) {
      this.log('❌ Errors:');
      this.errors.forEach(error => this.log(`   • ${error}`));
      this.log('');
    }
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      optimizations: this.optimizations,
      errors: this.errors,
      recommendations: this.generateRecommendations(),
    };
    
    fs.writeFileSync(
      'seo-optimization-report.json',
      JSON.stringify(report, null, 2)
    );
    this.log('📄 Detailed report saved to seo-optimization-report.json');
  }

  generateRecommendations() {
    const recommendations = [];
    
    recommendations.push('Implement dynamic sitemap generation');
    recommendations.push('Add Open Graph images for social sharing');
    recommendations.push('Implement breadcrumb navigation');
    recommendations.push('Add FAQ schema markup');
    recommendations.push('Optimize page loading speed');
    recommendations.push('Implement internal linking strategy');
    recommendations.push('Add social media meta tags');
    recommendations.push('Regular SEO audits and monitoring');
    
    return recommendations;
  }

  async run() {
    this.log('🔍 Starting SEO Optimization Suite');
    this.log('='.repeat(50));
    
    try {
      await this.generateSitemap();
      await this.generateRobotsTxt();
      await this.generateMetaTags();
      await this.generateStructuredData();
      await this.optimizeImages();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      await this.generateReport();
    }
  }
}

// Run the SEO optimizer
const optimizer = new SEOOptimizer();
optimizer.run().catch(console.error);