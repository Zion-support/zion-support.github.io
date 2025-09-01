const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

class ComprehensiveLinkChecker {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.workingLinks = [];
    this.sitemapUrls = [];
    this.maxDepth = 3;
    this.currentDepth = 0;
    this.concurrency = 5;
    this.semaphore = this.concurrency;
  }

  async loadSitemap() {
    try {
      const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
      const $ = cheerio.load(sitemapContent, { xmlMode: true });
      
      $('url loc').each((i, elem) => {
        const url = $(elem).text().trim();
        this.sitemapUrls.push(url);
      });
      
      console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`);
    } catch (error) {
      console.error('Error loading sitemap:', error.message);
    }
  }

  async checkUrl(url, parentUrl = null, depth = 0) {
    if (this.visitedUrls.has(url) || depth > this.maxDepth) {
      return;
    }

    this.visitedUrls.add(url);
    
    try {
      console.log(`Checking: ${url} (depth: ${depth})`);
      
      const response = await axios.get(url, {
        timeout: 10000,
        validateStatus: (status) => status < 500
      });

      if (response.status === 200) {
        this.workingLinks.push({
          url,
          status: response.status,
          parent: parentUrl,
          depth
        });

        // Extract links from the page
        if (depth < this.maxDepth) {
          const $ = cheerio.load(response.data);
          const links = $('a[href]').map((i, elem) => {
            const href = $(elem).attr('href');
            if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
              return this.resolveUrl(href, url);
            }
            return null;
          }).get().filter(Boolean);

          // Check extracted links
          for (const link of links) {
            if (link && link.startsWith(this.baseUrl)) {
              await this.checkUrl(link, url, depth + 1);
            }
          }
        }
      } else {
        this.brokenLinks.push({
          url,
          status: response.status,
          parent: parentUrl,
          depth,
          error: `HTTP ${response.status}`
        });
      }
    } catch (error) {
      this.brokenLinks.push({
        url,
        status: 'ERROR',
        parent: parentUrl,
        depth,
        error: error.message
      });
    }
  }

  resolveUrl(href, baseUrl) {
    try {
      if (href.startsWith('http')) {
        return href;
      }
      if (href.startsWith('/')) {
        return `${this.baseUrl}${href}`;
      }
      return new URL(href, baseUrl).href;
    } catch (error) {
      return null;
    }
  }

  async checkSitemapUrls() {
    console.log('\n=== Checking Sitemap URLs ===');
    const promises = this.sitemapUrls.map(url => this.checkUrl(url, null, 0));
    await Promise.all(promises);
  }

  async checkNavigationLinks() {
    console.log('\n=== Checking Navigation Links ===');
    const navigationUrls = [
      '/',
      '/about',
      '/services',
      '/solutions',
      '/pricing',
      '/contact',
      '/blog',
      '/careers',
      '/team',
      '/partners',
      '/case-studies',
      '/news',
      '/help',
      '/faq',
      '/marketplace',
      '/dashboard',
      '/login',
      '/search',
      '/it-consulting',
      '/ai-solutions',
      '/solutions/enterprise',
      '/solutions/healthcare',
      '/research-development',
      '/request-quote',
      '/green-it',
      '/space-tech'
    ];

    const promises = navigationUrls.map(url => 
      this.checkUrl(`${this.baseUrl}${url}`, null, 0)
    );
    await Promise.all(promises);
  }

  async checkServicePages() {
    console.log('\n=== Checking Service Pages ===');
    const serviceUrls = [
      '/services/ai-business-intelligence',
      '/services/ai-compliance-assistant',
      '/services/ai-sales-copilot',
      '/services/ai-powered-seo',
      '/services/interview-assessment-ai',
      '/services/ai-content-marketing-suite',
      '/services/ai-customer-support-automation',
      '/services/ai-project-management',
      '/services/ai-financial-analytics',
      '/services/ai-marketing-automation',
      '/services/cloud-devops',
      '/services/it-infrastructure',
      '/services/finops-advisor',
      '/services/cloud-finops-optimizer',
      '/services/ai-cybersecurity-platform',
      '/services/security-headers-csp',
      '/services/dsr-portal',
      '/services/zero-trust-network-access',
      '/services/ai-compliance-copilot',
      '/services/quantum-computing',
      '/services/iot-edge-computing',
      '/services/ai-quantum-hybrid-platform',
      '/services/digital-twin',
      '/services/digital-transformation',
      '/services/micro-crm',
      '/services/helpdesk-platform',
      '/services/website-analytics',
      '/services/it-helpdesk',
      '/services/affiliate-tracking',
      '/services/mobile-survey',
      '/services/podcast-transcription',
      '/services/email-sequencer',
      '/services/returns-management',
      '/services/llm-content-studio'
    ];

    const promises = serviceUrls.map(url => 
      this.checkUrl(`${this.baseUrl}${url}`, null, 0)
    );
    await Promise.all(promises);
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalUrls: this.visitedUrls.size,
        workingLinks: this.workingLinks.length,
        brokenLinks: this.brokenLinks.length,
        missingPages: this.missingPages.length
      },
      workingLinks: this.workingLinks,
      brokenLinks: this.brokenLinks,
      missingPages: this.missingPages,
      recommendations: this.generateRecommendations()
    };

    // Save detailed report
    fs.writeFileSync(
      path.join(__dirname, '../reports/comprehensive-link-check-report.json'),
      JSON.stringify(report, null, 2)
    );

    // Save summary report
    const summaryReport = {
      timestamp: report.timestamp,
      summary: report.summary,
      brokenLinks: this.brokenLinks.map(link => ({
        url: link.url,
        status: link.status,
        error: link.error,
        parent: link.parent
      })),
      recommendations: report.recommendations
    };

    fs.writeFileSync(
      path.join(__dirname, '../reports/link-check-summary.json'),
      JSON.stringify(summaryReport, null, 2)
    );

    return report;
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.brokenLinks.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Broken Links',
        description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,
        actions: [
          'Fix all broken links identified in the report',
          'Update internal navigation to remove broken links',
          'Implement 301 redirects for moved pages',
          'Add proper error handling for missing content'
        ]
      });
    }

    // Check for missing important pages
    const importantPages = [
      '/about', '/services', '/contact', '/pricing', '/privacy', '/terms'
    ];
    
    const missingImportant = importantPages.filter(page => 
      !this.workingLinks.some(link => link.url.endsWith(page))
    );

    if (missingImportant.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Missing Pages',
        description: `Missing critical pages: ${missingImportant.join(', ')}`,
        actions: [
          'Create missing critical pages',
          'Ensure proper navigation structure',
          'Add SEO meta tags and content'
        ]
      });
    }

    // Check for orphaned pages
    const orphanedPages = this.workingLinks.filter(link => 
      link.depth > 1 && !this.brokenLinks.some(broken => 
        broken.parent === link.url
      )
    );

    if (orphanedPages.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        category: 'Navigation Structure',
        description: `Found ${orphanedPages.length} pages that may be difficult to discover`,
        actions: [
          'Review navigation structure',
          'Add breadcrumbs to deep pages',
          'Improve internal linking strategy'
        ]
      });
    }

    return recommendations;
  }

  async run() {
    console.log('🚀 Starting Comprehensive Link Check for Zion Tech Group');
    console.log(`Base URL: ${this.baseUrl}`);
    
    try {
      await this.loadSitemap();
      await this.checkSitemapUrls();
      await this.checkNavigationLinks();
      await this.checkServicePages();
      
      const report = this.generateReport();
      
      console.log('\n📊 Link Check Complete!');
      console.log(`Total URLs checked: ${report.summary.totalUrls}`);
      console.log(`Working links: ${report.summary.workingLinks}`);
      console.log(`Broken links: ${report.summary.brokenLinks}`);
      console.log(`Missing pages: ${report.summary.missingPages}`);
      
      if (report.recommendations.length > 0) {
        console.log('\n🔧 Recommendations:');
        report.recommendations.forEach((rec, index) => {
          console.log(`${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`);
        });
      }
      
      console.log('\n📁 Reports saved to:');
      console.log('- reports/comprehensive-link-check-report.json');
      console.log('- reports/link-check-summary.json');
      
    } catch (error) {
      console.error('❌ Error during link check:', error.message);
    }
  }
}

// Run the link checker
if (require.main === module) {
  const checker = new ComprehensiveLinkChecker();
  checker.run();
}

module.exports = ComprehensiveLinkChecker;