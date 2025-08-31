#!/usr/bin/env node

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

class DeepSiteAnalyzer {
  constructor(baseUrl = 'https://ziontechgroup.com') {
    this.baseUrl = baseUrl;
    this.visitedPages = new Set();
    this.navigationLinks = new Map();
    this.missingPages = [];
    this.workingPages = [];
    this.brokenLinks = [];
    this.contentAnalysis = {};
    this.sitemap = [];
  }

  async fetchPage(url, timeout = 15000) {
    return new Promise((resolve, reject) => {
      try {
        const urlObj = new URL(url);
        const isHttps = urlObj.protocol === 'https:';
        const client = isHttps ? https : http;
        
        const options = {
          hostname: urlObj.hostname,
          port: urlObj.port || (isHttps ? 443 : 80),
          path: urlObj.pathname + urlObj.search,
          method: 'GET',
          timeout: timeout,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'
          }
        };

        const req = client.request(options, (res) => {
          let data = '';
          
          res.on('data', (chunk) => {
            data += chunk;
          });
          
          res.on('end', () => {
            resolve({
              content: data,
              statusCode: res.statusCode,
              headers: res.headers,
              url: url
            });
          });
        });

        req.on('error', (err) => {
          reject(new Error(`Failed to fetch ${url}: ${err.message}`));
        });

        req.on('timeout', () => {
          req.destroy();
          reject(new Error(`Request timeout for ${url}`));
        });

        req.end();
      } catch (err) {
        reject(new Error(`Invalid URL ${url}: ${err.message}`));
      }
    });
  }

  extractNavigationLinks(html) {
    const links = new Set();
    
    // Common navigation patterns
    const patterns = [
      // Standard href links
      /<a[^>]+href=["']([^"'#]+)["'][^>]*>/gi,
      // React Router Link components
      /<Link[^>]+to=["']([^"'#]+)["'][^>]*>/gi,
      // Navigation specific patterns
      /<nav[^>]*>[\s\S]*?<\/nav>/gi,
      // Menu patterns
      /<[^>]*menu[^>]*>[\s\S]*?<\/[^>]*>/gi,
      // Header patterns
      /<header[^>]*>[\s\S]*?<\/header>/gi,
      // Footer patterns
      /<footer[^>]*>[\s\S]*?<\/footer>/gi
    ];

    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(html)) !== null) {
        if (match[1]) {
          // Extract href from the matched content
          const hrefMatch = match[0].match(/(?:href|to)=["']([^"'#]+)["']/);
          if (hrefMatch && hrefMatch[1]) {
            const link = hrefMatch[1];
            if (this.isValidNavigationLink(link)) {
              try {
                const fullUrl = new URL(link, this.baseUrl).href;
                links.add(fullUrl);
              } catch (err) {
                // Invalid URL, skip
              }
            }
          }
        }
      }
    });

    return Array.from(links);
  }

  isValidNavigationLink(link) {
    // Filter out non-navigation links
    const excluded = [
      'javascript:', 'mailto:', 'tel:', '#', 'data:',
      '.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico',
      '.pdf', '.doc', '.docx', '.zip', '.json', '.xml', '.txt'
    ];
    
    return !excluded.some(pattern => link.toLowerCase().includes(pattern.toLowerCase()));
  }

  isInternalLink(url) {
    try {
      const urlObj = new URL(url);
      const baseUrlObj = new URL(this.baseUrl);
      return urlObj.hostname === baseUrlObj.hostname;
    } catch (err) {
      return false;
    }
  }

  analyzePageContent(html, url) {
    const analysis = {
      title: '',
      description: '',
      headings: [],
      navLinks: [],
      hasContent: false,
      is404: false,
      isEmpty: false,
      errors: []
    };

    try {
      // Extract title
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      if (titleMatch) {
        analysis.title = titleMatch[1].trim();
      }

      // Extract meta description
      const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i);
      if (descMatch) {
        analysis.description = descMatch[1].trim();
      }

      // Extract headings
      const headingMatches = html.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/gi);
      if (headingMatches) {
        analysis.headings = headingMatches.map(h => h.replace(/<[^>]+>/g, '').trim());
      }

      // Check for 404 indicators
      if (analysis.title.toLowerCase().includes('404') || 
          analysis.title.toLowerCase().includes('not found') ||
          html.toLowerCase().includes('page not found') ||
          html.toLowerCase().includes('404 error')) {
        analysis.is404 = true;
      }

      // Check if page has substantial content
      const textContent = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      analysis.hasContent = textContent.length > 500;
      analysis.isEmpty = textContent.length < 100;

      // Extract navigation links
      analysis.navLinks = this.extractNavigationLinks(html);

    } catch (err) {
      analysis.errors.push(`Content analysis error: ${err.message}`);
    }

    return analysis;
  }

  async checkPage(url) {
    if (this.visitedPages.has(url)) {
      return null;
    }

    this.visitedPages.add(url);
    console.log(`Analyzing: ${url}`);

    try {
      const response = await this.fetchPage(url);
      const analysis = this.analyzePageContent(response.content, url);
      
      const pageInfo = {
        url,
        statusCode: response.statusCode,
        title: analysis.title,
        description: analysis.description,
        headings: analysis.headings,
        hasContent: analysis.hasContent,
        isEmpty: analysis.isEmpty,
        is404: analysis.is404,
        navLinks: analysis.navLinks,
        errors: analysis.errors,
        timestamp: new Date().toISOString()
      };

      if (response.statusCode >= 200 && response.statusCode < 300) {
        if (analysis.is404 || analysis.isEmpty) {
          this.missingPages.push({
            ...pageInfo,
            issue: analysis.is404 ? '404 page' : 'empty content'
          });
        } else {
          this.workingPages.push(pageInfo);
        }
      } else {
        this.brokenLinks.push({
          ...pageInfo,
          issue: `HTTP ${response.statusCode}`
        });
      }

      this.contentAnalysis[url] = pageInfo;
      return pageInfo;

    } catch (err) {
      const errorInfo = {
        url,
        statusCode: 0,
        title: '',
        description: '',
        headings: [],
        hasContent: false,
        isEmpty: true,
        is404: false,
        navLinks: [],
        errors: [err.message],
        timestamp: new Date().toISOString(),
        issue: 'Network error'
      };

      this.brokenLinks.push(errorInfo);
      this.contentAnalysis[url] = errorInfo;
      return errorInfo;
    }
  }

  async deepCrawl(startUrl = this.baseUrl, maxDepth = 4) {
    const urlQueue = [{ url: startUrl, depth: 0 }];
    const processed = new Set();

    // Common pages to check based on typical website structure
    const commonPages = [
      '/',
      '/about',
      '/services',
      '/ai-services',
      '/it-services',
      '/micro-saas',
      '/solutions',
      '/contact',
      '/pricing',
      '/blog',
      '/news',
      '/careers',
      '/partners',
      '/help',
      '/support',
      '/docs',
      '/documentation',
      '/white-papers',
      '/webinars',
      '/training',
      '/research-development',
      '/case-studies',
      '/leadership',
      '/events',
      '/enterprise',
      '/industry-solutions',
      '/digital-transformation',
      '/cloud-solutions',
      '/emerging-tech',
      '/privacy',
      '/terms',
      '/cookies',
      '/accessibility',
      '/security',
      '/compliance',
      // Service pages
      '/services/ai-autonomous-business-operations-platform',
      '/services/ai-customer-experience-analytics-platform',
      '/services/quantum-edge-computing-solutions',
      '/services/ai-cybersecurity-platform',
      '/services/ai-healthcare-platform',
      '/services/blockchain-enterprise-solutions',
      '/services/ai-business-intelligence-dashboard',
      '/services/ai-customer-support-automation',
      '/services/ai-project-management-platform',
      '/services/ai-marketing-automation-platform',
      '/services/ai-workflow-orchestrator',
      '/services/ai-predictive-maintenance',
      '/services/ai-hr-platform',
      '/services/ai-sales-copilot',
      '/services/cloud-finops-optimizer',
      '/services/ai-compliance-assistant',
      // Solution pages
      '/solutions/healthcare',
      '/solutions/financial',
      '/solutions/manufacturing',
      '/solutions/government',
      '/solutions/retail',
      // Showcase pages
      '/comprehensive-services-showcase-2025',
      '/innovative-ai-services-showcase-2025',
      '/innovative-services-showcase-2025',
      '/innovative-services-showcase-2026',
      '/innovative-services-showcase-2032',
      '/comprehensive-pricing-guide-2025',
      '/comprehensive-pricing-guide-2032'
    ];

    // Add common pages to queue
    commonPages.forEach(page => {
      const fullUrl = new URL(page, this.baseUrl).href;
      if (!processed.has(fullUrl)) {
        urlQueue.push({ url: fullUrl, depth: 0 });
        processed.add(fullUrl);
      }
    });

    while (urlQueue.length > 0) {
      const { url, depth } = urlQueue.shift();
      
      if (depth > maxDepth) {
        continue;
      }

      const pageInfo = await this.checkPage(url);
      
      if (pageInfo && pageInfo.navLinks && depth < maxDepth) {
        // Add discovered navigation links to queue
        pageInfo.navLinks.forEach(link => {
          if (this.isInternalLink(link) && !processed.has(link)) {
            urlQueue.push({ url: link, depth: depth + 1 });
            processed.add(link);
          }
        });
      }

      // Add small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  generateSitemap() {
    this.sitemap = this.workingPages.map(page => ({
      url: page.url,
      title: page.title,
      description: page.description,
      lastChecked: page.timestamp,
      hasContent: page.hasContent
    }));
  }

  generateReport() {
    this.generateSitemap();

    const report = {
      summary: {
        totalPages: this.visitedPages.size,
        workingPages: this.workingPages.length,
        brokenLinks: this.brokenLinks.length,
        missingPages: this.missingPages.length,
        timestamp: new Date().toISOString()
      },
      workingPages: this.workingPages,
      brokenLinks: this.brokenLinks,
      missingPages: this.missingPages,
      sitemap: this.sitemap,
      contentAnalysis: this.contentAnalysis
    };

    return report;
  }

  async run() {
    console.log(`Starting deep site analysis for: ${this.baseUrl}`);
    console.log('Analyzing site structure, navigation, and content...\n');

    await this.deepCrawl();

    const report = this.generateReport();

    // Save comprehensive report
    fs.writeFileSync('deep-site-analysis.json', JSON.stringify(report, null, 2));

    // Save broken links for fixing
    if (report.brokenLinks.length > 0) {
      fs.writeFileSync('broken-pages-report.json', JSON.stringify({
        count: report.brokenLinks.length,
        pages: report.brokenLinks
      }, null, 2));
    }

    // Save missing pages for creation
    if (report.missingPages.length > 0) {
      fs.writeFileSync('missing-pages-report.json', JSON.stringify({
        count: report.missingPages.length,
        pages: report.missingPages
      }, null, 2));
    }

    // Save sitemap
    fs.writeFileSync('working-sitemap.json', JSON.stringify({
      count: report.sitemap.length,
      pages: report.sitemap
    }, null, 2));

    console.log('\n=== DEEP SITE ANALYSIS SUMMARY ===');
    console.log(`Total pages analyzed: ${report.summary.totalPages}`);
    console.log(`Working pages: ${report.summary.workingPages}`);
    console.log(`Broken/missing pages: ${report.summary.brokenLinks}`);
    console.log(`Content issues: ${report.summary.missingPages}`);

    if (report.brokenLinks.length > 0) {
      console.log('\n=== BROKEN/MISSING PAGES ===');
      report.brokenLinks.forEach(page => {
        console.log(`❌ ${page.url}`);
        console.log(`   Issue: ${page.issue}`);
        console.log(`   Status: ${page.statusCode}`);
        if (page.errors.length > 0) {
          console.log(`   Error: ${page.errors[0]}`);
        }
        console.log('');
      });
    }

    if (report.missingPages.length > 0) {
      console.log('\n=== CONTENT ISSUES ===');
      report.missingPages.forEach(page => {
        console.log(`⚠️  ${page.url}`);
        console.log(`   Issue: ${page.issue}`);
        console.log(`   Title: ${page.title || 'No title'}`);
        console.log('');
      });
    }

    console.log('\n=== WORKING PAGES SAMPLE ===');
    report.workingPages.slice(0, 10).forEach(page => {
      console.log(`✅ ${page.url}`);
      console.log(`   Title: ${page.title}`);
      console.log(`   Content: ${page.hasContent ? 'Yes' : 'Limited'}`);
    });

    if (report.workingPages.length > 10) {
      console.log(`   ... and ${report.workingPages.length - 10} more working pages`);
    }

    console.log(`\nDetailed reports saved:`);
    console.log(`- deep-site-analysis.json (complete analysis)`);
    console.log(`- broken-pages-report.json (pages to fix)`);
    console.log(`- missing-pages-report.json (content issues)`);
    console.log(`- working-sitemap.json (working pages)`);

    return report;
  }
}

// Run the analyzer
if (require.main === module) {
  const analyzer = new DeepSiteAnalyzer('https://ziontechgroup.com');
  analyzer.run().catch(console.error);
}

module.exports = DeepSiteAnalyzer;