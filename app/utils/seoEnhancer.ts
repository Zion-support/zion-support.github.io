// SEO Enhancer utility
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, any>;
}

export class SEOEnhancer {
  private static instance: SEOEnhancer;
  private defaultData: Partial<SEOData> = {};

  static getInstance(): SEOEnhancer {
    if (!SEOEnhancer.instance) {
      SEOEnhancer.instance = new SEOEnhancer();
    }
    return SEOEnhancer.instance;
  }

  setDefaultData(data: Partial<SEOData>): void {
    this.defaultData = { ...this.defaultData, ...data };
  }

  enhancePage(data: SEOData): void {
    if (typeof document === 'undefined') return;

    const enhancedData = { ...this.defaultData, ...data };

    // Update title
    if (enhancedData.title) {
      document.title = enhancedData.title;
    }

    // Update meta description
    this.updateMetaTag('description', enhancedData.description);

    // Update keywords
    if (enhancedData.keywords && enhancedData.keywords.length > 0) {
      this.updateMetaTag('keywords', enhancedData.keywords.join(', '));
    }

    // Update canonical URL
    if (enhancedData.canonicalUrl) {
      this.updateCanonicalUrl(enhancedData.canonicalUrl);
    }

    // Update Open Graph tags
    if (enhancedData.ogTitle) {
      this.updateMetaTag('og:title', enhancedData.ogTitle, 'property');
    }
    if (enhancedData.ogDescription) {
      this.updateMetaTag('og:description', enhancedData.ogDescription, 'property');
    }
    if (enhancedData.ogImage) {
      this.updateMetaTag('og:image', enhancedData.ogImage, 'property');
    }

    // Update Twitter Card tags
    if (enhancedData.twitterCard) {
      this.updateMetaTag('twitter:card', enhancedData.twitterCard);
    }
    if (enhancedData.twitterTitle) {
      this.updateMetaTag('twitter:title', enhancedData.twitterTitle);
    }
    if (enhancedData.twitterDescription) {
      this.updateMetaTag('twitter:description', enhancedData.twitterDescription);
    }
    if (enhancedData.twitterImage) {
      this.updateMetaTag('twitter:image', enhancedData.twitterImage);
    }

    // Add structured data
    if (enhancedData.structuredData) {
      this.addStructuredData(enhancedData.structuredData);
    }
  }

  private updateMetaTag(name: string, content: string, attribute: string = 'name'): void {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  }

  private updateCanonicalUrl(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    
    canonical.setAttribute('href', url);
  }

  private addStructuredData(data: Record<string, any>): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
}

export default SEOEnhancer;