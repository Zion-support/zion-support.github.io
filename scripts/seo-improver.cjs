<<<<<<< HEAD
const fs = require("child_process");"const path = require("path")class SEOImprover { constructor() { this.projectRoot = process.cwd()} async generateSitemap() {" console.log(" Generating sitemap.")" const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>"<urlset xmlns="http: /www.sitemaps.org/schemas/sitemap/0.9"> <url> <loc>https:/bolt.new.zion.app/</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>daily</changefreq> <priority>1.0</priority> </url> <url>" <loc>https: /bolt.new.zion.app/about</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>0.8</priority> </url> <url>" <loc>https: /bolt.new.zion.app/services</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>weekly</changefreq> <priority>0.8</priority> </url> <url>" <loc>https: /bolt.new.zion.app/contact</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>monthly</changefreq> <priority>0.6</priority> </url>`</urlset>`" fs.writeFileSync(path.join(this.projectRoot, "public/sitemap.xml"), sitemapContent)" console.log(" Sitemap generated")} async generateRobotsTxt() {" console.log(" Generating robots.txt.")" const robotsContent = "User-agent:Allow:Sitemap: https:/bolt.new.zion.app/sitemap.xml# Block access to admin areasDisallow: /adminDisallow: /apiDisallow: /_nextDisallow: /private# Allow access to important pagesAllow:Allow: /aboutAllow: /services"Allow: /contact"" fs.writeFileSync(path.join(this.projectRoot, "public/robots.txt"), robotsContent)" console.log(" robots.txt generated")} async addMetaTags() {" console.log(" Adding meta tags.")" const metaConfig = "/ Meta tags configurationmodule.exports = const metaTags = {" title: "Bolt.new Zion App - Advanced Web Development Solutions";" description: "Professional web development services with cutting-edge technology and innovative solutions.";" keywords: "web development, react, nextjs, typescript, full-stack development";" author: "Zion Tech Group";" viewport: "width=device-width, initial-scale=1";" robots: "index, follow";" og: {title: "Bolt.new Zion App - Advanced Web Development Solutions",description: "Professional web development services with cutting-edge technology and innovative solutions.",type: "website";" url: "https:/bolt.new.zion.app";" image: "https:/bolt.new.zion.app/og-image.jpg"};" twitter: {card: "summary_large_image",title: "Bolt.new Zion App - Advanced Web Development Solutions",description: "Professional web development services with cutting-edge technology and innovative solutions.";" image: "https:/bolt.new.zion.app/og-image.jpg"}}module.exports = default metaTags""" fs.writeFileSync(path.join(this.projectRoot, "config/meta-tags.js"), metaConfig)" console.log(" Meta tags configuration created")} async run() { await this.generateSitemap() await this.generateRobotsTxt() await this.addMetaTags()" console.log(" SEO improvement completed!")}}const improver = new SEOImprover()improver.run().catch(console.error)"`"`
const fs = require("child_process")
const path = require("path")
class SEOImprover {
  constructor() {
    this.projectRoot = process.cwd()}
  async generateSitemap() {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns=""http": //www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bolt.new.zion.app/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>"https": //bolt.new.zion.app/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>"https": //bolt.new.zion.app/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>"https": //bolt.new.zion.app/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`
    fs.writeFileSync(path.join(this.projectRoot, "public/sitemap.xml"), sitemapContent)
    }
  async generateRobotsTxt() {
    const robotsContent = "User-"agent": *
Allow: /
Sitemap: https://bolt.new.zion.app/sitemap.xml
# Block access to admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
# Allow access to important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact"
    fs.writeFileSync(path.join(this.projectRoot, "public/robots.txt"), robotsContent)
    }
  async addMetaTags() {
=======

const fs = require("child_process")
const path = require("path")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    console.log("� Generating sitemap...")
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"
<urlset xmlns=""http": //www.sitemaps.org/schemas/sitemap/0.9"
    <loc>"https"
    <loc>"https"
    <loc>"https"
    fs.writeFileSync(path.join(this.projectRoot, "public/sitemap.xml")
// console.log(" Sitemap generated")
    console.log("🤖 Generating robots.txt...")
    const robotsContent = "User-"agent"
Allow: /contact"
    fs.writeFileSync(path.join(this.projectRoot, "public/robots.txt")
// console.log(" robots.txt generated")
    console.log("� Adding meta tags...")
    const metaConfig = "
  "title": "Bolt.new Zion App - Advanced Web Development Solutions"
  description: "Professional web development services with cutting-edge technology and innovative solutions."
  keywords: "web development, react, nextjs, typescript, full-stack development"
  "author": "Zion Tech Group"
  viewport: "width=device-width, initial-scale=1"
  "robots": "index, follow"
  "og": {title: "Bolt.new Zion App - Advanced Web Development Solutions","description": "Professional web development services with cutting-edge technology and innovative solutions.","type": "website"}
    url: "https://bolt.new.zion.app"
    image: "https://bolt.new.zion.app/og-image.jpg"
  "twitter": {card: "summary_large_image","title": "Bolt.new Zion App - Advanced Web Development Solutions","description": "Professional web development services with cutting-edge technology and innovative solutions."}
    image: "https://bolt.new.zion.app/og-image.jpg"
"
<<<<<<< HEAD
    fs.writeFileSync(path.join(this.projectRoot, "config/meta-tags.js"), metaConfig)
    }
  async run() {
    await this.generateSitemap()
    await this.generateRobotsTxt()
    await this.addMetaTags()
    }
}
const improver = new SEOImprover()
improver.run().catch(console.error)
    fs.writeFileSync(path.join(this.projectRoot, "config/meta-tags.js")
// console.log(" Meta tags configuration created")
    console.log(" SEO improvement completed!")
=======
    fs.writeFileSync(path.join(this.projectRoot, "config/meta-tags.js")
// console.log(" Meta tags configuration created")
    console.log(" SEO improvement completed!")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
