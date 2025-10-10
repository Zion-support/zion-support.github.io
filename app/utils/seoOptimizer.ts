/**
 * Simple SEO Optimizer Utility
 * Provides basic SEO functionality
 */
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
}

export interface PageSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

class SEOOptimizer {
  private config: SEOConfig;

  constructor(config?: Partial<SEOConfig>) {
    this.config = {
      title: 'Zion Tech Group - AI & IT Solutions',
      description: 'Leading provider of AI-powered enterprise solutions and digital transformation services',
      keywords: ['AI solutions', 'enterprise AI', 'digital transformation', 'automation', 'cloud services'],
      canonicalUrl: 'https://ziontechgroup.com',
      ogImage: '/og-image.jpg',
      ogType: 'website',
      twitterCard: 'summary_large_image',
      ...config
    };
  }

  init(): void {
    // Initialize SEO optimizations
    if (typeof window !== 'undefined') {
      this.updateMetaTags();
    }
  }

  updateMetaTags(): void {
    if (typeof document === 'undefined') return;

    // Update title
    document.title = this.config.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', this.config.description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', this.config.keywords.join(', '));

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', this.config.canonicalUrl);
  }

  updatePageSEO(data: PageSEOData): void {
    this.config = { ...this.config, ...data };
    this.updateMetaTags();
  }

  getConfig(): SEOConfig {
    return { ...this.config };
  }
}

export const seoOptimizer = new SEOOptimizer();
export default seoOptimizer;