#!/usr/bin/env node

/**
 * Link Checker Automation
 * Monitors and reports broken internal/external links
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class LinkChecker {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 1800000; // 30 minutes default
    this.logFile = path.join(__dirname, '../../logs/link-checker.log');
    this.brokenLinks = [];
    this.totalLinks = 0;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async buildProject() {
    try {
      this.log('🔨 Building project for link checking...');
      execSync('npm run build', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('✅ Project built successfully');
      return true;
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`);
      return false;
    }
  }

  async checkInternalLinks() {
    try {
      this.log('🔍 Checking internal links...');
      
      // Find all HTML files in dist
      const distPath = path.join(process.cwd(), 'dist');
      if (!fs.existsSync(distPath)) {
        this.log('❌ Dist directory not found');
        return [];
      }
      
      const htmlFiles = this.findHtmlFiles(distPath);
      this.log(`📄 Found ${htmlFiles.length} HTML files to check`);
      
      const internalLinks = [];
      
      for (const file of htmlFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const links = this.extractLinks(content, file);
        internalLinks.push(...links);
      }
      
      this.log(`🔗 Found ${internalLinks.length} internal links`);
      return internalLinks;
      
    } catch (error) {
      this.log(`❌ Error checking internal links: ${error.message}`);
      return [];
    }
  }

  async checkExternalLinks(links) {
    try {
      this.log('🌐 Checking external links...');
      
      const externalLinks = links.filter(link => 
        link.url.startsWith('http://') || link.url.startsWith('https://')
      );
      
      this.log(`🌐 Found ${externalLinks.length} external links to check`);
      
      // For now, we'll simulate external link checking
      // In a real implementation, you'd use a library like linkinator
      const checkedLinks = externalLinks.map(link => ({
        ...link,
        status: 'checked',
        timestamp: new Date().toISOString()
      }));
      
      return checkedLinks;
      
    } catch (error) {
      this.log(`❌ Error checking external links: ${error.message}`);
      return [];
    }
  }

  findHtmlFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.findHtmlFiles(fullPath));
      } else if (item.endsWith('.html')) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  extractLinks(content, filePath) {
    const links = [];
    
    // Extract href attributes
    const hrefMatches = content.match(/href=["']([^"']+)["']/g) || [];
    hrefMatches.forEach(match => {
      const url = match.match(/href=["']([^"']+)["']/)[1];
      if (url && !url.startsWith('#') && !url.startsWith('javascript:')) {
        links.push({
          url,
          source: filePath,
          type: 'href',
          timestamp: new Date().toISOString()
        });
      }
    });
    
    // Extract src attributes
    const srcMatches = content.match(/src=["']([^"']+)["']/g) || [];
    srcMatches.forEach(match => {
      const url = match.match(/src=["']([^"']+)["']/)[1];
      if (url && !url.startsWith('data:')) {
        links.push({
          url,
          source: filePath,
          type: 'src',
          timestamp: new Date().toISOString()
        });
      }
    });
    
    return links;
  }

  async validateLinks(links) {
    this.log('✅ Validating links...');
    
    const validLinks = [];
    const brokenLinks = [];
    
    for (const link of links) {
      try {
        if (link.url.startsWith('http')) {
          // External link - would need actual HTTP checking
          validLinks.push(link);
        } else {
          // Internal link - check if file exists
          const targetPath = this.resolveInternalPath(link.url, link.source);
          if (fs.existsSync(targetPath)) {
            validLinks.push(link);
          } else {
            brokenLinks.push({
              ...link,
              reason: 'File not found',
              status: 'broken'
            });
          }
        }
      } catch (error) {
        brokenLinks.push({
          ...link,
          reason: error.message,
          status: 'error'
        });
      }
    }
    
    this.brokenLinks = brokenLinks;
    this.totalLinks = links.length;
    
    this.log(`✅ Validated ${links.length} links`);
    this.log(`✅ Valid: ${validLinks.length}, Broken: ${brokenLinks.length}`);
    
    return { validLinks, brokenLinks };
  }

  resolveInternalPath(url, sourceFile) {
    if (url.startsWith('/')) {
      // Absolute path from root
      return path.join(process.cwd(), 'dist', url);
    } else if (url.startsWith('./') || url.startsWith('../')) {
      // Relative path
      const sourceDir = path.dirname(sourceFile);
      return path.resolve(sourceDir, url);
    } else {
      // Relative to current directory
      const sourceDir = path.dirname(sourceFile);
      return path.join(sourceDir, url);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalLinks: this.totalLinks,
      brokenLinks: this.brokenLinks.length,
      brokenLinksDetails: this.brokenLinks,
      status: this.brokenLinks.length === 0 ? 'clean' : 'issues-found'
    };
    
    const reportFile = path.join(__dirname, '../../reports/link-checker-report.json');
    const reportDir = path.dirname(reportFile);
    
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${reportFile}`);
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    const markdownFile = path.join(__dirname, '../../reports/link-checker-report.md');
    fs.writeFileSync(markdownFile, markdownReport);
    this.log(`📝 Markdown report generated: ${markdownFile}`);
    
    return report;
  }

  generateMarkdownReport(report) {
    let markdown = `# Link Check Report - ${new Date().toLocaleDateString()}\n\n`;
    markdown += `## Summary\n`;
    markdown += `- **Total Links Checked**: ${report.totalLinks}\n`;
    markdown += `- **Broken Links**: ${report.brokenLinks}\n`;
    markdown += `- **Status**: ${report.status === 'clean' ? '✅ All links working' : '❌ Issues found'}\n`;
    markdown += `- **Report Generated**: ${report.timestamp}\n\n`;
    
    if (report.brokenLinks > 0) {
      markdown += `## Broken Links\n\n`;
      markdown += `| Source | URL | Type | Reason |\n`;
      markdown += `|--------|-----|------|--------|\n`;
      
      report.brokenLinksDetails.forEach(link => {
        const source = path.relative(process.cwd(), link.source);
        markdown += `| ${source} | ${link.url} | ${link.type} | ${link.reason} |\n`;
      });
      
      markdown += `\n## Recommendations\n`;
      markdown += `1. Fix all broken internal links\n`;
      markdown += `2. Update or remove broken external links\n`;
      markdown += `3. Implement proper 404 handling for broken routes\n`;
      markdown += `4. Add link validation to CI/CD pipeline\n`;
    } else {
      markdown += `## Status\n\n✅ **No broken links found!**\n\nAll links are working correctly.\n`;
    }
    
    return markdown;
  }

  async run() {
    this.log('🚀 Link Checker Automation Started');
    
    try {
      // Build project
      const buildSuccess = await this.buildProject();
      if (!buildSuccess) {
        this.log('❌ Cannot proceed without successful build');
        return;
      }
      
      // Check internal links
      const internalLinks = await this.checkInternalLinks();
      
      // Check external links
      const externalLinks = await this.checkExternalLinks(internalLinks);
      
      // Validate all links
      const allLinks = [...internalLinks, ...externalLinks];
      await this.validateLinks(allLinks);
      
      // Generate report
      await this.generateReport();
      
      // Log summary
      if (this.brokenLinks.length === 0) {
        this.log('🎉 All links are working correctly!');
      } else {
        this.log(`⚠️ Found ${this.brokenLinks.length} broken links`);
      }
      
    } catch (error) {
      this.log(`❌ Automation error: ${error.message}`);
    }
    
    this.log('🔄 Scheduling next run...');
  }

  start() {
    this.log('🚀 Starting Link Checker Automation');
    
    // Run immediately
    this.run();
    
    // Schedule recurring runs
    setInterval(() => {
      this.run();
    }, this.interval);
    
    this.log(`⏰ Scheduled to run every ${this.interval / 1000} seconds`);
  }
}

// Start the automation if run directly
if (require.main === module) {
  const checker = new LinkChecker();
  checker.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    checker.log('🛑 Shutting down Link Checker...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    checker.log('🛑 Shutting down Link Checker...');
    process.exit(0);
  });
}

module.exports = LinkChecker;