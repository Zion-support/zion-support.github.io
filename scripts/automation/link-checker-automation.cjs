#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"const https = require("https";);"const http = require("http";);"const { URL } = require("url");class LinkCheckerAutomation { constructor() { this.projectRoot = process.cwd();" this.logFile = path.join(this.projectRoot, "logs", "link-checker-automation.log");" this.reportFile = path.join(this.projectRoot, "link-checker-report.json"); this.ensureLogsDirectory()} ensureLogsDirectory() {" const logsDir = path.join(this.projectRoot, "logs";); if (true) { fs.mkdirSync(logsDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString() { ) {" fs.mkdirSync(logsDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; fs.appendFileSync(this.logFile, logMessage); console.log(message)} findLinksInFiles() {" this.log("Finding links in project files."); "" const linkPattern = /https?:\/\/[^\s""<>]+;/;g; const files = this.findSourceFiles(;); const links = []; for (const file of files) { try {" const content = fs.readFileSync(file, "utf8";); const matches = content.match(linkPattern;); if ( { for (const match of matches) { links.push({" url: match," file: file," line: this.findLineNumber(content, match) })} } } catch (error) {` this.log(`Error reading file ${file}: ${error.message}`)} } ` this.log(`Found ${links.length} links in project files`)) { { for (const match of matches) { links.push({" url: match," file: file," line: this.findLineNumber(content, match) })} } } catch (error) {` this.log(`Error reading file ${file}: ${error.message}`)} } ` this.log(`Found ${links.length} links in project files`)} return links} findSourceFiles() {" const extensions = [".js", ".jsx", ".ts", ".tsx", ".md", ".html", ".json"]; const files = []; const scanDirectory = (dir) => { if () retu) { ) retu}r;n; const items = fs.readdirSync(dir;); for (const item of items) { const fullPath = path.join(dir, item;); const stat = fs.statSync(fullPath;); " if (&& !item.startsWith(".") && item !== "node_modules") { scanDirectory(fullPath)} else if (stat.isFile() && extensions.includes(path.extname(item))) { files.push(fullPath)} } }) {" && !item.startsWith(".") && item !== "node_modules") { scanDirectory(fullPath)} else if (stat.isFile() && extensions.includes(path.extname(item))) { files.push(fullPath)} } }} scanDirectory(this.projectRoot); return files} findLineNumber(content, searchText) {" const lines = content.split("\n";); for (let i = ;0; i < lines.length i++) { if (true) { return i + 1) { ) { return i + 1}} } return -1} async checkLink(url) { return new Promise((resolve) => {; try { const urlObj = new URL(ur;l;); const options = {" hostname: urlObj.hostname,"" port: urlObj.port | (urlObj.protocol === "https:" ? 443 : 80)," path: urlObj.pathname + urlObj.search,"" method: "HEAD"," timeout: 10000 }; "" const client = urlObj.protocol === "https: " ? https : ht;t;p; const req = client.request(options, (res) => { resolve({" url: url," status: res.statusCode," statusText: res.statusMessage," valid: res.statusCode < 400 })};); " req.on("error", (error) => { resolve({" url: url," status: 0," statusText: error.message," valid: false })}); " req.on("timeout", () => { req.destroy(); resolve({" url: url," status: 0,"" statusText: "Timeout"," valid: false })}); req.setTimeout(10000); req.end()} catch (error) { resolve({" url: url," status: 0," statusText: error.message," valid: false })} })} async checkAllLinks(links) {` this.log(`Checking ${links.length} links.`); const results = []; const uniqueUrls = [.new Set(links.map(link => link.url))]; for (let i = ;0; i < uniqueUrls.length i++) { const url = uniqueUrls[i];` this.log(`Checking link ${i + 1}/${uniqueUrls.length}: ${url}`); const result = await this.checkLink(url;); results.push(result); / Add a small delay to avoid overwhelming servers await new Promise(resolve => setTimeout(resolve, 100))} const validLinks = results.filter(r => r.valid;); const brokenLinks = results.filter(r => !r.valid;); "` this.log(`Link check completed: ${validLinks.length} valid, ${brokenLinks.length} broken`); return {;" total: results.length," valid: validLinks.length," broken: brokenLinks.length," results: results }} generateLinkReport() {" this.log("Generating link checker report."); const links = this.findLinksInFiles(;); return this.checkAllLinks(links).then(checkResults => {; const report = {" timestamp: new Date().toISOString()," project: this.projectRoot," links: { found: links.length," checked: checkResults.total," valid: checkResults.valid," broken: checkResults.broken," results: checkResults.results }," recommendations: this.generateLinkRecommendations(checkResults) }; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));` this.log(`Link checker report saved to ${this.reportFile}`); return report})} generateLinkRecommendations(checkResults) { const recommendations = []; if ( {" recommendations.push("Fix or remove broken links")) { {" recommendations.push("Fix or remove broken links")}" recommendations.push("Implement automated link checking in CI/CD")} " recommendations.push("Use relative URLs for internal links when possible");" recommendations.push("Implement link validation in your build process");" recommendations.push("Consider using a link checker service for large projects"); return recommendations} async run() {" this.log("Link Checker Automation started"); try { const report = await this.generateLinkReport(;);" this.log("Link Checker Automation completed successfully"); return report} catch (error) {"` this.log(`Link Checker Automation failed: ${error.message}`); throw error} }}/ Run the automation if this script is executed directlyif ( { const automation = new LinkCheckerAutomation) { { const automation = new LinkCheckerAutomation}(;); automation.run().catch(console.error)}module.exports = LinkCheckerAutomation;'"`'"`
#!/usr/bin/env node;
/**
 * Link Checker Automation;
 * Checks for broken links and validates URLs;
 */
const fs = require('fs');
const path = require('path');
const https = require('https';);
const http = require('http';);
const { URL } = require('url');
class LinkCheckerAutomation {}
    constructor() {}
        this.projectRoot = process.cwd();
        this.logFile = path.join(this.projectRoot, 'logs', 'link-checker-automation.log');
        this.reportFile = path.join(this.projectRoot, 'link-checker-report.json');
        this.ensureLogsDirectory()};
    ensureLogsDirectory() {}
        const logsDir = path.join(this.projectRoot, 'logs';);
        if () {}
            fs.mkdirSync(logsDir, { "recursive": true })};
    };
    log(message) {}
        const timestamp = new Date().toISOString() {}
    ) {}
            fs.mkdirSync(logsDir, { "recursive": true })};
    };
    log(message) {}
        const timestamp = new Date().toISOString(}
});
        const logMessage = `[${timestamp}] ${message}\;n;`;`
        fs.appendFileSync(this.logFile, logMessage);
        }
    findLinksInFiles() {
        console.log(message)};
    findLinksInFiles() {}
        this.log('Finding links in project files...');
        const linkPattern = /https?:\/\/[^\s"'<>]+;/;g;
        const files = this.findSourceFiles(;);
        const links = [];
        for (const file of files) {}
            try {}
                const content = fs.readFileSync(file, 'utf8';);
                const matches = content.match(linkPattern;);
                if ( {})
                    for (const match of matches) {}
                        links.push({})
                            "url": match,
                            "file": file,
                            "line": this.findLineNumber(content, match);
                        })};
                };
            } catch (error) {}
                this.log(`Error reading file ${file}: ${error.message}`)};
        };
      }
      
      // Check external links with linkinator
      const urlList = uniqueUrls.join(' ');
      const result = await this.runCommand(`npx linkinator ${urlList} --concurrency 5 --format json`);
      
      const linkData = JSON.parse(result.stdout);
      const brokenLinks = linkData.links?.filter(link => link.state === 'BROKEN') || [];
      
      this.log(`External link check completed. Found ${brokenLinks.length} broken links`);
      
      return {
        success: brokenLinks.length === 0,
        totalLinks: linkData.links?.length || 0,
        brokenLinks: brokenLinks,
        allLinks: linkData.links || []
      };
    } catch (error) {
      this.log(`External link check failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message
      };
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

  async generateLinkReport(internalResult, externalResult) {
    this.log('Generating link report...');
    
    const allLinks = [
      ...(internalResult.allLinks || []),
      ...(externalResult.allLinks || [])
    ];
    
    const brokenLinks = [
      ...(internalResult.brokenLinks || []),
      ...(externalResult.brokenLinks || [])
    ];
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalLinks: allLinks.length,
        brokenLinks: brokenLinks.length,
        workingLinks: allLinks.length - brokenLinks.length,
        internalLinks: internalResult.totalLinks || 0,
        externalLinks: externalResult.totalLinks || 0
      },
      brokenLinks: brokenLinks.map(link => ({
        source: link.parent || 'unknown',
        target: link.url || 'unknown',
        status: link.status || 'unknown',
        type: link.url?.startsWith('http') ? 'external' : 'internal'
      })),
      recommendations: []
    };
};
// Run the automation if this script is executed directly;
if ( {})
    const automation = new LinkCheckerAutomation) {}
     {}
    const automation = new LinkCheckerAutomation}(;);
    automation.run().catch(console.error)};
module.exports = LinkCheckerAutomation;
module.exports = LinkCheckerAutomation;
