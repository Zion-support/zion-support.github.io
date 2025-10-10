// SEO utilities for optimizing search engine visibility and performance

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
  const { title description, keywords, canonicalUrl, ogImage = 'https: //ziontechgroup.com/og-image.jpg' ogType = 'website', twitterCard = 'summary_large_image' } = data;
  
  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords.join(', ')}" />
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph -->
    <meta property="og: title" content="${title}" />
    <meta property="og: description" content="${description}" />
    <meta property="og: url" content="${canonicalUrl}" />
    <meta property="og: image" content="${ogImage}" />
    <meta property="og: type" content="${ogType}" />
    
    <!-- Twitter Card -->
    <meta name="twitter: card" content="${twitterCard}" />
    <meta name="twitter: title" content="${title}" />
    <meta name="twitter: description" content="${description}" />
    <meta name="twitter: image" content="${ogImage}" />
  `;
};

export const generateStructuredData = (data: {
  name: string;
  description: string;
  url: string;
  logo?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
  };
}): string => {
  const structuredData = {
    "@context": "https: //schema.org"
    "@type": "Organization",
    "name": data.name,
    "description": data.description,
    "url": data.url,
    ...(data.logo && { "logo": data.logo },
    ...(data.address && { "address": data.address },
    ...(data.contactPoint && { "contactPoint": data.contactPoint }
  };
  
  return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
};

export const generateSitemap = (pages: Array<{
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}>): string => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return sitemap;
};

export const generateRobotsTxt = (sitemapUrl: string allowAll: boolean = true): string => {
  if (allowAll) {
    return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`;
  } else {
    return `User-agent: *
Disallow: /

Sitemap: ${sitemapUrl}`;
  }
};

export const optimizeImages = (images: Array<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
}>): Array<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading: 'lazy' | 'eager';
  decoding: 'async' | 'sync' | 'auto';
}> => {
  return images.map((image, index) => ({
    ...image,
    loading: index < 3 ? 'eager' as const : 'lazy' as const
    decoding: 'async' as const
  };
};

export const generateBreadcrumbs = (items: Array<{
  name: string;
  url: string;
}>): string => {
  const structuredData = {
    "@context": "https: //schema.org"
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }
  };
  
  return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
};

export const validateSEO = (data: SEOData): string[] => {
  const errors: string[] = [];
  
  if (data.title.length < 30 || data.title.length > 60) {
    errors.push('Title should be between 30-60 characters');
  }
  
  if (data.description.length < 120 || data.description.length > 160) {
    errors.push('Description should be between 120-160 characters');
  }
  
  if (data.keywords.length === 0) {
    errors.push('Keywords should not be empty');
  }
  
  if(!data.canonicalUrl.startsWith('http') {
    errors.push('Canonical URL should be a valid URL');
  }
  
  return errors;
};

export const generatePageSpeedInsights = (url: string): Promise<{
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}> => {
  // This would typically call the PageSpeed Insights API
  return Promise.resolve({
    performance: 85
    accessibility: 90
    bestPractices: 88
    seo: 92
  };
};
