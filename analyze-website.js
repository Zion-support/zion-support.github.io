import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

// Configuration
const BASE_URL = 'https://ziontechgroup.com';
const LOCAL_URL = 'http://localhost:3000';
const MAX_DEPTH = 3;
const DELAY = 1000; // 1 second delay between requests

class WebsiteAnalyzer {
  constructor() {
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.validPages = [];
    this.errors = [];
    this.startTime = Date.now();
  }

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async fetchPage(url) {
    try {
      console.log(`🔍 Analyzing: ${url}`);
      const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      return {
        url,
        status: response.status,
        content: response.data,
        success: true
      };
    } catch (error) {
      console.log(`❌ Error fetching ${url}: ${error.message}`);
      return {
        url,
        status: error.response?.status || 0,
        content: null,
        success: false,
        error: error.message
      };
    }
  }

  extractLinks(html, baseUrl) {
    const $ = cheerio.load(html);
    const links = [];

    // Extract all links
    $('a[href]').each((i, element) => {
      const href = $(element).attr('href');
      if (href) {
        const absoluteUrl = this.resolveUrl(href, baseUrl);
        const text = $(element).text().trim();
        links.push({
          href: absoluteUrl,
          text: text,
          element: $(element).prop('outerHTML')
        });
      }
    });

    return links;
  }

  resolveUrl(href, baseUrl) {
    try {
      // Handle relative URLs
      if (href.startsWith('/')) {
        const base = new URL(baseUrl);
        return `${base.protocol}//${base.host}${href}`;
      }
      
      // Handle absolute URLs
      if (href.startsWith('http://') || href.startsWith('https://')) {
        return href;
      }
      
      // Handle relative URLs without leading slash
      if (!href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        const base = new URL(baseUrl);
        const pathname = base.pathname.endsWith('/') ? base.pathname : base.pathname + '/';
        return `${base.protocol}//${base.host}${pathname}${href}`;
      }
      
      return href;
    } catch (error) {
      return href;
    }
  }

  isInternalLink(url) {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname === 'ziontechgroup.com' || urlObj.hostname === 'localhost';
    } catch {
      return false;
    }
  }

  async analyzePage(url, depth = 0) {
    if (depth > MAX_DEPTH || this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    await this.delay(DELAY);

    const result = await this.fetchPage(url);
    
    if (result.success) {
      this.validPages.push({
        url: result.url,
        status: result.status,
        depth
      });

      // Extract and analyze links
      const links = this.extractLinks(result.content, result.url);
      
      for (const link of links) {
        if (this.isInternalLink(link.href) && !link.href.includes('#')) {
          await this.analyzePage(link.href, depth + 1);
        } else if (link.href.startsWith('http')) {
          // Check external links
          const linkResult = await this.fetchPage(link.href);
          if (!linkResult.success) {
            this.brokenLinks.push({
              url: link.href,
              text: link.text,
              source: result.url,
              status: linkResult.status,
              error: linkResult.error
            });
          }
        }
      }
    } else {
      this.brokenLinks.push({
        url: result.url,
        text: '',
        source: 'direct',
        status: result.status,
        error: result.error
      });
    }
  }

  async generateReport() {
    const report = {
      summary: {
        totalPagesAnalyzed: this.visitedUrls.size,
        validPages: this.validPages.length,
        brokenLinks: this.brokenLinks.length,
        analysisTime: Date.now() - this.startTime
      },
      validPages: this.validPages,
      brokenLinks: this.brokenLinks,
      recommendations: this.generateRecommendations()
    };

    // Save report to file
    fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
    
    console.log('\n📊 ANALYSIS COMPLETE');
    console.log('==================');
    console.log(`✅ Valid Pages: ${report.summary.validPages}`);
    console.log(`❌ Broken Links: ${report.summary.brokenLinks}`);
    console.log(`⏱️  Analysis Time: ${Math.round(report.summary.analysisTime / 1000)}s`);
    console.log('\n📄 Full report saved to: website-analysis-report.json');
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.brokenLinks.length > 0) {
      recommendations.push({
        type: 'critical',
        title: 'Fix Broken Links',
        description: `${this.brokenLinks.length} broken links found that need immediate attention`,
        actions: this.brokenLinks.map(link => `Fix: ${link.url} (from ${link.source})`)
      });
    }

    // Check for common missing pages
    const commonPages = [
      '/about', '/contact', '/services', '/blog', '/privacy', '/terms',
      '/ai-services', '/ai-marketing', '/ai-automation', '/quantum-computing',
      '/autonomous-systems', '/blockchain-web3', '/cybersecurity', '/team'
    ];

    const missingCommonPages = commonPages.filter(page => 
      !this.validPages.some(p => p.url.includes(page))
    );

    if (missingCommonPages.length > 0) {
      recommendations.push({
        type: 'high',
        title: 'Create Missing Pages',
        description: `Common pages that should exist but weren't found: ${missingCommonPages.length}`,
        actions: missingCommonPages.map(page => `Create page: ${page}`)
      });
    }

    return recommendations;
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting Zion Tech Group Website Analysis...\n');
  
  const analyzer = new WebsiteAnalyzer();
  
  try {
    // Start analysis from the main page
    await analyzer.analyzePage(BASE_URL);
    
    // Also check local development version
    console.log('\n🔍 Checking local development version...');
    await analyzer.analyzePage(LOCAL_URL);
    
    // Generate final report
    const report = await analyzer.generateReport();
    
    // Print broken links summary
    if (analyzer.brokenLinks.length > 0) {
      console.log('\n❌ BROKEN LINKS FOUND:');
      console.log('=====================');
      analyzer.brokenLinks.forEach((link, index) => {
        console.log(`${index + 1}. ${link.url}`);
        console.log(`   Status: ${link.status}`);
        console.log(`   Source: ${link.source}`);
        console.log(`   Error: ${link.error}`);
        console.log('');
      });
    }
    
  } catch (error) {
    console.error('❌ Analysis failed:', error.message);
    process.exit(1);
  }
}

// Run the analysis
main().catch(console.error);

export default WebsiteAnalyzer;