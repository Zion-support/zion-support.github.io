#!/usr/bin/env node

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

class LinkChecker {
  constructor(baseUrl = 'https://ziontechgroup.com') {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.allLinks = [];
    this.externalLinks = [];
    this.internalLinks = [];
    this.redirects = [];
    this.results = {
      broken: [],
      working: [],
      redirects: [],
      external: [],
      internal: []
    };
  }

  async checkUrl(url, timeout = 10000) {
    return new Promise((resolve) => {
      try {
        const urlObj = new URL(url);
        const isHttps = urlObj.protocol === 'https:';
        const client = isHttps ? https : http;
        
        const options = {
          hostname: urlObj.hostname,
          port: urlObj.port || (isHttps ? 443 : 80),
          path: urlObj.pathname + urlObj.search,
          method: 'HEAD',
          timeout: timeout,
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)',
            'Accept': '*/*'
          }
        };

        const req = client.request(options, (res) => {
          const statusCode = res.statusCode;
          
          if (statusCode >= 200 && statusCode < 300) {
            resolve({ 
              url, 
              status: statusCode, 
              ok: true, 
              redirect: false,
              headers: res.headers 
            });
          } else if (statusCode >= 300 && statusCode < 400) {
            const location = res.headers.location;
            resolve({ 
              url, 
              status: statusCode, 
              ok: true, 
              redirect: true,
              location: location,
              headers: res.headers 
            });
          } else {
            resolve({ 
              url, 
              status: statusCode, 
              ok: false, 
              error: `HTTP ${statusCode}`,
              headers: res.headers 
            });
          }
        });

        req.on('error', (err) => {
          resolve({ 
            url, 
            status: 0, 
            ok: false, 
            error: err.message 
          });
        });

        req.on('timeout', () => {
          req.destroy();
          resolve({ 
            url, 
            status: 0, 
            ok: false, 
            error: 'Request timeout' 
          });
        });

        req.end();
      } catch (err) {
        resolve({ 
          url, 
          status: 0, 
          ok: false, 
          error: `Invalid URL: ${err.message}` 
        });
      }
    });
  }

  async getPageContent(url) {
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
          timeout: 15000,
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
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
              headers: res.headers
            });
          });
        });

        req.on('error', (err) => {
          reject(err);
        });

        req.on('timeout', () => {
          req.destroy();
          reject(new Error('Request timeout'));
        });

        req.end();
      } catch (err) {
        reject(err);
      }
    });
  }

  extractLinksFromHtml(html, baseUrl) {
    const links = [];
    
    // Regular expressions to find different types of links
    const patterns = [
      /href=["']([^"']+)["']/gi,        // href attributes
      /src=["']([^"']+)["']/gi,         // src attributes
      /action=["']([^"']+)["']/gi,      // form actions
      /url\(["']?([^"')]+)["']?\)/gi,   // CSS url()
    ];

    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(html)) !== null) {
        const link = match[1];
        if (link && !link.startsWith('#') && !link.startsWith('javascript:') && 
            !link.startsWith('mailto:') && !link.startsWith('tel:')) {
          try {
            const fullUrl = new URL(link, baseUrl).href;
            links.push(fullUrl);
          } catch (err) {
            // Invalid URL, skip
          }
        }
      }
    });

    return [...new Set(links)]; // Remove duplicates
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

  async crawlPage(url, depth = 0, maxDepth = 3) {
    if (depth > maxDepth || this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`Crawling: ${url} (depth: ${depth})`);

    try {
      const { content, statusCode } = await this.getPageContent(url);
      
      if (statusCode >= 200 && statusCode < 300) {
        const links = this.extractLinksFromHtml(content, url);
        
        for (const link of links) {
          this.allLinks.push({ source: url, target: link, depth });
          
          if (this.isInternalLink(link)) {
            this.internalLinks.push({ source: url, target: link, depth });
            
            // Recursively crawl internal links
            if (depth < maxDepth) {
              await this.crawlPage(link, depth + 1, maxDepth);
            }
          } else {
            this.externalLinks.push({ source: url, target: link, depth });
          }
        }
      }
    } catch (err) {
      console.error(`Error crawling ${url}:`, err.message);
    }
  }

  async checkAllLinks() {
    console.log('Checking all discovered links...');
    
    const uniqueLinks = [...new Set(this.allLinks.map(l => l.target))];
    const batchSize = 10; // Check links in batches to avoid overwhelming servers
    
    for (let i = 0; i < uniqueLinks.length; i += batchSize) {
      const batch = uniqueLinks.slice(i, i + batchSize);
      
      const promises = batch.map(async (link) => {
        const result = await this.checkUrl(link);
        
        if (result.ok) {
          if (result.redirect) {
            this.results.redirects.push({
              url: link,
              status: result.status,
              location: result.location,
              sources: this.allLinks.filter(l => l.target === link).map(l => l.source)
            });
          } else {
            this.results.working.push({
              url: link,
              status: result.status,
              sources: this.allLinks.filter(l => l.target === link).map(l => l.source)
            });
          }
        } else {
          this.results.broken.push({
            url: link,
            status: result.status,
            error: result.error,
            sources: this.allLinks.filter(l => l.target === link).map(l => l.source)
          });
        }
        
        return result;
      });
      
      await Promise.all(promises);
      console.log(`Checked ${Math.min(i + batchSize, uniqueLinks.length)}/${uniqueLinks.length} links`);
    }
  }

  generateReport() {
    const report = {
      summary: {
        totalLinks: this.allLinks.length,
        uniqueLinks: [...new Set(this.allLinks.map(l => l.target))].length,
        internalLinks: this.internalLinks.length,
        externalLinks: this.externalLinks.length,
        brokenLinks: this.results.broken.length,
        workingLinks: this.results.working.length,
        redirects: this.results.redirects.length
      },
      brokenLinks: this.results.broken,
      workingLinks: this.results.working,
      redirects: this.results.redirects,
      internalLinks: this.internalLinks,
      externalLinks: this.externalLinks,
      timestamp: new Date().toISOString()
    };

    return report;
  }

  async run() {
    console.log(`Starting comprehensive link check for: ${this.baseUrl}`);
    console.log('Phase 1: Crawling website and discovering links...');
    
    await this.crawlPage(this.baseUrl);
    
    console.log(`Phase 2: Checking ${[...new Set(this.allLinks.map(l => l.target))].length} unique links...`);
    
    await this.checkAllLinks();
    
    console.log('Phase 3: Generating report...');
    
    const report = this.generateReport();
    
    // Save detailed report
    fs.writeFileSync('comprehensive-link-report.json', JSON.stringify(report, null, 2));
    
    // Save broken links summary
    if (report.brokenLinks.length > 0) {
      fs.writeFileSync('broken-links-summary.json', JSON.stringify({
        count: report.brokenLinks.length,
        links: report.brokenLinks
      }, null, 2));
    }
    
    console.log('\n=== LINK CHECK SUMMARY ===');
    console.log(`Total links found: ${report.summary.totalLinks}`);
    console.log(`Unique links: ${report.summary.uniqueLinks}`);
    console.log(`Internal links: ${report.summary.internalLinks}`);
    console.log(`External links: ${report.summary.externalLinks}`);
    console.log(`Working links: ${report.summary.workingLinks}`);
    console.log(`Broken links: ${report.summary.brokenLinks}`);
    console.log(`Redirects: ${report.summary.redirects}`);
    
    if (report.brokenLinks.length > 0) {
      console.log('\n=== BROKEN LINKS ===');
      report.brokenLinks.forEach(link => {
        console.log(`❌ ${link.url} (${link.error})`);
        console.log(`   Found on: ${link.sources.slice(0, 3).join(', ')}${link.sources.length > 3 ? '...' : ''}`);
      });
    }
    
    if (report.redirects.length > 0) {
      console.log('\n=== REDIRECTS ===');
      report.redirects.forEach(link => {
        console.log(`🔄 ${link.url} → ${link.location} (${link.status})`);
      });
    }
    
    console.log(`\nDetailed report saved to: comprehensive-link-report.json`);
    
    return report;
  }
}

// Run the link checker
if (require.main === module) {
  const checker = new LinkChecker('https://ziontechgroup.com');
  checker.run().catch(console.error);
}

module.exports = LinkChecker;