import https from 'https';
import http from 'http';
import { URL } from 'url';

class WebsiteAnalyzer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.workingLinks = [];
    this.maxDepth = 3;
    this.currentDepth = 0;
  }

  async analyze() {
    console.log(`🔍 Starting comprehensive analysis of ${this.baseUrl}`);
    console.log('=' .repeat(60));
    
    try {
      await this.crawlPage(this.baseUrl, 0);
      this.generateReport();
    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
    }
  }

  async crawlPage(url, depth) {
    if (depth > this.maxDepth || this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`📄 Analyzing: ${url} (depth: ${depth})`);

    try {
      const content = await this.fetchPage(url);
      if (content) {
        const links = this.extractLinks(content, url);
        this.workingLinks.push(url);
        
        // Check each link
        for (const link of links) {
          if (this.isInternalLink(link)) {
            const fullUrl = this.resolveUrl(link, url);
            if (!this.visitedUrls.has(fullUrl)) {
              const isWorking = await this.checkLink(fullUrl);
              if (!isWorking) {
                this.brokenLinks.push({
                  url: fullUrl,
                  source: url,
                  status: 'broken'
                });
              } else {
                // Recursively crawl internal links
                await this.crawlPage(fullUrl, depth + 1);
              }
            }
          }
        }
      }
    } catch (error) {
      this.brokenLinks.push({
        url: url,
        source: 'direct',
        status: 'error',
        error: error.message
      });
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
        timeout: 10000
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

      req.setTimeout(10000);
      req.end();
    });
  }

  extractLinks(html, baseUrl) {
    const links = [];
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    let match;

    while ((match = linkRegex.exec(html)) !== null) {
      const href = match[1];
      if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        links.push(href);
      }
    }

    return links;
  }

  isInternalLink(link) {
    try {
      const linkUrl = new URL(link, this.baseUrl);
      const baseUrl = new URL(this.baseUrl);
      return linkUrl.hostname === baseUrl.hostname;
    } catch {
      return false;
    }
  }

  resolveUrl(link, baseUrl) {
    try {
      return new URL(link, baseUrl).href;
    } catch {
      return link;
    }
  }

  async checkLink(url) {
    return new Promise((resolve) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'HEAD',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)'
        },
        timeout: 5000
      };

      const client = urlObj.protocol === 'https:' ? https : http;
      
      const req = client.request(options, (res) => {
        resolve(res.statusCode >= 200 && res.statusCode < 400);
      });

      req.on('error', () => {
        resolve(false);
      });

      req.on('timeout', () => {
        req.destroy();
        resolve(false);
      });

      req.setTimeout(5000);
      req.end();
    });
  }

  generateReport() {
    console.log('\n' + '=' .repeat(60));
    console.log('📊 WEBSITE ANALYSIS REPORT');
    console.log('=' .repeat(60));
    
    console.log(`\n✅ Working Links: ${this.workingLinks.length}`);
    this.workingLinks.forEach(link => console.log(`  ✓ ${link}`));
    
    console.log(`\n❌ Broken Links: ${this.brokenLinks.length}`);
    this.brokenLinks.forEach(link => {
      console.log(`  ✗ ${link.url}`);
      if (link.source !== 'direct') {
        console.log(`    Source: ${link.source}`);
      }
      if (link.error) {
        console.log(`    Error: ${link.error}`);
      }
    });

    console.log(`\n📈 Summary:`);
    console.log(`  Total URLs analyzed: ${this.visitedUrls.size}`);
    console.log(`  Working links: ${this.workingLinks.length}`);
    console.log(`  Broken links: ${this.brokenLinks.length}`);
    console.log(`  Success rate: ${((this.workingLinks.length / (this.workingLinks.length + this.brokenLinks.length)) * 100).toFixed(2)}%`);
  }
}

// Run the analysis
const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
analyzer.analyze().catch(console.error);