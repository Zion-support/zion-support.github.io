import fs from 'fs';
import path from 'path';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

interface SitemapImage {
  loc: string;
  title?: string;
  caption?: string;
}

interface SitemapUrlWithImages extends SitemapUrl {
  image?: SitemapImage[];
}

class SitemapGenerator {
  private baseUrl: string;
  private urls: SitemapUrlWithImages[] = [];

  constructor(baseUrl: string = 'https://ziontechgroup.com') {
    this.baseUrl = baseUrl;
  }

  addUrl(url: SitemapUrlWithImages): void {
    this.urls.push({
      ...url,
      loc: url.loc.startsWith('http') ? url.loc : `${this.baseUrl}${url.loc}`
    });
  }

  addPage(page: string, options: Partial<SitemapUrl> = {}): void {
    const defaultOptions: SitemapUrl = {
      loc: page,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.8,
      ...options
    };

    this.addUrl(defaultOptions);
  }

  addImage(imageUrl: string, pageUrl: string, title?: string, caption?: string): void {
    const existingUrl = this.urls.find(url => url.loc === `${this.baseUrl}${pageUrl}`);
    
    if (existingUrl) {
      if (!existingUrl.image) {
        existingUrl.image = [];
      }
      
      existingUrl.image.push({
        loc: imageUrl.startsWith('http') ? imageUrl : `${this.baseUrl}${imageUrl}`,
        title,
        caption
      });
    }
  }

  generateSitemap(): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${this.urls.map(url => this.generateUrlEntry(url)).join('\n')}
</urlset>`;

    return sitemap;
  }

  private generateUrlEntry(url: SitemapUrlWithImages): string {
    let entry = `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>`;

    if (url.image && url.image.length > 0) {
      url.image.forEach(image => {
        entry += `\n    <image:image>
      <image:loc>${image.loc}</image:loc>`;
        
        if (image.title) {
          entry += `\n      <image:title>${this.escapeXml(image.title)}</image:title>`;
        }
        
        if (image.caption) {
          entry += `\n      <image:caption>${this.escapeXml(image.caption)}</image:caption>`;
        }
        
        entry += `\n    </image:image>`;
      });
    }

    entry += `\n  </url>`;
    return entry;
  }

  private escapeXml(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${this.baseUrl}/sitemap.xml
Sitemap: ${this.baseUrl}/sitemap-images.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /services/
Allow: /ai-*/
Allow: /it-*/
Allow: /contact/
Allow: /about/`;
  }

  async saveSitemap(outputPath: string): Promise<void> {
    const sitemap = this.generateSitemap();
    await fs.promises.writeFile(outputPath, sitemap, 'utf8');
  }

  async saveRobotsTxt(outputPath: string): Promise<void> {
    const robotsTxt = this.generateRobotsTxt();
    await fs.promises.writeFile(outputPath, robotsTxt, 'utf8');
  }

  // Generate sitemap for all pages
  generateAllPages(): void {
    // Main pages
    this.addPage('/', { priority: 1.0, changefreq: 'daily' });
    this.addPage('/services', { priority: 0.9, changefreq: 'weekly' });
    this.addPage('/contact', { priority: 0.9, changefreq: 'monthly' });
    this.addPage('/about', { priority: 0.8, changefreq: 'monthly' });

    // AI Services
    const aiServices = [
      'ai-project-manager',
      'ai-social-media-manager',
      'ai-analytics',
      'ai-email-marketing',
      'ai-customer-support-bot',
      'ai-code-generation',
      'ai-video-generation',
      'ai-voice-cloning',
      'ai-workflow-automation',
      'ai-fashion-design',
      'ai-music-composition',
      'ai-fitness-coach',
      'ai-sales-automation',
      'ai-data-visualization',
      'ai-3d-generation',
      'ai-customer-support',
      'ai-content-writer',
      'ai-inventory-manager',
      'ai-hr-assistant',
      'ai-financial-advisor',
      'ai-legal-assistant'
    ];

    aiServices.forEach(service => {
      this.addPage(`/${service}`, { priority: 0.8, changefreq: 'weekly' });
    });

    // IT Services
    const itServices = [
      'cloud-migration',
      'it-consulting',
      'cybersecurity',
      'devops',
      'database',
      'mobile-development',
      'web-development',
      'blockchain'
    ];

    itServices.forEach(service => {
      this.addPage(`/${service}`, { priority: 0.8, changefreq: 'weekly' });
    });

    // Add images
    this.addImage('/og-image.jpg', '/', 'Zion Tech Group - Advanced AI and IT Solutions', 'Leading provider of AI-powered enterprise solutions');
    this.addImage('/logo512.png', '/', 'Zion Tech Group Logo', 'Zion Tech Group company logo');
  }
}

export default SitemapGenerator;