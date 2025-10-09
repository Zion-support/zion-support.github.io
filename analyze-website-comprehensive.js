#!/usr/bin/env node

import https from 'https';
import http from 'http';
import { JSDOM } from 'jsdom';
import fs from 'fs';
// import path from 'path'; // Unused import

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
    console.log('=' .repeat(60));
    
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

        // Check each link
        for (const link of links) {
          this.allLinks.add(link.href);
          
          if (this.isInternalLink(link.href)) {
            const status = await this.checkLinkStatus(link.href);
            if (status >= 400) {
              this.brokenLinks.push({
                url: link.href,
                source: url,
                text: link.text,
                status: status
              });
            } else if (status === 200 && depth < this.maxDepth) {
              // Recursively crawl internal links
              await this.crawlWebsite(link.href, depth + 1);
            }
          }
        }
      }
    } catch (error) {
      console.error(`❌ Error analyzing ${url}:`, error.message);
      this.brokenLinks.push({
        url: url,
        source: 'direct',
        text: 'Page access failed',
        status: 'ERROR'
      });
    }
  }

  async fetchPage(url) {
    return new Promise((resolve, reject) => {
      const client = url.startsWith('https:') ? https : http;
      
      const request = client.get(url, (response) => {
        let data = '';
        
        response.on('data', (chunk) => {
          data += chunk;
        });
        
        response.on('end', () => {
          resolve(data);
        });
      });
      
      request.on('error', (error) => {
        reject(error);
      });
      
      request.setTimeout(10000, () => {
        request.destroy();
        reject(new Error('Request timeout'));
      });
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

  async checkLinkStatus(url) {
    return new Promise((resolve) => {
      const client = url.startsWith('https:') ? https : http;
      
      const request = client.request(url, { method: 'HEAD' }, (response) => {
        resolve(response.statusCode);
      });
      
      request.on('error', () => {
        resolve(500);
      });
      
      request.setTimeout(5000, () => {
        request.destroy();
        resolve(408);
      });
      
      request.end();
    });
  }

  generateReport() {
    console.log('\n' + '=' .repeat(60));
    console.log('📊 ANALYSIS REPORT');
    console.log('=' .repeat(60));
    
    console.log(`\n📈 STATISTICS:`);
    console.log(`   Total pages analyzed: ${this.visitedUrls.size}`);
    console.log(`   Total links found: ${this.allLinks.size}`);
    console.log(`   Broken links: ${this.brokenLinks.length}`);
    
    if (this.brokenLinks.length > 0) {
      console.log(`\n❌ BROKEN LINKS:`);
      this.brokenLinks.forEach((link, index) => {
        console.log(`   ${index + 1}. ${link.url}`);
        console.log(`      Source: ${link.source}`);
        console.log(`      Text: "${link.text}"`);
        console.log(`      Status: ${link.status}`);
        console.log('');
      });
    }
    
    console.log(`\n📄 PAGES FOUND:`);
    this.pages.forEach((page, url) => {
      console.log(`   • ${url}`);
      console.log(`     Title: ${page.title}`);
      console.log(`     Links: ${page.links.length}`);
    });
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      statistics: {
        totalPages: this.visitedUrls.size,
        totalLinks: this.allLinks.size,
        brokenLinks: this.brokenLinks.length
      },
      brokenLinks: this.brokenLinks,
      pages: Array.from(this.pages.entries()).map(([url, page]) => ({
        url,
        title: page.title,
        linkCount: page.links.length,
        links: page.links
      }))
    };
    
    fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
    console.log(`\n💾 Detailed report saved to: website-analysis-report.json`);
  }
}

// Run the analysis
const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
analyzer.analyze().catch(console.error);
