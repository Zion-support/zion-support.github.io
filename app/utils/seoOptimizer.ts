/**
 * SEO Optimizer Utility
 * Manages SEO metadata, structured data, and optimization
 */

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  canonicalUrl?: string;
  image?: string;
  locale?: string;
  siteName?: string;
  type?: string;
  twitterHandle?: string;
}

interface PageSEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

class SEOOptimizer {
  private config: SEOConfig;
  private currentPageData: PageSEOData | null = null;

  constructor(config: SEOConfig) {
    this.config = config;
  }

  public init(pageData?: PageSEOData): void {
    this.currentPageData = pageData || null;
    this.setTitle();
    this.setMetaTags();
    this.setOpenGraphTags();
    this.setTwitterCardTags();
    this.setCanonicalUrl();
  }

  public updatePageData(pageData: PageSEOData): void {
    this.currentPageData = pageData;
    this.init(pageData);
  }

  private setTitle(): void {
    if (typeof document === 'undefined') return;
    const title = this.currentPageData?.title || this.config.title;
    document.title = title;
  }

  private setMetaTags(): void {
    if (typeof document === 'undefined') return;
    this.setMetaTag('description', this.currentPageData?.description || this.config.description);
    this.setMetaTag('keywords', (this.currentPageData?.keywords || this.config.keywords).join(', '));
    this.setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
  }

  private setOpenGraphTags(): void {
    if (typeof document === 'undefined') return;
    this.setMetaTag('og:title', this.currentPageData?.title || this.config.title, 'property');
    this.setMetaTag('og:description', this.currentPageData?.description || this.config.description, 'property');
    this.setMetaTag('og:type', this.currentPageData?.type || this.config.type || 'website', 'property');
    this.setMetaTag('og:url', this.currentPageData?.url || this.config.url, 'property');
    if (this.currentPageData?.image || this.config.image) {
      this.setMetaTag('og:image', this.currentPageData?.image || this.config.image || '', 'property');
    }
  }

  private setTwitterCardTags(): void {
    if (typeof document === 'undefined') return;
    this.setMetaTag('twitter:card', 'summary_large_image');
    this.setMetaTag('twitter:title', this.currentPageData?.title || this.config.title);
    this.setMetaTag('twitter:description', this.currentPageData?.description || this.config.description);
    if (this.currentPageData?.image || this.config.image) {
      this.setMetaTag('twitter:image', this.currentPageData?.image || this.config.image || '');
    }
  }

  private setCanonicalUrl(): void {
    if (typeof document === 'undefined') return;
    const canonicalUrl = this.currentPageData?.canonicalUrl || this.config.canonicalUrl || this.config.url;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    (link as HTMLLinkElement).href = canonicalUrl;
  }

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

  public generateStructuredData(type: string = 'Organization'): object {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      name: this.config.siteName || this.config.title,
      description: this.config.description,
      url: this.config.url,
    };
    return baseData;
  }

  public injectStructuredData(data: object): void {
    if (typeof document === 'undefined') return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  public getRobotsContent(index: boolean = true, follow: boolean = true): string {
    const indexValue = index ? 'index' : 'noindex';
    const followValue = follow ? 'follow' : 'nofollow';
    return `${indexValue}, ${followValue}`;
  }

  public setRobots(index: boolean = true, follow: boolean = true): void {
    this.setMetaTag('robots', this.getRobotsContent(index, follow));
  }

  public getConfig(): SEOConfig {
    return this.config;
  }

  public updateConfig(config: Partial<SEOConfig>): void {
    this.config = { ...this.config, ...config };
  }

  public getPageData(): PageSEOData | null {
    return this.currentPageData;
  }
}

const defaultConfig: SEOConfig = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.',
  keywords: ['AI solutions', 'enterprise AI', 'quantum computing', 'autonomous systems'],
  url: 'https://ziontechgroup.com',
  canonicalUrl: 'https://ziontechgroup.com',
  siteName: 'Zion Tech Group',
  locale: 'en_US',
  type: 'website',
  twitterHandle: '@ziontechgroup',
};

export const seoOptimizer = new SEOOptimizer(defaultConfig);
export default seoOptimizer;
