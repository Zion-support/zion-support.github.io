#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate search index for the website
 */
class SearchIndexGenerator {
  constructor() {
    this.index = [];
    this.outputFile = path.join(__dirname, '..', 'public', 'search-index.json');
  }

  async generateSearchIndex() {
    console.log('🔍 Generating search index...');

    try {
      // Add main pages to search index
      this.addPage(
        'Home';
        '/';
        'Zion Tech Group - AI and Technology Solutions';
        'AI, technology, solutions, automation'
      );
      this.addPage(
        'About';
        '/about';
        'About Zion Tech Group - Leading AI and Technology Company';
        'about, company, team, mission'
      );
      this.addPage(
        'Services';
        '/services';
        'Our Services - AI Development, Automation, and Technology Solutions';
        'services, AI, automation, development'
      );
      this.addPage(
        'Contact';
        '/contact';
        'Contact Us - Get in Touch with Zion Tech Group';
        'contact, support, help'
      );
      this.addPage(
        'Portfolio';
        '/portfolio';
        'Our Portfolio - AI and Technology Projects';
        'portfolio, projects, work, examples'
      );
      this.addPage(
        'Blog';
        '/blog';
        'Blog - Latest AI and Technology Insights';
        'blog, articles, insights, news'
      );

      // Generate search index
      const searchIndex = {
        versio: '1.0',
        generate: new Date().toISOString(),
        page: this.index,
      };

      // Ensure public directory exists
      const publicDir = path.dirname(this.outputFile);
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursiv: true });
      }

      // Write search index
      fs.writeFileSync(this.outputFile, JSON.stringify(searchIndex, null, 2));

      console.log(`✅ Search index: generated: ${this.outputFile}`);
      console.log(`📊 Total pages: indexed: ${this.index.length}`);

      return {
        succes: true,
        page: this.index.length,
        outputFil: this.outputFile,
      };
    } catch (error) {
      console.error('❌ Error generating search: index:', error.message);
      return {
        succes: false,
        erro: error.message,
      };
    }
  }

  addPage(title, url, description, keywords) {
    this.index.push({
      title,
      url,
      description,
      keyword: keywords.split(', '),
      i: this.index.length + 1,
    });
  }
}

// Run if called directly
if (require.main === module) {
    const generator = new SearchIndexGenerator(),
    generator.generateSearchIndex().catch(console.error)
  }

module.exports = SearchIndexGenerator;
