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
    this.analysisResults = {
      totalLinks: 0,
      brokenLinks: 0,
      missingPages: 0,
      validLinks: 0,
      pages: []
    };
  }

  async analyze() {
    console.log(`🔍 Starting comprehensive analysis of ${this.baseUrl}`);
    console.log('=' .repeat(80));
    
    try {
      await this.crawlPage(this.baseUrl, 0);
      this.generateReport();
    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
    }
  }

  async crawlPage(url, depth = 0) {
    if (depth > 3 || this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`📄 Analyzing: ${url} (depth: ${depth})`);

    try {
      const content = await this.fetchPage(url);
      if (content) {
        const links = this.extractLinks(content, url);
        this.analysisResults.totalLinks += links.length;
        
        const pageInfo = {
          url,
          depth,
          status: 'valid',
          links: links.length,
          title: this.extractTitle(content),
          description: this.extractDescription(content),
          headings: this.extractHeadings(content),
          images: this.extractImages(content),
          forms: this.extractForms(content)
        };

        this.analysisResults.pages.push(pageInfo);

        // Check each link
        for (const link of links) {
          await this.checkLink(link, depth + 1);
        }
      }
    } catch (error) {
      console.log(`❌ Failed to analyze ${url}: ${error.message}`);
      this.brokenLinks.push({
        url,
        error: error.message,
        depth
      });
      this.analysisResults.brokenLinks++;
    }
  }

  async fetchPage(url) {
    return new Promise((resolve, reject) => {
      const protocol = url.startsWith('https:') ? https : http;
      
      const request = protocol.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate',
          'Connection': 'keep-alive',
        }
      }, (response) => {
        let data = '';
        
        response.on('data', (chunk) => {
          data += chunk;
        });
        
        response.on('end', () => {
          if (response.statusCode >= 200 && response.statusCode < 300) {
            resolve(data);
          } else {
            reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
          }
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

  extractLinks(html, baseUrl) {
    const links = [];
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    let match;
    
    while ((match = linkRegex.exec(html)) !== null) {
      const href = match[1];
      const absoluteUrl = this.resolveUrl(href, baseUrl);
      
      if (absoluteUrl && absoluteUrl.startsWith(this.baseUrl)) {
        links.push(absoluteUrl);
      }
    }
    
    return [...new Set(links)]; // Remove duplicates
  }

  resolveUrl(href, baseUrl) {
    try {
      return new URL(href, baseUrl).href;
    } catch (error) {
      return null;
    }
  }

  async checkLink(url, depth) {
    try {
      const response = await this.makeHeadRequest(url);
      if (response.statusCode >= 200 && response.statusCode < 300) {
        this.validLinks.push(url);
        this.analysisResults.validLinks++;
        
        // If it's a page (not a resource), crawl it
        if (this.isPage(url) && depth < 3) {
          await this.crawlPage(url, depth);
        }
      } else {
        this.brokenLinks.push({
          url,
          status: response.statusCode,
          depth
        });
        this.analysisResults.brokenLinks++;
      }
    } catch (error) {
      this.brokenLinks.push({
        url,
        error: error.message,
        depth
      });
      this.analysisResults.brokenLinks++;
    }
  }

  async makeHeadRequest(url) {
    return new Promise((resolve, reject) => {
      const protocol = url.startsWith('https:') ? https : http;
      
      const request = protocol.request(url, {
        method: 'HEAD',
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)'
        }
      }, (response) => {
        resolve(response);
      });
      
      request.on('error', reject);
      request.on('timeout', () => {
        request.destroy();
        reject(new Error('Request timeout'));
      });
      
      request.end();
    });
  }

  isPage(url) {
    const pageExtensions = ['.html', '.htm', '.php', '.asp', '.aspx', '.jsp'];
    const pathname = new URL(url).pathname;
    
    // Check if it's a page extension
    if (pageExtensions.some(ext => pathname.toLowerCase().endsWith(ext))) {
      return true;
    }
    
    // Check if it's a root path or ends with /
    if (pathname === '/' || pathname.endsWith('/')) {
      return true;
    }
    
    // Check if it doesn't have a file extension (likely a page)
    if (!pathname.includes('.') || pathname.split('/').pop().includes('.')) {
      return true;
    }
    
    return false;
  }

  extractTitle(html) {
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    return titleMatch ? titleMatch[1].trim() : '';
  }

  extractDescription(html) {
    const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i);
    return descMatch ? descMatch[1].trim() : '';
  }

  extractHeadings(html) {
    const headings = [];
    const headingRegex = /<h([1-6])[^>]*>([^<]+)<\/h[1-6]>/gi;
    let match;
    
    while ((match = headingRegex.exec(html)) !== null) {
      headings.push({
        level: parseInt(match[1]),
        text: match[2].trim()
      });
    }
    
    return headings;
  }

  extractImages(html) {
    const images = [];
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    let match;
    
    while ((match = imgRegex.exec(html)) !== null) {
      images.push(match[1]);
    }
    
    return images;
  }

  extractForms(html) {
    const forms = [];
    const formRegex = /<form[^>]*>[\s\S]*?<\/form>/gi;
    let match;
    
    while ((match = formRegex.exec(html)) !== null) {
      forms.push(match[0]);
    }
    
    return forms;
  }

  generateReport() {
    console.log('\n' + '='.repeat(80));
    console.log('📊 ANALYSIS REPORT');
    console.log('='.repeat(80));
    
    console.log(`\n📈 SUMMARY:`);
    console.log(`   Total Links Found: ${this.analysisResults.totalLinks}`);
    console.log(`   Valid Links: ${this.analysisResults.validLinks}`);
    console.log(`   Broken Links: ${this.analysisResults.brokenLinks}`);
    console.log(`   Pages Analyzed: ${this.analysisResults.pages.length}`);
    
    if (this.brokenLinks.length > 0) {
      console.log(`\n❌ BROKEN LINKS (${this.brokenLinks.length}):`);
      this.brokenLinks.forEach((link, index) => {
        console.log(`   ${index + 1}. ${link.url}`);
        console.log(`      Error: ${link.error || `HTTP ${link.status}`}`);
        console.log(`      Depth: ${link.depth}`);
        console.log('');
      });
    }
    
    console.log(`\n📄 PAGES ANALYZED:`);
    this.analysisResults.pages.forEach((page, index) => {
      console.log(`   ${index + 1}. ${page.url}`);
      console.log(`      Title: ${page.title || 'No title'}`);
      console.log(`      Links: ${page.links}`);
      console.log(`      Headings: ${page.headings.length}`);
      console.log(`      Images: ${page.images.length}`);
      console.log(`      Forms: ${page.forms.length}`);
      console.log('');
    });
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: this.analysisResults,
      brokenLinks: this.brokenLinks,
      pages: this.analysisResults.pages,
      validLinks: this.validLinks
    };
    
    fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
    console.log('💾 Detailed report saved to: website-analysis-report.json');
    
    // Generate missing pages list
    this.generateMissingPagesList();
  }

  generateMissingPagesList() {
    const expectedPages = [
      '/about',
      '/ai-services',
      '/ai-marketing',
      '/ai-automation',
      '/ai-healthcare',
      '/ai-fintech',
      '/ai-content-generation',
      '/ai-data-analytics',
      '/ai-cybersecurity',
      '/ai-workflow-automation',
      '/ai-mobile-app-development',
      '/ai-ecommerce-solutions',
      '/quantum-computing',
      '/autonomous-systems',
      '/blockchain-web3',
      '/iot-edge-computing',
      '/business-intelligence',
      '/robotics',
      '/micro-saas',
      '/it-infrastructure',
      '/it-services',
      '/cybersecurity',
      '/devops',
      '/database',
      '/networking',
      '/case-studies',
      '/blog',
      '/contact',
      '/team',
      '/careers',
      '/news',
      '/docs',
      '/api-docs',
      '/support',
      '/status',
      '/privacy',
      '/terms',
      '/cookies',
      '/gdpr',
      '/security'
    ];

    const existingPages = this.analysisResults.pages.map(page => {
      try {
        return new URL(page.url).pathname;
      } catch {
        return page.url;
      }
    });

    const missingPages = expectedPages.filter(page => 
      !existingPages.includes(page) && 
      !existingPages.includes(page + '/')
    );

    if (missingPages.length > 0) {
      console.log(`\n📝 MISSING PAGES (${missingPages.length}):`);
      missingPages.forEach((page, index) => {
        console.log(`   ${index + 1}. ${this.baseUrl}${page}`);
      });
      
      this.missingPages = missingPages;
    } else {
      console.log('\n✅ All expected pages are present!');
    }
  }
}

// Run the analysis
const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
analyzer.analyze().catch(console.error);