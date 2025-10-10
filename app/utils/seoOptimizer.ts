'use client';
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
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
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

  constructor(config: SEOConfig) {
    this.config = config;
  }

  generatePageSEO(data: PageSEOData): any {
    const {
      title,
      description,
      keywords = [],
      canonicalUrl,
      ogImage,
      structuredData,
      image,
      url,
      type = 'website',
      publishedTime,
      modifiedTime,
      author,
      section,
      tags = [],
      noindex = false,
      nofollow = false
    } = data;

    const fullTitle = title.includes(this.config.siteName) ? title : `${title} | ${this.config.siteName}`;
    const canonical = canonicalUrl || `${this.config.siteUrl}${url || ''}`;
    const ogImageUrl = ogImage || image || this.config.defaultImage;

    return {
      title: fullTitle,
      description,
      keywords: keywords.join(', '),
      canonical,
      openGraph: {
        title: fullTitle,
        description,
        url: canonical,
        siteName: this.config.siteName,
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: title
          }
        ],
        type,
        ...(publishedTime && { publishedTime }),
        ...(modifiedTime && { modifiedTime }),
        ...(author && { authors: [author] }),
        ...(section && { section }),
        ...(tags.length > 0 && { tags })
      },
      twitter: {
        card: 'summary_large_image',
        title: fullTitle,
        description,
        image: ogImageUrl,
        ...(this.config.twitterHandle && { creator: `@${this.config.twitterHandle}` })
      },
      robots: {
        index: !noindex,
        follow: !nofollow,
        googleBot: {
          index: !noindex,
          follow: !nofollow,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1
        }
      },
      verification: {
        google: this.config.googleAnalyticsId,
        ...(this.config.facebookAppId && { facebook: this.config.facebookAppId })
      },
      structuredData: structuredData || this.generateStructuredData(data),
      other: {
        'msapplication-TileColor': '#1a1a1a',
        'theme-color': '#1a1a1a'
      }
    };
  }

  private generateStructuredData(data: PageSEOData): any {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': data.type === 'article' ? 'Article' : 'WebPage',
      name: data.title,
      description: data.description,
      url: data.url ? `${this.config.siteUrl}${data.url}` : this.config.siteUrl,
      ...(data.image && { image: data.image }),
      ...(data.author && { author: { '@type': 'Person', name: data.author } }),
      ...(data.publishedTime && { datePublished: data.publishedTime }),
      ...(data.modifiedTime && { dateModified: data.modifiedTime }),
      ...(data.section && { articleSection: data.section }),
      ...(data.tags && data.tags.length > 0 && { keywords: data.tags.join(', ') })
    };

    return baseStructuredData;
  }

  generateSitemap(pages: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }>): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${this.config.siteUrl}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    ${page.changefreq ? `<changefreq>${page.changefreq}</changefreq>` : ''}
    ${page.priority ? `<priority>${page.priority}</priority>` : ''}
  </url>`).join('')}
</urlset>`;

    return sitemap;
  }

  generateRobotsTxt(disallowPaths: string[] = []): string {
    const robots = `User-agent: *
Allow: /

${disallowPaths.map(path => `Disallow: ${path}`).join('\n')}

Sitemap: ${this.config.siteUrl}/sitemap.xml`;

    return robots;
  }

  trackPageView(page: string): void {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as any).gtag;
      gtag('config', this.config.googleAnalyticsId, {
        page_title: page,
        page_location: window.location.href
      });
    }
  }

  trackEvent(eventName: string, parameters: Record<string, any> = {}): void {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as any).gtag;
      gtag('event', eventName, parameters);
    }
  }
}

// Default configuration
const defaultSEOConfig: SEOConfig = {
  siteName: 'Zion Tech Group',
  siteUrl: 'https://ziontechgroup.com',
  defaultTitle: 'Zion Tech Group - AI & IT Solutions',
  defaultDescription: 'Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology.',
  defaultImage: 'https://ziontechgroup.com/og-image.jpg',
  twitterHandle: 'ziontechgroup',
  googleAnalyticsId: 'G-XXXXXXXXXX'
};

// Export singleton instance
export const seoOptimizer = new SEOOptimizer(defaultSEOConfig);

// Export class for custom instances
export default SEOOptimizer;
