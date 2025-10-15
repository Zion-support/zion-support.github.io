// Sitemap generator utility
export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (entries: SitemapEntry[]): string => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapEntries = entries.map(entry => {
    const lastmod = entry.lastmod || currentDate;
    const changefreq = entry.changefreq || 'monthly';
    const priority = entry.priority || 0.5;

    return `  <url>
    <loc>${baseUrl}${entry.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;
};

export const defaultSitemapEntries: SitemapEntry[] = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/services', priority: 0.9, changefreq: 'weekly' },
  { url: '/ai-services', priority: 0.8, changefreq: 'weekly' },
  { url: '/it-services', priority: 0.8, changefreq: 'weekly' },
  { url: '/cloud-infrastructure', priority: 0.8, changefreq: 'weekly' },
  { url: '/5g-solutions', priority: 0.8, changefreq: 'weekly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
  { url: '/pricing', priority: 0.8, changefreq: 'weekly' },
  { url: '/blog', priority: 0.6, changefreq: 'weekly' },
  { url: '/team', priority: 0.6, changefreq: 'monthly' },
  { url: '/careers', priority: 0.6, changefreq: 'weekly' },
  { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { url: '/terms', priority: 0.3, changefreq: 'yearly' },
  { url: '/accessibility', priority: 0.4, changefreq: 'monthly' }
];