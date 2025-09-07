#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SEOOptimizationSuite {
  constructor() {
    this.startTime = Date.now();
    this.results = {
      optimizations: { applied: 0, errors: 0 },
      files: { created: 0, updated: 0 },
      sitemaps: { generated: 0, errors: 0 }
    };
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

  async generateSitemap() {
    this.log('🗺️ Generating sitemap...', 'PROGRESS');
    
    try {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;
      
      fs.writeFileSync('public/sitemap.xml', sitemap);
      this.results.sitemaps.generated++;
      this.log('Sitemap generated successfully', 'SUCCESS');
      
    } catch (error) {
      this.results.sitemaps.errors++;
      this.log(`Sitemap generation failed: ${error.message}`, 'ERROR');
    }
  }

  async createRobotsTxt() {
    this.log('🤖 Creating robots.txt...', 'PROGRESS');
    
    try {
      const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /services/
Allow: /about/
Allow: /contact/`;
      
      fs.writeFileSync('public/robots.txt', robotsTxt);
      this.results.files.created++;
      this.log('robots.txt created successfully', 'SUCCESS');
      
    } catch (error) {
      this.results.optimizations.errors++;
      this.log(`robots.txt creation failed: ${error.message}`, 'ERROR');
    }
  }

  async createSEOMetaTags() {
    this.log('🏷️ Creating SEO meta tags...', 'PROGRESS');
    
    const seoComponents = [
      {
        name: 'Structured Data Component',
        file: 'src/components/StructuredData.tsx',
        content: `import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service';
  data: Record<string, any>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;`
      },
      {
        name: 'SEO Head Component',
        file: 'src/components/SEOHead.tsx',
        content: `import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: Record<string, any>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : \`\${title} | Zion Tech Group\`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1e40af" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default SEOHead;`
      },
      {
        name: 'Breadcrumb Component',
        file: 'src/components/Breadcrumb.tsx',
        content: `import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: item.href })
    }))
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-blue-600">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
};

export default Breadcrumb;`
      }
    ];

    for (const component of seoComponents) {
      try {
        const dir = path.dirname(component.file);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(component.file, component.content);
        this.results.files.created++;
        this.log(`Created: ${component.name}`, 'SUCCESS');
      } catch (error) {
        this.results.optimizations.errors++;
        this.log(`Failed to create ${component.name}: ${error.message}`, 'ERROR');
      }
    }
  }

  async createSEOUtils() {
    this.log('🛠️ Creating SEO utilities...', 'PROGRESS');
    
    const utils = [
      {
        name: 'SEO Utils',
        file: 'src/utils/seo.ts',
        content: `// SEO utility functions

export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
  const cleanContent = content.replace(/<[^>]*>/g, '').trim();
  if (cleanContent.length <= maxLength) return cleanContent;
  
  return cleanContent.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (content: string, maxKeywords: number = 10): string[] => {
  const words = content
    .toLowerCase()
    .replace(/[^a-z\\s]/g, '')
    .split(/\\s+/)
    .filter(word => word.length > 3);
  
  const wordCount: Record<string, number> = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
};

export const generateStructuredData = (type: string, data: Record<string, any>) => {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return baseStructuredData;
};

export const generateOrganizationData = () => {
  return generateStructuredData('Organization', {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading technology solutions provider specializing in AI, cloud computing, and digital transformation.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/ziontechgroup'
    ]
  });
};

export const generateWebSiteData = () => {
  return generateStructuredData('WebSite', {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    description: 'Leading technology solutions provider',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ziontechgroup.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  });
};`
      },
      {
        name: 'SEO Configuration',
        file: 'seo.config.js',
        content: `module.exports = {
  siteUrl: 'https://ziontechgroup.com',
  generateRobotsTxt: true,
  generateSitemaps: true,
  exclude: ['/admin/*', '/api/*', '/private/*'],
  additionalPaths: async (config) => {
    const result = [];
    
    // Add dynamic pages
    const services = ['ai-solutions', 'cloud-computing', 'cybersecurity', 'data-analytics'];
    services.forEach(service => {
      result.push({
        loc: \`/services/\${service}\`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      });
    });
    
    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/']
      }
    ],
    additionalSitemaps: [
      'https://ziontechgroup.com/sitemap.xml'
    ]
  }
};`
      }
    ];

    for (const util of utils) {
      try {
        const dir = path.dirname(util.file);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(util.file, util.content);
        this.results.files.created++;
        this.log(`Created: ${util.name}`, 'SUCCESS');
      } catch (error) {
        this.results.optimizations.errors++;
        this.log(`Failed to create ${util.name}: ${error.message}`, 'ERROR');
      }
    }
  }

  async runAllAutomations() {
    this.log('🔍 Starting SEO Optimization Suite...', 'PROGRESS');
    
    try {
      await this.generateSitemap();
      await this.createRobotsTxt();
      await this.createSEOMetaTags();
      await this.createSEOUtils();
      
      this.generateFinalReport();
    } catch (error) {
      this.log(`SEO optimization suite failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }

  generateFinalReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      results: this.results,
      summary: {
        optimizationsApplied: this.results.optimizations.applied,
        filesCreated: this.results.files.created,
        sitemapsGenerated: this.results.sitemaps.generated,
        totalDuration: `${Math.round(duration / 1000)}s`
      }
    };

    const reportPath = path.join(process.cwd(), 'seo-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('📊 SEO Optimization Suite Completed', 'SUCCESS');
    this.log(`🔧 Optimizations Applied: ${report.summary.optimizationsApplied}`);
    this.log(`📄 Files Created: ${report.summary.filesCreated}`);
    this.log(`🗺️ Sitemaps Generated: ${report.summary.sitemapsGenerated}`);
    this.log(`⏱️ Total Duration: ${report.summary.totalDuration}`);
  }
}

// Run if called directly
if (require.main === module) {
  const suite = new SEOOptimizationSuite();
  suite.runAllAutomations().catch(error => {
    console.error('SEO optimization suite failed:', error);
    process.exit(1);
  });
}

module.exports = SEOOptimizationSuite;