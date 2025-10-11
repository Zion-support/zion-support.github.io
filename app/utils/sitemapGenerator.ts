// Sitemap generator utilities
export interface SitemapPage {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (pages: SitemapPage[]): string => {
  const baseUrl = 'https://ziontechgroup.com';
  
  const urlEntries = pages.map(page => {
    const fullUrl = page.url.startsWith('http') ? page.url : `${baseUrl}${page.url}`;
    const lastmod = page.lastmod || new Date().toISOString();
    const changefreq = page.changefreq || 'weekly';
    const priority = page.priority || (page.url === '' ? 1.0 : 0.8);
    
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = (sitemapUrl?: string): string => {
  const defaultSitemapUrl = 'https://ziontechgroup.com/sitemap.xml';
  
  return `User-agent: *
Allow: /
Sitemap: ${sitemapUrl || defaultSitemapUrl}
# Crawl-delay for better server performance
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;
};

export const generateSitemapIndex = (sitemaps: Array<{ url: string; lastmod?: string }>): string => {
  const sitemapEntries = sitemaps.map(sitemap => {
    const lastmod = sitemap.lastmod || new Date().toISOString();
    return `  <sitemap>
    <loc>${sitemap.url}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`;
  }).join('\n');

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;

  return sitemapIndex;
};

export const generateManifest = (config: {
  name: string;
  shortName: string;
  description: string;
  startUrl: string;
  display: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';
  themeColor: string;
  backgroundColor: string;
  icons: Array<{
    src: string;
    sizes: string;
    type: string;
  }>;
}): string => {
  const manifest = {
    name: config.name,
    short_name: config.shortName,
    description: config.description,
    start_url: config.startUrl,
    display: config.display,
    theme_color: config.themeColor,
    background_color: config.backgroundColor,
    icons: config.icons,
    categories: ['business', 'productivity', 'technology'],
    lang: 'en',
    orientation: 'portrait-primary',
    scope: '/',
    id: 'zion-tech-group',
    version: '1.0.0'
  };

  return JSON.stringify(manifest, null, 2);
};

export const generateOpenGraphTags = (config: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
  siteName?: string;
}): string => {
  const tags = [
    `<meta property="og:title" content="${config.title}" />`,
    `<meta property="og:description" content="${config.description}" />`,
    `<meta property="og:url" content="${config.url}" />`,
    `<meta property="og:type" content="${config.type || 'website'}" />`,
    `<meta property="og:site_name" content="${config.siteName || 'Zion Tech Group'}" />`
  ];

  if (config.image) {
    tags.push(`<meta property="og:image" content="${config.image}" />`);
    tags.push(`<meta property="og:image:width" content="1200" />`);
    tags.push(`<meta property="og:image:height" content="630" />`);
  }

  return tags.join('\n');
};

export const generateTwitterCardTags = (config: {
  title: string;
  description: string;
  image?: string;
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
}): string => {
  const tags = [
    `<meta name="twitter:card" content="${config.card || 'summary_large_image'}" />`,
    `<meta name="twitter:title" content="${config.title}" />`,
    `<meta name="twitter:description" content="${config.description}" />`
  ];

  if (config.image) {
    tags.push(`<meta name="twitter:image" content="${config.image}" />`);
  }

  return tags.join('\n');
};

export const generateMetaTags = (config: {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  robots?: string;
  canonical?: string;
}): string => {
  const tags = [
    `<title>${config.title}</title>`,
    `<meta name="description" content="${config.description}" />`,
    `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
    `<meta charset="UTF-8" />`
  ];

  if (config.keywords) {
    tags.push(`<meta name="keywords" content="${config.keywords}" />`);
  }

  if (config.author) {
    tags.push(`<meta name="author" content="${config.author}" />`);
  }

  if (config.robots) {
    tags.push(`<meta name="robots" content="${config.robots}" />`);
  }

  if (config.canonical) {
    tags.push(`<link rel="canonical" href="${config.canonical}" />`);
  }

  return tags.join('\n');
};