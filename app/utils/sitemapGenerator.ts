// Sitemap generator utility
export interface SitemapConfig {
  baseUrl: string
  staticPages: string[]
  dynamicPages?: Array<{
    path: string
    lastModified?: Date
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority?: number
  }>
}

export interface SitemapEntry {
  url: string
  lastModified?: string
  changeFrequency?: string
  priority?: number
}

export class SitemapGenerator {
  private config: SitemapConfig

  constructor(config: SitemapConfig) {
    this.config = config
  }

  generateSitemap(): string {
    const entries: SitemapEntry[] = []

    // Add static pages
    this.config.staticPages.forEach(page => {
      entries.push({
        url: `${this.config.baseUrl}${page}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.8
      })
    })

    // Add dynamic pages
    if (this.config.dynamicPages) {
      this.config.dynamicPages.forEach(page => {
        entries.push({
          url: `${this.config.baseUrl}${page.path}`,
          lastModified: page.lastModified?.toISOString(),
          changeFrequency: page.changeFrequency || 'monthly',
          priority: page.priority || 0.6
        })
      })
    }

    // Generate XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    ${entry.lastModified ? `<lastmod>${entry.lastModified}</lastmod>` : ''}
    ${entry.changeFrequency ? `<changefreq>${entry.changeFrequency}</changefreq>` : ''}
    ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`

    return xml
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

Sitemap: ${this.config.baseUrl}/sitemap.xml`
  }

  addPage(path: string, options?: Partial<SitemapEntry>): void {
    if (!this.config.dynamicPages) {
      this.config.dynamicPages = []
    }

    this.config.dynamicPages.push({
      path,
      lastModified: options?.lastModified ? new Date(options.lastModified) : new Date(),
      changeFrequency: options?.changeFrequency as any || 'monthly',
      priority: options?.priority || 0.6
    })
  }

  removePage(path: string): void {
    if (this.config.dynamicPages) {
      this.config.dynamicPages = this.config.dynamicPages.filter(page => page.path !== path)
    }
  }
}

export default SitemapGenerator