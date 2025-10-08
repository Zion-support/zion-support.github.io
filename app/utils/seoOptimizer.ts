/**
 * SEO Optimization Utility for Zion Tech Group Website
 * Provides comprehensive SEO enhancements and optimizations
 */

export interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle: string;
  facebookAppId?: string;
}

export class SEOOptimizer {
  private config: SEOConfig;

  constructor(config: SEOConfig) {
    this.config = config;
  }

  /**
   * Generate meta tags for a page
   */
  generateMetaTags(pageData: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    keywords?: string[];
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  }) {
    const {
      title = this.config.defaultTitle,
      description = this.config.defaultDescription,
      image = this.config.defaultImage,
      url = this.config.siteUrl,
      type = 'website',
      keywords = [],
      author = this.config.siteName,
      publishedTime,
      modifiedTime,
      section,
      tags = [],
    } = pageData;

    const fullTitle = title.includes(this.config.siteName) 
      ? title 
      : `${title} | ${this.config.siteName}`;

    const fullUrl = url.startsWith('http') ? url : `${this.config.siteUrl}${url}`;
    const fullImage = image.startsWith('http') ? image : `${this.config.siteUrl}${image}`;

    return {
      // Basic meta tags
      title: fullTitle,
      description,
      keywords: keywords.join(', '),
      author,
      
      // Open Graph tags
      'og:title': fullTitle,
      'og:description': description,
      'og:image': fullImage,
      'og:url': fullUrl,
      'og:type': type,
      'og:site_name': this.config.siteName,
      
      // Twitter Card tags
      'twitter:card': 'summary_large_image',
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:image': fullImage,
      'twitter:site': this.config.twitterHandle,
      'twitter:creator': this.config.twitterHandle,
      
      // Additional meta tags
      'robots': 'index, follow',
      'googlebot': 'index, follow',
      'canonical': fullUrl,
      
      // Article specific tags
      ...(type === 'article' && {
        'article:author': author,
        'article:section': section,
        'article:tag': tags.join(','),
        ...(publishedTime && { 'article:published_time': publishedTime }),
        ...(modifiedTime && { 'article:modified_time': modifiedTime }),
      }),
    };
  }

  /**
   * Generate structured data for a page
   */
  generateStructuredData(pageData: {
    type: 'Organization' | 'WebSite' | 'Article' | 'Service' | 'Product';
    data: any;
  }) {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': pageData.type,
    };

    return {
      ...baseStructuredData,
      ...pageData.data,
    };
  }

  /**
   * Generate breadcrumb structured data
   */
  generateBreadcrumbStructuredData(breadcrumbs: Array<{
    name: string;
    url: string;
  }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url.startsWith('http') ? crumb.url : `${this.config.siteUrl}${crumb.url}`,
      })),
    };
  }

  /**
   * Generate FAQ structured data
   */
  generateFAQStructuredData(faqs: Array<{
    question: string;
    answer: string;
  }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  /**
   * Generate local business structured data
   */
  generateLocalBusinessStructuredData(businessData: {
    name: string;
    description: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    telephone: string;
    email: string;
    url: string;
    openingHours: string[];
    priceRange: string;
    serviceArea: {
      '@type': string;
      geoMidpoint: {
        '@type': string;
        latitude: number;
        longitude: number;
      };
      geoRadius: number;
    };
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      ...businessData,
    };
  }

  /**
   * Optimize images for SEO
   */
  optimizeImageSEO(imageData: {
    src: string;
    alt: string;
    title?: string;
    width?: number;
    height?: number;
    loading?: 'lazy' | 'eager';
  }) {
    return {
      src: imageData.src,
      alt: imageData.alt,
      title: imageData.title || imageData.alt,
      width: imageData.width,
      height: imageData.height,
      loading: imageData.loading || 'lazy',
      'data-src': imageData.src, // For lazy loading
    };
  }

  /**
   * Generate sitemap data
   */
  generateSitemapData(pages: Array<{
    url: string;
    lastModified: string;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
  }>) {
    return {
      urlset: {
        '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
        url: pages.map(page => ({
          loc: page.url.startsWith('http') ? page.url : `${this.config.siteUrl}${page.url}`,
          lastmod: page.lastModified,
          changefreq: page.changeFrequency,
          priority: page.priority,
        })),
      },
    };
  }

  /**
   * Validate SEO requirements
   */
  validateSEO(pageData: {
    title?: string;
    description?: string;
    headings?: string[];
    images?: Array<{ alt: string; src: string }>;
  }) {
    const issues: string[] = [];
    const warnings: string[] = [];

    // Title validation
    if (!pageData.title) {
      issues.push('Missing page title');
    } else if (pageData.title.length < 30) {
      warnings.push('Title is too short (recommended: 30-60 characters)');
    } else if (pageData.title.length > 60) {
      warnings.push('Title is too long (recommended: 30-60 characters)');
    }

    // Description validation
    if (!pageData.description) {
      issues.push('Missing meta description');
    } else if (pageData.description.length < 120) {
      warnings.push('Description is too short (recommended: 120-160 characters)');
    } else if (pageData.description.length > 160) {
      warnings.push('Description is too long (recommended: 120-160 characters)');
    }

    // Heading validation
    if (pageData.headings) {
      const h1Count = pageData.headings.filter(h => h.startsWith('h1')).length;
      if (h1Count === 0) {
        issues.push('Missing H1 heading');
      } else if (h1Count > 1) {
        warnings.push('Multiple H1 headings found (recommended: 1 per page)');
      }
    }

    // Image validation
    if (pageData.images) {
      pageData.images.forEach((img, index) => {
        if (!img.alt) {
          issues.push(`Image ${index + 1} missing alt text`);
        }
        if (!img.src) {
          issues.push(`Image ${index + 1} missing src`);
        }
      });
    }

    return {
      isValid: issues.length === 0,
      issues,
      warnings,
      score: Math.max(0, 100 - (issues.length * 20) - (warnings.length * 5)),
    };
  }
}

// Default SEO configuration
export const defaultSEOConfig: SEOConfig = {
  siteName: 'Zion Tech Group',
  siteUrl: 'https://ziontechgroup.com',
  defaultTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  defaultDescription: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  defaultImage: 'https://ziontechgroup.com/og-image.jpg',
  twitterHandle: '@ziontechgroup',
};

// Default SEO optimizer instance
export const seoOptimizer = new SEOOptimizer(defaultSEOConfig);