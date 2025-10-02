#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Website analysis configuration
const BASE_URL = 'https://ziontechgroup.com';
const MAX_DEPTH = 3;
const CONCURRENT_REQUESTS = 5;

class WebsiteAnalyzer {
  constructor() {
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.workingLinks = [];
    this.internalLinks = [];
    this.externalLinks = [];
    this.missingPages = [];
    this.visitedPages = [];
    this.requestQueue = [];
    this.activeRequests = 0;
  }

  async analyzeWebsite() {
    console.log('🔍 Starting comprehensive website analysis...');
    console.log(`📍 Base URL: ${BASE_URL}`);
    
    try {
      await this.crawlPage(BASE_URL, 0);
      
      // Process remaining queue
      while (this.requestQueue.length > 0 || this.activeRequests > 0) {
        await this.processQueue();
        await this.sleep(100);
      }
      
      await this.generateReport();
      
    } catch (error) {
      console.error('❌ Analysis failed:', error);
    }
  }

  async crawlPage(url, depth) {
    if (depth > MAX_DEPTH || this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    this.requestQueue.push({ url, depth });
    await this.processQueue();
  }

  async processQueue() {
    while (this.requestQueue.length > 0 && this.activeRequests < CONCURRENT_REQUESTS) {
      const { url, depth } = this.requestQueue.shift();
      this.activeRequests++;
      
      this.analyzePage(url, depth).finally(() => {
        this.activeRequests--;
      });
    }
  }

  async analyzePage(url, depth) {
    try {
      console.log(`🔍 Analyzing: ${url} (depth: ${depth})`);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)',
        },
        redirect: 'follow'
      });

      if (response.ok) {
        this.workingLinks.push({
          url,
          status: response.status,
          statusText: response.statusText,
          contentType: response.headers.get('content-type'),
          depth
        });
        
        this.visitedPages.push(url);
        
        // Only parse HTML pages for links
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('text/html')) {
          const html = await response.text();
          await this.extractLinks(html, url, depth);
        }
      } else {
        this.brokenLinks.push({
          url,
          status: response.status,
          statusText: response.statusText,
          contentType: response.headers.get('content-type'),
          depth,
          parentUrl: url
        });
      }
    } catch (error) {
      console.error(`❌ Error analyzing ${url}:`, error.message);
      this.brokenLinks.push({
        url,
        status: 'ERROR',
        statusText: error.message,
        contentType: null,
        depth,
        parentUrl: url
      });
    }
  }

  async extractLinks(html, parentUrl, depth) {
    try {
      // Extract links using regex (simple approach)
      const linkRegex = /href=["']([^"']+)["']/gi;
      const srcRegex = /src=["']([^"']+)["']/gi;
      
      const links = [];
      let match;
      
      // Extract href links
      while ((match = linkRegex.exec(html)) !== null) {
        links.push(match[1]);
      }
      
      // Extract src links
      while ((match = srcRegex.exec(html)) !== null) {
        links.push(match[1]);
      }
      
      for (const link of links) {
        const absoluteUrl = this.resolveUrl(link, parentUrl);
        
        if (this.isInternalLink(absoluteUrl)) {
          this.internalLinks.push({
            url: absoluteUrl,
            parentUrl: parentUrl,
            depth: depth + 1
          });
          
          // Queue for further analysis
          if (depth < MAX_DEPTH && !this.visitedUrls.has(absoluteUrl)) {
            this.requestQueue.push({ url: absoluteUrl, depth: depth + 1 });
          }
        } else {
          this.externalLinks.push({
            url: absoluteUrl,
            parentUrl: parentUrl,
            depth: depth + 1
          });
        }
      }
    } catch (error) {
      console.error(`❌ Error extracting links from ${parentUrl}:`, error.message);
    }
  }

  resolveUrl(link, baseUrl) {
    try {
      if (link.startsWith('http://') || link.startsWith('https://')) {
        return link;
      }
      
      if (link.startsWith('//')) {
        return 'https:' + link;
      }
      
      if (link.startsWith('/')) {
        const base = new URL(baseUrl);
        return `${base.protocol}//${base.host}${link}`;
      }
      
      const base = new URL(baseUrl);
      const basePath = base.pathname.endsWith('/') ? base.pathname : dirname(base.pathname);
      return `${base.protocol}//${base.host}${basePath}/${link}`;
    } catch (error) {
      return link;
    }
  }

  isInternalLink(url) {
    try {
      const urlObj = new URL(url);
      const baseObj = new URL(BASE_URL);
      return urlObj.hostname === baseObj.hostname;
    } catch {
      return false;
    }
  }

  async generateReport() {
    console.log('\n📊 Generating comprehensive analysis report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: BASE_URL,
      summary: {
        totalLinksChecked: this.workingLinks.length + this.brokenLinks.length,
        brokenLinks: this.brokenLinks.length,
        workingLinks: this.workingLinks.length,
        internalLinks: this.internalLinks.length,
        externalLinks: this.externalLinks.length,
        pagesVisited: this.visitedPages.length,
        successRate: `${((this.workingLinks.length / (this.workingLinks.length + this.brokenLinks.length)) * 100).toFixed(2)}%`
      },
      brokenLinks: this.brokenLinks,
      workingLinks: this.workingLinks,
      internalLinks: this.internalLinks,
      externalLinks: this.externalLinks,
      visitedPages: this.visitedPages,
      recommendations: this.generateRecommendations()
    };
    
    // Save report
    const reportPath = join(__dirname, 'website-analysis-comprehensive.json');
    writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Generate summary
    console.log('\n📈 ANALYSIS SUMMARY:');
    console.log(`✅ Working Links: ${report.summary.workingLinks}`);
    console.log(`❌ Broken Links: ${report.summary.brokenLinks}`);
    console.log(`🔗 Internal Links: ${report.summary.internalLinks}`);
    console.log(`🌐 External Links: ${report.summary.externalLinks}`);
    console.log(`📄 Pages Visited: ${report.summary.pagesVisited}`);
    console.log(`📊 Success Rate: ${report.summary.successRate}`);
    
    if (report.brokenLinks.length > 0) {
      console.log('\n❌ BROKEN LINKS FOUND:');
      report.brokenLinks.forEach(link => {
        console.log(`  - ${link.url} (${link.status})`);
      });
    }
    
    console.log('\n💡 RECOMMENDATIONS:');
    report.recommendations.forEach(rec => {
      console.log(`  - ${rec}`);
    });
    
    console.log(`\n📄 Full report saved to: ${reportPath}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.brokenLinks.length > 0) {
      recommendations.push(`Fix ${this.brokenLinks.length} broken links found during analysis`);
    }
    
    if (this.externalLinks.length > 0) {
      recommendations.push(`Review ${this.externalLinks.length} external links for relevance and accessibility`);
    }
    
    recommendations.push('Implement proper error handling for missing pages');
    recommendations.push('Add comprehensive navigation structure');
    recommendations.push('Optimize internal linking for better SEO');
    recommendations.push('Implement proper redirects for moved content');
    recommendations.push('Add sitemap.xml for better search engine indexing');
    
    return recommendations;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Run analysis
const analyzer = new WebsiteAnalyzer();
analyzer.analyzeWebsite().catch(console.error);