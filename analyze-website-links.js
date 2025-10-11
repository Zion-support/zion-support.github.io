#!/usr/bin/env node

import https from 'https';
import http from 'http';
import { URL } from 'url';
import * as cheerio from 'cheerio';
import fs from 'fs';

class WebsiteAnalyzer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.workingLinks = [];
    this.missingPages = [];
    this.allLinks = new Set();
    this.maxDepth = 3;
    this.currentDepth = 0;
  }

  async analyze() {
    console.log(`🔍 Starting comprehensive analysis of ${this.baseUrl}`);
    console.log('=' * 60);
    
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
      const html = await this.fetchPage(url);
      const $ = cheerio.load(html);
      
      // Extract all links
      const links = this.extractLinks($, url);
      
      // Check each link
      for (const link of links) {
        this.allLinks.add(link);
        const status = await this.checkLink(link);
        
        if (status >= 200 && status < 400) {
          this.workingLinks.push({ url: link, status });
          // Recursively crawl internal links
          if (this.isInternalLink(link) && depth < this.maxDepth) {
            await this.crawlPage(link, depth + 1);
          }
        } else {
          this.brokenLinks.push({ url: link, status, error: this.getStatusMessage(status) });
        }
      }

      // Check for missing content indicators
      this.checkForMissingContent($, url);

    } catch (error) {
      console.error(`❌ Error analyzing ${url}:`, error.message);
      this.brokenLinks.push({ url, status: 0, error: error.message });
    }
  }

  async fetchPage(url) {
    return new Promise((resolve, reject) => {
      const protocol = url.startsWith('https:') ? https : http;
      
      const request = protocol.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)'
        }
      }, (response) => {
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

      request.on('timeout', () => {
        request.destroy();
        reject(new Error('Request timeout'));
      });
    });
  }

  extractLinks($, baseUrl) {
    const links = new Set();
    
    // Extract all href attributes
    $('a[href]').each((i, element) => {
      const href = $(element).attr('href');
      if (href) {
        const absoluteUrl = this.resolveUrl(href, baseUrl);
        if (absoluteUrl) {
          links.add(absoluteUrl);
        }
      }
    });

    // Extract src attributes from images, scripts, etc.
    $('img[src], script[src], link[href]').each((i, element) => {
      const src = $(element).attr('src') || $(element).attr('href');
      if (src) {
        const absoluteUrl = this.resolveUrl(src, baseUrl);
        if (absoluteUrl) {
          links.add(absoluteUrl);
        }
      }
    });

    return Array.from(links);
  }

  resolveUrl(href, baseUrl) {
    try {
      // Handle relative URLs
      if (href.startsWith('/')) {
        const base = new URL(baseUrl);
        return `${base.protocol}//${base.host}${href}`;
      }
      
      // Handle protocol-relative URLs
      if (href.startsWith('//')) {
        const base = new URL(baseUrl);
        return `${base.protocol}${href}`;
      }
      
      // Handle absolute URLs
      if (href.startsWith('http://') || href.startsWith('https://')) {
        return href;
      }
      
      // Handle relative URLs without leading slash
      if (!href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        const base = new URL(baseUrl);
        const path = base.pathname.endsWith('/') ? base.pathname : base.pathname + '/';
        return `${base.protocol}//${base.host}${path}${href}`;
      }
      
      return null;
    } catch (error) {
      return null;
    }
  }

  isInternalLink(url) {
    try {
      const linkUrl = new URL(url);
      const baseUrl = new URL(this.baseUrl);
      return linkUrl.hostname === baseUrl.hostname;
    } catch {
      return false;
    }
  }

  async checkLink(url) {
    return new Promise((resolve) => {
      const protocol = url.startsWith('https:') ? https : http;
      
      const request = protocol.get(url, {
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)'
        }
      }, (response) => {
        resolve(response.statusCode);
      });

      request.on('error', () => {
        resolve(0);
      });

      request.on('timeout', () => {
        request.destroy();
        resolve(0);
      });
    });
  }

  checkForMissingContent($, url) {
    // Check for common missing content indicators
    const missingContentIndicators = [
      '404',
      'not found',
      'page not found',
      'coming soon',
      'under construction',
      'maintenance',
      'temporarily unavailable'
    ];

    const pageText = $('body').text().toLowerCase();
    const pageTitle = $('title').text().toLowerCase();
    
    for (const indicator of missingContentIndicators) {
      if (pageText.includes(indicator) || pageTitle.includes(indicator)) {
        this.missingPages.push({
          url,
          indicator,
          title: $('title').text(),
          description: $('meta[name="description"]').attr('content') || 'No description'
        });
        break;
      }
    }
  }

  getStatusMessage(status) {
    const statusMessages = {
      0: 'Connection failed',
      400: 'Bad Request',
      401: 'Unauthorized',
      403: 'Forbidden',
      404: 'Not Found',
      500: 'Internal Server Error',
      502: 'Bad Gateway',
      503: 'Service Unavailable',
      504: 'Gateway Timeout'
    };
    return statusMessages[status] || `HTTP ${status}`;
  }

  generateReport() {
    console.log('\n' + '=' * 60);
    console.log('📊 WEBSITE ANALYSIS REPORT');
    console.log('=' * 60);
    
    console.log(`\n📈 SUMMARY:`);
    console.log(`Total URLs analyzed: ${this.visitedUrls.size}`);
    console.log(`Total links found: ${this.allLinks.size}`);
    console.log(`Working links: ${this.workingLinks.length}`);
    console.log(`Broken links: ${this.brokenLinks.length}`);
    console.log(`Missing content pages: ${this.missingPages.length}`);

    if (this.brokenLinks.length > 0) {
      console.log(`\n❌ BROKEN LINKS (${this.brokenLinks.length}):`);
      this.brokenLinks.forEach((link, index) => {
        console.log(`${index + 1}. ${link.url}`);
        console.log(`   Status: ${link.status} - ${link.error}`);
      });
    }

    if (this.missingPages.length > 0) {
      console.log(`\n⚠️  MISSING CONTENT PAGES (${this.missingPages.length}):`);
      this.missingPages.forEach((page, index) => {
        console.log(`${index + 1}. ${page.url}`);
        console.log(`   Title: ${page.title}`);
        console.log(`   Issue: ${page.indicator}`);
        console.log(`   Description: ${page.description}`);
      });
    }

    if (this.workingLinks.length > 0) {
      console.log(`\n✅ WORKING LINKS (${this.workingLinks.length}):`);
      this.workingLinks.slice(0, 10).forEach((link, index) => {
        console.log(`${index + 1}. ${link.url} (${link.status})`);
      });
      if (this.workingLinks.length > 10) {
        console.log(`... and ${this.workingLinks.length - 10} more`);
      }
    }

    // Save detailed report to file
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalUrlsAnalyzed: this.visitedUrls.size,
        totalLinksFound: this.allLinks.size,
        workingLinks: this.workingLinks.length,
        brokenLinks: this.brokenLinks.length,
        missingPages: this.missingPages.length
      },
      brokenLinks: this.brokenLinks,
      missingPages: this.missingPages,
      workingLinks: this.workingLinks,
      allLinks: Array.from(this.allLinks)
    };

    fs.writeFileSync(
      '/workspace/website-analysis-report.json',
      JSON.stringify(report, null, 2)
    );

    console.log(`\n📄 Detailed report saved to: website-analysis-report.json`);
  }
}

// Run the analysis
const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
analyzer.analyze().catch(console.error);