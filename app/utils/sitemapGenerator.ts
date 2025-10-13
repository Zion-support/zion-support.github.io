// Sitemap Generator utility
export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export class SitemapGenerator {
  private static instance: SitemapGenerator;
  private entries: SitemapEntry[] = [];

  static getInstance(): SitemapGenerator {
    if (!SitemapGenerator.instance) {
      SitemapGenerator.instance = new SitemapGenerator();
    }
    return SitemapGenerator.instance;
  }

  addEntry(entry: SitemapEntry): void {
    this.entries.push(entry);
  }

  addEntries(entries: SitemapEntry[]): void {
    this.entries.push(...entries);
  }

  generateXML(baseUrl: string = 'https://ziontechgroup.com'): string {
    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ];

    this.entries.forEach(entry => {
      xml.push('  <url>');
      xml.push(`    <loc>${baseUrl}${entry.url}</loc>`);
      
      if (entry.lastmod) {
        xml.push(`    <lastmod>${entry.lastmod}</lastmod>`);
      }
      
      if (entry.changefreq) {
        xml.push(`    <changefreq>${entry.changefreq}</changefreq>`);
      }
      
      if (entry.priority !== undefined) {
        xml.push(`    <priority>${entry.priority}</priority>`);
      }
      
      xml.push('  </url>');
    });

    xml.push('</urlset>');
    return xml.join('\n');
  }

  generateRobotsTxt(baseUrl: string = 'https://ziontechgroup.com'): string {
    return [
      'User-agent: *',
      'Allow: /',
      'Disallow: /admin/',
      'Disallow: /api/',
      `Sitemap: ${baseUrl}/sitemap.xml`
    ].join('\n');
  }

  clearEntries(): void {
    this.entries = [];
  }

  getEntries(): SitemapEntry[] {
    return [...this.entries];
  }
}

export default SitemapGenerator;