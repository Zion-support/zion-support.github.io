#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate search index for the website
 */
class SearchIndexGenerator {
  constructor() {
    this.index = [];
    this.outputFile = path.join(process.cwd(), 'public', 'search-index.json');
  }

  /**
   * Add a page to the search index
   */
  addPage(title, url, description, keywords = '', content = '') {
    this.index.push({
      title,
      url: url.startsWith('/') ? url : `/${url}`,
      description,
      keywords: keywords.split(',').map(k => k.trim()),
      content: content.toLowerCase(),
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Generate search index with default pages
   */
  async generateSearchIndex() {
    console.log('🔍 Generating search index...');

    try {
      // Add main pages to search index
      this.addPage(
        'Home',
        '/',
        'Zion Tech Group - AI and Technology Solutions',
        'AI, technology, solutions, automation',
        'Welcome to Zion Tech Group, your partner in AI and technology solutions. We provide cutting-edge automation, AI development, and digital transformation services.'
      );

      this.addPage(
        'About Us',
        '/about',
        'About Zion Tech Group - Our Mission and Vision',
        'about, company, mission, vision, team',
        'Learn about Zion Tech Group\'s mission to revolutionize technology through AI and automation. Meet our team of experts and discover our vision for the future.'
      );

      this.addPage(
        'Services',
        '/services',
        'Our AI and Technology Services',
        'services, AI, automation, development, consulting',
        'Explore our comprehensive range of AI and technology services including automation, machine learning, web development, and digital transformation.'
      );

      this.addPage(
        'Contact',
        '/contact',
        'Contact Zion Tech Group',
        'contact, support, inquiry, get in touch',
        'Get in touch with Zion Tech Group for your AI and technology needs. We\'re here to help you transform your business with cutting-edge solutions.'
      );

      this.addPage(
        'Blog',
        '/blog',
        'Zion Tech Group Blog - Latest Insights',
        'blog, articles, insights, technology, AI',
        'Read our latest insights on AI, technology trends, automation, and digital transformation. Stay updated with industry news and best practices.'
      );

      // Scan for additional pages if they exist
      this.scanAdditionalPages();

      // Save the index
      await this.saveIndex();

      console.log(`✅ Search index generated with ${this.index.length} pages`);
      return true;

    } catch (error) {
      console.error('❌ Error generating search index:', error.message);
      return false;
    }
  }

  /**
   * Scan for additional pages in the app directory
   */
  scanAdditionalPages() {
    const appDir = path.join(process.cwd(), 'app');
    
    if (!fs.existsSync(appDir)) {
      return;
    }

    try {
      this.scanDirectory(appDir, '');
    } catch (error) {
      console.log('⚠️ Could not scan additional pages:', error.message);
    }
  }

  /**
   * Scan directory for pages
   */
  scanDirectory(dir, basePath) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const relativePath = path.join(basePath, item.name);
      
      if (item.isDirectory()) {
        // Skip special Next.js directories
        if (!['api', '_components', '_lib', '_utils', 'globals.css'].includes(item.name)) {
          this.scanDirectory(fullPath, relativePath);
        }
      } else if (item.name === 'page.tsx' || item.name === 'page.js') {
        // Found a page - add it to index
        const pagePath = basePath === '' ? '/' : `/${basePath}`;
        const title = this.generateTitleFromPath(basePath);
        const description = `Zion Tech Group - ${title}`;
        
        this.addPage(title, pagePath, description, 'technology, AI, automation');
      }
    }
  }

  /**
   * Generate title from path
   */
  generateTitleFromPath(path) {
    if (!path) return 'Home';
    
    return path
      .split('/')
      .map(segment => 
        segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      )
      .join(' - ');
  }

  /**
   * Save search index to file
   */
  async saveIndex() {
    try {
      // Ensure public directory exists
      const publicDir = path.dirname(this.outputFile);
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      const indexData = {
        version: '1.0',
        generated: new Date().toISOString(),
        pages: this.index,
        totalPages: this.index.length
      };

      fs.writeFileSync(this.outputFile, JSON.stringify(indexData, null, 2), 'utf8');
      console.log(`📄 Search index saved to: ${this.outputFile}`);
      
      return true;
    } catch (error) {
      console.error('❌ Error saving search index:', error.message);
      return false;
    }
  }

  /**
   * Run the search index generation
   */
  async run() {
    console.log('🚀 Starting search index generation...');
    
    const success = await this.generateSearchIndex();
    
    if (success) {
      console.log('✅ Search index generation completed successfully');
    } else {
      console.log('❌ Search index generation failed');
    }
    
    return success;
  }
}

// Run if called directly
if (require.main === module) {
  const generator = new SearchIndexGenerator();
  generator.run().catch(console.error);
}

module.exports = SearchIndexGenerator;