#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Enhanced SEO Optimizer for Zion Tech Group Website
 * Improves meta tags, structured data, and accessibility
 */

class SEOOptimizer {
  constructor() {
    this.optimizations = {
      metaTagsAdded: 0,
      structuredDataEnhanced: 0,
      accessibilityImproved: 0,
      filesProcessed: 0
    };
  }

  async optimize() {
    try {
      // Find all page files
      const files = await glob('app/**/page.tsx', { cwd: '/workspace' });
      
      for (const file of files) {
        await this.processPage(file);
      }
      
      // Generate SEO report
      this.generateReport();
      
      } catch (error) {
      console.error('❌ Error during SEO optimization:', error);
    }
  }

  async processPage(filePath) {
    const fullPath = path.join('/workspace', filePath);
    
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      // Enhance meta tags
      content = this.enhanceMetaTags(content, filePath);
      
      // Add structured data
      content = this.addStructuredData(content, filePath);
      
      // Improve accessibility
      content = this.improveAccessibility(content);
      
      // Add Open Graph tags
      content = this.addOpenGraphTags(content, filePath);
      
      // Add Twitter Card tags
      content = this.addTwitterCardTags(content, filePath);
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        this.optimizations.filesProcessed++;
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  enhanceMetaTags(content, filePath) {
    const pageName = this.getPageName(filePath);
    const title = this.generateTitle(pageName);
    const description = this.generateDescription(pageName);
    const keywords = this.generateKeywords(pageName);
    
    // Add enhanced meta tags if not present
    const metaTags = `
      <meta name="description" content="${description}" />
      <meta name="keywords" content="${keywords}" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#4f46e5" />
      <meta name="color-scheme" content="dark light" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-TileColor" content="#4f46e5" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <link rel="canonical" href="https://ziontechgroup.com${this.getCanonicalPath(filePath)}" />
      <link rel="alternate" hreflang="en" href="https://ziontechgroup.com${this.getCanonicalPath(filePath)}" />
    `;
    
    if (!content.includes('meta name="description"')) {
      content = content.replace('<head>', `<head>\n${metaTags}`);
      this.optimizations.metaTagsAdded++;
    }
    
    return content;
  }

  addStructuredData(content, filePath) {
    const pageName = this.getPageName(filePath);
    const structuredData = this.generateStructuredData(pageName, filePath);
    
    if (!content.includes('application/ld+json')) {
      const scriptTag = `
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(structuredData)}) }}
        />
      `;
      
      content = content.replace('</head>', `${scriptTag}\n</head>`);
      this.optimizations.structuredDataEnhanced++;
    }
    
    return content;
  }

  improveAccessibility(content) {
    // Add ARIA labels to interactive elements
    const ariaImprovements = [
      // Add role attributes to buttons
      { pattern: /<button([^>]*?)(?<!role=)/g, replacement: '<button$1 role="button"' },
      // Add aria-label to images without alt text
      { pattern: /<img([^>]*?)(?<!alt=)(?<!aria-label=)/g, replacement: '<img$1 aria-label="Image"' },
      // Add role to navigation
      { pattern: /<nav([^>]*?)(?<!role=)/g, replacement: '<nav$1 role="navigation"' },
      // Add role to main content
      { pattern: /<main([^>]*?)(?<!role=)/g, replacement: '<main$1 role="main"' },
      // Add role to footer
      { pattern: /<footer([^>]*?)(?<!role=)/g, replacement: '<footer$1 role="contentinfo"' }
    ];
    
    ariaImprovements.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        this.optimizations.accessibilityImproved++;
      }
    });
    
    return content;
  }

  addOpenGraphTags(content, filePath) {
    const pageName = this.getPageName(filePath);
    const title = this.generateTitle(pageName);
    const description = this.generateDescription(pageName);
    const image = this.generateImageUrl(pageName);
    
    const ogTags = `
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com${this.getCanonicalPath(filePath)}" />
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:image" content="${image}" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
    `;
    
    if (!content.includes('property="og:type"')) {
      content = content.replace('</head>', `${ogTags}\n</head>`);
    }
    
    return content;
  }

  addTwitterCardTags(content, filePath) {
    const pageName = this.getPageName(filePath);
    const title = this.generateTitle(pageName);
    const description = this.generateDescription(pageName);
    const image = this.generateImageUrl(pageName);
    
    const twitterTags = `
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://ziontechgroup.com${this.getCanonicalPath(filePath)}" />
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${description}" />
      <meta name="twitter:image" content="${image}" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
    `;
    
    if (!content.includes('name="twitter:card"')) {
      content = content.replace('</head>', `${twitterTags}\n</head>`);
    }
    
    return content;
  }

  getPageName(filePath) {
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 2] || 'home';
    return fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  generateTitle(pageName) {
    if (pageName === 'Home') {
      return 'Zion Tech Group - Advanced AI and IT Solutions';
    }
    return `${pageName} - Zion Tech Group | AI & IT Solutions`;
  }

  generateDescription(pageName) {
    const descriptions = {
      'Home': 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
      'About': 'Learn about Zion Tech Group\'s mission to revolutionize business through cutting-edge AI and IT solutions.',
      'Services': 'Comprehensive AI and IT services including enterprise automation, cloud solutions, and digital transformation.',
      'Contact': 'Get in touch with Zion Tech Group for AI consulting, IT solutions, and digital transformation services.',
      'Blog': 'Latest insights on AI technology trends, digital transformation, and innovative IT solutions.',
      'Case Studies': 'Real-world success stories of AI implementation and digital transformation projects.'
    };
    
    return descriptions[pageName] || `Professional ${pageName.toLowerCase()} services powered by AI and advanced IT solutions.`;
  }

  generateKeywords(pageName) {
    const baseKeywords = ['AI solutions', 'IT services', 'digital transformation', 'enterprise automation', 'cloud computing'];
    const pageKeywords = {
      'Home': ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation'],
      'About': ['AI company', 'technology leadership', 'innovation', 'expertise'],
      'Services': ['AI consulting', 'IT consulting', 'automation services', 'cloud migration'],
      'Contact': ['AI consultation', 'IT support', 'technical assistance', 'project inquiry'],
      'Blog': ['AI trends', 'technology insights', 'digital innovation', 'tech news'],
      'Case Studies': ['AI success stories', 'implementation examples', 'project results', 'client testimonials']
    };
    
    const specificKeywords = pageKeywords[pageName] || [`${pageName.toLowerCase()} services`, 'AI solutions', 'IT consulting'];
    return [...specificKeywords, ...baseKeywords].join(', ');
  }

  generateImageUrl(pageName) {
    return `https://ziontechgroup.com/og-${pageName.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  }

  getCanonicalPath(filePath) {
    const pathParts = filePath.split('/');
    const pagePath = pathParts.slice(1, -1).join('/');
    return pagePath ? `/${pagePath}` : '/';
  }

  generateStructuredData(pageName, filePath) {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': 'TechCompany',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: this.generateDescription(pageName),
      foundingDate: '2020',
      numberOfEmployees: '50-100',
      industry: 'Technology',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'en'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      }
    };

    // Add page-specific structured data
    if (pageName === 'Services') {
      baseData.hasOfferCatalog = {
        '@type': 'OfferCatalog',
        name: 'AI Technology Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Enterprise Transformation',
              description: 'Comprehensive AI implementation strategies for enterprise organizations'
            }
          }
        ]
      };
    }

    return baseData;
  }

  generateReport() {
    );
    }
}

// Run the SEO optimizer
const seoOptimizer = new SEOOptimizer();
seoOptimizer.optimize().catch(console.error);