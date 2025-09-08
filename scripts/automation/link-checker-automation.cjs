
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
;
class LinkCheckerAutomation {;
  constructor() {;
    this.projectRoot = path.resolve(__dirname, '../../');
    this.logFile = path.join(;
      this.projectRoot,link-reports',;
      'link-checker-automation.log';
    );
    this.reportFile = path.join(;
      this.projectRoot,link-reports',;
      'link-checker-report.json';
    );
    this.ensureDirectories()}

        fs.mkdirSync(dir { recursive: true })}
    })}

  }
;
  async runCommand(command, cwd = this.projectRoot) {;

    return new Promise((resolve, reject) => {this.log(Running command: ${command}`);

        if (code === 0) {this.log(`Command completed successfully with code ${code}`);
          resolve({ code, stdout, stderr })} else {this.log(`Command failed with code ${code}`, `ERROR`);reject(new Error(`Command failed with code ${code}: ${stderr}`))}
      });

        reject(error)})})}

      return true} catch (error) {  this.log(`Failed to install dependencies: ${error.message  }`, `ERROR`);
      return false}
  }

      return true} catch (error) {  this.log(`Failed to install linkinator: ${error.message  }`, `ERROR`);
      return false}
  }

      return true} catch (error) {  this.log(`Build failed: ${error.message  }`, `ERROR`);
      return false}
  }

      );
;
      return {;
        success: brokenLinks.length === 0,;
        totalLinks: linkData.links?.length || 0,;
        brokenLinks: brokenLinks,;
        allLinks: linkData.links || [],};

      // Extract external URLs from HTML files;
      const externalUrls = [];
;
      const htmlFiles = this.findHtmlFiles(distPath);

      // Remove duplicates;
      const uniqueUrls = [...new Set(externalUrls)];this.log(`Found ${uniqueUrls.length} unique external URLs to check`);
;
      if (uniqueUrls.length === 0) {;
        return {;
          success: true,;
          totalLinks: 0,;
          brokenLinks: [],;
          allLinks: [],}}

      );
;
      const linkData = JSON.parse(result.stdout);

      );
;
      return {;
        success: brokenLinks.length === 0,;
        totalLinks: linkData.links?.length || 0,;
        brokenLinks: brokenLinks,;
        allLinks: linkData.links || [],}}}
  }
;
  findHtmlFiles(dir) {;
    const files = [];
    const items = fs.readdirSync(dir);
;
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
;
      if (stat.isDirectory()) {;
        files.push(...this.findHtmlFiles(fullPath))} else if (item.endsWith('.html')) {;
        files.push(fullPath)}
    }
;
    return files}
;
  async generateLinkReport(internalResult, externalResult) {;
    this.log('Generating link report...');
;
    const allLinks = [
      ...(internalResult.allLinks || []),;
      ...(externalResult.allLinks || ['])', '];
;
    const brokenLinks = [
      ...(internalResult.brokenLinks || []),;
      ...(externalResult.brokenLinks || ['])', '];
;
    const report = {;
      timestamp: new Date().toISOString(),;
      summary: {;
        totalLinks: allLinks.length,;
        brokenLinks: brokenLinks.length,;
        workingLinks: allLinks.length - brokenLinks.length,;
        internalLinks: internalResult.totalLinks || 0,;
        externalLinks: externalResult.totalLinks || 0,},;
      brokenLinks: brokenLinks.map(link => ({;
        source: link.parent || 'unknown',;
        target: link.url || 'unknown',;
        status: link.status || 'unknown',;
        type: link.url?.startsWith('http') ? 'external' : 'internal',})),;
      recommendations: [],}});
;
      const externalBroken = brokenLinks.filter(link =>;
        link.url?.startsWith('http');
      );

    );
    fs.writeFileSync(markdownFile, markdownReport);
this.log(`Link report generated: ${this.reportFile}`);this.log(`Markdown report generated: ${markdownFile}`);
;
    return report}
;
  generateMarkdownReport(report) {;
    const { summary, brokenLinks, recommendations } = report;
let markdown = `# Link Check Report - ${new Date().toLocaleDateString()}\n\n`;markdown += `## Summary\n`;markdown += `- **Total links checked**: ${summary.totalLinks}\n`;markdown += `- **Working links**: ${summary.workingLinks}\n`;markdown += `- **Broken links**: ${summary.brokenLinks}\n`;markdown += `- **Internal links**: ${summary.internalLinks}\n`;markdown += `- **External links**: ${summary.externalLinks}\n`;markdown += `- **Report generated**: ${new Date().toLocaleString()}\n\n`;
;
    if (brokenLinks.length > 0) {markdown += `## Broken Links\n\n`;markdown += `| Source | Target | Status | Type |\n`;markdown += `|--------|--------|--------|------|\n`});
markdown += `\n## Recommendations\n\n`;
      recommendations.forEach(rec => {markdown += `- **[${rec.priority}]** ${rec.action}: ${rec.details}\n`})} else {markdown += `## ✅ No Broken Links Found!\n\n`;markdown += `All links are working correctly.\n\n`;markdown += `## Recommendations\n\n`;
      recommendations.forEach(rec => {markdown += `- **[${rec.priority}]** ${rec.action}: ${rec.details}\n`})}
;
    return markdown}

    // Install linkinator;
    const linkinatorResult = await this.installLinkinator();
    if (!linkinatorResult) {;
      this.log(Skipping link check due to linkinator installation failure',;
        'ERROR';
      );
      return}

      )}
  }
}

  const linkChecker = new LinkCheckerAutomation();
  linkChecker.run().catch(error => {
    console.error('Link checker automation failed:', error);
    process.exit(1)})}
;
module.exports = LinkCheckerAutomation;
