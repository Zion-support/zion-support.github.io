/**
 * Advanced SEO utilities for enhanced search engine optimization
 */

export interface SEOData {
  title: string,
  description: string,
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  robots?: string;
  language?: string;
}

export const generateAdvancedSEO = (data: SEOData) : any => {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogImage = '/og-image.svg',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    structuredData,
    robots = 'index, follow',
    language = 'en-US'
  } = data;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    canonical: canonicalUrl,
    robots,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Zion Holdings - AI Innovation',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: language,
      type: ogType,
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      images: [ogImage],
      creator: '@ZionHoldings',
      site: '@ZionHoldings',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    other: {
      'google-site-verification': 'your-google-verification-code',
      'msvalidate.01': 'your-bing-verification-code',
    },
    ...(structuredData && {
      structuredData: JSON.stringify(structuredData),
    });
  };
};

export const generateStructuredData = {
  organization: (data: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Holdings',
    url: 'https://zion.app',
    logo: 'https://zion.app/logo.png',
    description: 'Leading AI innovation and enterprise solutions',
    foundingDate: '2020',
    ...data,
  }),

  website: (data: any) => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion Holdings',
    url: 'https://zion.app',
    description: 'AI innovation and enterprise solutions',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://zion.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    ...data,
  }),

  article: (data: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    author: {
      '@type': 'Organization',
      name: 'Zion Holdings',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zion Holdings',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zion.app/logo.png',
      },
    },
    datePublished: data.datePublished || new Date().toISOString(),
    dateModified: data.dateModified || new Date().toISOString(),
    ...data,
  }),

  service: (data: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    provider: {
      '@type': 'Organization',
      name: 'Zion Holdings',
    },
    areaServed: 'Worldwide',
    serviceType: 'AI and Technology Services',
    ...data,
  }),

  breadcrumb: (items: Array<{ name: string, url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });
  };

export const generateSitemap = (pages: Array<{ url: string, lastmod?: string, changefreq?: string, priority?: number }>) : any => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq || 'weekly'}</changefreq>
    <priority>${page.priority || '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`,
  
  return sitemap;
};

export const generateRobotsTxt = (allow: string[] = ['/'], disallow: string[] = ['/api/', '/admin/']) : any => {
  return `User-agent: *
${allow.map(path => `Allow: ${path}`).join('\n')}
${disallow.map(path => `Disallow: ${path}`).join('\n')}

Sitemap: https://zion.app/sitemap.xml`;
  };

export const optimizeImages = {
  generateSrcSet: (baseUrl: string, sizes: number[] = [640, 750, 828, 1080, 1200, 1920, 2048, 3840]) : any => {
    return sizes.map(size => `${baseUrl}?w=${size}&q=80 ${size}w`).join(', ');
  },
  
  generateSizes: (breakpoints: Array<{ min: number, max?: number, size: string }>) : any => {
    return breakpoints.map(bp => 
      bp.max ? `(min-width: ${bp.min}px) and (max-width: ${bp.max}px) ${bp.size}` 
             : `(min-width: ${bp.min}px) ${bp.size}`
    ).join(', ');
  },
};

export const generateMetaTags = (seoData: SEOData) : any => {
  const tags = [],
  
  tags.push(`<title>${seoData.title}</title>`);
  tags.push(`<meta name="description" content="${seoData.description}" />`);
  
  if (seoData.keywords && seoData.keywords.length > 0) {
    tags.push(`<meta name="keywords" content="${seoData.keywords.join(', ')}" />`);
  }
  
  if (seoData.canonicalUrl) {
    tags.push(`<link rel="canonical" href="${seoData.canonicalUrl}" />`);
  }
  
  if (seoData.robots) {
    tags.push(`<meta name="robots" content="${seoData.robots}" />`);
  }
  
  // Open Graph tags
  tags.push(`<meta property="og: title" content="${seoData.title}" />`),
  tags.push(`<meta property="og: description" content="${seoData.description}" />`),
  tags.push(`<meta property="og: type" content="${seoData.ogType || 'website'}" />`),
  
  if (seoData.canonicalUrl) {
    tags.push(`<meta property="og: url" content="${seoData.canonicalUrl}" />`);
};
  if (seoData.ogImage) {
    tags.push(`<meta property="og: image" content="${seoData.ogImage}" />`);
};
  // Twitter Card tags
  tags.push(`<meta name="twitter: card" content="${seoData.twitterCard || 'summary_large_image'}" />`),
  tags.push(`<meta name="twitter: title" content="${seoData.title}" />`),
  tags.push(`<meta name="twitter: description" content="${seoData.description}" />`),
  
  if (seoData.ogImage) {
    tags.push(`<meta name="twitter: image" content="${seoData.ogImage}" />`);
};
  return tags.join('\n');
};