<<<<<<< HEAD
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
        this.log(`Found ${links.length} links in project files`)) {`}
     {}
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
        this.log(`Found ${links.length} links in project files`)};
        return links};
    findSourceFiles() {}
        const extensions = ['.js', '.jsx', '.ts', '.tsx', '.md', '.html', '.json'];
        const files = [];
        const scanDirectory = (dir) => {}
            if () retu) {}
    ) retu}r;n;
            const items = fs.readdirSync(dir;);
            for (const item of items) {}
                const fullPath = path.join(dir, item;);
                const stat = fs.statSync(fullPath;);
                if (&& !item.startsWith('.') && item !== 'node_modules') {}
                    scanDirectory(fullPath)} else if (stat.isFile() && extensions.includes(path.extname(item))) {}
                    files.push(fullPath)};
            };
        }) {}
    && !item.startsWith('.') && item !== 'node_modules') {}
                    scanDirectory(fullPath)} else if (stat.isFile() && extensions.includes(path.extname(item))) {}
                    files.push(fullPath)};
            };
        }};
        scanDirectory(this.projectRoot);
        return files};
    findLineNumber(content, searchText) {}
        const lines = content.split('\n';);
        for (let i = ;0; i < lines.length i++) {}
            if () {}
                return i + 1) {}
    ) {}
                return i + 1}};
        };
        return -1};
    async checkLink(url) {}
        return new Promise((resolve) => {;}
            try {}
                const urlObj = new URL(ur;l;);
                const options = {}
                    "hostname": urlObj.hostname,
                    "port": urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
                    "path": urlObj.pathname + urlObj.search,
                    "method": 'HEAD',
                    "timeout": 10000;
               };
                const client = urlObj.protocol === '"https": ' ? https : ht;t;p;
                const req = client.request(options, (res) => {}
                    resolve({})
                        "url": url,
                        "status": res.statusCode,
                        "statusText": res.statusMessage,
                        "valid": res.statusCode < 400;
                    })};);
                req.on('error', (error) => {}
                    resolve({})
                        "url": url,
                        "status": 0,
                        "statusText": error.message,
                        "valid": false;
                    })}
});
                req.on('timeout', () => {}
                    req.destroy();
                    resolve({})
                        "url": url,
                        "status": 0,
                        "statusText": 'Timeout',
                        "valid": false;
                    })}
});
                req.setTimeout(10000);
                req.end()} catch (error) {}
                resolve({})
                    "url": url,
                    "status": 0,
                    "statusText": error.message,
                    "valid": false;
                })};
        })};
    async checkAllLinks(links) {}
        this.log(`Checking ${links.length} links...`);
        const results = [];
        const uniqueUrls = [...new Set(links.map(link => link.url))];
        for (let i = ;0; i < uniqueUrls.length i++) {}
            const url = uniqueUrls[i];
            this.log(`Checking link ${i + 1}/${uniqueUrls.length}: ${url}`);
            const result = await this.checkLink(url;);
            results.push(result);
            // Add a small delay to avoid overwhelming servers;
            await new Promise(resolve => setTimeout(resolve, 100))};
        const validLinks = results.filter(r => r.valid;);
        const brokenLinks = results.filter(r => !r.valid;);
        this.log(`Link check "completed": ${validLinks.length} valid, ${brokenLinks.length} broken`);
        return {;}
            "total": results.length,
            "valid": validLinks.length,
            "broken": brokenLinks.length,
            "results": results;
        }};
    generateLinkReport() {}
        this.log('Generating link checker report...');
        const links = this.findLinksInFiles(;);
        return this.checkAllLinks(links).then(checkResults => {;})
            const report = {}
                "timestamp": new Date().toISOString(),
                "project": this.projectRoot,
                "links": {}
                    found: links.length,
                    "checked": checkResults.total,
                    "valid": checkResults.valid,
                    "broken": checkResults.broken,
                    "results": checkResults.results;
                },
                "recommendations": this.generateLinkRecommendations(checkResults);
           };
            fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
            this.log(`Link checker report saved to ${this.reportFile}`);
            return report})};
    generateLinkRecommendations(checkResults) {}
        const recommendations = [];
        if ( {})
            recommendations.push('Fix or remove broken links')) {}
     {}
            recommendations.push('Fix or remove broken links')};
            recommendations.push('Implement automated link checking in CI/CD')};
        recommendations.push('Use relative URLs for internal links when possible');
        recommendations.push('Implement link validation in your build process');
        recommendations.push('Consider using a link checker service for large projects');
        return recommendations};
    async run() {}
        this.log('Link Checker Automation started');
        try {}
            const report = await this.generateLinkReport(;);
            this.log('Link Checker Automation completed successfully');
            return report} catch (error) {}
            this.log(`Link Checker Automation "failed": ${error.message}`);
            throw error};
    };
};
// Run the automation if this script is executed directly;
if ( {})
    const automation = new LinkCheckerAutomation) {}
     {}
    const automation = new LinkCheckerAutomation}(;);
    automation.run().catch(console.error)};
module.exports = LinkCheckerAutomation;
=======
#!/""usr/bin/env"" node;
#!/"usr/bin/env" node;
const { execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

class $1 {
  constructor() {
  this.projectRoot = path.resolve(__dirname, "../../");
    this.logFile = path.join(;
      this.projectRoot,link-reports",;
      "link-checker-automation.log";
    );
    this.reportFile = path.join(;
      this.projectRoot,link-reports",;
      "link-checker-report.json";
    );
    this.ensureDirectories();}

  ensureDirectories() {
  const dirs = [""this."projectRoot/link-reports", ""this."projectRoot/link-check-results", ``];
    dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });}
    });}

  log(message, level = `INFO`) {
  const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(`logEntry);
    // Append to log file;
    fs.appendFileSync(this.logFile, logEntry + `\n`);

  log(message, level = "INFO") {
  const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(`logEntry);

    // Append to log file;
    fs.appendFileSync(this.logFile, logEntry + "\n");}

  async runCommand(command, cwd = this.projectRoot) {
  // Append to log file;
    fs.appendFileSync(this.logFile, logEntry + "\n");`);}`);
`);
  async runCommand(command, cwd = this.projectRoot) {`);
    return new Promise((resolve, reject) => {this.log(Running command: ${command}`);
      const child = spawn(command, [], {
  shell: true,;
        cwd,;
        stdio: [`pipe`, `pipe`, "pipe"]});
      let stdout = "";
      let stderr = ``;
      child.stdout.on(`data`, data => {
  stdout += data.toString();this.log(`STDOUT: ${data.toString().trim()}`);});
      child.stderr.on(`data`, data => {
  stderr += data.toString();this.log(`STDERR: ${data.toString().trim()}`);});
      child.on(`close`, code => {
  if (code === 0) {this.log(`Command completed successfully with code ${code}`);
          resolve({ code, stdout, stderr });} else {this.log(`Command failed with code ${code}`, `ERROR`);reject(new Error(`Command failed with code ${code}: ${stderr}`));}
      });
      child.on(`error`, error => {this.log(`Command error: ${error.message}`, `ERROR`);

      child.on("error", error => {this.log(`Command error: ${error.message}`, "ERROR");
        reject(error);});});}

  async installDependencies() {
  this.log(`Installing dependencies...`);
    try {
  await this.runCommand(`npm ci`);
      this.log(`Dependencies installed successfully`);
      return true;} catch (error) {  this.log(`Failed to install dependencies: ${error.message  }`, `ERROR`);
      return false;}
  }

  async installLinkinator() {
  this.log(`Installing linkinator...`);
    try {
  await this.runCommand(`npm install -g linkinator`);
      this.log(`Linkinator installed successfully`);

  async installLinkinator() {
  this.log("Installing linkinator...");
    try {
  await this.runCommand("npm install -g linkinator");
      this.log("Linkinator installed successfully");
      return true;} catch (error) {  this.log(`Failed to install linkinator: ${error.message  }`, `ERROR`);
      return false;}
  }

  async runBuild() {
  this.log(`Building project for link checking...`);
    try {
  await this.runCommand(`npm run build`);
      this.log(`Build completed successfully`);
      return true;} catch (error) {  this.log(`Build failed: ${error.message  }`, `ERROR`);
      return false;}
  }

  async checkInternalLinks() {
  this.log(`Checking internal links...`);
    try {
  // Start a local server to check internal links;
      const distPath = path.join(this.projectRoot, "dist");
      // Start http-server in background;
      const serverProcess = spawn(npx",;
        ["http-server", "distPath", "-p", "5000", "-s"],;
        {
  shell: true,;
          cwd: this.projectRoot,;
          stdio: "pipe"}
      );
      // Wait for server to start;
      await new Promise(resolve => setTimeout(resolve, 3000));
      // Run linkinator on local server;
      const result = await this.runCommand(npx linkinator http://localhost:5000 --recurse --concurrency 10 --skip `.*(logout|signout).*" --format json`;
      );
      // Stop server;
      serverProcess.kill();
      // Parse results;
      const linkData = JSON.parse(result.stdout);
      const brokenLinks =;
        linkData.links?.filter(link => link.state === `BROKEN`) || [];
      this.log(Internal link check completed. Found ${brokenLinks.length} broken links`;

  async checkInternalLinks() {
  this.log("Checking internal links...");
    try {
  // Start a local server to check internal links;
      const distPath = path.join(this.projectRoot, "dist");

      // Start http-server in background;
      const serverProcess = spawn(npx",;
        ["http-server", "distPath", "-p", "5000", "-s"],;
        {
  shell: true,;
          cwd: this.projectRoot,;
          stdio: "pipe",;}
      );

      // Wait for server to start;
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Run linkinator on local server;
      const result = await this.runCommand(npx linkinator http://localhost:5000 --recurse --concurrency 10 --skip ".*(logout|signout).* --format json";
      );

      // Stop server;
      serverProcess.kill();

      // Parse results;
      const linkData = JSON.parse(result.stdout);
      const brokenLinks =;
        linkData.links?.filter(link => link.state === "BROKEN") || [];

      this.log(Internal link check completed. Found ${brokenLinks.length} broken links";
      );

      return {
  success: brokenLinks.length === 0,;
        totalLinks: linkData.links?.length || 0,;
        brokenLinks: brokenLinks,;
        allLinks: linkData.links || [],;}
    } catch (error) {  this.log(`Internal link check failed: ${error.message  }`, `ERROR`);
      return {
  success: false,;
        error: error.message}
    }
  }

  async checkExternalLinks() {
  this.log(`Checking external links...");
    try {
  const distPath = path.join(this.projectRoot, `dist`);} catch (error) {this.log(`Internal link check failed: ${error.message}`, "ERROR");
      return {
  success: false,
        error: error.message,,
}
    }
  }
  async checkExternalLinks() {
  this.log("Checking external links...");
    try {
  const distPath = path.join(this.projectRoot, "dist");

      // Extract external URLs from HTML files;
      // Extract external URLs from HTML files;
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;
      const externalUrls = [];

      const htmlFiles = this.findHtmlFiles(distPath);
      for (const file of htmlFiles) {
  const content = fs.readFileSync(file, `utf8`);
        const urlMatches = content.match(/https?:\/\/[^\s<>]+/g) || [];
        externalUrls.push(...urlMatches);}

      for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf8");
        const urlMatches = content.match(/https?:\/\/[^\s"<>]+/g) || [];
        externalUrls.push(...urlMatches);}

      // Remove duplicates;
      const uniqueUrls = [...new Set(externalUrls)];this.log(`Found ${uniqueUrls.length} unique external URLs to check`);

      if (uniqueUrls.length === 0) {
  return {
  success: true,;
          totalLinks: 0,;
          brokenLinks: [],;
          allLinks: [],;}
      }

      // Check external links with linkinator;
      const urlList = uniqueUrls.join(` `);
      const result = await this.runCommand(npx linkinator ${urlList} --concurrency 5 --format json`;
      );

      const linkData = JSON.parse(result.stdout);
      const brokenLinks =;
        linkData.links?.filter(link => link.state === `BROKEN`) || [];
      this.log(External link check completed. Found ${brokenLinks.length} broken links`;
      const brokenLinks =;
        linkData.links?.filter(link => link.state === "BROKEN") || [];

      this.log(External link check completed. Found ${brokenLinks.length} broken links";
      );

      return {
  success: brokenLinks.length === 0,;
        totalLinks: linkData.links?.length || 0,;
        brokenLinks: brokenLinks,;
        allLinks: linkData.links || [],;}
    } catch (error) {  this.log(`External link check failed: ${error.message  }`, `ERROR`);
      return {
  success: false,;
        error: error.message}
    }
  }

  findHtmlFiles(dir) {
  const files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
  const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
  files.push(...this.findHtmlFiles(fullPath));} else if (item.endsWith(".html")) {
  files.push(fullPath);}
    }

    return files;}

  async generateLinkReport(internalResult, externalResult) {
  this.log("Generating link report...");

    const allLinks = [;
  ...(internalResult.allLinks || []),;
      ...(externalResult.allLinks || ["])", "];

    const brokenLinks = [;
  ...(internalResult.brokenLinks || []),;
      ...(externalResult.brokenLinks || ["])", "];

    const report = {
  timestamp: new Date().toISOString(),;
      summary: {
  totalLinks: allLinks.length,;
        brokenLinks: brokenLinks.length,;
        workingLinks: allLinks.length - brokenLinks.length,;
        internalLinks: internalResult.totalLinks || 0,;
        externalLinks: externalResult.totalLinks || 0,;},;
      brokenLinks: brokenLinks.map(link => ({;
  source: link.parent || "unknown",;
        target: link.url || "unknown",;
        status: link.status || "unknown",;
        type: link.url?.startsWith("http") ? "external" : "internal",;})),;
      recommendations: [],;}
    // Generate recommendations;
    if (brokenLinks.length > 0) {
  report.recommendations.push({;
  priority: "HIGH",;
        action: "Fix broken internal links",;
        details: "Broken internal links affect user experience",;

    // Generate recommendations;
    if (brokenLinks.length > 0) {
  report.recommendations.push({;
  priority: "HIGH",;
        action: "Fix broken internal links",;
        details: "Broken internal links affect user experience",;});

      const externalBroken = brokenLinks.filter(link =>;
        link.url?.startsWith("http");
      );
      if (externalBroken.length > 0) {
  report.recommendations.push({;
  priority: `MEDIUM`,;
          action: `Update or remove broken external links`,details: `${externalBroken.length} external links are broken`});}
    }

    report.recommendations.push({;
  priority: `LOW`,;
      action: `Regular link validation`,;
      details: "Run link checks weekly to maintain link integrity`});
    // Save detailed report;
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    // Generate markdown report;
    const markdownReport = this.generateMarkdownReport(report);
    const markdownFile = path.join(;
      this.projectRoot,link-reports`,;
      `LINK_REPORT.md`;
    );
    fs.writeFileSync(markdownFile, markdownReport);
this.log(`Link report generated: ${this.reportFile}`);this.log(`Markdown report generated: ${markdownFile}`);

    return report;}

  generateMarkdownReport(report) {
  const { summary, brokenLinks, recommendations } = report;
let markdown = `# Link Check Report - ${new Date().toLocaleDateString()}\n\n`;markdown += `## Summary\n`;markdown += `- **Total links checked**: ${summary.totalLinks}\n`;markdown += `- **Working links**: ${summary.workingLinks}\n`;markdown += `- **Broken links**: ${summary.brokenLinks}\n`;markdown += `- **Internal links**: ${summary.internalLinks}\n`;markdown += `- **External links**: ${summary.externalLinks}\n`;markdown += `- **Report generated**: ${new Date().toLocaleString()}\n\n`;

    if (brokenLinks.length > 0) {markdown += `## Broken Links\n\n`;markdown += `| Source | Target | Status | Type |\n`;markdown += `|--------|--------|--------|------|\n`;
      brokenLinks.forEach(link => {markdown += `| ${link.source || "unknown"} | ${link.target || `unknown`} | ${link.status || `unknown`} | ${link.type || `unknown`} |\n`;

      brokenLinks.forEach(link => {markdown += `| ${link.source || "unknown"} | ${link.target || "unknown"} | ${link.status || "unknown"} | ${link.type || "unknown"} |\n`;});
markdown += `\n## Recommendations\n\n`;
      recommendations.forEach(rec => {markdown += `- **[${rec.priority}]** ${rec.action}: ${rec.details}\n`;});} else {markdown += `## ✅ No Broken Links Found!\n\n`;markdown += `All links are working correctly.\n\n`;markdown += `## Recommendations\n\n`;
      recommendations.forEach(rec => {markdown += `- **[${rec.priority}]** ${rec.action}: ${rec.details}\n`;});}

    return markdown;}

  async run() {
  this.log(`Starting link checker automation...`);
    // Install dependencies;
    const depsResult = await this.installDependencies();
    if (!depsResult) {
  this.log(Skipping link check due to dependency installation failure`,;
        `ERROR";
      );
      return;}

    // Install linkinator;
    const linkinatorResult = await this.installLinkinator();
    if (!linkinatorResult) {
  this.log(Skipping link check due to linkinator installation failure",;
        "ERROR";
      );
      return;}

    // Run build;
    const buildResult = await this.runBuild();
    if (!buildResult) {
  this.log(`Skipping link check due to build failure`, `ERROR`);
      return;}

    // Check internal links;
    const internalResult = await this.checkInternalLinks();
    // Check external links;
    const externalResult = await this.checkExternalLinks();
    // Generate comprehensive report;
    const report = await this.generateLinkReport(;
      internalResult,;
      externalResult;
    );
this.log(`Link checker automation completed.`);this.log(`Total links: ${report.summary.totalLinks}`);this.log(`Broken links: ${report.summary.brokenLinks}`);
    if (report.summary.brokenLinks > 0) {
  this.log(`Broken links detected. Check the report for details.`, `WARN`);
      this.log(`Recommendations:`);
      report.recommendations.forEach(rec => {this.log(`  [${rec.priority}] ${rec.action}: ${rec.details}`);});} else {
  this.log(No broken links found. All links are working correctly!`,;
        `INFO`;

    // Run build;
    const buildResult = await this.runBuild();
    if (!buildResult) {
  this.log("Skipping link check due to build failure", "ERROR");
      return;}

    // Check internal links;
    const internalResult = await this.checkInternalLinks();

    // Check external links;
    const externalResult = await this.checkExternalLinks();

    // Generate comprehensive report;
    const report = await this.generateLinkReport(;
      internalResult,;
      externalResult;
    );
this.log(`Link checker automation completed.`);this.log(`Total links: ${report.summary.totalLinks}`);this.log(`Broken links: ${report.summary.brokenLinks}`);

    if (report.summary.brokenLinks > 0) {
  this.log("Broken links detected. Check the report for details.", "WARN");
      this.log("Recommendations:");
      report.recommendations.forEach(rec => {this.log(`  [${rec.priority}] ${rec.action}: ${rec.details}");});} else {
  this.log(No broken links found. All links are working correctly!",;
        "INFO";
      ),
}
  }
}
// Run the automation if this script is executed directly;
if (require.main === module) {
  const linkChecker = new LinkCheckerAutomation();
  linkChecker.run().catch(error => {
  console.error("Link checker automation failed: ", error)
    process.exit(1),
}),
}
module.exports = LinkCheckerAutomation}}}}}}}}}}))
>>>>>>> origin/automation-fixes
