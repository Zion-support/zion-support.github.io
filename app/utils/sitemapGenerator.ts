/**
 * Sitemap Generator
 * Generates XML sitemaps for SEO optimization
 */

import { MetadataRoute } from 'next'

interface SitemapEntry {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

interface SitemapConfig {
  baseUrl: string
  staticPages: string[]
  dynamicPages?: (() => Promise<string[]>)
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

export class SitemapGenerator {
  private config: SitemapConfig

  constructor(config: SitemapConfig) {
    this.config = config
  }

  async generateSitemap(): Promise<MetadataRoute.Sitemap> {
    const sitemap: MetadataRoute.Sitemap = []

    // Add static pages
    for (const page of this.config.staticPages) {
      sitemap.push({
        url: `${this.config.baseUrl}${page}`,
        lastModified: new Date(),
        changeFrequency: this.config.changeFrequency,
        priority: this.config.priority
      })
    }

    // Add dynamic pages if provided
    if (this.config.dynamicPages) {
      try {
        const dynamicPages = await this.config.dynamicPages()
        for (const page of dynamicPages) {
          sitemap.push({
            url: `${this.config.baseUrl}${page}`,
            lastModified: new Date(),
            changeFrequency: this.config.changeFrequency,
            priority: this.config.priority
          })
        }
      } catch (error) {
        console.error('Failed to generate dynamic pages:', error)
      }
    }

    return sitemap
  }

  generateXMLSitemap(sitemap: MetadataRoute.Sitemap): string {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified.toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`

    return xml
  }

  generateRobotsTxt(sitemapUrl: string): string {
    return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`
  }

  async saveSitemap(sitemap: MetadataRoute.Sitemap, outputPath: string): Promise<void> {
    const xml = this.generateXMLSitemap(sitemap)
    
    if (typeof window !== 'undefined') {
      // Client-side: download the sitemap
      const blob = new Blob([xml], { type: 'application/xml' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'sitemap.xml'
      a.click()
      URL.revokeObjectURL(url)
    } else {
      // Server-side: write to file
      const fs = await import('fs')
      fs.writeFileSync(outputPath, xml)
    }
  }
}

// Default sitemap generator
export const sitemapGenerator = new SitemapGenerator({
  baseUrl: 'https://ziontechgroup.com',
  staticPages: [
    '',
    '/services',
    '/contact',
    '/ai-solutions',
    '/it-services',
    '/about',
    '/blog',
    '/privacy-policy',
    '/terms-of-service'
  ],
  changeFrequency: 'monthly',
  priority: 0.8
})

// Utility function to generate sitemap
export const generateSitemap = async (): Promise<MetadataRoute.Sitemap> => {
  return sitemapGenerator.generateSitemap()
}

// Utility function to generate XML sitemap
export const generateXMLSitemap = async (): Promise<string> => {
  const sitemap = await sitemapGenerator.generateSitemap()
  return sitemapGenerator.generateXMLSitemap(sitemap)
}

// Utility function to generate robots.txt
export const generateRobotsTxt = (): string => {
  return sitemapGenerator.generateRobotsTxt('https://ziontechgroup.com/sitemap.xml')
}