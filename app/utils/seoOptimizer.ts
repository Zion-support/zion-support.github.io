/**
 * SEO Optimization Utilities
 * Provides comprehensive SEO enhancement functions
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: Record<string, unknown>;
  robots?: string;
  author?: string;
  publisher?: string;
  language?: string;
  locale?: string;
  siteName?: string;
  twitterSite?: string;
  twitterCreator?: string;
}

export class SEOOptimizer {
  private static instance: SEOOptimizer;
  private config: SEOConfig;

  private constructor(config: SEOConfig) {
    this.config = config;
    this.initialize();
  }

  public static getInstance(config?: SEOConfig): SEOOptimizer {
    if (!SEOOptimizer.instance && config) {
      SEOOptimizer.instance = new SEOOptimizer(config);
    }
    return SEOOptimizer.instance;
  }

  private initialize(): void {
    if (typeof document === 'undefined') return;
    
    this.updateTitle();
    this.updateMetaTags();
    this.updateOpenGraphTags();
    this.updateTwitterTags();
    this.updateStructuredData();
    this.updateCanonicalUrl();
    this.updateRobotsMeta();
  }

  private updateTitle(): void {
    if (typeof document === 'undefined') return;
    
    document.title = this.config.title;
  }

  private updateMetaTags(): void {
    if (typeof document === 'undefined') return;

    const metaTags = [
      { name: 'description', content: this.config.description },
      { name: 'keywords', content: this.config.keywords.join(', ') },
      { name: 'author', content: this.config.author || 'Zion Tech Group' },
      { name: 'robots', content: this.config.robots || 'index, follow' },
      { name: 'language', content: this.config.language || 'en' },
      { name: 'revisit-after', content: '3 days' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' },
    ];

    metaTags.forEach(({ name, content }) => {
      this.setMetaTag(name, content);
    });
  }

  private updateOpenGraphTags(): void {
    if (typeof document === 'undefined') return;

    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: this.config.ogTitle || this.config.title },
      { property: 'og:description', content: this.config.ogDescription || this.config.description },
      { property: 'og:url', content: this.config.canonicalUrl },
      { property: 'og:image', content: this.config.ogImage || `${this.config.canonicalUrl}/og-image.jpg` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: this.config.siteName || 'Zion Tech Group' },
      { property: 'og:locale', content: this.config.locale || 'en_US' },
    ];

    ogTags.forEach(({ property, content }) => {
      this.setMetaTag(property, content, 'property');
    });
  }

  private updateTwitterTags(): void {
    if (typeof document === 'undefined') return;

    const twitterTags = [
      { name: 'twitter:card', content: this.config.twitterCard || 'summary_large_image' },
      { name: 'twitter:url', content: this.config.canonicalUrl },
      { name: 'twitter:title', content: this.config.ogTitle || this.config.title },
      { name: 'twitter:description', content: this.config.ogDescription || this.config.description },
      { name: 'twitter:image', content: this.config.ogImage || `${this.config.canonicalUrl}/og-image.jpg` },
      { name: 'twitter:site', content: this.config.twitterSite || '@ziontechgroup' },
      { name: 'twitter:creator', content: this.config.twitterCreator || '@ziontechgroup' },
    ];

    twitterTags.forEach(({ name, content }) => {
      this.setMetaTag(name, content);
    });
  }

  private updateStructuredData(): void {
    if (typeof document === 'undefined' || !this.config.structuredData) return;

    // Remove existing structured data
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data';
    script.textContent = JSON.stringify(this.config.structuredData);
    document.head.appendChild(script);
  }

  private updateCanonicalUrl(): void {
    if (typeof document === 'undefined') return;

    // Remove existing canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical link
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = this.config.canonicalUrl;
    document.head.appendChild(canonical);
  }

  private updateRobotsMeta(): void {
    if (typeof document === 'undefined') return;

    this.setMetaTag('robots', this.config.robots || 'index, follow');
  }

  private setMetaTag(name: string, content: string, attribute: string = 'name'): void {
    if (typeof document === 'undefined') return;

    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  public updateConfig(newConfig: Partial<SEOConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.initialize();
  }

  public generateSitemap(): string {
    const baseUrl = this.config.canonicalUrl;
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog', priority: '0.6', changefreq: 'weekly' },
    ];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
      sitemap += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    return sitemap;
  }

  public generateRobotsTxt(): string {
    const baseUrl = this.config.canonicalUrl;
    return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;
  }

  public optimizeImages(): void {
    if (typeof document === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for performance
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add alt text if missing
      if (!img.alt) {
        img.setAttribute('alt', '');
      }
      
      // Add width and height for layout stability
      if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
        img.setAttribute('width', 'auto');
        img.setAttribute('height', 'auto');
      }
    });
  }

  public addBreadcrumbs(breadcrumbs: Array<{ name: string; url: string }>): void {
    if (typeof document === 'undefined') return;

    const breadcrumbStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${this.config.canonicalUrl}${crumb.url}`
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'breadcrumb-structured-data';
    script.textContent = JSON.stringify(breadcrumbStructuredData);
    document.head.appendChild(script);
  }

  public addFAQStructuredData(faqs: Array<{ question: string; answer: string }>): void {
    if (typeof document === 'undefined') return;

    const faqStructuredData = {
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
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-structured-data';
    script.textContent = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);
  }

  public addOrganizationStructuredData(): void {
    if (typeof document === 'undefined') return;

    const organizationData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: this.config.canonicalUrl,
      logo: `${this.config.canonicalUrl}/logo.png`,
      description: this.config.description,
      foundingDate: '2020',
      numberOfEmployees: '50-100',
      industry: 'Technology',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'en'
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup'
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'organization-structured-data';
    script.textContent = JSON.stringify(organizationData);
    document.head.appendChild(script);
  }
}

export default SEOOptimizer;