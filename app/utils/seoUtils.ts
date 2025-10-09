/**
 * SEO Utilities
 * Provides SEO optimization and meta tag management
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  twitterCard: string;
  structuredData: Record<string, any>;
}

class SEOOptimizer {
  private config: Partial<SEOConfig> = {};

  init(): void {
    if (typeof window === 'undefined') return;

    // Initialize SEO optimizations
    this.setupMetaTags();
    this.setupStructuredData();
    this.setupCanonicalUrl();
  }

  private setupMetaTags(): void {
    // Set default meta tags if not already present
    this.setMetaTag('description', this.config.description || 'Leading provider of AI-powered enterprise solutions');
    this.setMetaTag('keywords', this.config.keywords?.join(', ') || 'AI solutions, quantum computing, autonomous systems');
    this.setMetaTag('author', 'Zion Tech Group');
    this.setMetaTag('robots', 'index, follow');
  }

  private setupStructuredData(): void {
    if (this.config.structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(this.config.structuredData);
      document.head.appendChild(script);
    }
  }

  private setupCanonicalUrl(): void {
    if (this.config.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', this.config.canonicalUrl);
    }
  }

  private setMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  setConfig(config: Partial<SEOConfig>): void {
    this.config = { ...this.config, ...config };
    this.init();
  }

  updateTitle(title: string): void {
    document.title = title;
    this.setMetaTag('og:title', title);
    this.setMetaTag('twitter:title', title);
  }

  updateDescription(description: string): void {
    this.setMetaTag('description', description);
    this.setMetaTag('og:description', description);
    this.setMetaTag('twitter:description', description);
  }

  cleanup(): void {
    // Cleanup any SEO-related elements
  }
}

export const seoOptimizer = new SEOOptimizer();