#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class SEOImprover {
  constructor() {
    this.projectRoot = process.cwd();
    this.publicDir = path.join(this.projectRoot, 'public');
    if (!fs.existsSync(this.publicDir)) {
      fs.mkdirSync(this.publicDir, { recursive: true });
    }
  }

  generateSitemap() {
    const now = new Date().toISOString();
    const urls = ['/', '/about', '/services', '/contact'];
    const entries = urls
      .map((u) => (
        `  <url>\n` +
        `    <loc>https://bolt.new.zion.app${u}</loc>\n` +
        `    <lastmod>${now}</lastmod>\n` +
        `    <changefreq>${u === '/' ? 'daily' : 'weekly'}</changefreq>\n` +
        `    <priority>${u === '/' ? '1.0' : '0.8'}</priority>\n` +
        `  </url>`
      ))
      .join('\n');
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
    fs.writeFileSync(path.join(this.publicDir, 'sitemap.xml'), xml, 'utf8');
  }

  generateRobotsTxt() {
    const robots = [
      'User-agent: *',
      'Allow: /',
      'Sitemap: https://bolt.new.zion.app/sitemap.xml',
      '# Disallow private areas',
      'Disallow: /admin',
      'Disallow: /api',
      'Disallow: /_next',
      'Disallow: /private'
    ].join('\n');
    fs.writeFileSync(path.join(this.publicDir, 'robots.txt'), robots, 'utf8');
  }

  writeMetaConfig() {
    const meta = {
      title: 'Bolt.new Zion App - Advanced Web Development Solutions',
      description: 'Professional web development services with cutting-edge technology and innovative solutions.',
      keywords: 'web development, react, vite, typescript, performance, seo',
      author: 'Zion Tech Group',
      viewport: 'width=device-width, initial-scale=1',
      robots: 'index, follow',
      og: {
        title: 'Bolt.new Zion App - Advanced Web Development Solutions',
        description: 'Professional web development services with cutting-edge technology and innovative solutions.',
        type: 'website',
        url: 'https://bolt.new.zion.app',
        image: 'https://bolt.new.zion.app/og-image.jpg'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Bolt.new Zion App - Advanced Web Development Solutions',
        description: 'Professional web development services with cutting-edge technology and innovative solutions.',
        image: 'https://bolt.new.zion.app/og-image.jpg'
      }
    };
    const configDir = path.join(this.projectRoot, 'config');
    if (!fs.existsSync(configDir)) fs.mkdirSync(configDir, { recursive: true });
    const content = 'module.exports = ' + JSON.stringify(meta, null, 2) + '\n';
    fs.writeFileSync(path.join(configDir, 'meta-tags.js'), content, 'utf8');
  }

  run() {
    this.generateSitemap();
    this.generateRobotsTxt();
    this.writeMetaConfig();
    process.stdout.write('SEO improvements completed\n');
  }
}

if (require.main === module) {
  new SEOImprover().run();
}
