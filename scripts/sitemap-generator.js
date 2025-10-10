import fs from 'fs';
import path from 'path';

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

class SitemapGenerator {
  private baseUrl = 'https://ziontechgroup.com';
  private entries: SitemapEntry[] = [];

  addEntry(entry: SitemapEntry) {
    this.entries.push(entry);
  }

  addPage(path: string, options: Partial<Omit<SitemapEntry, 'url'>> = {}) {
    this.addEntry({
      url: `${this.baseUrl}${path}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.8,
      ...options
    });
  }

  generate() {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${this.entries.map(entry => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('')}
</urlset>`;

    return sitemap;
  }

  saveToFile(filePath: string) {
    const sitemap = this.generate();
    fs.writeFileSync(filePath, sitemap);
  }
}

// Generate sitemap for all pages
const generator = new SitemapGenerator();

// Main pages
generator.addPage('/', { priority: 1.0, changefreq: 'daily' });
generator.addPage('/about', { priority: 0.9 });
generator.addPage('/services', { priority: 0.9 });
generator.addPage('/contact', { priority: 0.8 });
generator.addPage('/enterprise', { priority: 0.8 });

// AI Services
const aiServices = [
  'ai-analytics', 'ai-automation', 'ai-business-intelligence', 'ai-chatbot-builder',
  'ai-code-generation', 'ai-content-generation', 'ai-content-writer', 'ai-crm',
  'ai-customer-support', 'ai-cybersecurity', 'ai-data-analytics', 'ai-data-visualization',
  'ai-document-processing', 'ai-ecommerce-solutions', 'ai-email-assistant', 'ai-email-marketing',
  'ai-fashion-design', 'ai-financial-analyzer', 'ai-fintech', 'ai-fitness-coach',
  'ai-fraud-detection', 'ai-healthcare', 'ai-lead-generation', 'ai-marketing',
  'ai-mobile-app-development', 'ai-music-composition', 'ai-project-manager', 'ai-sales-automation',
  'ai-scheduler', 'ai-seo-optimizer', 'ai-social-media-manager', 'ai-video-generation',
  'ai-voice-cloning', 'ai-workflow-automation', 'ai-writing-assistant'
];

aiServices.forEach(service => {
  generator.addPage(`/${service}`, { priority: 0.7 });
});

// IT Services
const itServices = [
  'it-services', 'it-consulting', 'it-infrastructure', 'it-support',
  'cloud-services', 'cybersecurity', 'devops', 'web-development',
  'mobile-development', 'database-services', 'network-infrastructure'
];

itServices.forEach(service => {
  generator.addPage(`/${service}`, { priority: 0.7 });
});

// Other pages
const otherPages = [
  'analytics-tools', 'business-apps', 'case-studies', 'cloud-migration',
  'compliance', 'consultation', 'demo', 'developer-tools', 'docs',
  'expense-tracker', 'gdpr', 'machine-learning', 'marketing-tools',
  'micro-saas', 'news', 'privacy', 'terms'
];

otherPages.forEach(page => {
  generator.addPage(`/${page}`, { priority: 0.6 });
});

// Save sitemap
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

generator.saveToFile(path.join(publicDir, 'sitemap.xml'));
console.log('✅ Sitemap generated successfully');

export default SitemapGenerator;