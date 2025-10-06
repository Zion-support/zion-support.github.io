/**
 * Advanced SEO Optimization System
 * Handles meta tags, structured data, sitemap generation, and SEO analytics
 */

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: any;
}

interface PageAnalytics {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  averageTimeOnPage: number;
  lastUpdated: string;
}

class SEOOptimizer {
  private static instance: SEOOptimizer;
  private isInitialized: boolean = false;
  private analytics: Map<string, PageAnalytics> = new Map();
  private currentPage: string = '';

  private constructor() {}

  static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }

    this.setupDefaultMetaTags();
    this.trackPageViews();
    this.setupStructuredData();
    this.optimizeImages();
    this.setupSitemapGeneration();

    this.isInitialized = true;
    console.log('SEO optimizer initialized');
  }

  private setupDefaultMetaTags(): void {
    if (typeof document === 'undefined') return;

    const defaultConfig: SEOConfig = {
      title: 'Zion Tech Group - Advanced AI and IT Solutions',
      description: 'Leading provider of AI-powered IT solutions, enterprise software, and digital transformation services. Expert consulting and cutting-edge technology solutions.',
      keywords: ['AI', 'IT Solutions', 'Enterprise Software', 'Digital Transformation', 'Technology Consulting', 'Machine Learning', 'Data Analytics'],
      canonicalUrl: window.location.origin,
      ogImage: '/og-image.jpg',
      twitterCard: 'summary_large_image'
    };

    this.updateMetaTags(defaultConfig);
  }

  updatePageSEO(config: Partial<SEOConfig>, pagePath: string = ''): void {
    if (typeof document === 'undefined') return;

    this.currentPage = pagePath;
    const fullConfig: SEOConfig = {
      title: config.title || 'Zion Tech Group - Advanced AI and IT Solutions',
      description: config.description || 'Leading provider of AI-powered IT solutions and enterprise software.',
      keywords: config.keywords || ['AI', 'IT Solutions', 'Technology'],
      canonicalUrl: config.canonicalUrl || window.location.href,
      ogImage: config.ogImage || '/og-image.jpg',
      twitterCard: config.twitterCard || 'summary_large_image',
      structuredData: config.structuredData
    };

    this.updateMetaTags(fullConfig);
    this.trackPageView(pagePath);
  }

  private updateMetaTags(config: SEOConfig): void {
    if (typeof document === 'undefined') return;

    // Update title
    document.title = config.title;

    // Update or create meta tags
    this.setMetaTag('description', config.description);
    this.setMetaTag('keywords', config.keywords.join(', '));
    this.setMetaTag('canonical', config.canonicalUrl);
    this.setMetaTag('robots', 'index, follow');

    // Open Graph tags
    this.setMetaTag('og:title', config.title, 'property');
    this.setMetaTag('og:description', config.description, 'property');
    this.setMetaTag('og:url', config.canonicalUrl, 'property');
    this.setMetaTag('og:image', config.ogImage, 'property');
    this.setMetaTag('og:type', 'website', 'property');
    this.setMetaTag('og:site_name', 'Zion Tech Group', 'property');

    // Twitter Card tags
    this.setMetaTag('twitter:card', config.twitterCard);
    this.setMetaTag('twitter:title', config.title);
    this.setMetaTag('twitter:description', config.description);
    this.setMetaTag('twitter:image', config.ogImage);

    // Additional SEO tags
    this.setMetaTag('author', 'Zion Tech Group');
    this.setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    this.setMetaTag('theme-color', '#1f2937');

    // Structured data
    if (config.structuredData) {
      this.addStructuredData(config.structuredData);
    }
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

  private addStructuredData(data: any): void {
    if (typeof document === 'undefined') return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  private setupStructuredData(): void {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "description": "Leading provider of AI-powered IT solutions and enterprise software",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-ZION-TECH",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ]
    };

    this.addStructuredData(organizationSchema);
  }

  private trackPageViews(): void {
    if (typeof window === 'undefined') return;

    // Track page view on load
    this.trackPageView(window.location.pathname);

    // Track page views on navigation
    window.addEventListener('popstate', () => {
      this.trackPageView(window.location.pathname);
    });
  }

  private trackPageView(pagePath: string): void {
    const now = new Date().toISOString();
    const analytics = this.analytics.get(pagePath) || {
      pageViews: 0,
      uniqueVisitors: 1,
      bounceRate: 0,
      averageTimeOnPage: 0,
      lastUpdated: now
    };

    analytics.pageViews += 1;
    analytics.lastUpdated = now;

    this.analytics.set(pagePath, analytics);
  }

  private optimizeImages(): void {
    if (typeof document === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for better performance
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add alt text if missing
      if (!img.alt) {
        img.alt = 'Zion Tech Group - AI and IT Solutions';
      }

      // Add width and height attributes for layout stability
      if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
        img.addEventListener('load', () => {
          img.setAttribute('width', img.naturalWidth.toString());
          img.setAttribute('height', img.naturalHeight.toString());
        });
      }
    });
  }

  private setupSitemapGeneration(): void {
    // This would typically generate a sitemap.xml file
    // For now, we'll just log the current pages
    console.log('Sitemap generation setup complete');
  }

  generateSitemap(): string {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://zion.app';
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog', priority: '0.6', changefreq: 'weekly' },
      { url: '/team', priority: '0.5', changefreq: 'monthly' },
      { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
      { url: '/terms', priority: '0.3', changefreq: 'yearly' }
    ];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';
    return sitemap;
  }

  getAnalytics(): Map<string, PageAnalytics> {
    return new Map(this.analytics);
  }

  getPageAnalytics(pagePath: string): PageAnalytics | undefined {
    return this.analytics.get(pagePath);
  }

  generateSEOReport(): string {
    const analytics = this.getAnalytics();
    const totalPageViews = Array.from(analytics.values()).reduce((sum, data) => sum + data.pageViews, 0);
    const totalPages = analytics.size;

    return `
SEO Analytics Report:
====================