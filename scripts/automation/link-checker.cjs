#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔗 Starting Link Checker Automation...');

class LinkChecker {
  constructor() {
    this.reportDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.brokenLinks = [];
    this.workingLinks = [];
    this.totalLinks = 0;
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async run() {
    try {
      console.log('🔍 Scanning for links...');
      
      // Check links in HTML files
      await this.checkHtmlLinks();
      
      // Check links in markdown files
      await this.checkMarkdownLinks();
      
      // Check sitemap links
      await this.checkSitemapLinks();
      
      // Generate report
      await this.generateReport();
      
      console.log(`✅ Link Checker completed. Checked ${this.totalLinks} links, found ${this.brokenLinks.length} broken links.`);
      
    } catch (error) {
      console.error('❌ Link Checker failed:', error.message);
      await this.generateErrorReport(error);
    }
  }

  async checkHtmlLinks() {
    try {
      console.log('🔍 Checking HTML files for links...');
      
      // Find all HTML files
      const htmlFiles = execSync('find . -name "*.html" -o -name "*.tsx" -o -name "*.ts" | head -20', { 
        encoding: 'utf8',
        cwd: process.cwd()
      }).split('\n').filter(line => line.trim());
      
      for (const file of htmlFiles) {
        if (file && fs.existsSync(file)) {
          await this.extractAndCheckLinks(file);
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking HTML files:', error.message);
    }
  }

  async checkMarkdownLinks() {
    try {
      console.log('🔍 Checking markdown files for links...');
      
      const mdFiles = execSync('find . -name "*.md" | head -10', { 
        encoding: 'utf8',
        cwd: process.cwd()
      }).split('\n').filter(line => line.trim());
      
      for (const file of mdFiles) {
        if (file && fs.existsSync(file)) {
          await this.extractAndCheckLinks(file);
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking markdown files:', error.message);
    }
  }

  async checkSitemapLinks() {
    try {
      console.log('🔍 Checking sitemap links...');
      
      if (fs.existsSync('sitemap.xml')) {
        const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
        const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
        
        if (urlMatches) {
          for (const match of urlMatches) {
            const url = match.replace(/<loc>|<\/loc>/g, '');
            await this.checkSingleLink(url);
          }
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking sitemap:', error.message);
    }
  }

  async extractAndCheckLinks(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract URLs using regex
      const urlRegex = /(https?:\/\/[^\s"<>]+)/g;
      const urls = content.match(urlRegex) || [];
      
      for (const url of urls) {
        await this.checkSingleLink(url);
      }
      
    } catch (error) {
      console.log(`ℹ️  Error processing file ${filePath}:`, error.message);
    }
  }

  async checkSingleLink(url) {
    try {
      this.totalLinks++;
      
      // Skip certain URLs that might cause issues
      if (url.includes('localhost') || url.includes('127.0.0.1')) {
        return;
      }
      
      // Use curl to check if link is accessible
      const result = execSync(`curl -s -o /dev/null -w "%{http_code}" "${url}"`, { 
        encoding: 'utf8',
        timeout: 10000
      });
      
      const statusCode = parseInt(result.trim());
      
      if (statusCode >= 200 && statusCode < 400) {
        this.workingLinks.push({ url, statusCode, timestamp: new Date().toISOString() });
      } else {
        this.brokenLinks.push({ url, statusCode, timestamp: new Date().toISOString() });
        console.log(`❌ Broken link: ${url} (Status: ${statusCode})`);
      }
      
    } catch (error) {
      this.brokenLinks.push({ url, error: error.message, timestamp: new Date().toISOString() });
      console.log(`❌ Error checking link: ${url} - ${error.message}`);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      totalLinks: this.totalLinks,
      workingLinks: this.workingLinks.length,
      brokenLinks: this.brokenLinks.length,
      brokenLinksDetails: this.brokenLinks,
      status: this.brokenLinks.length === 0 ? 'clean' : 'broken_links_found'
    };

    const reportPath = path.join(this.reportDir, 'link-checker-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report saved to ${reportPath}`);
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      status: 'failed'
    };

    const reportPath = path.join(this.reportDir, 'link-checker-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

// Run the automation
const checker = new LinkChecker();
checker.run().catch(console.error);