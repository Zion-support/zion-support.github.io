#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class SEOOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async runCommand(command, description = '') {
    try {
      this.log(`Running: ${description || command}`);
      const { stdout, stderr } = await execAsync(command, {
        cwd: this.projectRoot,
        timeout: 30000,
      });

      this.log(`✅ ${description || command} completed successfully`, 'SUCCESS');
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`❌ ${description || command} failed: ${error.message}`, 'ERROR');
      return { 
        success: false, 
        stdout: error.stdout || '', 
        stderr: error.stderr || error.message 
      };
    }
  }

  async checkMetaTags() {
    this.log('🏷️ Checking meta tags...');
    
    // Check for common meta tag files
    const metaFiles = [
      'app/layout.tsx',
      'app/page.tsx',
      'pages/_app.tsx',
      'pages/_document.tsx'
    ];

    const foundFiles = metaFiles.filter(file => fs.existsSync(path.join(this.projectRoot, file)));
    
    if (foundFiles.length === 0) {
      return {
        name: 'Meta Tags Check',
        status: 'warning',
        details: 'No common meta tag files found'
      };
    }

    // Basic check for meta tags in found files
    let hasMetaTags = false;
    for (const file of foundFiles) {
      const content = fs.readFileSync(path.join(this.projectRoot, file), 'utf8');
      if (content.includes('meta') || content.includes('title') || content.includes('description')) {
        hasMetaTags = true;
        break;
      }
    }

    return {
      name: 'Meta Tags Check',
      status: hasMetaTags ? 'pass' : 'warning',
      details: hasMetaTags ? 'Meta tags found in application files' : 'No meta tags found in common files'
    };
  }

  async checkSitemap() {
    this.log('🗺️ Checking sitemap...');
    
    const sitemapFiles = [
      'public/sitemap.xml',
      'app/sitemap.ts',
      'pages/sitemap.xml.js'
    ];

    const foundSitemap = sitemapFiles.find(file => fs.existsSync(path.join(this.projectRoot, file)));
    
    return {
      name: 'Sitemap Check',
      status: foundSitemap ? 'pass' : 'warning',
      details: foundSitemap ? `Sitemap found: ${foundSitemap}` : 'No sitemap found'
    };
  }

  async checkRobotsTxt() {
    this.log('🤖 Checking robots.txt...');
    
    const robotsPath = path.join(this.projectRoot, 'public', 'robots.txt');
    const exists = fs.existsSync(robotsPath);
    
    return {
      name: 'Robots.txt Check',
      status: exists ? 'pass' : 'warning',
      details: exists ? 'robots.txt found' : 'robots.txt not found'
    };
  }

  async checkStructuredData() {
    this.log('📊 Checking structured data...');
    
    // Check for common structured data files
    const structuredDataFiles = [
      'app/layout.tsx',
      'app/page.tsx',
      'components'
    ];

    let hasStructuredData = false;
    for (const file of structuredDataFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        if (fs.statSync(filePath).isDirectory()) {
          // Check directory for components with structured data
          const files = fs.readdirSync(filePath);
          for (const subFile of files) {
            if (subFile.endsWith('.tsx') || subFile.endsWith('.jsx')) {
              const content = fs.readFileSync(path.join(filePath, subFile), 'utf8');
              if (content.includes('application/ld+json') || content.includes('schema.org')) {
                hasStructuredData = true;
                break;
              }
            }
          }
        } else {
          const content = fs.readFileSync(filePath, 'utf8');
          if (content.includes('application/ld+json') || content.includes('schema.org')) {
            hasStructuredData = true;
            break;
          }
        }
      }
    }

    return {
      name: 'Structured Data Check',
      status: hasStructuredData ? 'pass' : 'warning',
      details: hasStructuredData ? 'Structured data found' : 'No structured data found'
    };
  }

  async generateSitemap() {
    this.log('🗺️ Generating sitemap...');
    
    // Check if sitemap generation script exists
    const sitemapScripts = [
      'scripts/generate-sitemap.js',
      'scripts/generate-sitemap.cjs',
      'scripts/generate-dynamic-sitemap.js'
    ];

    const foundScript = sitemapScripts.find(script => fs.existsSync(path.join(this.projectRoot, script)));
    
    if (foundScript) {
      const result = await this.runCommand(`node ${foundScript}`, 'Generate sitemap');
      return {
        name: 'Sitemap Generation',
        status: result.success ? 'completed' : 'failed',
        details: result.success ? 'Sitemap generated successfully' : result.stderr
      };
    } else {
      return {
        name: 'Sitemap Generation',
        status: 'skipped',
        details: 'No sitemap generation script found'
      };
    }
  }

  async runSEOOptimization() {
    this.log('🔍 Starting SEO optimization...');

    const optimizations = [
      await this.checkMetaTags(),
      await this.checkSitemap(),
      await this.checkRobotsTxt(),
      await this.checkStructuredData(),
      await this.generateSitemap()
    ];

    const passCount = optimizations.filter(opt => opt.status === 'pass' || opt.status === 'completed').length;
    const warningCount = optimizations.filter(opt => opt.status === 'warning').length;
    const failedCount = optimizations.filter(opt => opt.status === 'failed').length;
    const skippedCount = optimizations.filter(opt => opt.status === 'skipped').length;

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: optimizations.length,
        pass: passCount,
        warnings: warningCount,
        failed: failedCount,
        skipped: skippedCount
      },
      optimizations
    };

    const reportFile = path.join(this.reportsDir, `seo-optimizer-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📊 SEO optimization completed. ${passCount} passed, ${warningCount} warnings, ${failedCount} failed, ${skippedCount} skipped`, 'SUCCESS');
    this.log(`📄 Report saved to: ${reportFile}`, 'SUCCESS');
    
    return report;
  }
}

// CLI interface
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.runSEOOptimization().catch(error => {
    console.error('SEO optimization failed:', error);
    process.exit(1);
  });
}

module.exports = SEOOptimizer;