// SEO utilities for the application

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export class SEOManager {
  private config: SEOConfig;

  constructor(config: SEOConfig) {
    this.config = config;
  }

  public updateConfig(newConfig: Partial<SEOConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.applyConfig();
  }

  public getConfig(): SEOConfig {
    return { ...this.config };
  }

  private applyConfig(): void {
    if (typeof document === 'undefined') return;

    // Update title
    document.title = this.config.title;

    // Update meta description
    this.updateMetaTag('description', this.config.description);

    // Update meta keywords
    this.updateMetaTag('keywords', this.config.keywords.join(', '));

    // Update canonical URL
    this.updateCanonicalUrl();

    // Update Open Graph tags
    this.updateOpenGraphTags();

    // Update Twitter Card tags
    this.updateTwitterTags();

    // Update robots meta
    if (this.config.robots) {
      this.updateMetaTag('robots', this.config.robots);
    }

    // Update author
    if (this.config.author) {
      this.updateMetaTag('author', this.config.author);
    }

    // Update published time
    if (this.config.publishedTime) {
      this.updateMetaTag('article:published_time', this.config.publishedTime);
    }

    // Update modified time
    if (this.config.modifiedTime) {
      this.updateMetaTag('article:modified_time', this.config.modifiedTime);
    }

    // Update section
    if (this.config.section) {
      this.updateMetaTag('article:section', this.config.section);
    }

    // Update tags
    if (this.config.tags) {
      this.config.tags.forEach(tag => {
        this.addMetaTag('article:tag', tag);
      });
    }
  }

  private updateMetaTag(name: string, content: string): void {
    if (typeof document === 'undefined') return;

    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  private updateCanonicalUrl(): void {
    if (typeof document === 'undefined' || !this.config.canonicalUrl) return;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = this.config.canonicalUrl;
  }

  private updateOpenGraphTags(): void {
    if (typeof document === 'undefined') return;

    const ogTags = [
      { property: 'og:title', content: this.config.ogTitle || this.config.title },
      { property: 'og:description', content: this.config.ogDescription || this.config.description },
      { property: 'og:type', content: this.config.ogType || 'website' },
      { property: 'og:url', content: this.config.canonicalUrl || window.location.href },
    ];

    if (this.config.ogImage) {
      ogTags.push({ property: 'og:image', content: this.config.ogImage });
    }

    ogTags.forEach(tag => {
      this.updateMetaTagByProperty(tag.property, tag.content);
    });
  }

  private updateTwitterTags(): void {
    if (typeof document === 'undefined') return;

    const twitterTags = [
      { name: 'twitter:card', content: this.config.twitterCard || 'summary_large_image' },
      { name: 'twitter:title', content: this.config.twitterTitle || this.config.title },
      { name: 'twitter:description', content: this.config.twitterDescription || this.config.description },
    ];

    if (this.config.twitterImage) {
      twitterTags.push({ name: 'twitter:image', content: this.config.twitterImage });
    }

    twitterTags.forEach(tag => {
      this.updateMetaTag(tag.name, tag.content);
    });
  }

  private updateMetaTagByProperty(property: string, content: string): void {
    if (typeof document === 'undefined') return;

    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  private addMetaTag(name: string, content: string): void {
    if (typeof document === 'undefined') return;

    const meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
  }
}

// Utility functions
export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
  const cleanContent = content.replace(/<[^>]*>/g, '').trim();
  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }
  return cleanContent.substring(0, maxLength - 3) + '...';
};

export const generateStructuredData = (data: {
  name: string,
  description: string,
  url: string,
  logo?: string;
  address?: {
    streetAddress: string,
    addressLocality: string,
    addressRegion: string,
    postalCode: string,
    addressCountry: string,
  };
  contactPoint?: {
    telephone: string,
    contactType: string,
  };
}): string => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data.name,
    "description": data.description,
    "url": data.url,
    ...(data.logo && { "logo": data.logo }),
    ...(data.address && { "address": data.address }),
    ...(data.contactPoint && { "contactPoint": data.contactPoint })
  };
  
  return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
};

export const generateSitemap = (pages: Array<{
  url: string,
  lastModified: string,
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number,
}>): string => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return sitemap;
};

export const generateRobotsTxt = (sitemapUrl: string, allowAll: boolean = true): string => {
  if (allowAll) {
    return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`;
  } else {
    return `User-agent: *
Disallow: /

Sitemap: ${sitemapUrl}`;
  }
};

export const optimizeImages = (images: Array<{
  src: string,
  alt: string,
  width?: number;
  height?: number;
}>): Array<{
  src: string,
  alt: string,
  width?: number;
  height?: number;
  loading: 'lazy' | 'eager';
  decoding: 'async' | 'sync' | 'auto';
}> => {
  return images.map((image, index) => ({
    ...image,
    loading: index < 3 ? 'eager' as const : 'lazy' as const,
    decoding: 'async' as const
  }));
};

export const generateBreadcrumbs = (items: Array<{
  name: string,
  url: string,
}>): string => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
  
  return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
};

export const validateSEO = (data: SEOConfig): string[] => {
  const errors: string[] = [];
  
  if (data.title.length < 30 || data.title.length > 60) {
    errors.push('Title should be between 30-60 characters');
  }
  
  if (data.description.length < 120 || data.description.length > 160) {
    errors.push('Description should be between 120-160 characters');
  }
  
  if (data.keywords.length === 0) {
    errors.push('Keywords should not be empty');
  }
  
  if (data.canonicalUrl && !data.canonicalUrl.startsWith('http')) {
    errors.push('Canonical URL should be a valid URL');
  }
  
  return errors;
};

export const generatePageSpeedInsights = (url: string): Promise<{
  performance: number,
  accessibility: number,
  bestPractices: number,
  seo: number,
}> => {
  // This would typically call the PageSpeed Insights API
  return Promise.resolve({
    performance: 85,
    accessibility: 90,
    bestPractices: 88,
    seo: 92
  });
};

export const generateKeywords = (content: string, maxKeywords: number = 10): string[] => {
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);

  const wordCount: { [key: string]: number } = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const getCanonicalUrl = (path: string, baseUrl: string = ''): string => {
  if (isValidUrl(path)) {
    return path;
  }
  
  const base = baseUrl || (typeof window !== 'undefined' ? window.location.origin : '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};

export const createStructuredData = (data: any): string => {
  return JSON.stringify({
    '@context': 'https://schema.org',
    ...data,
  });
};

export const addStructuredData = (data: any): void => {
  if (typeof document === 'undefined') return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = createStructuredData(data);
  document.head.appendChild(script);
};