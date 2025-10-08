import React from 'react';
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
    this.setupStructuredData();
    this.setupCanonicalUrls();
    this.setupPerformanceMonitoring();
    this.setupAccessibilityMonitoring();
  }

  /**
   * Set page SEO data
   */
  setPageData(data: PageSEOData): void {
    this.currentPageData = data;
    this.updateMetaTags();
    this.updateStructuredData();
  }

  /**
   * Update meta tags
   */
  private updateMetaTags(): void {
    if (!this.currentPageData) return;

    const { title, description, keywords, image, url, type, publishedTime, modifiedTime, author } = this.currentPageData;
    const fullTitle = `${title} | ${this.config.siteName}`;
    const fullUrl = url ? `${this.config.siteUrl}${url}` : this.config.siteUrl;
    const fullImage = image ? `${this.config.siteUrl}${image}` : this.config.defaultImage;

    // Update title
    document.title = fullTitle;

    // Update meta description
    this.updateMetaTag('name', 'description', description);

    // Update keywords
    if (keywords.length > 0) {
      this.updateMetaTag('name', 'keywords', keywords.join(', '));
    }

    // Open Graph tags
    this.updateMetaTag('property', 'og:title', fullTitle);
    this.updateMetaTag('property', 'og:description', description);
    this.updateMetaTag('property', 'og:image', fullImage);
    this.updateMetaTag('property', 'og:url', fullUrl);
    this.updateMetaTag('property', 'og:type', type || 'website');
    this.updateMetaTag('property', 'og:site_name', this.config.siteName);

    // Twitter Card tags
    if (this.config.twitterHandle) {
      this.updateMetaTag('name', 'twitter:card', 'summary_large_image');
      this.updateMetaTag('name', 'twitter:site', `@${this.config.twitterHandle}`);
      this.updateMetaTag('name', 'twitter:title', fullTitle);
      this.updateMetaTag('name', 'twitter:description', description);
      this.updateMetaTag('name', 'twitter:image', fullImage);
    }

    // Article specific tags
    if (type === 'article') {
      if (publishedTime) {
        this.updateMetaTag('property', 'article:published_time', publishedTime);
      }
      if (modifiedTime) {
        this.updateMetaTag('property', 'article:modified_time', modifiedTime);
      }
      if (author) {
        this.updateMetaTag('property', 'article:author', author);
      }
    }

    // Canonical URL
    this.updateLinkTag('canonical', fullUrl);

    // Robots meta
    if (this.currentPageData.noindex || this.currentPageData.nofollow) {
      const robots = [];
      if (this.currentPageData.noindex) robots.push('noindex');
      if (this.currentPageData.nofollow) robots.push('nofollow');
      this.updateMetaTag('name', 'robots', robots.join(', '));
    }
  }

  /**
   * Update a meta tag
   */
  private updateMetaTag(attribute: string, name: string, content: string): void {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  /**
   * Update a link tag
   */
  private updateLinkTag(rel: string, href: string): void {
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
      '@type': 'Organization',
      name: this.config.siteName,
      url: this.config.siteUrl,
      logo: this.config.defaultImage,
      description: this.config.defaultDescription,
    };

    this.addStructuredData(structuredData);
  }

  /**
   * Update structured data for current page
   */
  private updateStructuredData(): void {
    if (!this.currentPageData) return;

    const { type, title, description, image, url, publishedTime, modifiedTime, author } = this.currentPageData;
    const fullUrl = url ? `${this.config.siteUrl}${url}` : this.config.siteUrl;
    const fullImage = image ? `${this.config.siteUrl}${image}` : this.config.defaultImage;

    let structuredData: any = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      headline: title,
      description,
      url: fullUrl,
      image: fullImage,
      publisher: {
        '@type': 'Organization',
        name: this.config.siteName,
        url: this.config.siteUrl,
      },
    };

    if (type === 'article') {
      if (publishedTime) {
        structuredData.datePublished = publishedTime;
      }
      if (modifiedTime) {
        structuredData.dateModified = modifiedTime;
      }
      if (author) {
        structuredData.author = {
          '@type': 'Person',
          name: author,
        };
      }
    }

    this.addStructuredData(structuredData);
  }

  /**
   * Add structured data to page
   */
  private addStructuredData(data: any): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Setup canonical URLs
   */
  private setupCanonicalUrls(): void {
    // Remove existing canonical links
    const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
    existingCanonicals.forEach(link => link.remove());
  }

  /**
   * Setup performance monitoring for SEO
   */
  private setupPerformanceMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    this.monitorWebVitals();
  }

  /**
   * Monitor Web Vitals for SEO impact
   */
  private monitorWebVitals(): void {
    // Monitor LCP (Largest Contentful Paint)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      const lcp = lastEntry.startTime;

      if (lcp > 4000) { // Poor LCP
        this.trackSEOMetric('poor_lcp', lcp);
      } else if (lcp > 2500) { // Needs improvement
        this.trackSEOMetric('needs_improvement_lcp', lcp);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor FID (First Input Delay)
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fid = (entry as any).processingStart - entry.startTime;

        if (fid > 300) { // Poor FID
          this.trackSEOMetric('poor_fid', fid);
        } else if (fid > 100) { // Needs improvement
          this.trackSEOMetric('needs_improvement_fid', fid);
        }
      }
    }).observe({ entryTypes: ['first-input'] });

    // Monitor CLS (Cumulative Layout Shift)
    let clsValue = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
          clsValue += (entry as PerformanceEntry & { value: number }).value;
        }
      }
      
      if (clsValue > 0.25) { // Poor CLS
        this.trackSEOMetric('poor_cls', clsValue);
      } else if (clsValue > 0.1) { // Needs improvement
        this.trackSEOMetric('needs_improvement_cls', clsValue);
      }
    }).observe({ entryTypes: ['layout-shift'] });
  }

  /**
   * Setup accessibility monitoring for SEO
   */
  private setupAccessibilityMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor for missing alt text
    const images = document.querySelectorAll('img:not([alt])');
    if (images.length > 0) {
      this.trackSEOMetric('missing_alt_text', images.length);
    }

    // Monitor for missing heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
    let headingIssues = 0;

    for (let i = 1; i < headingLevels.length; i++) {
      if (headingLevels[i] > headingLevels[i - 1] + 1) {
        headingIssues++;
      }
    }

    if (headingIssues > 0) {
      this.trackSEOMetric('heading_structure_issues', headingIssues);
    }
  }

  /**
   * Track SEO metric
   */
  private trackSEOMetric(metric: string, value: number): void {
    // Send to analytics
    if ('gtag' in window) {
      (window as any).gtag('event', 'seo_metric', {
        metric_name: metric,
        metric_value: value,
        page_url: window.location.href,
      });
    }

    // Log in development
    if (process.env['NODE_ENV'] === 'development') {
      console.log(`SEO Metric: ${metric} = ${value}`);
    }
  }

  /**
   * Generate sitemap data
   */
  generateSitemapData(): Array<{
    url: string;
    lastModified: string;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
  }> {
    // This would typically be generated from your routing data
    return [
      {
        url: this.config.siteUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
    ];
  }

  /**
   * Generate robots.txt content
   */
  generateRobotsTxt(): string {
    const lines = [
      `User-agent: *`,
      `Allow: /`,
      `Disallow: /admin/`,
      `Disallow: /api/`,
      `Disallow: /_next/`,
      `Disallow: /static/`,
      ``,
      `Sitemap: ${this.config.siteUrl}/sitemap.xml`,
    ];

    return lines.join('\n');
  }

  /**
   * Get current page data
   */
  getCurrentPageData(): PageSEOData | null {
    return this.currentPageData;
  }

  /**
   * Get SEO recommendations
   */
  getRecommendations(): string[] {
    const recommendations: string[] = [];

    if (!this.currentPageData) {
      recommendations.push('Set page SEO data using setPageData()');
      return recommendations;
    }

    const { title, description, keywords } = this.currentPageData;

    if (title.length < 30) {
      recommendations.push('Title should be at least 30 characters long');
    }
    if (title.length > 60) {
      recommendations.push('Title should be no more than 60 characters long');
    }

    if (description.length < 120) {
      recommendations.push('Description should be at least 120 characters long');
    }
    if (description.length > 160) {
      recommendations.push('Description should be no more than 160 characters long');
    }

    if (keywords.length === 0) {
      recommendations.push('Add relevant keywords for better SEO');
    }

    return recommendations;
  }
}

export default SEOOptimizer;