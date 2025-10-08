/**
 * Advanced SEO Optimization Utility
 * Provides comprehensive SEO enhancements and monitoring
 */

interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle?: string;
  facebookAppId?: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
}

interface PageSEOData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

class SEOOptimizer {
  private config: SEOConfig;
  private currentPageData: PageSEOData | null = null;

  constructor(config: SEOConfig) {
    this.config = config;
  }

  /**
   * Initialize SEO optimization
   */
  init(): void {
    if (typeof document === 'undefined') return;
    
    this.setupStructuredData();
    this.setupCanonicalUrls();
    this.setupPerformanceMonitoring();
  }

  /**
   * Set page-specific SEO data
   */
  setPageData(data: PageSEOData): void {
    this.currentPageData = data;
    this.updateMetaTags();
    this.updateStructuredData();
  }

  /**
   * Generate optimized title
   */
  generateTitle(pageTitle?: string): string {
    const title = pageTitle || this.currentPageData?.title || this.config.defaultTitle;
    return title.includes(this.config.siteName) 
      ? title 
      : `${title} | ${this.config.siteName}`;
  }

  /**
   * Generate optimized description
   */
  generateDescription(pageDescription?: string): string {
    const description = pageDescription || this.currentPageData?.description || this.config.defaultDescription;
    return description.length > 160 
      ? description.substring(0, 157) + '...' 
      : description;
  }

  /**
   * Generate keywords string
   */
  generateKeywords(pageKeywords?: string[]): string {
    const keywords = pageKeywords || this.currentPageData?.keywords || [];
    return keywords.join(', ');
  }

  /**
   * Update meta tags
   */
  private updateMetaTags(): void {
    if (typeof document === 'undefined') return;
    if (!this.currentPageData) return;

    const title = this.generateTitle();
    const description = this.generateDescription();
    const keywords = this.generateKeywords();
    const image = this.currentPageData.image || this.config.defaultImage;
    const url = this.currentPageData.url || (typeof window !== 'undefined' ? window.location.href : '');

    // Update title
    document.title = title;

    // Update or create meta tags
    this.setMetaTag('description', description);
    this.setMetaTag('keywords', keywords);
    this.setMetaTag('author', this.currentPageData.author || this.config.siteName);
    this.setMetaTag('robots', this.getRobotsContent());

    // Open Graph tags
    this.setMetaTag('og:title', title, 'property');
    this.setMetaTag('og:description', description, 'property');
    this.setMetaTag('og:image', image, 'property');
    this.setMetaTag('og:url', url, 'property');
    this.setMetaTag('og:type', this.currentPageData.type || 'website', 'property');
    this.setMetaTag('og:site_name', this.config.siteName, 'property');

    // Twitter Card tags
    if (this.config.twitterHandle) {
      this.setMetaTag('twitter:card', 'summary_large_image');
      this.setMetaTag('twitter:site', `@${this.config.twitterHandle}`);
      this.setMetaTag('twitter:title', title);
      this.setMetaTag('twitter:description', description);
      this.setMetaTag('twitter:image', image);
    }

    // Additional meta tags
    this.setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    this.setMetaTag('theme-color', '#1e40af');
    this.setMetaTag('msapplication-TileColor', '#1e40af');
  }

  /**
   * Set meta tag
   */
  private setMetaTag(name: string, content: string, attribute: string = 'name'): void {
    if (typeof document === 'undefined') return;
    
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    
    (meta as HTMLMetaElement).content = content;
  }

  /**
   * Get robots content
   */
  private getRobotsContent(): string {
    if (!this.currentPageData) return 'index, follow';
    
    const directives: string[] = [];
    
    if (!this.currentPageData.noindex) {
      directives.push('index');
    } else {
      directives.push('noindex');
    }
    
    if (!this.currentPageData.nofollow) {
      directives.push('follow');
    } else {
      directives.push('nofollow');
    }
    
    return directives.join(', ');
  }

  /**
   * Setup structured data
   */
  private setupStructuredData(): void {
    if (typeof document === 'undefined') return;
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: this.config.siteName,
      url: this.config.siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${this.config.siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
    
    this.addStructuredData(structuredData);
  }

  /**
   * Update structured data
   */
  private updateStructuredData(): void {
    if (typeof document === 'undefined') return;
    if (!this.currentPageData) return;
    
    const structuredData: any = {
      '@context': 'https://schema.org',
      '@type': this.currentPageData.type === 'article' ? 'Article' : 'WebPage',
      name: this.currentPageData.title,
      description: this.currentPageData.description,
      url: this.currentPageData.url || (typeof window !== 'undefined' ? window.location.href : ''),
      image: this.currentPageData.image || this.config.defaultImage
    };
    
    if (this.currentPageData.type === 'article') {
      structuredData.headline = this.currentPageData.title;
      structuredData.author = {
        '@type': 'Person',
        name: this.currentPageData.author || this.config.siteName
      };
      structuredData.publisher = {
        '@type': 'Organization',
        name: this.config.siteName,
        logo: {
          '@type': 'ImageObject',
          url: this.config.defaultImage
        }
      };
      if (this.currentPageData.publishedTime) {
        structuredData.datePublished = this.currentPageData.publishedTime;
      }
      if (this.currentPageData.modifiedTime) {
        structuredData.dateModified = this.currentPageData.modifiedTime;
      }
    }
    
    this.addStructuredData(structuredData);
  }

  /**
   * Add structured data
   */
  private addStructuredData(data: any): void {
    if (typeof document === 'undefined') return;
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Setup canonical URLs
   */
  private setupCanonicalUrls(): void {
    if (typeof document === 'undefined') return;
    if (typeof window === 'undefined') return;
    
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = window.location.href;
    document.head.appendChild(canonical);
  }

  /**
   * Setup performance monitoring
   */
  private setupPerformanceMonitoring(): void {
    if (typeof window === 'undefined') return;
    
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            this.trackSEOMetric('LCP', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            this.trackSEOMetric('FID', (entry as any).processingStart - entry.startTime);
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
      } catch (e) {
        // Observer not supported
      }
      
      // Track CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            this.trackSEOMetric('CLS', clsValue);
          }
        }
      });
      
      try {
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        // Observer not supported
      }
    }
  }

  /**
   * Track SEO metric
   */
  private trackSEOMetric(metric: string, value: number): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'SEO',
        event_label: metric,
        value: Math.round(value),
        non_interaction: true
      });
    }
  }

  /**
   * Generate sitemap data
   */
  generateSitemapData(): any[] {
    return [
      {
        url: this.config.siteUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0
      }
    ];
  }

  /**
   * Generate robots.txt content
   */
  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /
Sitemap: ${this.config.siteUrl}/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /`;
  }

  /**
   * Check SEO issues
   */
  checkSEOIssues(): string[] {
    const issues: string[] = [];
    
    if (typeof document === 'undefined') return issues;
    
    // Check title length
    if (document.title.length < 30 || document.title.length > 60) {
      issues.push('Title length should be between 30-60 characters');
    }
    
    // Check description
    const description = document.querySelector('meta[name="description"]');
    if (!description) {
      issues.push('Missing meta description');
    } else {
      const content = (description as HTMLMetaElement).content;
      if (content.length < 120 || content.length > 160) {
        issues.push('Description length should be between 120-160 characters');
      }
    }
    
    // Check canonical URL
    if (!document.querySelector('link[rel="canonical"]')) {
      issues.push('Missing canonical URL');
    }
    
    // Check Open Graph tags
    if (!document.querySelector('meta[property="og:title"]')) {
      issues.push('Missing Open Graph title');
    }
    if (!document.querySelector('meta[property="og:description"]')) {
      issues.push('Missing Open Graph description');
    }
    if (!document.querySelector('meta[property="og:image"]')) {
      issues.push('Missing Open Graph image');
    }
    
    // Check structured data
    if (!document.querySelector('script[type="application/ld+json"]')) {
      issues.push('Missing structured data');
    }
    
    return issues;
  }

  /**
   * Get SEO score
   */
  getSEOScore(): number {
    const issues = this.checkSEOIssues();
    const maxScore = 100;
    const deduction = issues.length * 10;
    return Math.max(0, maxScore - deduction);
  }
}

export default SEOOptimizer;