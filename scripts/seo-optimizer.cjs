#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
class SEOOptimizer {
  constructor() {
    this.projectRoot = process.cwd()
    this.seoEnhancements = []
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)
  }

  async createRobotsTxt() {
    this.log('🤖 Creating robots.txt...')
    try {
      const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Block access to admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow search engines to crawl important pages
Allow: /services/
Allow: /solutions/
Allow: /blog/
Allow: /about/
Allow: /contact/`
      fs.writeFileSync(path.join(this.projectRoot, 'public', 'robots.txt'), robotsContent)
      this.seoEnhancements.push('robots.txt created')
      this.log('✅ robots.txt created successfully')
    } catch (error) {
      this.log(`❌ Failed to create robots.txt: ${error.message}`)
    }
  }

  async createSitemap() {
    this.log('🗺️ Creating sitemap...')
    try {
      const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/solutions</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`
      fs.writeFileSync(path.join(this.projectRoot, 'public', 'sitemap.xml'), sitemapContent)
      this.seoEnhancements.push('sitemap.xml created')
      this.log('✅ sitemap.xml created successfully')
    } catch (error) {
      this.log(`❌ Failed to create sitemap: ${error.message}`)
    }
  }

  async createManifest() {
    this.log('📱 Creating web app manifest...')
    try {
      const manifestContent = {
        name: "Zion Tech Group",
        short_name: "Zion Tech",
        description: "Leading technology solutions provider for modern businesses",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#3b82f6",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
      fs.writeFileSync(
        path.join(this.projectRoot, 'public', 'manifest.json'),
        JSON.stringify(manifestContent, null, 2)
      )
      this.seoEnhancements.push('manifest.json created')
      this.log('✅ manifest.json created successfully')
    } catch (error) {
      this.log(`❌ Failed to create manifest: ${error.message}`)
    }
  }

  async run() {
    this.log('🚀 Starting SEO optimization...')
    await this.createRobotsTxt()
    await this.createSitemap()
    await this.createManifest()
    this.log(`✅ SEO optimization completed. Enhancements: ${this.seoEnhancements.join(', ')}`)
  }
}

// Run the SEO optimizer
const seoOptimizer = new SEOOptimizer()
seoOptimizer.run().catch(console.error)