/**
 * SEO optimization utilities
 */

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: Record<string, unknown>;
}

// Generate meta tags for SEO
export const generateMetaTags = (seoData: SEOData) => {
  const tags = [
    { name: 'title', content: seoData.title },
    { name: 'description', content: seoData.description },
    { name: 'keywords', content: seoData.keywords.join(', ') },
  ];

  if (seoData.canonicalUrl) {
    tags.push({ name: 'canonical', content: seoData.canonicalUrl });
  }

  // Open Graph tags
  tags.push(
    { name: 'og:title', content: seoData.title },
    { name: 'og:description', content: seoData.description },
    { name: 'og:type', content: seoData.ogType || 'website' },
  );

  if (seoData.ogImage) {
    tags.push({ name: 'og:image', content: seoData.ogImage });
  }

  // Twitter Card tags
  if (seoData.twitterCard) {
    tags.push(
      { name: 'twitter:card', content: seoData.twitterCard },
      { name: 'twitter:title', content: seoData.title },
      { name: 'twitter:description', content: seoData.description },
    );
  }

  return tags;
};

// Generate structured data for rich snippets
export const generateStructuredData = (data: {
  type: 'Organization' | 'WebSite' | 'Article' | 'Service';
  name: string;
  description: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  author?: string;
  datePublished?: string;
  dateModified?: string;
}) => {
  const baseStructure: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': data.type,
    name: data.name,
    description: data.description,
  };

  if (data.url) {
    baseStructure['url'] = data.url;
  }

  if (data.logo) {
    baseStructure['logo'] = data.logo;
  }

  if (data.sameAs && data.sameAs.length > 0) {
    baseStructure['sameAs'] = data.sameAs;
  }

  if (data.type === 'Article' && data.author) {
    baseStructure['author'] = {
      '@type': 'Person',
      name: data.author,
    };
  }

  if (data.datePublished) {
    baseStructure['datePublished'] = data.datePublished;
  }

  if (data.dateModified) {
    baseStructure['dateModified'] = data.dateModified;
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
  return pages.map(page => ({
    loc: page.url,
    lastmod: page.lastModified,
    changefreq: page.changeFrequency,
    priority: page.priority,
  }));
};

// Generate robots.txt content
export const generateRobotsTxt = (options: {
  allowAll?: boolean;
  disallowPaths?: string[];
  sitemapUrl?: string;
  crawlDelay?: number;
}) => {
  let content = 'User-agent: *\n';
  
  if (options.allowAll) {
    content += 'Allow: /\n';
  } else if (options.disallowPaths) {
    options.disallowPaths.forEach(path => {
      content += `Disallow: ${path}\n`;
    });
  }
  
  if (options.crawlDelay) {
    content += `Crawl-delay: ${options.crawlDelay}\n`;
  }
  
  if (options.sitemapUrl) {
    content += `Sitemap: ${options.sitemapUrl}\n`;
  }
  
  return content;
};

// Validate SEO data
export const validateSEOData = (seoData: SEOData): string[] => {
  const errors: string[] = [];
  
  if (!seoData.title || seoData.title.length < 30) {
    errors.push('Title should be at least 30 characters long');
  }
  
  if (seoData.title && seoData.title.length > 60) {
    errors.push('Title should be no more than 60 characters long');
  }
  
  if (!seoData.description || seoData.description.length < 120) {
    errors.push('Description should be at least 120 characters long');
  }
  
  if (seoData.description && seoData.description.length > 160) {
    errors.push('Description should be no more than 160 characters long');
  }
  
  if (!seoData.keywords || seoData.keywords.length === 0) {
    errors.push('Keywords should not be empty');
  }
  
  if (seoData.keywords && seoData.keywords.length > 10) {
    errors.push('Keywords should not exceed 10 items');
  }
  
  return errors;
};

// Generate breadcrumb structured data
export const generateBreadcrumbData = (items: Array<{
  name: string;
  url: string;
}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};