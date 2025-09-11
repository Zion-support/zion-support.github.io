#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

console.log('🔗 Starting Enhanced Link Checker Automation...');

class EnhancedLinkChecker {
  constructor() {
    this.linkResults = {
      internal: { total: 0, working: 0, broken: 0, results: [] },
      external: { total: 0, working: 0, broken: 0, results: [] },
      summary: { total: 0, working: 0, broken: 0, rate: 0 }
    };
    this.reportDir = path.join(process.cwd(), 'link-reports');
    this.ensureReportDirectory();
    this.checkedUrls = new Map(); // Use Map instead of Set for storing results
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async buildProject() {
    console.log('🏗️ Building project for link extraction...');
    try {
      execSync('npm run build', { 
        stdio: 'inherit',
        cwd: process.cwd()
      });
      console.log('✅ Build completed successfully');
    } catch (error) {
      console.log('❌ Build failed, but continuing with link checking...');
      throw error;
    }
  }

  extractLinksFromHTML(content, baseUrl = '') {
    const links = [];
    
    // Extract href attributes
    const hrefMatches = content.match(/href=["']([^"']+)["']/g) || [];
    hrefMatches.forEach(match => {
      const url = match.match(/href=["']([^"']+)["']/)[1];
      if (url && !url.startsWith('#') && !url.startsWith('javascript:')) {
        links.push(this.normalizeUrl(url, baseUrl));
      }
    });
    
    // Extract src attributes
    const srcMatches = content.match(/src=["']([^"']+)["']/g) || [];
    srcMatches.forEach(match => {
      const url = match.match(/src=["']([^"']+)["']/)[1];
      if (url && !url.startsWith('data:') && !url.startsWith('blob:')) {
        links.push(this.normalizeUrl(url, baseUrl));
      }
    });
    
    // Extract other common link patterns
    const otherMatches = content.match(/(?:url|link)\s*\(["']?([^"']+)["']?\)/g) || [];
    otherMatches.forEach(match => {
      const url = match.match(/(?:url|link)\s*\(["']?([^"']+)["']?\)/)[1];
      if (url) {
        links.push(this.normalizeUrl(url, baseUrl));
      }
    });
    
    return [...new Set(links)]; // Remove duplicates
  }

  normalizeUrl(url, baseUrl) {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    if (url.startsWith('//')) {
      return `https:${url}`;
    }
    
    if (url.startsWith('/')) {
      return `https://ziontechgroup.com${url}`;
    }
    
    if (baseUrl && !url.startsWith('http')) {
      return new URL(url, baseUrl).href;
    }
    
    return url;
  }

  async extractAllLinks() {
    console.log('🔍 Extracting links from build output...');
    
    const distDir = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distDir)) {
      console.log('❌ Build output directory not found');
      return [];
    }
    
    const allLinks = [];
    
    const walkDir = (dir, baseUrl = '') => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          walkDir(filePath, baseUrl);
        } else if (file.endsWith('.html')) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            const relativePath = path.relative(distDir, filePath);
            const fileBaseUrl = `https://ziontechgroup.com/${relativePath.replace(/\\/g, '/')}`;
            
            const links = this.extractLinksFromHTML(content, fileBaseUrl);
            links.forEach(link => {
              allLinks.push({
                url: link,
                source: relativePath,
                type: 'html'
              });
            });
          } catch (error) {
            console.log(`⚠️ Could not read file: ${filePath}`);
          }
        } else if (file.endsWith('.css')) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            const relativePath = path.relative(distDir, filePath);
            
            // Extract URLs from CSS
            const urlMatches = content.match(/url\(["']?([^"']+)["']?\)/g) || [];
            urlMatches.forEach(match => {
              const url = match.match(/url\(["']?([^"']+)["']?\)/)[1];
              if (url && !url.startsWith('data:')) {
                const normalizedUrl = this.normalizeUrl(url, `https://ziontechgroup.com/${relativePath.replace(/\\/g, '/')}`);
                allLinks.push({
                  url: normalizedUrl,
                  source: relativePath,
                  type: 'css'
                });
              }
            });
          } catch (error) {
            console.log(`⚠️ Could not read CSS file: ${filePath}`);
          }
        }
      });
    };
    
    walkDir(distDir);
    
    // Remove duplicates and filter out invalid URLs
    const uniqueLinks = [];
    const seen = new Set();
    
    allLinks.forEach(link => {
      if (!seen.has(link.url) && this.isValidUrl(link.url)) {
        seen.add(link.url);
        uniqueLinks.push(link);
      }
    });
    
    console.log(`✅ Extracted ${uniqueLinks.length} unique links`);
    return uniqueLinks;
  }

  isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  async checkLink(url, timeout = 10000) {
    if (this.checkedUrls.has(url)) {
      return this.checkedUrls.get(url);
    }
    
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        resolve({ url, status: 'timeout', error: 'Request timeout' });
      }, timeout);
      
      try {
        const urlObj = new URL(url);
        const isHttps = urlObj.protocol === 'https:';
        const client = isHttps ? https : http;
        
        const req = client.request(url, { 
          method: 'HEAD',
          timeout: timeout,
          headers: {
            'User-Agent': 'Zion-Link-Checker/1.0'
          }
        }, (res) => {
          clearTimeout(timer);
          const result = {
            url,
            status: res.statusCode,
            working: res.statusCode >= 200 && res.statusCode < 400,
            headers: res.headers
          };
          this.checkedUrls.set(url, result);
          resolve(result);
        });
        
        req.on('error', (error) => {
          clearTimeout(timer);
          const result = {
            url,
            status: 'error',
            working: false,
            error: error.message
          };
          this.checkedUrls.set(url, result);
          resolve(result);
        });
        
        req.on('timeout', () => {
          clearTimeout(timer);
          req.destroy();
          const result = {
            url,
            status: 'timeout',
            working: false,
            error: 'Request timeout'
          };
          this.checkedUrls.set(url, result);
          resolve(result);
        });
        
        req.end();
      } catch (error) {
        clearTimeout(timer);
        const result = {
          url,
          status: 'error',
          working: false,
          error: error.message
        };
        this.checkedUrls.set(url, result);
        resolve(result);
      }
    });
  }

  async checkAllLinks(links) {
    console.log('🔍 Checking all extracted links...');
    
    const internalLinks = [];
    const externalLinks = [];
    
    // Separate internal and external links
    links.forEach(link => {
      if (link.url.includes('ziontechgroup.com') || link.url.startsWith('/')) {
        internalLinks.push(link);
      } else {
        externalLinks.push(link);
      }
    });
    
    console.log(`📊 Found ${internalLinks.length} internal links and ${externalLinks.length} external links`);
    
    // Check internal links
    if (internalLinks.length > 0) {
      console.log('🔍 Checking internal links...');
      await this.checkLinkBatch(internalLinks, 'internal');
    }
    
    // Check external links
    if (externalLinks.length > 0) {
      console.log('🔍 Checking external links...');
      await this.checkLinkBatch(externalLinks, 'external');
    }
    
    // Update summary
    this.updateSummary();
  }

  async checkLinkBatch(links, type) {
    const batchSize = 10; // Check 10 links concurrently
    const results = [];
    
    for (let i = 0; i < links.length; i += batchSize) {
      const batch = links.slice(i, i + batchSize);
      const batchPromises = batch.map(async (link) => {
        const result = await this.checkLink(link.url);
        return {
          ...link,
          ...result
        };
      });
      
      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);
      
      // Progress update
      const progress = Math.min(i + batchSize, links.length);
      console.log(`📊 Progress: ${progress}/${links.length} ${type} links checked`);
      
      // Small delay to be respectful to servers
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Update results
    this.linkResults[type].results = results;
    this.linkResults[type].total = results.length;
    this.linkResults[type].working = results.filter(r => r.working).length;
    this.linkResults[type].broken = results.filter(r => !r.working).length;
  }

  updateSummary() {
    this.linkResults.summary.total = this.linkResults.internal.total + this.linkResults.external.total;
    this.linkResults.summary.working = this.linkResults.internal.working + this.linkResults.external.working;
    this.linkResults.summary.broken = this.linkResults.internal.broken + this.linkResults.external.broken;
    this.linkResults.summary.rate = this.linkResults.summary.total > 0 ? 
      (this.linkResults.summary.working / this.linkResults.summary.total * 100).toFixed(2) : 0;
  }

  async generateLinkReport() {
    console.log('📋 Generating link report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: this.linkResults.summary,
      internal: this.linkResults.internal,
      external: this.linkResults.external,
      brokenLinks: {
        internal: this.linkResults.internal.results.filter(r => !r.working),
        external: this.linkResults.external.results.filter(r => !r.working)
      }
    };
    
    // Save JSON report
    fs.writeFileSync(
      path.join(this.reportDir, 'link-check-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    fs.writeFileSync(
      path.join(this.reportDir, 'LINK_CHECK_REPORT.md'),
      markdownReport
    );
    
    // Generate CSV report for easy analysis
    const csvReport = this.generateCSVReport(report);
    fs.writeFileSync(
      path.join(this.reportDir, 'link-check-report.csv'),
      csvReport
    );
    
    console.log('📋 Link report generated successfully');
    return report;
  }

  generateMarkdownReport(report) {
    const brokenInternal = report.brokenLinks.internal;
    const brokenExternal = report.brokenLinks.external;
    
    return `# Link Check Report - ${new Date().toLocaleDateString()}

## 📊 Summary
- **Total Links**: ${report.summary.total}
- **Working Links**: ${report.summary.working} ✅
- **Broken Links**: ${report.summary.broken} ❌
- **Success Rate**: ${report.summary.rate}%

## 🔍 Internal Links
- **Total**: ${report.internal.total}
- **Working**: ${report.internal.working} ✅
- **Broken**: ${report.internal.broken} ❌

## 🌐 External Links
- **Total**: ${report.external.total}
- **Working**: ${report.external.working} ✅
- **Broken**: ${report.external.broken} ❌

## ❌ Broken Links

### Internal Broken Links (${brokenInternal.length})
${brokenInternal.length > 0 ? 
  brokenInternal.map(link => 
    `- **${link.source}** → ${link.url} (${link.status}${link.error ? ` - ${link.error}` : ''})`
  ).join('\n') : 
  '✅ No broken internal links found!'
}

### External Broken Links (${brokenExternal.length})
${brokenExternal.length > 0 ? 
  brokenExternal.map(link => 
    `- **${link.source}** → ${link.url} (${link.status}${link.error ? ` - ${link.error}` : ''})`
  ).join('\n') : 
  '✅ No broken external links found!'
}

## 🚨 Immediate Actions Required

${brokenInternal.length > 0 ? 
  `1. **Fix Internal Links**: ${brokenInternal.length} broken internal links need immediate attention
2. **Update Routes**: Ensure all internal routes are properly configured
3. **Check Build Output**: Verify that all internal links are correctly generated` : 
  '1. ✅ All internal links are working correctly'
}

${brokenExternal.length > 0 ? 
  `4. **Review External Links**: ${brokenExternal.length} external links are broken
5. **Contact External Sites**: Reach out to external site owners if links are permanently broken
6. **Update References**: Replace broken external links with working alternatives` : 
  '2. ✅ All external links are working correctly'
}

## 📚 Recommendations

1. **Regular Monitoring**: Run link checks daily
2. **Automated Fixes**: Implement automated link validation in CI/CD
3. **Link Maintenance**: Regularly review and update external link references
4. **404 Handling**: Implement proper 404 pages for broken internal routes
5. **Link Tracking**: Monitor link health over time

---
*Report generated by Enhanced Link Checker Automation*
`;
  }

  generateCSVReport(report) {
    const allLinks = [
      ...report.internal.results.map(link => ({ ...link, type: 'internal' })),
      ...report.external.results.map(link => ({ ...link, type: 'external' }))
    ];
    
    const csvHeaders = ['Type', 'Source', 'URL', 'Status', 'Working', 'Error'];
    const csvRows = allLinks.map(link => [
      link.type,
      link.source || 'unknown',
      link.url,
      link.status || 'unknown',
      link.working ? 'Yes' : 'No',
      link.error || ''
    ]);
    
    return [csvHeaders, ...csvRows]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');
  }

  async runLinkCheck() {
    console.log('🚀 Starting comprehensive link check...');
    
    try {
      await this.buildProject();
      const links = await this.extractAllLinks();
      
      if (links.length === 0) {
        console.log('⚠️ No links found to check');
        return;
      }
      
      await this.checkAllLinks(links);
      const report = await this.generateLinkReport();
      
      console.log('\n🔗 Link Check Summary:');
      console.log(`Total Links: ${report.summary.total}`);
      console.log(`Working: ${report.summary.working} ✅`);
      console.log(`Broken: ${report.summary.broken} ❌`);
      console.log(`Success Rate: ${report.summary.rate}%`);
      
      if (report.summary.broken > 0) {
        console.log('\n🚨 Broken Links Found:');
        console.log(`Internal: ${report.internal.broken}`);
        console.log(`External: ${report.external.broken}`);
      } else {
        console.log('\n✅ All links are working correctly!');
      }
      
      return report;
      
    } catch (error) {
      console.error('❌ Link check failed:', error);
      throw error;
    }
  }
}

// Main execution
async function main() {
  const linkChecker = new EnhancedLinkChecker();
  
  try {
    await linkChecker.runLinkCheck();
  } catch (error) {
    console.error('❌ Link checker automation failed:', error);
    process.exit(1);
  }
}

// Start the link checker
main().catch(console.error);
