import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

class ComprehensiveLinkAnalyzer {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.existingPages = new Set();
    this.referencedLinks = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
  }

  async analyze() {
    console.log('🔍 Starting comprehensive link analysis...');
    
    // Find all existing pages
    await this.findExistingPages();
    
    // Extract all referenced links
    await this.extractReferencedLinks();
    
    // Identify broken links and missing pages
    this.identifyIssues();
    
    // Generate report
    this.generateReport();
  }

  async findExistingPages() {
    console.log('📄 Finding existing pages...');
    
    const pageFiles = await glob('app/**/page.tsx', { cwd: '/workspace' });
    
    pageFiles.forEach(file => {
      // Convert file path to URL path
      const urlPath = this.filePathToUrl(file);
      this.existingPages.add(urlPath);
    });
    
    console.log(`Found ${this.existingPages.size} existing pages`);
  }

  async extractReferencedLinks() {
    console.log('🔗 Extracting referenced links...');
    
    const files = await glob('app/**/*.{tsx,ts,jsx,js}', { cwd: '/workspace' });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(path.join('/workspace', file), 'utf8');
        
        // Extract href attributes
        const hrefMatches = content.match(/href=["']([^"']+)["']/g) || [];
        hrefMatches.forEach(match => {
          const href = match.match(/href=["']([^"']+)["']/)[1];
          if (href.startsWith('/') && !href.startsWith('//')) {
            this.referencedLinks.add(href);
          }
        });
        
        // Extract to attributes (React Router)
        const toMatches = content.match(/to=["']([^"']+)["']/g) || [];
        toMatches.forEach(match => {
          const to = match.match(/to=["']([^"']+)["']/)[1];
          if (to.startsWith('/') && !to.startsWith('//')) {
            this.referencedLinks.add(to);
          }
        });
        
      } catch (error) {
        console.warn(`Warning: Could not read file ${file}: ${error.message}`);
      }
    }
    
    console.log(`Found ${this.referencedLinks.size} referenced links`);
  }

  filePathToUrl(filePath) {
    // Convert app/services/ai-services/page.tsx to /services/ai-services
    let urlPath = filePath
      .replace('app/', '/')
      .replace('/page.tsx', '')
      .replace('/page.ts', '');
    
    // Handle root page
    if (urlPath === '/page') {
      urlPath = '/';
    }
    
    return urlPath;
  }

  identifyIssues() {
    console.log('🔍 Identifying broken links and missing pages...');
    
    this.referencedLinks.forEach(link => {
      if (!this.existingPages.has(link)) {
        this.missingPages.push({
          link,
          type: 'missing-page',
          severity: 'high'
        });
      }
    });
    
    // Check for common missing pages
    const commonPages = [
      '/services',
      '/services/ai-services',
      '/services/micro-saas', 
      '/services/it-services',
      '/blog',
      '/case-studies',
      '/guides',
      '/enterprise',
      '/content-hub',
      '/about',
      '/contact',
      '/privacy',
      '/terms',
      '/security',
      '/sitemap'
    ];
    
    commonPages.forEach(page => {
      if (!this.existingPages.has(page)) {
        this.missingPages.push({
          link: page,
          type: 'missing-common-page',
          severity: 'critical'
        });
      }
    });
  }

  generateReport() {
    console.log('\n📋 COMPREHENSIVE LINK ANALYSIS REPORT');
    console.log('=====================================');
    
    console.log(`\n📊 Summary:`);
    console.log(`- Existing pages: ${this.existingPages.size}`);
    console.log(`- Referenced links: ${this.referencedLinks.size}`);
    console.log(`- Missing pages: ${this.missingPages.length}`);
    
    if (this.missingPages.length > 0) {
      console.log('\n❌ MISSING PAGES:');
      this.missingPages.forEach((page, index) => {
        console.log(`${index + 1}. ${page.link} (${page.type}, ${page.severity})`);
      });
    }
    
    // Group missing pages by type
    const criticalPages = this.missingPages.filter(p => p.severity === 'critical');
    const highPriorityPages = this.missingPages.filter(p => p.severity === 'high');
    
    if (criticalPages.length > 0) {
      console.log('\n🚨 CRITICAL MISSING PAGES (Must Create):');
      criticalPages.forEach(page => {
        console.log(`- ${page.link}`);
      });
    }
    
    if (highPriorityPages.length > 0) {
      console.log('\n⚠️ HIGH PRIORITY MISSING PAGES:');
      highPriorityPages.forEach(page => {
        console.log(`- ${page.link}`);
      });
    }
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        existingPages: this.existingPages.size,
        referencedLinks: this.referencedLinks.size,
        missingPages: this.missingPages.length,
        criticalMissing: criticalPages.length,
        highPriorityMissing: highPriorityPages.length
      },
      existingPages: Array.from(this.existingPages).sort(),
      referencedLinks: Array.from(this.referencedLinks).sort(),
      missingPages: this.missingPages,
      criticalPages: criticalPages,
      highPriorityPages: highPriorityPages
    };
    
    fs.writeFileSync('/workspace/comprehensive-link-analysis-report.json', JSON.stringify(report, null, 2));
    console.log('\n💾 Detailed report saved to: comprehensive-link-analysis-report.json');
    
    return report;
  }
}

// Run the analysis
async function main() {
  const analyzer = new ComprehensiveLinkAnalyzer();
  await analyzer.analyze();
}

main().catch(console.error);