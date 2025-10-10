#!/usr/bin/env node

import https from 'https';
import http from 'http';
import { URL } from 'url';
import fs from 'fs';

class WebsiteAnalyzer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.validLinks = [];
    this.externalLinks = [];
    this.analyzedPages = [];
    this.maxDepth = 3;
    this.delay = 100; // ms between requests
  }

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'HEAD',
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)'
        }
      };

      const client = urlObj.protocol === 'https:' ? https : http;
      
      const req = client.request(options, (res) => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          url: url
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

  async checkUrl(url) {
    try {
      const response = await this.makeRequest(url);
      
      if (response.statusCode >= 200 && response.statusCode < 400) {
        this.validLinks.push({
          url: url,
          status: response.statusCode,
          type: 'valid'
        });
        return true;
      } else {
        this.brokenLinks.push({
          url: url,
          status: response.statusCode,
          type: 'broken'
        });
        return false;
      }
    } catch (error) {
      this.brokenLinks.push({
        url: url,
        status: 'ERROR',
        error: error.message,
        type: 'broken'
      });
      return false;
    }
  }

  extractLinks(html, currentUrl) {
    const links = [];
    const baseUrl = new URL(currentUrl);
    
    // Extract href attributes from anchor tags
    const hrefRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    let match;
    
    while ((match = hrefRegex.exec(html)) !== null) {
      const href = match[1];
      let absoluteUrl;
      
      try {
        if (href.startsWith('http://') || href.startsWith('https://')) {
          absoluteUrl = href;
        } else if (href.startsWith('/')) {
          absoluteUrl = `${baseUrl.protocol}//${baseUrl.host}${href}`;
        } else {
          absoluteUrl = new URL(href, currentUrl).href;
        }
        
        // Only include links from the same domain
        if (new URL(absoluteUrl).hostname === baseUrl.hostname) {
          links.push(absoluteUrl);
        } else {
          this.externalLinks.push(absoluteUrl);
        }
      } catch (error) {
        console.log(`Invalid URL found: ${href}`);
      }
    }
    
    return [...new Set(links)]; // Remove duplicates
  }

  async getPageContent(url) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'GET',
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)'
        }
      };

      const client = urlObj.protocol === 'https:' ? https : http;
      
      const req = client.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          resolve({
            content: data,
            statusCode: res.statusCode,
            headers: res.headers
          });
        });
      });

      req.on('error', reject);
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });

      req.setTimeout(10000);
      req.end();
    });
  }

  async analyzePage(url, depth = 0) {
    if (depth > this.maxDepth || this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`Analyzing: ${url} (depth: ${depth})`);

    try {
      const response = await this.getPageContent(url);
      
      if (response.statusCode === 200) {
        this.analyzedPages.push({
          url: url,
          status: response.statusCode,
          title: this.extractTitle(response.content),
          links: this.extractLinks(response.content, url)
        });

        // Analyze links found on this page
        const links = this.extractLinks(response.content, url);
        for (const link of links) {
          if (!this.visitedUrls.has(link)) {
            await this.delay(this.delay);
            await this.analyzePage(link, depth + 1);
          }
        }
      } else {
        this.missingPages.push({
          url: url,
          status: response.statusCode,
          type: 'missing'
        });
      }
    } catch (error) {
      this.missingPages.push({
        url: url,
        status: 'ERROR',
        error: error.message,
        type: 'missing'
      });
    }
  }

  extractTitle(html) {
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    return titleMatch ? titleMatch[1].trim() : 'No title found';
  }

  async generateReport() {
    console.log('\n=== WEBSITE ANALYSIS REPORT ===\n');
    
    console.log(`Total pages analyzed: ${this.analyzedPages.length}`);
    console.log(`Total valid links: ${this.validLinks.length}`);
    console.log(`Total broken links: ${this.brokenLinks.length}`);
    console.log(`Total missing pages: ${this.missingPages.length}`);
    console.log(`Total external links: ${this.externalLinks.length}\n`);

    if (this.brokenLinks.length > 0) {
      console.log('=== BROKEN LINKS ===');
      this.brokenLinks.forEach(link => {
        console.log(`❌ ${link.url} - Status: ${link.status}${link.error ? ` - Error: ${link.error}` : ''}`);
      });
      console.log('');
    }

    if (this.missingPages.length > 0) {
      console.log('=== MISSING PAGES ===');
      this.missingPages.forEach(page => {
        console.log(`❌ ${page.url} - Status: ${page.status}${page.error ? ` - Error: ${page.error}` : ''}`);
      });
      console.log('');
    }

    console.log('=== ANALYZED PAGES ===');
    this.analyzedPages.forEach(page => {
      console.log(`✅ ${page.url} - "${page.title}" (${page.links.length} links)`);
    });
    console.log('');

    if (this.externalLinks.length > 0) {
      console.log('=== EXTERNAL LINKS ===');
      this.externalLinks.slice(0, 10).forEach(link => {
        console.log(`🔗 ${link}`);
      });
      if (this.externalLinks.length > 10) {
        console.log(`... and ${this.externalLinks.length - 10} more external links`);
      }
      console.log('');
    }

    // Save detailed report to file
    const report = {
      summary: {
        totalPages: this.analyzedPages.length,
        validLinks: this.validLinks.length,
        brokenLinks: this.brokenLinks.length,
        missingPages: this.missingPages.length,
        externalLinks: this.externalLinks.length
      },
      brokenLinks: this.brokenLinks,
      missingPages: this.missingPages,
      analyzedPages: this.analyzedPages,
      externalLinks: this.externalLinks,
      timestamp: new Date().toISOString()
    };

    fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
    console.log('Detailed report saved to website-analysis-report.json');
  }

  async run() {
    console.log(`Starting comprehensive analysis of ${this.baseUrl}`);
    console.log(`Max depth: ${this.maxDepth}, Delay between requests: ${this.delay}ms\n`);
    
    await this.analyzePage(this.baseUrl);
    await this.generateReport();
  }
}

// Run the analysis
const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
analyzer.run().catch(console.error);