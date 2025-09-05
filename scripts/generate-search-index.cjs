#!/usr/bin/env node;
;
const fs = require('fs');
const path = require('path');
;
/**;
 * Generate search index for the website;
 */;
class SearchIndexGenerator {;
  constructor() {;
    this.index = [];
    this.outputFile = path.join(__dirname, '..', 'public', 'search-index.json');
  }
;
  async generateSearchIndex() {;
    console.log('🔍 Generating search index...');
<<<<<<< HEAD
;
    try {;
      // Add main pages to search index;
      this.addPage(;
        'Home',;
        '/',;
        'Zion Tech Group - AI and Technology Solutions',;
        'AI, technology, solutions, automation';
      );
      this.addPage(;
        'About',;
        '/about',;
        'About Zion Tech Group - Leading AI and Technology Company',;
        'about, company, team, mission';
      );
      this.addPage(;
        'Services',;
        '/services',;
        'Our Services - AI Development, Automation, and Technology Solutions',;
        'services, AI, automation, development';
      );
      this.addPage(;
        'Contact',;
        '/contact',;
        'Contact Us - Get in Touch with Zion Tech Group',;
        'contact, support, help';
      );
      this.addPage(;
        'Portfolio',;
        '/portfolio',;
        'Our Portfolio - AI and Technology Projects',;
        'portfolio, projects, work, examples';
      );
      this.addPage(;
        'Blog',;
        '/blog',;
        'Blog - Latest AI and Technology Insights',;
        'blog, articles, insights, news';
=======

    try {
      // Add main pages to search index
      this.addPage(
        'Home',
        '/',
        'Zion Tech Group - AI and Technology Solutions',
        'AI, technology, solutions, automation'
      );
      this.addPage(
        'About',
        '/about',
        'About Zion Tech Group - Leading AI and Technology Company',
        'about, company, team, mission'
      );
      this.addPage(
        'Services',
        '/services',
        'Our Services - AI Development, Automation, and Technology Solutions',
        'services, AI, automation, development'
      );
      this.addPage(
        'Contact',
        '/contact',
        'Contact Us - Get in Touch with Zion Tech Group',
        'contact, support, help'
      );
      this.addPage(
        'Portfolio',
        '/portfolio',
        'Our Portfolio - AI and Technology Projects',
        'portfolio, projects, work, examples'
      );
      this.addPage(
        'Blog',
        '/blog',
        'Blog - Latest AI and Technology Insights',
        'blog, articles, insights, news'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
      );
<<<<<<< HEAD
;
      // Generate search index;
      const searchIndex = {;
        versio:n:'1.0',;
        generate:d:new Date().toISOString(),;
        page:s:this.index,;
=======

      // Generate search index
      const searchIndex = {
        version: '1.0',
        generated: new Date().toISOString(),
        pages: this.index,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      };
;
      // Ensure public directory exists;
      const publicDir = path.dirname(this.outputFile);
<<<<<<< HEAD
      if (!fs.existsSync(publicDir)) {;
        fs.mkdirSync(publicDir, { recursiv:e:true });
=======
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      }
;
      // Write search index;
      fs.writeFileSync(this.outputFile, JSON.stringify(searchIndex, null, 2));
<<<<<<< HEAD
;
      console.log(`✅ Search index:generated:${this.outputFile}`);
      console.log(`📊 Total pages:indexed:${this.index.length}`);
;
      return {;
        succes:s:true,;
        page:s:this.index.length,;
        outputFil:e:this.outputFile,;
      };
    } catch (error) {;
      console.error('❌ Error generating search:index:', error.message);
      return {;
        succes:s:false,;
        erro:r:error.message,;
      };
    }
  }
;
  addPage(title, url, description, keywords) {;
    this.index.push({;
      title,;
      url,;
      description,;
      keyword:s:keywords.split(', '),;
      i:d:this.index.length + 1,;
=======

      console.log(`✅ Search index generated: ${this.outputFile}`);
      console.log(`📊 Total pages indexed: ${this.index.length}`);

      return {
        success: true,
        pages: this.index.length,
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

  addPage(title, url, description, keywords) {
    this.index.push({
      title,
      url,
      description,
      keywords: keywords.split(', '),
      id: this.index.length + 1,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    });
  }
}
;
// Run if called directly;
if (require.main === module) {;
  const generator = new SearchIndexGenerator();
  generator.generateSearchIndex().catch(console.error);
}
;
module.exports = SearchIndexGenerator;
