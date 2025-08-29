#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

class LinkChecker {
  constructor() {
    this.logFile = path.join(__dirname, '../../logs/link-checker.log');
    this.ensureLogDirectory();
    this.brokenLinks = [];
    this.workingLinks = [];
    this.totalLinks = 0;
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`🔄 Running: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: path.join(__dirname, '../../')
      });
      this.log(`✅ Success: ${description}`);
      return result;
    } catch (error) {
      this.log(`❌ Error in ${description}: ${error.message}`);
      return null;
    }
  }

  async checkLink(url) {
    return new Promise((resolve) => {
      try {
        const urlObj = new URL(url);
        const protocol = urlObj.protocol === 'https:' ? https : http;
        
        const req = protocol.get(url, { timeout: 10000 }, (res) => {
          if (res.statusCode >= 200 && res.statusCode < 400) {
            resolve({ url, status: res.statusCode, working: true });
          } else {
            resolve({ url, status: res.statusCode, working: false });
          }
        });
        
        req.on('error', (error) => {
          resolve({ url, status: 'error', working: false, error: error.message });
        });
        
        req.on('timeout', () => {
          req.destroy();
          resolve({ url, status: 'timeout', working: false });
        });
        
        req.setTimeout(10000);
      } catch (error) {
        resolve({ url, status: 'invalid', working: false, error: error.message });
      }
    });
  }

  async extractLinksFromBuild() {
    this.log('🔍 Extracting links from build files...');
    
    const distPath = path.join(__dirname, '../../dist');
    if (!fs.existsSync(distPath)) {
      this.log('⚠️ Dist folder not found, building project first');
      await this.runCommand('npm run build', 'Build project');
    }
    
    const links = new Set();
    
    try {
      // Extract links from HTML files
      const htmlFiles = this.findFiles(distPath, '.html');
      this.log(`📁 Found ${htmlFiles.length} HTML files to scan`);
      
      for (const file of htmlFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Extract URLs using regex
          const urlRegex = /(https?:\/\/[^\s"<>]+)/g;
          const matches = content.match(urlRegex);
          
          if (matches) {
            matches.forEach(url => {
              // Clean up URLs
              const cleanUrl = url.replace(/['"]/g, '').split(' ')[0];
              if (cleanUrl && !cleanUrl.includes('javascript:') && !cleanUrl.includes('mailto:')) {
                links.add(cleanUrl);
              }
            });
          }
        } catch (error) {
          this.log(`⚠️ Error reading file ${file}: ${error.message}`);
        }
      }
      
      // Extract links from CSS files
      const cssFiles = this.findFiles(distPath, '.css');
      this.log(`🎨 Found ${cssFiles.length} CSS files to scan`);
      
      for (const file of cssFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Extract URLs from CSS
          const cssUrlRegex = /url\(['"]?([^'")\s]+)['"]?\)/g;
          let match;
          while ((match = cssUrlRegex.exec(content)) !== null) {
            const url = match[1];
            if (url.startsWith('http')) {
              links.add(url);
            }
          }
        } catch (error) {
          this.log(`⚠️ Error reading CSS file ${file}: ${error.message}`);
        }
      }
      
      this.log(`🔗 Total unique links found: ${links.size}`);
      return Array.from(links);
      
    } catch (error) {
      this.log(`❌ Error extracting links: ${error.message}`);
      return [];
    }
  }

  findFiles(dir, extension) {
    const files = [];
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          try {
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
              scanDirectory(fullPath);
            } else if (item.endsWith(extension)) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files we can't access
          }
        }
      } catch (error) {
        // Skip directories we can't access
      }
    }
    
    scanDirectory(dir);
    return files;
  }

  async checkAllLinks(links) {
    this.log('🔗 Starting link validation...');
    
    this.totalLinks = links.length;
    let checkedCount = 0;
    
    for (const link of links) {
      checkedCount++;
      this.log(`🔍 Checking link ${checkedCount}/${this.totalLinks}: ${link}`);
      
      const result = await this.checkLink(link);
      
      if (result.working) {
        this.workingLinks.push(result);
        this.log(`✅ Working: ${link} (${result.status})`);
      } else {
        this.brokenLinks.push(result);
        this.log(`❌ Broken: ${link} (${result.status})`);
      }
      
      // Small delay to avoid overwhelming servers
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    this.log(`✅ Link validation completed. Working: ${this.workingLinks.length}, Broken: ${this.brokenLinks.length}`);
  }

  async generateLinkReport() {
    this.log('📊 Generating link report...');
    
    try {
      const reportPath = path.join(__dirname, '../../logs/link-check-report.md');
      const timestamp = new Date().toISOString();
      
      let report = `# Link Check Report - ${timestamp}

## Summary
- **Total links checked**: ${this.totalLinks}
- **Working links**: ${this.workingLinks.length}
- **Broken links**: ${this.brokenLinks.length}
- **Success rate**: ${((this.workingLinks.length / this.totalLinks) * 100).toFixed(2)}%

## Broken Links

| URL | Status | Error |
|-----|--------|-------|
`;

      if (this.brokenLinks.length > 0) {
        for (const link of this.brokenLinks) {
          const error = link.error || 'N/A';
          report += `| ${link.url} | ${link.status} | ${error} |\n`;
        }
      } else {
        report += `| No broken links found | - | - |\n`;
      }

      report += `
## Working Links
- Total: ${this.workingLinks.length}
- All working links are functioning correctly

## Recommendations
`;

      if (this.brokenLinks.length > 0) {
        report += `1. Fix all broken links listed above
2. Implement proper 404 handling for broken routes
3. Add link validation to your development workflow
4. Consider using a link checker in your CI/CD pipeline
`;
      } else {
        report += `1. All links are working correctly
2. Continue monitoring links regularly
3. Consider implementing automated link checking
`;
      }

      report += `
## Next Steps
- Run this automation daily
- Review and fix any broken links
- Monitor link health over time
- Update automation scripts as needed

---
Generated by PM2 Link Checker Automation
`;

      fs.writeFileSync(reportPath, report);
      this.log(`📄 Report generated: ${reportPath}`);
      
      // Also generate JSON report
      const jsonReportPath = path.join(__dirname, '../../logs/link-check-report.json');
      const jsonReport = {
        timestamp,
        summary: {
          total: this.totalLinks,
          working: this.workingLinks.length,
          broken: this.brokenLinks.length,
          successRate: (this.workingLinks.length / this.totalLinks) * 100
        },
        brokenLinks: this.brokenLinks,
        workingLinks: this.workingLinks
      };
      
      fs.writeFileSync(jsonReportPath, JSON.stringify(jsonReport, null, 2));
      this.log(`📄 JSON report generated: ${jsonReportPath}`);
      
    } catch (error) {
      this.log(`❌ Report generation failed: ${error.message}`);
    }
    
    this.log('✅ Report Generation completed');
  }

  async run() {
    this.log('🚀 Starting Link Checker Process');
    
    try {
      // Extract links from build
      const links = await this.extractLinksFromBuild();
      
      if (links.length === 0) {
        this.log('⚠️ No links found to check');
        return;
      }
      
      // Check all links
      await this.checkAllLinks(links);
      
      // Generate report
      await this.generateLinkReport();
      
      // Summary
      this.log(`🎉 Link Checker Process completed`);
      this.log(`📊 Results: ${this.workingLinks.length} working, ${this.brokenLinks.length} broken out of ${this.totalLinks} total`);
      
      if (this.brokenLinks.length > 0) {
        this.log('⚠️ Some broken links were found. Please review the report.');
        process.exit(1);
      } else {
        this.log('✅ All links are working correctly!');
      }
      
    } catch (error) {
      this.log(`💥 Link Checker Process failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the process if this script is executed directly
if (require.main === module) {
  const checker = new LinkChecker();
  checker.run();
}

module.exports = LinkChecker;