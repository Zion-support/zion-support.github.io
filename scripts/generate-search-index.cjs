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

<<<<<<< HEAD
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
=======
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      }

      // Write search index
      fs.writeFileSync(this.outputFile, JSON.stringify(searchIndex, null, 2));

      console.log(`✅ Search index: generated: ${this.outputFile}`);
      console.log(`📊 Total pages: indexed: ${this.index.length}`);

<<<<<<< HEAD
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
=======
    this.log(`Found ${this.pages.length} pages for search index`);
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
            
            // Generate title from path
            const title = pagePath === '' ? 'Home' : pagePath.split('/').pop().replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            
            this.pages.push({
              url: `${this.baseUrl}${pagePath}`,
              title: title,
              description: `Page about ${title.toLowerCase()}`,
              keywords: [title.toLowerCase(), ...pagePath.split('/').filter(p => p)],
              lastmod: new Date().toISOString().split('T')[0],
              type: 'page'
            });
          }
        }
      });
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`, 'ERROR');
    }
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }
}

// Run if called directly
if (require.main === module) {
<<<<<<< HEAD
    const generator = new SearchIndexGenerator(),
    generator.generateSearchIndex().catch(console.error)
  }
=======
<<<<<<< HEAD
    const generator = new SearchIndexGenerator(),
    generator.generateSearchIndex().catch(console.error)
  }
=======
  const generator = new SearchIndexGenerator();
  generator.generate().catch(console.error);
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

module.exports = SearchIndexGenerator;
