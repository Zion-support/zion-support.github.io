/**
 * SEO Optimizer
 * Comprehensive SEO analysis and optimization utilities
 */

export interface SEOReport {
  score: number;
  issues: SEOIssue[];
  recommendations: SEORecommendation[];
  meta: MetaAnalysis;
}

export interface SEOIssue {
  severity: 'critical' | 'warning' | 'info';
  category: string;
  message: string;
  element?: string;
}

export interface SEORecommendation {
  category: string;
  suggestion: string;
  impact: 'high' | 'medium' | 'low';
}

export interface MetaAnalysis {
  title: string;
  titleLength: number;
  description: string;
  descriptionLength: number;
  keywords: string[];
  canonical: string | null;
  robots: string | null;
  og: Record<string, string>;
  twitter: Record<string, string>;
}

class SEOOptimizerService {
  private readonly TITLE_MIN = 30;
  private readonly TITLE_MAX = 60;
  private readonly DESC_MIN = 120;
  private readonly DESC_MAX = 160;

  // Analyze page SEO
  public analyzePage(): SEOReport {
    const issues: SEOIssue[] = [];
    const recommendations: SEORecommendation[] = [];
    
    const meta = this.analyzeMeta();
    
    // Title analysis
    if (!meta.title) {
      issues.push({
        severity: 'critical',
        category: 'Title',
        message: 'Missing page title',
      });
    } else if (meta.titleLength < this.TITLE_MIN) {
      issues.push({
        severity: 'warning',
        category: 'Title',
        message: `Title too short (${meta.titleLength} characters). Recommended: ${this.TITLE_MIN}-${this.TITLE_MAX}`,
      });
    } else if (meta.titleLength > this.TITLE_MAX) {
      issues.push({
        severity: 'warning',
        category: 'Title',
        message: `Title too long (${meta.titleLength} characters). Recommended: ${this.TITLE_MIN}-${this.TITLE_MAX}`,
      });
    }

    // Description analysis
    if (!meta.description) {
      issues.push({
        severity: 'critical',
        category: 'Description',
        message: 'Missing meta description',
      });
    } else if (meta.descriptionLength < this.DESC_MIN) {
      issues.push({
        severity: 'warning',
        category: 'Description',
        message: `Description too short (${meta.descriptionLength} characters). Recommended: ${this.DESC_MIN}-${this.DESC_MAX}`,
      });
    } else if (meta.descriptionLength > this.DESC_MAX) {
      issues.push({
        severity: 'warning',
        category: 'Description',
        message: `Description too long (${meta.descriptionLength} characters). Recommended: ${this.DESC_MIN}-${this.DESC_MAX}`,
      });
    }

    // Canonical URL
    if (!meta.canonical) {
      issues.push({
        severity: 'warning',
        category: 'Canonical',
        message: 'Missing canonical URL',
      });
    }

    // Open Graph
    if (!meta.og['og:title']) {
      recommendations.push({
        category: 'Open Graph',
        suggestion: 'Add Open Graph title for better social media sharing',
        impact: 'medium',
      });
    }

    if (!meta.og['og:description']) {
      recommendations.push({
        category: 'Open Graph',
        suggestion: 'Add Open Graph description for better social media sharing',
        impact: 'medium',
      });
    }

    if (!meta.og['og:image']) {
      recommendations.push({
        category: 'Open Graph',
        suggestion: 'Add Open Graph image for social media previews',
        impact: 'high',
      });
    }

    // Twitter Card
    if (!meta.twitter['twitter:card']) {
      recommendations.push({
        category: 'Twitter',
        suggestion: 'Add Twitter Card markup for better Twitter sharing',
        impact: 'medium',
      });
    }

    // Heading structure
    const headingIssues = this.analyzeHeadings();
    issues.push(...headingIssues);

    // Content analysis
    const contentIssues = this.analyzeContent();
    issues.push(...contentIssues);

    // Links analysis
    const linkIssues = this.analyzeLinks();
    issues.push(...linkIssues);

    // Images analysis
    const imageIssues = this.analyzeImages();
    issues.push(...imageIssues);

    // Structured data
    const structuredDataIssues = this.analyzeStructuredData();
    issues.push(...structuredDataIssues);

    // Calculate score
    const score = this.calculateScore(issues);

    return {
      score,
      issues,
      recommendations,
      meta,
    };
  }

  private analyzeMeta(): MetaAnalysis {
    const title = document.title || '';
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const keywords = (document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '')
      .split(',')
      .map(k => k.trim())
      .filter(k => k);
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || null;
    const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content') || null;

    const og: Record<string, string> = {};
    document.querySelectorAll('meta[property^="og:"]').forEach((meta) => {
      const property = meta.getAttribute('property');
      const content = meta.getAttribute('content');
      if (property && content) {
        og[property] = content;
      }
    });

    const twitter: Record<string, string> = {};
    document.querySelectorAll('meta[name^="twitter:"]').forEach((meta) => {
      const name = meta.getAttribute('name');
      const content = meta.getAttribute('content');
      if (name && content) {
        twitter[name] = content;
      }
    });

    return {
      title,
      titleLength: title.length,
      description,
      descriptionLength: description.length,
      keywords,
      canonical,
      robots,
      og,
      twitter,
    };
  }

  private analyzeHeadings(): SEOIssue[] {
    const issues: SEOIssue[] = [];
    const h1s = document.querySelectorAll('h1');

    if (h1s.length === 0) {
      issues.push({
        severity: 'critical',
        category: 'Headings',
        message: 'Missing H1 heading',
      });
    } else if (h1s.length > 1) {
      issues.push({
        severity: 'warning',
        category: 'Headings',
        message: `Multiple H1 headings found (${h1s.length}). Use only one H1 per page`,
      });
    }

    // Check for empty headings
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading) => {
      if (!heading.textContent?.trim()) {
        issues.push({
          severity: 'warning',
          category: 'Headings',
          message: `Empty ${heading.tagName} heading found`,
          element: heading.tagName,
        });
      }
    });

    return issues;
  }

  private analyzeContent(): SEOIssue[] {
    const issues: SEOIssue[] = [];
    const bodyText = document.body.textContent || '';
    const wordCount = bodyText.trim().split(/\s+/).length;

    if (wordCount < 300) {
      issues.push({
        severity: 'warning',
        category: 'Content',
        message: `Content is thin (${wordCount} words). Aim for at least 300 words for better SEO`,
      });
    }

    // Check for duplicate content
    const paragraphs = Array.from(document.querySelectorAll('p')).map(p => p.textContent?.trim());
    const uniqueParagraphs = new Set(paragraphs);
    if (paragraphs.length > uniqueParagraphs.size) {
      issues.push({
        severity: 'info',
        category: 'Content',
        message: 'Duplicate content detected in paragraphs',
      });
    }

    return issues;
  }

  private analyzeLinks(): SEOIssue[] {
    const issues: SEOIssue[] = [];
    const links = document.querySelectorAll('a[href]');
    
    let internalLinks = 0;
    let externalLinks = 0;
    let brokenLinks = 0;

    links.forEach((link) => {
      const href = link.getAttribute('href') || '';
      
      // Check for broken links
      if (!href || href === '#' || href === 'javascript:void(0)') {
        brokenLinks++;
      }
      
      // Count internal vs external
      if (href.startsWith('http')) {
        if (href.includes(window.location.hostname)) {
          internalLinks++;
        } else {
          externalLinks++;
          // Check for nofollow on external links
          if (!link.getAttribute('rel')?.includes('nofollow')) {
            issues.push({
              severity: 'info',
              category: 'Links',
              message: 'External link without nofollow attribute',
              element: href,
            });
          }
        }
      } else {
        internalLinks++;
      }
    });

    if (brokenLinks > 0) {
      issues.push({
        severity: 'warning',
        category: 'Links',
        message: `${brokenLinks} broken or placeholder links found`,
      });
    }

    if (internalLinks === 0) {
      issues.push({
        severity: 'warning',
        category: 'Links',
        message: 'No internal links found. Internal linking improves SEO',
      });
    }

    return issues;
  }

  private analyzeImages(): SEOIssue[] {
    const issues: SEOIssue[] = [];
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
      const alt = img.getAttribute('alt');
      const src = img.getAttribute('src') || '';
      
      if (!alt) {
        issues.push({
          severity: 'warning',
          category: 'Images',
          message: 'Image missing alt text',
          element: src,
        });
      }

      // Check for descriptive file names
      if (src.match(/image\d+|img\d+|photo\d+|picture\d+/i)) {
        issues.push({
          severity: 'info',
          category: 'Images',
          message: 'Image has non-descriptive filename',
          element: src,
        });
      }
    });

    return issues;
  }

  private analyzeStructuredData(): SEOIssue[] {
    const issues: SEOIssue[] = [];
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    if (scripts.length === 0) {
      issues.push({
        severity: 'info',
        category: 'Structured Data',
        message: 'No structured data (JSON-LD) found. Consider adding schema.org markup',
      });
    } else {
      // Validate JSON-LD
      scripts.forEach((script) => {
        try {
          JSON.parse(script.textContent || '');
        } catch (e) {
          issues.push({
            severity: 'warning',
            category: 'Structured Data',
            message: 'Invalid JSON-LD markup detected',
          });
        }
      });
    }

    return issues;
  }

  private calculateScore(issues: SEOIssue[]): number {
    let score = 100;
    
    issues.forEach((issue) => {
      switch (issue.severity) {
        case 'critical':
          score -= 15;
          break;
        case 'warning':
          score -= 5;
          break;
        case 'info':
          score -= 1;
          break;
      }
    });

    return Math.max(0, Math.min(100, score));
  }

  // Generate sitemap
  public generateSitemap(): string[] {
    const urls: string[] = [];
    const links = document.querySelectorAll('a[href]');
    
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/') && !href.includes('#')) {
        const url = `${window.location.origin}${href}`;
        if (!urls.includes(url)) {
          urls.push(url);
        }
      }
    });

    return urls.sort();
  }

  // Generate robots.txt content
  public generateRobotsTxt(): string {
    return `User-agent: *
Allow: /
Sitemap: ${window.location.origin}/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /`;
  }
}

// Singleton instance
const seoOptimizer = new SEOOptimizerService();

export default seoOptimizer;
