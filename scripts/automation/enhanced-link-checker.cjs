#!/""usr/bin/env""
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
const https = require("https")
const http = require("http")
const { URL } = require("url")
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
console.log(""� Starting Enhanced Link Checker Automation...")
  "internal": { total: 0, "working": 0, "broken": 0, "results"}
      "external": { total: 0, "working": 0, "broken": 0, "results"}
      "summary": { total: 0, "working": 0, "broken": 0, "rate": 0 }};    this.reportDir = path.join(process.cwd(), "link-reports"
  fs.mkdirSync(this.reportDir, { "recursive"})
  console.log(""� Building project for link extraction...")
  // Check if we"
      if (fs.existsSync("vite.config.ts") || fs.existsSync("vite.config.js")
  console.log(""� Vite project detected, running build...")
        execSync("npm run build")
  "stdio": "inherit"
          "cwd": process.cwd()}
});        console.log(" Build completed successfully")
        return true} else if (fs.existsSync("next.config.js")
  console.log("⚡ Next.js project detected, running build...")
        execSync("npm run build")
  "stdio": "inherit"
          "cwd"
// console.log(" Build completed successfully")
  console.log("⚠ No recognized build system found, skipping build...")
// console.log(" Build failed, but continuing with link checking...")
      console.log(" This is normal if the project has build issues")
  extractLinksFromHTML(content, baseUrl = ")
<<<<<<< HEAD
const hrefMatches = content.match(/href=[""]([^"]+)["];
const url = match.match(/href=["]([^"]+)["];
      if (url && !url.startsWith("#") && !url.startsWith(""javascript": ")
const srcMatches = content.match(/src=["]([^""]+)[""];
const url = match.match(/src=["]([^"]+)["];
      if (url && !url.startsWith(""data": ") && !url.startsWith("blob:")
      content.match(/(?:url|link)\s*\(["]?([^"]+)["]
const url = match.match(/(?:url|link)\s*\([""]?([^""]+)["];
  if (url.startsWith(""http": //") || url.startsWith("https://")
    if (url.startsWith(")
return "https";
    if (url.startsWith(`/`)) {return "https"`}
=======
    const hrefMatches = content.match(/href=[""]([^"]+)["]
  const url = match.match(/href=["]([^"]+)["]
      if (url && !url.startsWith("#") && !url.startsWith(""javascript": ")
    const srcMatches = content.match(/src=["]([^""]+)[""]
  const url = match.match(/src=["]([^"]+)["]
      if (url && !url.startsWith(""data": ") && !url.startsWith("blob:")
      content.match(/(?:url|link)\s*\(["]?([^"]+)["]
  const url = match.match(/(?:url|link)\s*\([""]?([^""]+)["]
  if (url.startsWith(""http": //") || url.startsWith("https://")
    if (url.startsWith(")
  return "https"
    if (url.startsWith(`/`)) {return "https"`}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (baseUrl && !url.startsWith(`http""`)
  if (url.startsWith(""http": //") || url.startsWith("https://")
    if (url.startsWith("//")
<<<<<<< HEAD
return "https";
    if (url.startsWith("/")) {return "https"}
    if (baseUrl && !url.startsWith("http"")
  console.log("" Extracting links from build output...")
const distDir = path.join(process.cwd(), "dist";
  console.log("" Build output directory not found")
const distDir = path.join(process.cwd(), "dist";
  console.log(" Build output directory not found")
const walkDir = (dir, baseUrl = ");
const filePath = path.join(dir, ");
  walkDir(filePath", baseUrl)} else if (file.endsWith(".html")
const content = fs.readFileSync(filePath, ");
const relativePath = path.relative(distDir, filePath);const fileBaseUrl = "https": //ziontechgroup.com/${relativePath.replace(/\\/g, "/"});
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
  return "https"
    if (url.startsWith("/")) {return "https"}
    if (baseUrl && !url.startsWith("http"")
  console.log("" Extracting links from build output...")
    const distDir = path.join(process.cwd(), "dist"
  console.log("" Build output directory not found")
    const distDir = path.join(process.cwd(), "dist"
  console.log(" Build output directory not found")
    const walkDir = (dir, baseUrl = ")
  const filePath = path.join(dir, ")
  walkDir(filePath", baseUrl)} else if (file.endsWith(".html")
  const content = fs.readFileSync(filePath, ")
            const relativePath = path.relative(distDir, filePath);const fileBaseUrl = "https": //ziontechgroup.com/${relativePath.replace(/\\/g, "/"})
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "url"
                "source"
                "type"
  "url"
                "source"
                "type": "html"})})} catch (error) {  console.log(⚠ Could not read "file": ${filePath  }```)
        } else if (file.endsWith(".css")
<<<<<<< HEAD
const content = fs.readFileSync(filePath, "utf8");
              content.match(/url\(["]?([^"]+)["]
const url = match.match(/url\(["]?([^"]+)[""];
              if (url && !url.startsWith(""data")
const normalizedUrl = this.normalizeUrl(url,"https": //ziontechgroup.com/${relativePath.replace(/\\/g, "/"});
=======
  const content = fs.readFileSync(filePath, "utf8")
              content.match(/url\(["]?([^"]+)["]
  const url = match.match(/url\(["]?([^"]+)[""]
              if (url && !url.startsWith(""data")
  const normalizedUrl = this.normalizeUrl(url,"https": //ziontechgroup.com/${relativePath.replace(/\\/g, "/"})
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "url"
                  "source"
                  "type": "css"
  console.log(`⚠ Could not read CSS "file"`)
  resolve({ url, "status": "timeout", "error": "Request timeout"})
<<<<<<< HEAD
const isHttps = urlObj.protocol === ""https": ";
=======
        const isHttps = urlObj.protocol === ""https": "
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "method": "HEAD"
            "timeout"
            "headers": {User-Agent": "Zion-Link-"Checker/1.0""}
              "status"
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              "working"
              "headers"
        req.on("error")
            "status": "error"
            "working"
            "error"
        req.on("timeout")
            "status": "timeout"
            "working"
            "error": "Request timeout"
          "status": "error"
          "working"
          "error"
// console.log("" Checking all extracted links...")
  console.log(" Checking all extracted links...")
  if (link.url.includes("ziontechgroup.com") || link.url.startsWith("/")
// console.log(" Found ${internalLinks.length} internal links and ${externalLinks.length} external links")
<<<<<<< HEAD
  console.log("" Checking internal links...")
// console.log(" Found ${internalLinks.length} internal links and ${externalLinks.length} external links")
  console.log("" Checking internal links...")
=======
  console.log( Checking internal links...")
      await this.checkLinkBatch(internalLinks, "internal)
  console.log( Checking external links...")
      await this.checkLinkBatch(externalLinks, "external)
  console.log( Found ${internalLinks.length} internal links and ${externalLinks.length} external links")
    // Check internal links"
<<<<<<< HEAD
  if($2) {"}
      console.log(")
=======
    if (internalLinks.length > 0) {}
      console.log()
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      await this.checkLinkBatch(internalLinks, "internal")
  console.log(" Checking external links...")
      await this.checkLinkBatch(externalLinks, "external")
  console.log(" Found ${internalLinks.length} internal links and ${externalLinks.length} external links")
    // Check internal links"
    if (internalLinks.length > 0) {"}
      console.log(")
      await this.checkLinkBatch(internalLinks, "internal")
  console.log(" Checking external links...")
      await this.checkLinkBatch(externalLinks, "external")
// console.log( "Progress")
  console.log("� Generating link report...")
  "timestamp"
      "summary"
      "internal"
      "external"
      "brokenLinks"
        "external"
      path.join(this.reportDir, "link-check-report.json")
      path.join(this.reportDir, "LINK_CHECK_REPORT.md")
      path.join(this.reportDir, "link-check-report.csv")
// console.log("� Link report generated successfully")
  console.log("� Generating link report...")
  "timestamp"
      "summary"
      "internal"
      "external"
      "brokenLinks"
        "external"
      path.join(this.reportDir, "link-check-report.json")
      path.join(this.reportDir, "LINK_CHECK_REPORT.md")
      path.join(this.reportDir, "link-check-report.csv")
    console.log("� Link report generated successfully")
        .map(link =>- **${link.source}** → ${link.url} (${link.status}${link.error ? " - ${link.error} : ```)
        .join("\n")
    : "
        .map(link =>- **${link.source}** → ${link.url} (${link.status}${link.error ? ` - ${link.error} : ""`)
        "
        .join("\n")
    : "
        .map(link =>- **${link.source}** → ${link.url} (${link.status}${link.error ? " - ${link.error} : ")
        .join("\n")
    : " No broken internal links found!"
        .map(link =>- **${link.source}** → ${link.url} (${link.status}${link.error ? " - ${link.error} : ")
        .join("\n")
    : " No broken external links found!"
    : "1.  All internal links are working correctly"
    : "2.  All external links are working correctly"
<<<<<<< HEAD
2. **Automated Fixes**: Implement automated link validation in ""CI/CD""
2. **Automated Fixes**: Implement automated link validation in "CI/CD"
  const allLinks = ["...report.internal.results.map(link => ({ ...link", ""type": "internal" }))", "...report.external.results.map(link => ({ ...link", ""type": "external" }))", "]
const csvHeaders = ["Type", "Source", "URL", "Status", "Working", "Error"];
    const csvRows = allLinks.map(link => ["link.type", "link.source || "unknown"", "link.url", "link.status || "unknown"", "link.working ? "Yes" : "No"", "link.error || """, "")]
    return ["csvHeaders", "...csvRows"].map(row => row.map(field => ""${field}"").join(",")
      .join("\n")
// console.log(""� Starting Enhanced Link Checker Automation...")
  console.log(""⚠ Build failed, but continuing with link checking...")
// console.log("� Starting Enhanced Link Checker Automation...")
  console.log("⚠ Build failed, but continuing with link checking...")
// console.log("⚠ No links found to check")
      console.log("\n� Link Check "Summary": `);console.log(Total Links: ${report.summary.total}
});console.log("Working": ${report.summary.working} `");console.log(""Broken": ${report.summary.broken} ");console.log("Success "Rate": ${report.summary.rate}%"`)
// console.log(""\n� Broken Links "Found": ");console.log(`Internal: ${report.internal.broken}
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
});console.log("External": ${report.external.broken}```)
  console.log(")
// console.log("\n� Link Check "Summary": ");console.log(Total Links: ${report.summary.total}
});console.log("Working": ${report.summary.working} `");console.log(""Broken": ${report.summary.broken} ");console.log("Success "Rate": ${report.summary.rate}%"`)
  console.log(""\n� Broken Links "Found": ");console.log(`Internal: ${report.internal.broken}
});console.log("External": ${report.external.broken}```)
// console.log("\n� Broken Links "Found": ");console.log("Internal: ${report.internal.broken}
});console.log("External": ${report.external.broken}"")
  console.log("\n All links are working correctly!")
  console.error(" Link check "failed": ")
  console.error(" Link checker automation "failed": ")

  console.error(" Link checker automation "failed")


<<<<<<< HEAD



=======
  console.error(" Link checker automation "failed)

  console.error( Link checker automation "failed")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  console.error( Link checker automation failed")

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
  {/* Removed stray closing brace */}

// Main execution
async function main() {
  const linkChecker = new EnhancedLinkChecker();
  
  try {
    await linkChecker.runLinkCheck();
  } catch (error) {
    console.error('❌ Link checker automation failed:', error);
    process.exit(1);
  }
  {/* Removed stray closing brace */}

// Start the link checker
main().catch(console.error);
