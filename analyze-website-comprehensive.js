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
    this.workingLinks = [];
    this.missingPages = [];
    this.errors = [];
    this.maxDepth = 3;
    this.maxLinks = 1000;
    this.currentLinkCount = 0;
  }

  async analyze() {
    console.log(`🔍 Starting comprehensive analysis of ${this.baseUrl}`);
    console.log(`📊 Max depth: ${this.maxDepth}, Max links: ${this.maxLinks}`);
    
    try {
      await this.crawlPage(this.baseUrl, 0);
      this.generateReport();
    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
      this.errors.push({ url: this.baseUrl, error: error.message });
    }
  }

  async crawlPage(url, depth) {
    if (depth > this.maxDepth || this.currentLinkCount >= this.maxLinks || this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    this.currentLinkCount++;
    
    console.log(`🔗 Checking: ${url} (depth: ${depth})`);

    try {
      const response = await this.fetchPage(url);
      
      if (response.statusCode >= 200 && response.statusCode < 300) {
        this.workingLinks.push({
          url,
          statusCode: response.statusCode,
          depth,
          title: this.extractTitle(response.body)
        });

        if (depth < this.maxDepth) {
          const links = this.extractLinks(response.body, url);
          console.log(`  📝 Found ${links.length} links on this page`);
          
          for (const link of links) {
            if (this.isInternalLink(link, this.baseUrl)) {
              await this.crawlPage(link, depth + 1);
            }
          }
        }
      } else {
        this.brokenLinks.push({
          url,
          statusCode: response.statusCode,
          depth,
          error: `HTTP ${response.statusCode}`
        });
      }
    } catch (error) {
      this.brokenLinks.push({
        url,
        statusCode: 0,
        depth,
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
        let body = '';
        
        res.on('data', (chunk) => {
          body += chunk;
        });
        
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: body
          });
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

  extractTitle(html) {
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    return titleMatch ? titleMatch[1].trim() : 'No title found';
  }

  extractLinks(html, baseUrl) {
    const links = [];
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    let match;

    while ((match = linkRegex.exec(html)) !== null) {
      const href = match[1];
      try {
        const absoluteUrl = new URL(href, baseUrl).href;
        links.push(absoluteUrl);
      } catch (error) {
        // Skip invalid URLs
      }
    }

    return [...new Set(links)]; // Remove duplicates
  }

  isInternalLink(url, baseUrl) {
    try {
      const urlObj = new URL(url);
      const baseObj = new URL(baseUrl);
      return urlObj.hostname === baseObj.hostname;
    } catch {
      return false;
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalLinks: this.workingLinks.length + this.brokenLinks.length,
        workingLinks: this.workingLinks.length,
        brokenLinks: this.brokenLinks.length,
        missingPages: this.missingPages.length,
        errors: this.errors.length
      },
      workingLinks: this.workingLinks,
      brokenLinks: this.brokenLinks,
      missingPages: this.missingPages,
      errors: this.errors
    };

    // Save report
    fs.writeFileSync('comprehensive-website-analysis.json', JSON.stringify(report, null, 2));
    
    console.log('\n📊 ANALYSIS COMPLETE');
    console.log('==================');
    console.log(`✅ Working links: ${this.workingLinks.length}`);
    console.log(`❌ Broken links: ${this.brokenLinks.length}`);
    console.log(`📄 Missing pages: ${this.missingPages.length}`);
    console.log(`⚠️  Errors: ${this.errors.length}`);
    console.log(`📁 Report saved to: comprehensive-website-analysis.json`);

    if (this.brokenLinks.length > 0) {
      console.log('\n🔗 BROKEN LINKS:');
      this.brokenLinks.forEach(link => {
        console.log(`  ❌ ${link.url} - ${link.error}`);
      });
    }

    if (this.errors.length > 0) {
      console.log('\n⚠️  ERRORS:');
      this.errors.forEach(error => {
        console.log(`  ❌ ${error.url} - ${error.error}`);
      });
    }
  }
}

// Run analysis
const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
analyzer.analyze().catch(console.error);