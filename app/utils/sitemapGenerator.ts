'use client'

// Sitemap Generator utility functions
export interface SitemapConfig {
  baseUrl: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

export interface SitemapEntry {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

export class SitemapGenerator {
  private config: SitemapConfig
  private entries: SitemapEntry[] = []

  constructor(config: Partial<SitemapConfig> = {}) {
    this.config = {
      baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      ...config
    }
  }

  addEntry(entry: Partial<SitemapEntry>): void {
    const fullEntry: SitemapEntry = {
      url: entry.url || '',
      lastModified: entry.lastModified || this.config.lastModified,
      changeFrequency: entry.changeFrequency || this.config.changeFrequency,
      priority: entry.priority || this.config.priority
    }

    this.entries.push(fullEntry)
  }

  generate(): string {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${this.entries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified.toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`

    return xml
  }

  generateRobotsTxt(): string {
    const robots = `User-agent: *
Allow: /

Sitemap: ${this.config.baseUrl}/sitemap.xml`

    return robots
  }

  clearEntries(): void {
    this.entries = []
  }

  getEntries(): SitemapEntry[] {
    return [...this.entries]
  }
}

// Create default instance
export const sitemapGenerator = new SitemapGenerator()

export default sitemapGenerator
