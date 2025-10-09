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
    this.externalLinks = [];
    this.internalLinks = [];
    this.maxDepth = 3;
    this.currentDepth = 0;
    this.delay = 1000; // 1 second delay between requests
  }

  async wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async fetchUrl(url) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        timeout: 10000
      };

      const client = urlObj.protocol === 'https:' ? https : http;
      
      const req = client.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          resolve({
            url,
            statusCode: res.statusCode,
            headers: res.headers,
            content: data,
            success: res.statusCode >= 200 && res.statusCode < 400
          });
        });
      });

      req.on('error', (err) => {
        reject({ url, error: err.message, success: false });
      });

      req.on('timeout', () => {
        req.destroy();
        reject({ url, error: 'Request timeout', success: false });
      });

      req.end();
    });
  }

  extractLinks(html, baseUrl) {
    const links = [];
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    const scriptRegex = /<script[^>]+src=["']([^"']+)["'][^>]*>/gi;
    const linkRegex2 = /<link[^>]+href=["']([^"']+)["'][^>]*>/gi;

    let match;
    
    // Extract <a> tags
    while ((match = linkRegex.exec(html)) !== null) {
      links.push({ url: match[1], type: 'link' });
    }
    
    // Extract <img> tags
    while ((match = imgRegex.exec(html)) !== null) {
      links.push({ url: match[1], type: 'image' });
    }
    
    // Extract <script> tags
    while ((match = scriptRegex.exec(html)) !== null) {
      links.push({ url: match[1], type: 'script' });
    }
    
    // Extract <link> tags
    while ((match = linkRegex2.exec(html)) !== null) {
      links.push({ url: match[1], type: 'stylesheet' });
    }

    return links.map(link => {
      try {
        const absoluteUrl = new URL(link.url, baseUrl).href;
        return {
          ...link,
          url: absoluteUrl,
          isExternal: !absoluteUrl.startsWith(this.baseUrl)
        };
      } catch (e) {
        return {
          ...link,
          url: link.url,
          isExternal: true,
          error: 'Invalid URL'
        };
      }
    });
  }

  async analyzeUrl(url, depth = 0) {
    if (this.visitedUrls.has(url) || depth > this.maxDepth) {
      return;
    }

    console.log(`Analyzing: ${url} (depth: ${depth})`);
    this.visitedUrls.add(url);

    try {
      await this.wait(this.delay);
      const result = await this.fetchUrl(url);
      
      if (result.success) {
        this.validLinks.push({ url, statusCode: result.statusCode });
        
        // Extract links from HTML content
        const links = this.extractLinks(result.content, url);
        
        for (const link of links) {
          if (link.isExternal) {
            this.externalLinks.push(link);
          } else {
            this.internalLinks.push(link);
            
            // Recursively analyze internal links
            if (depth < this.maxDepth) {
              await this.analyzeUrl(link.url, depth + 1);
            }
          }
        }
      } else {
        this.brokenLinks.push({ url, statusCode: result.statusCode, error: 'HTTP Error' });
      }
    } catch (error) {
      this.brokenLinks.push({ url, error: error.error || error.message });
    }
  }

  async analyze() {
    console.log(`Starting comprehensive analysis of ${this.baseUrl}`);
    console.log(`Max depth: ${this.maxDepth}`);
    console.log(`Delay between requests: ${this.delay}ms`);
    console.log('='.repeat(60));

    await this.analyzeUrl(this.baseUrl);

    console.log('\n' + '='.repeat(60));
    console.log('ANALYSIS COMPLETE');
    console.log('='.repeat(60));
    
    console.log(`\nTotal URLs analyzed: ${this.visitedUrls.size}`);
    console.log(`Valid links: ${this.validLinks.length}`);
    console.log(`Broken links: ${this.brokenLinks.length}`);
    console.log(`Internal links: ${this.internalLinks.length}`);
    console.log(`External links: ${this.externalLinks.length}`);

    if (this.brokenLinks.length > 0) {
      console.log('\nBROKEN LINKS:');
      console.log('-'.repeat(40));
      this.brokenLinks.forEach(link => {
        console.log(`❌ ${link.url}`);
        if (link.statusCode) console.log(`   Status: ${link.statusCode}`);
        if (link.error) console.log(`   Error: ${link.error}`);
        console.log('');
      });
    }

    // Check for missing pages based on internal links
    const missingPages = this.internalLinks.filter(link => 
      link.type === 'link' && 
      !this.validLinks.some(valid => valid.url === link.url)
    );

    if (missingPages.length > 0) {
      console.log('\nPOTENTIALLY MISSING PAGES:');
      console.log('-'.repeat(40));
      missingPages.forEach(link => {
        console.log(`⚠️  ${link.url}`);
      });
    }

    // Generate report
    const report = {
      baseUrl: this.baseUrl,
      analysisDate: new Date().toISOString(),
      summary: {
        totalUrls: this.visitedUrls.size,
        validLinks: this.validLinks.length,
        brokenLinks: this.brokenLinks.length,
        internalLinks: this.internalLinks.length,
        externalLinks: this.externalLinks.length,
        missingPages: missingPages.length
      },
      brokenLinks: this.brokenLinks,
      missingPages: missingPages,
      validLinks: this.validLinks,
      internalLinks: this.internalLinks,
      externalLinks: this.externalLinks
    };

    // Save report to file
    const reportPath = path.join(__dirname, 'website-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\nDetailed report saved to: ${reportPath}`);

    return report;
  }
}

// Run the analysis
async function main() {
  const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
  await analyzer.analyze();
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export default WebsiteAnalyzer;