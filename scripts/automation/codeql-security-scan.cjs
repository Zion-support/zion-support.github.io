#!/usr/bin/env node

/**
 * CodeQL Security Scanner - PM2 Automation
 * Replaces GitHub Actions CodeQL workflow
 * Runs security analysis using CodeQL
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class CodeQLSecurityScanner {
  constructor() {
    this.logFile = path.join(__dirname, '../../reports/codeql-security-scan-report.json');
    this.interval = process.env.AUTOMATION_INTERVAL || 86400000; // 24 hours default
    this.isRunning = false;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Also log to file
    try {
      const logDir = path.dirname(this.logFile);
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      
      const logEntry = {
        timestamp,
        level,
        message,
        automation: 'codeql-security-scan'
      };
      
      let logs = [];
      if (fs.existsSync(this.logFile)) {
        try {
          logs = JSON.parse(fs.readFileSync(this.logFile, 'utf8'));
        } catch (e) {
          logs = [];
        }
      }
      
      logs.push(logEntry);
      fs.writeFileSync(this.logFile, JSON.stringify(logs, null, 2));
    } catch (e) {
      console.error('Failed to write to log file:', e.message);
    }
  }

  async checkCodeQLInstallation() {
    try {
      execSync('codeql --version', { stdio: 'pipe' });
      return true;
    } catch (e) {
      this.log('CodeQL CLI not found. Installing...', 'WARN');
      try {
        // Install CodeQL CLI
        execSync('npm install -g @github/codeql-cli', { stdio: 'pipe' });
        this.log('CodeQL CLI installed successfully', 'INFO');
        return true;
      } catch (installError) {
        this.log(`Failed to install CodeQL CLI: ${installError.message}`, 'ERROR');
        return false;
      }
    }
  }

  async setupCodeQLDatabase() {
    try {
      this.log('Setting up CodeQL database...', 'INFO');
      
      // Create CodeQL database directory
      const dbDir = path.join(__dirname, '../../.codeql/databases');
      if (!fs.existsSync(dbDir)) {
        fs.mkdirSync(dbDir, { recursive: true });
      }
      
      // Initialize database for JavaScript/TypeScript
      const dbPath = path.join(dbDir, 'js-ts-db');
      if (fs.existsSync(dbPath)) {
        this.log('Removing existing database...', 'INFO');
        execSync(`rm -rf "${dbPath}"`, { stdio: 'pipe' });
      }
      
      this.log('Creating new CodeQL database...', 'INFO');
      execSync(`codeql database create "${dbPath}" --language=javascript`, { 
        stdio: 'pipe',
        cwd: path.join(__dirname, '../../')
      });
      
      return dbPath;
    } catch (e) {
      this.log(`Failed to setup CodeQL database: ${e.message}`, 'ERROR');
      return null;
    }
  }

  async runCodeQLAnalysis(dbPath) {
    try {
      this.log('Running CodeQL analysis...', 'INFO');
      
      // Run analysis
      const resultsFile = path.join(__dirname, '../../reports/codeql-results.sarif');
      execSync(`codeql database analyze "${dbPath}" javascript-security-and-quality.qls --format=sarif-latest --output="${resultsFile}"`, {
        stdio: 'pipe',
        cwd: path.join(__dirname, '../../')
      });
      
      // Parse results
      if (fs.existsSync(resultsFile)) {
        const results = JSON.parse(fs.readFileSync(resultsFile, 'utf8'));
        return this.parseSARIFResults(results);
      }
      
      return { issues: [], summary: 'No results found' };
    } catch (e) {
      this.log(`Failed to run CodeQL analysis: ${e.message}`, 'ERROR');
      return { issues: [], summary: 'Analysis failed', error: e.message };
    }
  }

  parseSARIFResults(sarifData) {
    try {
      const issues = [];
      let totalIssues = 0;
      let criticalIssues = 0;
      let warningIssues = 0;
      let noteIssues = 0;
      
      if (sarifData.runs && sarifData.runs.length > 0) {
        const run = sarifData.runs[0];
        
        if (run.results) {
          run.results.forEach(result => {
            const issue = {
              ruleId: result.ruleId,
              level: result.level || 'warning',
              message: result.message?.text || 'No message',
              locations: result.locations?.map(loc => ({
                file: loc.physicalLocation?.artifactLocation?.uri || 'Unknown',
                line: loc.physicalLocation?.region?.startLine || 0,
                column: loc.physicalLocation?.region?.startColumn || 0
              })) || []
            };
            
            issues.push(issue);
            totalIssues++;
            
            switch (issue.level.toLowerCase()) {
              case 'error':
                criticalIssues++;
                break;
              case 'warning':
                warningIssues++;
                break;
              case 'note':
                noteIssues++;
                break;
            }
          });
        }
      }
      
      return {
        issues,
        summary: {
          total: totalIssues,
          critical: criticalIssues,
          warning: warningIssues,
          note: noteIssues
        }
      };
    } catch (e) {
      this.log(`Failed to parse SARIF results: ${e.message}`, 'ERROR');
      return { issues: [], summary: 'Parsing failed', error: e.message };
    }
  }

  async generateReport(analysisResults) {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        automation: 'codeql-security-scan',
        summary: analysisResults.summary,
        issues: analysisResults.issues,
        recommendations: this.generateRecommendations(analysisResults)
      };
      
      // Save detailed report
      const reportFile = path.join(__dirname, '../../reports/codeql-security-scan-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      // Generate markdown report
      const markdownReport = this.generateMarkdownReport(report);
      const markdownFile = path.join(__dirname, '../../reports/codeql-security-scan-report.md');
      fs.writeFileSync(markdownFile, markdownReport);
      
      this.log(`Report generated: ${reportFile}`, 'INFO');
      this.log(`Markdown report: ${markdownFile}`, 'INFO');
      
      return report;
    } catch (e) {
      this.log(`Failed to generate report: ${e.message}`, 'ERROR');
      return null;
    }
  }

  generateRecommendations(analysisResults) {
    const recommendations = [];
    
    if (analysisResults.summary.critical > 0) {
      recommendations.push('🔴 Critical security issues detected. Immediate action required.');
    }
    
    if (analysisResults.summary.warning > 0) {
      recommendations.push('⚠️ Security warnings detected. Review and address soon.');
    }
    
    if (analysisResults.issues.length > 0) {
      recommendations.push('📋 Review all detected issues and implement fixes.');
    }
    
    if (analysisResults.summary.total === 0) {
      recommendations.push('✅ No security issues detected. Continue monitoring.');
    }
    
    recommendations.push('🔄 Run this scan regularly to maintain security posture.');
    recommendations.push('📚 Review CodeQL documentation for detailed issue explanations.');
    
    return recommendations;
  }

  generateMarkdownReport(report) {
    let markdown = `# CodeQL Security Scan Report\n\n`;
    markdown += `**Generated:** ${report.timestamp}\n`;
    markdown += `**Automation:** ${report.automation}\n\n`;
    
    markdown += `## Summary\n\n`;
    markdown += `- **Total Issues:** ${report.summary.total}\n`;
    markdown += `- **Critical:** ${report.summary.critical}\n`;
    markdown += `- **Warnings:** ${report.summary.warning}\n`;
    markdown += `- **Notes:** ${report.summary.note}\n\n`;
    
    if (report.issues.length > 0) {
      markdown += `## Issues\n\n`;
      report.issues.forEach((issue, index) => {
        markdown += `### Issue ${index + 1}\n`;
        markdown += `- **Rule:** ${issue.ruleId}\n`;
        markdown += `- **Level:** ${issue.level}\n`;
        markdown += `- **Message:** ${issue.message}\n`;
        
        if (issue.locations.length > 0) {
          markdown += `- **Locations:**\n`;
          issue.locations.forEach(loc => {
            markdown += `  - ${loc.file}:${loc.line}:${loc.column}\n`;
          });
        }
        markdown += `\n`;
      });
    }
    
    markdown += `## Recommendations\n\n`;
    report.recommendations.forEach(rec => {
      markdown += `- ${rec}\n`;
    });
    
    return markdown;
  }

  async run() {
    if (this.isRunning) {
      this.log('CodeQL security scan already running, skipping...', 'WARN');
      return;
    }
    
    this.isRunning = true;
    this.log('Starting CodeQL security scan...', 'INFO');
    
    try {
      // Check CodeQL installation
      const codeqlAvailable = await this.checkCodeQLInstallation();
      if (!codeqlAvailable) {
        this.log('CodeQL not available, skipping scan', 'ERROR');
        return;
      }
      
      // Setup database
      const dbPath = await this.setupCodeQLDatabase();
      if (!dbPath) {
        this.log('Failed to setup database, skipping scan', 'ERROR');
        return;
      }
      
      // Run analysis
      const analysisResults = await this.runCodeQLAnalysis(dbPath);
      
      // Generate report
      const report = await this.generateReport(analysisResults);
      
      if (report) {
        this.log(`CodeQL security scan completed. Found ${analysisResults.summary.total} issues.`, 'INFO');
        
        if (analysisResults.summary.critical > 0) {
          this.log(`🚨 CRITICAL: ${analysisResults.summary.critical} critical security issues detected!`, 'ERROR');
        }
        
        if (analysisResults.summary.warning > 0) {
          this.log(`⚠️ WARNING: ${analysisResults.summary.warning} security warnings detected.`, 'WARN');
        }
      }
      
    } catch (error) {
      this.log(`CodeQL security scan failed: ${error.message}`, 'ERROR');
    } finally {
      this.isRunning = false;
    }
  }

  start() {
    this.log('CodeQL Security Scanner started', 'INFO');
    
    // Run immediately
    this.run();
    
    // Schedule recurring runs
    setInterval(() => {
      this.run();
    }, this.interval);
  }
}

// Start the automation if run directly
if (require.main === module) {
  const scanner = new CodeQLSecurityScanner();
  scanner.start();
}

module.exports = CodeQLSecurityScanner;