/**
 * Advanced SEO Enhancer
 * Comprehensive SEO utilities for React applications
 */

import { useEffect, useCallback } from 'react';

// SEO configuration interface
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  twitterSite: string;
  twitterCreator: string;
  structuredData: Record<string, unknown>;
  robots: string;
  language: string;
  locale: string;
  siteName: string;
  author: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

// Default SEO configuration
export const defaultSEOConfig: SEOConfig = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions and digital transformation services. Transform your business with cutting-edge technology.',
  keywords: ['AI', 'artificial intelligence', 'enterprise solutions', 'digital transformation', 'IT consulting', 'automation'],
  canonicalUrl: 'https://ziontechgroup.com',
  ogImage: 'https://ziontechgroup.com/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@ziontechgroup',
  twitterCreator: '@ziontechgroup',
  structuredData: {},
  robots: 'index, follow',
  language: 'en',
  locale: 'en_US',
  siteName: 'Zion Tech Group',
  author: 'Zion Tech Group',
};

// SEO Enhancer class
export class SEOEnhancer {
  private static instance: SEOEnhancer;
  private config: SEOConfig;

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = { ...defaultSEOConfig, ...config };
  }

  static getInstance(config?: Partial<SEOConfig>): SEOEnhancer {
    if (!SEOEnhancer.instance) {
      SEOEnhancer.instance = new SEOEnhancer(config);
    }
    return SEOEnhancer.instance;
  }

  // Update page title
  updateTitle(title: string) {
    if (typeof document !== 'undefined') {
      document.title = title;
    }
  }

  // Update meta description
  updateDescription(description: string) {
    this.updateMetaTag('description', description);
  }

  // Update meta keywords
  updateKeywords(keywords: string[]) {
    this.updateMetaTag('keywords', keywords.join(', '));
  }

  // Update canonical URL
  updateCanonicalUrl(url: string) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  // Update Open Graph tags
  updateOpenGraph(config: Partial<SEOConfig>) {
    const ogTags = [
      { property: 'og:title', content: config.title || this.config.title },
      { property: 'og:description', content: config.description || this.config.description },
      { property: 'og:image', content: config.ogImage || this.config.ogImage },
      { property: 'og:url', content: config.canonicalUrl || this.config.canonicalUrl },
      { property: 'og:type', content: config.ogType || this.config.ogType },
      { property: 'og:site_name', content: config.siteName || this.config.siteName },
      { property: 'og:locale', content: config.locale || this.config.locale },
    ];

    if (config.publishedTime) {
      ogTags.push({ property: 'og:published_time', content: config.publishedTime });
    }

    if (config.modifiedTime) {
      ogTags.push({ property: 'og:modified_time', content: config.modifiedTime });
    }

    if (config.section) {
      ogTags.push({ property: 'og:section', content: config.section });
    }

    if (config.tags) {
      ogTags.push({ property: 'og:tags', content: config.tags.join(', ') });
    }

    ogTags.forEach(({ property, content }) => {
      this.updateMetaTag(property, content);
    });
  }

  // Update Twitter Card tags
  updateTwitterCard(config: Partial<SEOConfig>) {
    const twitterTags = [
      { name: 'twitter:card', content: config.twitterCard || this.config.twitterCard },
      { name: 'twitter:site', content: config.twitterSite || this.config.twitterSite },
      { name: 'twitter:creator', content: config.twitterCreator || this.config.twitterCreator },
      { name: 'twitter:title', content: config.title || this.config.title },
      { name: 'twitter:description', content: config.description || this.config.description },
      { name: 'twitter:image', content: config.ogImage || this.config.ogImage },
    ];

    twitterTags.forEach(({ name, content }) => {
      this.updateMetaTag(name, content);
    });
  }

  // Update structured data
  updateStructuredData(data: Record<string, unknown>) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
  }

  // Update robots meta tag
  updateRobots(robots: string) {
    this.updateMetaTag('robots', robots);
  }

  // Update language
  updateLanguage(language: string) {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }

  // Update author
  updateAuthor(author: string) {
    this.updateMetaTag('author', author);
  }

  // Helper method to update meta tags
  private updateMetaTag(nameOrProperty: string, content: string) {
    if (typeof document === 'undefined') return;

    let meta = document.querySelector(`meta[name="${nameOrProperty}"], meta[property="${nameOrProperty}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      if (nameOrProperty.startsWith('og:') || nameOrProperty.startsWith('twitter:')) {
        meta.setAttribute('property', nameOrProperty);
      } else {
        meta.setAttribute('name', nameOrProperty);
      }
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  }

  // Generate sitemap
  generateSitemap(pages: Array<{ url: string; lastmod: string; changefreq: string; priority: string }>) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  }

  // Generate robots.txt
  generateRobotsTxt(disallowPaths: string[] = []) {
    const robots = `User-agent: *
Allow: /

${disallowPaths.map(path => `Disallow: ${path}`).join('\n')}

Sitemap: ${this.config.canonicalUrl}/sitemap.xml`;

    return robots;
  }

  // Initialize SEO
  initialize(config?: Partial<SEOConfig>) {
    if (typeof document === 'undefined') return;

    const finalConfig = { ...this.config, ...config };
    
    this.updateTitle(finalConfig.title);
    this.updateDescription(finalConfig.description);
    this.updateKeywords(finalConfig.keywords);
    this.updateCanonicalUrl(finalConfig.canonicalUrl);
    this.updateOpenGraph(finalConfig);
    this.updateTwitterCard(finalConfig);
    this.updateRobots(finalConfig.robots);
    this.updateLanguage(finalConfig.language);
    this.updateAuthor(finalConfig.author);

    if (Object.keys(finalConfig.structuredData).length > 0) {
      this.updateStructuredData(finalConfig.structuredData);
    }
  }

  // Get current SEO data
  getCurrentSEO() {
    if (typeof document === 'undefined') return {};

    return {
      title: document.title,
      description: this.getMetaContent('description'),
      keywords: this.getMetaContent('keywords'),
      canonical: this.getCanonicalUrl(),
      ogTitle: this.getMetaContent('og:title'),
      ogDescription: this.getMetaContent('og:description'),
      ogImage: this.getMetaContent('og:image'),
      twitterTitle: this.getMetaContent('twitter:title'),
      twitterDescription: this.getMetaContent('twitter:description'),
      twitterImage: this.getMetaContent('twitter:image'),
    };
  }

  private getMetaContent(nameOrProperty: string): string {
    const meta = document.querySelector(`meta[name="${nameOrProperty}"], meta[property="${nameOrProperty}"]`) as HTMLMetaElement;
    return meta?.content || '';
  }

  private getCanonicalUrl(): string {
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    return canonical?.href || '';
  }
}

// React hook for SEO
export const useSEO = (config?: Partial<SEOConfig>) => {
  const seoEnhancer = SEOEnhancer.getInstance(config);

  useEffect(() => {
    seoEnhancer.initialize(config);
  }, [config, seoEnhancer]);

  const updateSEO = useCallback((newConfig: Partial<SEOConfig>) => {
    seoEnhancer.initialize(newConfig);
  }, [seoEnhancer]);

  const getCurrentSEO = useCallback(() => {
    return seoEnhancer.getCurrentSEO();
  }, [seoEnhancer]);

  return { updateSEO, getCurrentSEO };
};

// Page-specific SEO hook
export const usePageSEO = (pageConfig: Partial<SEOConfig>) => {
  const { updateSEO } = useSEO();

  useEffect(() => {
    updateSEO(pageConfig);
  }, [pageConfig, updateSEO]);
};

// SEO utilities
export const seoUtils = {
  // Generate meta tags for a page
  generateMetaTags: (config: Partial<SEOConfig>) => {
    const tags: Array<{ name: string; content: string }> = [];

    if (config.title) {
      tags.push({ name: 'title', content: config.title });
    }

    if (config.description) {
      tags.push({ name: 'description', content: config.description });
    }

    if (config.keywords) {
      tags.push({ name: 'keywords', content: config.keywords.join(', ') });
    }

    if (config.author) {
      tags.push({ name: 'author', content: config.author });
    }

    if (config.robots) {
      tags.push({ name: 'robots', content: config.robots });
    }

    return tags;
  },

  // Generate structured data for organization
  generateOrganizationStructuredData: (config: Partial<SEOConfig>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: config.siteName || 'Zion Tech Group',
      description: config.description,
      url: config.canonicalUrl,
      logo: config.ogImage,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com',
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressLocality: 'Wilmington',
        addressRegion: 'DE',
      },
      sameAs: [
        'https://linkedin.com/company/ziontechgroup',
        'https://twitter.com/ziontechgroup',
      ],
    };
  },

  // Generate structured data for article
  generateArticleStructuredData: (config: Partial<SEOConfig>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: config.title,
      description: config.description,
      image: config.ogImage,
      author: {
        '@type': 'Organization',
        name: config.author || 'Zion Tech Group',
      },
      publisher: {
        '@type': 'Organization',
        name: config.siteName || 'Zion Tech Group',
        logo: {
          '@type': 'ImageObject',
          url: config.ogImage,
        },
      },
      datePublished: config.publishedTime,
      dateModified: config.modifiedTime,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': config.canonicalUrl,
      },
    };
  },

  // Generate breadcrumb structured data
  generateBreadcrumbStructuredData: (breadcrumbs: Array<{ name: string; url: string }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((breadcrumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: breadcrumb.name,
        item: breadcrumb.url,
      })),
    };
  },
};

export default SEOEnhancer;