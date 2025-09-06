#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

/**
 * Generate search index for the website
 */
class SearchIndexGenerator {
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://zion.app';
    this.pages = [];
    this.searchIndexPath = path.join(process.cwd(), 'public', 'search-index.json');
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async discoverPages() {
    this.log('Discovering pages for search index...');
    
    // Common pages for a Next.js app
    const commonPages = [
      {
        path: '',
        title: 'Home',
        description: 'Zion Tech Group - Leading technology solutions and services',
        keywords: ['home', 'ztech', 'technology', 'solutions', 'services']
      },
      {
        path: '/about',
        title: 'About Us',
        description: 'Learn about Zion Tech Group and our mission to provide innovative technology solutions',
        keywords: ['about', 'company', 'mission', 'team', 'history']
      },
      {
        path: '/services',
        title: 'Our Services',
        description: 'Comprehensive technology services including web development, mobile apps, and cloud solutions',
        keywords: ['services', 'web development', 'mobile apps', 'cloud', 'solutions']
      },
      {
        path: '/contact',
        title: 'Contact Us',
        description: 'Get in touch with Zion Tech Group for your technology needs',
        keywords: ['contact', 'get in touch', 'support', 'help']
      },
      {
        path: '/blog',
        title: 'Blog',
        description: 'Latest insights and updates from Zion Tech Group',
        keywords: ['blog', 'news', 'insights', 'updates', 'articles']
      },
      {
        path: '/privacy',
        title: 'Privacy Policy',
        description: 'Privacy policy and data protection information',
        keywords: ['privacy', 'policy', 'data protection', 'legal']
      },
      {
        path: '/terms',
        title: 'Terms of Service',
        description: 'Terms and conditions for using our services',
        keywords: ['terms', 'conditions', 'legal', 'agreement']
      }
    ];

    this.pages = commonPages.map(page => ({
      url: `${this.baseUrl}${page.path}`,
      title: page.title,
      description: page.description,
      keywords: page.keywords,
      lastmod: new Date().toISOString().split('T')[0],
      type: 'page'
    }));

    this.log(`Found ${this.pages.length} pages for search index`);
  }

  generateSearchIndex() {
    this.log('Generating search index...');
    
    const searchIndex = {
      version: '1.0',
      generated: new Date().toISOString(),
      baseUrl: this.baseUrl,
      pages: this.pages,
      totalPages: this.pages.length
    };
    
    return searchIndex;
  }

  async saveSearchIndex(searchIndex) {
    try {
      // Ensure public directory exists
      const publicDir = path.join(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      
      fs.writeFileSync(this.searchIndexPath, JSON.stringify(searchIndex, null, 2));
      this.log(`Search index saved to ${this.searchIndexPath}`, 'SUCCESS');
    } catch (error) {
      this.log(`Error saving search index: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async generate() {
    try {
      this.log('🚀 Starting search index generation...');
      
      await this.discoverPages();
      const searchIndex = this.generateSearchIndex();
      await this.saveSearchIndex(searchIndex);
      
      this.log('✅ Search index generation completed successfully', 'SUCCESS');
    } catch (error) {
      this.log(`❌ Search index generation failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const generator = new SearchIndexGenerator();
  generator.generate().catch(console.error);
}

module.exports = SearchIndexGenerator;