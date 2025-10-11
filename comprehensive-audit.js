#!/usr/bin/env node

import https from 'https';
import http from 'http';
import { URL } from 'url';
import fs from 'fs';

class ComprehensiveWebsiteAuditor {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.validLinks = [];
    this.missingPages = [];
    this.externalLinks = [];
    this.internalLinks = [];
    this.maxDepth = 2;
    this.currentDepth = 0;
    this.delay = 100; // Delay between requests in ms
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditor/1.0)'
        }
      };

      const client = urlObj.protocol === 'https:' ? https : http;
      
      const req = client.request(options, (res) => {
        resolve({
          url,
          status: res.statusCode,
          statusText: res.statusMessage,
          headers: res.headers,
          success: res.statusCode >= 200 && res.statusCode < 400
        });
      });

      req.on('error', (error) => {
        resolve({
          url,
          status: 0,
          statusText: error.message,
          headers: {},
          success: false,
          error: error.message
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({
          url,
          status: 0,
          statusText: 'Timeout',
          headers: {},
          success: false,
          error: 'Request timeout'
        });
      });

      req.setTimeout(10000);
      req.end();
    });
  }

  async getPageContent(url) {
    return new Promise((resolve) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'GET',
        timeout: 15000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditor/1.0)'
        }
      };

      const client = urlObj.protocol === 'https:' ? https : http;
      
      const req = client.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          resolve({
            url,
            content: data,
            status: res.statusCode,
            success: res.statusCode >= 200 && res.statusCode < 400
          });
        });
      });

      req.on('error', (error) => {
        resolve({
          url,
          content: '',
          status: 0,
          success: false,
          error: error.message
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({
          url,
          content: '',
          status: 0,
          success: false,
          error: 'Request timeout'
        });
      });

      req.setTimeout(15000);
      req.end();
    });
  }

  extractLinks(html, baseUrl) {
    const links = [];
    const baseUrlObj = new URL(baseUrl);
    
    // Extract href attributes from anchor tags
    const hrefRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    let match;
    while ((match = hrefRegex.exec(html)) !== null) {
      const href = match[1];
      try {
        const absoluteUrl = new URL(href, baseUrl).href;
        links.push(absoluteUrl);
      } catch (e) {
        // Invalid URL, skip
      }
    }

    // Extract src attributes from img tags
    const srcRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    while ((match = srcRegex.exec(html)) !== null) {
      const src = match[1];
      try {
        const absoluteUrl = new URL(src, baseUrl).href;
        links.push(absoluteUrl);
      } catch (e) {
        // Invalid URL, skip
      }
    }

    return links;
  }

  isInternalLink(url) {
    try {
      const urlObj = new URL(url);
      const baseUrlObj = new URL(this.baseUrl);
      return urlObj.hostname === baseUrlObj.hostname;
    } catch (e) {
      return false;
    }
  }

  async auditPage(url, depth = 0) {
    if (depth > this.maxDepth || this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`🔍 Auditing: ${url} (depth: ${depth})`);

    // Add delay to be respectful
    await this.sleep(this.delay);

    // Check if URL is accessible
    const urlCheck = await this.checkUrl(url);
    
    if (!urlCheck.success) {
      this.brokenLinks.push({
        url,
        status: urlCheck.status,
        statusText: urlCheck.statusText,
        error: urlCheck.error,
        depth
      });
      console.log(`❌ Broken link: ${url} - ${urlCheck.statusText}`);
      return;
    }

    this.validLinks.push({
      url,
      status: urlCheck.status,
      statusText: urlCheck.statusText,
      depth
    });

    // If it's an internal link, get the content and extract more links
    if (this.isInternalLink(url)) {
      this.internalLinks.push(url);
      const pageContent = await this.getPageContent(url);
      
      if (pageContent.success) {
        const links = this.extractLinks(pageContent.content, url);
        
        // Process each link
        for (const link of links) {
          if (this.isInternalLink(link)) {
            await this.auditPage(link, depth + 1);
          } else {
            this.externalLinks.push({
              url: link,
              source: url,
              depth
            });
          }
        }
      }
    }
  }

  async runAudit() {
    console.log(`🚀 Starting comprehensive audit of ${this.baseUrl}`);
    console.log(`📊 Maximum depth: ${this.maxDepth}`);
    console.log('='.repeat(50));

    // Start with the main page
    await this.auditPage(this.baseUrl);

    // Check common pages that might exist
    const commonPages = [
      '/about',
      '/contact',
      '/services',
      '/pricing',
      '/blog',
      '/case-studies',
      '/careers',
      '/ai-services',
      '/it-services',
      '/micro-saas',
      '/tutorials',
      '/consultation',
      '/demo',
      '/support',
      '/privacy',
      '/terms',
      '/cookies',
      '/sitemap',
      '/team'
    ];

    console.log('\n🔍 Checking common pages...');
    for (const page of commonPages) {
      const fullUrl = new URL(page, this.baseUrl).href;
      if (!this.visitedUrls.has(fullUrl)) {
        await this.auditPage(fullUrl, 0);
      }
    }

    // Generate report
    this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalPagesVisited: this.visitedUrls.size,
        validLinks: this.validLinks.length,
        brokenLinks: this.brokenLinks.length,
        externalLinks: this.externalLinks.length,
        internalLinks: this.internalLinks.length
      },
      brokenLinks: this.brokenLinks,
      validLinks: this.validLinks,
      externalLinks: this.externalLinks,
      internalLinks: this.internalLinks,
      recommendations: this.generateRecommendations()
    };

    // Save report to file
    fs.writeFileSync('comprehensive-audit-report.json', JSON.stringify(report, null, 2));
    
    // Print summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 AUDIT SUMMARY');
    console.log('='.repeat(50));
    console.log(`✅ Total pages visited: ${report.summary.totalPagesVisited}`);
    console.log(`✅ Valid links: ${report.summary.validLinks}`);
    console.log(`❌ Broken links: ${report.summary.brokenLinks}`);
    console.log(`🔗 External links: ${report.summary.externalLinks}`);
    console.log(`🏠 Internal links: ${report.summary.internalLinks}`);

    if (this.brokenLinks.length > 0) {
      console.log('\n❌ BROKEN LINKS:');
      this.brokenLinks.forEach(link => {
        console.log(`  - ${link.url} (${link.status}: ${link.statusText})`);
      });
    }

    console.log('\n🏠 INTERNAL PAGES FOUND:');
    this.internalLinks.forEach(link => {
      console.log(`  - ${link}`);
    });

    console.log('\n💡 RECOMMENDATIONS:');
    report.recommendations.forEach(rec => {
      console.log(`  - ${rec}`);
    });

    console.log('\n📄 Full report saved to: comprehensive-audit-report.json');
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.brokenLinks.length > 0) {
      recommendations.push(`Fix ${this.brokenLinks.length} broken links`);
    }

    if (this.externalLinks.length > 0) {
      recommendations.push(`Review ${this.externalLinks.length} external links for relevance`);
    }

    recommendations.push('Implement proper 404 error pages');
    recommendations.push('Add sitemap.xml for better SEO');
    recommendations.push('Implement proper redirects for moved pages');
    recommendations.push('Add meta descriptions and proper heading structure');
    recommendations.push('Ensure all internal links are working');
    recommendations.push('Add proper navigation structure');

    return recommendations;
  }
}

// Run the audit
async function main() {
  const auditor = new ComprehensiveWebsiteAuditor('https://ziontechgroup.com');
  await auditor.runAudit();
}

// Run the audit if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export default ComprehensiveWebsiteAuditor;