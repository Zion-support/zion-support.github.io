#!/usr/bin/env node

import https from 'https';
import http from 'http';
import { JSDOM } from 'jsdom';
import fs from 'fs';

class WebsiteAnalyzer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.allLinks = new Set();
    this.pages = new Map();
    this.maxDepth = 3;
    this.currentDepth = 0;
  }

  async analyze() {
    console.log(`🔍 Starting comprehensive analysis of ${this.baseUrl}`);
    console.log('='.repeat(60));
    
    try {
      await this.crawlWebsite(this.baseUrl, 0);
      this.generateReport();
    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
    }
  }

  async crawlWebsite(url, depth) {
    if (depth > this.maxDepth || this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`📄 Analyzing: ${url} (depth: ${depth})`);

    try {
      const content = await this.fetchPage(url);
      if (content) {
        const dom = new JSDOM(content);
        const document = dom.window.document;
        
        // Store page content
        this.pages.set(url, {
          title: document.title,
          content: content,
          links: []
        });

        // Extract all links
        const links = this.extractLinks(document, url);
        this.pages.get(url).links = links;

        // Process each link
        for (const link of links) {
          this.allLinks.add(link.href);
          
          if (this.isInternalLink(link.href)) {
            await this.crawlWebsite(link.href, depth + 1);
          }
        }
      }
    } catch (err) {
      console.error(`❌ Error analyzing ${url}:`, err.message);
      this.brokenLinks.push({ url, error: err.message });
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
        timeout: 10000
      };

      const protocol = urlObj.protocol === 'https:' ? https : http;
      
      const req = protocol.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve({ statusCode: res.statusCode, data });
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.on('timeout', () => {
        reject(new Error('Request timeout'));
      });

      req.end();
    });
  }

  extractLinks(document, baseUrl) {
    const links = [];
    const linkElements = document.querySelectorAll('a[href]');
    
    linkElements.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const absoluteUrl = this.resolveUrl(href, baseUrl);
        links.push({
          href: absoluteUrl,
          text: link.textContent.trim(),
          title: link.getAttribute('title') || ''
        });
      }
    });
    
    return links;
  }

  resolveUrl(href, baseUrl) {
    try {
      return new URL(href, baseUrl).href;
    } catch {
      return href;
    }
  }

  isInternalLink(url) {
    try {
      const urlObj = new URL(url);
      const baseUrlObj = new URL(this.baseUrl);
      return urlObj.hostname === baseUrlObj.hostname;
    } catch {
      return false;
    }
  }

  generateReport() {
    console.log('\n📊 Analysis Report');
    console.log('='.repeat(60));
    console.log(`📄 Pages analyzed: ${this.pages.size}`);
    console.log(`🔗 Total links found: ${this.allLinks.size}`);
    console.log(`❌ Broken links: ${this.brokenLinks.length}`);
    
    if (this.brokenLinks.length > 0) {
      console.log('\n❌ Broken Links:');
      this.brokenLinks.forEach(link => {
        console.log(`  - ${link.url}: ${link.error}`);
      });
    }
    
    // Save report to file
    const report = {
      baseUrl: this.baseUrl,
      analyzedAt: new Date().toISOString(),
      pagesAnalyzed: this.pages.size,
      totalLinks: this.allLinks.size,
      brokenLinks: this.brokenLinks,
      pages: Array.from(this.pages.entries()).map(([url, data]) => ({
        url,
        title: data.title,
        linkCount: data.links.length
      }))
    };
    
    fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
    console.log('\n💾 Report saved to website-analysis-report.json');
  }
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const baseUrl = process.argv[2] || 'https://ziontechgroup.com';
  const analyzer = new WebsiteAnalyzer(baseUrl);
  analyzer.analyze();
}

export default WebsiteAnalyzer;