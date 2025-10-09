// SEO utilities for optimizing search engine visibility and performance

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
}

export const generateMetaTags = (data: SEOData): string => {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = 'https://ziontechgroup.com/og-image.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image'
  } = data;

  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords.join(', ')}" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="${ogType}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:site_name" content="Zion Tech Group" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="${twitterCard}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
    <meta name="twitter:site" content="@ziontechgroup" />
    <meta name="twitter:creator" content="@ziontechgroup" />
  `;
};

export const generateStructuredData = (type: string, data: any): string => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return JSON.stringify(structuredData);
};

export const generateOrganizationSchema = () => {
  return generateStructuredData('Organization', {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Technology',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'en'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup'
    ]
  });
};

export const generateServiceSchema = (serviceName: string, description: string) => {
  return generateStructuredData('Service', {
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Zion Tech Group'
    },
    offers: {
      '@type': 'Offer',
      price: '1500',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '1500',
        priceCurrency: 'USD',
        billingIncrement: 'P1M'
      }
    }
  });
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return generateStructuredData('BreadcrumbList', {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  });
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return generateStructuredData('FAQPage', {
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  });
};

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) => {
  return generateStructuredData('Article', {
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png'
      }
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: article.image || 'https://ziontechgroup.com/og-image.jpg'
  });
};

export const generateLocalBusinessSchema = () => {
  return generateStructuredData('LocalBusiness', {
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
    url: 'https://ziontechgroup.com',
    telephone: '+1-302-464-0950',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '39.8283',
      longitude: '-75.5795'
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$$'
  });
};

export const generateWebSiteSchema = () => {
  return generateStructuredData('WebSite', {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ziontechgroup.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  });
};

export const generateSitemap = (pages: Array<{ url: string; lastmod: string; changefreq: string; priority: string }>) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${page.url}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;
};

export const optimizeTitle = (title: string, maxLength: number = 60): string => {
  if (title.length <= maxLength) return title;
  
  const words = title.split(' ');
  let optimizedTitle = '';
  
  for (const word of words) {
    if ((optimizedTitle + ' ' + word).length <= maxLength - 3) {
      optimizedTitle += (optimizedTitle ? ' ' : '') + word;
    } else {
      break;
    }
  }
  
  return optimizedTitle + '...';
};

export const optimizeDescription = (description: string, maxLength: number = 160): string => {
  if (description.length <= maxLength) return description;
  
  return description.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (content: string, maxKeywords: number = 10): string[] => {
  const words = content.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  const wordCount: Record<string, number> = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
};

export const validateSEO = (data: SEOData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!data.title || data.title.length === 0) {
    errors.push('Title is required');
  } else if (data.title.length > 60) {
    errors.push('Title should be 60 characters or less');
  }
  
  if (!data.description || data.description.length === 0) {
    errors.push('Description is required');
  } else if (data.description.length > 160) {
    errors.push('Description should be 160 characters or less');
  }
  
  if (!data.keywords || data.keywords.length === 0) {
    errors.push('Keywords are required');
  }
  
  if (!data.canonicalUrl || data.canonicalUrl.length === 0) {
    errors.push('Canonical URL is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const createSEOMeta = (data: SEOData): void => {
  // Update title
  document.title = data.title;
  
  // Update meta description
  updateMetaTag('description', data.description);
  updateMetaTag('keywords', data.keywords.join(', '));
  
  // Update Open Graph tags
  updateMetaTag('og:title', data.title, 'property');
  updateMetaTag('og:description', data.description, 'property');
  updateMetaTag('og:url', data.canonicalUrl, 'property');
  if (data.ogImage) {
    updateMetaTag('og:image', data.ogImage, 'property');
  }
  
  // Update Twitter tags
  updateMetaTag('twitter:title', data.title, 'name');
  updateMetaTag('twitter:description', data.description, 'name');
  if (data.ogImage) {
    updateMetaTag('twitter:image', data.ogImage, 'name');
  }
  
  // Update canonical URL
  updateCanonicalUrl(data.canonicalUrl);
  
  // Add structured data
  if (data.structuredData) {
    addStructuredData(data.structuredData);
  }
};

const updateMetaTag = (name: string, content: string, attribute: string = 'name'): void => {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const updateCanonicalUrl = (url: string): void => {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
};

const addStructuredData = (data: any): void => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  script.id = 'structured-data';
  
  // Remove existing structured data
  const existing = document.getElementById('structured-data');
  if (existing) {
    existing.remove();
  }
  
  document.head.appendChild(script);
};