const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

class WebsiteAnalyzer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.checkedUrls = new Set();
    this.brokenLinks = [];
    this.workingLinks = [];
    this.internalLinks = [];
    this.externalLinks = [];
    this.errors = [];
    this.warnings = [];
    this.report = {
      timestamp: new Date().toISOString(),
      baseUrl: baseUrl,
      summary: {},
      brokenLinks: [],
      workingLinks: [],
      errors: [],
      warnings: [],
      recommendations: []
    };
  }

  async checkUrl(url, parentUrl = null) {
    return new Promise((resolve) => {
      if (this.checkedUrls.has(url)) {
        resolve({ url, status: 'already-checked' });
        return;
      }

      this.checkedUrls.add(url);
      
      const isHttps = url.startsWith('https:');
      const client = isHttps ? https : http;
      
      const req = client.request(url, { method: 'HEAD', timeout: 10000 }, (res) => {
        const result = {
          url,
          status: res.statusCode,
          parentUrl,
          headers: res.headers,
          redirectLocation: res.headers.location
        };
        
        if (res.statusCode >= 200 && res.statusCode < 400) {
          this.workingLinks.push(result);
          console.log(`✓ ${res.statusCode} - ${url}`);
        } else {
          this.brokenLinks.push(result);
          console.log(`✗ ${res.statusCode} - ${url} (from ${parentUrl || 'direct'})`);
        }
        
        resolve(result);
      });

      req.on('error', (error) => {
        const result = {
          url,
          status: 'error',
          error: error.message,
          parentUrl
        };
        this.brokenLinks.push(result);
        console.log(`✗ ERROR - ${url}: ${error.message} (from ${parentUrl || 'direct'})`);
        resolve(result);
      });

      req.on('timeout', () => {
        const result = {
          url,
          status: 'timeout',
          error: 'Request timeout',
          parentUrl
        };
        this.brokenLinks.push(result);
        console.log(`✗ TIMEOUT - ${url} (from ${parentUrl || 'direct'})`);
        req.destroy();
        resolve(result);
      });

      req.end();
    });
  }

  async getPageContent(url) {
    return new Promise((resolve, reject) => {
      const isHttps = url.startsWith('https:');
      const client = isHttps ? https : http;
      
      const req = client.request(url, { timeout: 15000 }, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          resolve({ status: res.statusCode, content: data, headers: res.headers });
        });
      });

      req.on('error', reject);
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });

      req.end();
    });
  }

  extractLinks(html, baseUrl) {
    const links = [];
    const linkRegex = /href=["']([^"']+)["']/gi;
    let match;

    while ((match = linkRegex.exec(html)) !== null) {
      let link = match[1];
      
      // Skip anchors, javascript, mailto, tel
      if (link.startsWith('#') || link.startsWith('javascript:') || 
          link.startsWith('mailto:') || link.startsWith('tel:')) {
        continue;
      }
      
      // Convert relative URLs to absolute
      if (link.startsWith('/')) {
        link = baseUrl + link;
      } else if (!link.startsWith('http')) {
        link = baseUrl + '/' + link;
      }
      
      links.push(link);
    }

    return [...new Set(links)]; // Remove duplicates
  }

  categorizeLinks(links) {
    const internal = [];
    const external = [];

    links.forEach(link => {
      if (link.startsWith(this.baseUrl)) {
        internal.push(link);
      } else {
        external.push(link);
      }
    });

    return { internal, external };
  }

  async analyzeMainPages() {
    console.log('\n🔍 Analyzing main pages...\n');
    
    const mainPages = [
      '/',
      '/about',
      '/contact',
      '/services',
      '/services-overview',
      '/ai-services',
      '/it-services',
      '/micro-saas',
      '/pricing',
      '/pricing-guide',
      '/blog',
      '/case-studies',
      '/white-papers',
      '/webinars',
      '/careers',
      '/team',
      '/privacy',
      '/terms',
      '/sitemap',
      '/help',
      '/support',
      '/faq',
      '/documentation',
      '/training',
      '/marketplace',
      '/partners',
      '/news',
      '/events',
      '/innovative-services-showcase-2025',
      '/revolutionary-services-2030',
      '/comprehensive-services-landing-2028',
      '/comprehensive-pricing-guide-2026',
      '/schedule-demo',
      '/request-quote',
      '/login',
      '/signup'
    ];

    for (const page of mainPages) {
      const url = this.baseUrl + page;
      await this.checkUrl(url);
    }
  }

  async analyzeServicePages() {
    console.log('\n🔍 Analyzing service pages...\n');
    
    const servicePages = [
      '/services/ai-business-intelligence',
      '/services/digital-twin',
      '/services/cloud-devops',
      '/services/iot-edge',
      '/services/cybersecurity-suite',
      '/services/data-analytics',
      '/services/blockchain-enterprise-solutions',
      '/services/healthcare-tech',
      '/services/sustainability',
      '/services/quantum-computing',
      '/services/space-tech',
      '/services/zero-trust-network-architecture',
      '/services/ai-sales-copilot',
      '/services/ai-compliance-assistant',
      '/services/micro-saas-solutions',
      '/services/ai-content-marketing-automation',
      '/services/ai-supply-chain-optimization',
      '/services/ai-hr-platform',
      '/services/ai-legal-research-platform',
      '/services/ai-education-platform',
      '/services/ai-marketing-automation'
    ];

    for (const page of servicePages) {
      const url = this.baseUrl + page;
      await this.checkUrl(url);
    }
  }

  async crawlPage(url, depth = 0, maxDepth = 2) {
    if (depth > maxDepth || this.checkedUrls.has(url)) {
      return;
    }

    console.log(`\n🌐 Crawling: ${url} (depth: ${depth})\n`);

    try {
      const response = await this.getPageContent(url);
      
      if (response.status >= 200 && response.status < 400) {
        const links = this.extractLinks(response.content, this.baseUrl);
        const { internal, external } = this.categorizeLinks(links);
        
        this.internalLinks.push(...internal);
        this.externalLinks.push(...external);

        // Check all extracted links
        for (const link of [...internal.slice(0, 10), ...external.slice(0, 5)]) {
          await this.checkUrl(link, url);
        }

        // Recursively crawl internal links (limited)
        if (depth < maxDepth) {
          for (const internalLink of internal.slice(0, 3)) {
            await this.crawlPage(internalLink, depth + 1, maxDepth);
          }
        }
      }
    } catch (error) {
      console.log(`✗ ERROR crawling ${url}: ${error.message}`);
      this.errors.push({ url, error: error.message });
    }
  }

  generateReport() {
    const totalLinks = this.checkedUrls.size;
    const brokenCount = this.brokenLinks.length;
    const workingCount = this.workingLinks.length;
    const successRate = totalLinks > 0 ? ((workingCount / totalLinks) * 100).toFixed(2) : 0;

    this.report.summary = {
      totalLinksChecked: totalLinks,
      brokenLinks: brokenCount,
      workingLinks: workingCount,
      successRate: `${successRate}%`,
      errors: this.errors.length,
      warnings: this.warnings.length
    };

    this.report.brokenLinks = this.brokenLinks;
    this.report.workingLinks = this.workingLinks.slice(0, 20); // Limit for readability
    this.report.errors = this.errors;
    this.report.warnings = this.warnings;

    // Generate recommendations
    if (brokenCount > 0) {
      this.report.recommendations.push('Fix broken links to improve user experience and SEO');
    }
    if (brokenCount > totalLinks * 0.1) {
      this.report.recommendations.push('High number of broken links detected - consider comprehensive link audit');
    }
    if (this.errors.length > 0) {
      this.report.recommendations.push('Review and fix pages that failed to load');
    }

    return this.report;
  }

  async analyze() {
    console.log(`\n🚀 Starting comprehensive analysis of ${this.baseUrl}\n`);
    console.log('=' .repeat(60));

    try {
      // Check main site availability
      await this.checkUrl(this.baseUrl);
      
      // Analyze main pages
      await this.analyzeMainPages();
      
      // Analyze service pages
      await this.analyzeServicePages();
      
      // Crawl main page for additional links
      await this.crawlPage(this.baseUrl, 0, 1);
      
      // Generate final report
      const report = this.generateReport();
      
      console.log('\n' + '=' .repeat(60));
      console.log('📊 ANALYSIS COMPLETE');
      console.log('=' .repeat(60));
      console.log(`✅ Working Links: ${report.summary.workingLinks}`);
      console.log(`❌ Broken Links: ${report.summary.brokenLinks}`);
      console.log(`📈 Success Rate: ${report.summary.successRate}`);
      console.log(`🔗 Total Links Checked: ${report.summary.totalLinksChecked}`);
      
      if (report.brokenLinks.length > 0) {
        console.log('\n❌ BROKEN LINKS:');
        report.brokenLinks.forEach(link => {
          console.log(`  - ${link.url} (${link.status}) ${link.parentUrl ? `from ${link.parentUrl}` : ''}`);
        });
      }
      
      if (report.recommendations.length > 0) {
        console.log('\n💡 RECOMMENDATIONS:');
        report.recommendations.forEach(rec => console.log(`  - ${rec}`));
      }
      
      // Save report to file
      fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
      console.log('\n📝 Detailed report saved to: website-analysis-report.json');
      
      return report;
      
    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
      this.errors.push({ error: error.message });
      return this.generateReport();
    }
  }
}

// Run the analysis
async function main() {
  const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
  await analyzer.analyze();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = WebsiteAnalyzer;