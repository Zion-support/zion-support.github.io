#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class LinkChecker {
  constructor() {
    this.internalLinks = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.existingPages = new Set();
  }

  async checkLinks() {
    console.log('🔍 Starting comprehensive link check...');
    
    // Get all existing pages
    this.scanForPages('/workspace/app');
    
    // Check all tsx files for internal links
    this.scanForLinks('/workspace/app');
    
    // Check for broken links
    this.checkBrokenLinks();
    
    // Generate report
    this.generateReport();
  }

  scanForPages(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        this.scanForPages(fullPath);
      } else if (item === 'page.tsx') {
        // Convert file path to URL
        const relativePath = fullPath.replace('/workspace/app', '');
        const url = relativePath.replace('/page.tsx', '') || '/';
        this.existingPages.add(url);
      }
    }
  }

  scanForLinks(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        this.scanForLinks(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        this.extractLinksFromFile(fullPath);
      }
    }
  }

  extractLinksFromFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Find href attributes
      const hrefMatches = content.match(/href=["']([^"']+)["']/g);
      if (hrefMatches) {
        hrefMatches.forEach(match => {
          const href = match.match(/href=["']([^"']+)["']/)[1];
          if (href.startsWith('/') && !href.startsWith('//')) {
            this.internalLinks.add(href);
          }
        });
      }
      
      // Find Link components
      const linkMatches = content.match(/<Link[^>]*href=["']([^"']+)["']/g);
      if (linkMatches) {
        linkMatches.forEach(match => {
          const href = match.match(/href=["']([^"']+)["']/)[1];
          if (href.startsWith('/') && !href.startsWith('//')) {
            this.internalLinks.add(href);
          }
        });
      }
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error.message);
    }
  }

  checkBrokenLinks() {
    console.log(`📋 Found ${this.internalLinks.size} internal links to check`);
    
    for (const link of this.internalLinks) {
      if (!this.existingPages.has(link)) {
        this.brokenLinks.push(link);
      }
    }
    
    // Check for pages that should exist but don't
    const expectedPages = [
      '/solutions',
      '/industries',
      '/pricing',
      '/resources',
      '/ai-services',
      '/ai-marketing',
      '/ai-automation',
      '/ai-healthcare',
      '/ai-fintech',
      '/ai-content-generation',
      '/ai-data-analytics',
      '/ai-cybersecurity',
      '/ai-workflow-automation',
      '/ai-customer-support',
      '/ai-sales-automation',
      '/ai-data-visualization',
      '/ai-ecommerce-solutions',
      '/ai-mobile-app-development',
      '/ai-document-processing',
      '/ai-lead-generation',
      '/it-services',
      '/it-infrastructure',
      '/cybersecurity',
      '/cloud-services',
      '/devops',
      '/database',
      '/networking',
      '/micro-saas',
      '/business-apps',
      '/productivity',
      '/marketing-tools',
      '/developer-tools',
      '/analytics-tools',
      '/quantum-computing',
      '/robotics',
      '/iot-edge-computing',
      '/blockchain-web3',
      '/business-intelligence',
      '/autonomous-systems',
      '/about',
      '/team',
      '/careers',
      '/case-studies',
      '/news',
      '/contact',
      '/docs',
      '/api-docs',
      '/support',
      '/status',
      '/privacy',
      '/terms',
      '/cookies',
      '/gdpr',
      '/compliance'
    ];
    
    for (const page of expectedPages) {
      if (!this.existingPages.has(page)) {
        this.missingPages.push(page);
      }
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalInternalLinks: this.internalLinks.size,
        totalExistingPages: this.existingPages.size,
        brokenLinks: this.brokenLinks.length,
        missingPages: this.missingPages.length
      },
      brokenLinks: this.brokenLinks,
      missingPages: this.missingPages,
      existingPages: Array.from(this.existingPages).sort(),
      recommendations: this.generateRecommendations()
    };

    // Save detailed report
    fs.writeFileSync(
      path.join(__dirname, 'link-check-report.json'),
      JSON.stringify(report, null, 2)
    );

    // Generate markdown report
    this.generateMarkdownReport(report);
    
    console.log('✅ Link check complete!');
    console.log(`📊 Summary: ${report.summary.totalInternalLinks} links, ${report.summary.brokenLinks} broken, ${report.summary.missingPages} missing pages`);
  }

  generateMarkdownReport(report) {
    let markdown = `# Link Check Report\n\n`;
    markdown += `**Generated:** ${new Date(report.timestamp).toLocaleString()}\n\n`;
    markdown += `## Summary\n\n`;
    markdown += `- **Total Internal Links:** ${report.summary.totalInternalLinks}\n`;
    markdown += `- **Existing Pages:** ${report.summary.totalExistingPages}\n`;
    markdown += `- **Broken Links:** ${report.summary.brokenLinks}\n`;
    markdown += `- **Missing Pages:** ${report.summary.missingPages}\n\n`;

    if (report.brokenLinks.length > 0) {
      markdown += `## 🚨 Broken Links\n\n`;
      report.brokenLinks.forEach(link => {
        markdown += `- ${link}\n`;
      });
      markdown += '\n';
    }

    if (report.missingPages.length > 0) {
      markdown += `## ⚠️ Missing Pages\n\n`;
      report.missingPages.forEach(page => {
        markdown += `- ${page}\n`;
      });
      markdown += '\n';
    }

    markdown += `## 📋 Recommendations\n\n`;
    report.recommendations.forEach(rec => {
      markdown += `- ${rec}\n`;
    });

    fs.writeFileSync(
      path.join(__dirname, 'link-check-report.md'),
      markdown
    );
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.brokenLinks.length > 0) {
      recommendations.push(`Fix ${this.brokenLinks.length} broken internal links`);
    }
    
    if (this.missingPages.length > 0) {
      recommendations.push(`Create ${this.missingPages.length} missing pages`);
    }
    
    recommendations.push('Implement proper 404 error handling');
    recommendations.push('Add redirects for common misspellings');
    recommendations.push('Regular link checking and maintenance');
    
    return recommendations;
  }
}

// Run link check
async function main() {
  const checker = new LinkChecker();
  await checker.checkLinks();
}

main().catch(console.error);