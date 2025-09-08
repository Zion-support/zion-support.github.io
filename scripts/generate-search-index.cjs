#!/usr/bin/env node

<<<<<<< HEAD
=======
=======
=======


const fs = require('fs');
const path = require('path');

/**
 * Generate search index for the application
 */




>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
/**
 * Search Index Generator;
 * Generates search index for the application;
 */

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======



>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
class SearchIndexGenerator {
  // TODO: Implement
}
  constructor() {
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
=======

    this.index = {
      pages: [],
      metadata: {
        generated: new Date().toISOString(),
        version: '1.0.0'
      }
    };
  }

  async discoverContent() {
    const pagesDir = path.join(process.cwd(), 'pages');
    const appDir = path.join(process.cwd(), 'app');
    const componentsDir = path.join(process.cwd(), 'components');
    
    // Scan pages
    if (fs.existsSync(appDir)) {
      await this.scanAppDirectory(appDir, '');
    } else if (fs.existsSync(pagesDir)) {
      await this.scanPagesDirectory(pagesDir, '');
    }
    
    // Scan components for documentation
    if (fs.existsSync(componentsDir)) {
      await this.scanComponentsDirectory(componentsDir);
    }
    
    // Add static content
    this.addStaticContent();
  }

  async scanAppDirectory(dir, basePath) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const relativePath = path.join(basePath, item.name);
      
      if (item.isDirectory()) {
        await this.scanAppDirectory(fullPath, relativePath);
      } else if (item.name === 'page.js' || item.name === 'page.tsx' || item.name === 'page.ts') {
        const route = relativePath.replace(/\/page\.(js|tsx|ts)$/, '') || '/';
        await this.indexPage(fullPath, route);
      }
    }
  }

  async scanPagesDirectory(dir, basePath) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const relativePath = path.join(basePath, item.name);
      
      if (item.isDirectory()) {
        await this.scanPagesDirectory(fullPath, relativePath);
      } else if (item.name.endsWith('.js') || item.name.endsWith('.tsx') || item.name.endsWith('.ts')) {
        if (item.name !== 'index.js' && item.name !== 'index.tsx' && item.name !== 'index.ts') {
          const route = '/' + relativePath.replace(/\.(js|tsx|ts)$/, '');
          await this.indexPage(fullPath, route);
        } else if (basePath) {
          const route = '/' + basePath.replace(/\/$/, '');
          await this.indexPage(fullPath, route);
        } else {
          await this.indexPage(fullPath, '/');
        }
      }
    }
  }

  async scanComponentsDirectory(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        await this.scanComponentsDirectory(fullPath);
      } else if (item.name.endsWith('.js') || item.name.endsWith('.tsx') || item.name.endsWith('.ts')) {
        await this.indexComponent(fullPath, item.name);
      }
    }
  }

  async indexPage(filePath, route) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const title = this.extractTitle(content, route);
      const description = this.extractDescription(content);
      const keywords = this.extractKeywords(content);
      
      this.index.pages.push({
        url: route,
        title: title,
        description: description,
        keywords: keywords,
        type: 'page',
        lastModified: new Date().toISOString(),
        filePath: filePath
      });
    } catch (error) {
      console.warn(`Warning: Could not index page ${filePath}:`, error.message);
    }
  }

  async indexComponent(filePath, fileName) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const componentName = fileName.replace(/\.(js|tsx|ts)$/, '');
      const description = this.extractDescription(content);
      const keywords = this.extractKeywords(content);
      
      this.index.pages.push({
        url: `/components/${componentName}`,
        title: `${componentName} Component`,
        description: description || `React component: ${componentName}`,
        keywords: [...keywords, 'component', 'react'],
        type: 'component',
        lastModified: new Date().toISOString(),
        filePath: filePath
      });
    } catch (error) {
      console.warn(`Warning: Could not index component ${filePath}:`, error.message);
    }
  }

  extractTitle(content, route) {
    // Try to extract title from various sources
    const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i) ||
                      content.match(/title:\s*['"`]([^'"`]+)['"`]/i) ||
                      content.match(/<h1[^>]*>([^<]+)<\/h1>/i) ||
                      content.match(/<h2[^>]*>([^<]+)<\/h2>/i);
    
    if (titleMatch) {
      return titleMatch[1].trim();
    }
    
    // Fallback to route-based title
    return route === '/' ? 'Home' : route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  extractDescription(content) {
    const descMatch = content.match(/<meta[^>]*name=['"`]description['"`][^>]*content=['"`]([^'"`]+)['"`]/i) ||
                     content.match(/description:\s*['"`]([^'"`]+)['"`]/i);
    
    return descMatch ? descMatch[1].trim() : '';
  }

  extractKeywords(content) {
    const keywords = [];
    
    // Extract from meta keywords
    const metaKeywords = content.match(/<meta[^>]*name=['"`]keywords['"`][^>]*content=['"`]([^'"`]+)['"`]/i);
    if (metaKeywords) {
      keywords.push(...metaKeywords[1].split(',').map(k => k.trim()));
    }
    
    // Extract from content (simple keyword extraction)
    const words = content.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 3)
      .filter(word => !['this', 'that', 'with', 'from', 'they', 'been', 'have', 'were', 'said', 'each', 'which', 'their', 'time', 'will', 'about', 'there', 'could', 'other', 'after', 'first', 'well', 'also', 'where', 'much', 'some', 'very', 'when', 'here', 'just', 'into', 'over', 'think', 'also', 'back', 'then', 'these', 'two', 'more', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'two', 'more', 'go', 'no', 'way', 'could', 'my', 'than', 'first', 'water', 'been', 'call', 'who', 'oil', 'its', 'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part'].includes(word));
    
    // Get most common words
    const wordCount = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
    
    const commonWords = Object.entries(wordCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([word]) => word);
    
    keywords.push(...commonWords);
    
    return [...new Set(keywords)]; // Remove duplicates
  }

  addStaticContent() {
    const staticPages = [
      {
        url: '/',
        title: 'Zion Tech Group - Home',
        description: 'Zion Tech Group - Leading technology solutions and services',
        keywords: ['technology', 'solutions', 'services', 'zion', 'tech', 'group'],
        type: 'page'
      },
      {
        url: '/about',
        title: 'About Zion Tech Group',
        description: 'Learn about Zion Tech Group and our mission to provide innovative technology solutions',
        keywords: ['about', 'company', 'mission', 'team', 'history'],
        type: 'page'
      },
      {
        url: '/services',
        title: 'Our Services',
        description: 'Comprehensive technology services and solutions offered by Zion Tech Group',
        keywords: ['services', 'solutions', 'technology', 'consulting', 'development'],
        type: 'page'
      },
      {
        url: '/contact',
        title: 'Contact Us',
        description: 'Get in touch with Zion Tech Group for your technology needs',
        keywords: ['contact', 'support', 'help', 'inquiry', 'reach'],
        type: 'page'
      }
    ];

    for (const page of staticPages) {
      if (!this.index.pages.find(p => p.url === page.url)) {
        this.index.pages.push({
          ...page,
          lastModified: new Date().toISOString()
        });
      }
    }
  }

  async generate() {
    console.log('🔍 Generating search index...');
    
    try {
      await this.discoverContent();
      
      const indexPath = path.join(process.cwd(), 'public', 'search-index.json');
      fs.writeFileSync(indexPath, JSON.stringify(this.index, null, 2));
      
      console.log(`✅ Search index generated successfully: ${indexPath}`);
      console.log(`📊 Total indexed items: ${this.index.pages.length}`);
      
      return {
        success: true,
        items: this.index.pages.length,
        path: indexPath
      };
    } catch (error) {
      console.error('❌ Error generating search index:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }
}





// Run the search index generator
if (require.main === module) {
  const generator = new SearchIndexGenerator();
  generator.generate().catch(console.error);
}

module.exports = SearchIndexGenerator;


module.exports = SearchIndexGenerator;



  generateIndex() {
    try {
  // TODO: Implement
      const pages = [
        {

      return { success: false, error: error.message };

const generator = new SearchIndexGenerator();
generator.generateIndex();


>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
