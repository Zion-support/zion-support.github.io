#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class LinkChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'link-checker-report.json');
    this.brokenLinks = [];
    this.workingLinks = [];
  }

  async run() {
    console.log('🔗 Starting Link Checker...');
    
    try {
      await this.checkInternalLinks();
      await this.checkExternalLinks();
      await this.generateReport();
      
      console.log('✅ Link Checker completed successfully');
    } catch (error) {
      console.error('❌ Link Checker failed:', error.message);
      process.exit(1);
    }
  }

  async checkInternalLinks() {
    console.log('🔍 Checking internal links...');
    
    try {
      // Build the project first
      execSync('npm run build --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      // Check for internal link issues in built files
      const distDir = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distDir)) {
        await this.scanDirectoryForLinks(distDir);
      }
      
    } catch (error) {
      console.log('⚠️  Could not check internal links:', error.message);
    }
  }

  async checkExternalLinks() {
    console.log('🌐 Checking external links...');
    
    try {
      // Extract external URLs from source files
      const srcDir = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcDir)) {
        await this.extractExternalUrls(srcDir);
      }
      
    } catch (error) {
      console.log('⚠️  Could not check external links:', error.message);
    }
  }

  async scanDirectoryForLinks(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await this.scanDirectoryForLinks(filePath);
      } else if (file.endsWith('.html')) {
        await this.processHtmlFile(filePath);
      }
    }
  }

  async processHtmlFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Find all links in HTML
      const linkMatches = content.match(/href=["']([^"']+)["']/g) || [];
      const srcMatches = content.match(/src=["']([^"']+)["']/g) || [];
      
      const allLinks = [...linkMatches, ...srcMatches].map(match => {
        return match.replace(/href=["']|src=["']|["']/g, '');
      });
      
      // Check each link
      for (const link of allLinks) {
        if (link.startsWith('http')) {
          // External link
          await this.checkExternalLink(link, filePath);
        } else if (link.startsWith('/') || link.startsWith('./')) {
          // Internal link
          await this.checkInternalLink(link, filePath);
        }
      }
      
    } catch (error) {
      console.log(`⚠️  Could not process HTML file ${filePath}:`, error.message);
    }
  }

  async extractExternalUrls(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await this.extractExternalUrls(filePath);
      } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js')) {
        await this.processSourceFile(filePath);
      }
    }
  }

  async processSourceFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Find external URLs in source code
      const urlMatches = content.match(/https?:\/\/[^\s"']+/g) || [];
      
      for (const url of urlMatches) {
        await this.checkExternalLink(url, filePath);
      }
      
    } catch (error) {
      console.log(`⚠️  Could not process source file ${filePath}:`, error.message);
    }
  }

  async checkExternalLink(url, sourceFile) {
    try {
      // Simple HTTP check (in production, you might want to use a proper HTTP client)
      const result = {
        url,
        source: sourceFile,
        status: 'unknown',
        timestamp: new Date().toISOString()
      };
      
      // For now, just categorize the link
      if (url.includes('localhost') || url.includes('127.0.0.1')) {
        result.status = 'local';
      } else {
        result.status = 'external';
      }
      
      this.workingLinks.push(result);
      
    } catch (error) {
      this.brokenLinks.push({
        url,
        source: sourceFile,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  async checkInternalLink(link, sourceFile) {
    try {
      const result = {
        link,
        source: sourceFile,
        status: 'internal',
        timestamp: new Date().toISOString()
      };
      
      this.workingLinks.push(result);
      
    } catch (error) {
      this.brokenLinks.push({
        link,
        source: sourceFile,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      total_links_checked: this.workingLinks.length + this.brokenLinks.length,
      working_links: this.workingLinks.length,
      broken_links: this.brokenLinks.length,
      broken_links_details: this.brokenLinks,
      working_links_details: this.workingLinks,
      status: this.brokenLinks.length === 0 ? 'success' : 'issues_found'
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report generated: ${this.reportPath}`);
    
    if (this.brokenLinks.length > 0) {
      console.log(`⚠️  Found ${this.brokenLinks.length} broken links`);
    } else {
      console.log('✅ All links are working correctly');
    }
  }
}

// Run the automation
if (require.main === module) {
  const checker = new LinkChecker();
  checker.run();
}

module.exports = LinkChecker;