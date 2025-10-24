/**
 * Sitemap Generator
 * Generates sitemap and robots.txt for SEO optimization
 */

export interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

export interface SitemapConfig {
  baseUrl: string;
  entries: SitemapEntry[];
}

export class SitemapGenerator {
  private config: SitemapConfig;

  constructor(config: SitemapConfig) {
    this.config = config;
  }

  generateSitemap(): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${this.config.entries.map(entry => `  <url>
    <loc>${this.config.baseUrl}${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

Sitemap: ${this.config.baseUrl}/sitemap.xml`;
  }

  addEntry(entry: SitemapEntry): void {
    this.config.entries.push(entry);
  }

  removeEntry(loc: string): void {
    this.config.entries = this.config.entries.filter(entry => entry.loc !== loc);
  }

  getEntries(): SitemapEntry[] {
    return [...this.config.entries];
  }
}

// Default sitemap entries
export const defaultSitemapEntries: SitemapEntry[] = [
  {
    loc: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: 1.0
  },
  {
    loc: '/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: '/services',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: '/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7
  }
];
