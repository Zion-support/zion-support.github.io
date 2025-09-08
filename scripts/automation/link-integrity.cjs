#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔗 Starting Link Integrity Automation...');

class LinkIntegrity {
  constructor() {
    this.reportDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.validLinks = [];
    this.brokenLinks = [];
    this.redirectedLinks = [];
    this.timeoutLinks = [];
    this.totalLinks = 0;
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async run() {
    try {
      console.log('🔍 Running comprehensive link integrity check...');
      
      // Run various link checks
      await this.checkHtmlLinks();
      await this.checkMarkdownLinks();
      await this.checkSitemapLinks();
      await this.checkRobotsTxt();
      await this.checkExternalLinks();
      await this.generateLinkReport();
      
      // Generate final report
      await this.generateReport();
      
      console.log(`✅ Link Integrity completed. Checked ${this.totalLinks} links, found ${this.brokenLinks.length} broken links.`);
      
    } catch (error) {
      console.error('❌ Link Integrity failed:', error.message);
      await this.generateErrorReport(error);
    }
  }

  async checkHtmlLinks() {
    try {
      console.log('🔍 Checking HTML files for links...');
      
      // Find all HTML and component files
      const htmlFiles = execSync('find . -name "*.html" -o -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | head -30', { 
        encoding: 'utf8',
        cwd: process.cwd()
      }).split('\n').filter(line => line.trim());
      
      for (const file of htmlFiles) {
        if (file && fs.existsSync(file)) {
          await this.extractAndCheckLinks(file, 'html');
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking HTML files:', error.message);
    }
  }

  async checkMarkdownLinks() {
    try {
      console.log('🔍 Checking markdown files for links...');
      
      const mdFiles = execSync('find . -name "*.md" | head -20', { 
        encoding: 'utf8',
        cwd: process.cwd()
      }).split('\n').filter(line => line.trim());
      
      for (const file of mdFiles) {
        if (file && fs.existsSync(file)) {
          await this.extractAndCheckLinks(file, 'markdown');
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
            await this.checkSingleLink(url, 'sitemap');
          }
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking sitemap:', error.message);
    }
  }

  async checkRobotsTxt() {
    try {
      console.log('🔍 Checking robots.txt links...');
      
      if (fs.existsSync('robots.txt')) {
        const robotsContent = fs.readFileSync('robots.txt', 'utf8');
        const lines = robotsContent.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('Sitemap:')) {
            const url = line.replace('Sitemap:', '').trim();
            await this.checkSingleLink(url, 'robots');
          }
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking robots.txt:', error.message);
    }
  }

  async checkExternalLinks() {
    try {
      console.log('🔍 Checking external links...');
      
      // Find external links in the codebase
      const externalLinks = await this.findExternalLinks();
      
      for (const link of externalLinks) {
        await this.checkSingleLink(link, 'external');
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking external links:', error.message);
    }
  }

  async findExternalLinks() {
    const externalLinks = new Set();
    
    try {
      // Search for external URLs in various file types
      const fileTypes = ['*.html', '*.tsx', '*.ts', '*.jsx', '*.js', '*.md', '*.json'];
      
      for (const fileType of fileTypes) {
        try {
          const files = execSync(`find . -name "${fileType}" | head -20`, { 
            encoding: 'utf8',
            cwd: process.cwd()
          }).split('\n').filter(line => line.trim());
          
          for (const file of files) {
            if (file && fs.existsSync(file)) {
              const content = fs.readFileSync(file, 'utf8');
              const urlRegex = /(https?:\/\/[^\s"<>]+)/g;
              const urls = content.match(urlRegex) || [];
              
              for (const url of urls) {
                if (this.isExternalUrl(url)) {
                  externalLinks.add(url);
                }
              }
            }
          }
        } catch (error) {
          // Continue with next file type
        }
      }
    } catch (error) {
      console.log('ℹ️  Error finding external links:', error.message);
    }
    
    return Array.from(externalLinks);
  }

  async extractAndCheckLinks(filePath, sourceType) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract URLs using regex
      const urlRegex = /(https?:\/\/[^\s"<>]+)/g;
      const urls = content.match(urlRegex) || [];
      
      for (const url of urls) {
        await this.checkSingleLink(url, sourceType, filePath);
      }
      
    } catch (error) {
      console.log(`ℹ️  Error processing file ${filePath}:`, error.message);
    }
  }

  async checkSingleLink(url, sourceType, filePath = null) {
    try {
      this.totalLinks++;
      
      // Skip certain URLs that might cause issues
      if (this.shouldSkipUrl(url)) {
        return;
      }
      
      // Use curl to check if link is accessible
      const result = await this.checkUrlWithCurl(url);
      
      if (result.status === 'valid') {
        this.validLinks.push({
          url,
          sourceType,
          filePath,
          statusCode: result.statusCode,
          responseTime: result.responseTime,
          timestamp: new Date().toISOString()
        });
      } else if (result.status === 'redirect') {
        this.redirectedLinks.push({
          url,
          sourceType,
          filePath,
          redirectUrl: result.redirectUrl,
          statusCode: result.statusCode,
          timestamp: new Date().toISOString()
        });
        
        console.log(`🔄 Redirect: ${url} → ${result.redirectUrl}`);
      } else if (result.status === 'broken') {
        this.brokenLinks.push({
          url,
          sourceType,
          filePath,
          statusCode: result.statusCode,
          error: result.error,
          timestamp: new Date().toISOString()
        });
        
        console.log(`❌ Broken link: ${url} (Status: ${result.statusCode})`);
      } else if (result.status === 'timeout') {
        this.timeoutLinks.push({
          url,
          sourceType,
          filePath,
          error: 'Request timeout',
          timestamp: new Date().toISOString()
        });
        
        console.log(`⏰ Timeout: ${url}`);
      }
      
    } catch (error) {
      this.brokenLinks.push({
        url,
        sourceType,
        filePath,
        error: error.message,
        timestamp: new Date().toISOString()
      });
      
      console.log(`❌ Error checking link: ${url} - ${error.message}`);
    }
  }

  async checkUrlWithCurl(url) {
    try {
      const startTime = Date.now();
      
      // Use curl with timeout and follow redirects
      const result = execSync(`curl -s -o /dev/null -w "%{http_code}|%{time_total}|%{redirect_url}" -m 10 -L "${url}"`, { 
        encoding: 'utf8',
        timeout: 15000
      });
      
      const responseTime = Date.now() - startTime;
      const [statusCode, timeTotal, redirectUrl] = result.trim().split('|');
      const httpStatus = parseInt(statusCode);
      
      if (httpStatus >= 200 && httpStatus < 400) {
        if (redirectUrl && redirectUrl !== '') {
          return {
            status: 'redirect',
            statusCode: httpStatus,
            redirectUrl: redirectUrl,
            responseTime: responseTime
          };
        } else {
          return {
            status: 'valid',
            statusCode: httpStatus,
            responseTime: responseTime
          };
        }
      } else {
        return {
          status: 'broken',
          statusCode: httpStatus,
          responseTime: responseTime
        };
      }
      
    } catch (error) {
      if (error.message.includes('timeout') || error.message.includes('timed out')) {
        return {
          status: 'timeout',
          error: 'Request timeout'
        };
      } else {
        return {
          status: 'broken',
          error: error.message
        };
      }
    }
  }

  shouldSkipUrl(url) {
    const skipPatterns = [
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      '::1',
      'file://',
      'mailto:',
      'tel:',
      'javascript:',
      'data:'
    ];
    
    return skipPatterns.some(pattern => url.includes(pattern));
  }

  isExternalUrl(url) {
    try {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname;
      
      // Check if it's not a localhost or internal domain
      return !hostname.includes('localhost') && 
             !hostname.includes('127.0.0.1') && 
             !hostname.includes('0.0.0.0') &&
             !hostname.includes('::1');
    } catch (error) {
      return false;
    }
  }

  async generateLinkReport() {
    try {
      console.log('📊 Generating link report...');
      
      const linkReport = {
        timestamp: new Date().toISOString(),
        summary: {
          totalLinks: this.totalLinks,
          validLinks: this.validLinks.length,
          brokenLinks: this.brokenLinks.length,
          redirectedLinks: this.redirectedLinks.length,
          timeoutLinks: this.timeoutLinks.length
        },
        validLinks: this.validLinks,
        brokenLinks: this.brokenLinks,
        redirectedLinks: this.redirectedLinks,
        timeoutLinks: this.timeoutLinks
      };
      
      const reportPath = path.join(this.reportDir, 'link-integrity-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(linkReport, null, 2));
      
      console.log('✅ Link report generated');
      
    } catch (error) {
      console.log('ℹ️  Error generating link report:', error.message);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      summary: {
        totalLinks: this.totalLinks,
        validLinks: this.validLinks.length,
        brokenLinks: this.brokenLinks.length,
        redirectedLinks: this.redirectedLinks.length,
        timeoutLinks: this.timeoutLinks.length
      },
      validLinks: this.validLinks,
      brokenLinks: this.brokenLinks,
      redirectedLinks: this.redirectedLinks,
      timeoutLinks: this.timeoutLinks,
      status: this.brokenLinks.length === 0 ? 'clean' : 'broken_links_found'
    };

    const reportPath = path.join(this.reportDir, 'link-integrity-final-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Final report saved to ${reportPath}`);
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      status: 'failed'
    };

    const reportPath = path.join(this.reportDir, 'link-integrity-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

// Run the automation
const integrity = new LinkIntegrity();
integrity.run().catch(console.error);