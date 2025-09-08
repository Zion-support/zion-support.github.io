
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url')};
    this.reportDir = path.join(process.cwd(), 'link-reports');
    this.ensureReportDirectory();
    this.checkedUrls = new Map(); // Use Map instead of Set for storing results}
;
  ensureReportDirectory() {;
    if (!fs.existsSync(this.reportDir)) {;
      fs.mkdirSync(this.reportDir { recursive: true })}
  }

        });
        console.log('✅ Build completed successfully');
        return true} else if (fs.existsSync('next.config.js')) {;
        console.log('⚡ Next.js project detected, running build...');
        execSync('npm run build' {;
          stdio: 'inherit',;
          cwd: process.cwd(),});
        console.log('✅ Build completed successfully');
        return true} else {;
        console.log('⚠️ No recognized build system found, skipping build...');
        return false}

      console.log('❌ Build failed, but continuing with link checking...');
      console.log('💡 This is normal if the project has build issues');
      return false}
  }
;
  extractLinksFromHTML(content, baseUrl = ') {;
    const links = [];

    // Extract href attributes;
    const hrefMatches = content.match(/href=["']([^"']+)["']/g) || [];
    hrefMatches.forEach(match => {;
      const url = match.match(/href=["']([^"']+)["']/)[1];
      if (url && !url.startsWith('#') && !url.startsWith('javascript:')) {;
        links.push(this.normalizeUrl(url, baseUrl))}
    });

    // Extract src attributes;
    const srcMatches = content.match(/src=["']([^"']+)["']/g) || [];
    srcMatches.forEach(match => {;
      const url = match.match(/src=["']([^"']+)["']/)[1];
      if (url && !url.startsWith('data:') && !url.startsWith('blob:')) {;
        links.push(this.normalizeUrl(url, baseUrl))}
    });

      content.match(/(?:url|link)\s*\(["']?([^"']+)["']?\)/g) || [];
    otherMatches.forEach(match => {;
      const url = match.match(/(?:url|link)\s*\(["']?([^"']+)["']?\)/)[1];
      if (url) {;
        links.push(this.normalizeUrl(url, baseUrl))}
    });

      return new URL(url, baseUrl).href}
;
    return url}


    const distDir = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distDir)) {
      console.log(`❌ Build output directory not found`);

      return []}
;
    const allLinks = [];
;
    const walkDir = (dir, baseUrl = ') => {;
      const files = fs.readdirSync(dir);
      files.forEach(file => {;
        const filePath = path.join(dir, 'file);
        const stat = fs.statSync(filePath);
;
        if (stat.isDirectory()) {;
          walkDir(filePath', baseUrl);

            const relativePath = path.relative(distDir, filePath);const fileBaseUrl = https://ziontechgroup.com/${relativePath.replace(/\\/g, '/')};
;
            const links = this.extractLinksFromHTML(content, fileBaseUrl)})})} catch (error) {  console.log(⚠️ Could not read file: ${filePath  }``)}

          }
        }
      })};
;
    walkDir(distDir);

    // Remove duplicates and filter out invalid URLs;
    const uniqueLinks = [];
    const seen = new Set();
;
    allLinks.forEach(link => {;
      if (!seen.has(link.url) && this.isValidUrl(link.url)) {;
        seen.add(link.url);
        uniqueLinks.push(link)}
    });
console.log(`✅ Extracted ${uniqueLinks.length} unique links`);
    return uniqueLinks}
;
  isValidUrl(url) {;
    try {;
      new URL(url);
      return true} catch {;
      return false}
  }
;
  async checkLink(url, timeout = 10000) {;
    if (this.checkedUrls.has(url)) {;
      return this.checkedUrls.get(url)}

      }, timeout);
      
      try {
        const urlObj = new URL(url);
        const isHttps = urlObj.protocol === 'https:';
        const client = isHttps ? https : http;
;
        const req = client.request(;
          url,;
          {;
            method: 'HEAD',;
            timeout: timeout,;
            headers: {User-Agent': 'Zion-Link-'Checker/1.0'',},},;
          res => {;
            clearTimeout(timer);
            const result = {;
              url,;
              status: res.statusCode,;
              working: res.statusCode >= 200 && res.statusCode < 400,;
              headers: res.headers,};
            this.checkedUrls.set(url, result);
            resolve(result)}
        );
;
        req.on('error', error => {;
          clearTimeout(timer);
          const result = {;
            url,;
            status: 'error',;
            working: false,;
            error: error.message,};
          this.checkedUrls.set(url, result);
          resolve(result)});
;
        req.on('timeout', () => {;
          clearTimeout(timer);
          req.destroy();
          const result = {;
            url,;
            status: 'timeout',;
            working: false,;
            error: 'Request timeout',};
          this.checkedUrls.set(url, result);
          resolve(result)});
;
        req.end();

        this.checkedUrls.set(url, result);
        resolve(result)}
    })}

    const internalLinks = [];
    const externalLinks = [];

        internalLinks.push(link)} else {;
        externalLinks.push(link)}
    });

      await this.checkLinkBatch(internalLinks, 'internal')}
;
    // Check external links;
    if (externalLinks.length > 0) {;
      console.log('🔍 Checking external links...');
      await this.checkLinkBatch(externalLinks, 'external')}
;
    // Update summary;
    this.updateSummary()}
;
  async checkLinkBatch(links, type) {;

    const batchSize = 10; // Check 10 links concurrently;
    const results = [];
;
    for (let i = 0; i < links.length; i += batchSize) {;
      const batch = links.slice(i, i + batchSize);
      const batchPromises = batch.map(async link => {;
        const result = await this.checkLink(link.url);
        return {;
          ...link,;
          ...result,}});
;
      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);

    // Update results;
    this.linkResults[type].results = results;
    this.linkResults[type].total = results.length;
    this.linkResults[type].working = results.filter(r => r.working).length;
    this.linkResults[type].broken = results.filter(r => !r.working).length}
;
  updateSummary() {;
    this.linkResults.summary.total =;
      this.linkResults.internal.total + this.linkResults.external.total;
    this.linkResults.summary.working =;
      this.linkResults.internal.working + this.linkResults.external.working;
    this.linkResults.summary.broken =;
      this.linkResults.internal.broken + this.linkResults.external.broken;

    return report}
;
  generateMarkdownReport(report) {;
    const brokenInternal = report.brokenLinks.internal;
    const brokenExternal = report.brokenLinks.external;

## 📊 Summary;
- **Total Links**: ${report.summary.total}
- **Working Links**: ${report.summary.working} ✅;
- **Broken Links**: ${report.summary.broken} ❌;
- **Success Rate**: ${report.summary.rate}%;

## 🔍 Internal Links;
- **Total**: ${report.internal.total}
- **Working**: ${report.internal.working} ✅;
- **Broken**: ${report.internal.broken} ❌;

## 🌐 External Links;
- **Total**: ${report.external.total}
- **Working**: ${report.external.working} ✅;
- **Broken**: ${report.external.broken} ❌;

## ❌ Broken Links}
;
## 🚨 Immediate Actions Required}
;
## 📚 Recommendations;


*Report generated by Enhanced Link Checker Automation*}
;
  generateCSVReport(report) {;
    const allLinks = ['...report.internal.results.map(link => ({ ...link', 'type: 'internal' }))', '...report.external.results.map(link => ({ ...link', 'type: 'external' }))', '];
;
    const csvHeaders = ['Type', 'Source', 'URL', 'Status', 'Working', 'Error']}

      }
;
      const links = await this.extractAllLinks();

        return}
;
      await this.checkAllLinks(links);
      const report = await this.generateLinkReport();

        console.log('\n✅ All links are working correctly!')}
;
      return report;

      throw error}
  }
}

  const linkChecker = new EnhancedLinkChecker();
  
  try {
    await linkChecker.runLinkCheck();

    console.error('❌ Link checker automation failed:', error);
    process.exit(1)}
}

// Start the link checker;
main().catch(console.error);
