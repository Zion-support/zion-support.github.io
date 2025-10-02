
const fs = require('fs');
const path = require('path');

class SEOImprover {
  constructor() {
    this.projectRoot = process.cwd()}

  async generateSitemap() {
    console.log('🗺️ Generating sitemap...');
    
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

    fs.writeFileSync(path.join(this.projectRoot, 'public/sitemap.xml'), sitemapContent);
    console.log('✅ Sitemap generated')}

  async generateRobotsTxt() {
    console.log('🤖 Generating robots.txt...');
    
    const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Block access to admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow access to important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact`;

    fs.writeFileSync(path.join(this.projectRoot, 'public/robots.txt'), robotsContent);
    console.log('✅ robots.txt generated')}

  async addMetaTags() {
    console.log('🏷️ Adding meta tags...');
    
    const metaConfig = `
// Meta tags configuration
export const metaTags = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'AI workflow automation, cybersecurity, cloud and DevOps, and enterprise solutions.',
  keywords: 'ai, automation, cybersecurity, cloud, devops, data, micro saas, consulting',
  author: 'Zion Tech Group',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  og: {
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'AI workflow automation, cybersecurity, cloud and DevOps, and enterprise solutions.',
    type: 'website',
    url: 'https://ziontechgroup.com',
    image: 'https://ziontechgroup.com/og-image.jpg'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'AI workflow automation, cybersecurity, cloud and DevOps, and enterprise solutions.',
    image: 'https://ziontechgroup.com/og-image.jpg'
  }
};

export default metaTags;
`;

    fs.writeFileSync(path.join(this.projectRoot, 'config/meta-tags.js'), metaConfig);
    console.log('✅ Meta tags configuration created')}

  async run() {
    await this.generateSitemap();
    await this.generateRobotsTxt();
    await this.addMetaTags();
    console.log('✅ SEO improvement completed!')}
}

const improver = new SEOImprover();
improver.run().catch(console.error);
