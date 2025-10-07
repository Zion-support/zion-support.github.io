/**
 * SEO Enhancement Utilities
 * Tools to improve search engine optimization
 */

// Generate meta tags
export const generateMetaTags = (data: {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}) => {
  const tags = [
    { name: 'title', content: data.title },
    { name: 'description', content: data.description },
    { name: 'keywords', content: data.keywords || '' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Zion Holdings' },
    { name: 'canonical', content: data.canonical || '' },
    { property: 'og:title', content: data.ogTitle || data.title },
    { property: 'og:description', content: data.ogDescription || data.description },
    { property: 'og:image', content: data.ogImage || '/og-image.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Zion Holdings' },
    { name: 'twitter:card', content: data.twitterCard || 'summary_large_image' },
    { name: 'twitter:title', content: data.twitterTitle || data.title },
    { name: 'twitter:description', content: data.twitterDescription || data.description },
    { name: 'twitter:image', content: data.twitterImage || data.ogImage || '/og-image.jpg' },
  ];

  return tags;
};

// Generate structured data
export const generateStructuredData = (data: {
  type: 'Organization' | 'WebSite' | 'Article' | 'Service';
  name: string;
  description: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  [key: string]: unknown;
}) => {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': data.type,
    name: data.name,
    description: data.description,
    url: data.url || '',
    logo: data.logo || '',
    sameAs: data.sameAs || [],
  };

  // Add type-specific properties
  if (data.type === 'Organization') {
    return {
      ...baseStructure,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
      },
    };
  }

  if (data.type === 'WebSite') {
    return {
      ...baseStructure,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${data.url}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    };
  }

  if (data.type === 'Article') {
    return {
      ...baseStructure,
      author: {
        '@type': 'Organization',
        name: 'Zion Holdings',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Zion Holdings',
        logo: {
          '@type': 'ImageObject',
          url: data.logo || '/logo.jpg',
        },
      },
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
    };
  }

  return baseStructure;
};

// Generate sitemap data
export const generateSitemapData = (pages: Array<{
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}>) => {
  return {
    urlset: {
      '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
      url: pages.map((page) => ({
        loc: page.url,
        lastmod: page.lastModified,
        changefreq: page.changeFrequency,
        priority: page.priority,
      })),
    },
  };
};

// Generate robots.txt content
export const generateRobotsTxt = (sitemapUrl: string, disallowPaths: string[] = []) => {
  const disallowRules = disallowPaths.map((path) => `Disallow: ${path}`).join('\n');
  
  return `User-agent: *
${disallowRules}

Sitemap: ${sitemapUrl}`;
};

// SEO validation
export const validateSEOData = (data: {
  title: string;
  description: string;
  url: string;
}) => {
  const issues: string[] = [];

  // Check title length
  if (data.title.length < 30) {
    issues.push('Title is too short (recommended: 30-60 characters)');
  } else if (data.title.length > 60) {
    issues.push('Title is too long (recommended: 30-60 characters)');
  }

  // Check description length
  if (data.description.length < 120) {
    issues.push('Description is too short (recommended: 120-160 characters)');
  } else if (data.description.length > 160) {
    issues.push('Description is too long (recommended: 120-160 characters)');
  }

  // Check URL format
  if (!data.url.startsWith('http')) {
    issues.push('URL should start with http:// or https://');
  }

  return issues;
};

// Generate breadcrumb data
export const generateBreadcrumbData = (breadcrumbs: Array<{
  name: string;
  url: string;
}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

// Initialize SEO enhancements
export const initializeSEOEnhancements = () => {
  if (typeof document === 'undefined') return;

  // Add structured data for organization
  const organizationData = generateStructuredData({
    type: 'Organization',
    name: 'Zion Holdings',
    description: 'Leading provider of AI-powered business solutions',
    url: 'https://zion.app',
    logo: 'https://zion.app/logo.jpg',
    sameAs: [
      'https://twitter.com/zionholdings',
      'https://linkedin.com/company/zion-holdings',
    ],
  });

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(organizationData);
  document.head.appendChild(script);
};