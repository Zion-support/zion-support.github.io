#!/usr/bin/env node

/**
 * SEO Enhancement Script
 * Automatically enhances SEO across the application
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Starting SEO enhancement...');

// 1. Create sitemap generator
function createSitemapGenerator() {
  console.log('🗺️ Creating sitemap generator...');
  
  const sitemapGenerator = `import fs from 'fs';
import path from 'path';

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

class SitemapGenerator {
  private baseUrl = 'https://ziontechgroup.com';
  private entries: SitemapEntry[] = [];

  addEntry(entry: SitemapEntry) {
    this.entries.push(entry);
  }

  addPage(path: string, options: Partial<Omit<SitemapEntry, 'url'>> = {}) {
    this.addEntry({
      url: \`\${this.baseUrl}\${path}\`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.8,
      ...options
    });
  }

  generate() {
    const sitemap = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\${this.entries.map(entry => \`
  <url>
    <loc>\${entry.url}</loc>
    <lastmod>\${entry.lastmod}</lastmod>
    <changefreq>\${entry.changefreq}</changefreq>
    <priority>\${entry.priority}</priority>
  </url>\`).join('')}
</urlset>\`;

    return sitemap;
  }

  saveToFile(filePath: string) {
    const sitemap = this.generate();
    fs.writeFileSync(filePath, sitemap);
  }
}

// Generate sitemap for all pages
const generator = new SitemapGenerator();

// Main pages
generator.addPage('/', { priority: 1.0, changefreq: 'daily' });
generator.addPage('/about', { priority: 0.9 });
generator.addPage('/services', { priority: 0.9 });
generator.addPage('/contact', { priority: 0.8 });
generator.addPage('/enterprise', { priority: 0.8 });

// AI Services
const aiServices = [
  'ai-analytics', 'ai-automation', 'ai-business-intelligence', 'ai-chatbot-builder',
  'ai-code-generation', 'ai-content-generation', 'ai-content-writer', 'ai-crm',
  'ai-customer-support', 'ai-cybersecurity', 'ai-data-analytics', 'ai-data-visualization',
  'ai-document-processing', 'ai-ecommerce-solutions', 'ai-email-assistant', 'ai-email-marketing',
  'ai-fashion-design', 'ai-financial-analyzer', 'ai-fintech', 'ai-fitness-coach',
  'ai-fraud-detection', 'ai-healthcare', 'ai-lead-generation', 'ai-marketing',
  'ai-mobile-app-development', 'ai-music-composition', 'ai-project-manager', 'ai-sales-automation',
  'ai-scheduler', 'ai-seo-optimizer', 'ai-social-media-manager', 'ai-video-generation',
  'ai-voice-cloning', 'ai-workflow-automation', 'ai-writing-assistant'
];

aiServices.forEach(service => {
  generator.addPage(\`/\${service}\`, { priority: 0.7 });
});

// IT Services
const itServices = [
  'it-services', 'it-consulting', 'it-infrastructure', 'it-support',
  'cloud-services', 'cybersecurity', 'devops', 'web-development',
  'mobile-development', 'database-services', 'network-infrastructure'
];

itServices.forEach(service => {
  generator.addPage(\`/\${service}\`, { priority: 0.7 });
});

// Other pages
const otherPages = [
  'analytics-tools', 'business-apps', 'case-studies', 'cloud-migration',
  'compliance', 'consultation', 'demo', 'developer-tools', 'docs',
  'expense-tracker', 'gdpr', 'machine-learning', 'marketing-tools',
  'micro-saas', 'news', 'privacy', 'terms'
];

otherPages.forEach(page => {
  generator.addPage(\`/\${page}\`, { priority: 0.6 });
});

// Save sitemap
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

generator.saveToFile(path.join(publicDir, 'sitemap.xml'));
console.log('✅ Sitemap generated successfully');

export default SitemapGenerator;`;

  const scriptsDir = path.join(__dirname, '..', 'scripts');
  fs.writeFileSync(path.join(scriptsDir, 'sitemap-generator.js'), sitemapGenerator);
  console.log('✅ Sitemap generator created');
}

// 2. Create robots.txt
function createRobotsTxt() {
  console.log('🤖 Creating robots.txt...');
  
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /enterprise

# Crawl delay
Crawl-delay: 1`;

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt created');
}

// 3. Create meta tags component
function createMetaTagsComponent() {
  console.log('🏷️ Creating meta tags component...');
  
  const metaTagsComponent = `import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: any;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = 'Zion Tech Group - AI & IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = ['AI solutions', 'IT services', 'digital transformation', 'enterprise software', 'automation'],
  canonicalUrl,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : \`\${title} | Zion Tech Group\`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en-US" />
      <html lang="en" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaTags;`;

  const componentsDir = path.join(__dirname, '..', 'src', 'components');
  fs.writeFileSync(path.join(componentsDir, 'MetaTags.tsx'), metaTagsComponent);
  console.log('✅ Meta tags component created');
}

// 4. Create structured data generator
function createStructuredDataGenerator() {
  console.log('📊 Creating structured data generator...');
  
  const structuredDataGenerator = `interface Organization {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
    email: string;
  };
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs: string[];
  offers: {
    '@type': string;
    name: string;
    description: string;
    price: string;
    priceCurrency: string;
    availability: string;
  };
}

interface Service {
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: string;
  availableChannel: {
    '@type': string;
    serviceUrl: string;
  };
}

export const generateOrganizationSchema = (): Organization => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  description: 'Leading provider of AI-powered enterprise solutions and digital transformation services',
  url: 'https://ziontechgroup.com',
  logo: 'https://ziontechgroup.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-302-464-0950',
    contactType: 'customer service',
    email: 'kleber@ziontechgroup.com'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '364 E Main St STE 1008',
    addressLocality: 'Middletown',
    addressRegion: 'DE',
    postalCode: '19709',
    addressCountry: 'US'
  },
  sameAs: [
    'https://linkedin.com/company/zion-tech-group',
    'https://twitter.com/ziontechgroup'
  ],
  offers: {
    '@type': 'Offer',
    name: 'AI Enterprise Transformation Services',
    description: 'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
    price: '50000',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  }
});

export const generateServiceSchema = (serviceName: string, description: string, url: string): Service => ({
  '@type': 'Service',
  name: serviceName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: 'Zion Tech Group'
  },
  areaServed: 'United States',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: url
  }
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export default {
  generateOrganizationSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema
};`;

  const utilsDir = path.join(__dirname, '..', 'src', 'utils');
  fs.writeFileSync(path.join(utilsDir, 'structuredData.ts'), structuredDataGenerator);
  console.log('✅ Structured data generator created');
}

// 5. Create SEO audit script
function createSEOAuditScript() {
  console.log('🔍 Creating SEO audit script...');
  
  const seoAuditScript = `import fs from 'fs';
import path from 'path';

interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  file?: string;
  line?: number;
}

class SEOAuditor {
  private issues: SEOIssue[] = [];
  private baseUrl = 'https://ziontechgroup.com';

  auditFile(filePath: string, content: string) {
    const fileName = path.basename(filePath);
    
    // Check for missing title
    if (!content.includes('<title>') && !content.includes('Helmet')) {
      this.addIssue('error', 'Missing page title', fileName);
    }
    
    // Check for missing meta description
    if (!content.includes('meta name="description"') && !content.includes('description:')) {
      this.addIssue('warning', 'Missing meta description', fileName);
    }
    
    // Check for missing alt attributes on images
    const imgTags = content.match(/<img[^>]*>/g) || [];
    imgTags.forEach((img, index) => {
      if (!img.includes('alt=')) {
        this.addIssue('warning', \`Image \${index + 1} missing alt attribute\`, fileName);
      }
    });
    
    // Check for heading structure
    const headings = content.match(/<h[1-6][^>]*>/g) || [];
    if (headings.length === 0) {
      this.addIssue('warning', 'No headings found', fileName);
    }
    
    // Check for internal links
    const internalLinks = content.match(/href="[^"]*"/g) || [];
    const hasInternalLinks = internalLinks.some(link => 
      link.includes(this.baseUrl) || link.startsWith('href="/')
    );
    
    if (!hasInternalLinks && fileName !== 'index.html') {
      this.addIssue('info', 'No internal links found', fileName);
    }
    
    // Check for external links
    const externalLinks = content.match(/href="https?:\/\/[^"]*"/g) || [];
    externalLinks.forEach((link, index) => {
      if (!link.includes('rel=')) {
        this.addIssue('warning', \`External link \${index + 1} missing rel attribute\`, fileName);
      }
    });
  }

  private addIssue(type: SEOIssue['type'], message: string, file?: string, line?: number) {
    this.issues.push({ type, message, file, line });
  }

  generateReport(): string {
    const errors = this.issues.filter(issue => issue.type === 'error');
    const warnings = this.issues.filter(issue => issue.type === 'warning');
    const infos = this.issues.filter(issue => issue.type === 'info');
    
    let report = '# SEO Audit Report\\n\\n';
    report += \`## Summary\\n\`;
    report += \`- Errors: \${errors.length}\\n\`;
    report += \`- Warnings: \${warnings.length}\\n\`;
    report += \`- Info: \${infos.length}\\n\\n\`;
    
    if (errors.length > 0) {
      report += '## Errors\\n\\n';
      errors.forEach(issue => {
        report += \`- \${issue.message}\`;
        if (issue.file) report += \` (File: \${issue.file})\`;
        if (issue.line) report += \` (Line: \${issue.line})\`;
        report += '\\n';
      });
      report += '\\n';
    }
    
    if (warnings.length > 0) {
      report += '## Warnings\\n\\n';
      warnings.forEach(issue => {
        report += \`- \${issue.message}\`;
        if (issue.file) report += \` (File: \${issue.file})\`;
        if (issue.line) report += \` (Line: \${issue.line})\`;
        report += '\\n';
      });
      report += '\\n';
    }
    
    if (infos.length > 0) {
      report += '## Info\\n\\n';
      infos.forEach(issue => {
        report += \`- \${issue.message}\`;
        if (issue.file) report += \` (File: \${issue.file})\`;
        if (issue.line) report += \` (Line: \${issue.line})\`;
        report += '\\n';
      });
    }
    
    return report;
  }

  getIssues(): SEOIssue[] {
    return this.issues;
  }
}

// Run SEO audit
const auditor = new SEOAuditor();

// Audit main pages
const pagesDir = path.join(process.cwd(), 'src');
const pages = fs.readdirSync(pagesDir, { recursive: true })
  .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'))
  .filter(file => !file.includes('node_modules'))
  .filter(file => !file.includes('.test.'))
  .filter(file => !file.includes('.spec.'));

pages.forEach(page => {
  const filePath = path.join(pagesDir, page);
  const content = fs.readFileSync(filePath, 'utf8');
  auditor.auditFile(filePath, content);
});

// Generate report
const report = auditor.generateReport();
fs.writeFileSync('seo-audit-report.md', report);

console.log('✅ SEO audit completed');
console.log(\`Found \${auditor.getIssues().length} issues\`);

export default SEOAuditor;`;

  const scriptsDir = path.join(__dirname, '..', 'scripts');
  fs.writeFileSync(path.join(scriptsDir, 'seo-audit.js'), seoAuditScript);
  console.log('✅ SEO audit script created');
}

// Run all SEO enhancements
async function runSEOEnhancements() {
  try {
    createSitemapGenerator();
    createRobotsTxt();
    createMetaTagsComponent();
    createStructuredDataGenerator();
    createSEOAuditScript();
    
    console.log('🎉 SEO enhancement completed successfully!');
    console.log('📈 Key improvements:');
    console.log('  • Sitemap generator for better indexing');
    console.log('  • robots.txt for search engine guidance');
    console.log('  • Meta tags component for consistent SEO');
    console.log('  • Structured data generator for rich snippets');
    console.log('  • SEO audit script for ongoing monitoring');
    
  } catch (error) {
    console.error('❌ Error during SEO enhancement:', error);
    process.exit(1);
  }
}

runSEOEnhancements();