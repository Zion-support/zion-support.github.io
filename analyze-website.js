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
    this.validLinks = [];
    this.missingPages = [];
    this.externalLinks = [];
    this.maxDepth = 3;
    this.currentDepth = 0;
  }

  async checkUrl(url) {
    return new Promise((resolve) => {
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
          url,
          status: res.statusCode,
          statusText: res.statusMessage,
          headers: res.headers,
          valid: res.statusCode >= 200 && res.statusCode < 400
        });
      });

      req.on('error', (err) => {
        resolve({
          url,
          status: 0,
          statusText: err.message,
          headers: {},
          valid: false,
          error: err.message
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({
          url,
          status: 0,
          statusText: 'Timeout',
          headers: {},
          valid: false,
          error: 'Request timeout'
        });
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
      let href = match[1];
      
      // Skip javascript, mailto, tel, and anchor links
      if (href.startsWith('javascript:') || 
          href.startsWith('mailto:') || 
          href.startsWith('tel:') || 
          href.startsWith('#')) {
        continue;
      }

      // Convert relative URLs to absolute
      if (href.startsWith('/')) {
        href = new URL(href, baseUrl).href;
      } else if (!href.startsWith('http')) {
        href = new URL(href, baseUrl).href;
      }

      links.push(href);
    }

    return [...new Set(links)]; // Remove duplicates
  }

  async fetchPage(url) {
    return new Promise((resolve) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'GET',
        timeout: 15000,
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
            url,
            status: res.statusCode,
            content: data,
            headers: res.headers,
            success: res.statusCode >= 200 && res.statusCode < 400
          });
        });
      });

      req.on('error', (err) => {
        resolve({
          url,
          status: 0,
          content: '',
          headers: {},
          success: false,
          error: err.message
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({
          url,
          status: 0,
          content: '',
          headers: {},
          success: false,
          error: 'Request timeout'
        });
      });

      req.setTimeout(15000);
      req.end();
    });
  }

  isInternalLink(url) {
    try {
      const urlObj = new URL(url);
      const baseObj = new URL(this.baseUrl);
      return urlObj.hostname === baseObj.hostname;
    } catch {
      return false;
    }
  }

  async analyzePage(url, depth = 0) {
    if (depth > this.maxDepth || this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`Analyzing: ${url} (depth: ${depth})`);

    const pageResult = await this.fetchPage(url);
    
    if (!pageResult.success) {
      this.brokenLinks.push({
        url,
        status: pageResult.status,
        error: pageResult.error,
        depth
      });
      return;
    }

    this.validLinks.push({
      url,
      status: pageResult.status,
      depth
    });

    // Extract links from the page
    const links = this.extractLinks(pageResult.content, url);
    
    for (const link of links) {
      if (this.isInternalLink(link)) {
        // Check if the internal link exists
        const linkCheck = await this.checkUrl(link);
        if (!linkCheck.valid) {
          this.brokenLinks.push({
            url: link,
            status: linkCheck.status,
            error: linkCheck.error || linkCheck.statusText,
            depth: depth + 1,
            foundOn: url
          });
        } else {
          // Recursively analyze internal links
          await this.analyzePage(link, depth + 1);
        }
      } else {
        this.externalLinks.push({
          url: link,
          foundOn: url,
          depth
        });
      }
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalPagesVisited: this.visitedUrls.size,
        validLinks: this.validLinks.length,
        brokenLinks: this.brokenLinks.length,
        externalLinks: this.externalLinks.length
      },
      brokenLinks: this.brokenLinks,
      validLinks: this.validLinks,
      externalLinks: this.externalLinks,
      recommendations: this.generateRecommendations()
    };

    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.brokenLinks.length > 0) {
      recommendations.push({
        type: 'error',
        message: `Found ${this.brokenLinks.length} broken links that need to be fixed`,
        details: this.brokenLinks.map(link => ({
          url: link.url,
          status: link.status,
          error: link.error,
          foundOn: link.foundOn
        }))
      });
    }

    // Check for common missing pages
    const commonPages = [
      '/about', '/contact', '/services', '/pricing', '/blog', 
      '/privacy', '/terms', '/sitemap', '/careers', '/case-studies'
    ];

    const missingCommonPages = commonPages.filter(page => 
      !this.validLinks.some(link => link.url.includes(page))
    );

    if (missingCommonPages.length > 0) {
      recommendations.push({
        type: 'warning',
        message: `Missing common pages: ${missingCommonPages.join(', ')}`,
        details: missingCommonPages
      });
    }

    return recommendations;
  }

  async run() {
    console.log(`Starting analysis of ${this.baseUrl}`);
    console.log(`Max depth: ${this.maxDepth}`);
    
    await this.analyzePage(this.baseUrl, 0);
    
    const report = await this.generateReport();
    
    // Save report
    fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
    
    console.log('\n=== ANALYSIS COMPLETE ===');
    console.log(`Total pages visited: ${report.summary.totalPagesVisited}`);
    console.log(`Valid links: ${report.summary.validLinks}`);
    console.log(`Broken links: ${report.summary.brokenLinks}`);
    console.log(`External links: ${report.summary.externalLinks}`);
    
    if (report.brokenLinks.length > 0) {
      console.log('\n=== BROKEN LINKS ===');
      report.brokenLinks.forEach(link => {
        console.log(`❌ ${link.url} (Status: ${link.status}) - ${link.error}`);
        if (link.foundOn) {
          console.log(`   Found on: ${link.foundOn}`);
        }
      });
    }

    if (report.recommendations.length > 0) {
      console.log('\n=== RECOMMENDATIONS ===');
      report.recommendations.forEach(rec => {
        console.log(`${rec.type === 'error' ? '❌' : '⚠️'} ${rec.message}`);
      });
    }

    return report;
  }
}

// Run the analyzer
const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
analyzer.run().catch(console.error);