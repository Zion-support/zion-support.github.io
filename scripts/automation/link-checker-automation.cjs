#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class LinkCheckerAutomation {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '../../');
    this.logFile = path.join(this.projectRoot, 'link-reports', 'link-checker-automation.log');
    this.reportFile = path.join(this.projectRoot, 'link-reports', 'link-checker-report.json');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      path.join(this.projectRoot, 'link-reports'),
      path.join(this.projectRoot, 'link-check-results')
    ];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logEntry + '\n');
  }

  async runCommand(command, cwd = this.projectRoot) {
    return new Promise((resolve, reject) => {
      this.log(`Running command: ${command}`);
      
      const child = spawn(command, [], {
        shell: true,
        cwd,
        stdio: ['pipe', 'pipe', 'pipe']
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
        this.log(`STDOUT: ${data.toString().trim()}`);
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
        this.log(`STDERR: ${data.toString().trim()}`);
      });

      child.on('close', (code) => {
        if (code === 0) {
          this.log(`Command completed successfully with code ${code}`);
          resolve({ code, stdout, stderr });
        } else {
          this.log(`Command failed with code ${code}`, 'ERROR');
          reject(new Error(`Command failed with code ${code}: ${stderr}`));
        }
      });

      child.on('error', (error) => {
        this.log(`Command error: ${error.message}`, 'ERROR');
        reject(error);
      });
    });
  }

  async installDependencies() {
    this.log('Installing dependencies...');
    try {
      await this.runCommand('npm ci');
      this.log('Dependencies installed successfully');
      return true;
    } catch (error) {
      this.log(`Failed to install dependencies: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async installLinkinator() {
    this.log('Installing linkinator...');
    try {
      await this.runCommand('npm install -g linkinator');
      this.log('Linkinator installed successfully');
      return true;
    } catch (error) {
      this.log(`Failed to install linkinator: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runBuild() {
    this.log('Building project for link checking...');
    try {
      await this.runCommand('npm run build');
      this.log('Build completed successfully');
      return true;
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async checkInternalLinks() {
    this.log('Checking internal links...');
    try {
      // Start a local server to check internal links
      const distPath = path.join(this.projectRoot, 'dist');
      
      // Start http-server in background
      const serverProcess = spawn('npx', ['http-server', distPath, '-p', '5000', '-s'], {
        shell: true,
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      // Wait for server to start
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Run linkinator on local server
      const result = await this.runCommand('npx linkinator http://localhost:5000 --recurse --concurrency 10 --skip ".*(logout|signout).*" --format json');
      
      // Stop server
      serverProcess.kill();
      
      // Parse results
      const linkData = JSON.parse(result.stdout);
      const brokenLinks = linkData.links?.filter(link => link.state === 'BROKEN') || [];
      
      this.log(`Internal link check completed. Found ${brokenLinks.length} broken links`);
      
      return {
        success: brokenLinks.length === 0,
        totalLinks: linkData.links?.length || 0,
        brokenLinks: brokenLinks,
        allLinks: linkData.links || []
      };
    } catch (error) {
      this.log(`Internal link check failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message
      };
    }
  }

  async checkExternalLinks() {
    this.log('Checking external links...');
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      
      // Extract external URLs from HTML files
      const externalUrls = [];
      
      const htmlFiles = this.findHtmlFiles(distPath);
      for (const file of htmlFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const urlMatches = content.match(/https?:\/\/[^\s"<>]+/g) || [];
        externalUrls.push(...urlMatches);
      }
      
      // Remove duplicates
      const uniqueUrls = [...new Set(externalUrls)];
      this.log(`Found ${uniqueUrls.length} unique external URLs to check`);
      
      if (uniqueUrls.length === 0) {
        return {
          success: true,
          totalLinks: 0,
          brokenLinks: [],
          allLinks: []
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
    
    // Generate recommendations
    if (brokenLinks.length > 0) {
      report.recommendations.push({
        priority: 'HIGH',
        action: 'Fix broken internal links',
        details: 'Broken internal links affect user experience'
      });
      
      const externalBroken = brokenLinks.filter(link => link.url?.startsWith('http'));
      if (externalBroken.length > 0) {
        report.recommendations.push({
          priority: 'MEDIUM',
          action: 'Update or remove broken external links',
          details: `${externalBroken.length} external links are broken`
        });
      }
    }
    
    report.recommendations.push({
      priority: 'LOW',
      action: 'Regular link validation',
      details: 'Run link checks weekly to maintain link integrity'
    });
    
    // Save detailed report
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    const markdownFile = path.join(this.projectRoot, 'link-reports', 'LINK_REPORT.md');
    fs.writeFileSync(markdownFile, markdownReport);
    
    this.log(`Link report generated: ${this.reportFile}`);
    this.log(`Markdown report generated: ${markdownFile}`);
    
    return report;
  }

  generateMarkdownReport(report) {
    const { summary, brokenLinks, recommendations } = report;
    
    let markdown = `# Link Check Report - ${new Date().toLocaleDateString()}\n\n`;
    markdown += `## Summary\n`;
    markdown += `- **Total links checked**: ${summary.totalLinks}\n`;
    markdown += `- **Working links**: ${summary.workingLinks}\n`;
    markdown += `- **Broken links**: ${summary.brokenLinks}\n`;
    markdown += `- **Internal links**: ${summary.internalLinks}\n`;
    markdown += `- **External links**: ${summary.externalLinks}\n`;
    markdown += `- **Report generated**: ${new Date().toLocaleString()}\n\n`;
    
    if (brokenLinks.length > 0) {
      markdown += `## Broken Links\n\n`;
      markdown += `| Source | Target | Status | Type |\n`;
      markdown += `|--------|--------|--------|------|\n`;
      
      brokenLinks.forEach(link => {
        markdown += `| ${link.source || 'unknown'} | ${link.target || 'unknown'} | ${link.status || 'unknown'} | ${link.type || 'unknown'} |\n`;
      });
      
      markdown += `\n## Recommendations\n\n`;
      recommendations.forEach(rec => {
        markdown += `- **[${rec.priority}]** ${rec.action}: ${rec.details}\n`;
      });
    } else {
      markdown += `## ✅ No Broken Links Found!\n\n`;
      markdown += `All links are working correctly.\n\n`;
      markdown += `## Recommendations\n\n`;
      recommendations.forEach(rec => {
        markdown += `- **[${rec.priority}]** ${rec.action}: ${rec.details}\n`;
      });
    }
    
    return markdown;
  }

  async run() {
    this.log('Starting link checker automation...');
    
    // Install dependencies
    const depsResult = await this.installDependencies();
    if (!depsResult) {
      this.log('Skipping link check due to dependency installation failure', 'ERROR');
      return;
    }
    
    // Install linkinator
    const linkinatorResult = await this.installLinkinator();
    if (!linkinatorResult) {
      this.log('Skipping link check due to linkinator installation failure', 'ERROR');
      return;
    }
    
    // Run build
    const buildResult = await this.runBuild();
    if (!buildResult) {
      this.log('Skipping link check due to build failure', 'ERROR');
      return;
    }
    
    // Check internal links
    const internalResult = await this.checkInternalLinks();
    
    // Check external links
    const externalResult = await this.checkExternalLinks();
    
    // Generate comprehensive report
    const report = await this.generateLinkReport(internalResult, externalResult);
    
    this.log(`Link checker automation completed.`);
    this.log(`Total links: ${report.summary.totalLinks}`);
    this.log(`Broken links: ${report.summary.brokenLinks}`);
    
    if (report.summary.brokenLinks > 0) {
      this.log('Broken links detected. Check the report for details.', 'WARN');
      this.log('Recommendations:');
      report.recommendations.forEach(rec => {
        this.log(`  [${rec.priority}] ${rec.action}: ${rec.details}`);
      });
    } else {
      this.log('No broken links found. All links are working correctly!', 'INFO');
    }
  }
}

// Run the automation if this script is executed directly
if (require.main === module) {
  const linkChecker = new LinkCheckerAutomation();
  linkChecker.run().catch(error => {
    console.error('Link checker automation failed:', error);
    process.exit(1);
  });
}

module.exports = LinkCheckerAutomation;