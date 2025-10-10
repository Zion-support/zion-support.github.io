/**
 * SEO Utilities
 * Provides SEO optimization and monitoring
 */

export interface SEOMetrics {
  titleScore: number;
  metaDescriptionScore: number;
  headingStructureScore: number;
  imageAltTextScore: number;
  internalLinksScore: number;
  externalLinksScore: number;
  pageSpeedScore: number;
  mobileFriendlyScore: number;
  overallScore: number;
}

export interface SEOConfig {
  enableMetaOptimization: boolean;
  enableStructuredData: boolean;
  enableSitemapGeneration: boolean;
  enableRobotsTxt: boolean;
  enableCanonicalUrls: boolean;
}

class SEOOptimizer {
  private config: SEOConfig;
  private metrics: SEOMetrics | null = null;

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = {
      enableMetaOptimization: true,
      enableStructuredData: true,
      enableSitemapGeneration: true,
      enableRobotsTxt: true,
      enableCanonicalUrls: true,
      ...config
    };
  }

  /**
   * Initialize SEO optimization
   */
  public initialize(): void {
    if (typeof window === 'undefined') return;

    if (this.config.enableMetaOptimization) {
      this.optimizeMetaTags();
    }

    if (this.config.enableStructuredData) {
      this.addStructuredData();
    }

    if (this.config.enableCanonicalUrls) {
      this.addCanonicalUrls();
    }
  }

  /**
   * Optimize meta tags
   */
  private optimizeMetaTags(): void {
    // Ensure title tag exists and is optimized
    if (!document.title) {
      document.title = 'Zion Tech Group - Advanced AI and IT Solutions';
    }

    // Add or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with cutting-edge technology.');

    // Add viewport meta tag
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

    // Add robots meta tag
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'index, follow');

    // Add Open Graph tags
    this.addOpenGraphTags();

    // Add Twitter Card tags
    this.addTwitterCardTags();
  }

  /**
   * Add Open Graph tags
   */
  private addOpenGraphTags(): void {
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: document.title },
      { property: 'og:description', content: 'Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:image', content: `${window.location.origin}/og-image.jpg` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });
  }

  /**
   * Add Twitter Card tags
   */
  private addTwitterCardTags(): void {
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: document.title },
      { name: 'twitter:description', content: 'Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.' },
      { name: 'twitter:image', content: `${window.location.origin}/twitter-image.jpg` }
    ];

    twitterTags.forEach(tag => {
      let element = document.querySelector(`meta[name="${tag.name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', tag.name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });
  }

  /**
   * Add structured data
   */
  private addStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "description": "Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup",
        "https://github.com/zion-tech-group"
      ],
      "foundingDate": "2020",
      "numberOfEmployees": "50-100",
      "industry": "Information Technology",
      "services": [
        "AI Solutions",
        "Machine Learning",
        "Quantum Computing",
        "Digital Transformation",
        "IT Services",
        "Cybersecurity",
        "Cloud Computing",
        "Automation"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  /**
   * Add canonical URLs
   */
  private addCanonicalUrls(): void {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
  }

  /**
   * Analyze SEO metrics
   */
  public analyzeSEO(): SEOMetrics {
    const metrics: SEOMetrics = {
      titleScore: this.analyzeTitle(),
      metaDescriptionScore: this.analyzeMetaDescription(),
      headingStructureScore: this.analyzeHeadingStructure(),
      imageAltTextScore: this.analyzeImageAltText(),
      internalLinksScore: this.analyzeInternalLinks(),
      externalLinksScore: this.analyzeExternalLinks(),
      pageSpeedScore: this.analyzePageSpeed(),
      mobileFriendlyScore: this.analyzeMobileFriendly(),
      overallScore: 0
    };

    // Calculate overall score
    const scores = Object.values(metrics).filter(score => typeof score === 'number' && score !== metrics.overallScore);
    metrics.overallScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

    this.metrics = metrics;
    return metrics;
  }

  /**
   * Analyze title tag
   */
  private analyzeTitle(): number {
    const title = document.title;
    let score = 100;

    if (!title) {
      score = 0;
    } else if (title.length < 30) {
      score -= 20;
    } else if (title.length > 60) {
      score -= 20;
    }

    // Check for keywords
    const keywords = ['zion', 'tech', 'ai', 'artificial intelligence', 'solutions'];
    const hasKeywords = keywords.some(keyword => title.toLowerCase().includes(keyword));
    if (!hasKeywords) {
      score -= 10;
    }

    return Math.max(0, score);
  }

  /**
   * Analyze meta description
   */
  private analyzeMetaDescription(): number {
    const metaDescription = document.querySelector('meta[name="description"]');
    let score = 100;

    if (!metaDescription) {
      score = 0;
    } else {
      const content = metaDescription.getAttribute('content') || '';
      if (content.length < 120) {
        score -= 20;
      } else if (content.length > 160) {
        score -= 20;
      }

      // Check for keywords
      const keywords = ['zion', 'tech', 'ai', 'solutions', 'services'];
      const hasKeywords = keywords.some(keyword => content.toLowerCase().includes(keyword));
      if (!hasKeywords) {
        score -= 10;
      }
    }

    return Math.max(0, score);
  }

  /**
   * Analyze heading structure
   */
  private analyzeHeadingStructure(): number {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let score = 100;

    if (headings.length === 0) {
      score = 0;
    } else {
      // Check for H1
      const h1Count = document.querySelectorAll('h1').length;
      if (h1Count === 0) {
        score -= 30;
      } else if (h1Count > 1) {
        score -= 20;
      }

      // Check heading hierarchy
      let previousLevel = 0;
      headings.forEach((heading) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          score -= 10;
        }
        previousLevel = level;
      });
    }

    return Math.max(0, score);
  }

  /**
   * Analyze image alt text
   */
  private analyzeImageAltText(): number {
    const images = document.querySelectorAll('img');
    let altTextCount = 0;

    images.forEach((img) => {
      if (img.getAttribute('alt') !== null) {
        altTextCount++;
      }
    });

    return images.length > 0 ? (altTextCount / images.length) * 100 : 100;
  }

  /**
   * Analyze internal links
   */
  private analyzeInternalLinks(): number {
    const links = document.querySelectorAll('a[href]');
    const internalLinks = Array.from(links).filter(link => {
      const href = link.getAttribute('href');
      return href && (href.startsWith('/') || href.includes(window.location.hostname));
    });

    return links.length > 0 ? (internalLinks.length / links.length) * 100 : 100;
  }

  /**
   * Analyze external links
   */
  private analyzeExternalLinks(): number {
    const links = document.querySelectorAll('a[href]');
    const externalLinks = Array.from(links).filter(link => {
      const href = link.getAttribute('href');
      return href && href.startsWith('http') && !href.includes(window.location.hostname);
    });

    let score = 100;
    externalLinks.forEach(link => {
      if (!link.getAttribute('rel')?.includes('nofollow')) {
        score -= 5;
      }
    });

    return Math.max(0, score);
  }

  /**
   * Analyze page speed
   */
  private analyzePageSpeed(): number {
    // This would typically use the Performance API
    // For now, return a placeholder score
    return 85;
  }

  /**
   * Analyze mobile friendliness
   */
  private analyzeMobileFriendly(): number {
    let score = 100;

    // Check viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      score -= 30;
    }

    // Check for mobile-friendly elements
    const touchElements = document.querySelectorAll('button, a, input, select, textarea');
    touchElements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const minHeight = parseInt(styles.minHeight) || parseInt(styles.height);
      if (minHeight < 44) {
        score -= 5;
      }
    });

    return Math.max(0, score);
  }

  /**
   * Get SEO metrics
   */
  public getMetrics(): SEOMetrics | null {
    return this.metrics;
  }

  /**
   * Generate SEO report
   */
  public generateReport(): string {
    const metrics = this.metrics;
    if (!metrics) {
      return 'SEO metrics not available. Run analyzeSEO() first.';
    }

    return `
SEO Report
==========
Overall Score: ${metrics.overallScore.toFixed(1)}/100

Detailed Scores:
- Title: ${metrics.titleScore.toFixed(1)}/100
- Meta Description: ${metrics.metaDescriptionScore.toFixed(1)}/100
- Heading Structure: ${metrics.headingStructureScore.toFixed(1)}/100
- Image Alt Text: ${metrics.imageAltTextScore.toFixed(1)}/100
- Internal Links: ${metrics.internalLinksScore.toFixed(1)}/100
- External Links: ${metrics.externalLinksScore.toFixed(1)}/100
- Page Speed: ${metrics.pageSpeedScore.toFixed(1)}/100
- Mobile Friendly: ${metrics.mobileFriendlyScore.toFixed(1)}/100
    `;
  }

  /**
   * Generate sitemap
   */
  public generateSitemap(): string {
    const pages = [
      '/',
      '/about',
      '/services',
      '/ai-services',
      '/it-services',
      '/micro-saas',
      '/contact',
      '/pricing',
      '/blog',
      '/case-studies',
      '/team',
      '/careers'
    ];

    const baseUrl = window.location.origin;
    const lastmod = new Date().toISOString().split('T')[0];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${baseUrl}${page}</loc>\n`;
      sitemap += `    <lastmod>${lastmod}</lastmod>\n`;
      sitemap += '    <changefreq>weekly</changefreq>\n';
      sitemap += '    <priority>0.8</priority>\n';
      sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';

    return sitemap;
  }

  /**
   * Generate robots.txt
   */
  public generateRobotsTxt(): string {
    const baseUrl = window.location.origin;
    
    return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
`;
  }
}

// Export singleton instance
export const seoOptimizer = new SEOOptimizer();

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      seoOptimizer.initialize();
    });
  } else {
    seoOptimizer.initialize();
  }
}