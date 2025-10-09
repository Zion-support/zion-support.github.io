/**
 * Advanced SEO Optimizer
 * Provides comprehensive SEO optimization utilities
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  twitterCard: string;
  structuredData: any;
  sitemap: string[];
  robots: string;
}

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  structuredData?: any;
}

class SEOOptimizer {
  private config: SEOConfig = {
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
    keywords: [
      'AI solutions',
      'quantum computing',
      'autonomous systems',
      'digital transformation',
      'enterprise AI',
      'machine learning',
      'automation',
      'cloud services',
      'business intelligence',
      'IT solutions',
      'cybersecurity',
      'blockchain',
      'IoT',
      '5G solutions'
    ],
    canonicalUrl: 'https://ziontechgroup.com',
    ogImage: 'https://ziontechgroup.com/og-image.jpg',
    twitterCard: 'summary_large_image',
    structuredData: {},
    sitemap: [],
    robots: 'index, follow'
  };

  /**
   * Initialize SEO optimizer
   */
  init(): void {
    this.setupMetaTags();
    this.setupStructuredData();
    this.setupSitemap();
    this.optimizeImages();
    this.setupAnalytics();
  }

  /**
   * Setup essential meta tags
   */
  private setupMetaTags(): void {
    if (typeof document === 'undefined') return;

    // Title
    document.title = this.config.title;

    // Meta description
    this.setMetaTag('description', this.config.description);
    this.setMetaTag('keywords', this.config.keywords.join(', '));
    this.setMetaTag('author', 'Zion Tech Group');
    this.setMetaTag('robots', this.config.robots);
    this.setMetaTag('language', 'en');
    this.setMetaTag('revisit-after', '3 days');
    this.setMetaTag('distribution', 'global');
    this.setMetaTag('rating', 'general');

    // Open Graph tags
    this.setMetaTag('og:type', 'website', 'property');
    this.setMetaTag('og:url', this.config.canonicalUrl, 'property');
    this.setMetaTag('og:title', this.config.title, 'property');
    this.setMetaTag('og:description', this.config.description, 'property');
    this.setMetaTag('og:image', this.config.ogImage, 'property');
    this.setMetaTag('og:image:width', '1200', 'property');
    this.setMetaTag('og:image:height', '630', 'property');
    this.setMetaTag('og:site_name', 'Zion Tech Group', 'property');

    // Twitter Card tags
    this.setMetaTag('twitter:card', this.config.twitterCard);
    this.setMetaTag('twitter:url', this.config.canonicalUrl);
    this.setMetaTag('twitter:title', this.config.title);
    this.setMetaTag('twitter:description', this.config.description);
    this.setMetaTag('twitter:image', this.config.ogImage);
    this.setMetaTag('twitter:site', '@ziontechgroup');
    this.setMetaTag('twitter:creator', '@ziontechgroup');

    // Canonical URL
    this.setLinkTag('canonical', this.config.canonicalUrl);
  }

  /**
   * Set meta tag
   */
  private setMetaTag(name: string, content: string, attribute: string = 'name'): void {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  /**
   * Set link tag
   */
  private setLinkTag(rel: string, href: string): void {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.href = href;
  }

  /**
   * Setup structured data
   */
  private setupStructuredData(): void {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'TechCompany',
      name: 'Zion Tech Group',
      url: this.config.canonicalUrl,
      logo: 'https://ziontechgroup.com/logo.png',
      description: this.config.description,
      foundingDate: '2020',
      numberOfEmployees: '50-100',
      industry: 'Technology',
      services: [
        'AI Solutions',
        'Quantum Computing',
        'Autonomous Systems',
        'Digital Transformation',
        'Cloud Services',
        'Automation',
        'Business Intelligence',
        'Cybersecurity',
        'Blockchain Solutions',
        'IoT Solutions'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'en',
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://github.com/ziontechgroup'
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US',
      },
      offers: [
        {
          '@type': 'Offer',
          category: 'AI Solutions',
          description: 'Enterprise AI solutions, digital transformation, and cloud services',
          price: '1500',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '1500',
            priceCurrency: 'USD',
            billingIncrement: 'P1M'
          }
        }
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '39.8283',
          longitude: '-75.5795'
        },
        geoRadius: '1000000'
      }
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  /**
   * Setup sitemap
   */
  private setupSitemap(): void {
    this.config.sitemap = [
      '/',
      '/about',
      '/services',
      '/ai-services',
      '/ai-marketing',
      '/ai-automation',
      '/ai-healthcare',
      '/ai-fintech',
      '/quantum-computing',
      '/autonomous-systems',
      '/business-intelligence',
      '/blockchain-web3',
      '/iot-edge-computing',
      '/cybersecurity',
      '/it-infrastructure',
      '/micro-saas',
      '/contact',
      '/team',
      '/case-studies',
      '/blog',
      '/guides'
    ];
  }

  /**
   * Optimize images for SEO
   */
  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      // Add alt text if missing
      if (!img.alt) {
        img.alt = `Zion Tech Group service image ${index + 1}`;
      }

      // Add title attribute for better accessibility
      if (!img.title) {
        img.title = img.alt;
      }

      // Ensure proper loading attributes
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }

  /**
   * Setup analytics
   */
  private setupAnalytics(): void {
    // Google Analytics setup
    if (typeof window !== 'undefined') {
      // Add Google Analytics script
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
      document.head.appendChild(gaScript);

      // Initialize gtag
      const gtagScript = document.createElement('script');
      gtagScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `;
      document.head.appendChild(gtagScript);
    }
  }

  /**
   * Update page SEO
   */
  updatePageSEO(pageSEO: PageSEO): void {
    // Update title
    if (pageSEO.title) {
      document.title = `${pageSEO.title} | Zion Tech Group`;
    }

    // Update meta description
    if (pageSEO.description) {
      this.setMetaTag('description', pageSEO.description);
      this.setMetaTag('og:description', pageSEO.description, 'property');
      this.setMetaTag('twitter:description', pageSEO.description);
    }

    // Update keywords
    if (pageSEO.keywords && pageSEO.keywords.length > 0) {
      this.setMetaTag('keywords', pageSEO.keywords.join(', '));
    }

    // Update canonical URL
    if (pageSEO.canonicalUrl) {
      this.setLinkTag('canonical', pageSEO.canonicalUrl);
      this.setMetaTag('og:url', pageSEO.canonicalUrl, 'property');
      this.setMetaTag('twitter:url', pageSEO.canonicalUrl);
    }

    // Update Open Graph image
    if (pageSEO.ogImage) {
      this.setMetaTag('og:image', pageSEO.ogImage, 'property');
      this.setMetaTag('twitter:image', pageSEO.ogImage);
    }

    // Update structured data
    if (pageSEO.structuredData) {
      this.updateStructuredData(pageSEO.structuredData);
    }
  }

  /**
   * Update structured data
   */
  private updateStructuredData(data: any): void {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Generate sitemap XML
   */
  generateSitemap(): string {
    const baseUrl = this.config.canonicalUrl;
    const currentDate = new Date().toISOString();

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    this.config.sitemap.forEach(url => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${baseUrl}${url}</loc>\n`;
      sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
      sitemap += '    <changefreq>weekly</changefreq>\n';
      sitemap += '    <priority>0.8</priority>\n';
      sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';
    return sitemap;
  }

  /**
   * Get SEO score
   */
  getSEOScore(): number {
    let score = 0;

    // Check title
    if (document.title && document.title.length > 10 && document.title.length < 60) {
      score += 20;
    }

    // Check meta description
    const description = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (description && description.content.length > 120 && description.content.length < 160) {
      score += 20;
    }

    // Check keywords
    const keywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
    if (keywords && keywords.content.length > 0) {
      score += 10;
    }

    // Check Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement;
    const ogDescription = document.querySelector('meta[property="og:description"]') as HTMLMetaElement;
    const ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement;
    if (ogTitle && ogDescription && ogImage) {
      score += 15;
    }

    // Check Twitter Card tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]') as HTMLMetaElement;
    if (twitterCard) {
      score += 10;
    }

    // Check canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      score += 10;
    }

    // Check structured data
    const structuredData = document.querySelector('script[type="application/ld+json"]');
    if (structuredData) {
      score += 15;
    }

    return Math.min(100, score);
  }

  /**
   * Generate SEO report
   */
  generateSEOReport(): string {
    const score = this.getSEOScore();
    const title = document.title;
    const description = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    const keywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;

    return `
SEO Report:
==========
Overall Score: ${score}/100

Title: ${title} (${title.length} characters)
Description: ${description?.content || 'Missing'} (${description?.content.length || 0} characters)
Keywords: ${keywords?.content || 'Missing'}

Recommendations:
${score < 80 ? '- Improve meta tags and structured data' : ''}
${!title || title.length < 10 ? '- Add a descriptive title' : ''}
${!description || description.content.length < 120 ? '- Add a meta description (120-160 characters)' : ''}
${!keywords ? '- Add relevant keywords' : ''}
    `.trim();
  }
}

// Export singleton instance
export const seoOptimizer = new SEOOptimizer();

// Export utility functions
export const updatePageSEO = (pageSEO: PageSEO) => seoOptimizer.updatePageSEO(pageSEO);
export const getSEOScore = () => seoOptimizer.getSEOScore();
export const generateSitemap = () => seoOptimizer.generateSitemap();
export const generateSEOReport = () => seoOptimizer.generateSEOReport();