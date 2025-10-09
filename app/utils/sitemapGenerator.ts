export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface SitemapConfig {
  baseUrl: string;
  urls: SitemapUrl[];
}

export function generateSitemap(config: SitemapConfig): string {
  const { baseUrl, urls } = config;
  
  const sitemapUrls = urls.map(url => {
    const lastmod = url.lastmod || new Date().toISOString().split('T')[0];
    const changefreq = url.changefreq || 'monthly';
    const priority = url.priority || 0.5;
    
    return `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;
}

export function generateRobotsTxt(baseUrl: string): string {
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /
Allow: /ai-services
Allow: /it-services
Allow: /contact
Allow: /about`;
}

export const defaultSitemapUrls: SitemapUrl[] = [
  {
    loc: '/',
    priority: 1.0,
    changefreq: 'daily'
  },
  {
    loc: '/ai-services',
    priority: 0.9,
    changefreq: 'weekly'
  },
  {
    loc: '/it-services',
    priority: 0.9,
    changefreq: 'weekly'
  },
  {
    loc: '/contact',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    loc: '/about',
    priority: 0.7,
    changefreq: 'monthly'
  },
  // AI Services
  {
    loc: '/ai-project-manager',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-social-media-manager',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-analytics',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-email-marketing',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-customer-support-bot',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-code-generation',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-video-generation',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-voice-cloning',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-workflow-automation',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-fashion-design',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-music-composition',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-fitness-coach',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-sales-automation',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-data-visualization',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-3d-generation',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-customer-support',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-content-writer',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-inventory-manager',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-hr-assistant',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-financial-advisor',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/ai-legal-assistant',
    priority: 0.8,
    changefreq: 'weekly'
  },
  // IT Services
  {
    loc: '/cloud-migration',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    loc: '/it-consulting',
    priority: 0.8,
    changefreq: 'weekly'
  }
];