// SEO utilities for the Zion Tech Group website

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  type: string;
  structuredData?: any;
}

export const seoUtils = {
  // Generate page title
  generateTitle(pageTitle?: string, siteName = "Zion Tech Group"): string {
    if (!pageTitle) return siteName;
    return `${pageTitle} | ${siteName}`;
  },

  // Generate meta description
  generateDescription(content: string, maxLength = 160): string {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength - 3) + '...';
  },

  // Generate keywords from content
  generateKeywords(content: string, additionalKeywords: string[] = []): string {
    const baseKeywords = [
      'AI solutions',
      'IT services',
      'cloud infrastructure',
      'digital transformation',
      'machine learning',
      'artificial intelligence',
      'Zion Tech Group'
    ];

    const contentKeywords = content
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3)
      .filter(word => !['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'its', 'may', 'new', 'now', 'old', 'see', 'two', 'way', 'who', 'boy', 'did', 'man', 'oil', 'sit', 'yes', 'yet'].includes(word))
      .slice(0, 10);

    return [...baseKeywords, ...additionalKeywords, ...contentKeywords].join(', ');
  },

  // Generate structured data for organization
  generateOrganizationStructuredData(): any {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation.",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "image": "https://ziontechgroup.com/og-image.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com",
        "availableLanguage": "English"
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
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup"
      ],
      "foundingDate": "2020",
      "numberOfEmployees": "10-50",
      "areaServed": "United States",
      "serviceType": ["AI Solutions", "IT Services", "Cloud Infrastructure", "Digital Transformation"]
    };
  },

  // Generate structured data for service page
  generateServiceStructuredData(serviceName: string, description: string): any {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD"
      }
    };
  },

  // Generate breadcrumb structured data
  generateBreadcrumbStructuredData(breadcrumbs: Array<{name: string, url: string}>): any {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  },

  // Generate FAQ structured data
  generateFAQStructuredData(faqs: Array<{question: string, answer: string}>): any {
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
    };
  },

  // Generate sitemap data
  generateSitemapData(pages: Array<{url: string, lastmod?: string, changefreq?: string, priority?: number}>): string {
    const baseUrl = 'https://ziontechgroup.com';
    const currentDate = new Date().toISOString().split('T')[0];
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
      sitemap += `    <lastmod>${page.lastmod || currentDate}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq || 'monthly'}</changefreq>\n`;
      sitemap += `    <priority>${page.priority || 0.5}</priority>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    return sitemap;
  },

  // Generate robots.txt content
  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/`;
  },

  // Validate SEO data
  validateSEOData(data: SEOData): {isValid: boolean, errors: string[]} {
    const errors: string[] = [];
    
    if (!data.title || data.title.length < 10) {
      errors.push('Title should be at least 10 characters long');
    }
    
    if (!data.description || data.description.length < 120) {
      errors.push('Description should be at least 120 characters long');
    }
    
    if (data.description && data.description.length > 160) {
      errors.push('Description should be no more than 160 characters long');
    }
    
    if (!data.keywords || data.keywords.split(',').length < 3) {
      errors.push('Keywords should include at least 3 terms');
    }
    
    if (!data.url || !data.url.startsWith('https://')) {
      errors.push('URL should start with https://');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
};