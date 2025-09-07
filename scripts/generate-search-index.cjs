#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class SearchIndexGenerator {
  constructor() {
    this.outputFile = path.join(process.cwd(), 'public', 'search-index.json');
    this.pages = [];
  }

  async generateSearchIndex() {
    console.log('🔍 Generating search index...');
    try {
      // Add main pages with searchable content
      this.addPage('/', 'Zion Tech Group - AI-Powered Solutions', 'Leading AI and technology solutions provider');
      this.addPage('/about', 'About Us - Zion Tech Group', 'Learn about our mission and team');
      this.addPage('/services', 'Our Services - AI Solutions', 'Comprehensive AI and technology services');
      this.addPage('/contact', 'Contact Us - Zion Tech Group', 'Get in touch with our team');
      this.addPage('/portfolio', 'Portfolio - Our Work', 'View our successful projects and case studies');
      this.addPage('/blog', 'Blog - Tech Insights', 'Latest insights and updates from our team');
      
      // Generate search index
      const index = this.generateIndex();
      
      // Ensure public directory exists
      const publicDir = path.dirname(this.outputFile);
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      
      // Write search index
      fs.writeFileSync(this.outputFile, JSON.stringify(index, null, 2));
      console.log(`✅ Search index generated: ${this.outputFile}`);
      console.log(`📊 Total pages indexed: ${this.pages.length}`);
      
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
      keywords: this.extractKeywords(title, description),
      lastModified: new Date().toISOString()
    });
  }

  extractKeywords(title, description) {
    const text = `${title} ${description}`.toLowerCase();
    const keywords = text
      .split(/\s+/)
      .filter(word => word.length > 3)
      .filter(word => !['the', 'and', 'for', 'are', 'with', 'this', 'that', 'from', 'they', 'have', 'been', 'were', 'said', 'each', 'which', 'their', 'time', 'will', 'about', 'there', 'when', 'your', 'can', 'said', 'she', 'use', 'her', 'many', 'some', 'these', 'would', 'other', 'into', 'has', 'more', 'very', 'what', 'know', 'just', 'first', 'get', 'over', 'think', 'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'life', 'only', 'new', 'way', 'may', 'say', 'each', 'which', 'do', 'its', 'time', 'will', 'about', 'if', 'up', 'out', 'many', 'then', 'them', 'can', 'only', 'other', 'new', 'some', 'what', 'time', 'there', 'very', 'when', 'much', 'then', 'them', 'can', 'only', 'other', 'new', 'some', 'what', 'time', 'there', 'very', 'when', 'much'].includes(word));
    
    return [...new Set(keywords)].slice(0, 10);
  }

  generateIndex() {
    return {
      version: '1.0',
      generated: new Date().toISOString(),
      pages: this.pages
    };
  }
}

// Run if called directly
if (require.main === module) {
  const generator = new SearchIndexGenerator();
  generator.generateSearchIndex().catch(console.error);
}

module.exports = SearchIndexGenerator;