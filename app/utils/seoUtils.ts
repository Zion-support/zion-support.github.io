/**
 * SEO utilities for optimizing search engine visibility and performance
 */

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: unknown;
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
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="${ogType}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="${twitterCard}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
  `;
};

export const generateStructuredData = (data: {
  type: 'Organization' | 'WebSite' | 'Article' | 'Product' | 'Service';
  name: string;
  description: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  [key: string]: any;
}): string => {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': data.type,
    name: data.name,
    description: data.description,
    url: data.url,
  };

  if (data.logo) {
    baseStructure.logo = data.logo;
  }

  if (data.sameAs) {
    baseStructure.sameAs = data.sameAs;
  }

  // Add additional properties
  Object.keys(data).forEach(key => {
    if (!['type', 'name', 'description', 'url', 'logo', 'sameAs'].includes(key)) {
      baseStructure[key] = data[key];
    }
  });

  return JSON.stringify(baseStructure);
};

export const generateSitemap = (urls: string[]): string => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ziontechgroup.com';
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${url === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;
};

export const generateRobotsTxt = (allowAll: boolean = true): string => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ziontechgroup.com';
  
  if (allowAll) {
    return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
  } else {
    return `User-agent: *
Disallow: /

Sitemap: ${baseUrl}/sitemap.xml`;
  }
};

export const optimizeImages = (images: HTMLImageElement[]): void => {
  images.forEach(img => {
    // Add loading="lazy" for better performance
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add alt text if missing
    if (!img.hasAttribute('alt')) {
      img.setAttribute('alt', '');
    }
    
    // Optimize srcset for responsive images
    if (img.dataset.srcset) {
      img.srcset = img.dataset.srcset;
    }
  });
};

export const addBreadcrumbs = (items: { name: string; url: string }[]): string => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return JSON.stringify(structuredData);
};

export const generatePageSchema = (pageData: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
}): string => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageData.title,
    description: pageData.description,
    url: pageData.url,
  };

  if (pageData.datePublished) {
    schema.datePublished = pageData.datePublished;
  }

  if (pageData.dateModified) {
    schema.dateModified = pageData.dateModified;
  }

  if (pageData.author) {
    schema.author = {
      '@type': 'Person',
      name: pageData.author,
    };
  }

  if (pageData.image) {
    schema.image = pageData.image;
  }

  return JSON.stringify(schema);
};

export const checkSEOHealth = (): {
  title: boolean;
  description: boolean;
  headings: boolean;
  images: boolean;
  links: boolean;
  score: number;
} => {
  const issues = {
    title: false,
    description: false,
    headings: false,
    images: false,
    links: false,
  };

  // Check title
  const title = document.querySelector('title');
  issues.title = !title || title.textContent!.length < 30 || title.textContent!.length > 60;

  // Check description
  const description = document.querySelector('meta[name="description"]');
  issues.description = !description || description.getAttribute('content')!.length < 120 || description.getAttribute('content')!.length > 160;

  // Check headings
  const h1 = document.querySelector('h1');
  issues.headings = !h1 || document.querySelectorAll('h1').length > 1;

  // Check images
  const images = document.querySelectorAll('img');
  issues.images = Array.from(images).some(img => !img.hasAttribute('alt'));

  // Check links
  const links = document.querySelectorAll('a');
  issues.links = Array.from(links).some(link => !link.hasAttribute('href') || link.getAttribute('href') === '#');

  const score = Object.values(issues).filter(Boolean).length;
  const totalChecks = Object.keys(issues).length;

  return {
    ...issues,
    score: Math.round(((totalChecks - score) / totalChecks) * 100),
  };
};

export default {
  generateMetaTags,
  generateStructuredData,
  generateSitemap,
  generateRobotsTxt,
  optimizeImages,
  addBreadcrumbs,
  generatePageSchema,
  checkSEOHealth,
};