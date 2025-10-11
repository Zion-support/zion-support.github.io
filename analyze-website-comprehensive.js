#!/usr/bin/env node

import https from 'https';
import http from 'http';
import { URL } from 'url';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      analysisDate: new Date().toISOString(),
      baseUrl: baseUrl
    };
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
          valid: res.statusCode >= 200 && res.statusCode < 400,
          redirect: res.statusCode >= 300 && res.statusCode < 400
        });
      });

      req.on('error', (error) => {
        resolve({
          url,
          status: 0,
          statusText: error.message,
          valid: false,
          error: true
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({
          url,
          status: 0,
          statusText: 'Timeout',
          valid: false,
          timeout: true
        });
      });

      req.setTimeout(10000);
      req.end();
    });
  }

  async analyzePage(url) {
    if (this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`Analyzing: ${url}`);

    try {
      const result = await this.checkUrl(url);
      this.analysisResults.totalLinks++;

      if (result.valid) {
        this.validLinks.push(result);
        this.analysisResults.validLinks++;
        console.log(`✓ ${url} - ${result.status}`);
      } else {
        this.brokenLinks.push(result);
        this.analysisResults.brokenLinks++;
        console.log(`✗ ${url} - ${result.status} ${result.statusText}`);
      }
    } catch (error) {
      const errorResult = {
        url,
        status: 0,
        statusText: error.message,
        valid: false,
        error: true
      };
      this.brokenLinks.push(errorResult);
      this.analysisResults.brokenLinks++;
      console.log(`✗ ${url} - Error: ${error.message}`);
    }
  }

  async analyzeWebsite() {
    console.log(`Starting comprehensive analysis of ${this.baseUrl}`);
    console.log('=' .repeat(60));

    // Main pages to check
    const mainPages = [
      '/',
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
      '/sitemap'
    ];

    // Check main pages
    for (const page of mainPages) {
      const fullUrl = `${this.baseUrl}${page}`;
      await this.analyzePage(fullUrl);
    }

    // Check additional pages that might exist
    const additionalPages = [
      '/team',
      '/partners',
      '/status',
      '/faq',
      '/docs',
      '/api-docs',
      '/community',
      '/compliance',
      '/enterprise',
      '/digital-transformation',
      '/business-intelligence',
      '/custom-software'
    ];

    for (const page of additionalPages) {
      const fullUrl = `${this.baseUrl}${page}`;
      await this.analyzePage(fullUrl);
    }

    // Check AI service pages
    const aiServicePages = [
      '/ai-services?category=Customer Service',
      '/ai-services?category=Analytics',
      '/ai-services?category=Quantum Computing',
      '/ai-services?category=Autonomous Systems'
    ];

    for (const page of aiServicePages) {
      const fullUrl = `${this.baseUrl}${page}`;
      await this.analyzePage(fullUrl);
    }

    // Check IT service pages
    const itServicePages = [
      '/it-services?category=Cloud',
      '/it-services?category=Security',
      '/it-services?category=5G Technology',
      '/it-services?category=Blockchain',
      '/it-services?category=Edge Computing'
    ];

    for (const page of itServicePages) {
      const fullUrl = `${this.baseUrl}${page}`;
      await this.analyzePage(fullUrl);
    }

    // Check Micro SaaS pages
    const microSaasPages = [
      '/micro-saas?category=Analytics',
      '/micro-saas?category=Customer Service',
      '/micro-saas?category=Finance',
      '/micro-saas?category=Marketing'
    ];

    for (const page of microSaasPages) {
      const fullUrl = `${this.baseUrl}${page}`;
      await this.analyzePage(fullUrl);
    }

    console.log('\n' + '=' .repeat(60));
    console.log('ANALYSIS COMPLETE');
    console.log('=' .repeat(60));
    console.log(`Total links checked: ${this.analysisResults.totalLinks}`);
    console.log(`Valid links: ${this.analysisResults.validLinks}`);
    console.log(`Broken links: ${this.analysisResults.brokenLinks}`);
    console.log(`Missing pages: ${this.analysisResults.missingPages}`);

    return this.generateReport();
  }

  generateReport() {
    const report = {
      ...this.analysisResults,
      brokenLinks: this.brokenLinks,
      validLinks: this.validLinks,
      recommendations: this.generateRecommendations()
    };

    // Save report to file
    const reportPath = path.join(__dirname, 'website-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\nReport saved to: ${reportPath}`);

    return report;
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.brokenLinks.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Broken Links',
        description: 'Fix broken links to improve user experience and SEO',
        count: this.brokenLinks.length,
        links: this.brokenLinks.map(link => link.url)
      });
    }

    // Check for missing common pages
    const commonPages = ['/team', '/faq', '/docs', '/community', '/status'];
    const missingCommonPages = commonPages.filter(page => 
      !this.validLinks.some(link => link.url.includes(page))
    );

    if (missingCommonPages.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        category: 'Missing Pages',
        description: 'Create missing common pages for better user experience',
        count: missingCommonPages.length,
        pages: missingCommonPages
      });
    }

    // Check for missing service category pages
    const serviceCategories = [
      '/ai-services?category=Customer Service',
      '/ai-services?category=Analytics',
      '/it-services?category=Cloud',
      '/it-services?category=Security'
    ];
    
    const missingServicePages = serviceCategories.filter(page => 
      !this.validLinks.some(link => link.url.includes(page))
    );

    if (missingServicePages.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Missing Service Pages',
        description: 'Create missing service category pages for better navigation',
        count: missingServicePages.length,
        pages: missingServicePages
      });
    }

    return recommendations;
  }
}

// Run the analysis
async function main() {
  const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
  try {
    const report = await analyzer.analyzeWebsite();
    console.log('\nRECOMMENDATIONS:');
    console.log('=' .repeat(60));
    report.recommendations.forEach((rec, index) => {
      console.log(`${index + 1}. [${rec.priority}] ${rec.category}`);
      console.log(`   ${rec.description}`);
      console.log(`   Count: ${rec.count}`);
      if (rec.links) {
        console.log(`   Links: ${rec.links.join(', ')}`);
      }
      if (rec.pages) {
        console.log(`   Pages: ${rec.pages.join(', ')}`);
      }
      console.log('');
    });
  } catch (error) {
    console.error('Analysis failed:', error);
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default WebsiteAnalyzer;