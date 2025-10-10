import https from 'https';
import http from 'http';
import { URL } from 'url';

class ComprehensiveWebsiteAnalyzer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.workingLinks = [];
    this.redirects = [];
    this.maxDepth = 2;
    this.timeout = 10000;
  }

  async analyze() {
    console.log(`🔍 Starting comprehensive analysis of ${this.baseUrl}`);
    console.log('=' .repeat(80));
    
    try {
      // First, get the main page to extract all navigation links
      const mainPageContent = await this.fetchPage(this.baseUrl);
      if (mainPageContent) {
        this.workingLinks.push(this.baseUrl);
        const navigationLinks = this.extractNavigationLinks(mainPageContent);
        
        console.log(`📋 Found ${navigationLinks.length} navigation links`);
        
        // Test each navigation link
        for (const link of navigationLinks) {
          await this.testLink(link);
        }
        
        // Test some common pages that should exist
        await this.testCommonPages();
        
        this.generateReport();
      }
    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
    }
  }

  async testCommonPages() {
    const commonPages = [
      '/about',
      '/contact',
      '/services',
      '/blog',
      '/pricing',
      '/team',
      '/careers',
      '/privacy',
      '/terms',
      '/sitemap',
      '/ai-services',
      '/ai-analytics-dashboard',
      '/ai-chatbot-builder',
      '/ai-content-generation',
      '/ai-crm',
      '/ai-customer-support',
      '/ai-cybersecurity',
      '/ai-data-analytics',
      '/ai-data-visualization',
      '/ai-document-processing',
      '/ai-ecommerce-solutions',
      '/ai-email-assistant',
      '/ai-fintech',
      '/ai-healthcare',
      '/ai-lead-generation',
      '/ai-marketing',
      '/ai-mobile-app-development',
      '/ai-sales-automation',
      '/ai-scheduler',
      '/ai-workflow-automation',
      '/ai-writing-assistant',
      '/web-development',
      '/mobile-app-development',
      '/it-consulting',
      '/cloud-migration',
      '/cybersecurity',
      '/devops',
      '/blockchain',
      '/quantum-computing',
      '/machine-learning',
      '/computer-vision',
      '/nlp'
    ];

    console.log(`\n🧪 Testing ${commonPages.length} common pages...`);
    
    for (const page of commonPages) {
      const fullUrl = new URL(page, this.baseUrl).href;
      await this.testLink(fullUrl);
    }
  }

  async testLink(url) {
    if (this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    
    try {
      const response = await this.checkLink(url);
      if (response.status >= 200 && response.status < 400) {
        this.workingLinks.push(url);
        console.log(`✅ ${url} - ${response.status}`);
        
        // If it's a working page, try to extract more links from it
        if (response.status === 200) {
          const content = await this.fetchPage(url);
          if (content) {
            const internalLinks = this.extractInternalLinks(content, url);
            for (const link of internalLinks.slice(0, 5)) { // Limit to 5 links per page
              if (!this.visitedUrls.has(link)) {
                await this.testLink(link);
              }
            }
          }
        }
      } else if (response.status >= 300 && response.status < 400) {
        this.redirects.push({
          url: url,
          status: response.status,
          redirectTo: response.headers.location
        });
        console.log(`🔄 ${url} - ${response.status} -> ${response.headers.location}`);
      } else {
        this.brokenLinks.push({
          url: url,
          status: response.status,
          error: `HTTP ${response.status}`
        });
        console.log(`❌ ${url} - ${response.status}`);
      }
    } catch (error) {
      this.brokenLinks.push({
        url: url,
        status: 'ERROR',
        error: error.message
      });
      console.log(`💥 ${url} - ERROR: ${error.message}`);
    }
  }

  async fetchPage(url) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate',
          'Connection': 'keep-alive',
        },
        timeout: this.timeout
      };

      const client = urlObj.protocol === 'https:' ? https : http;
      
      const req = client.request(options, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(data);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });

      req.setTimeout(this.timeout);
      req.end();
    });
  }

  async checkLink(url) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'HEAD',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)'
        },
        timeout: this.timeout
      };

      const client = urlObj.protocol === 'https:' ? https : http;
      
      const req = client.request(options, (res) => {
        resolve({
          status: res.statusCode,
          headers: res.headers
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });

      req.setTimeout(this.timeout);
      req.end();
    });
  }

  extractNavigationLinks(html) {
    const links = [];
    
    // Extract links from navigation menus
    const navRegex = /<nav[^>]*>[\s\S]*?<\/nav>/gi;
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    
    let navMatch;
    while ((navMatch = navRegex.exec(html)) !== null) {
      const navContent = navMatch[0];
      let linkMatch;
      while ((linkMatch = linkRegex.exec(navContent)) !== null) {
        const href = linkMatch[1];
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
          links.push(href);
        }
      }
    }

    // Also extract footer links
    const footerRegex = /<footer[^>]*>[\s\S]*?<\/footer>/gi;
    let footerMatch;
    while ((footerMatch = footerRegex.exec(html)) !== null) {
      const footerContent = footerMatch[0];
      let linkMatch;
      while ((linkMatch = linkRegex.exec(footerContent)) !== null) {
        const href = linkMatch[1];
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
          links.push(href);
        }
      }
    }

    return [...new Set(links)]; // Remove duplicates
  }

  extractInternalLinks(html, baseUrl) {
    const links = [];
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    let match;

    while ((match = linkRegex.exec(html)) !== null) {
      const href = match[1];
      if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        try {
          const fullUrl = new URL(href, baseUrl).href;
          if (this.isInternalLink(fullUrl)) {
            links.push(fullUrl);
          }
        } catch {
          // Invalid URL, skip
        }
      }
    }

    return [...new Set(links)]; // Remove duplicates
  }

  isInternalLink(link) {
    try {
      const linkUrl = new URL(link);
      const baseUrl = new URL(this.baseUrl);
      return linkUrl.hostname === baseUrl.hostname;
    } catch {
      return false;
    }
  }

  generateReport() {
    console.log('\n' + '=' .repeat(80));
    console.log('📊 COMPREHENSIVE WEBSITE ANALYSIS REPORT');
    console.log('=' .repeat(80));
    
    console.log(`\n✅ Working Links: ${this.workingLinks.length}`);
    this.workingLinks.forEach(link => console.log(`  ✓ ${link}`));
    
    console.log(`\n🔄 Redirects: ${this.redirects.length}`);
    this.redirects.forEach(redirect => {
      console.log(`  🔄 ${redirect.url} -> ${redirect.redirectTo} (${redirect.status})`);
    });
    
    console.log(`\n❌ Broken Links: ${this.brokenLinks.length}`);
    this.brokenLinks.forEach(link => {
      console.log(`  ✗ ${link.url} - ${link.error}`);
    });

    console.log(`\n📈 Summary:`);
    console.log(`  Total URLs analyzed: ${this.visitedUrls.size}`);
    console.log(`  Working links: ${this.workingLinks.length}`);
    console.log(`  Redirects: ${this.redirects.length}`);
    console.log(`  Broken links: ${this.brokenLinks.length}`);
    
    const totalTested = this.workingLinks.length + this.redirects.length + this.brokenLinks.length;
    if (totalTested > 0) {
      const successRate = ((this.workingLinks.length + this.redirects.length) / totalTested * 100).toFixed(2);
      console.log(`  Success rate: ${successRate}%`);
    }

    // Identify missing pages
    const expectedPages = [
      '/about', '/contact', '/services', '/blog', '/pricing', '/team', '/careers',
      '/privacy', '/terms', '/sitemap', '/ai-services'
    ];
    
    const missingPages = expectedPages.filter(page => {
      const fullUrl = new URL(page, this.baseUrl).href;
      return !this.workingLinks.includes(fullUrl) && 
             !this.redirects.some(r => r.url === fullUrl) &&
             !this.brokenLinks.some(b => b.url === fullUrl);
    });

    if (missingPages.length > 0) {
      console.log(`\n🚫 Missing Expected Pages: ${missingPages.length}`);
      missingPages.forEach(page => console.log(`  ❓ ${page}`));
    }
  }
}

// Run the analysis
const analyzer = new ComprehensiveWebsiteAnalyzer('http://localhost:3000');
analyzer.analyze().catch(console.error);