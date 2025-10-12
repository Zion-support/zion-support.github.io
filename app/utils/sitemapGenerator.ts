// Utility file: sitemapGenerator

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export class SitemapGenerator {
  private entries: SitemapEntry[] = [];

  addEntry(entry: SitemapEntry): void {
    this.entries.push(entry);
  }

  addEntries(entries: SitemapEntry[]): void {
    this.entries.push(...entries);
  }

  generateXML(): string {
    const header = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    const footer = '</urlset>';
    
    const urls = this.entries.map(entry => {
      let url = `  <url>\n    <loc>${entry.url}</loc>`;
      
      if (entry.lastmod) {
        url += `\n    <lastmod>${entry.lastmod}</lastmod>`;
      }
      
      if (entry.changefreq) {
        url += `\n    <changefreq>${entry.changefreq}</changefreq>`;
      }
      
      if (entry.priority) {
        url += `\n    <priority>${entry.priority}</priority>`;
      }
      
      url += '\n  </url>';
      return url;
    }).join('\n');

    return header + urls + '\n' + footer;
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`;
  }

  clear(): void {
    this.entries = [];
  }
}

export const sitemapGenerator = new SitemapGenerator();