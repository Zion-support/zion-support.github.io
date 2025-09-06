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
    this.indexPath = path.join(process.cwd(), 'public', 'search-index.json');
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async discoverPages() {
    this.log('🔍 Discovering pages for search index...');
    
    try {
      const pagesDir = path.join(process.cwd(), 'pages');
      if (fs.existsSync(pagesDir)) {
        this.scanDirectory(pagesDir, '');
      }
      
      // Add main pages with content
      this.addPage('/', 'Home', 'Zion Tech Group - AI-powered solutions and services', '1.0');
      this.addPage('/about', 'About Us', 'Learn about Zion Tech Group and our mission', '0.8');
      this.addPage('/services', 'Services', 'Our AI and technology services', '0.9');
      this.addPage('/contact', 'Contact', 'Get in touch with Zion Tech Group', '0.7');
      this.addPage('/portfolio', 'Portfolio', 'View our projects and case studies', '0.8');
      this.addPage('/blog', 'Blog', 'Latest news and insights from Zion Tech Group', '0.6');
      
      this.log(`📊 Found ${this.pages.length} pages for search index`);
    } catch (error) {
      this.log(`Error discovering pages: ${error.message}`, 'ERROR');
    }
  }

  scanDirectory(dir, basePath) {
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip special directories
          if (!['api', '_app', '_document', '_error'].includes(item)) {
            this.scanDirectory(fullPath, `${basePath}/${item}`);
          }
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {
          // Skip special files
          if (!['_app.js', '_app.jsx', '_app.ts', '_app.tsx', '_document.js', '_document.jsx', '_document.ts', '_document.tsx', '_error.js', '_error.jsx', '_error.ts', '_error.tsx'].includes(item)) {
            let pagePath = basePath;
            if (item === 'index.js' || item === 'index.jsx' || item === 'index.ts' || item === 'index.tsx') {
              // Index file
            } else {
              pagePath = `${basePath}/${item.replace(/\.(js|jsx|ts|tsx)$/, '')}`;
            }
            
            // Handle dynamic routes
            pagePath = pagePath.replace(/\[([^\]]+)\]/g, ':$1');
            
            this.pages.push({
              url: `${this.baseUrl}${pagePath}`,
              title: this.generateTitle(pagePath),
              description: this.generateDescription(pagePath),
              priority: pagePath === '' ? '1.0' : '0.8',
              lastmod: new Date().toISOString().split('T')[0]
            });
          }
        }
      });
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`, 'ERROR');
    }
  }

  addPage(url, title, description, priority) {
    this.pages.push({
      url: `${this.baseUrl}${url}`,
      title,
      description,
      priority,
      lastmod: new Date().toISOString().split('T')[0]
    });
  }

  generateTitle(pagePath) {
    if (pagePath === '') return 'Home';
    return pagePath.split('/').pop().replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  generateDescription(pagePath) {
    const descriptions = {
      '': 'Zion Tech Group - AI-powered solutions and services',
      'about': 'Learn about Zion Tech Group and our mission',
      'services': 'Our AI and technology services',
      'contact': 'Get in touch with Zion Tech Group',
      'portfolio': 'View our projects and case studies',
      'blog': 'Latest news and insights from Zion Tech Group'
    };
    
    return descriptions[pagePath] || `Page about ${this.generateTitle(pagePath)}`;
  }

  generateSearchIndex() {
    this.log('Generating search index...');
    
    const searchIndex = {
      version: '1.0',
      generated: new Date().toISOString(),
      pages: this.pages.map(page => ({
        url: page.url,
        title: page.title,
        description: page.description,
        priority: page.priority,
        lastmod: page.lastmod
      }))
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
      
      fs.writeFileSync(this.indexPath, JSON.stringify(searchIndex, null, 2));
      this.log(`Search index saved to ${this.indexPath}`, 'SUCCESS');
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