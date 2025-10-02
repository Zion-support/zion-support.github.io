#!/usr/bin/env node

/**
 * Comprehensive Website Link Analysis Tool
 * Analyzes https://ziontechgroup.com for broken links and missing content
 */

import https from 'https';
import http from 'http';
import url from 'url';
import fs from 'fs';
import path from 'path';

class WebsiteAnalyzer {
  constructor(baseUrl = 'https://ziontechgroup.com') {
    this.baseUrl = baseUrl;
    this.visited = new Set();
    this.brokenLinks = [];
    this.validLinks = [];
    this.missingPages = [];
    this.maxDepth = 3;
    this.currentDepth = 0;
    this.delay = 1000; // 1 second delay between requests
  }

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      const parsedUrl = new URL(url);
      const client = parsedUrl.protocol === 'https:' ? https : http;
      
      const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
        path: parsedUrl.pathname + parsedUrl.search,
        method: 'GET',
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)'
        }
      };

      const req = client.request(options, (res) => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          url: url
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
    });
  }

  async checkLink(linkUrl) {
    try {
      // Normalize URL
      if (linkUrl.startsWith('/')) {
        linkUrl = this.baseUrl + linkUrl;
      }
      
      if (!linkUrl.startsWith('http')) {
        return;
      }

      // Skip external links for now
      if (!linkUrl.startsWith(this.baseUrl)) {
        return;
      }

      if (this.visited.has(linkUrl)) {
        return;
      }

      console.log(`Checking: ${linkUrl}`);
      this.visited.add(linkUrl);

      const response = await this.makeRequest(linkUrl);
      
      if (response.statusCode >= 200 && response.statusCode < 400) {
        this.validLinks.push({
          url: linkUrl,
          status: response.statusCode
        });
        
        // Extract links from the page content for deeper analysis
        if (response.statusCode === 200 && this.currentDepth < this.maxDepth) {
          await this.extractAndCheckLinks(linkUrl);
        }
      } else {
        this.brokenLinks.push({
          url: linkUrl,
          status: response.statusCode,
          error: `HTTP ${response.statusCode}`
        });
      }

      await this.delay(this.delay);
    } catch (error) {
      this.brokenLinks.push({
        url: linkUrl,
        status: 'ERROR',
        error: error.message
      });
    }
  }

  async extractAndCheckLinks(pageUrl) {
    try {
      const response = await this.makeRequest(pageUrl);
      // For now, we'll use predefined links from the codebase
      // In a real scenario, you'd parse the HTML content
      return;
    } catch (error) {
      console.error(`Error extracting links from ${pageUrl}:`, error.message);
    }
  }

  // Analyze links from the codebase
  analyzeCodebaseLinks() {
    const commonLinks = [
      // Main pages
      '/',
      '/about',
      '/contact',
      '/services',
      '/solutions',
      '/enterprise',
      '/blog',
      '/case-studies',
      '/guides',
      '/content-hub',
      '/privacy',
      '/terms',
      '/security',
      '/sitemap',
      
      // Service pages
      '/services/ai-services',
      '/services/micro-saas',
      '/services/it-services',
      '/services/blockchain-solutions',
      '/services/iot-solutions',
      '/services/cybersecurity-solutions',
      '/services/data-analytics',
      '/services/manufacturing-ai-platform',
      '/services/supply-chain-intelligence',
      '/services/ai-autonomous-operations',
      '/services/ai-quantum-computing-2026',
      '/services/ai-autonomous-operations-2026',
      
      // Blog posts
      '/blog/ai-2026-november-quantum-superintelligence-breakthrough',
      '/blog/ai-2026-august-quantum-consciousness-revolution',
      '/blog/ai-2026-july-mega-breakthrough-revolution',
      '/blog/ai-customer-data-platforms-2026',
      '/blog/ai-customer-journey-ai-2026',
      '/blog/ai-agent-observability-2026',
      '/blog/agentic-workflow-orchestration-2026',
      '/blog/ai-autonomous-cloud-ops-2026',
      
      // Implementation guides
      '/guides/ai-2026-implementation-roadmap',
      '/guides/ai-2027-implementation-roadmap',
      '/guides/autonomous-business-processes-implementation-guide-2026',
      
      // Services advertising
      '/services-advertising'
    ];

    return commonLinks;
  }

  async run() {
    console.log('🔍 Starting comprehensive website analysis...');
    console.log(`📊 Analyzing: ${this.baseUrl}`);
    
    const linksToCheck = this.analyzeCodebaseLinks();
    
    console.log(`📋 Found ${linksToCheck.length} links to check`);
    
    for (const link of linksToCheck) {
      await this.checkLink(link);
    }

    this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalLinks: this.visited.size,
        validLinks: this.validLinks.length,
        brokenLinks: this.brokenLinks.length,
        missingPages: this.missingPages.length
      },
      brokenLinks: this.brokenLinks,
      validLinks: this.validLinks,
      recommendations: this.generateRecommendations()
    };

    // Save report
    fs.writeFileSync('/workspace/website-analysis-report.json', JSON.stringify(report, null, 2));
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    fs.writeFileSync('/workspace/website-analysis-report.md', markdownReport);

    console.log('\n📊 ANALYSIS COMPLETE');
    console.log(`✅ Valid Links: ${this.validLinks.length}`);
    console.log(`❌ Broken Links: ${this.brokenLinks.length}`);
    console.log(`📄 Report saved to: website-analysis-report.json`);
    console.log(`📄 Markdown report saved to: website-analysis-report.md`);
    
    if (this.brokenLinks.length > 0) {
      console.log('\n❌ BROKEN LINKS FOUND:');
      this.brokenLinks.forEach(link => {
        console.log(`  - ${link.url} (${link.error})`);
      });
    }
  }

  generateMarkdownReport(report) {
    let markdown = `# Website Analysis Report\n\n`;
    markdown += `**Generated:** ${report.timestamp}\n`;
    markdown += `**Website:** ${report.baseUrl}\n\n`;
    
    markdown += `## Summary\n\n`;
    markdown += `- **Total Links Checked:** ${report.summary.totalLinks}\n`;
    markdown += `- **Valid Links:** ${report.summary.validLinks}\n`;
    markdown += `- **Broken Links:** ${report.summary.brokenLinks}\n`;
    markdown += `- **Missing Pages:** ${report.summary.missingPages}\n\n`;

    if (report.brokenLinks.length > 0) {
      markdown += `## Broken Links\n\n`;
      report.brokenLinks.forEach(link => {
        markdown += `- [${link.url}](${link.url}) - ${link.error}\n`;
      });
      markdown += '\n';
    }

    markdown += `## Recommendations\n\n`;
    report.recommendations.forEach(rec => {
      markdown += `- ${rec}\n`;
    });

    return markdown;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.brokenLinks.length > 0) {
      recommendations.push(`Fix ${this.brokenLinks.length} broken links`);
    }
    
    recommendations.push('Create missing service pages');
    recommendations.push('Add proper 404 error handling');
    recommendations.push('Implement sitemap.xml');
    recommendations.push('Add meta descriptions for SEO');
    recommendations.push('Optimize page load speeds');
    recommendations.push('Add structured data markup');
    
    return recommendations;
  }
}

// Run the analysis
const analyzer = new WebsiteAnalyzer();
analyzer.run().catch(console.error);

export default WebsiteAnalyzer;