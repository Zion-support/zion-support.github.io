const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

class ComprehensiveLinkChecker {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.checkedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.workingLinks = [];
    this.maxDepth = 3;
    this.currentDepth = 0;
    this.maxConcurrent = 5;
    this.semaphore = this.maxConcurrent;
  }

  async checkUrl(url, depth = 0) {
    if (depth > this.maxDepth || this.checkedUrls.has(url)) {
      return;
    }

    this.checkedUrls.add(url);
    
    try {
      console.log(`Checking: ${url} (depth: ${depth})`);
      const response = await axios.get(url, {
        timeout: 10000,
        validateStatus: (status) => status < 500
      });

      if (response.status === 200) {
        this.workingLinks.push({
          url,
          status: response.status,
          depth,
          hasContent: response.data.length > 1000
        });

        if (depth < this.maxDepth) {
          const links = this.extractLinks(response.data, url);
          await this.processLinks(links, depth + 1);
        }
      } else {
        this.brokenLinks.push({
          url,
          status: response.status,
          depth,
          error: `HTTP ${response.status}`
        });
      }
    } catch (error) {
      this.brokenLinks.push({
        url,
        status: 'ERROR',
        depth,
        error: error.message
      });
    }
  }

  extractLinks(html, baseUrl) {
    const $ = cheerio.load(html);
    const links = new Set();

    // Extract all links
    $('a[href]').each((i, element) => {
      const href = $(element).attr('href');
      if (href) {
        const absoluteUrl = this.resolveUrl(href, baseUrl);
        if (absoluteUrl.startsWith(this.baseUrl)) {
          links.add(absoluteUrl);
        }
      }
    });

    // Extract navigation links
    $('nav a[href]').each((i, element) => {
      const href = $(element).attr('href');
      if (href) {
        const absoluteUrl = this.resolveUrl(href, baseUrl);
        if (absoluteUrl.startsWith(this.baseUrl)) {
          links.add(absoluteUrl);
        }
      }
    });

    // Extract footer links
    $('footer a[href]').each((i, element) => {
      const href = $(element).attr('href');
      if (href) {
        const absoluteUrl = this.resolveUrl(href, baseUrl);
        if (absoluteUrl.startsWith(this.baseUrl)) {
          links.add(absoluteUrl);
        }
      }
    });

    return Array.from(links);
  }

  resolveUrl(href, baseUrl) {
    if (href.startsWith('http')) {
      return href;
    }
    if (href.startsWith('//')) {
      return `https:${href}`;
    }
    if (href.startsWith('/')) {
      return `${this.baseUrl}${href}`;
    }
    return `${baseUrl}/${href}`;
  }

  async processLinks(links, depth) {
    const promises = [];
    for (const link of links) {
      if (this.semaphore > 0) {
        this.semaphore--;
        promises.push(
          this.checkUrl(link, depth).finally(() => {
            this.semaphore++;
          })
        );
      }
    }
    await Promise.all(promises);
  }

  async start() {
    console.log('Starting comprehensive link check...');
    console.log(`Base URL: ${this.baseUrl}`);
    
    await this.checkUrl(this.baseUrl, 0);
    
    // Wait for all checks to complete
    while (this.semaphore < this.maxConcurrent) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalChecked: this.checkedUrls.size,
        workingLinks: this.workingLinks.length,
        brokenLinks: this.brokenLinks.length,
        successRate: ((this.workingLinks.length / this.checkedUrls.size) * 100).toFixed(2) + '%'
      },
      workingLinks: this.workingLinks,
      brokenLinks: this.brokenLinks,
      recommendations: this.generateRecommendations()
    };

    // Save detailed report
    fs.writeFileSync(
      path.join(__dirname, '../reports/comprehensive-link-check-report.json'),
      JSON.stringify(report, null, 2)
    );

    // Save broken links summary
    fs.writeFileSync(
      path.join(__dirname, '../reports/broken-links-summary.json'),
      JSON.stringify({
        timestamp: report.timestamp,
        brokenLinks: this.brokenLinks,
        count: this.brokenLinks.length
      }, null, 2)
    );

    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    fs.writeFileSync(
      path.join(__dirname, '../reports/comprehensive-link-check-report.md'),
      markdownReport
    );

    console.log('\n=== COMPREHENSIVE LINK CHECK COMPLETE ===');
    console.log(`Total URLs checked: ${report.summary.totalChecked}`);
    console.log(`Working links: ${report.summary.workingLinks}`);
    console.log(`Broken links: ${report.summary.brokenLinks}`);
    console.log(`Success rate: ${report.summary.successRate}`);
    console.log('\nReports saved to:');
    console.log('- reports/comprehensive-link-check-report.json');
    console.log('- reports/broken-links-summary.json');
    console.log('- reports/comprehensive-link-check-report.md');
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.brokenLinks.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        action: 'Fix broken links',
        details: `${this.brokenLinks.length} broken links found`,
        urls: this.brokenLinks.map(link => link.url)
      });
    }

    const missingPages = this.brokenLinks.filter(link => 
      link.status === 404 && link.url.includes(this.baseUrl)
    );

    if (missingPages.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        action: 'Create missing pages',
        details: `${missingPages.length} pages return 404 errors`,
        urls: missingPages.map(link => link.url)
      });
    }

    const lowContentPages = this.workingLinks.filter(link => !link.hasContent);
    if (lowContentPages.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        action: 'Improve page content',
        details: `${lowContentPages.length} pages have minimal content`,
        urls: lowContentPages.map(link => link.url)
      });
    }

    return recommendations;
  }

  generateMarkdownReport(report) {
    let markdown = `# Comprehensive Link Check Report\n\n`;
    markdown += `**Generated:** ${report.timestamp}\n`;
    markdown += `**Base URL:** ${report.baseUrl}\n\n`;

    markdown += `## Summary\n\n`;
    markdown += `- **Total URLs Checked:** ${report.summary.totalChecked}\n`;
    markdown += `- **Working Links:** ${report.summary.workingLinks}\n`;
    markdown += `- **Broken Links:** ${report.summary.brokenLinks}\n`;
    markdown += `- **Success Rate:** ${report.summary.successRate}\n\n`;

    if (report.brokenLinks.length > 0) {
      markdown += `## Broken Links (${report.brokenLinks.length})\n\n`;
      markdown += `| URL | Status | Depth | Error |\n`;
      markdown += `|-----|--------|-------|-------|\n`;
      report.brokenLinks.forEach(link => {
        markdown += `| ${link.url} | ${link.status} | ${link.depth} | ${link.error} |\n`;
      });
      markdown += `\n`;
    }

    if (report.recommendations.length > 0) {
      markdown += `## Recommendations\n\n`;
      report.recommendations.forEach(rec => {
        markdown += `### ${rec.priority}: ${rec.action}\n\n`;
        markdown += `${rec.details}\n\n`;
        if (rec.urls && rec.urls.length > 0) {
          markdown += `**Affected URLs:**\n`;
          rec.urls.forEach(url => {
            markdown += `- ${url}\n`;
          });
          markdown += `\n`;
        }
      });
    }

    return markdown;
  }
}

// Run the link checker
async function main() {
  try {
    const checker = new ComprehensiveLinkChecker();
    await checker.start();
  } catch (error) {
    console.error('Error running link checker:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = ComprehensiveLinkChecker;