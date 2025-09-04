#!/usr/bin/env node

/**
 * PM2 Documentation Generator Script
 * Generates and updates project documentation
 */

import fs from 'fs';
import path from 'path';

class DocsGenerator {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator';
    this.autoGenerate = process.env.AUTO_GENERATE === 'true';
    this.updateReadme = process.env.UPDATE_README === 'true';
    this.apiDocs = process.env.API_DOCS === 'true';
    this.componentDocs = process.env.COMPONENT_DOCS === 'true';
    this.logFile = `logs/pm2/docs-generator.log`;
    this.errorFile = `logs/pm2/docs-generator-error.log`;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [${this.processName}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  error(message) {
    this.log(message, 'ERROR');
    fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);
  }

  async generateReadme() {
    this.log('Generating README documentation...');
    
    try {
      const readmeContent = `# Project Documentation

## Overview
This project uses PM2 for process management and automation.

## PM2 Processes
- auto-fix: Automated code fixing
- healthcheck: Health monitoring
- code-quality-monitor: Code quality monitoring
- auto-commit-fixes: Automated commit management
- dependency-monitor: Dependency monitoring
- performance-monitor: Performance monitoring
- test-automation: Test automation
- security-scanner: Security scanning
- build-optimizer: Build optimization
- git-workflow: Git workflow management
- health-monitor: System health monitoring
- docs-generator: Documentation generation
- seo-accessibility: SEO and accessibility checks

## Getting Started
1. Install dependencies: \`npm install\`
2. Start PM2 processes: \`pm2 start ecosystem.config.js\`
3. Monitor processes: \`pm2 monit\`

## Logs
Check logs in the \`logs/pm2/\` directory for detailed information.

Generated on: ${new Date().toISOString()}
`;

      fs.writeFileSync('README.md', readmeContent);
      this.log('README.md generated successfully');
      
      return { success: true, message: 'README generated' };
      
    } catch (error) {
      this.error(`README generation failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async generateComponentDocs() {
    this.log('Generating component documentation...');
    
    try {
      const components = this.findComponents();
      let componentDocs = '# Component Documentation\n\n';
      
      for (const component of components) {
        componentDocs += `## ${component.name}\n`;
        componentDocs += `**File:** \`${component.path}\`\n\n`;
        componentDocs += `**Type:** ${component.type}\n\n`;
        componentDocs += `**Description:** ${component.description || 'No description available'}\n\n`;
        componentDocs += '---\n\n';
      }
      
      fs.writeFileSync('docs/components.md', componentDocs);
      this.log(`Component documentation generated for ${components.length} components`);
      
      return { success: true, components: components.length };
      
    } catch (error) {
      this.error(`Component docs generation failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  findComponents() {
    const components = [];
    const extensions = ['.js', '.ts', '.jsx', '.tsx'];
    
    function scanDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              try {
                const content = fs.readFileSync(fullPath, 'utf8');
                const isComponent = content.includes('export default') || content.includes('function ') || content.includes('const ') && content.includes('=');
                
                if (isComponent) {
                  components.push({
                    name: item,
                    path: fullPath,
                    type: ext,
                    description: this.extractDescription(content)
                  });
                }
              } catch (err) {
                // Skip files that can't be read
              }
            }
          }
        }
      } catch (err) {
        // Skip directories that can't be read
      }
    }
    
    scanDirectory('src');
    return components;
  }

  extractDescription(content) {
    // Try to extract JSDoc comments or component descriptions
    const jsdocMatch = content.match(/\/\*\*\s*\n\s*\*\s*(.+?)\s*\n\s*\*\//);
    if (jsdocMatch) {
      return jsdocMatch[1].trim();
    }
    
    const commentMatch = content.match(/\/\/\s*(.+)/);
    if (commentMatch) {
      return commentMatch[1].trim();
    }
    
    return null;
  }

  async generateDocsReport() {
    this.log('Generating documentation report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      processName: this.processName,
      docs: {},
      summary: {}
    };
    
    try {
      // Generate documentation
      if (this.updateReadme) {
        report.docs.readme = await this.generateReadme();
      }
      
      if (this.componentDocs) {
        report.docs.components = await this.generateComponentDocs();
      }
      
      // Generate summary
      const readmeSuccess = report.docs.readme?.success || false;
      const componentsSuccess = report.docs.components?.success || false;
      
      report.summary = {
        readmeGenerated: readmeSuccess,
        componentsDocumented: componentsSuccess,
        overallStatus: readmeSuccess ? 'SUCCESS' : 'PARTIAL'
      };
      
      // Save report
      const reportFile = `reports/docs-generator-report-${Date.now()}.json`;
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`Documentation report saved to ${reportFile}`);
      
      return report;
      
    } catch (error) {
      this.error(`Failed to generate docs report: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async start() {
    this.log('Documentation generator service started');
    
    // Ensure directories exist
    fs.mkdirSync('logs/pm2', { recursive: true });
    fs.mkdirSync('reports', { recursive: true });
    fs.mkdirSync('docs', { recursive: true });
    
    // Run initial documentation generation
    await this.generateDocsReport();
    
    // Set up periodic documentation updates
    setInterval(async () => {
      this.log('Running scheduled documentation generation...');
      await this.generateDocsReport();
    }, 2 * 60 * 60 * 1000); // Every 2 hours
    
    this.log('Documentation generator service is running');
  }
}

// Start the service
if (require.main === module) {
  const docsGenerator = new DocsGenerator();
  docsGenerator.start().catch(error => {
    console.error('Documentation generator failed to start:', error);
    process.exit(1);
  });
}

export default DocsGenerator;