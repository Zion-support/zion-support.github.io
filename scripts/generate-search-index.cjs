#!/usr/bin/env node
/**
 * Search Index Generator;
 * Generates search index for the application;
 */

const fs = require('fs');
const path = require('path');
class SearchIndexGenerator {
  constructor() {
    this.pages = [];
  }

  generateIndex() {
    try {
      const pages = [
        {
          url: '/',
          title: 'Home',
          description: 'Zion Tech Group - Homepage'
        },
        {
          url: '/about',
          title: 'About',
          description: 'About Zion Tech Group'
        },
        {
          url: '/contact',
          title: 'Contact',
          description: 'Contact Zion Tech Group'
        }
      ];

      const searchIndex = {
        pages: pages,
        generatedAt: new Date().toISOString()
      };

      const indexPath = path.join(process.cwd(), 'public', 'search-index.json');
      fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2));
      
      console.log('✅ Search index generated successfully');
      return { success: true };
    } catch (error) {
      console.error('❌ Error generating search index:', error.message);
      return { success: false, error: error.message };
    }
  }
}

const generator = new SearchIndexGenerator();
generator.generateIndex();