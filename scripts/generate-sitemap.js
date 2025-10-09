#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Sitemap generator for Zion Tech Group website
 * Generates XML sitemap for better SEO
 */

class SitemapGenerator {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.appPath = path.join(process.cwd(), 'app');
    this.sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    this.pages = [];
  }

  async generate() {
    console.log('🗺️ Generating sitemap...');
    
    try {
      // Discover all pages
      await this.discoverPages();
      
      // Generate sitemap XML
      const sitemap = this.generateXML();
      
      // Ensure public directory exists
      const publicDir = path.dirname(this.sitemapPath);
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      
      // Write sitemap
      fs.writeFileSync(this.sitemapPath, sitemap);
      
      console.log(`✅ Sitemap generated: ${this.sitemapPath}`);
      console.log(`📄 Pages included: ${this.pages.length}`);
      
    } catch (error) {
      console.error('❌ Sitemap generation failed:', error.message);
      process.exit(1);
    }
  }

  async discoverPages() {
    // Add main pages
    this.addPage('/', 1.0, 'daily');
    this.addPage('/about', 0.8, 'weekly');
    this.addPage('/contact', 0.9, 'monthly');
    this.addPage('/services', 0.9, 'weekly');
    this.addPage('/privacy', 0.3, 'yearly');
    this.addPage('/terms', 0.3, 'yearly');
    
    // Add AI service pages
    const aiServices = [
      'ai-services',
      'ai-marketing',
      'ai-automation',
      'ai-healthcare',
      'ai-fintech',
      'ai-content-generation',
      'ai-customer-support',
      'ai-cybersecurity',
      'ai-data-analytics',
      'ai-data-visualization',
      'ai-document-processing',
      'ai-ecommerce-solutions',
      'ai-lead-generation',
      'ai-mobile-app-development',
      'ai-sales-automation',
      'ai-workflow-automation'
    ];
    
    aiServices.forEach(service => {
      this.addPage(`/${service}`, 0.8, 'weekly');
    });
    
    // Add other service pages
    const otherServices = [
      'quantum-computing',
      'autonomous-systems',
      'blockchain',
      'blockchain-web3',
      'business-intelligence',
      'cloud-services',
      'cybersecurity',
      'devops',
      'it-infrastructure',
      'it-services',
      'micro-saas',
      'productivity',
      'robotics',
      'security'
    ];
    
    otherServices.forEach(service => {
      this.addPage(`/${service}`, 0.7, 'weekly');
    });
    
    // Add utility pages
    const utilityPages = [
      'careers',
      'team',
      'case-studies',
      'blog',
      'news',
      'support',
      'status',
      'sla',
      'compliance',
      'gdpr'
    ];
    
    utilityPages.forEach(page => {
      this.addPage(`/${page}`, 0.6, 'monthly');
    });
  }

  addPage(path, priority, changefreq) {
    this.pages.push({
      path,
      priority,
      changefreq,
      lastmod: new Date().toISOString().split('T')[0]
    });
  }

  generateXML() {
    const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    const footer = `</urlset>`;

    const urls = this.pages.map(page => `  <url>
    <loc>${this.baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n');

    return `${header}\n${urls}\n${footer}`;
  }
}

// Run the sitemap generator
if (import.meta.url === `file://${process.argv[1]}`) {
  const generator = new SitemapGenerator();
  generator.generate().catch(console.error);
}

export default SitemapGenerator;