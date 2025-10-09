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
    this.workingLinks = [];
    this.analyzedPages = [];
    this.maxDepth = 3;
    this.delay = 1000; // 1 second delay between requests
  }
async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
        },
        timeout: 10000
      };

      const protocol = urlObj.protocol === 'https:' ? https : http;
      
      const req = protocol.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: data,
            url: url
          });
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });

      req.setTimeout(10000);
      req.end();
    });
  }

  extractLinks(html, baseUrl) {
    const links = [];
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    
    let match;
    
    // Extract regular links
    while ((match = linkRegex.exec(html)) !== null) {
      const href = match[1];
      if (href && !href.startsWith('#') && !href.startsWith('javascript:') && !href.startsWith('mailto:')) {
        try {
          const absoluteUrl = new URL(href, baseUrl).href;
          links.push({
            url: absoluteUrl,
            text: this.extractLinkText(html, match.index),
            type: 'link'
          });
        } catch (e) {
          // Invalid URL, skip
        }
      }
    }
    
    // Extract image sources
    while ((match = imgRegex.exec(html)) !== null) {
      const src = match[1];
      if (src) {
        try {
          const absoluteUrl = new URL(src, baseUrl).href;
          links.push({
            url: absoluteUrl,
            text: 'Image',
            type: 'image'
          });
        } catch (e) {
          // Invalid URL, skip
        }
      }
    }
    
    return links;
  }

  extractLinkText(html, linkIndex) {
    const textMatch = html.substring(linkIndex).match(/<a[^>]*>([^<]+)<\/a>/i);
    return textMatch ? textMatch[1].trim() : '';
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

  async analyzePage(url, depth = 0) {
    if (this.visitedUrls.has(url) || depth > this.maxDepth) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`Analyzing: ${url} (depth: ${depth})`);

    try {
      const response = await this.makeRequest(url);
      
      if (response.statusCode >= 200 && response.statusCode < 300) {
        this.workingLinks.push({
          url: url,
          statusCode: response.statusCode,
          depth: depth
        });

        this.analyzedPages.push({
          url: url,
          statusCode: response.statusCode,
          title: this.extractTitle(response.body),
          links: this.extractLinks(response.body, url),
          depth: depth
        });

        // Analyze internal links
        if (depth < this.maxDepth) {
          const links = this.extractLinks(response.body, url);
          const internalLinks = links.filter(link => this.isInternalLink(link.url));
          
          for (const link of internalLinks) {
            await this.delay(this.delay);
            await this.analyzePage(link.url, depth + 1);
          }
        }
      } else {
        this.brokenLinks.push({
          url: url,
          statusCode: response.statusCode,
          depth: depth
        });
      }
    } catch (error) {
      this.brokenLinks.push({
        url: url,
        error: error.message,
        depth: depth
      });
    }
  }

  extractTitle(html) {
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    return titleMatch ? titleMatch[1].trim() : 'No title';
  }

  async analyze() {
    console.log(`Starting comprehensive analysis of ${this.baseUrl}`);
    console.log(`Max depth: ${this.maxDepth}, Delay: ${this.delay}ms`);
    
    await this.analyzePage(this.baseUrl);
    
    // Generate report
    const report = {
      baseUrl: this.baseUrl,
      analysisDate: new Date().toISOString(),
      summary: {
        totalPagesAnalyzed: this.analyzedPages.length,
        workingLinks: this.workingLinks.length,
        brokenLinks: this.brokenLinks.length,
        uniqueUrlsVisited: this.visitedUrls.size
      },
      analyzedPages: this.analyzedPages,
      workingLinks: this.workingLinks,
      brokenLinks: this.brokenLinks,
      recommendations: this.generateRecommendations()
    };
// Save report
    fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
    
    console.log('\n=== ANALYSIS COMPLETE ===');
    console.log(`Total pages analyzed: ${this.analyzedPages.length}`);
    console.log(`Working links: ${this.workingLinks.length}`);
    console.log(`Broken links: ${this.brokenLinks.length}`);
    console.log(`Unique URLs visited: ${this.visitedUrls.size}`);
    
    if (this.brokenLinks.length > 0) {
      console.log('\n=== BROKEN LINKS ===');
      this.brokenLinks.forEach(link => {
        console.log(`❌ ${link.url} - Status: ${link.statusCode || 'Error: ' + link.error}`);
      });
    }

    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    if (this.brokenLinks.length > 0) {
      recommendations.push({
        type: 'critical',
        message: `Found ${this.brokenLinks.length} broken links that need immediate attention`,
        action: 'Fix broken links or remove them from navigation'
      });
    }

    // Check for missing common pages
    const commonPages = ['/about', '/contact', '/services', '/privacy', '/terms', '/team', '/case-studies'];
    const existingPages = this.analyzedPages.map(page => new URL(page.url).pathname);
    const missingPages = commonPages.filter(page => !existingPages.includes(page));
    
    if (missingPages.length > 0) {
      recommendations.push({
        type: 'important',
        message: `Missing common pages: ${missingPages.join(', ')}`,
        action: 'Create these essential pages for better user experience'
      });
    }
// Check for SEO issues
    const pagesWithoutTitles = this.analyzedPages.filter(page => 
      page.title === 'No title' || page.title.trim() === ''
    );
    
    if (pagesWithoutTitles.length > 0) {
      recommendations.push({
        type: 'seo',
        message: `${pagesWithoutTitles.length} pages are missing proper titles`,
        action: 'Add descriptive titles to all pages for better SEO'
      });
    }

    return recommendations;
  }
}

// Run the analysis
async function main() {
  const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
  try {
    const report = await analyzer.analyze();
    console.log('\nReport saved to website-analysis-report.json');
  } catch (error) {
    console.error('Analysis failed:', error);
  }
}
// Run the analysis if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default WebsiteAnalyzer;
