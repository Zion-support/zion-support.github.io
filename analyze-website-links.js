const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

class WebsiteLinkAnalyzer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.workingLinks = [];
    this.externalLinks = [];
    this.internalLinks = [];
    this.pendingUrls = [];
    this.maxDepth = 3;
    this.maxPages = 100;
    this.currentDepth = 0;
    this.timeout = 10000; // 10 seconds timeout
  }

  async checkUrl(url, parentUrl = null) {
    try {
      console.log(`🔍 Checking: ${url}`);
      const response = await axios.get(url, {
        timeout: this.timeout,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        validateStatus: function (status) {
          return status < 500; // Accept any status code below 500
        }
      });

      const linkInfo = {
        url,
        status: response.status,
        parentUrl,
        statusText: response.statusText,
        contentType: response.headers['content-type'] || 'unknown'
      };

      if (response.status >= 200 && response.status < 400) {
        this.workingLinks.push(linkInfo);
        console.log(`✅ Working: ${url} (${response.status})`);
        return { success: true, response, linkInfo };
      } else {
        this.brokenLinks.push(linkInfo);
        console.log(`❌ Broken: ${url} (${response.status})`);
        return { success: false, response, linkInfo };
      }
    } catch (error) {
      const linkInfo = {
        url,
        status: error.code || 'ERROR',
        parentUrl,
        error: error.message,
        statusText: error.message
      };
      this.brokenLinks.push(linkInfo);
      console.log(`❌ Error: ${url} - ${error.message}`);
      return { success: false, error, linkInfo };
    }
  }

  extractLinks(html, baseUrl) {
    const $ = cheerio.load(html);
    const links = new Set();

    // Extract all href attributes
    $('a[href]').each((i, elem) => {
      const href = $(elem).attr('href');
      if (href) {
        try {
          const absoluteUrl = new URL(href, baseUrl).href;
          links.add(absoluteUrl);
        } catch (e) {
          // Invalid URL, skip
        }
      }
    });

    // Extract script sources
    $('script[src]').each((i, elem) => {
      const src = $(elem).attr('src');
      if (src) {
        try {
          const absoluteUrl = new URL(src, baseUrl).href;
          links.add(absoluteUrl);
        } catch (e) {
          // Invalid URL, skip
        }
      }
    });

    // Extract link rel stylesheets
    $('link[href]').each((i, elem) => {
      const href = $(elem).attr('href');
      if (href) {
        try {
          const absoluteUrl = new URL(href, baseUrl).href;
          links.add(absoluteUrl);
        } catch (e) {
          // Invalid URL, skip
        }
      }
    });

    // Extract image sources
    $('img[src]').each((i, elem) => {
      const src = $(elem).attr('src');
      if (src) {
        try {
          const absoluteUrl = new URL(src, baseUrl).href;
          links.add(absoluteUrl);
        } catch (e) {
          // Invalid URL, skip
        }
      }
    });

    return Array.from(links);
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

  async crawlPage(url, depth = 0) {
    if (depth > this.maxDepth || this.visitedUrls.has(url) || this.visitedUrls.size > this.maxPages) {
      return;
    }

    this.visitedUrls.add(url);
    const result = await this.checkUrl(url);

    if (result.success && result.response && result.response.headers['content-type']?.includes('text/html')) {
      const links = this.extractLinks(result.response.data, url);
      
      for (const link of links) {
        if (this.isInternalLink(link)) {
          this.internalLinks.push({ url: link, parentUrl: url });
          if (!this.visitedUrls.has(link) && depth < this.maxDepth) {
            this.pendingUrls.push({ url: link, depth: depth + 1 });
          }
        } else {
          this.externalLinks.push({ url: link, parentUrl: url });
        }
      }
    }
  }

  async analyzeWebsite() {
    console.log(`🚀 Starting website analysis for: ${this.baseUrl}`);
    console.log(`📊 Max depth: ${this.maxDepth}, Max pages: ${this.maxPages}`);

    // Start with the base URL
    await this.crawlPage(this.baseUrl, 0);

    // Process pending URLs
    while (this.pendingUrls.length > 0 && this.visitedUrls.size < this.maxPages) {
      const { url, depth } = this.pendingUrls.shift();
      await this.crawlPage(url, depth);
    }

    // Check a sample of external links (limit to 20 to avoid being blocked)
    console.log(`🌐 Checking external links (limited to 20)...`);
    const externalLinksToCheck = [...new Set(this.externalLinks.map(link => link.url))].slice(0, 20);
    
    for (const externalUrl of externalLinksToCheck) {
      await this.checkUrl(externalUrl, 'external');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second between external requests
    }

    return this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalLinksChecked: this.workingLinks.length + this.brokenLinks.length,
        brokenLinks: this.brokenLinks.length,
        workingLinks: this.workingLinks.length,
        internalLinks: this.internalLinks.length,
        externalLinks: this.externalLinks.length,
        pagesVisited: this.visitedUrls.size,
        successRate: ((this.workingLinks.length / (this.workingLinks.length + this.brokenLinks.length)) * 100).toFixed(2) + '%'
      },
      brokenLinks: this.brokenLinks,
      workingLinks: this.workingLinks,
      internalLinks: this.internalLinks,
      externalLinks: this.externalLinks,
      visitedPages: Array.from(this.visitedUrls)
    };

    console.log('\n📋 ANALYSIS SUMMARY:');
    console.log(`📊 Total links checked: ${report.summary.totalLinksChecked}`);
    console.log(`✅ Working links: ${report.summary.workingLinks}`);
    console.log(`❌ Broken links: ${report.summary.brokenLinks}`);
    console.log(`🏠 Internal links: ${report.summary.internalLinks}`);
    console.log(`🌐 External links: ${report.summary.externalLinks}`);
    console.log(`📄 Pages visited: ${report.summary.pagesVisited}`);
    console.log(`📈 Success rate: ${report.summary.successRate}`);

    if (this.brokenLinks.length > 0) {
      console.log('\n❌ BROKEN LINKS FOUND:');
      this.brokenLinks.forEach(link => {
        console.log(`   ${link.url} (${link.status}) - Parent: ${link.parentUrl}`);
      });
    }

    return report;
  }

  async saveReport(filename = 'website-link-analysis.json') {
    const report = await this.analyzeWebsite();
    
    try {
      fs.writeFileSync(filename, JSON.stringify(report, null, 2));
      console.log(`\n💾 Report saved to: ${filename}`);
    } catch (error) {
      console.error(`❌ Failed to save report: ${error.message}`);
    }

    return report;
  }
}

// Main execution
async function main() {
  const baseUrl = 'https://ziontechgroup.com';
  const analyzer = new WebsiteLinkAnalyzer(baseUrl);
  
  try {
    const report = await analyzer.saveReport('website-analysis-comprehensive.json');
    
    // Also create a summary report
    const summary = {
      timestamp: report.timestamp,
      baseUrl: report.baseUrl,
      summary: report.summary,
      brokenLinksDetails: report.brokenLinks,
      recommendedActions: []
    };

    if (report.brokenLinks.length > 0) {
      summary.recommendedActions.push('Fix broken links found in the analysis');
    }
    if (report.summary.successRate < 95) {
      summary.recommendedActions.push('Improve overall link success rate');
    }
    summary.recommendedActions.push('Regular monitoring of website links');
    summary.recommendedActions.push('Implement automated link checking in CI/CD pipeline');

    fs.writeFileSync('website-analysis-summary.json', JSON.stringify(summary, null, 2));
    console.log('\n💾 Summary report saved to: website-analysis-summary.json');

  } catch (error) {
    console.error(`❌ Analysis failed: ${error.message}`);
    process.exit(1);
  }
}

// Run the analysis if this script is executed directly
if (require.main === module) {
  main();
}

module.exports = { WebsiteLinkAnalyzer };