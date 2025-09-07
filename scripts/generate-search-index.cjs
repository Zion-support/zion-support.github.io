#!/usr/bin/env node
/**
 * Search Index Generator
 * Generates search index for the application
 */

const fs = require('fs');
const path = require('path');

class SearchIndexGenerator {
  constructor() {
    this.outputFile = path.join(process.cwd(), 'public', 'search-index.json');
    this.pages = [];
  }

  generateIndex() {
    try {
      console.log('🔍 Generating search index...');

      // Add main pages
      this.addPage('/', 'Home', 'Zion Tech Group - AI and IT Solutions');
      this.addPage('/about', 'About Us', 'Learn about Zion Tech Group and our mission');
      this.addPage('/services', 'Services', 'Our AI and IT services');
      this.addPage('/solutions', 'Solutions', 'Technology solutions for your business');
      this.addPage('/products', 'Products', 'Our technology products');
      this.addPage('/contact', 'Contact', 'Get in touch with us');
      this.addPage('/blog', 'Blog', 'Latest news and insights');

      // Generate JSON
      const index = {
        pages: this.pages,
        generated: new Date().toISOString(),
        total: this.pages.length
      };

      // Ensure public directory exists
      const publicDir = path.dirname(this.outputFile);
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      // Write index
      fs.writeFileSync(this.outputFile, JSON.stringify(index, null, 2));

      console.log(`✅ Search index generated: ${this.outputFile}`);
      console.log(`📊 Total pages: ${this.pages.length}`);

      return {
        success: true,
        pages: this.pages.length,
        outputFile: this.outputFile,
      };
    } catch (error) {
      console.error('❌ Error generating search index:', error.message);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  addPage(url, title, description) {
    this.pages.push({
      url,
      title,
      description,
      keywords: this.extractKeywords(title, description)
    });
  }

  extractKeywords(title, description) {
    const text = `${title} ${description}`.toLowerCase();
    const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'a', 'an'];
    const words = text.split(/\W+/).filter(word => 
      word.length > 2 && !commonWords.includes(word)
    );
    return [...new Set(words)].slice(0, 10);
  }
}

// Run if called directly
if (require.main === module) {
  const generator = new SearchIndexGenerator();
  generator.generateIndex();
}

module.exports = SearchIndexGenerator;