'use client'
/**
 * Advanced SEO Utilities for Zion Tech Group
 * Provides comprehensive SEO optimization functions
 */

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: any
  robots?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

export class SEOUtils {
  /**
   * Generate optimized meta tags
   */
  static generateMetaTags(data: SEOData): string {
    const {
      title,
      description,
      keywords,
      canonicalUrl,
      ogImage = 'https://ziontechgroup.com/og-image.jpg',
      ogType = 'website',
      twitterCard = 'summary_large_image',
      robots = 'index, follow',
      author = 'Zion Tech Group',
      publishedTime,
      modifiedTime,
      section,
      tags
    } = data
    let metaTags = ''
    // Basic meta tags
    metaTags += `<title>${this.escapeHtml(title)}</title>\n`
    metaTags += `<meta name="description" content="${this.escapeHtml(description)}">\n`
    metaTags += `<meta name="keywords" content="${keywords.join(', ')}">\n`
    metaTags += `<meta name="author" content="${this.escapeHtml(author)}">\n`
    metaTags += `<meta name="robots" content="${robots}">\n`
    // Canonical URL
    metaTags += `<link rel="canonical" href="${canonicalUrl}">\n`
    // Open Graph tags
    metaTags += `<meta property="og:title" content="${this.escapeHtml(title)}">\n`
    metaTags += `<meta property="og:description" content="${this.escapeHtml(description)}">\n`
    metaTags += `<meta property="og:url" content="${canonicalUrl}">\n`
    metaTags += `<meta property="og:type" content="${ogType}">\n`
    metaTags += `<meta property="og:image" content="${ogImage}">\n`
    metaTags += `<meta property="og:site_name" content="Zion Tech Group">\n`
    // Twitter Card tags
    metaTags += `<meta name="twitter:card" content="${twitterCard}">\n`
    metaTags += `<meta name="twitter:title" content="${this.escapeHtml(title)}">\n`
    metaTags += `<meta name="twitter:description" content="${this.escapeHtml(description)}">\n`
    metaTags += `<meta name="twitter:image" content="${ogImage}">\n`
    metaTags += `<meta name="twitter:site" content="@ziontechgroup">\n`
    metaTags += `<meta name="twitter:creator" content="@ziontechgroup">\n`
    // Additional meta tags
    if (publishedTime) {
      metaTags += `<meta property="article:published_time" content="${publishedTime}">\n`
    }
    if (modifiedTime) {
      metaTags += `<meta property="article:modified_time" content="${modifiedTime}">\n`
    }
    if (section) {
      metaTags += `<meta property="article:section" content="${this.escapeHtml(section)}">\n`
    }
    if (tags && tags.length > 0) {
      tags.forEach(tag => {
        metaTags += `<meta property="article:tag" content="${this.escapeHtml(tag)}">\n`
      })
    }

    return metaTags
  }

  /**
   * Generate structured data for organization
   */
  static generateOrganizationStructuredData(): any {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
      "foundingDate": "2020",
      "numberOfEmployees": "50-100",
      "industry": "Technology",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "Customer Service",
        "areaServed": "US",
        "availableLanguage": "en"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup"
      ],
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "50+",
        "offers": [
          {
            "@type": "Offer",
            "name": "AI Services",
            "description": "AI-powered enterprise solutions",
            "priceRange": "$1,500-$5,000/month"
          },
          {
            "@type": "Offer",
            "name": "IT Services",
            "description": "Comprehensive IT solutions",
            "priceRange": "$800-$3,000/month"
          }
        ]
      }
    }
  }

  /**
   * Generate FAQ structured data
   */
  static generateFAQStructuredData(faqs: Array<{question: string, answer: string}>): any {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  }

  /**
   * Generate breadcrumb structured data
   */
  static generateBreadcrumbStructuredData(breadcrumbs: Array<{name: string, url: string}>): any {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    }
  }

  /**
   * Generate service structured data
   */
  static generateServiceStructuredData(service: {
    name: string
    description: string
    price: string
    category: string
    provider: string
  }): any {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": service.provider
      },
      "category": service.category,
      "offers": {
        "@type": "Offer",
        "price": service.price,
        "priceCurrency": "USD"
      }
    }
  }

  /**
   * Generate sitemap data
   */
  static generateSitemapData(pages: Array<{url: string, lastmod: string, changefreq: string, priority: string}>): string {
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    pages.forEach(page => {
      sitemap += '  <url>\n'
      sitemap += `    <loc>${page.url}</loc>\n`
      sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`
      sitemap += `    <priority>${page.priority}</priority>\n`
      sitemap += '  </url>\n'
    })
    sitemap += '</urlset>'
    return sitemap
  }

  /**
   * Generate robots.txt content
   */
  static generateRobotsTxt(sitemapUrl: string = 'https://ziontechgroup.com/sitemap.xml'): string {
    return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${sitemapUrl}

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/`
  }

  /**
   * Optimize title for SEO
   */
  static optimizeTitle(title: string, maxLength: number = 60): string {
    if (title.length <= maxLength) return title
    // Try to cut at word boundary
    const words = title.split(' ')
    let optimized = ''
    for (const word of words) {
      if ((optimized + ' ' + word).trim().length <= maxLength) {
        optimized += (optimized ? ' ' : '') + word
      } else {
        break
      }
    }
    
    return optimized || title.substring(0, maxLength - 3) + '...'
  }

  /**
   * Optimize description for SEO
   */
  static optimizeDescription(description: string, maxLength: number = 160): string {
    if (description.length <= maxLength) return description
    // Try to cut at sentence boundary
    const sentences = description.split('. ')
    let optimized = ''
    for (const sentence of sentences) {
      const test = optimized + (optimized ? '. ' : '') + sentence
      if (test.length <= maxLength) {
        optimized = test
      } else {
        break
      }
    }
    
    return optimized || description.substring(0, maxLength - 3) + '...'
  }

  /**
   * Generate keyword suggestions
   */
  static generateKeywordSuggestions(baseKeywords: string[]): string[] {
    const variations = [
      'AI solutions',
      'artificial intelligence',
      'machine learning',
      'quantum computing',
      'autonomous systems',
      'digital transformation',
      'enterprise AI',
      'IT services',
      'cloud computing',
      'cybersecurity',
      'data analytics',
      'business intelligence',
      'automation',
      'DevOps',
      'blockchain',
      'IoT',
      'edge computing'
    ]
    return [...new Set([...baseKeywords, ...variations])]
  }

  /**
   * Check if URL is SEO-friendly
   */
  static isSEO FriendlyURL(url: string): boolean {
    const seoPattern = /^[a-z0-9\-/]+$/
    return seoPattern.test(url) && !url.includes('_') && !url.includes(' ')
  }

  /**
   * Generate meta viewport tag
   */
  static generateViewportTag(): string {
    return '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">'
  }

  /**
   * Generate preconnect tags for performance
   */
  static generatePreconnectTags(domains: string[]): string {
    return domains.map(domain => 
      `<link rel="preconnect" href="${domain}" crossorigin>`
    ).join('\n')
  }

  /**
   * Escape HTML characters
   */
  private static escapeHtml(text: string): string {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }
    return text.replace(/[&<>"']/g, (m) => map[m])
  }
}

export default SEOUtils</$1></li>